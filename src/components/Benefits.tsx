import Image from 'next/image'
import { DollarSign, Zap, Users, BarChart3, Cpu, Globe } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: '$500K - $10M Capital Injection',
    description: 'Direct funding without endless pitch decks. If you qualify, capital flows within 30 days.',
  },
  {
    icon: Cpu,
    title: 'AI Infrastructure Stack',
    description: 'Plug into our proprietary AI systems: autonomous sales, lead gen, customer service—all pre-built.',
  },
  {
    icon: Users,
    title: 'Execution Team On-Demand',
    description: 'Access our network of operators, developers, and growth specialists. No hiring headaches.',
  },
  {
    icon: BarChart3,
    title: 'Revenue Operations',
    description: 'We install proven revenue systems that generate predictable, scalable income streams.',
  },
  {
    icon: Globe,
    title: 'Global Market Access',
    description: 'Leverage our distribution channels across US, EU, and APAC. Instant market entry.',
  },
  {
    icon: Zap,
    title: '90-Day Acceleration Sprint',
    description: 'Intensive 90-day program. Clear milestones. Measurable results. No fluff.',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <Image
        src="/images/benefits-silk.jpg"
        alt="Luxury silk fabric texture representing premium quality and refined business approach"
        fill
        quality={85}
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#0A0A0A]/70" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            What You Get
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Everything you need to scale.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We don&apos;t just invest. We deploy a complete acceleration system 
            designed to multiply your revenue within 90 days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 bg-primary border border-muted/20"
            >
              <benefit.icon className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-lg font-medium text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
