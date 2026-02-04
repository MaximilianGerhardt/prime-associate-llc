import { Metadata } from 'next'
import { Check, X, TrendingUp, Clock, DollarSign, Users, Zap, Calculator } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does AI Automation Cost? | Real Pricing & ROI Data 2025',
  description: 'Discover real AI automation costs for businesses with $500K-$10M+ revenue. Detailed pricing breakdowns, ROI calculations, implementation timelines, and cost comparisons. Based on 47+ enterprise implementations.',
  keywords: [
    'AI automation cost',
    'how much does AI automation cost',
    'AI implementation pricing',
    'AI automation ROI',
    'enterprise AI costs',
    'AI automation for business cost',
    'AI investment calculator',
    'AI automation pricing guide',
  ],
  alternates: {
    canonical: '/resources/ai-automation-costs',
  },
  openGraph: {
    title: 'How Much Does AI Automation Cost? | Real Pricing & ROI Data',
    description: 'Real AI automation costs based on 47+ implementations. Pricing from $50K to $2M+ with ROI breakdowns.',
    type: 'article',
  },
}

const costTiers = [
  {
    name: 'Starter Automation',
    investment: '$50K - $150K',
    timeline: '2-3 months',
    bestFor: 'Single department, 1-2 processes',
    includes: [
      'AI chatbot or virtual assistant',
      'Basic workflow automation',
      'CRM integration',
      'Email automation sequences',
      'Basic analytics dashboard',
    ],
    excludes: [
      'Custom AI model training',
      'Multi-department integration',
      'Predictive analytics',
    ],
    roi: '150-300%',
    roiTimeline: '6-9 months',
  },
  {
    name: 'Growth Automation',
    investment: '$150K - $500K',
    timeline: '3-6 months',
    bestFor: 'Multi-department, 5-10 processes',
    includes: [
      'Custom AI sales assistant',
      'Lead scoring & qualification AI',
      'Automated customer journey',
      'Predictive analytics',
      'Multi-channel automation',
      'Custom integrations',
      'Dedicated support team',
    ],
    excludes: [
      'Fully autonomous systems',
      'Enterprise-wide deployment',
    ],
    roi: '300-500%',
    roiTimeline: '9-12 months',
    popular: true,
  },
  {
    name: 'Enterprise Transformation',
    investment: '$500K - $2M+',
    timeline: '6-12 months',
    bestFor: 'Company-wide, 20+ processes',
    includes: [
      'Fully autonomous AI systems',
      'Custom LLM fine-tuning',
      'Predictive revenue modeling',
      'AI-driven decision systems',
      'Complete tech stack integration',
      '24/7 autonomous operations',
      'Dedicated AI team',
      'Ongoing optimization',
    ],
    excludes: [],
    roi: '500-1000%+',
    roiTimeline: '12-18 months',
  },
]

const costBreakdown = [
  { category: 'AI Software & Licensing', percentage: 25, range: '$12K - $500K/year' },
  { category: 'Custom Development', percentage: 35, range: '$25K - $750K' },
  { category: 'Integration & Setup', percentage: 20, range: '$10K - $300K' },
  { category: 'Training & Change Management', percentage: 10, range: '$5K - $150K' },
  { category: 'Ongoing Support & Optimization', percentage: 10, range: '$10K - $200K/year' },
]

const industryBenchmarks = [
  { industry: 'SaaS', avgInvestment: '$180K', avgROI: '412%', avgPayback: '7 months' },
  { industry: 'E-Commerce', avgInvestment: '$220K', avgROI: '385%', avgPayback: '8 months' },
  { industry: 'Professional Services', avgInvestment: '$150K', avgROI: '340%', avgPayback: '9 months' },
  { industry: 'Manufacturing', avgInvestment: '$350K', avgROI: '290%', avgPayback: '14 months' },
  { industry: 'Financial Services', avgInvestment: '$450K', avgROI: '520%', avgPayback: '10 months' },
]

const faqs = [
  {
    question: 'How much does basic AI automation cost for a small business?',
    answer: 'Basic AI automation for small businesses typically costs $50,000-$150,000 for initial implementation. This includes AI chatbots, email automation, and basic workflow automation. Monthly ongoing costs range from $2,000-$10,000 depending on usage and support level. ROI typically reaches 150-300% within 6-9 months.',
  },
  {
    question: 'What is the ROI of AI automation for a $1M revenue business?',
    answer: 'For a $1M revenue business, AI automation typically delivers 200-400% ROI within 12 months. Based on our portfolio data, the average savings is $180,000/year in labor costs, plus $250,000 in additional revenue from improved lead conversion and 24/7 availability. Typical investment: $150,000-$300,000.',
  },
  {
    question: 'How long does AI automation implementation take?',
    answer: 'Implementation timelines vary by scope: Basic automation (1-2 processes): 2-3 months. Growth automation (5-10 processes): 3-6 months. Enterprise transformation (20+ processes): 6-12 months. Rush implementations are possible at 1.5x cost with dedicated teams.',
  },
  {
    question: 'What are the hidden costs of AI automation?',
    answer: 'Hidden costs to budget for: (1) Data preparation and cleanup: 10-15% of project cost, (2) Integration with legacy systems: 15-25% additional, (3) Change management and training: $5,000-$50,000, (4) Ongoing optimization: 10-15% of initial investment annually, (5) Scaling costs as usage grows: variable.',
  },
  {
    question: 'Is it cheaper to build AI in-house or hire an accelerator?',
    answer: 'In-house AI development costs 2-3x more than partnering with a specialized accelerator. In-house: $500K-$2M for team salaries, infrastructure, and 12-24 month development. Accelerator: $150K-$500K with 3-6 month deployment and proven systems. Accelerators also reduce risk with battle-tested solutions.',
  },
  {
    question: 'What ongoing costs should I expect after AI implementation?',
    answer: 'Ongoing costs typically run 15-25% of initial investment annually: Software licensing: $2,000-$50,000/month. Support and maintenance: $3,000-$20,000/month. Optimization and updates: $5,000-$30,000/quarter. Usage-based API costs: Variable based on volume.',
  },
  {
    question: 'How do AI automation costs compare to hiring employees?',
    answer: 'AI automation typically costs 60-80% less than equivalent human labor over 3 years. Example: Customer service (10 agents at $50K = $500K/year) vs AI chatbot ($150K setup + $50K/year = $350K over 3 years vs $1.5M). AI also provides 24/7 availability and scales without linear cost increases.',
  },
  {
    question: 'What factors most impact AI automation pricing?',
    answer: 'Key pricing factors: (1) Number of processes automated, (2) Data complexity and volume, (3) Integration requirements with existing systems, (4) Custom vs off-the-shelf solutions, (5) Industry compliance requirements, (6) Speed of implementation, (7) Level of autonomy required.',
  },
]

export default function AIAutomationCostsPage() {
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
              Real Data • Real Costs • Real ROI
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              How Much Does AI Automation Cost?
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Transparent pricing based on <span className="text-accent">47+ enterprise implementations</span>. 
              From $50K starter projects to $2M+ transformations—with real ROI data.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <DollarSign className="w-4 h-4 text-accent" />
                <span>$50K - $2M+ range</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>150-1000% ROI</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4 text-accent" />
                <span>2-12 month implementation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="py-12 px-4 bg-secondary/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary border border-accent/30 rounded-xl p-8">
              <h2 className="text-xl font-serif text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Quick Answer
              </h2>
              <p className="text-muted leading-relaxed">
                <strong className="text-foreground">AI automation costs $50,000 to $2,000,000+</strong> depending on scope, 
                with most mid-market businesses investing <strong className="text-accent">$150,000-$500,000</strong> for 
                meaningful transformation. Average ROI is <strong className="text-accent">300-500%</strong> within 12 months. 
                The key factors are: number of processes automated, integration complexity, and level of customization required.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation Investment Tiers
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Based on real implementation data from our portfolio companies.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {costTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative bg-secondary border rounded-xl p-8 ${
                    tier.popular ? 'border-accent' : 'border-muted/20'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-serif text-foreground mb-2">{tier.name}</h3>
                  <p className="text-3xl font-semibold text-accent mb-1">{tier.investment}</p>
                  <p className="text-sm text-muted mb-6">Timeline: {tier.timeline}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-muted mb-2">Best for:</p>
                    <p className="text-foreground">{tier.bestFor}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-foreground mb-3">Includes:</p>
                    <ul className="space-y-2">
                      {tier.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tier.excludes.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-foreground mb-3">Not included:</p>
                      <ul className="space-y-2">
                        {tier.excludes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted/60">
                            <X className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6 border-t border-muted/20">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">Expected ROI:</span>
                      <span className="text-accent font-semibold">{tier.roi}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-muted">Payback period:</span>
                      <span className="text-foreground">{tier.roiTimeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Where Does the Money Go?
            </h2>
            <p className="text-muted text-center mb-12">
              Typical cost breakdown for AI automation projects.
            </p>

            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <div key={index} className="bg-primary border border-muted/20 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-medium">{item.category}</span>
                    <span className="text-accent font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2 mb-2">
                    <div 
                      className="bg-accent h-2 rounded-full" 
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted">{item.range}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Industry Benchmarks
            </h2>
            <p className="text-muted text-center mb-12">
              Average investment and ROI by industry from our portfolio.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-muted/20">
                    <th className="text-left py-4 px-4 text-muted font-medium">Industry</th>
                    <th className="text-right py-4 px-4 text-muted font-medium">Avg. Investment</th>
                    <th className="text-right py-4 px-4 text-muted font-medium">Avg. ROI</th>
                    <th className="text-right py-4 px-4 text-muted font-medium">Payback Period</th>
                  </tr>
                </thead>
                <tbody>
                  {industryBenchmarks.map((row, index) => (
                    <tr key={index} className="border-b border-muted/10">
                      <td className="py-4 px-4 text-foreground">{row.industry}</td>
                      <td className="py-4 px-4 text-right text-foreground">{row.avgInvestment}</td>
                      <td className="py-4 px-4 text-right text-accent font-semibold">{row.avgROI}</td>
                      <td className="py-4 px-4 text-right text-muted">{row.avgPayback}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* AI vs Human Cost Comparison */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation vs. Human Labor: Cost Comparison
            </h2>
            <p className="text-muted text-center mb-12">
              3-year total cost of ownership comparison.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary border border-muted/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-muted" />
                  <h3 className="text-xl font-serif text-foreground">Human Team</h3>
                </div>
                <p className="text-sm text-muted mb-6">10-person customer service team</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted">Salaries (3 years)</span>
                    <span className="text-foreground">$1,500,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Benefits & overhead</span>
                    <span className="text-foreground">$450,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Training & turnover</span>
                    <span className="text-foreground">$150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Management</span>
                    <span className="text-foreground">$200,000</span>
                  </div>
                  <div className="pt-3 border-t border-muted/20 flex justify-between font-semibold">
                    <span className="text-foreground">Total 3-Year Cost</span>
                    <span className="text-foreground">$2,300,000</span>
                  </div>
                </div>
                <p className="text-xs text-muted mt-4">Available: 8am-6pm, Mon-Fri</p>
              </div>

              <div className="bg-primary border border-accent/30 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-serif text-foreground">AI Automation</h3>
                </div>
                <p className="text-sm text-muted mb-6">Equivalent AI customer service system</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted">Initial implementation</span>
                    <span className="text-foreground">$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Annual licensing (3 years)</span>
                    <span className="text-foreground">$150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Maintenance & updates</span>
                    <span className="text-foreground">$75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Human oversight (2 people)</span>
                    <span className="text-foreground">$300,000</span>
                  </div>
                  <div className="pt-3 border-t border-accent/30 flex justify-between font-semibold">
                    <span className="text-foreground">Total 3-Year Cost</span>
                    <span className="text-accent">$725,000</span>
                  </div>
                </div>
                <p className="text-xs text-accent mt-4">Available: 24/7/365 • Scales infinitely</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-serif text-foreground">
                <span className="text-accent">68% cost reduction</span> with AI automation
              </p>
              <p className="text-muted mt-2">Plus: instant scaling, zero sick days, consistent quality</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation Cost FAQs
            </h2>
            <p className="text-muted text-center mb-12">
              Answers to the most common pricing questions.
            </p>

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
            <div className="flex items-center justify-center gap-2 mb-6">
              <Calculator className="w-6 h-6 text-accent" />
              <span className="text-accent tracking-widest uppercase text-sm">Get Your Custom Quote</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Ready to Calculate Your AI ROI?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Every business is different. Get a custom cost analysis based on your specific 
              processes, goals, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/newsletter/calculator"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Try ROI Calculator
              </Link>
              <Link 
                href="/#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-colors"
              >
                Request Custom Quote
              </Link>
            </div>
          </div>
        </section>
    </>
  )
}
