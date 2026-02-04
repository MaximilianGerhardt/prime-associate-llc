import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CheckCircle, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Subscription Confirmed | Prime Associates',
  description: 'Thank you for subscribing to The AI Advantage Newsletter.',
  robots: 'noindex, nofollow',
}

export default function ConfirmPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary py-20 px-4 flex items-center justify-center">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-secondary/50 border border-accent/30 rounded-xl p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            
            <h1 className="text-3xl font-serif text-foreground mb-4">
              You&apos;re In!
            </h1>
            
            <p className="text-muted mb-6 text-lg">
              Thank you for subscribing to <span className="text-accent">The AI Advantage</span> newsletter.
            </p>

            <div className="bg-primary/50 border border-muted/20 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">Check Your Inbox</span>
              </div>
              <p className="text-muted text-sm">
                We&apos;ve sent you a welcome email with your first insights. 
                If you don&apos;t see it, check your spam folder.
              </p>
            </div>

            <div className="space-y-4">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-colors"
              >
                Back to Homepage <ArrowRight className="w-4 h-4" />
              </Link>
              
              <p className="text-xs text-muted">
                Questions? Contact us at{' '}
                <a href="mailto:info@p-a.llc" className="text-accent underline hover:no-underline">
                  info@p-a.llc
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
