'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import { JsonLd } from './JsonLd'
import { NewsletterPopup } from './NewsletterPopup'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAdmin = pathname?.startsWith('/admin')
  const isNewsletter = pathname?.startsWith('/newsletter')

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <JsonLd />
      <Header />
      <main>{children}</main>
      <Footer />
      {!isNewsletter && <NewsletterPopup delayMs={45000} exitIntent={true} />}
    </>
  )
}
