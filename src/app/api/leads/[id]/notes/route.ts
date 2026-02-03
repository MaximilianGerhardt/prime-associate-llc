import { NextResponse } from 'next/server'
import { getDb } from '@/db'
import { leadNotes } from '@/db/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb()
    const { id } = await params
    const notes = await db
      .select()
      .from(leadNotes)
      .where(eq(leadNotes.leadId, id))
      .orderBy(desc(leadNotes.createdAt))
    
    return NextResponse.json(notes)
  } catch (error) {
    console.error('Error fetching notes:', error)
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 })
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb()
    const { id } = await params
    const { content, createdBy } = await request.json()
    
    const [note] = await db
      .insert(leadNotes)
      .values({
        leadId: id,
        content,
        createdBy,
      })
      .returning()

    return NextResponse.json(note)
  } catch (error) {
    console.error('Error creating note:', error)
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}
