'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

interface SmoothScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScrollLink({ href, children, className, onClick }: SmoothScrollLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHashLink = href.includes('#')
    
    if (!isHashLink) {
      onClick?.()
      return
    }

    const [path, hash] = href.split('#')
    const targetPath = path || pathname
    const isCurrentPage = targetPath === pathname || targetPath === '/'  && pathname === '/'

    if (isCurrentPage && hash) {
      e.preventDefault()
      
      // Clear hash first to allow re-scroll
      window.history.replaceState(null, '', pathname)
      
      // Small delay then scroll
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Update hash after scroll
          window.history.replaceState(null, '', `${pathname}#${hash}`)
        }
      }, 10)
      
      onClick?.()
    } else if (hash) {
      // Different page with hash - let Next.js handle navigation
      onClick?.()
    }
  }, [href, pathname, onClick])

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
