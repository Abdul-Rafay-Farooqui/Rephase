'use client'

import { useEffect, useRef } from 'react'

interface Node  { x: number; y: number }
interface Pulse { x: number; y: number; d: 'x' | 'y'; s: number; l: number; c: string }

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  /* ── IntersectionObserver — fires .hero-animate on h1 when in view ─────── */
  useEffect(() => {
    const h1 = headingRef.current
    if (!h1) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove then re-add so scrolling back re-triggers it
          h1.classList.remove('hero-animate')
          // Single rAF ensures the browser registers the removal first
          requestAnimationFrame(() => h1.classList.add('hero-animate'))
        }
      },
      { threshold: 0.2 }
    )
    io.observe(h1)
    return () => io.disconnect()
  }, [])

  /* ── Canvas animated grid ───────────────────────────────────────────────── */
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')!

    let W = 0, H = 0
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    const mx = { x: -999, y: -999 }
    let rafId: number

    function resize() {
      W = cv!.width  = cv!.offsetWidth
      H = cv!.height = cv!.offsetHeight
      nodes = []
      const g = W < 700 ? 70 : 90
      for (let i = 0; i <= W / g + 1; i++)
        for (let j = 0; j <= H / g + 1; j++)
          nodes.push({ x: i * g, y: j * g })
    }
    resize()
    window.addEventListener('resize', resize)

    const parent = cv.parentElement!
    function onMove(e: PointerEvent) {
      const r = cv!.getBoundingClientRect()
      mx.x = e.clientX - r.left
      mx.y = e.clientY - r.top
    }
    parent.addEventListener('pointermove', onMove)

    function spawnPulse() {
      const n = nodes[Math.random() * nodes.length | 0]
      pulses.push({ x: n.x, y: n.y, d: Math.random() < .5 ? 'x' : 'y', s: (Math.random() < .5 ? -1 : 1) * (1.4 + Math.random() * 1.6), l: 0, c: Math.random() < .5 ? '0,88,137' : '174,97,39' })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const g = W < 700 ? 70 : 90
      ctx.strokeStyle = 'rgba(25,34,78,.07)'; ctx.lineWidth = 1
      for (let i = 0; i <= W; i += g) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke() }
      for (let j = 0; j <= H; j += g) { ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(W, j); ctx.stroke() }
      nodes.forEach(n => {
        const dist = Math.hypot(n.x - mx.x, n.y - mx.y)
        const r = dist < 160 ? (1 - dist / 160) : 0
        ctx.beginPath(); ctx.arc(n.x, n.y, 2 + r * 5, 0, Math.PI * 2)
        ctx.fillStyle = r ? `rgba(174,97,39,${.3 + r * .7})` : 'rgba(0,88,137,.25)'; ctx.fill()
      })
      if (Math.random() < .08 && pulses.length < 18) spawnPulse()
      pulses = pulses.filter(p => {
        p.l++
        const px = p.x, py = p.y
        if (p.d === 'x') p.x += p.s; else p.y += p.s
        const tx = p.x - (p.d === 'x' ? p.s * 18 : 0), ty = p.y - (p.d === 'y' ? p.s * 18 : 0)
        const gr = ctx.createLinearGradient(px, py, tx, ty)
        gr.addColorStop(0, `rgba(${p.c},.9)`); gr.addColorStop(1, `rgba(${p.c},0)`)
        ctx.strokeStyle = gr; ctx.lineWidth = 2.4
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(tx, ty); ctx.stroke()
        return p.l < 140
      })
      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      parent.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <header
      id="top"
      className="relative h-svh md:h-screen overflow-x-hidden"
    >
      {/* Background video */}
      <video
        autoPlay muted loop playsInline aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'saturate(0.7) brightness(0.65)' }}
      >
        <source src="/bg.webm" type="video/webm" />
        <source src="/bg.mp4"  type="video/mp4" />
      </video>

      {/* Dark overlay — heavier at bottom where text sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, rgba(10,16,40,.85) 0%, rgba(10,16,40,.45) 45%, rgba(10,16,40,.15) 100%)' }}
      />

      {/* Animated canvas grid */}
      {/* <canvas
        id="grid"
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-40 z-[2]"
      /> */}

      {/* Headline — bottom-left, large, left-aligned */}
      <div className="absolute z-[3] bottom-[8vh] left-0 px-7 md:max-w-[1240px]  md:w-full md:mx-auto right-0">
        <h1
          ref={headingRef}
          className="text-[40px] md:text-[100px] font-semibold font-[family-name:var(--font-bricolage)] leading-[0.95] tracking-[-0.03em] text-white max-w-[90%] max-[600px]:max-w-full"
        >
          <span className="hero-line"><span>Recover value.</span></span>
          <span className="hero-line text-cu2"><span>Renew possibility</span></span>
        </h1>
      </div>
    </header>
  )
}


