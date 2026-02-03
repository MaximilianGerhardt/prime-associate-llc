import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  console.warn('DATABASE_URL not configured')
}

const client = connectionString 
  ? postgres(connectionString, { 
      prepare: false,
      ssl: 'require',
    })
  : null

export const db = client ? drizzle(client, { schema }) : null

export function getDb() {
  if (!db) {
    throw new Error('Database not configured. Please set DATABASE_URL environment variable.')
  }
  return db
}
