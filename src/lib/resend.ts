import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendLeadNotification(data: {
  name: string
  email: string
  company?: string
  message?: string
  investmentRange?: string
  phone?: string
  callbackTime?: string
  timezone?: string
}) {
  return resend.emails.send({
    from: 'Prime Associate <notifications@primeassociate.com>',
    to: ['inquiries@primeassociate.com'],
    subject: `🔔 New Lead: ${data.name} - ${data.company || 'Individual'} - ${data.investmentRange || 'No range'}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #FAFAFA; padding: 40px;">
        <h1 style="color: #C9A962; font-size: 24px; margin-bottom: 24px;">New Lead Submission</h1>
        <hr style="border: 1px solid #C9A962; margin: 20px 0;" />
        
        <h3 style="color: #C9A962; margin-top: 20px;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        
        ${data.company ? `
        <h3 style="color: #C9A962; margin-top: 20px;">Company</h3>
        <p><strong>Company:</strong> ${data.company}</p>
        ` : ''}
        
        ${data.investmentRange ? `
        <h3 style="color: #C9A962; margin-top: 20px;">Investment</h3>
        <p><strong>Investment Range:</strong> ${data.investmentRange}</p>
        ` : ''}
        
        ${data.callbackTime || data.timezone ? `
        <h3 style="color: #C9A962; margin-top: 20px;">Callback Preference</h3>
        ${data.callbackTime ? `<p><strong>Preferred Time:</strong> ${data.callbackTime}</p>` : ''}
        ${data.timezone ? `<p><strong>Timezone:</strong> ${data.timezone}</p>` : ''}
        ` : ''}
        
        ${data.message ? `
        <h3 style="color: #C9A962; margin-top: 20px;">Message</h3>
        <p>${data.message}</p>
        ` : ''}
        
        <hr style="border: 1px solid #C9A962; margin: 20px 0;" />
        <p style="color: #6B6B6B; font-size: 12px;">Prime Associate LLC - Lead Generation System</p>
        <p style="color: #C9A962; font-size: 14px; margin-top: 10px;">
          <a href="https://primeassociate.com/admin" style="color: #C9A962;">View in Admin Dashboard →</a>
        </p>
      </div>
    `,
  })
}

export async function sendLeadConfirmation(data: {
  name: string
  email: string
}) {
  return resend.emails.send({
    from: 'Prime Associate <hello@primeassociate.com>',
    to: [data.email],
    subject: 'Your inquiry has been received - Prime Associate',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #FAFAFA; padding: 40px;">
        <h1 style="color: #C9A962; font-size: 24px; margin-bottom: 24px;">Prime Associate</h1>
        <p>Dear ${data.name},</p>
        <p>Your inquiry has been received. A member of our team will review your submission and respond within 48 hours if there is alignment.</p>
        <p>We operate on invitation and qualification. Not every inquiry proceeds—this is by design.</p>
        <br />
        <p style="color: #C9A962;">Time is the ultimate currency. We don't waste yours.</p>
        <br />
        <p style="color: #6B6B6B; font-size: 12px;">Prime Associate LLC</p>
      </div>
    `,
  })
}
