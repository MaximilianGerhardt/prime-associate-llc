import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

export const resend = resendApiKey ? new Resend(resendApiKey) : null

const ADMIN_EMAIL = 'info@p-a.llc'

const emailFooter = `
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
    <table style="width: 100%;">
      <tr>
        <td style="vertical-align: top;">
          <p style="color: #C9A962; font-size: 16px; margin: 0 0 8px 0; font-family: Georgia, serif;">
            Prime <span style="color: #C9A962;">Associates</span> <span style="color: #666; font-size: 12px;">LLC</span>
          </p>
          <p style="color: #666; font-size: 11px; margin: 0; line-height: 1.6;">
            23160 Fashion Dr Ste 220<br />
            Estero, FL 33928<br />
            United States
          </p>
        </td>
        <td style="vertical-align: top; text-align: right;">
          <p style="color: #666; font-size: 10px; margin: 0;">
            EIN: 41-3650497
          </p>
        </td>
      </tr>
    </table>
    <p style="color: #444; font-size: 10px; margin-top: 16px; text-align: center;">
      This is a transactional email regarding your inquiry submission.<br />
      © ${new Date().getFullYear()} Prime Associates LLC. All rights reserved.
    </p>
  </div>
`

export async function sendAdminNotification(data: {
  name: string
  email: string
  company?: string
  message?: string
  investmentRange?: string
  phone?: string
  callbackTime?: string
  timezone?: string
  website?: string
  revenue?: string
}) {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  if (!resend) {
    console.warn('Resend API key not configured, skipping email')
    return { data: null, error: null }
  }

  return resend.emails.send({
    from: 'Prime Associates <notifications@mail.p-a.llc>',
    to: [ADMIN_EMAIL],
    subject: `🔔 New Application: ${data.name} | ${data.company || 'Individual'} | ${data.investmentRange || 'Not specified'}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #FAFAFA; padding: 40px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #C9A962; font-size: 28px; margin: 0; font-family: Georgia, serif;">
            New Application Received
          </h1>
          <p style="color: #666; font-size: 12px; margin-top: 8px;">${timestamp} EST</p>
        </div>

        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Contact Information</h3>
          <table style="width: 100%; color: #FAFAFA;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #C9A962;">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Phone</td>
              <td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #C9A962;">${data.phone}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>

        ${data.company || data.website || data.revenue ? `
        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Company Details</h3>
          <table style="width: 100%; color: #FAFAFA;">
            ${data.company ? `
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Company</td>
              <td style="padding: 8px 0; font-weight: 600;">${data.company}</td>
            </tr>
            ` : ''}
            ${data.website ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Website</td>
              <td style="padding: 8px 0;"><a href="${data.website.startsWith('http') ? data.website : 'https://' + data.website}" style="color: #C9A962;" target="_blank">${data.website}</a></td>
            </tr>
            ` : ''}
            ${data.revenue ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Revenue</td>
              <td style="padding: 8px 0;">${data.revenue}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        ` : ''}

        ${data.investmentRange ? `
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 24px; margin-bottom: 20px; text-align: center;">
          <p style="color: #888; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Investment Interest</p>
          <p style="color: #C9A962; margin: 0; font-size: 24px; font-weight: 600;">${data.investmentRange}</p>
        </div>
        ` : ''}

        ${data.callbackTime || data.timezone ? `
        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Callback Preference</h3>
          <table style="width: 100%; color: #FAFAFA;">
            ${data.callbackTime ? `
            <tr>
              <td style="padding: 8px 0; color: #888; width: 120px;">Preferred Time</td>
              <td style="padding: 8px 0;">${data.callbackTime}</td>
            </tr>
            ` : ''}
            ${data.timezone ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Timezone</td>
              <td style="padding: 8px 0;">${data.timezone}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        ` : ''}

        ${data.message ? `
        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Message</h3>
          <p style="color: #FAFAFA; line-height: 1.6; margin: 0;">${data.message}</p>
        </div>
        ` : ''}

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://p-a.llc/admin/dashboard" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 14px 32px; text-decoration: none; font-weight: 600; border-radius: 4px;">
            View in CRM Dashboard →
          </a>
        </div>

        ${emailFooter}
      </div>
    `,
  })
}

export async function sendCustomerConfirmation(data: {
  name: string
  email: string
  company?: string
  investmentRange?: string
}) {
  if (!resend) {
    console.warn('Resend API key not configured, skipping email')
    return { data: null, error: null }
  }

  return resend.emails.send({
    from: 'Prime Associates <hello@mail.p-a.llc>',
    to: [data.email],
    replyTo: ADMIN_EMAIL,
    subject: 'Application Received - Prime Associates LLC',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #FAFAFA; padding: 40px;">
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #FAFAFA; font-size: 32px; margin: 0; font-family: Georgia, serif;">
            Prime <span style="color: #C9A962;">Associates</span>
          </h1>
          <p style="color: #666; font-size: 12px; margin-top: 8px; letter-spacing: 2px;">GLOBAL AI BUSINESS ACCELERATOR</p>
        </div>

        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 32px; margin-bottom: 24px;">
          <p style="color: #FAFAFA; font-size: 18px; margin: 0 0 16px 0;">
            Dear ${data.name},
          </p>
          
          <p style="color: #CCCCCC; line-height: 1.8; margin: 0 0 16px 0;">
            Thank you for your interest in Prime Associates LLC. We have successfully received your application.
          </p>

          <div style="background: #0A0A0A; border-left: 3px solid #C9A962; padding: 16px 20px; margin: 24px 0;">
            <p style="color: #C9A962; margin: 0; font-size: 14px; font-style: italic;">
              "We operate on qualification and alignment. If there is a fit, a member of our team will reach out within 48 business hours."
            </p>
          </div>

          <p style="color: #CCCCCC; line-height: 1.8; margin: 0;">
            Please note that due to high volume, not every application proceeds to the next stage. This selectivity is by design—it ensures that our resources are focused on ventures where we can deliver maximum impact.
          </p>
        </div>

        <div style="background: #111; border: 1px solid #222; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Your Submission Summary</h3>
          <table style="width: 100%; color: #FAFAFA;">
            <tr>
              <td style="padding: 8px 0; color: #888; width: 140px;">Name</td>
              <td style="padding: 8px 0;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #888;">Email</td>
              <td style="padding: 8px 0;">${data.email}</td>
            </tr>
            ${data.company ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Company</td>
              <td style="padding: 8px 0;">${data.company}</td>
            </tr>
            ` : ''}
            ${data.investmentRange ? `
            <tr>
              <td style="padding: 8px 0; color: #888;">Investment Interest</td>
              <td style="padding: 8px 0; color: #C9A962;">${data.investmentRange}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="text-align: center; padding: 20px 0;">
          <p style="color: #888; font-size: 14px; margin: 0;">
            Questions? Reply directly to this email or contact us at<br />
            <a href="mailto:info@p-a.llc" style="color: #C9A962;">info@p-a.llc</a>
          </p>
        </div>

        ${emailFooter}
      </div>
    `,
  })
}

// Legacy function names for backward compatibility
export const sendLeadNotification = sendAdminNotification
export const sendLeadConfirmation = sendCustomerConfirmation
