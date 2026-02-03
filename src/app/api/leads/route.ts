import { NextResponse } from 'next/server'
import { getDb } from '@/db'
import { leads, leadNotes } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET() {
  try {
    const db = getDb()
    const allLeads = await db.select().from(leads).orderBy(desc(leads.createdAt))
    return NextResponse.json(allLeads)
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const db = getDb()
    const { id, status, priority, score } = await request.json()
    
    const [updated] = await db
      .update(leads)
      .set({ 
        status, 
        updatedAt: new Date(),
      })
      .where(eq(leads.id, id))
      .returning()

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 })
  }
}
