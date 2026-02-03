import { NewsletterSignup } from './NewsletterSignup'

export function Newsletter() {
  return (
    <section id="newsletter" className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent text-sm font-medium tracking-wider uppercase">
              Stay Ahead
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mt-2 mb-4">
              The AI Advantage Newsletter
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Join 2,847+ founders and executives who receive our weekly deep dives into 
              AI-powered business growth. No fluff — just actionable strategies that generate results.
            </p>
            <ul className="space-y-3 text-muted">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Weekly frameworks from $47M+ in client results
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Real case studies with actual numbers
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Early access to strategic opportunities
              </li>
            </ul>
          </div>
          
          <div>
            <NewsletterSignup variant="card" source="homepage" />
          </div>
        </div>
      </div>
    </section>
  )
}
