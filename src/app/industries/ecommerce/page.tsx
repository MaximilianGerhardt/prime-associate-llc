import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, TrendingUp, Clock, ShoppingCart, Zap, BarChart3, MessageSquare, Package } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Automation for E-Commerce | Increase AOV, Reduce Cart Abandonment',
  description: 'How e-commerce brands use AI to increase average order value by 35%, reduce cart abandonment by 25%, and automate customer service. Real data from DTC and B2B e-commerce implementations.',
  keywords: [
    'AI for ecommerce',
    'ecommerce automation',
    'AI product recommendations',
    'reduce cart abandonment AI',
    'AI customer service ecommerce',
    'ecommerce chatbot',
    'AI for online stores',
    'DTC AI automation',
  ],
  alternates: {
    canonical: '/industries/ecommerce',
  },
  openGraph: {
    title: 'AI Automation for E-Commerce | Prime Associates',
    description: 'How e-commerce brands use AI to boost AOV by 35% and recover 25% of abandoned carts.',
    type: 'article',
  },
}

const useCases = [
  {
    icon: ShoppingCart,
    title: 'AI Cart Recovery',
    description: 'Intelligent abandoned cart sequences with personalized incentives based on customer lifetime value and purchase probability.',
    metrics: [
      { label: 'Cart recovery rate', value: '28%' },
      { label: 'Revenue recovered/mo', value: '$127K' },
      { label: 'Email open rate', value: '62%' },
    ],
  },
  {
    icon: Package,
    title: 'Personalized Recommendations',
    description: 'AI-powered product recommendations across site, email, and ads that increase cross-sell and upsell conversion.',
    metrics: [
      { label: 'AOV increase', value: '+35%' },
      { label: 'Recommendation CTR', value: '18%' },
      { label: 'Cross-sell revenue', value: '+42%' },
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Shopping Assistant',
    description: '24/7 AI concierge that answers product questions, provides recommendations, and handles returns/exchanges.',
    metrics: [
      { label: 'Conversion lift', value: '+23%' },
      { label: 'Support cost reduction', value: '-65%' },
      { label: 'Response time', value: '<5 sec' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Demand Forecasting',
    description: 'AI predicts demand 90 days out with 94% accuracy, optimizing inventory and reducing stockouts.',
    metrics: [
      { label: 'Forecast accuracy', value: '94%' },
      { label: 'Stockout reduction', value: '-78%' },
      { label: 'Inventory costs', value: '-22%' },
    ],
  },
]

const caseStudy = {
  company: 'DTC Fashion Brand',
  industry: 'Apparel & Accessories',
  revenue: '$8.2M → $14.5M',
  timeframe: '12 months',
  challenge: 'High cart abandonment (72%), low repeat purchase rate (18%), and customer service team overwhelmed with sizing/return questions.',
  solution: [
    'Deployed AI-powered cart recovery with dynamic incentive optimization',
    'Implemented personalized product recommendations across all touchpoints',
    'Created AI shopping assistant for sizing, styling, and product questions',
    'Built predictive inventory management system',
  ],
  results: [
    { metric: 'Cart abandonment', before: '72%', after: '54%', change: '-25%' },
    { metric: 'Average order value', before: '$85', after: '$115', change: '+35%' },
    { metric: 'Repeat purchase rate', before: '18%', after: '34%', change: '+89%' },
    { metric: 'Annual revenue', before: '$8.2M', after: '$14.5M', change: '+77%' },
  ],
  investment: '$185,000',
  roi: '3,400%',
  payback: '3.2 months',
}

const faqs = [
  {
    question: 'How much does AI automation cost for an e-commerce store?',
    answer: 'E-commerce AI automation typically costs $75K-$300K depending on scope. Basic automation (chatbot + cart recovery): $75K-$125K. Growth package (+ recommendations + email): $125K-$200K. Enterprise (+ demand forecasting + full personalization): $200K-$300K. Monthly ongoing costs: $3K-$15K for software and support.',
  },
  {
    question: 'What is the ROI of AI for e-commerce businesses?',
    answer: 'E-commerce businesses typically see 300-500% ROI within 12 months. Key drivers: 20-35% increase in AOV from recommendations, 15-28% cart recovery rate, 50-70% reduction in support costs, and 15-25% improvement in repeat purchase rate. Average payback period is 4-6 months.',
  },
  {
    question: 'Can AI reduce cart abandonment rates?',
    answer: 'Yes, AI typically reduces cart abandonment by 15-25%. This is achieved through: (1) Personalized exit-intent offers based on customer value, (2) Intelligent email/SMS sequences with optimal timing, (3) AI chatbot intervention for hesitant shoppers, (4) Dynamic pricing and incentive optimization.',
  },
  {
    question: 'How does AI product recommendation work?',
    answer: 'AI recommendation engines analyze: browsing behavior, purchase history, similar customer patterns, inventory levels, and margin optimization. They deliver personalized suggestions via: on-site widgets, email campaigns, retargeting ads, and checkout upsells. Typical AOV increase: 25-40%.',
  },
  {
    question: 'What platforms does AI automation integrate with?',
    answer: 'We integrate with all major e-commerce platforms: Shopify, Shopify Plus, WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud. Also: Klaviyo, Attentive, Gorgias, Zendesk, Google Analytics, Meta Ads, and custom systems via API.',
  },
]

export default function EcommerceIndustryPage() {
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
              AI for E-Commerce
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Increase AOV. Recover Carts. Scale Profitably.
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              How DTC and B2B e-commerce brands use AI to achieve <span className="text-accent">35% higher AOV</span>, 
              <span className="text-accent"> 25% lower abandonment</span>, and <span className="text-accent">65% support cost reduction</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>385% avg. ROI</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4 text-accent" />
                <span>2-4 month implementation</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Zap className="w-4 h-4 text-accent" />
                <span>4-6 month payback</span>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              AI Automation Use Cases for E-Commerce
            </h2>
            <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
              Revenue-driving automation that pays for itself.
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
              From $8.2M to $14.5M Revenue in 12 Months
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
              E-Commerce AI Automation FAQs
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
              Ready to Scale Your E-Commerce with AI?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Join DTC brands achieving 300-500% ROI with AI automation.
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
