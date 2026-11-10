'use client'

import { useEffect, useRef } from 'react'

interface Node  { x: number; y: number }
interface Pulse { x: number; y: number; d: 'x' | 'y'; s: number; l: number; c: string }

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)

  /* ── Dispatch 'hero:ready' once the video can play ──────────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    function onReady() {
      window.dispatchEvent(new CustomEvent('hero:ready'))
    }

    // 'canplay' fires when enough data is buffered to start
    video.addEventListener('canplay', onReady, { once: true })

    // Explicitly call play() — React hydration can suppress the autoPlay attribute
    video.play().catch(() => {
      // Autoplay blocked (e.g. browser policy) — still dismiss preloader
      onReady()
    })

    // Safety net — dismiss preloader after 4s even if video never loads
    const fallback = setTimeout(onReady, 4000)

    return () => {
      video.removeEventListener('canplay', onReady)
      clearTimeout(fallback)
    }
  }, [])

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
  const video = videoRef.current
  if (!video) return

  const t0 = performance.now()
  let done = false
  const finish = (why: string) => {
    if (done) return
    done = true
    console.log(`[hero] ready via ${why} after ${Math.round(performance.now() - t0)}ms`)
    ;(window as any).__heroReady = true
    window.dispatchEvent(new CustomEvent('hero:ready'))
  }

  const onPlaying = () => {
    if ('requestVideoFrameCallback' in video) {
      video.requestVideoFrameCallback(() => finish('frame painted'))
    } else {
      finish('playing')
    }
  }

  video.muted = true // React omits this attribute from SSR HTML
  // Resolves once playback has started, even if autoplay already began pre-hydration
  video.play().then(onPlaying, () => finish('autoplay blocked'))

  const fallback = setTimeout(() => finish('timeout'), 6000)
  return () => clearTimeout(fallback)
}, [])

  return (
    <header
      id="top"
      className="relative h-svh md:h-screen overflow-x-hidden"
    >
      {/* Background video — dispatches 'hero:ready' when it can play */}
      <video
        ref={videoRef}
        autoPlay muted loop playsInline preload="auto" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'saturate(0.7) brightness(0.65)' }}
      >
        <source src="/bgmain.webm" type="video/webm" />
        <source src="/bgmain.mp4"  type="video/mp4" />
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


