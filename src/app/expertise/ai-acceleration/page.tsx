import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Brain, TrendingUp, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'AI Business Acceleration | Enterprise AI Systems That Generate Revenue Day One',
  description: 'Prime Associates LLC deploys battle-tested AI systems that generate revenue from day one. Our AI acceleration services include autonomous revenue systems, instant deployment (days not quarters), compound growth engines, and precision targeting. We partner with ventures seeking $500K-$10M+ to transform their business with AI. No pilots. No experiments. Only results.',
  keywords: [
    'AI Business Acceleration',
    'Enterprise AI Integration',
    'AI Revenue Systems',
    'Autonomous Sales AI',
    'AI-Driven Growth',
    'Machine Learning Revenue',
    'AI Implementation Services',
    'AI Business Transformation',
    'Revenue Generating AI',
    'AI Systems Deployment',
  ],
  alternates: {
    canonical: '/expertise/ai-acceleration',
  },
  openGraph: {
    title: 'AI Business Acceleration | Prime Associates LLC',
    description: 'Battle-tested AI systems that generate revenue from day one. Autonomous systems, instant deployment, compound growth.',
    type: 'website',
  },
}

const capabilities = [
  {
    icon: Brain,
    title: 'Autonomous Revenue Systems',
    description: 'Self-optimizing AI that learns your market and scales without human intervention.',
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'No 6-month implementations. Our systems go live in days, not quarters.',
  },
  {
    icon: TrendingUp,
    title: 'Compound Growth Engine',
    description: 'Every interaction makes the system smarter. Revenue compounds exponentially.',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'AI that identifies and converts high-value prospects before your competitors know they exist.',
  },
]

export default function AIAccelerationPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">AI Acceleration</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            We Don't Predict the Future.
            <br />
            <span className="text-accent">We Deploy It.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            While others debate AI ethics in boardrooms, we're deploying systems that print money. 
            The gap between AI adopters and AI resisters isn't closing—it's becoming a chasm.
          </p>
          <Link href="/#apply">
            <Button size="lg">
              Apply for AI Acceleration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Uncomfortable Truth About AI
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              95% of "AI implementations" are expensive science projects. We build the other 5%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div 
                key={index}
                className="bg-secondary border border-muted/20 p-8 hover:border-accent/30 transition-colors"
              >
                <cap.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-serif text-xl text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-accent pl-8 py-4">
            <p className="font-serif text-2xl md:text-3xl text-foreground italic mb-6">
              "The companies that will dominate the next decade aren't experimenting with AI. 
              They're already deploying it at scale while their competitors attend webinars."
            </p>
            <p className="text-accent">— Prime Associates Investment Thesis</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            This Is Not For Everyone
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            We work with founders who understand that hesitation is the enemy of growth. 
            If you need to "think about it," you're not ready for what we offer.
          </p>
          <Link href="/#apply">
            <Button>
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-muted/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-8 text-center">
            Explore More
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/expertise/revenue-systems"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Next Capability</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                Revenue Systems →
              </h3>
              <p className="text-muted text-sm mt-2">24/7 autonomous sales infrastructure</p>
            </Link>
            <Link 
              href="/industries/saas"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Industry Focus</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                AI for SaaS →
              </h3>
              <p className="text-muted text-sm mt-2">Reduce churn, scale revenue</p>
            </Link>
            <Link 
              href="/resources/ai-automation-costs"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Resources</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                AI Automation Costs →
              </h3>
              <p className="text-muted text-sm mt-2">Real pricing and ROI data</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
