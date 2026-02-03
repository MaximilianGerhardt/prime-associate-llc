import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, DollarSign, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Expertise | AI Business Acceleration, Revenue Systems & Market Dominance',
  description: 'Prime Associates LLC delivers three core capabilities that transform businesses: AI Business Acceleration for day-one ROI, Autonomous Revenue Systems operating 24/7, and Digital Market Dominance strategies that create category kings. We partner with ventures seeking $500K-$10M+ investment acceleration.',
  keywords: [
    'AI Business Acceleration',
    'Autonomous Revenue Systems',
    'Digital Market Dominance',
    'Business Acceleration Services',
    'AI Integration Consulting',
    'Sales Automation Systems',
    'Investment Acceleration',
    'AI Venture Capital',
    'Revenue Scaling Experts',
    'Category Creation Strategy',
  ],
  alternates: {
    canonical: '/expertise',
  },
  openGraph: {
    title: 'Our Expertise | Prime Associates LLC',
    description: 'AI Business Acceleration, Autonomous Revenue Systems, and Digital Market Dominance. Three pillars that compound into unstoppable growth.',
    type: 'website',
  },
}

const expertiseAreas = [
  {
    icon: Brain,
    title: 'AI Acceleration',
    description: 'Battle-tested AI systems that generate revenue from day one. No pilots. No experiments. Only results.',
    href: '/expertise/ai-acceleration',
    stat: 'Day 1 ROI',
  },
  {
    icon: DollarSign,
    title: 'Revenue Systems',
    description: 'Self-scaling revenue machines that work 24/7 without human bottlenecks.',
    href: '/expertise/revenue-systems',
    stat: '24/7 Active',
  },
  {
    icon: Crown,
    title: 'Digital Dominance',
    description: 'Category creation, not market share. We engineer monopolies in the attention economy.',
    href: '/expertise/digital-dominance',
    stat: 'Category King',
  },
]

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">Our Expertise</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Three Pillars of
            <br />
            <span className="text-accent">Exponential Growth.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We don't offer services. We offer transformation. Each capability is designed 
            to compound with the others, creating unstoppable momentum.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <Link 
                key={index}
                href={area.href}
                className="group bg-secondary border border-muted/20 p-10 hover:border-accent/50 transition-all duration-500"
              >
                <area.icon className="w-12 h-12 text-accent mb-6" />
                <p className="text-accent text-xs tracking-widest uppercase mb-2">{area.stat}</p>
                <h2 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                  {area.title}
                </h2>
                <p className="text-muted mb-6">{area.description}</p>
                <span className="inline-flex items-center text-accent text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            The Compound Effect
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            AI powers your revenue systems. Revenue systems fund your dominance. 
            Dominance attracts more AI opportunities. The flywheel never stops.
          </p>
          <Link 
            href="/#apply"
            className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 font-medium hover:bg-accent/90 transition-colors"
          >
            Start the Flywheel
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
