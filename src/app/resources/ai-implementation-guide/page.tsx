import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Check, Clock, AlertTriangle, CheckCircle, ArrowRight, Zap, Users, Settings, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI Implementation Guide | Timeline, Process & Best Practices 2025',
  description: 'Complete guide to implementing AI in your business. Learn the 4-phase implementation process, realistic timelines, common pitfalls, and success factors. Based on 47+ enterprise AI deployments.',
  keywords: [
    'AI implementation guide',
    'how to implement AI',
    'AI implementation timeline',
    'AI deployment process',
    'AI integration steps',
    'enterprise AI implementation',
    'AI project management',
    'AI rollout strategy',
  ],
  alternates: {
    canonical: '/resources/ai-implementation-guide',
  },
  openGraph: {
    title: 'AI Implementation Guide | Prime Associates',
    description: 'Complete 4-phase guide to implementing AI based on 47+ deployments.',
    type: 'article',
  },
}

const phases = [
  {
    number: '01',
    name: 'Discovery & Assessment',
    duration: '2-3 weeks',
    description: 'Audit current processes, identify automation opportunities, and create ROI projections.',
    activities: [
      'Process mapping and documentation',
      'Data infrastructure assessment',
      'Integration requirements analysis',
      'ROI modeling and prioritization',
      'Stakeholder alignment sessions',
    ],
    deliverables: [
      'Automation opportunity matrix',
      'Data readiness report',
      'Projected ROI by use case',
      'Implementation roadmap',
    ],
    keyMetrics: 'Identify 15-30 automation opportunities',
  },
  {
    number: '02',
    name: 'Design & Architecture',
    duration: '2-4 weeks',
    description: 'Design AI solutions, select technologies, and plan integrations with existing systems.',
    activities: [
      'Solution architecture design',
      'Technology stack selection',
      'Integration mapping',
      'Security and compliance planning',
      'User experience design',
    ],
    deliverables: [
      'Technical architecture document',
      'Integration specifications',
      'Security compliance checklist',
      'UI/UX wireframes',
    ],
    keyMetrics: 'Architecture approved by all stakeholders',
  },
  {
    number: '03',
    name: 'Build & Deploy',
    duration: '4-8 weeks',
    description: 'Develop AI systems, integrate with existing tools, and deploy in phased rollout.',
    activities: [
      'AI model development/configuration',
      'System integrations',
      'Testing and QA',
      'Phased deployment',
      'Performance optimization',
    ],
    deliverables: [
      'Deployed AI systems',
      'Integration documentation',
      'Testing reports',
      'Monitoring dashboards',
    ],
    keyMetrics: 'First AI system live within 6 weeks',
  },
  {
    number: '04',
    name: 'Optimize & Scale',
    duration: 'Ongoing',
    description: 'Monitor performance, refine AI models, and expand automation to additional processes.',
    activities: [
      'Performance monitoring',
      'Model refinement and training',
      'User feedback integration',
      'Expansion planning',
      'ROI tracking and reporting',
    ],
    deliverables: [
      'Monthly performance reports',
      'Optimization recommendations',
      'Expansion roadmap',
      'ROI documentation',
    ],
    keyMetrics: 'Continuous improvement cycle established',
  },
]

const timelines = [
  {
    scope: 'Single Process',
    example: 'Customer support chatbot',
    duration: '6-8 weeks',
    investment: '$50K-$100K',
  },
  {
    scope: 'Department-Wide',
    example: 'Sales automation suite',
    duration: '10-14 weeks',
    investment: '$100K-$250K',
  },
  {
    scope: 'Multi-Department',
    example: 'Sales + Support + Marketing',
    duration: '16-24 weeks',
    investment: '$250K-$500K',
  },
  {
    scope: 'Enterprise Transformation',
    example: 'Company-wide AI adoption',
    duration: '6-12 months',
    investment: '$500K-$2M+',
  },
]

const commonPitfalls = [
  {
    pitfall: 'Starting without clear goals',
    impact: 'Projects stall, ROI unclear',
    solution: 'Define specific, measurable outcomes before starting',
  },
  {
    pitfall: 'Ignoring data quality',
    impact: 'AI performs poorly, requires rework',
    solution: 'Assess and clean data in Discovery phase',
  },
  {
    pitfall: 'Underestimating change management',
    impact: 'Low adoption, user resistance',
    solution: 'Include training and communication in every phase',
  },
  {
    pitfall: 'Trying to automate everything at once',
    impact: 'Overwhelm, delayed results',
    solution: 'Prioritize high-impact, low-complexity wins first',
  },
  {
    pitfall: 'No executive sponsor',
    impact: 'Resources pulled, project deprioritized',
    solution: 'Secure C-level champion before starting',
  },
  {
    pitfall: 'Building custom when off-the-shelf works',
    impact: 'Wasted time and budget',
    solution: 'Evaluate existing solutions before custom development',
  },
]

const successFactors = [
  {
    icon: Users,
    title: 'Executive Sponsorship',
    description: 'C-level champion who ensures resources, removes blockers, and drives adoption.',
  },
  {
    icon: Settings,
    title: 'Data Readiness',
    description: 'Clean, accessible data is the foundation. Budget 10-15% for data preparation.',
  },
  {
    icon: TrendingUp,
    title: 'Quick Wins First',
    description: 'Deploy highest-ROI, lowest-complexity automations first to build momentum.',
  },
  {
    icon: Zap,
    title: 'Iterative Approach',
    description: 'Launch MVP fast, gather feedback, improve. Perfection kills progress.',
  },
]

const faqs = [
  {
    question: 'How long does AI implementation take?',
    answer: 'AI implementation timelines vary by scope: Single process (chatbot, email automation): 6-8 weeks. Department-wide (sales suite): 10-14 weeks. Multi-department: 16-24 weeks. Enterprise transformation: 6-12 months. These are deployment timelines—first results often appear within 4-6 weeks of starting.',
  },
  {
    question: 'What is the first step in implementing AI?',
    answer: 'The first step is Discovery & Assessment (2-3 weeks). This involves: (1) Mapping current processes and pain points, (2) Assessing data infrastructure and quality, (3) Identifying automation opportunities, (4) Prioritizing by ROI and feasibility, (5) Creating an implementation roadmap. Skip this step at your peril—it prevents wasted effort and ensures you start with highest-impact automations.',
  },
  {
    question: 'What percentage of AI projects fail?',
    answer: 'Industry estimates suggest 70-85% of AI projects fail to reach production. Common reasons: unclear goals, poor data quality, lack of executive support, unrealistic expectations, and change management failures. Our structured 4-phase approach and hands-on execution model achieves 92% success rate by addressing these factors systematically.',
  },
  {
    question: 'Do I need to hire AI engineers to implement AI?',
    answer: 'No—that is the advantage of working with an AI accelerator. We provide the engineering team, reducing your hiring burden. For ongoing maintenance, most businesses need 0-2 internal resources for oversight, not a full AI team. Our implementations are designed for sustainability without requiring you to build an internal AI department.',
  },
  {
    question: 'How do I measure AI implementation success?',
    answer: 'Key metrics to track: (1) Time savings - hours/week automated, (2) Cost reduction - labor and operational costs, (3) Revenue impact - increased sales, reduced churn, (4) Accuracy - error rate compared to manual process, (5) User adoption - active usage percentage. We establish baseline metrics in Discovery and track improvements throughout.',
  },
  {
    question: 'What are the biggest risks in AI implementation?',
    answer: 'Top risks and mitigations: (1) Data quality issues - mitigate with thorough assessment upfront, (2) Integration complexity - mitigate with detailed architecture planning, (3) User adoption - mitigate with change management and training, (4) Scope creep - mitigate with phased approach and clear priorities, (5) Security/compliance - mitigate with security-first design and audits.',
  },
]

export default function AIImplementationGuidePage() {
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
              Implementation Guide
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              How to Implement AI in Your Business
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              The complete 4-phase framework based on <span className="text-accent">47+ enterprise deployments</span>. 
              From discovery to scale—with realistic timelines and proven best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4 text-accent" />
                <span>6 weeks to first deployment</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>92% project success rate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 px-4 bg-secondary/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-4 text-center">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="text-3xl font-serif text-accent mb-2">{phase.number}</div>
                  <div className="text-sm text-foreground font-medium">{phase.name}</div>
                  <div className="text-xs text-muted mt-1">{phase.duration}</div>
                  {index < phases.length - 1 && (
                    <ArrowRight className="absolute right-0 top-4 w-4 h-4 text-muted/40 hidden md:block -mr-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Phases */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              The 4-Phase Implementation Process
            </h2>

            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div key={index} className="bg-secondary border border-muted/20 rounded-xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-serif text-accent/30">{phase.number}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-serif text-foreground">{phase.name}</h3>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-muted mb-6">{phase.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">Key Activities</h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-foreground mb-3">Deliverables</h4>
                          <ul className="space-y-2">
                            {phase.deliverables.map((deliverable, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                                <CheckCircle className="w-4 h-4 text-muted/60 flex-shrink-0 mt-0.5" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-muted/10">
                        <span className="text-xs text-muted">Success metric: </span>
                        <span className="text-xs text-accent">{phase.keyMetrics}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timelines by Scope */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Realistic Implementation Timelines
            </h2>
            <p className="text-muted text-center mb-12">
              Duration depends on scope and complexity.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelines.map((timeline, index) => (
                <div key={index} className="bg-primary border border-muted/20 rounded-xl p-6 text-center">
                  <h3 className="text-lg font-serif text-foreground mb-2">{timeline.scope}</h3>
                  <p className="text-2xl font-semibold text-accent mb-2">{timeline.duration}</p>
                  <p className="text-sm text-muted mb-4">{timeline.example}</p>
                  <p className="text-xs text-muted/60">{timeline.investment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
              Common Pitfalls to Avoid
            </h2>
            <p className="text-muted text-center mb-12">
              70-85% of AI projects fail. Here&apos;s how to be in the successful minority.
            </p>

            <div className="space-y-4">
              {commonPitfalls.map((item, index) => (
                <div key={index} className="bg-secondary border border-muted/20 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-foreground font-medium">{item.pitfall}</span>
                    </div>
                    <div className="text-muted text-sm">{item.impact}</div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted">{item.solution}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Factors */}
        <section className="py-20 px-4 md:px-8 bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              Critical Success Factors
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successFactors.map((factor, index) => (
                <div key={index} className="bg-primary border border-muted/20 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-accent/10 flex items-center justify-center">
                    <factor.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-foreground font-medium mb-2">{factor.title}</h3>
                  <p className="text-sm text-muted">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">
              AI Implementation FAQs
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
              Ready to Start Your AI Implementation?
            </h2>
            <p className="text-muted mb-8 text-lg">
              Let us handle the complexity. First deployment in 6 weeks.
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
                Start Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
