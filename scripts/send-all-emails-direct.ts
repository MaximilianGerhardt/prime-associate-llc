import { config } from 'dotenv'
config({ path: '.env.local' })

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TEST_EMAIL = 'info@p-a.llc'
const SITE_URL = 'https://p-a.llc'

const baseStyles = `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #FAFAFA; padding: 40px;`

const headerHtml = `
  <div style="text-align: center; margin-bottom: 40px;">
    <h1 style="color: #FAFAFA; font-size: 28px; margin: 0; font-family: Georgia, serif;">
      Prime <span style="color: #C9A962;">Associates</span>
    </h1>
    <p style="color: #666; font-size: 11px; margin-top: 8px; letter-spacing: 2px;">THE AI ADVANTAGE</p>
  </div>
`

const footerHtml = `
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
    <p style="color: #C9A962; font-size: 14px; margin: 0 0 8px 0; font-family: Georgia, serif;">
      Prime <span style="color: #C9A962;">Associates</span> <span style="color: #666; font-size: 10px;">LLC</span>
    </p>
    <p style="color: #666; font-size: 10px; margin: 0; line-height: 1.6;">
      23160 Fashion Dr Ste 220, Estero, FL 33928, United States
    </p>
    <p style="color: #333; font-size: 9px; margin-top: 10px; text-align: center;">
      © 2025 Prime Associates LLC. All rights reserved.
    </p>
  </div>
`

const emails = [
  {
    subject: "🎯 You're in. Here's what happens next...",
    html: `<div style="${baseStyles}">${headerHtml}
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 24px; margin-bottom: 24px; text-align: center;">
        <p style="color: #C9A962; margin: 0; font-size: 18px; font-weight: 600;">✅ Welcome to the Inner Circle</p>
      </div>
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">You just made a decision that separates you from 97% of business owners who <em>talk</em> about leveraging AI but never actually do it.</p>
      <div style="background: #111; border-left: 3px solid #C9A962; padding: 20px; margin: 24px 0;">
        <p style="color: #FAFAFA; margin: 0 0 12px 0;"><strong style="color: #C9A962;">📈 Weekly Deep Dives</strong> — The exact AI strategies generating $47M+ for our clients</p>
        <p style="color: #FAFAFA; margin: 0 0 12px 0;"><strong style="color: #C9A962;">🔧 Tactical Playbooks</strong> — Step-by-step implementations you can deploy today</p>
        <p style="color: #FAFAFA; margin: 0;"><strong style="color: #C9A962;">🎯 Early Access</strong> — First look at opportunities before they go public</p>
      </div>
      <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">P.S. — Tomorrow, I'm sending you our "AI Revenue Multiplier Framework" that helped one client add $2.3M in 90 days.</p>
      ${footerHtml}</div>`
  },
  {
    subject: "The $2.3M framework (as promised)",
    html: `<div style="${baseStyles}">${headerHtml}
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">Yesterday I promised you something special. Here it is:</p>
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0;">
        <h2 style="color: #C9A962; font-size: 22px; margin: 0 0 16px 0; font-family: Georgia, serif; text-align: center;">The AI Revenue Multiplier Framework</h2>
        <p style="color: #888; font-size: 13px; text-align: center; margin: 0;">How one e-commerce client went from $180K/month to $780K/month in 90 days</p>
      </div>
      <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <p style="color: #FAFAFA; margin: 0 0 16px 0;"><strong style="color: #C9A962; font-size: 18px;">Step 1: Identify the $100K Bottleneck</strong><br/><span style="color: #888; font-size: 14px;">Every business has ONE constraint costing them 6+ figures.</span></p>
        <p style="color: #FAFAFA; margin: 0 0 16px 0;"><strong style="color: #C9A962; font-size: 18px;">Step 2: Deploy Precision Automation</strong><br/><span style="color: #888; font-size: 14px;">Custom AI systems that fit YOUR operations like a glove.</span></p>
        <p style="color: #FAFAFA; margin: 0 0 16px 0;"><strong style="color: #C9A962; font-size: 18px;">Step 3: Multiply Human Intelligence</strong><br/><span style="color: #888; font-size: 14px;">Your best people + AI = decisions in minutes, not weeks.</span></p>
        <p style="color: #FAFAFA; margin: 0;"><strong style="color: #C9A962; font-size: 18px;">Step 4: Scale What's Working</strong><br/><span style="color: #888; font-size: 14px;">Once we prove ROI, we 10x it.</span></p>
      </div>
      <p style="color: #CCCCCC; line-height: 1.8;">Result: <strong style="color: #C9A962;">4.3x increase in conversions</strong> from existing traffic.</p>
      <div style="text-align: center; margin: 30px 0;"><a href="${SITE_URL}/#apply" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 4px;">See If You Qualify →</a></div>
      ${footerHtml}</div>`
  },
  {
    subject: "⚠️ 3 AI blind spots killing your growth",
    html: `<div style="${baseStyles}">${headerHtml}
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">I've audited 200+ businesses on their AI readiness. Same 3 mistakes:</p>
      <div style="background: #111; border: 1px solid #ff4444; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <h3 style="color: #ff4444; font-size: 16px; margin: 0 0 12px 0;">🚨 BLIND SPOT #1: Automating the Wrong Things</h3>
        <p style="color: #888; font-size: 14px; margin: 0;">Automating $15/hour work instead of $500/hour decisions.</p>
      </div>
      <div style="background: #111; border: 1px solid #ff8800; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <h3 style="color: #ff8800; font-size: 16px; margin: 0 0 12px 0;">🚨 BLIND SPOT #2: One-Size-Fits-All Tools</h3>
        <p style="color: #888; font-size: 14px; margin: 0;">ChatGPT is incredible. But using it for everything is like using a Swiss Army knife to build a house.</p>
      </div>
      <div style="background: #111; border: 1px solid #ffcc00; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <h3 style="color: #ffcc00; font-size: 16px; margin: 0 0 12px 0;">🚨 BLIND SPOT #3: No Measurement System</h3>
        <p style="color: #888; font-size: 14px; margin: 0;">"We're using AI" isn't a strategy. What's the ROI?</p>
      </div>
      <div style="text-align: center; margin: 30px 0;"><a href="${SITE_URL}/newsletter/assessment" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 4px;">Get Your AI Readiness Score →</a></div>
      ${footerHtml}</div>`
  },
  {
    subject: "The calculator that found $847K (use it free)",
    html: `<div style="${baseStyles}">${headerHtml}
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">Last month, a manufacturing CEO told me: <em>"We're too small for AI to make a real difference."</em></p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">30 minutes later, our ROI calculator showed him <strong style="color: #C9A962;">$847,000 in annual savings</strong> he was leaving on the table.</p>
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0; text-align: center;">
        <h2 style="color: #C9A962; font-size: 24px; margin: 0 0 12px 0; font-family: Georgia, serif;">The Hidden ROI Calculator</h2>
        <p style="color: #888; font-size: 14px; margin: 0 0 20px 0;">Answer 5 questions. Get your personalized AI opportunity report.</p>
        <a href="${SITE_URL}/newsletter/calculator" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 14px 36px; text-decoration: none; font-weight: 700; border-radius: 4px; font-size: 15px;">Calculate Your Hidden ROI →</a>
      </div>
      ${footerHtml}</div>`
  },
  {
    subject: "Case study: 5x capacity, 0 new hires",
    html: `<div style="${baseStyles}">${headerHtml}
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">Fresh case study from Q4:</p>
      <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase;">The Client</h3>
        <p style="color: #FAFAFA; margin: 0;">B2B consulting firm. $4.2M revenue. 12-person team. Maxed out capacity.</p>
      </div>
      <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
        <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase;">The Problem</h3>
        <p style="color: #FAFAFA; margin: 0;">60% of time on research, proposals, admin. Only 40% on actual client work.</p>
      </div>
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 24px; margin: 24px 0; text-align: center;">
        <h3 style="color: #C9A962; margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase;">The Results (90 Days)</h3>
        <table style="width: 100%; color: #FAFAFA; text-align: center;">
          <tr>
            <td style="padding: 12px;"><p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">5x</p><p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">Capacity</p></td>
            <td style="padding: 12px;"><p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">$1.7M</p><p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">New Revenue</p></td>
            <td style="padding: 12px;"><p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">0</p><p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">New Hires</p></td>
          </tr>
        </table>
      </div>
      <div style="text-align: center; margin: 30px 0;"><a href="${SITE_URL}/#apply" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 4px;">Apply For Strategy Session →</a></div>
      ${footerHtml}</div>`
  },
  {
    subject: "🔓 [FINAL] Your exclusive invitation",
    html: `<div style="${baseStyles}">${headerHtml}
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 2px solid #C9A962; border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
        <p style="color: #C9A962; margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 1px;">⭐ EXCLUSIVE NEWSLETTER SUBSCRIBER OFFER ⭐</p>
      </div>
      <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">Hey there,</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">Over the past week, I've shared the AI Revenue Multiplier Framework, 3 AI Blind Spots, the ROI Calculator, and the 5x capacity case study.</p>
      <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">If you're still reading, you're serious about growth. Which is why I want to extend a <strong style="color: #C9A962;">personal invitation</strong>:</p>
      <div style="background: #111; border: 2px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0;">
        <h2 style="color: #C9A962; font-size: 22px; margin: 0 0 20px 0; font-family: Georgia, serif; text-align: center;">Complimentary AI Strategy Session</h2>
        <p style="color: #FAFAFA; line-height: 1.8; margin: 0 0 20px 0; text-align: center;">A 30-minute call to identify your business's biggest AI opportunity.</p>
        <div style="background: #0a0a0a; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
          <p style="color: #FAFAFA; margin: 0 0 10px 0;"><strong style="color: #C9A962;">✓</strong> Personalized analysis of your operations</p>
          <p style="color: #FAFAFA; margin: 0 0 10px 0;"><strong style="color: #C9A962;">✓</strong> Specific AI recommendations for your industry</p>
          <p style="color: #FAFAFA; margin: 0 0 10px 0;"><strong style="color: #C9A962;">✓</strong> ROI projections based on your numbers</p>
          <p style="color: #FAFAFA; margin: 0;"><strong style="color: #C9A962;">✓</strong> Implementation roadmap you can use immediately</p>
        </div>
        <p style="color: #888; font-size: 13px; margin: 0; text-align: center;"><em>No pitch. No pressure. If we're not a fit, we'll tell you.</em></p>
      </div>
      <div style="text-align: center; margin: 30px 0;"><a href="${SITE_URL}/#apply" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 4px; font-size: 16px;">Claim Your Strategy Session →</a></div>
      <p style="color: #CCCCCC; line-height: 1.8; margin: 30px 0 20px 0; text-align: center;"><strong style="color: #FAFAFA;">Current availability:</strong> <span style="color: #C9A962; font-weight: 600;">3 spots remaining</span></p>
      ${footerHtml}</div>`
  }
]

async function sendAll() {
  console.log('🚀 Sending all 6 emails to:', TEST_EMAIL)
  console.log('-------------------------------------------\n')

  for (let i = 0; i < emails.length; i++) {
    const email = emails[i]
    console.log(`📧 [${i + 1}/6] ${email.subject}`)
    
    try {
      const result = await resend.emails.send({
        from: 'Prime Associates <insights@mail.p-a.llc>',
        to: [TEST_EMAIL],
        subject: email.subject,
        html: email.html,
      })

      if (result.error) {
        console.log(`   ❌ Error:`, result.error)
      } else {
        console.log(`   ✅ Sent! ID: ${result.data?.id}`)
      }
    } catch (error) {
      console.log(`   ❌ Exception:`, error)
    }

    // Wait 2 seconds between emails
    if (i < emails.length - 1) {
      await new Promise(r => setTimeout(r, 2000))
    }
  }

  console.log('\n-------------------------------------------')
  console.log('✅ All emails sent! Check inbox at info@p-a.llc')
}

sendAll()
