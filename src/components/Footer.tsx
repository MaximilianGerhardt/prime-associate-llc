import Link from 'next/link'
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Link href="/" className="font-serif text-xl text-foreground">
              Prime <span className="text-accent">Associates</span> <span className="text-muted/60 text-sm">LLC</span>
            </Link>
            <p className="text-muted text-xs mt-2">
              23160 Fashion Dr Ste 220, Estero, FL 33928
            </p>
            <p className="text-muted/60 text-xs mt-1">
              EIN 41-3650497
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link 
              href="#benefits" 
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link 
              href="#capabilities" 
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Capabilities
            </Link>
            <Link 
              href="/newsletter" 
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Newsletter
            </Link>
            <Link 
              href="#apply" 
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Apply
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/company/primeassociate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
              aria-label="Follow Prime Associates on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Prime Associates LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
