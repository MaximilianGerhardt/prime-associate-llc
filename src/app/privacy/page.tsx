import { Metadata } from 'next'
import { generateBreadcrumbSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Prime Associates LLC - How we collect, use, and protect your personal information. GDPR and CCPA compliant data handling practices.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://p-a.llc' },
    { name: 'Privacy Policy', url: 'https://p-a.llc/privacy' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted mb-12">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <div className="space-y-8 text-muted leading-relaxed">
          <section>
            <h2 className="text-xl text-foreground mb-4">Information We Collect</h2>
            <p>
              When you submit an inquiry through our website, we collect the information you provide, 
              including your name, email address, company name, and any additional details you choose to share.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">How We Use Your Information</h2>
            <p>
              We use the information collected to evaluate potential partnerships, respond to inquiries, 
              and communicate about our services. We do not sell or share your personal information with third parties 
              for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information. 
              All data transmissions are encrypted using SSL technology.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Cookies</h2>
            <p>
              We use essential cookies to ensure proper functionality of our website. 
              We do not use tracking or advertising cookies without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. 
              You may also request a copy of all data we hold about you. 
              To exercise these rights, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Contact</h2>
            <p className="mb-4">
              For privacy-related inquiries, contact us at:
            </p>
            <address className="not-italic text-foreground/80">
              <strong>Prime Associates LLC</strong><br />
              23160 Fashion Dr Ste 220<br />
              Estero, FL 33928<br />
              United States<br /><br />
              Email: privacy@p-a.llc
            </address>
          </section>
          <section>
            <h2 className="text-xl text-foreground mb-4">Newsletter & Marketing</h2>
            <p className="mb-4">
              If you subscribe to our newsletter, we collect your email address and optionally your first name. 
              We use this information to send you marketing communications about AI strategies, business insights, 
              and our services.
            </p>
            <p>
              You can unsubscribe at any time by clicking the unsubscribe link in any email. 
              We track email opens and clicks to improve our content and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services 
              and fulfill the purposes outlined in this policy. Lead data is retained for up to 3 years 
              after last contact. Newsletter subscribers can request deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-foreground mb-4">International Transfers</h2>
            <p>
              Your information may be transferred to and processed in the United States. 
              By using our services, you consent to this transfer. We implement appropriate 
              safeguards to protect your data during international transfers.
            </p>
          </section>
        </div>
        </div>
      </div>
    </>
  )
}
