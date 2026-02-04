import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, DollarSign, Repeat, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Autonomous Revenue Systems | 24/7 Algorithmic Sales Infrastructure',
  description: 'Prime Associates LLC builds self-scaling revenue machines that work 24/7 without human bottlenecks. Our autonomous revenue systems feature: revenue on autopilot, self-optimizing algorithms, recession-proof execution, and 10x time compression. We partner with ventures seeking $500K-$10M+ investment to build algorithmic sales infrastructure that never sleeps.',
  keywords: [
    'Autonomous Revenue Systems',
    'Algorithmic Sales Infrastructure',
    'Automated Revenue Generation',
    'Sales Automation Systems',
    'Revenue Infrastructure',
    'Scalable Sales Systems',
    '24/7 Sales Automation',
    'Self-Optimizing Sales',
    'AI Sales Systems',
    'Revenue Machine Building',
  ],
  alternates: {
    canonical: '/expertise/revenue-systems',
  },
  openGraph: {
    title: 'Autonomous Revenue Systems | Prime Associates LLC',
    description: 'Self-scaling revenue machines that work 24/7. Algorithmic precision. Zero human bottlenecks.',
    type: 'website',
  },
}

const pillars = [
  {
    icon: DollarSign,
    title: 'Revenue on Autopilot',
    stat: '24/7',
    description: 'Your sales system never sleeps, never takes vacation, never has a bad day.',
  },
  {
    icon: Repeat,
    title: 'Self-Optimizing',
    stat: '∞',
    description: 'Every transaction makes the system smarter. Infinite improvement loops.',
  },
  {
    icon: Shield,
    title: 'Recession-Proof',
    stat: '100%',
    description: 'Algorithmic systems don\'t panic. They execute with mathematical precision.',
  },
  {
    icon: Clock,
    title: 'Time Arbitrage',
    stat: '10x',
    description: 'Compress years of sales growth into months. Time is the ultimate currency.',
  },
]

export default function RevenueSystemsPage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">Revenue Systems</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Your Sales Team Has a
            <br />
            <span className="text-accent">Fatal Flaw.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            They're human. They get tired. They quit. They have opinions. 
            Our autonomous revenue systems have none of these problems.
          </p>
          <Link href="/#apply">
            <Button size="lg">
              Build Your Revenue Machine
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-secondary border border-muted/20 p-8 text-center hover:border-accent/30 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <p className="text-4xl font-serif text-accent mb-2">{pillar.stat}</p>
                <h3 className="font-serif text-lg text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            The Math Your CFO Doesn't Want to See
          </h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-primary/50 border border-muted/20">
              <span className="text-red-500 text-2xl font-bold">✗</span>
              <div>
                <h3 className="text-foreground font-medium mb-2">Traditional Sales Team</h3>
                <p className="text-muted">$500K+ annual payroll. 60% turnover. Training costs. Management overhead. Sick days. Territory disputes. Quota negotiations. The list never ends.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-accent/10 border border-accent/30">
              <span className="text-accent text-2xl font-bold">✓</span>
              <div>
                <h3 className="text-foreground font-medium mb-2">Prime Associates Revenue System</h3>
                <p className="text-muted">One-time deployment. Zero turnover. Scales infinitely. Works every timezone simultaneously. Never asks for a raise. Never threatens to leave for a competitor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-accent pl-8 py-4">
            <p className="font-serif text-2xl md:text-3xl text-foreground italic mb-6">
              "The companies still relying on human sales teams in 2025 are the same ones 
              that insisted on fax machines in 2005. History doesn't repeat, but it rhymes."
            </p>
            <p className="text-accent">— Prime Associates Market Analysis</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Fire Your Bottlenecks?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Every day without autonomous revenue systems is money left on the table. 
            Your competitors are reading this same page right now.
          </p>
          <Link href="/#apply">
            <Button>
              Start Your Application
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
              href="/expertise/ai-acceleration"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Previous Capability</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                AI Acceleration →
              </h3>
              <p className="text-muted text-sm mt-2">Battle-tested AI systems from day one</p>
            </Link>
            <Link 
              href="/industries/ecommerce"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Industry Focus</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                E-Commerce →
              </h3>
              <p className="text-muted text-sm mt-2">Scale revenue without scaling headcount</p>
            </Link>
            <Link 
              href="/expertise/digital-dominance"
              className="group p-6 border border-muted/20 hover:border-accent/50 transition-colors"
            >
              <p className="text-xs text-accent uppercase tracking-wider mb-2">Next Capability</p>
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                Digital Dominance →
              </h3>
              <p className="text-muted text-sm mt-2">Category creation, not market share</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
