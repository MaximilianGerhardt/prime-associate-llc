import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const leads = pgTable('leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  company: varchar('company', { length: 255 }),
  website: varchar('website', { length: 255 }),
  revenue: varchar('revenue', { length: 100 }),
  investmentRange: varchar('investment_range', { length: 100 }),
  callbackTime: varchar('callback_time', { length: 50 }),
  timezone: varchar('timezone', { length: 50 }),
  message: text('message'),
  source: varchar('source', { length: 100 }).default('website'),
  status: varchar('status', { length: 50 }).default('new'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const newsletter = pgTable('newsletter', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  status: varchar('status', { length: 50 }).default('active'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const leadNotes = pgTable('lead_notes', {
  id: uuid('id').defaultRandom().primaryKey(),
  leadId: uuid('lead_id').notNull().references(() => leads.id, { onDelete: 'cascade' }),
  content: text('content').notNull(),
  createdBy: varchar('created_by', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert
export type NewsletterSubscriber = typeof newsletter.$inferSelect
export type LeadNote = typeof leadNotes.$inferSelect
