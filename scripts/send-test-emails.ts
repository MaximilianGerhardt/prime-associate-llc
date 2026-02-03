import { config } from 'dotenv'
config({ path: '.env.local' })

import { Resend } from 'resend'
import {
  sendWelcomeEmail,
  sendNurturingEmail1,
  sendNurturingEmail2,
  sendNurturingEmail3,
  sendNurturingEmail4,
  sendNurturingEmail5,
} from '../src/lib/newsletter-emails'

const TEST_EMAIL = 'info@p-a.llc'
const TEST_FIRST_NAME = 'Test'
const UNSUBSCRIBE_TOKEN = 'test-token-12345'

async function sendAllTestEmails() {
  console.log('🚀 Starting to send all test emails to:', TEST_EMAIL)
  console.log('-------------------------------------------\n')

  const emails = [
    { name: 'Welcome Email', fn: sendWelcomeEmail },
    { name: 'Nurturing Email 1 - $2.3M Framework', fn: sendNurturingEmail1 },
    { name: 'Nurturing Email 2 - 3 AI Blind Spots', fn: sendNurturingEmail2 },
    { name: 'Nurturing Email 3 - ROI Calculator', fn: sendNurturingEmail3 },
    { name: 'Nurturing Email 4 - Case Study', fn: sendNurturingEmail4 },
    { name: 'Nurturing Email 5 - Final Invitation', fn: sendNurturingEmail5 },
  ]

  for (let i = 0; i < emails.length; i++) {
    const { name, fn } = emails[i]
    console.log(`📧 [${i + 1}/${emails.length}] Sending: ${name}...`)
    
    try {
      const result = await fn({
        email: TEST_EMAIL,
        firstName: TEST_FIRST_NAME,
        unsubscribeToken: UNSUBSCRIBE_TOKEN,
      })

      if (result.error) {
        console.log(`   ❌ Error: ${result.error}`)
      } else {
        console.log(`   ✅ Sent successfully!`)
      }
    } catch (error) {
      console.log(`   ❌ Error: ${error}`)
    }

    // Small delay between emails to avoid rate limiting
    if (i < emails.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log('\n-------------------------------------------')
  console.log('✅ All test emails sent!')
}

sendAllTestEmails().catch(console.error)
