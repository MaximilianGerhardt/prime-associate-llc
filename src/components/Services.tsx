import Link from 'next/link'
import { Zap, Shield, TrendingUp, Bot, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Nexus Framework',
    description: 'Proprietary stability bedrock. Immovable foundation for aggressive scaling without structural compromise.',
    href: '/expertise',
  },
  {
    icon: Zap,
    title: 'AI Acceleration',
    description: 'Battle-tested AI systems that generate revenue from day one. No pilots. No experiments. Only results.',
    href: '/expertise/ai-acceleration',
  },
  {
    icon: Bot,
    title: 'Revenue Systems',
    description: 'Self-scaling revenue machines that work 24/7 without human bottlenecks. Algorithmic precision.',
    href: '/expertise/revenue-systems',
  },
  {
    icon: TrendingUp,
    title: 'Digital Dominance',
    description: 'Category creation, not market share. We engineer monopolies in the attention economy.',
    href: '/expertise/digital-dominance',
  },
]

export function Services() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            Capability Statement
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            What we deploy.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.href}
              className="group p-8 border border-muted/20 hover:border-accent/50 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center text-accent text-sm group-hover:gap-2 gap-1 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
