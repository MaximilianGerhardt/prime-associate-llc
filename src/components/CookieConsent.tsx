'use client'

import { useState, useEffect } from 'react'
import { X, Settings, Shield } from 'lucide-react'

type ConsentSettings = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_NAME = 'cookie_consent'
const COOKIE_EXPIRY_DAYS = 365

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const savedConsent = getCookie(COOKIE_NAME)
    if (!savedConsent) {
      setShowBanner(true)
    } else {
      try {
        const parsed = JSON.parse(savedConsent)
        setConsent(parsed)
        applyConsent(parsed)
      } catch {
        setShowBanner(true)
      }
    }
  }, [])

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null
    return null
  }

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
  }

  const applyConsent = (settings: ConsentSettings) => {
    if (settings.analytics && typeof window !== 'undefined') {
      // Enable analytics (e.g., Google Analytics)
      // window.gtag?.('consent', 'update', { analytics_storage: 'granted' })
    }
    if (settings.marketing && typeof window !== 'undefined') {
      // Enable marketing cookies
      // window.gtag?.('consent', 'update', { ad_storage: 'granted' })
    }
  }

  const saveConsent = (settings: ConsentSettings) => {
    setCookie(COOKIE_NAME, JSON.stringify(settings), COOKIE_EXPIRY_DAYS)
    setConsent(settings)
    applyConsent(settings)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
  }

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
  }

  const saveCustom = () => {
    saveConsent(consent)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-secondary border-t border-muted/20 shadow-2xl">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground text-sm">
                  We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
                </p>
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-accent underline text-sm mt-1 hover:no-underline"
                >
                  Manage preferences
                </button>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-muted/40 text-foreground rounded hover:bg-muted/20 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="bg-secondary border border-muted/20 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-muted/20">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-accent" />
                <h2 className="text-xl font-serif text-foreground">Cookie Settings</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-medium">Necessary Cookies</h3>
                  <p className="text-muted text-sm mt-1">
                    Required for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-6 bg-accent/30 rounded-full flex items-center px-1">
                    <div className="w-4 h-4 bg-accent rounded-full ml-auto" />
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-medium">Analytics Cookies</h3>
                  <p className="text-muted text-sm mt-1">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, analytics: !c.analytics }))}
                  className={`flex-shrink-0 w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    consent.analytics ? 'bg-accent/30' : 'bg-muted/30'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      consent.analytics ? 'bg-accent ml-auto' : 'bg-muted'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-foreground font-medium">Marketing Cookies</h3>
                  <p className="text-muted text-sm mt-1">
                    Used to deliver personalized advertisements.
                  </p>
                </div>
                <button
                  onClick={() => setConsent(c => ({ ...c, marketing: !c.marketing }))}
                  className={`flex-shrink-0 w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                    consent.marketing ? 'bg-accent/30' : 'bg-muted/30'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      consent.marketing ? 'bg-accent ml-auto' : 'bg-muted'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t border-muted/20">
              <button
                onClick={acceptNecessary}
                className="flex-1 px-4 py-2 text-sm border border-muted/40 text-foreground rounded hover:bg-muted/20 transition-colors"
              >
                Necessary Only
              </button>
              <button
                onClick={saveCustom}
                className="flex-1 px-4 py-2 text-sm bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Button to re-open cookie settings (for footer)
export function CookieSettingsButton({ className = '' }: { className?: string }) {
  const openSettings = () => {
    document.cookie = `${COOKIE_NAME}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
    window.location.reload()
  }

  return (
    <button onClick={openSettings} className={className}>
      Cookie Settings
    </button>
  )
}
