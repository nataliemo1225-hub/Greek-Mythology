import { useEffect } from 'react'
import type { ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

let lenisInstance: Lenis | null = null

/** Smooth-scroll to a selector or offset via Lenis (falls back to native). */
export function scrollToTarget(target: string | number) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target as never, { duration: 1.4 })
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' })
  } else {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }
}

/** Immediately jump to the top (used on route change). */
export function scrollTopImmediate() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true })
  }
  window.scrollTo(0, 0)
}

/** Site-wide Lenis smooth scrolling, synced with GSAP ScrollTrigger. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) return
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenisInstance = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
  return <>{children}</>
}
