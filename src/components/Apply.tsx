import Image from 'next/image'
import { MultiStepForm } from './MultiStepForm'

export function Apply() {
  return (
    <section id="apply" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <Image
        src="https://tlrkqmxaivvormucqdhu.supabase.co/storage/v1/object/public/images/apply-office.jpg"
        alt="Executive office interior with golden ambient lighting symbolizing professional business environment"
        fill
        quality={85}
        className="object-cover opacity-15"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            Apply Now
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Start your acceleration.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Complete the application below. If you qualify, we&apos;ll schedule a call 
            within 48 hours to discuss next steps.
          </p>
        </div>

        <MultiStepForm />

        <div className="mt-8 text-center">
          <p className="text-xs text-muted">
            By submitting, you agree to our privacy policy. Not all applications proceed—this selectivity ensures results.
          </p>
        </div>
      </div>
    </section>
  )
}
