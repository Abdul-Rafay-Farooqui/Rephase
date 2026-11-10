'use client'

import { useEffect } from 'react'

/**
 * ClientEffects — mounts all global JS interactions from the original HTML:
 *   • Preloader dismiss
 *   • Scroll progress bar (#bar)
 *   • Cursor glow (#glow)
 *   • IntersectionObserver reveal (.rv → .in)
 *   • Step progress line (--p custom property on #steps)
 *   • 3-D tilt on .tilt cards
 *   • Magnetic pull on .mag buttons
 */
export default function ClientEffects() {
  useEffect(() => {
    // ── Helpers ────────────────────────────────────────────────────────────
    const $  = <T extends Element>(s: string) => document.querySelector<T>(s)
    const $$ = <T extends Element>(s: string) => [...document.querySelectorAll<T>(s)]

    // ── Preloader — dismisses when hero video fires 'hero:ready' ──────────
    const pre = $('#pre')
    if (pre) {
      function dismissPreloader() {
        pre!.classList.add('go')
      }
      window.addEventListener('hero:ready', dismissPreloader, { once: true })
      // Store ref for cleanup
      ;(pre as HTMLElement & { _dismiss?: () => void })._dismiss = dismissPreloader
    }

    // ── Reveal (IntersectionObserver) ──────────────────────────────────────
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    $$<HTMLElement>('.rv').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 100}ms`
      io.observe(el)
    })

    // ── Scroll: progress bar + step progress ──────────────────────────────
    function onScroll() {
      const bar = $('#bar') as HTMLElement | null
      if (bar) {
        const h = document.documentElement
        bar.style.width =
          (scrollY / (h.scrollHeight - innerHeight)) * 100 + '%'
      }

      const steps = $('#steps') as HTMLElement | null
      if (steps) {
        const r = steps.getBoundingClientRect()
        const pct = Math.max(
          0,
          Math.min(100, ((innerHeight * 0.8 - r.top) / r.height) * 70)
        )
        steps.style.setProperty('--p', pct + '%')

        // Activate step circles as the line passes them
        const sts = $$<HTMLElement>('#steps .st')
        const total = sts.length
        sts.forEach((st, idx) => {
          const threshold = (idx / (total - 1)) * 70
          const active = pct >= threshold
          st.classList.toggle('in', active)
          // Apply active styles directly — circle is the first <b> child
          const circle = st.querySelector<HTMLElement>('b')
          if (circle) {
            circle.style.background  = active ? '#fff'    : ''
            circle.style.color       = active ? '#19224e' : ''
            circle.style.borderColor = active ? '#19224e' : ''
            circle.style.boxShadow   = active ? '0 8px 28px -4px rgba(25,34,78,.38)' : ''
          }
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount

    // ── Cursor glow ────────────────────────────────────────────────────────
    function onPointerMove(e: PointerEvent) {
      const glow = $('#glow') as HTMLElement | null
      if (glow) glow.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
    }
    window.addEventListener('pointermove', onPointerMove)

    // ── Tilt cards ─────────────────────────────────────────────────────────
    const tiltCards = $$<HTMLElement>('.tilt')
    const tiltCleanup: Array<() => void> = []

    tiltCards.forEach(card => {
      function onMove(e: PointerEvent) {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - 0.5
        const y = (e.clientY - r.top)  / r.height - 0.5
        card.style.transform =
          `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`
      }
      function onLeave() {
        card.style.transform = ''
      }
      card.addEventListener('pointermove', onMove)
      card.addEventListener('pointerleave', onLeave)
      tiltCleanup.push(() => {
        card.removeEventListener('pointermove', onMove)
        card.removeEventListener('pointerleave', onLeave)
      })
    })

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      if (pre) {
        const p = pre as HTMLElement & { _dismiss?: () => void }
        if (p._dismiss) window.removeEventListener('hero:ready', p._dismiss)
      }
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      tiltCleanup.forEach(fn => fn())
    }
  }, [])

  return null // renders nothing — side-effects only
}



