import { pgTable, text, timestamp, uuid, varchar, boolean, integer } from 'drizzle-orm/pg-core'

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
  firstName: varchar('first_name', { length: 100 }),
  status: varchar('status', { length: 50 }).default('active'),
  funnelStage: integer('funnel_stage').default(0).notNull(),
  lastEmailSent: timestamp('last_email_sent'),
  nextEmailAt: timestamp('next_email_at'),
  source: varchar('source', { length: 100 }).default('website'),
  utmSource: varchar('utm_source', { length: 100 }),
  utmMedium: varchar('utm_medium', { length: 100 }),
  utmCampaign: varchar('utm_campaign', { length: 100 }),
  consentGiven: boolean('consent_given').default(false).notNull(),
  consentTimestamp: timestamp('consent_timestamp'),
  consentIp: varchar('consent_ip', { length: 45 }),
  doubleOptInToken: varchar('double_opt_in_token', { length: 64 }),
  doubleOptInConfirmed: boolean('double_opt_in_confirmed').default(false),
  doubleOptInAt: timestamp('double_opt_in_at'),
  unsubscribeToken: varchar('unsubscribe_token', { length: 64 }),
  unsubscribedAt: timestamp('unsubscribed_at'),
  convertedToLead: boolean('converted_to_lead').default(false),
  leadId: uuid('lead_id').references(() => leads.id),
  totalEmailsSent: integer('total_emails_sent').default(0),
  totalEmailsOpened: integer('total_emails_opened').default(0),
  totalEmailsClicked: integer('total_emails_clicked').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})

export const emailEvents = pgTable('email_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  subscriberId: uuid('subscriber_id').references(() => newsletter.id, { onDelete: 'cascade' }),
  emailType: varchar('email_type', { length: 50 }).notNull(),
  emailNumber: integer('email_number'),
  eventType: varchar('event_type', { length: 50 }).notNull(),
  metadata: text('metadata'),
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
export type NewNewsletterSubscriber = typeof newsletter.$inferInsert
export type EmailEvent = typeof emailEvents.$inferSelect
export type NewEmailEvent = typeof emailEvents.$inferInsert
export type LeadNote = typeof leadNotes.$inferSelect
