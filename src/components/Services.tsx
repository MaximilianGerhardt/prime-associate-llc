import { Zap, Shield, TrendingUp, Bot } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Nexus Framework',
    description: 'Proprietary stability bedrock. Immovable foundation for aggressive scaling without structural compromise.',
  },
  {
    icon: Zap,
    title: 'Momentum Injection',
    description: 'Exponential velocity acceleration. We do not advise. We execute. Direct revenue multiplication.',
  },
  {
    icon: Bot,
    title: 'Autonomous AI Systems',
    description: 'AI-driven sales infrastructure that operates 24/7. Algorithmic revenue generation at scale.',
  },
  {
    icon: TrendingUp,
    title: 'Global Market Dominance',
    description: 'Digital marketing architecture designed for international scale. No regional limitations.',
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
            <div 
              key={index} 
              className="group p-8 border border-muted/20 hover:border-accent/50 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
