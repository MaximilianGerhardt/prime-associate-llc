'use client'

import { useState, useEffect } from 'react'
import { X, Gift } from 'lucide-react'
import { NewsletterSignup } from './NewsletterSignup'

interface NewsletterPopupProps {
  delayMs?: number
  exitIntent?: boolean
}

export function NewsletterPopup({ delayMs = 30000, exitIntent = true }: NewsletterPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter_popup_seen')
    const isSubscribed = localStorage.getItem('newsletter_subscribed')
    
    if (hasSeenPopup || isSubscribed) return

    const showPopup = () => {
      if (!hasShown) {
        setIsVisible(true)
        setHasShown(true)
        localStorage.setItem('newsletter_popup_seen', Date.now().toString())
      }
    }

    const timer = setTimeout(showPopup, delayMs)

    const handleMouseLeave = (e: MouseEvent) => {
      if (exitIntent && e.clientY <= 0 && !hasShown) {
        showPopup()
      }
    }

    if (exitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      clearTimeout(timer)
      if (exitIntent) {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [delayMs, exitIntent, hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      <div className="relative bg-primary border border-muted/30 rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <Gift className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-serif text-foreground mb-2">
            Wait — Don&apos;t Leave Empty-Handed
          </h2>
          <p className="text-muted">
            Get the AI strategies that generated $47M+ in client revenue. 
            Delivered weekly. Completely free.
          </p>
        </div>

        <NewsletterSignup 
          variant="card" 
          source="popup" 
          className="border-0 p-0 bg-transparent"
        />

        <p className="text-xs text-muted/60 text-center mt-4">
          Join 2,847+ founders. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}
