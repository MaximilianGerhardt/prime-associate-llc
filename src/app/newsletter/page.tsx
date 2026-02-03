import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { CheckCircle, Users, TrendingUp, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'The AI Advantage Newsletter | Free Weekly AI Business Insights',
  description: 'Subscribe to The AI Advantage Newsletter and receive the exact AI automation strategies that generated $47M+ in client revenue. Weekly deep dives into AI implementation, tactical playbooks for revenue generation, case studies from real businesses, and early access to investment opportunities. Join 2,847+ founders and executives.',
  keywords: [
    'AI Newsletter',
    'AI Business Newsletter',
    'AI Automation Strategies',
    'Business AI Insights',
    'AI Implementation Guide',
    'Revenue Automation Newsletter',
    'AI for Business Leaders',
    'Weekly AI Insights',
  ],
  alternates: {
    canonical: '/newsletter',
  },
  openGraph: {
    title: 'The AI Advantage Newsletter | Prime Associates',
    description: 'Weekly AI strategies from the team that generated $47M+ in client revenue. Join 2,847+ business leaders.',
    type: 'website',
  },
}

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary">
        <section className="py-20 px-4">
          <NewsletterSignup variant="hero" source="newsletter-page" />
        </section>

        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-foreground text-center mb-12">
              What Subscribers Are Saying
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6">
                <p className="text-muted mb-4 italic">
                  &ldquo;This newsletter is the only one I actually open every week. The frameworks are actionable and the case studies are gold.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    JM
                  </div>
                  <div>
                    <p className="text-foreground font-medium">James M.</p>
                    <p className="text-muted text-sm">CEO, SaaS Company</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6">
                <p className="text-muted mb-4 italic">
                  &ldquo;The ROI calculator alone saved us from a $200K mistake. Now we&apos;re investing in the right AI solutions.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    SK
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Sarah K.</p>
                    <p className="text-muted text-sm">COO, Manufacturing</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6">
                <p className="text-muted mb-4 italic">
                  &ldquo;Finally, AI content written by people who actually implement it. No fluff, just results.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    RP
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Robert P.</p>
                    <p className="text-muted text-sm">Founder, E-commerce</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/50 border border-muted/20 rounded-xl p-6">
                <p className="text-muted mb-4 italic">
                  &ldquo;We implemented one framework from the newsletter and saved 40 hours/week. Worth every second of reading.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                    AT
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Amanda T.</p>
                    <p className="text-muted text-sm">Director of Ops, Agency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-foreground text-center mb-4">
              What You&apos;ll Get
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Every edition is packed with actionable insights you can implement immediately.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Revenue-Generating Frameworks</h3>
                  <p className="text-muted text-sm">
                    The exact strategies our clients use to add 6-7 figures with AI automation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Real Case Studies</h3>
                  <p className="text-muted text-sm">
                    Detailed breakdowns of what worked, what didn&apos;t, and the actual numbers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Early Access</h3>
                  <p className="text-muted text-sm">
                    Be first to know about new AI tools, opportunities, and strategic openings.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">Implementation Guides</h3>
                  <p className="text-muted text-sm">
                    Step-by-step playbooks you can deploy in your business this week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-secondary/30">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-foreground mb-6">
              Ready to Get the AI Advantage?
            </h2>
            <NewsletterSignup variant="card" source="newsletter-page-bottom" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
