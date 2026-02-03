import { NextResponse } from 'next/server'
import { db } from '@/db'
import { leads } from '@/db/schema'
import { sendLeadNotification, sendLeadConfirmation } from '@/lib/resend'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  revenue: z.string().optional(),
  investmentRange: z.string().optional(),
  callbackTime: z.string().optional(),
  timezone: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const result = leadSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.issues },
        { status: 400 }
      )
    }

    const data = result.data

    const [lead] = await db.insert(leads).values({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company: data.company || null,
      website: data.website || null,
      revenue: data.revenue || null,
      investmentRange: data.investmentRange || null,
      callbackTime: data.callbackTime || null,
      timezone: data.timezone || null,
      message: data.message || null,
      source: 'website',
      status: 'new',
    }).returning()

    await Promise.all([
      sendLeadNotification({ 
        name: data.name, 
        email: data.email, 
        company: data.company,
        investmentRange: data.investmentRange,
        message: data.message,
        phone: data.phone,
        callbackTime: data.callbackTime,
        timezone: data.timezone,
      }),
      sendLeadConfirmation({ name: data.name, email: data.email }),
    ])

    return NextResponse.json({ success: true, id: lead.id })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
