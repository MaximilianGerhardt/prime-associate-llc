import { resend } from './resend'

const SITE_URL = 'https://p-a.llc'
const FROM_EMAIL = 'Prime Associates <insights@mail.p-a.llc>'

const baseStyles = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background: #0A0A0A;
  color: #FAFAFA;
  padding: 40px;
`

const headerHtml = `
  <div style="text-align: center; margin-bottom: 40px;">
    <a href="${SITE_URL}" style="text-decoration: none;">
      <h1 style="color: #FAFAFA; font-size: 28px; margin: 0; font-family: Georgia, serif;">
        Prime <span style="color: #C9A962;">Associates</span>
      </h1>
    </a>
    <p style="color: #666; font-size: 11px; margin-top: 8px; letter-spacing: 2px;">THE AI ADVANTAGE</p>
  </div>
`

const getFooterHtml = (unsubscribeToken: string) => `
  <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333;">
    <table style="width: 100%;">
      <tr>
        <td style="vertical-align: top;">
          <p style="color: #C9A962; font-size: 14px; margin: 0 0 8px 0; font-family: Georgia, serif;">
            Prime <span style="color: #C9A962;">Associates</span> <span style="color: #666; font-size: 10px;">LLC</span>
          </p>
          <p style="color: #666; font-size: 10px; margin: 0; line-height: 1.6;">
            23160 Fashion Dr Ste 220<br />
            Estero, FL 33928<br />
            United States
          </p>
        </td>
      </tr>
    </table>
    <div style="text-align: center; margin-top: 20px;">
      <p style="color: #444; font-size: 10px; margin: 0;">
        You received this email because you subscribed to The AI Advantage newsletter.<br />
        <a href="${SITE_URL}/newsletter/unsubscribe?token=${unsubscribeToken}" style="color: #666; text-decoration: underline;">Unsubscribe</a> · 
        <a href="${SITE_URL}/privacy" style="color: #666; text-decoration: underline;">Privacy Policy</a>
      </p>
      <p style="color: #333; font-size: 9px; margin-top: 10px;">
        © ${new Date().getFullYear()} Prime Associates LLC. All rights reserved.
      </p>
    </div>
  </div>
`

const ctaButton = (text: string, url: string) => `
  <div style="text-align: center; margin: 30px 0;">
    <a href="${url}" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 16px 40px; text-decoration: none; font-weight: 700; border-radius: 4px; font-size: 16px;">
      ${text} →
    </a>
  </div>
`

const secondaryCta = (text: string, url: string) => `
  <p style="text-align: center; margin: 20px 0;">
    <a href="${url}" style="color: #C9A962; text-decoration: underline; font-size: 14px;">${text}</a>
  </p>
`

interface EmailParams {
  email: string
  firstName?: string
  unsubscribeToken: string
  doubleOptInToken?: string
}

export async function sendWelcomeEmail({ email, firstName, unsubscribeToken, doubleOptInToken }: EmailParams) {
  if (!resend) {
    console.warn('Resend not configured, skipping welcome email')
    return { data: null, error: null }
  }

  const greeting = firstName ? `Hey ${firstName}` : 'Hey there'
  
  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "🎯 You're in. Here's what happens next...",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}
        
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 24px; margin-bottom: 24px; text-align: center;">
          <p style="color: #C9A962; margin: 0; font-size: 18px; font-weight: 600;">
            ✅ Welcome to the Inner Circle
          </p>
        </div>

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          You just made a decision that separates you from 97% of business owners who <em>talk</em> about leveraging AI but never actually do it.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Here's what you're getting:
        </p>

        <div style="background: #111; border-left: 3px solid #C9A962; padding: 20px; margin: 24px 0;">
          <p style="color: #FAFAFA; margin: 0 0 12px 0;"><strong style="color: #C9A962;">📈 Weekly Deep Dives</strong> — The exact AI strategies generating $47M+ for our clients</p>
          <p style="color: #FAFAFA; margin: 0 0 12px 0;"><strong style="color: #C9A962;">🔧 Tactical Playbooks</strong> — Step-by-step implementations you can deploy today</p>
          <p style="color: #FAFAFA; margin: 0;"><strong style="color: #C9A962;">🎯 Early Access</strong> — First look at opportunities before they go public</p>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          <strong style="color: #FAFAFA;">But first, a quick question:</strong>
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          What's the #1 thing holding your business back from scaling to the next level? Hit reply and let me know — I read every response personally.
        </p>

        ${ctaButton('Explore Our AI Solutions', `${SITE_URL}/expertise`)}

        <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">
          P.S. — Tomorrow, I'm sending you our "AI Revenue Multiplier Framework" that helped one client add $2.3M in 90 days. Keep an eye on your inbox.
        </p>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export async function sendNurturingEmail1({ email, firstName, unsubscribeToken }: EmailParams) {
  if (!resend) return { data: null, error: null }

  const greeting = firstName ? firstName : 'there'

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "The $2.3M framework (as promised)",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          Hey ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Yesterday I promised you something special. Here it is:
        </p>

        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0;">
          <h2 style="color: #C9A962; font-size: 22px; margin: 0 0 16px 0; font-family: Georgia, serif; text-align: center;">
            The AI Revenue Multiplier Framework
          </h2>
          <p style="color: #888; font-size: 13px; text-align: center; margin: 0;">
            How one e-commerce client went from $180K/month to $780K/month in 90 days
          </p>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 16px;">
          Most businesses use AI like a shiny new toy. We use it like a <em>scalpel</em>.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Here's the 4-step framework:
        </p>

        <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <p style="color: #FAFAFA; margin: 0 0 16px 0;">
            <strong style="color: #C9A962; font-size: 18px;">Step 1: Identify the $100K Bottleneck</strong><br />
            <span style="color: #888; font-size: 14px;">Every business has ONE constraint costing them 6+ figures. AI finds it in hours, not months.</span>
          </p>
          <p style="color: #FAFAFA; margin: 0 0 16px 0;">
            <strong style="color: #C9A962; font-size: 18px;">Step 2: Deploy Precision Automation</strong><br />
            <span style="color: #888; font-size: 14px;">Not generic tools — custom AI systems that fit YOUR operations like a glove.</span>
          </p>
          <p style="color: #FAFAFA; margin: 0 0 16px 0;">
            <strong style="color: #C9A962; font-size: 18px;">Step 3: Multiply Human Intelligence</strong><br />
            <span style="color: #888; font-size: 14px;">Your best people + AI = decisions that used to take weeks now happen in minutes.</span>
          </p>
          <p style="color: #FAFAFA; margin: 0;">
            <strong style="color: #C9A962; font-size: 18px;">Step 4: Scale What's Working</strong><br />
            <span style="color: #888; font-size: 14px;">Once we prove ROI, we 10x it. That's where the real money is.</span>
          </p>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          The e-commerce client I mentioned? Their bottleneck was <strong style="color: #FAFAFA;">customer service response time</strong>. 
          We deployed an AI system that handled 73% of inquiries instantly while flagging high-value conversations for humans.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Result: <strong style="color: #C9A962;">4.3x increase in conversions</strong> from their existing traffic.
        </p>

        ${ctaButton('See If You Qualify', `${SITE_URL}/#apply`)}

        <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">
          P.S. — On Thursday, I'll show you the 3 "AI Blind Spots" that are silently killing most businesses' growth. Don't miss it.
        </p>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export async function sendNurturingEmail2({ email, firstName, unsubscribeToken }: EmailParams) {
  if (!resend) return { data: null, error: null }

  const greeting = firstName ? firstName : 'there'

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "⚠️ 3 AI blind spots killing your growth",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          Hey ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          I've audited 200+ businesses on their AI readiness. And I keep seeing the same 3 mistakes:
        </p>

        <div style="background: #111; border: 1px solid #ff4444; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #ff4444; font-size: 16px; margin: 0 0 12px 0;">
            🚨 BLIND SPOT #1: Automating the Wrong Things
          </h3>
          <p style="color: #888; font-size: 14px; margin: 0;">
            Most businesses automate tasks that feel annoying instead of tasks that <em>cost</em> money. Big difference. If you're automating $15/hour work instead of $500/hour decisions, you're playing checkers while everyone else plays chess.
          </p>
        </div>

        <div style="background: #111; border: 1px solid #ff8800; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #ff8800; font-size: 16px; margin: 0 0 12px 0;">
            🚨 BLIND SPOT #2: One-Size-Fits-All Tools
          </h3>
          <p style="color: #888; font-size: 14px; margin: 0;">
            ChatGPT is incredible. But using it for everything is like using a Swiss Army knife to build a house. Enterprise-grade results require enterprise-grade customization.
          </p>
        </div>

        <div style="background: #111; border: 1px solid #ffcc00; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #ffcc00; font-size: 16px; margin: 0 0 12px 0;">
            🚨 BLIND SPOT #3: No Measurement System
          </h3>
          <p style="color: #888; font-size: 14px; margin: 0;">
            "We're using AI" isn't a strategy. What's the ROI? The time saved? The revenue generated? If you can't answer these in 5 seconds, you're flying blind.
          </p>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          The good news? Every one of these is fixable. In fact, we've developed a 15-minute assessment that identifies exactly which blind spots are costing you the most.
        </p>

        ${ctaButton('Get Your AI Readiness Score', `${SITE_URL}/newsletter/assessment`)}

        <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">
          P.S. — In my next email, I'll reveal the "Hidden ROI Calculator" we use with clients. It's helped businesses discover 6-figure opportunities they didn't know existed.
        </p>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export async function sendNurturingEmail3({ email, firstName, unsubscribeToken }: EmailParams) {
  if (!resend) return { data: null, error: null }

  const greeting = firstName ? firstName : 'there'

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "The calculator that found $847K (use it free)",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          Hey ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Last month, a manufacturing CEO told me: <em>"We're too small for AI to make a real difference."</em>
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          30 minutes later, our ROI calculator showed him <strong style="color: #C9A962;">$847,000 in annual savings</strong> he was leaving on the table.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          He's now a client. 😉
        </p>

        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0; text-align: center;">
          <h2 style="color: #C9A962; font-size: 24px; margin: 0 0 12px 0; font-family: Georgia, serif;">
            The Hidden ROI Calculator
          </h2>
          <p style="color: #888; font-size: 14px; margin: 0 0 20px 0;">
            Answer 5 questions. Get your personalized AI opportunity report.
          </p>
          <a href="${SITE_URL}/newsletter/calculator" style="display: inline-block; background: #C9A962; color: #0A0A0A; padding: 14px 36px; text-decoration: none; font-weight: 700; border-radius: 4px; font-size: 15px;">
            Calculate Your Hidden ROI →
          </a>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 16px;">
          <strong style="color: #FAFAFA;">What the calculator analyzes:</strong>
        </p>

        <ul style="color: #CCCCCC; line-height: 2; margin: 0 0 20px 0; padding-left: 20px;">
          <li>Manual processes that AI can handle 24/7</li>
          <li>Decision bottlenecks slowing your growth</li>
          <li>Data you're collecting but not using</li>
          <li>Customer touchpoints ripe for automation</li>
          <li>Competitive gaps AI can close</li>
        </ul>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Most businesses are shocked by the number. Not because it's small — because they never thought to calculate it.
        </p>

        ${secondaryCta("Or skip ahead and talk to us directly →", `${SITE_URL}/#apply`)}

        <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">
          P.S. — Monday's email is special. I'm sharing a case study from this quarter — a service business that 5x'd their capacity without hiring. Real numbers, real results.
        </p>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export async function sendNurturingEmail4({ email, firstName, unsubscribeToken }: EmailParams) {
  if (!resend) return { data: null, error: null }

  const greeting = firstName ? firstName : 'there'

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "Case study: 5x capacity, 0 new hires",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          Hey ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          As promised — a fresh case study from Q4:
        </p>

        <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
            The Client
          </h3>
          <p style="color: #FAFAFA; margin: 0;">
            B2B consulting firm. $4.2M revenue. 12-person team. Maxed out capacity — turning away $800K+ in annual business.
          </p>
        </div>

        <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
            The Problem
          </h3>
          <p style="color: #FAFAFA; margin: 0;">
            Every senior consultant spent <strong>60% of their time</strong> on research, proposals, and admin. Only 40% on actual client work. Hiring more consultants was expensive and slow.
          </p>
        </div>

        <div style="background: #111; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h3 style="color: #C9A962; margin: 0 0 16px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
            The Solution
          </h3>
          <p style="color: #FAFAFA; margin: 0 0 12px 0;">
            We built three custom AI systems:
          </p>
          <ul style="color: #888; margin: 0; padding-left: 20px;">
            <li>Research automation that summarizes 100+ sources in minutes</li>
            <li>Proposal generator trained on their winning bids</li>
            <li>Client communication assistant handling 80% of routine touchpoints</li>
          </ul>
        </div>

        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 1px solid #C9A962; border-radius: 8px; padding: 24px; margin: 24px 0; text-align: center;">
          <h3 style="color: #C9A962; margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
            The Results (90 Days)
          </h3>
          <table style="width: 100%; color: #FAFAFA; text-align: center;">
            <tr>
              <td style="padding: 12px;">
                <p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">5x</p>
                <p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">Client Capacity</p>
              </td>
              <td style="padding: 12px;">
                <p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">$1.7M</p>
                <p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">New Revenue</p>
              </td>
              <td style="padding: 12px;">
                <p style="font-size: 32px; color: #C9A962; margin: 0; font-weight: 700;">0</p>
                <p style="color: #888; font-size: 12px; margin: 4px 0 0 0;">New Hires</p>
              </td>
            </tr>
          </table>
        </div>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          The kicker? Their team is <em>happier</em>. They spend 85% of their time on high-value work now — the stuff they actually enjoy.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          <strong style="color: #FAFAFA;">Is your business next?</strong>
        </p>

        ${ctaButton('Apply For a Strategy Session', `${SITE_URL}/#apply`)}

        <p style="color: #888; font-size: 14px; text-align: center; margin-top: 30px;">
          P.S. — My final email in this series drops Wednesday. I'm making a special offer that I've never made public before. Stay tuned.
        </p>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export async function sendNurturingEmail5({ email, firstName, unsubscribeToken }: EmailParams) {
  if (!resend) return { data: null, error: null }

  const greeting = firstName ? firstName : 'there'

  return resend.emails.send({
    from: FROM_EMAIL,
    to: [email],
    subject: "🔓 [FINAL] Your exclusive invitation",
    html: `
      <div style="${baseStyles}">
        ${headerHtml}

        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border: 2px solid #C9A962; border-radius: 8px; padding: 16px; margin-bottom: 24px; text-align: center;">
          <p style="color: #C9A962; margin: 0; font-size: 13px; font-weight: 600; letter-spacing: 1px;">
            ⭐ EXCLUSIVE NEWSLETTER SUBSCRIBER OFFER ⭐
          </p>
        </div>

        <p style="color: #FAFAFA; font-size: 18px; line-height: 1.8; margin-bottom: 20px;">
          Hey ${greeting},
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Over the past week, I've shared:
        </p>

        <ul style="color: #CCCCCC; line-height: 2; margin: 0 0 20px 0; padding-left: 20px;">
          <li>The AI Revenue Multiplier Framework ($2.3M case study)</li>
          <li>3 AI Blind Spots killing business growth</li>
          <li>The Hidden ROI Calculator</li>
          <li>The 5x capacity case study</li>
        </ul>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          If you're still reading, you're serious about growth. You're not a "tire-kicker." You understand that AI isn't a fad — it's the biggest business opportunity since the internet.
        </p>

        <p style="color: #CCCCCC; line-height: 1.8; margin-bottom: 20px;">
          Which is why I want to extend a <strong style="color: #C9A962;">personal invitation</strong>:
        </p>

        <div style="background: #111; border: 2px solid #C9A962; border-radius: 8px; padding: 30px; margin: 24px 0;">
          <h2 style="color: #C9A962; font-size: 22px; margin: 0 0 20px 0; font-family: Georgia, serif; text-align: center;">
            Complimentary AI Strategy Session
          </h2>
          
          <p style="color: #FAFAFA; line-height: 1.8; margin: 0 0 20px 0; text-align: center;">
            A 30-minute call with our team to identify your business's biggest AI opportunity.
          </p>

          <div style="background: #0a0a0a; border-radius: 6px; padding: 20px; margin-bottom: 20px;">
            <p style="color: #FAFAFA; margin: 0 0 10px 0;">
              <strong style="color: #C9A962;">✓</strong> Personalized analysis of your operations
            </p>
            <p style="color: #FAFAFA; margin: 0 0 10px 0;">
              <strong style="color: #C9A962;">✓</strong> Specific AI recommendations for your industry
            </p>
            <p style="color: #FAFAFA; margin: 0 0 10px 0;">
              <strong style="color: #C9A962;">✓</strong> ROI projections based on your numbers
            </p>
            <p style="color: #FAFAFA; margin: 0;">
              <strong style="color: #C9A962;">✓</strong> Implementation roadmap you can use immediately
            </p>
          </div>

          <p style="color: #888; font-size: 13px; margin: 0; text-align: center;">
            <em>No pitch. No pressure. If we're not a fit, we'll tell you — and still give you the roadmap.</em>
          </p>
        </div>

        ${ctaButton("Claim Your Strategy Session", `${SITE_URL}/#apply`)}

        <p style="color: #CCCCCC; line-height: 1.8; margin: 30px 0 20px 0; text-align: center;">
          <strong style="color: #FAFAFA;">Important:</strong> We can only take 5 strategy sessions per week to maintain quality. Current availability: <span style="color: #C9A962; font-weight: 600;">3 spots remaining</span>
        </p>

        <div style="border-top: 1px solid #333; padding-top: 24px; margin-top: 30px;">
          <p style="color: #888; font-size: 14px; line-height: 1.8;">
            Whatever you decide, thank you for being part of this community. I'll continue sending weekly insights — the best strategies, case studies, and opportunities we're seeing in the AI space.
          </p>
          <p style="color: #888; font-size: 14px; line-height: 1.8; margin-top: 12px;">
            Here's to your growth,<br />
            <strong style="color: #FAFAFA;">The Prime Associates Team</strong>
          </p>
        </div>

        ${getFooterHtml(unsubscribeToken)}
      </div>
    `,
  })
}

export const NURTURING_EMAILS = [
  { id: 1, fn: sendNurturingEmail1, delayDays: 1, subject: "The $2.3M framework (as promised)" },
  { id: 2, fn: sendNurturingEmail2, delayDays: 3, subject: "⚠️ 3 AI blind spots killing your growth" },
  { id: 3, fn: sendNurturingEmail3, delayDays: 5, subject: "The calculator that found $847K (use it free)" },
  { id: 4, fn: sendNurturingEmail4, delayDays: 7, subject: "Case study: 5x capacity, 0 new hires" },
  { id: 5, fn: sendNurturingEmail5, delayDays: 10, subject: "🔓 [FINAL] Your exclusive invitation" },
]
