import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Crown, Globe, Flame, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Digital Market Dominance | Category Leadership Strategy',
  description: 'Second place is first loser. We engineer category dominance, not market share. Prime Associates builds monopolies in the attention economy.',
  keywords: [
    'Digital Market Dominance',
    'Category Leadership',
    'Market Monopoly Strategy',
    'Brand Dominance',
    'Digital Authority',
    'Market Leader Strategy',
  ],
  openGraph: {
    title: 'Digital Market Dominance | Prime Associates LLC',
    description: 'Second place is first loser. We engineer category dominance, not market share.',
    type: 'website',
  },
}

const principles = [
  {
    icon: Crown,
    title: 'Category of One',
    description: 'We don\'t help you compete. We help you make competition irrelevant by creating a category you own.',
  },
  {
    icon: Globe,
    title: 'Global by Default',
    description: 'Local thinking is dead thinking. Every system we build is designed for planetary scale from day one.',
  },
  {
    icon: Flame,
    title: 'Controlled Aggression',
    description: 'Polite marketing dies in obscurity. We engineer calculated controversy that captures attention.',
  },
  {
    icon: Eye,
    title: 'Omnipresence Architecture',
    description: 'Your prospects should feel like you\'re everywhere. Because with our systems, you are.',
  },
]

export default function DigitalDominancePage() {
  return (
    <div className="min-h-screen">
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6">Digital Dominance</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-tight">
            Competing Is For
            <br />
            <span className="text-accent">Companies Without Vision.</span>
          </h1>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Market share is a loser's metric. Category creation is the only game worth playing. 
            We don't fight for position—we define the battlefield.
          </p>
          <Link href="/#apply">
            <Button size="lg">
              Claim Your Category
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              The Dominance Framework
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Four pillars that separate category kings from forgotten also-rans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="bg-secondary border border-muted/20 p-8 hover:border-accent/30 transition-colors"
              >
                <principle.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-serif text-xl text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Uncomfortable Truths About Your Market Position
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 border border-muted/20 bg-primary/30">
              <p className="text-foreground font-medium mb-2">If you can name 3 competitors, you're already losing.</p>
              <p className="text-muted text-sm">Category kings don't have competitors. They have imitators who are always 18 months behind.</p>
            </div>
            
            <div className="p-6 border border-muted/20 bg-primary/30">
              <p className="text-foreground font-medium mb-2">Your "unique value proposition" sounds like everyone else's.</p>
              <p className="text-muted text-sm">Because you hired the same consultants, read the same books, and attended the same conferences.</p>
            </div>
            
            <div className="p-6 border border-muted/20 bg-primary/30">
              <p className="text-foreground font-medium mb-2">You're optimizing for the wrong metrics.</p>
              <p className="text-muted text-sm">While you celebrate 10% growth, category creators are experiencing 10x transformation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-accent pl-8 py-4">
            <p className="font-serif text-2xl md:text-3xl text-foreground italic mb-6">
              "The graveyard of business is filled with companies that tried to be 'slightly better.' 
              The pantheon of success belongs to those who dared to be radically different."
            </p>
            <p className="text-accent">— Prime Associates Philosophy</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Are You Ready to Stop Competing?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Category creation isn't for the faint of heart. It requires burning the playbook 
            that got you here. If that terrifies you, we're not the right partner.
          </p>
          <Link href="/#apply">
            <Button>
              Begin Your Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
