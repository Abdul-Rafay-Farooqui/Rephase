'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * Scroll-driven section: the background panel stays pinned (sticky) while the
 * content blocks scroll through it. The background crossfades between slides
 * based on scroll progress.
 */

const mont = 'font-[family-name:var(--font-montserrat)]'

// Topographic contour lines, generated once (deterministic, no hydration drift)
function contourPaths() {
  const paths: string[] = []
  for (let i = 0; i < 34; i++) {
    const y = 120 + i * 17
    let d = ''
    for (let x = 0; x <= 1200; x += 20) {
      const peak = Math.exp(-Math.pow((x - 600) / 280, 2)) * 150
      const wave = Math.sin(x / 70 + i * 0.35) * 8 + Math.sin(x / 31 + i) * 3
      const yy = y - peak * (1 - i / 48) + wave
      d += `${x === 0 ? 'M' : 'L'}${x},${yy.toFixed(1)} `
    }
    paths.push(d)
  }
  return paths
}
const CONTOURS = contourPaths()

function Contours({ color }: { color: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 700"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
    >
      {CONTOURS.map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth="1" opacity="0.35" />
      ))}
    </svg>
  )
}

// One entry per slide: background + line colour. Text colours live in the blocks.
const BACKGROUNDS = [
  { bg: 'linear-gradient(160deg,#19224e 0%,#243a9c 100%)', line: '#8fa6ff' },
  { bg: 'linear-gradient(160deg,#a9c4f5 0%,#c7daf7 100%)', line: '#4a66d8' },
  { bg: 'linear-gradient(160deg,#efede4 0%,#e6e3d6 100%)', line: '#9aa0b8' },
]

export default function HeroIntro() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRefs = useRef<(HTMLDivElement | null)[]>([])
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const el = sectionRef.current
      if (!el) return
      const vh = window.innerHeight
      // progress 0 → first block centred, 1 → second block centred, ...
      const progress = -el.getBoundingClientRect().top / vh
      BACKGROUNDS.forEach((_, i) => {
        const dist = Math.abs(progress - i)
        const bg = bgRefs.current[i]
        const block = blockRefs.current[i]
        // First background is always the base layer so the panel never shows a gap
        if (bg) bg.style.opacity = i === 0 ? '1' : String(Math.max(0, Math.min(1, 1 - dist)))
        if (block) block.style.opacity = String(Math.max(0, Math.min(1, 1.6 - dist * 1.4)))
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const setBg = (i: number) => (n: HTMLDivElement | null) => {
    bgRefs.current[i] = n
  }
  const setBlock = (i: number) => (n: HTMLDivElement | null) => {
    blockRefs.current[i] = n
  }

  const blockBase =
    'h-[100svh] flex items-center justify-center px-7 will-change-[opacity]'

  return (
    <section ref={sectionRef} className="relative z-[1]  justify-self-center pl-5 w-[80%]">
      {/* Pinned background panel */}
      <div className="sticky top-1 h-[100svh] p-3 max-[900px]:p-2">
        <div className="relative w-full h-full rounded-[28px] overflow-hidden">
          {BACKGROUNDS.map((b, i) => (
            <div
              key={i}
              ref={setBg(i)}
              className="absolute inset-0"
              style={{ background: b.bg, opacity: i === 0 ? 1 : 0 }}
            >
              <Contours color={b.line} />
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling content, pulled up over the pinned panel */}
      <div className="relative z-10 -mt-[100svh]">
        {/* 1 — Industrial Asset Recovery */}
        <div ref={setBlock(0)} className={blockBase}>
          <Slide
            tone="text-white"
            tag="Rephase / Asset Recovery"
            title="Industrial Asset Recovery"
            body="Unlocking the value of surplus industrial assets, electrical infrastructure, and high-value materials."
          />
        </div>

        {/* 2 — Infrastructure Reuse */}
        <div ref={setBlock(1)} className={blockBase}>
          <Slide
            tone="text-[#2b3fb8]"
            title="Infrastructure Reuse"
            body="Electrical infrastructure."
          />
        </div>

        {/* 3 — Strategic Recycling */}
        <div ref={setBlock(2)} className={blockBase}>
          <Slide
            tone="text-navy"
            title="Strategic Recycling"
            body="High-value materials."
            actions
          />
        </div>
      </div>
    </section>
  )
}

function Slide({
  tone,
  title,
  body,
  tag,
  actions,
}: {
  tone: string
  tag?: string
  title: string
  body: string
  actions?: boolean
}) {
  return (
    <div className={`max-w-[760px] text-center ${tone}`}>
      {tag && (
        <span
          className={`tag-bar inline-flex items-center gap-[10px] ${mont} font-bold text-[11px] tracking-[.22em] uppercase mb-6 opacity-90`}
        >
          {tag}
        </span>
      )}
      <h2 className="text-[clamp(36px,5vw,68px)] leading-[1.05] font-light mb-5">{title}</h2>
      <p className="text-[19px] leading-[1.7] opacity-80">{body}</p>
      {actions && (
        <div className="flex gap-[14px] flex-wrap justify-center mt-[34px]">
          <a
            href="#services"
            className={`group inline-flex items-center gap-3 px-[26px] py-[15px] rounded-full bg-navy text-white! ${mont} font-bold text-[12px] tracking-[.14em] uppercase transition-[background] duration-300 will-change-transform hover:bg-blue`}
          >
            Explore Services
            <span className="grid place-items-center w-6 h-6 rounded-full bg-cu transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight size={14} strokeWidth={2.5} />
            </span>
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center gap-3 px-[26px] py-[15px] rounded-full bg-transparent text-navy ${mont} font-bold text-[12px] tracking-[.14em] uppercase shadow-[inset_0_0_0_1.5px_#19224e] transition-[background,color] duration-300 hover:bg-navy hover:text-white!`}
          >
            Let&rsquo;s Connect
          </a>
        </div>
      )}
    </div>
  )
}

