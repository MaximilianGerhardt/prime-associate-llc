import { Metadata } from 'next'
import { Check, X, Clock, DollarSign, Users, Zap, TrendingUp, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Accelerator vs Venture Capital | Which Is Right for Your Business?',
  description: 'Compare AI business accelerators vs traditional venture capital. Understand the differences in investment approach, timeline, involvement, and outcomes. Data-driven comparison for $1M+ revenue businesses.',
  keywords: [
    'AI accelerator vs VC',
    'venture capital alternative',
    'AI business accelerator',
    'accelerator vs investor',
    'startup accelerator comparison',
    'AI investment options',
    'growth capital alternatives',
    'VC vs accelerator programs',
  ],
  alternates: {
    canonical: '/compare/ai-accelerator-vs-vc',
  },
  openGraph: {
    title: 'AI Accelerator vs Venture Capital | Prime Associates',
    description: 'Which growth path is right for your business? Compare AI accelerators and traditional VCs.',
    type: 'article',
  },
}

const comparisonTable = [
  {
    category: 'Investment Approach',
    accelerator: 'Capital + Execution + AI Systems',
    vc: 'Capital only',
    winner: 'accelerator',
  },
  {
    category: 'Time to Results',
    accelerator: '90 days to first ROI',
    vc: '2-5 years to exit',
    winner: 'accelerator',
  },
  {
    category: 'Equity Dilution',
    accelerator: '5-15% typical',
    vc: '20-40% per round',
    winner: 'accelerator',
  },
  {
    category: 'Involvement Level',
    accelerator: 'Hands-on execution partner',
    vc: 'Board seat + quarterly meetings',
    winner: 'accelerator',
  },
  {
    category: 'Focus Area',
    accelerator: 'Revenue & efficiency via AI',
    vc: 'Growth at all costs',
    winner: 'depends',
  },
  {
    category: 'Decision Speed',
    accelerator: '2-4 weeks to funding',
    vc: '3-6 months due diligence',
    winner: 'accelerator',
  },
  {
    category: 'Success Metrics',
    accelerator: 'Revenue, margin, efficiency',
    vc: 'User growth, GMV, market share',
    winner: 'depends',
  },
  {
    category: 'Exit Pressure',
    accelerator: 'Low - sustainable growth focus',
    vc: 'High - 10x return required',
    winner: 'accelerator',
  },
]

const acceleratorBenefits = [
  {
    icon: Zap,
    title: 'Immediate Execution',
    description: 'Our team deploys AI systems within 90 days. No waiting for you to figure it out—we build it for you.',
  },
  {
    icon: DollarSign,
    title: 'Lower Dilution',
    description: 'Typical equity stake of 5-15% compared to 20-40% per VC round. Keep more of your company.',
  },
  {
    icon: Clock,
    title: 'Faster Results',
    description: 'See ROI within 90 days, not 5 years. Our model is built on rapid, measurable improvements.',
  },
  {
    icon: Target,
    title: 'Aligned Incentives',
    description: 'We succeed when you grow revenue—not when you raise another round or sell the company.',
  },
]

const vcBenefits = [
  {
    icon: TrendingUp,
    title: 'Large Capital Injections',
    description: 'VCs can provide $10M+ in a single round for aggressive expansion.',
  },
  {
    icon: Users,
    title: 'Network Access',
    description: 'Top-tier VCs offer introductions to customers, partners, and future investors.',
  },
]

const bestFitAccelerator = [
  '$500K-$10M revenue seeking efficiency gains',
  'Profitable or near-profitable businesses',
  'Founders who want to retain control',
  'Companies ready to implement AI now',
  'Businesses seeking operational excellence',
  'Teams that want execution support, not just advice',
]

const bestFitVC = [
  'Pre-revenue with massive TAM opportunity',
  'Willing to sacrifice profitability for growth',
  'Planning IPO or strategic acquisition',
  'Need $10M+ for market expansion',
  'Category creation opportunities',
  'Winner-take-all market dynamics',
]

const faqs = [
  {
    question: 'What is the difference between an AI accelerator and a VC?',
    answer: 'An AI accelerator provides capital PLUS hands-on execution—we actually build and deploy AI systems for you. VCs provide capital and advice but expect you to execute. Accelerators focus on rapid revenue improvement (90 days), while VCs focus on long-term exits (5-10 years). Accelerators typically take 5-15% equity vs 20-40% for VCs.',
  },
  {
    question: 'How much equity do AI accelerators take?',
    answer: 'AI accelerators typically take 5-15% equity depending on investment size and involvement level. This is significantly less than traditional VCs who take 20-40% per round. The lower dilution reflects the accelerator focus on execution and rapid value creation rather than speculative future valuations.',
  },
  {
    question: 'Can I use both an accelerator and VC funding?',
    answer: 'Yes, many companies use accelerators first to improve metrics, then raise VC at higher valuations. Strategy: (1) Partner with accelerator to deploy AI and improve unit economics, (2) Use improved metrics to negotiate better VC terms, (3) Raise VC for expansion with less dilution. This sequencing often results in 30-50% less total dilution.',
  },
  {
    question: 'How fast can an AI accelerator deliver results?',
    answer: 'AI accelerators typically deliver first measurable results within 90 days: deployed AI systems, initial efficiency gains, and early revenue impact. Full transformation takes 6-12 months. Compare this to VCs where the investment itself takes 3-6 months and results are measured over 5+ years.',
  },
  {
    question: 'What size company should use an AI accelerator vs VC?',
    answer: 'AI accelerators are ideal for $500K-$10M revenue companies seeking efficiency and growth. VCs are better for pre-revenue startups with massive TAM or $10M+ companies needing large capital for expansion. If you are profitable and want to grow without losing control, accelerators are typically better. If you need to "blitzscale" a winner-take-all market, VCs may be appropriate.',
  },
  {
    question: 'Do AI accelerators require board seats?',
    answer: 'Most AI accelerators do not require board seats, preserving founder control. We typically ask for observer rights and regular reporting. VCs almost always require board seats and voting rights, which can limit founder autonomy on key decisions like hiring, strategy, and future fundraising.',
  },
]

export default function AcceleratorVsVCPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-muted/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6">
              Investment Comparison
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              AI Accelerator vs. Venture Capital
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Two paths to growth. One gives you capital and wishes you luck. 
              The other gives you capital <span className="text-accent">and builds the AI systems for you</span>.
            </p>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-12 px-4 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary border border-accent/30 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-serif text-foreground mb-2">AI Accelerator</h2>
                <p className="text-accent text-4xl font-semibold mb-2">90 Days</p>
                <p className="text-muted">to first ROI</p>
                <p className="text-sm text-muted mt-4">Capital + Execution + AI Systems</p>
              </div>
              <div className="bg-primary border border-muted/20 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-serif text-foreground mb-2">Venture Capital</h2>
                <p className="text-foreground text-4xl font-semibold mb-2">5-10 Years</p>
                <p className="text-muted">to exit event</p>
                <p className="text-sm text-muted mt-4">Capital + Advice + Board Seat</p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Side-by-Side Comparison
            </h2>

            <div className="bg-secondary border border-muted/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary/80 p-4 border-b border-muted/20">
                <div className="text-sm font-medium text-muted">Category</div>
                <div className="text-sm font-medium text-accent text-center">AI Accelerator</div>
                <div className="text-sm font-medium text-muted text-center">Venture Capital</div>
              </div>
              {comparisonTable.map((row, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-b border-muted/10 last:border-0 items-center">
                  <div className="text-foreground font-medium">{row.category}</div>
                  <div className={`text-center ${row.winner === 'accelerator' ? 'text-accent' : 'text-muted'}`}>
                    {row.accelerator}
                    {row.winner === 'accelerator' && <Check className="w-4 h-4 inline ml-2" />}
                  </div>
                  <div className={`text-center ${row.winner === 'vc' ? 'text-accent' : 'text-muted'}`}>
                    {row.vc}
                    {row.winner === 'vc' && <Check className="w-4 h-4 inline ml-2" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Sections */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Accelerator Benefits */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent" />
                  AI Accelerator Advantages
                </h2>
                <div className="space-y-6">
                  {acceleratorBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-medium mb-1">{benefit.title}</h3>
                        <p className="text-muted text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* VC Benefits */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-muted" />
                  VC Advantages
                </h2>
                <div className="space-y-6">
                  {vcBenefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-muted" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-medium mb-1">{benefit.title}</h3>
                        <p className="text-muted text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Fit */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Which Is Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary border border-accent/30 rounded-xl p-8">
                <h3 className="text-xl font-serif text-foreground mb-6 flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  Choose AI Accelerator If You Are:
                </h3>
                <ul className="space-y-3">
                  {bestFitAccelerator.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary border border-muted/20 rounded-xl p-8">
                <h3 className="text-xl font-serif text-foreground mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-muted" />
                  Choose VC If You Are:
                </h3>
                <ul className="space-y-3">
                  {bestFitVC.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted">
                      <Check className="w-4 h-4 text-muted flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Accelerator vs VC: FAQs
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-primary border border-muted/20 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ready for Results in 90 Days?
            </h2>
            <p className="text-muted mb-8 text-lg">
              If you want execution—not just capital and advice—let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-automation-costs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-muted/40 text-foreground font-semibold rounded hover:bg-muted/10 transition-colors"
              >
                View Investment Tiers
              </Link>
              <Link 
                href="/#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                Apply for Partnership
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}
