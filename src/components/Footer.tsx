import Link from 'next/link'
import { CookieSettingsButton } from './CookieConsent'

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-xl text-foreground">
              Prime <span className="text-accent">Associates</span> <span className="text-muted/60 text-sm">LLC</span>
            </Link>
            <p className="text-muted text-xs mt-4 leading-relaxed">
              23160 Fashion Dr Ste 220<br />
              Estero, FL 33928<br />
              United States
            </p>
            <p className="text-muted/60 text-xs mt-2">
              EIN 41-3650497
            </p>
            <p className="text-accent text-xs mt-2">
              Merchant of Record: Prime Associates LLC
            </p>
          </div>

          <div>
            <p className="text-foreground text-sm font-medium mb-4">Expertise</p>
            <div className="flex flex-col gap-2">
              <Link href="/expertise/ai-acceleration" className="text-sm text-muted hover:text-foreground transition-colors">
                AI Acceleration
              </Link>
              <Link href="/expertise/revenue-systems" className="text-sm text-muted hover:text-foreground transition-colors">
                Revenue Systems
              </Link>
              <Link href="/expertise/digital-dominance" className="text-sm text-muted hover:text-foreground transition-colors">
                Digital Dominance
              </Link>
            </div>
          </div>

          <div>
            <p className="text-foreground text-sm font-medium mb-4">Industries</p>
            <div className="flex flex-col gap-2">
              <Link href="/industries/saas" className="text-sm text-muted hover:text-foreground transition-colors">
                SaaS
              </Link>
              <Link href="/industries/ecommerce" className="text-sm text-muted hover:text-foreground transition-colors">
                E-Commerce
              </Link>
              <Link href="/industries/agencies" className="text-sm text-muted hover:text-foreground transition-colors">
                Agencies
              </Link>
            </div>
          </div>

          <div>
            <p className="text-foreground text-sm font-medium mb-4">Resources</p>
            <div className="flex flex-col gap-2">
              <Link href="/resources/ai-automation-costs" className="text-sm text-muted hover:text-foreground transition-colors">
                AI Automation Costs
              </Link>
              <Link href="/resources/ai-implementation-guide" className="text-sm text-muted hover:text-foreground transition-colors">
                Implementation Guide
              </Link>
              <Link href="/newsletter" className="text-sm text-muted hover:text-foreground transition-colors">
                Newsletter
              </Link>
              <Link href="/#apply" className="text-sm text-muted hover:text-foreground transition-colors">
                Apply
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-muted/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Prime Associates LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <CookieSettingsButton className="hover:text-foreground transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  )
}
