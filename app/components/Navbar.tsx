'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <nav
      className="fixed top-[14px] left-0 right-0 z-40"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-3 pl-[22px] py-[10px] rounded-full bg-white/75 backdrop-blur-[16px] border border-ln shadow-[0_10px_40px_-20px_rgba(25,34,78,.4)] w-[calc(100%-32px)]">

        {/* Logo */}
        <a href="#top" className="flex items-center gap-[10px] font-[family-name:var(--font-bankgothic)] font-medium text-[16px] tracking-[.12em] text-navy no-underline uppercase">
          <Image
            src="/logover.png"
            alt="Rephase"
            width={300}
            height={300}
            className="w-[100px] md:w-[200px] h-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-7 font-[family-name:var(--font-montserrat)] font-bold text-[12px] tracking-[.1em] uppercase">
          <a href="#services"   className="hover:text-cu! transition-colors">Services</a>
          <a href="#process"    className="hover:text-cu! transition-colors">Process</a>
          <a href="#about"      className="hover:text-cu! transition-colors">About</a>
          <a href="#industries" className="hover:text-cu! transition-colors">Industries</a>
        </div>

        {/* CTA button */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-3 px-[16px] md:px-[26px] py-[10px] md:py-[15px] rounded-full bg-navy text-white! font-[family-name:var(--font-montserrat)] font-bold text-[10px] md:text-[12px] tracking-[.14em] uppercase transition-[background] duration-300 hover:bg-blue"
        >
          Contact
          <span className="grid place-items-center w-6 h-6 rounded-full bg-cu2 transition-transform duration-300 group-hover:rotate-[-45deg]">
            <ArrowRight size={14} strokeWidth={3} />
          </span>
        </a>
      </div>
    </nav>
  )
}


