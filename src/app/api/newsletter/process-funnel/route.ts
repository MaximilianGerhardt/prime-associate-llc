import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/db'
import { newsletter, emailEvents } from '@/db/schema'
import { eq, and, lte, isNotNull } from 'drizzle-orm'
import { NURTURING_EMAILS } from '@/lib/newsletter-emails'

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const db = getDb()
    const now = new Date()
    
    const subscribersToEmail = await db
      .select()
      .from(newsletter)
      .where(
        and(
          eq(newsletter.status, 'active'),
          lte(newsletter.nextEmailAt, now),
          isNotNull(newsletter.nextEmailAt)
        )
      )
      .limit(50)

    const results = {
      processed: 0,
      sent: 0,
      completed: 0,
      errors: 0,
    }

    for (const subscriber of subscribersToEmail) {
      results.processed++
      
      const currentStage = subscriber.funnelStage
      const nextEmail = NURTURING_EMAILS.find(e => e.id === currentStage + 1)

      if (!nextEmail) {
        await db
          .update(newsletter)
          .set({
            nextEmailAt: null,
            updatedAt: new Date(),
          })
          .where(eq(newsletter.id, subscriber.id))
        results.completed++
        continue
      }

      try {
        const emailResult = await nextEmail.fn({
          email: subscriber.email,
          firstName: subscriber.firstName || undefined,
          unsubscribeToken: subscriber.unsubscribeToken || '',
        })

        if (emailResult.error) {
          console.error(`Email send error for ${subscriber.email}:`, emailResult.error)
          results.errors++
          continue
        }

        const nextEmailInSequence = NURTURING_EMAILS.find(e => e.id === currentStage + 2)
        const nextEmailAt = nextEmailInSequence 
          ? new Date(now.getTime() + (nextEmailInSequence.delayDays - nextEmail.delayDays) * 24 * 60 * 60 * 1000)
          : null

        await db
          .update(newsletter)
          .set({
            funnelStage: currentStage + 1,
            lastEmailSent: now,
            nextEmailAt,
            totalEmailsSent: (subscriber.totalEmailsSent || 0) + 1,
            updatedAt: new Date(),
          })
          .where(eq(newsletter.id, subscriber.id))

        await db.insert(emailEvents).values({
          subscriberId: subscriber.id,
          emailType: 'nurturing',
          emailNumber: nextEmail.id,
          eventType: 'sent',
          metadata: JSON.stringify({ subject: nextEmail.subject }),
        })

        results.sent++
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error)
        results.errors++
      }
    }

    return NextResponse.json({
      success: true,
      ...results,
      timestamp: now.toISOString(),
    })
  } catch (error) {
    console.error('Funnel processing error:', error)
    return NextResponse.json(
      { error: 'Failed to process funnel' },
      { status: 500 }
    )
  }
}
