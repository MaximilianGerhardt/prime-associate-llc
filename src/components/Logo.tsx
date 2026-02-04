import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Logo({ className, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl md:text-6xl',
    xl: 'text-6xl md:text-7xl lg:text-8xl',
  }

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <h1 className={cn(
        'font-serif tracking-tight text-[#FAFAFA] leading-none',
        sizeClasses[size]
      )}>
        <span className="font-normal">Prime</span>
        <span className="text-[#C9A962] font-medium ml-2">Associates</span>
      </h1>
      <div className="flex items-center gap-3 mt-2">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9A962]/50" />
        <span className="text-[#C9A962]/80 text-xs tracking-[0.4em] uppercase font-light">
          LLC
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9A962]/50" />
      </div>
    </div>
  )
}
