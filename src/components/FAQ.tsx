'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is Prime Associates LLC?',
    answer: 'Prime Associates LLC is a sovereign investment catalyst operating globally. We leverage our proprietary Nexus Framework to inject exponential Momentum into digital business models, focusing on high-end AI ventures, autonomous sales systems, and algorithmic revenue generation.',
  },
  {
    question: 'What types of businesses does Prime Associates work with?',
    answer: 'We exclusively partner with high-end AI ventures, digital businesses with proven scalability, and entrepreneurs who understand that time is the ultimate currency. We do not work with early-stage concepts or businesses that require extensive validation.',
  },
  {
    question: 'What is the Nexus Framework?',
    answer: 'The Nexus Framework is our proprietary stability bedrock—a systematic approach that provides immovable foundation for rapid scaling. It ensures that acceleration does not compromise structural integrity.',
  },
  {
    question: 'What investment range does Prime Associates consider?',
    answer: 'We operate exclusively in high-ticket engagements. Minimum partnership thresholds start at $500,000. This is non-negotiable and by design—it ensures alignment with partners who are serious about exponential growth.',
  },
  {
    question: 'How does the qualification process work?',
    answer: 'Our qualification process is rigorous and by invitation. Submit your inquiry through our form. If there is alignment, our team will reach out within 48 hours. Not every submission proceeds—this selectivity is what ensures results.',
  },
  {
    question: 'What makes Prime Associates different from traditional VCs?',
    answer: 'We are not a traditional VC. We are a catalyst. Traditional VCs provide capital and wait. We provide capital, infrastructure, AI systems, and direct execution support. Every second of engagement multiplies enterprise revenue.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent tracking-[0.3em] uppercase text-sm mb-6 font-medium">
            Frequently Asked
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground">
            Common inquiries.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-muted/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-foreground font-medium pr-4">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    'w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0',
                    openIndex === index && 'rotate-180'
                  )} 
                />
              </button>
              <div 
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-6 text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
