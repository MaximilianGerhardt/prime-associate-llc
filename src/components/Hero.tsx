import { ArrowDown, TrendingUp, Clock, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Logo'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
      <Image
        src="https://tlrkqmxaivvormucqdhu.supabase.co/storage/v1/object/public/images/hero-skyline.jpg"
        alt="Modern corporate skyline at night representing global business expansion and investment opportunities"
        fill
        priority
        quality={90}
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <Logo size="xl" className="mb-12" />
        
        <p className="text-[#C9A962] tracking-[0.3em] uppercase text-sm mb-6 font-medium">
          Global AI Business Accelerator
        </p>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#FAFAFA] leading-[1.1] mb-8">
          Scale your AI venture
          <br />
          <span className="text-[#C9A962]">10x faster.</span>
        </h2>
        
        <p className="text-[#888] text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          We inject capital, AI infrastructure, and execution power into digital businesses 
          that are ready to dominate. No hand-holding. Direct revenue multiplication.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
            <TrendingUp className="w-5 h-5 text-[#C9A962]" />
            <span className="text-sm text-[#FAFAFA]">$50M+ Deployed</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
            <Clock className="w-5 h-5 text-[#C9A962]" />
            <span className="text-sm text-[#FAFAFA]">90-Day Results</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 bg-[#111] border border-[#222] rounded-lg">
            <Shield className="w-5 h-5 text-[#C9A962]" />
            <span className="text-sm text-[#FAFAFA]">Tier-1 Partners</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#apply" 
            className="inline-flex items-center justify-center bg-[#C9A962] text-[#0A0A0A] px-8 py-4 font-medium hover:bg-[#C9A962]/90 transition-all duration-300"
          >
            Apply for Acceleration
          </Link>
          <Link 
            href="#benefits" 
            className="inline-flex items-center justify-center border border-[#333] text-[#FAFAFA] px-8 py-4 font-medium hover:border-[#C9A962] hover:text-[#C9A962] transition-all duration-300"
          >
            See What You Get
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-[#666]" />
      </div>
    </section>
  )
}
