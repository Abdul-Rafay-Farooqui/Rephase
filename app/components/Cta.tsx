import { ArrowUpRight } from 'lucide-react'

export default function Cta() {
  return (
    <section id="contact" className="relative z-[1]">
      <div
        className="rv relative text-white overflow-hidden px-[clamp(32px,8vw,110px)] py-[clamp(56px,8vw,100px)]"
        style={{ background: 'linear-gradient(120deg,#19224e 30%,#005889)' }}
      >
        {/* Tag */}
        <span className="tag-bar relative inline-flex items-center gap-[10px] font-[family-name:var(--font-montserrat)] font-bold text-[11px] tracking-[.22em] uppercase text-cu2">
          Let&rsquo;s connect
        </span>

        <h2 className="relative font-[family-name:var(--font-bricolage)] text-[clamp(34px,6vw,84px)] font-bold my-[22px]">
          Find the value in{' '}
          <span className="text-cu2">what&rsquo;s next.</span>
        </h2>

        <p className="relative max-w-[460px] opacity-80 mb-[34px] text-[17px] leading-[1.6]">
          Exploring surplus equipment, infrastructure upgrades, or asset recovery opportunities?
        </p>

        <a
          href="mailto:hello@rephase.com"
          className="group relative inline-flex items-center gap-3 px-[26px] py-[15px] rounded-full bg-cu text-white font-[family-name:var(--font-montserrat)] font-bold text-[12px] tracking-[.14em] uppercase transition-[background,color] duration-300 hover:bg-white hover:text-navy"
        >
          Contact Rephase
          <span className="grid place-items-center w-6 h-6 rounded-full bg-navy text-white transition-transform duration-300 group-hover:rotate-[-45deg]">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </section>
  )
}
