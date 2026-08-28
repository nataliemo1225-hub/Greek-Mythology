import { useRef } from 'react'
import type { ReactNode } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'

/**
 * Default scroll reveal ("rise"): opacity 0→1, y 40→0, 0.8s,
 * trigger at 85% viewport, once. Children with [data-reveal-item]
 * can be staggered instead via the `stagger` prop.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  stagger = 0,
  y = 40,
}: {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const items = stagger > 0 ? ref.current.querySelectorAll('[data-reveal-item]') : [ref.current]
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          stagger: stagger > 0 ? stagger : 0,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
