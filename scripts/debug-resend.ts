import { config } from 'dotenv'
config({ path: '.env.local' })

import { Resend } from 'resend'

const apiKey = process.env.RESEND_API_KEY
console.log('RESEND_API_KEY present:', !!apiKey)
console.log('API Key prefix:', apiKey?.substring(0, 10) + '...')

const resend = new Resend(apiKey)

async function sendTestEmail() {
  console.log('\n📧 Sending direct test email via Resend...\n')
  
  try {
    const result = await resend.emails.send({
      from: 'Prime Associates <insights@mail.p-a.llc>',
      to: ['info@p-a.llc'],
      subject: '🧪 TEST: Resend funktioniert!',
      html: `
        <div style="font-family: sans-serif; padding: 20px; background: #0A0A0A; color: #FAFAFA;">
          <h1 style="color: #C9A962;">Test Email</h1>
          <p>Diese Email wurde direkt über Resend gesendet.</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      `,
    })

    console.log('Result:', JSON.stringify(result, null, 2))
    
    if (result.error) {
      console.log('\n❌ Error:', result.error)
    } else {
      console.log('\n✅ Email sent! ID:', result.data?.id)
    }
  } catch (error) {
    console.log('\n❌ Exception:', error)
  }
}

sendTestEmail()
