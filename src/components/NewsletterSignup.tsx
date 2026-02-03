'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Loader2, Shield, Gift, Zap } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'card' | 'hero' | 'popup'
  source?: string
  className?: string
}

export function NewsletterSignup({ variant = 'card', source = 'website', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const getUtmParams = () => {
    if (typeof window === 'undefined') return {}
    const params = new URLSearchParams(window.location.search)
    return {
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!consent) {
      setErrorMessage('Please confirm you agree to receive emails.')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const utmParams = getUtmParams()
      
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
          source,
          ...utmParams,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed')
      }

      setStatus('success')
      setEmail('')
      setFirstName('')
      setConsent(false)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  if (status === 'success') {
    return (
      <div className={`${className}`}>
        <div className="bg-secondary/50 border border-accent/30 rounded-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-foreground mb-2">You&apos;re In!</h3>
          <p className="text-muted mb-4">
            Check your inbox for a confirmation email. Your journey to AI-powered growth starts now.
          </p>
          <p className="text-sm text-muted/70">
            Didn&apos;t receive it? Check your spam folder or{' '}
            <button 
              onClick={() => setStatus('idle')} 
              className="text-accent hover:underline"
            >
              try again
            </button>
          </p>
        </div>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`${className}`}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 bg-secondary border border-muted/30 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            disabled={status === 'loading' || !consent}
            className="px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Subscribe <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
        <label className="flex items-start gap-2 mt-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-accent"
          />
          <span className="text-xs text-muted">
            I agree to receive marketing emails. You can unsubscribe anytime.
          </span>
        </label>
        {errorMessage && (
          <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
        )}
      </form>
    )
  }

  if (variant === 'hero') {
    return (
      <div className={`${className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm mb-6">
            <Gift className="w-4 h-4" />
            <span>Free AI Growth Blueprint Inside</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
            The Playbook Fortune 500s Pay <span className="text-accent">$50,000</span> For
          </h2>
          
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            Get the exact AI automation strategies that generated $47M+ in client revenue. 
            Delivered weekly. Zero fluff.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="px-4 py-4 bg-secondary border border-muted/30 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors sm:w-1/3"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your best email"
                required
                className="flex-1 px-4 py-4 bg-secondary border border-muted/30 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading' || !consent}
              className="w-full px-8 py-4 bg-accent text-primary font-bold text-lg rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
            >
              {status === 'loading' ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  Get Instant Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <label className="flex items-center justify-center gap-2 mt-4 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="w-4 h-4 accent-accent"
              />
              <span className="text-sm text-muted">
                Yes, send me the free blueprint and weekly insights
              </span>
            </label>
            
            {errorMessage && (
              <p className="text-red-400 text-sm mt-3">{errorMessage}</p>
            )}
          </form>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Unsubscribe in 1 click</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>Join 2,847+ founders</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-secondary/50 border border-muted/20 rounded-xl p-8 ${className}`}>
      <div className="flex items-center gap-2 text-accent text-sm mb-4">
        <Gift className="w-4 h-4" />
        <span className="font-medium">Exclusive insights</span>
      </div>
      
      <h3 className="text-2xl font-serif text-foreground mb-2">
        The AI Advantage Newsletter
      </h3>
      
      <p className="text-muted mb-6">
        Weekly strategies that top CEOs use to 10x their business with AI. 
        No fluff. Just actionable insights.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-3 mb-4">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name (optional)"
            className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-4 py-3 bg-primary border border-muted/30 rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <label className="flex items-start gap-2 mb-4 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-4 h-4 accent-accent"
          />
          <span className="text-xs text-muted leading-relaxed">
            I agree to receive marketing emails from Prime Associates LLC. 
            You can unsubscribe at any time by clicking the link in our emails.{' '}
            <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
          </span>
        </label>

        <button
          type="submit"
          disabled={status === 'loading' || !consent}
          className="w-full px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Join Free <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {errorMessage && (
          <p className="text-red-400 text-sm mt-3">{errorMessage}</p>
        )}
      </form>

      <p className="text-xs text-muted/60 mt-4 text-center">
        🔒 Your information is secure and will never be shared.
      </p>
    </div>
  )
}
