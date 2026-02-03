import { LeadForm } from './LeadForm'

export function Contact() {
  return (
    <section id="inquiry" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-medium">
              Begin Qualification
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-[1.2] mb-6">
              Not every inquiry proceeds.
              <br />
              <span className="text-muted">This is by design.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Submit your details. If there is alignment between your venture and our criteria, 
              our team will initiate contact within 48 hours.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted">Minimum engagement: $500K</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted">Digital-first ventures only</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-muted">Proven revenue or clear path to scale</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
