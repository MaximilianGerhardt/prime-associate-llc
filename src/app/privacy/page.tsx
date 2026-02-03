import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Prime Associate LLC - How we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  return (
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
              <strong>Prime Associate LLC</strong><br />
              23160 Fashion Dr Ste 220<br />
              Estero, FL 33928<br />
              United States<br /><br />
              Email: privacy@primeassociate.com
            </address>
          </section>
        </div>
      </div>
    </div>
  )
}
