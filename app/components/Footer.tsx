import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const NAV = [
  { label: 'Services',   href: '#services' },
  { label: 'Process',    href: '#process' },
  { label: 'About',      href: '#about' },
  { label: 'Industries', href: '#industries' },
]

const mont = 'font-[family-name:var(--font-montserrat)]'

export default function Cta() {
  return (
    <footer
      id="contact"
      className="relative z-[1] text-white overflow-hidden max-[900px]:rounded-[28px]"
      style={{ background: 'linear-gradient(120deg,#19224e 30%,#005889)' }}
    >
      <div className="max-w-[1240px] mx-auto px-7 pt-[clamp(60px,9vw,120px)]">

        {/* Top: call to action */}
        <div className="rv grid grid-cols-[1.4fr_.6fr] gap-10 items-end pb-[70px] max-[900px]:grid-cols-1 max-[900px]:pb-12">
          <div>
            <span className={`tag-bar inline-flex items-center gap-[10px] ${mont} font-bold text-[11px] tracking-[.22em] uppercase text-cu2`}>
              Let&rsquo;s connect
            </span>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[clamp(34px,6vw,84px)] font-bold leading-[1.05] tracking-[-0.03em] my-[22px]">
              Find the value in{' '}
              <span className="text-cu2">what&rsquo;s next.</span>
            </h2>
            <p className="max-w-[460px] opacity-85 text-[17px] leading-[1.6]">
              Exploring surplus equipment, infrastructure upgrades, or asset recovery opportunities?
            </p>
          </div>

          <div className="justify-self-end max-[900px]:justify-self-start">
            <a
              href="mailto:hello@rephase.com"
              className={`group inline-flex items-center gap-3 px-[26px] py-[15px] rounded-full bg-cu text-white ${mont} font-bold text-[12px] tracking-[.14em] uppercase transition-[background,color] duration-300 will-change-transform hover:bg-white hover:text-navy`}
            >
              Contact Rephase
              <span className="grid place-items-center w-6 h-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>

        {/* Middle: brand + links */}
        <div className="grid grid-cols-[1.4fr_.8fr_1fr] gap-10 py-12 border-t border-white/15 max-[900px]:grid-cols-1">
          <div>
            <a href="#top" aria-label="Rephase – back to top" className="inline-block">
              <Image
                src="/logo.png"
                alt="Rephase"
                width={100}
                height={100}
                className="w-[110px] h-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-5 max-w-[320px] text-white/65 text-[15px] leading-[1.7]">
              Unlocking the value of surplus industrial assets, electrical infrastructure, and high-value materials.
            </p>
          </div>

          <div>
            <h3 className={`${mont} font-bold text-[11px] tracking-[.22em] uppercase text-cu2 mb-5`}>
              Navigate
            </h3>
            <ul className="grid gap-3">
              {NAV.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`${mont} font-bold text-[12px] tracking-[.1em] uppercase text-white/80 transition-colors duration-300 hover:text-cu2`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={`${mont} font-bold text-[11px] tracking-[.22em] uppercase text-cu2 mb-5`}>
              Contact
            </h3>
            <a
              href="mailto:hello@rephase.com"
              className="text-[17px] text-white/90 border-b border-white/30 pb-[2px] transition-colors duration-300 hover:text-cu2 hover:border-cu2"
            >
              hello@rephase.com
            </a>
          </div>
        </div>



        {/* Bottom bar */}
        <div className="relative flex items-center justify-between gap-4 flex-wrap py-6 border-t border-white/15 text-white/60 text-[13px]">
          <span>&copy; 2026 Rephase. All rights reserved.</span>
          <a
            href="#top"
            className={`${mont} font-bold text-[11px] tracking-[.16em] uppercase transition-colors duration-300 hover:text-cu2`}
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}