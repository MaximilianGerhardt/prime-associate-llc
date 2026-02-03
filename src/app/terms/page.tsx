import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Prime Associates LLC - Legal terms and conditions governing use of our website, services, and investment acceleration programs.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://p-a.llc' },
    { name: 'Terms of Service', url: 'https://p-a.llc/terms' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Terms of Service</h1>
        <p className="text-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl text-foreground mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by these Terms of Service. 
              If you do not agree to these terms, you should not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Services</h2>
            <p>
              Prime Associates LLC provides investment acceleration services on a selective basis. 
              Submission of an inquiry does not guarantee acceptance or partnership. 
              All partnerships are subject to qualification and mutual agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, 
              is the property of Prime Associates LLC and protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Limitation of Liability</h2>
            <p>
              Prime Associates LLC shall not be liable for any indirect, incidental, special, 
              or consequential damages arising from your use of this website or our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of Florida, 
              United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or your use of our services shall be resolved 
              through binding arbitration in Lee County, Florida, in accordance with the rules of 
              the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to this website. Your continued use of our website constitutes 
              acceptance of any modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Contact</h2>
            <p className="mb-4">
              For questions regarding these terms, contact us at:
            </p>
            <address className="not-italic text-foreground/80">
              <strong>Prime Associates LLC</strong><br />
              23160 Fashion Dr Ste 220<br />
              Estero, FL 33928<br />
              United States<br /><br />
              Email: legal@p-a.llc
            </address>
          </section>
          <section>
            <h2 className="text-xl text-foreground mb-4">Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. 
              We do not guarantee any specific business results, revenue increases, or investment returns. 
              Past performance of our portfolio companies does not guarantee future results.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Confidentiality</h2>
            <p>
              Any information shared during the application process or partnership discussions 
              is considered confidential. Both parties agree to maintain the confidentiality of 
              proprietary business information, strategies, and financial details.
            </p>
          </section>
        </div>
        </div>
      </div>
    </>
  )
}
