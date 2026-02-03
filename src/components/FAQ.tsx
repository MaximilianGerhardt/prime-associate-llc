'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'What is Prime Associates LLC?',
    answer: 'Prime Associates LLC is a global AI business accelerator and investment catalyst headquartered in Estero, Florida (EIN: 41-3650497). We specialize in three core areas: AI Business Acceleration, Autonomous Revenue Systems, and Digital Market Dominance. We partner with ventures seeking $500K to $10M+ in investment acceleration, providing capital, AI infrastructure, and direct execution support.',
  },
  {
    question: 'What types of businesses does Prime Associates work with?',
    answer: 'We exclusively partner with: (1) High-end AI ventures with proven technology, (2) Digital businesses demonstrating scalability with $500K+ annual revenue, (3) Entrepreneurs seeking rapid 10x growth through AI automation. We do not work with early-stage concepts, businesses requiring extensive validation, or ventures below our minimum investment threshold of $500,000.',
  },
  {
    question: 'What is the Nexus Framework?',
    answer: 'The Nexus Framework is Prime Associates\' proprietary methodology for business acceleration. It consists of three phases: (1) Foundation - establishing stable operational infrastructure, (2) Acceleration - deploying AI systems for revenue generation, (3) Dominance - scaling to category leadership. This systematic approach ensures rapid growth without compromising structural integrity.',
  },
  {
    question: 'What investment range does Prime Associates consider?',
    answer: 'Prime Associates operates in high-ticket investment ranges: Minimum $500,000, typical range $1M-$5M, maximum $10M+. Investment includes capital injection plus AI infrastructure deployment, execution team support, and access to our partner network. This threshold ensures alignment with partners serious about exponential growth.',
  },
  {
    question: 'How does the qualification process work?',
    answer: 'Our qualification process has four stages: (1) Application submission via our online form, (2) Initial review within 48 hours, (3) Strategy call with our investment team, (4) Due diligence and partnership agreement. Approval rate is approximately 8% of applications—this selectivity ensures exceptional results for accepted partners.',
  },
  {
    question: 'What makes Prime Associates different from traditional VCs?',
    answer: 'Prime Associates differs from traditional VCs in four key ways: (1) We provide execution, not just capital—our team actively builds and deploys AI systems, (2) We deliver results in 90 days, not years, (3) We focus exclusively on AI-driven revenue acceleration, (4) We maintain a hands-on partnership model with direct access to our expertise and infrastructure.',
  },
  {
    question: 'Where is Prime Associates located?',
    answer: 'Prime Associates LLC is headquartered at 23160 Fashion Dr Ste 220, Estero, FL 33928, United States. We operate globally with partners across North America, Europe, and Asia-Pacific regions. Contact us at info@p-a.llc for partnership inquiries.',
  },
  {
    question: 'What results can partners expect from Prime Associates?',
    answer: 'Our portfolio companies typically achieve: 3-5x revenue growth within 12 months, 65% reduction in operational costs through AI automation, 24/7 autonomous revenue generation capability, and category leadership positioning in their market. Results vary based on business model and market conditions.',
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
