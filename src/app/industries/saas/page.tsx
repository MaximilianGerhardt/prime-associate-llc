import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, TrendingUp, Clock, Users, Zap, BarChart3, MessageSquare, Target } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Automation for SaaS Companies | Reduce Churn, Scale Revenue',
  description: 'How SaaS companies use AI automation to reduce churn by 35%, increase trial conversions by 60%, and automate customer success. Real case studies and ROI data from B2B SaaS implementations.',
  keywords: [
    'AI for SaaS companies',
    'SaaS automation',
    'AI customer success SaaS',
    'reduce SaaS churn AI',
    'AI onboarding automation',
    'SaaS revenue automation',
    'AI for B2B SaaS',
    'SaaS growth automation',
  ],
  alternates: {
    canonical: '/industries/saas',
  },
  openGraph: {
    title: 'AI Automation for SaaS Companies | Prime Associates',
    description: 'How SaaS companies use AI to reduce churn by 35% and increase conversions by 60%.',
    type: 'article',
  },
}

const useCases = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Onboarding',
    description: 'Personalized onboarding sequences that adapt to user behavior, increasing activation rates by 40-60%.',
    metrics: [
      { label: 'Activation rate increase', value: '+58%' },
      { label: 'Time to value reduction', value: '-45%' },
      { label: 'Support tickets reduced', value: '-35%' },
    ],
  },
  {
    icon: Target,
    title: 'Predictive Churn Prevention',
    description: 'AI identifies at-risk customers 30 days before churn, enabling proactive retention campaigns.',
    metrics: [
      { label: 'Churn prediction accuracy', value: '87%' },
      { label: 'Churn reduction', value: '-35%' },
      { label: 'Customer save rate', value: '42%' },
    ],
  },
  {
    icon: Users,
    title: 'Automated Customer Success',
    description: '24/7 AI customer success manager that handles check-ins, feature adoption, and expansion opportunities.',
    metrics: [
      { label: 'NPS improvement', value: '+22 pts' },
      { label: 'Expansion revenue', value: '+45%' },
      { label: 'CSM capacity increase', value: '3x' },
    ],
  },
  {
    icon: BarChart3,
    title: 'AI Sales Qualification',
    description: 'Intelligent lead scoring and qualification that routes high-intent prospects to sales immediately.',
    metrics: [
      { label: 'Sales cycle reduction', value: '-40%' },
      { label: 'Lead qualification accuracy', value: '91%' },
      { label: 'Conversion rate', value: '+55%' },
    ],
  },
]

const caseStudy = {
  company: 'B2B SaaS Platform',
  industry: 'Project Management Software',
  arr: '$4.2M → $8.7M',
  timeframe: '14 months',
  challenge: 'High churn rate (8.5% monthly), low trial conversion (12%), and overwhelmed support team handling 2,000+ tickets/month.',
  solution: [
    'Deployed AI onboarding assistant with personalized activation paths',
    'Implemented predictive churn model with automated intervention workflows',
    'Created AI customer success agent for proactive engagement',
    'Built intelligent support chatbot handling 70% of tickets autonomously',
  ],
  results: [
    { metric: 'Monthly churn', before: '8.5%', after: '4.2%', change: '-51%' },
    { metric: 'Trial conversion', before: '12%', after: '24%', change: '+100%' },
    { metric: 'Support tickets (human)', before: '2,000/mo', after: '600/mo', change: '-70%' },
    { metric: 'ARR', before: '$4.2M', after: '$8.7M', change: '+107%' },
  ],
  investment: '$220,000',
  roi: '1,950%',
  payback: '4.5 months',
}

const faqs = [
  {
    question: 'How long does it take to implement AI automation for a SaaS company?',
    answer: 'Typical implementation for SaaS companies takes 3-4 months for core automation (onboarding, support, churn prediction). Full transformation including sales automation and customer success typically takes 5-7 months. We can deploy individual components in 4-6 weeks for faster time-to-value.',
  },
  {
    question: 'What ARR level should a SaaS company have before investing in AI automation?',
    answer: 'We recommend AI automation for SaaS companies with $1M+ ARR. At this stage, the cost savings and revenue impact justify the investment. Companies with $500K-$1M ARR can start with targeted automation (e.g., support chatbot only) at lower investment levels of $50K-$100K.',
  },
  {
    question: 'How does AI reduce SaaS churn?',
    answer: 'AI reduces SaaS churn through: (1) Predictive models that identify at-risk customers 30+ days before cancellation, (2) Automated intervention workflows triggered by risk signals, (3) Personalized re-engagement campaigns, (4) Proactive customer success outreach. Average churn reduction: 25-40%.',
  },
  {
    question: 'Can AI automation integrate with our existing SaaS stack?',
    answer: 'Yes, we integrate with all major SaaS tools: Stripe, Chargebee, Intercom, Zendesk, HubSpot, Salesforce, Segment, Mixpanel, Amplitude, and custom APIs. Integration typically takes 2-4 weeks depending on complexity. We provide custom connectors for proprietary systems.',
  },
  {
    question: 'What is the typical ROI for SaaS AI automation?',
    answer: 'Based on our portfolio, SaaS companies see 300-500% ROI within 12 months. Primary drivers: 30-50% reduction in support costs, 25-40% decrease in churn, 40-60% improvement in trial conversion. Average payback period is 5-7 months for growth-stage SaaS.',
  },
]

export default function SaaSIndustryPage() {
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
              AI for SaaS Companies
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Scale Revenue. Reduce Churn. Automate Success.
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              How B2B SaaS companies use AI automation to achieve <span className="text-accent">35% lower churn</span>, 
              <span className="text-accent"> 60% higher conversion</span>, and <span className="text-accent">3x customer success capacity</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>412% avg. ROI</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4 text-accent" />
                <span>3-4 month implementation</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Zap className="w-4 h-4 text-accent" />
                <span>7 month payback</span>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation Use Cases for SaaS
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Proven automation patterns that drive measurable growth.
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
              From $4.2M to $8.7M ARR in 14 Months
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
              SaaS AI Automation FAQs
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
              Ready to Scale Your SaaS with AI?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Join other B2B SaaS companies achieving 300-500% ROI with AI automation.
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
