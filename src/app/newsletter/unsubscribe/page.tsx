'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CheckCircle, XCircle, AlertTriangle, ArrowLeft } from 'lucide-react'

function UnsubscribeContent() {
  const searchParams = useSearchParams()
  const success = searchParams.get('success')
  const error = searchParams.get('error')

  if (success) {
    return (
      <div className="text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-serif text-foreground mb-4">
          You&apos;ve Been Unsubscribed
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          We&apos;re sorry to see you go. You won&apos;t receive any more emails from The AI Advantage newsletter.
        </p>
        <div className="space-y-4">
          <p className="text-sm text-muted">
            Changed your mind?{' '}
            <Link href="/newsletter" className="text-accent hover:underline">
              Subscribe again
            </Link>
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to homepage
          </Link>
        </div>
      </div>
    )
  }

  if (error === 'not_found') {
    return (
      <div className="text-center">
        <AlertTriangle className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-3xl font-serif text-foreground mb-4">
          Subscription Not Found
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          We couldn&apos;t find a subscription with this unsubscribe link. You may have already unsubscribed.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to homepage
        </Link>
      </div>
    )
  }

  if (error === 'invalid') {
    return (
      <div className="text-center">
        <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-serif text-foreground mb-4">
          Invalid Unsubscribe Link
        </h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          This unsubscribe link appears to be invalid. Please use the link from your most recent email.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to homepage
        </Link>
      </div>
    )
  }

  return (
    <div className="text-center">
      <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
      <h1 className="text-3xl font-serif text-foreground mb-4">
        Something Went Wrong
      </h1>
      <p className="text-muted mb-8 max-w-md mx-auto">
        We couldn&apos;t process your unsubscribe request. Please try again or contact us at{' '}
        <a href="mailto:info@p-a.llc" className="text-accent hover:underline">info@p-a.llc</a>
      </p>
      <Link 
        href="/"
        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to homepage
      </Link>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-primary flex items-center justify-center px-4 py-20">
        <Suspense fallback={
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted">Processing...</p>
          </div>
        }>
          <UnsubscribeContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
