'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
  DndContext,
  DragOverlay,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
  useDroppable,
  useDraggable,
} from '@dnd-kit/core'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { 
  LogOut, RefreshCw, Building, Phone, Mail, DollarSign, 
  Clock, Globe, MessageSquare, X, Send, Star, Calendar,
  TrendingUp, Users, BarChart3, GripVertical
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface Lead {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  website: string | null
  revenue: string | null
  investment_range: string | null
  callback_time: string | null
  timezone: string | null
  message: string | null
  status: string
  created_at: string
}

interface Note {
  id: string
  lead_id: string
  content: string
  created_by: string | null
  created_at: string
}

const statusColumns = [
  { id: 'new', label: 'New', color: '#3B82F6' },
  { id: 'contacted', label: 'Contacted', color: '#F59E0B' },
  { id: 'qualified', label: 'Qualified', color: '#10B981' },
  { id: 'negotiation', label: 'Negotiation', color: '#8B5CF6' },
  { id: 'closed', label: 'Closed Won', color: '#C9A962' },
]

function DroppableColumn({ 
  id, 
  children, 
  label, 
  color, 
  count 
}: { 
  id: string
  children: React.ReactNode
  label: string
  color: string
  count: number
}) {
  const { setNodeRef, isOver } = useDroppable({ id })

  return (
    <div
      ref={setNodeRef}
      className={cn(
        'bg-[#111113] rounded-xl p-4 min-h-[600px] transition-all duration-200 border-2',
        isOver ? 'border-[#C9A962]/50 bg-[#18181B] shadow-lg shadow-[#C9A962]/10' : 'border-transparent'
      )}
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#222]">
        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
        <h2 className="font-medium text-[#FAFAFA]">{label}</h2>
        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-[#222] text-[#888]">
          {count}
        </span>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

function DraggableCard({ 
  lead, 
  onClick,
  isDragging 
}: { 
  lead: Lead
  onClick: () => void
  isDragging?: boolean
}) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    })
  }

  const getInvestmentColor = (range: string | null) => {
    if (!range) return 'text-[#666]'
    if (range.includes('10m')) return 'text-[#34D399]'
    if (range.includes('5m')) return 'text-[#10B981]'
    if (range.includes('3m')) return 'text-[#FBBF24]'
    return 'text-[#888]'
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-[#0C0C0E] border border-[#222] rounded-lg p-4 cursor-grab active:cursor-grabbing transition-all',
        'hover:border-[#C9A962]/30 hover:bg-[#0E0E10]',
        isDragging && 'opacity-50 shadow-2xl shadow-black/50 border-[#C9A962]/50 scale-105'
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <GripVertical className="w-3 h-3 text-[#444]" />
          <h3 className="font-medium text-[#FAFAFA] text-sm truncate">{lead.name}</h3>
        </div>
        {lead.investment_range && (
          <span className={cn('text-xs font-medium whitespace-nowrap', getInvestmentColor(lead.investment_range))}>
            {lead.investment_range}
          </span>
        )}
      </div>
      
      {lead.company && (
        <div className="flex items-center gap-1.5 mb-2 ml-5">
          <Building className="w-3 h-3 text-[#666]" />
          <p className="text-[#888] text-xs truncate">{lead.company}</p>
        </div>
      )}
      
      {lead.callback_time && (
        <div className="flex items-center gap-1.5 mb-2 ml-5">
          <Calendar className="w-3 h-3 text-[#C9A962]" />
          <p className="text-xs text-[#C9A962]">{lead.callback_time}</p>
        </div>
      )}
      
      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#222] ml-5">
        <p className="text-[#666] text-xs">{formatDate(lead.created_at)}</p>
        <div className="flex items-center gap-1.5">
          {lead.phone && <Phone className="w-3 h-3 text-[#666]" />}
          {lead.email && <Mail className="w-3 h-3 text-[#666]" />}
        </div>
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [notes, setNotes] = useState<Note[]>([])
  const [newNote, setNewNote] = useState('')
  const [savingNote, setSavingNote] = useState(false)
  const [activeLead, setActiveLead] = useState<Lead | null>(null)
  const router = useRouter()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching leads:', error)
    } else {
      setLeads(data || [])
    }
    setLoading(false)
  }, [])

  const fetchNotes = useCallback(async (leadId: string) => {
    const { data, error } = await supabase
      .from('lead_notes')
      .select('*')
      .eq('lead_id', leadId)
      .order('created_at', { ascending: false })

    if (!error && data) {
      setNotes(data)
    }
  }, [])

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin')
        return
      }
      fetchLeads()
    }
    checkAuth()
  }, [router, fetchLeads])

  useEffect(() => {
    if (selectedLead) {
      fetchNotes(selectedLead.id)
    }
  }, [selectedLead, fetchNotes])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin')
  }

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    await supabase
      .from('leads')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', leadId)
  }

  const handleDragStart = (event: DragStartEvent) => {
    const lead = leads.find(l => l.id === event.active.id)
    if (lead) setActiveLead(lead)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    setActiveLead(null)
    
    if (!over) return
    
    const leadId = active.id as string
    const newStatus = over.id as string
    
    const lead = leads.find(l => l.id === leadId)
    if (!lead || lead.status === newStatus) return
    
    // Optimistic update
    setLeads(prevLeads => 
      prevLeads.map(l => 
        l.id === leadId ? { ...l, status: newStatus } : l
      )
    )
    
    // Update server
    updateLeadStatus(leadId, newStatus)
  }

  const addNote = async () => {
    if (!selectedLead || !newNote.trim()) return
    
    setSavingNote(true)
    const { data, error } = await supabase
      .from('lead_notes')
      .insert({
        lead_id: selectedLead.id,
        content: newNote.trim(),
        created_by: 'Admin',
      })
      .select()
      .single()

    if (!error && data) {
      setNotes([data, ...notes])
      setNewNote('')
    }
    setSavingNote(false)
  }

  const getLeadsByStatus = (status: string) => {
    return leads.filter(lead => lead.status === status)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getInvestmentColor = (range: string | null) => {
    if (!range) return 'text-[#666]'
    if (range.includes('10m')) return 'text-[#34D399]'
    if (range.includes('5m')) return 'text-[#10B981]'
    if (range.includes('3m')) return 'text-[#FBBF24]'
    return 'text-[#888]'
  }

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    qualified: leads.filter(l => l.status === 'qualified').length,
    closed: leads.filter(l => l.status === 'closed').length,
  }

  return (
    <div className="min-h-screen bg-[#08080A]">
      <header className="border-b border-[#1a1a1a] px-6 py-4 bg-[#0C0C0E]">
        <div className="flex items-center justify-between max-w-[1800px] mx-auto">
          <div className="flex items-center gap-8">
            <div>
              <h1 className="font-serif text-2xl text-[#FAFAFA]">CRM Dashboard</h1>
              <p className="text-[#666] text-sm">Prime Associate Lead Management</p>
            </div>
            
            <div className="hidden lg:flex items-center gap-4 ml-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
                <Users className="w-4 h-4 text-[#C9A962]" />
                <span className="text-sm text-[#888]">Total</span>
                <span className="text-lg font-medium text-[#FAFAFA]">{stats.total}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
                <TrendingUp className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm text-[#888]">New</span>
                <span className="text-lg font-medium text-[#FAFAFA]">{stats.new}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
                <Star className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm text-[#888]">Qualified</span>
                <span className="text-lg font-medium text-[#FAFAFA]">{stats.qualified}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
                <BarChart3 className="w-4 h-4 text-[#C9A962]" />
                <span className="text-sm text-[#888]">Closed</span>
                <span className="text-lg font-medium text-[#FAFAFA]">{stats.closed}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={fetchLeads} disabled={loading} className="gap-2">
              <RefreshCw className={cn('w-4 h-4', loading && 'animate-spin')} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
            <Button variant="secondary" onClick={handleLogout} className="gap-2">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-[1800px] mx-auto">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {statusColumns.map((column) => (
              <DroppableColumn
                key={column.id}
                id={column.id}
                label={column.label}
                color={column.color}
                count={getLeadsByStatus(column.id).length}
              >
                {getLeadsByStatus(column.id).map((lead) => (
                  <div key={lead.id} data-lead-id={lead.id}>
                    <DraggableItem id={lead.id}>
                      <DraggableCard
                        lead={lead}
                        onClick={() => setSelectedLead(lead)}
                        isDragging={activeLead?.id === lead.id}
                      />
                    </DraggableItem>
                  </div>
                ))}
                {getLeadsByStatus(column.id).length === 0 && (
                  <div className="text-center py-12 text-[#444]">
                    <p className="text-sm">Drop leads here</p>
                  </div>
                )}
              </DroppableColumn>
            ))}
          </div>

          <DragOverlay>
            {activeLead ? (
              <div className="opacity-90 scale-105 rotate-2">
                <DraggableCard
                  lead={activeLead}
                  onClick={() => {}}
                  isDragging
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 bg-[#08080A]/95 backdrop-blur-md flex items-start justify-end z-50">
          <div className="w-full max-w-2xl h-full bg-[#0C0C0E] border-l border-[#222] overflow-y-auto">
            <div className="sticky top-0 bg-[#0C0C0E]/95 backdrop-blur-sm border-b border-[#222] p-6 z-10">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-serif text-2xl text-[#FAFAFA]">{selectedLead.name}</h2>
                  {selectedLead.company && (
                    <p className="text-[#888] mt-1">{selectedLead.company}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-2 hover:bg-[#222] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#888]" />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {statusColumns.map((status) => (
                  <button
                    key={status.id}
                    onClick={() => {
                      setLeads(leads.map(l => l.id === selectedLead.id ? { ...l, status: status.id } : l))
                      setSelectedLead({ ...selectedLead, status: status.id })
                      updateLeadStatus(selectedLead.id, status.id)
                    }}
                    className={cn(
                      'px-3 py-1.5 text-xs font-medium rounded-full border transition-all',
                      selectedLead.status === status.id
                        ? 'text-[#0A0A0A] border-transparent'
                        : 'border-[#333] text-[#888] hover:border-[#555] hover:text-[#FAFAFA]'
                    )}
                    style={selectedLead.status === status.id ? { backgroundColor: status.color } : {}}
                  >
                    {status.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`mailto:${selectedLead.email}`}
                  className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#C9A962]/30 transition-colors group"
                >
                  <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                    <Mail className="w-4 h-4 text-[#C9A962]" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#666]">Email</p>
                    <p className="text-[#FAFAFA] text-sm truncate group-hover:text-[#C9A962] transition-colors">
                      {selectedLead.email}
                    </p>
                  </div>
                </a>

                {selectedLead.phone && (
                  <a 
                    href={`tel:${selectedLead.phone}`}
                    className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#10B981]/30 transition-colors group"
                  >
                    <div className="p-2 bg-[#10B981]/10 rounded-lg">
                      <Phone className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666]">Phone</p>
                      <p className="text-[#FAFAFA] text-sm group-hover:text-[#10B981] transition-colors">
                        {selectedLead.phone}
                      </p>
                    </div>
                  </a>
                )}

                {selectedLead.website && (
                  <a 
                    href={selectedLead.website.startsWith('http') ? selectedLead.website : `https://${selectedLead.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222] hover:border-[#3B82F6]/30 transition-colors group"
                  >
                    <div className="p-2 bg-[#3B82F6]/10 rounded-lg">
                      <Globe className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-[#666]">Website</p>
                      <p className="text-[#FAFAFA] text-sm truncate group-hover:text-[#3B82F6] transition-colors">
                        {selectedLead.website}
                      </p>
                    </div>
                  </a>
                )}

                {selectedLead.investment_range && (
                  <div className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222]">
                    <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                      <DollarSign className="w-4 h-4 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666]">Investment</p>
                      <p className={cn('text-sm font-medium', getInvestmentColor(selectedLead.investment_range))}>
                        {selectedLead.investment_range}
                      </p>
                    </div>
                  </div>
                )}

                {selectedLead.revenue && (
                  <div className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#222]">
                    <div className="p-2 bg-[#8B5CF6]/10 rounded-lg">
                      <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666]">Revenue</p>
                      <p className="text-[#FAFAFA] text-sm">{selectedLead.revenue}</p>
                    </div>
                  </div>
                )}

                {selectedLead.callback_time && (
                  <div className="flex items-center gap-3 p-4 bg-[#111] rounded-lg border border-[#C9A962]/30">
                    <div className="p-2 bg-[#C9A962]/10 rounded-lg">
                      <Clock className="w-4 h-4 text-[#C9A962]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#666]">Callback</p>
                      <p className="text-[#C9A962] text-sm font-medium">
                        {selectedLead.callback_time} ({selectedLead.timezone})
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {selectedLead.message && (
                <div className="p-4 bg-[#111] rounded-lg border border-[#222]">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-4 h-4 text-[#666]" />
                    <p className="text-xs text-[#666] uppercase tracking-wider">Message</p>
                  </div>
                  <p className="text-[#FAFAFA] text-sm leading-relaxed">{selectedLead.message}</p>
                </div>
              )}

              <div className="border-t border-[#222] pt-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-[#FAFAFA] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#C9A962]" />
                    Notes
                  </h3>
                  <span className="text-xs text-[#666]">{notes.length} notes</span>
                </div>

                <div className="flex gap-2 mb-4">
                  <Textarea
                    placeholder="Add a note..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    rows={2}
                    className="flex-1 bg-[#111] border-[#222] text-[#FAFAFA] placeholder:text-[#555]"
                  />
                  <Button 
                    onClick={addNote} 
                    disabled={!newNote.trim() || savingNote}
                    className="self-end bg-[#C9A962] hover:bg-[#C9A962]/90 text-[#0A0A0A]"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {notes.map((note) => (
                    <div key={note.id} className="p-3 bg-[#111]/50 rounded-lg border border-[#1a1a1a]">
                      <p className="text-sm text-[#FAFAFA]">{note.content}</p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs text-[#666]">{note.created_by || 'Admin'}</p>
                        <p className="text-xs text-[#666]">{formatDate(note.created_at)}</p>
                      </div>
                    </div>
                  ))}
                  {notes.length === 0 && (
                    <p className="text-center text-[#666] text-sm py-4">No notes yet</p>
                  )}
                </div>
              </div>

              <div className="text-xs text-[#666] border-t border-[#222] pt-4">
                Created: {formatDate(selectedLead.created_at)}
              </div>
            </div>
          </div>
          
          <div 
            className="flex-1 h-full cursor-pointer"
            onClick={() => setSelectedLead(null)}
          />
        </div>
      )}
    </div>
  )
}

function DraggableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id })
  
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1000 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}
