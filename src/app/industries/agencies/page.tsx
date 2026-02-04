import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, TrendingUp, Clock, Users, Zap, FileText, MessageSquare, BarChart3 } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Automation for Marketing Agencies | Scale Without Hiring',
  description: 'How marketing and creative agencies use AI to handle 3x more clients without hiring, automate reporting, and deliver faster results. Real ROI data from agency implementations.',
  keywords: [
    'AI for marketing agencies',
    'agency automation',
    'AI content creation agency',
    'automate agency reporting',
    'AI for creative agencies',
    'scale marketing agency AI',
    'agency AI tools',
    'white label AI agency',
  ],
  alternates: {
    canonical: '/industries/agencies',
  },
  openGraph: {
    title: 'AI Automation for Marketing Agencies | Prime Associates',
    description: 'How agencies handle 3x more clients without hiring using AI automation.',
    type: 'article',
  },
}

const useCases = [
  {
    icon: FileText,
    title: 'AI Content Production',
    description: 'Generate first drafts, social posts, ad copy, and blog content at scale. Human editors refine, AI produces.',
    metrics: [
      { label: 'Content output', value: '5x' },
      { label: 'Time per piece', value: '-70%' },
      { label: 'Cost per content', value: '-55%' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Automated Reporting',
    description: 'AI pulls data from all platforms, generates insights, and creates client-ready reports automatically.',
    metrics: [
      { label: 'Report time', value: '4hrs → 15min' },
      { label: 'Insights generated', value: '12/report' },
      { label: 'Client satisfaction', value: '+34%' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Client Communication',
    description: 'Intelligent assistant handles routine client questions, status updates, and meeting scheduling 24/7.',
    metrics: [
      { label: 'Response time', value: '<2 min' },
      { label: 'Queries handled', value: '78%' },
      { label: 'AM time saved', value: '15hrs/wk' },
    ],
  },
  {
    icon: Users,
    title: 'Campaign Optimization',
    description: 'AI monitors campaigns 24/7, adjusts bids, pauses underperformers, and scales winners automatically.',
    metrics: [
      { label: 'ROAS improvement', value: '+42%' },
      { label: 'Wasted spend', value: '-35%' },
      { label: 'Optimization speed', value: 'Real-time' },
    ],
  },
]

const caseStudy = {
  company: 'Performance Marketing Agency',
  industry: 'Digital Advertising',
  revenue: '$1.8M → $4.2M',
  timeframe: '18 months',
  challenge: 'Capped at 25 clients due to team bandwidth. Reporting took 6+ hours per client monthly. Content production was the bottleneck for scaling.',
  solution: [
    'Deployed AI content engine producing 80% of first drafts',
    'Implemented automated reporting across Google, Meta, and LinkedIn',
    'Created AI client success assistant for routine communications',
    'Built real-time campaign optimization system',
  ],
  results: [
    { metric: 'Client capacity', before: '25', after: '72', change: '+188%' },
    { metric: 'Revenue per employee', before: '$180K', after: '$420K', change: '+133%' },
    { metric: 'Monthly reporting time', before: '150 hrs', after: '18 hrs', change: '-88%' },
    { metric: 'Agency revenue', before: '$1.8M', after: '$4.2M', change: '+133%' },
  ],
  investment: '$165,000',
  roi: '1,450%',
  payback: '5 months',
}

const faqs = [
  {
    question: 'How can AI help a marketing agency scale without hiring?',
    answer: 'AI enables agencies to scale by: (1) Automating content production - AI generates 80% of first drafts, (2) Auto-generating reports - 4-hour reports become 15-minute tasks, (3) Handling client communication - AI manages 70-80% of routine queries, (4) Optimizing campaigns 24/7 - no manual bid adjustments needed. Result: agencies handle 2-3x more clients with same team.',
  },
  {
    question: 'What is the cost of AI automation for a marketing agency?',
    answer: 'Agency AI automation typically costs $100K-$250K for full implementation. Starter package (reporting + content assist): $75K-$125K. Growth package (+ client AI + campaign optimization): $125K-$200K. Enterprise (full automation suite): $200K-$300K. Monthly ongoing: $5K-$15K. Most agencies see payback in 4-6 months.',
  },
  {
    question: 'Can AI create quality content for clients?',
    answer: 'AI produces excellent first drafts that require human refinement. Best practices: (1) Use AI for 80% of initial content creation, (2) Human editors refine voice, accuracy, and creativity, (3) Build brand-specific AI models over time. Result: 5x content output at 55% lower cost, with maintained quality through human oversight.',
  },
  {
    question: 'How does AI reporting work for agencies?',
    answer: 'AI reporting automates: (1) Data collection from all ad platforms and analytics tools, (2) Performance analysis and trend identification, (3) Insight generation and recommendations, (4) Visual report creation in client-branded templates, (5) Email delivery on schedule. Agencies save 80-90% of reporting time while delivering more valuable insights.',
  },
  {
    question: 'Will clients know we are using AI?',
    answer: 'That is your choice. Many agencies: (1) Use AI as internal efficiency tool - clients see faster, better results, (2) Position AI as a value-add - "AI-powered optimization", (3) White-label AI tools for clients as premium service. We recommend transparency about AI-assisted work while emphasizing human oversight and strategy.',
  },
]

export default function AgenciesIndustryPage() {
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
      <Header />
      <main className="min-h-screen bg-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero */}
        <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-muted/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6">
              AI for Marketing Agencies
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Handle 3x More Clients. Without Hiring.
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              How marketing agencies use AI to achieve <span className="text-accent">5x content output</span>, 
              <span className="text-accent"> 88% faster reporting</span>, and <span className="text-accent">$420K revenue per employee</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>340% avg. ROI</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4 text-accent" />
                <span>2-3 month implementation</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Zap className="w-4 h-4 text-accent" />
                <span>5 month payback</span>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation Use Cases for Agencies
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Scale your agency without the overhead.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-secondary border border-muted/20 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <useCase.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-serif text-foreground">{useCase.title}</h3>
                  </div>
                  <p className="text-muted mb-6">{useCase.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {useCase.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-semibold text-accent">{metric.value}</p>
                        <p className="text-xs text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <p className="text-accent tracking-[0.3em] uppercase text-sm text-center mb-4">
              Case Study
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              From 25 to 72 Clients in 18 Months
            </h2>
            <p className="text-muted text-center mb-12">
              {caseStudy.industry} • {caseStudy.company}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-primary border border-muted/20 rounded-xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-4">The Challenge</h3>
                <p className="text-muted">{caseStudy.challenge}</p>
              </div>
              <div className="bg-primary border border-accent/30 rounded-xl p-8">
                <h3 className="text-lg font-medium text-foreground mb-4">Our Solution</h3>
                <ul className="space-y-2">
                  {caseStudy.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-primary border border-muted/20 rounded-xl overflow-hidden">
              <div className="grid grid-cols-4 bg-secondary/50 p-4 border-b border-muted/20">
                <div className="text-sm font-medium text-muted">Metric</div>
                <div className="text-sm font-medium text-muted text-center">Before</div>
                <div className="text-sm font-medium text-muted text-center">After</div>
                <div className="text-sm font-medium text-muted text-right">Change</div>
              </div>
              {caseStudy.results.map((result, index) => (
                <div key={index} className="grid grid-cols-4 p-4 border-b border-muted/10 last:border-0">
                  <div className="text-foreground">{result.metric}</div>
                  <div className="text-muted text-center">{result.before}</div>
                  <div className="text-foreground text-center">{result.after}</div>
                  <div className="text-accent font-semibold text-right">{result.change}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-primary border border-muted/20 rounded-lg p-6">
                <p className="text-sm text-muted mb-1">Investment</p>
                <p className="text-2xl font-semibold text-foreground">{caseStudy.investment}</p>
              </div>
              <div className="bg-primary border border-accent/30 rounded-lg p-6">
                <p className="text-sm text-muted mb-1">ROI</p>
                <p className="text-2xl font-semibold text-accent">{caseStudy.roi}</p>
              </div>
              <div className="bg-primary border border-muted/20 rounded-lg p-6">
                <p className="text-sm text-muted mb-1">Payback</p>
                <p className="text-2xl font-semibold text-foreground">{caseStudy.payback}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Agency AI Automation FAQs
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-secondary border border-muted/20 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 md:px-8 bg-secondary/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ready to Scale Your Agency with AI?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Join agencies handling 3x more clients without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/resources/ai-automation-costs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-muted/40 text-foreground font-semibold rounded hover:bg-muted/10 transition-colors"
              >
                View Pricing
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
      </main>
      <Footer />
    </>
  )
}
