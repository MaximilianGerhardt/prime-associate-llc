import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/db'
import { newsletter } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/newsletter/unsubscribe?error=invalid', request.url))
  }

  try {
    const db = getDb()
    const [subscriber] = await db
      .select()
      .from(newsletter)
      .where(eq(newsletter.unsubscribeToken, token))
      .limit(1)

    if (!subscriber) {
      return NextResponse.redirect(new URL('/newsletter/unsubscribe?error=not_found', request.url))
    }

    await db
      .update(newsletter)
      .set({
        status: 'unsubscribed',
        unsubscribedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(newsletter.id, subscriber.id))

    return NextResponse.redirect(new URL('/newsletter/unsubscribe?success=true', request.url))
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.redirect(new URL('/newsletter/unsubscribe?error=server', request.url))
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = getDb()
    const { token, reason } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 })
    }

    const [subscriber] = await db
      .select()
      .from(newsletter)
      .where(eq(newsletter.unsubscribeToken, token))
      .limit(1)

    if (!subscriber) {
      return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 })
    }

    await db
      .update(newsletter)
      .set({
        status: 'unsubscribed',
        unsubscribedAt: new Date(),
        updatedAt: new Date(),
      })
      .where(eq(newsletter.id, subscriber.id))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Unsubscribe error:', error)
    return NextResponse.json({ error: 'Failed to unsubscribe' }, { status: 500 })
  }
}
