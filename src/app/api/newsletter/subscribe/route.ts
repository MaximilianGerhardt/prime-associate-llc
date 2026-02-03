import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/db'
import { newsletter, leads } from '@/db/schema'
import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { sendWelcomeEmail } from '@/lib/newsletter-emails'
import { generateToken } from '@/lib/utils'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  source: z.string().optional().default('website'),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const db = getDb()
    const body = await request.json()
    const validated = subscribeSchema.parse(body)

    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || 
                     'unknown'

    const existingSubscriber = await db
      .select()
      .from(newsletter)
      .where(eq(newsletter.email, validated.email.toLowerCase()))
      .limit(1)

    if (existingSubscriber.length > 0) {
      const subscriber = existingSubscriber[0]
      
      if (subscriber.status === 'unsubscribed') {
        const unsubscribeToken = generateToken()
        await db
          .update(newsletter)
          .set({
            status: 'active',
            funnelStage: 0,
            unsubscribedAt: null,
            unsubscribeToken,
            updatedAt: new Date(),
          })
          .where(eq(newsletter.id, subscriber.id))

        await sendWelcomeEmail({
          email: validated.email,
          firstName: subscriber.firstName || undefined,
          unsubscribeToken,
        })

        return NextResponse.json({
          success: true,
          message: 'Welcome back! You have been re-subscribed.',
          isResubscribe: true,
        })
      }

      if (subscriber.convertedToLead) {
        return NextResponse.json({
          success: true,
          message: 'You are already part of our elite community.',
          alreadyLead: true,
        })
      }

      return NextResponse.json({
        success: true,
        message: 'You are already subscribed.',
        alreadySubscribed: true,
      })
    }

    const existingLead = await db
      .select()
      .from(leads)
      .where(eq(leads.email, validated.email.toLowerCase()))
      .limit(1)

    const doubleOptInToken = generateToken()
    const unsubscribeToken = generateToken()

    const [newSubscriber] = await db
      .insert(newsletter)
      .values({
        email: validated.email.toLowerCase(),
        firstName: validated.firstName,
        source: validated.source,
        utmSource: validated.utmSource,
        utmMedium: validated.utmMedium,
        utmCampaign: validated.utmCampaign,
        consentGiven: true,
        consentTimestamp: new Date(),
        consentIp: clientIp,
        doubleOptInToken,
        unsubscribeToken,
        convertedToLead: existingLead.length > 0,
        leadId: existingLead.length > 0 ? existingLead[0].id : null,
        nextEmailAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      })
      .returning()

    await sendWelcomeEmail({
      email: validated.email,
      firstName: validated.firstName,
      unsubscribeToken,
      doubleOptInToken,
    })

    return NextResponse.json({
      success: true,
      message: 'Thank you for subscribing! Check your inbox.',
      subscriberId: newSubscriber.id,
      isExistingLead: existingLead.length > 0,
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.issues[0].message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
