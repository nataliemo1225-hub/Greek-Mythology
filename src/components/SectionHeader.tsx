import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'

/**
 * Eyebrow (module accent) → Cinzel H2 → gold rule with center diamond →
 * optional lede (Cormorant italic). Eyebrow wipes in, title rises,
 * rule scales from center.
 */
export default function SectionHeader({
  eyebrow,
  title,
  lede,
  accent = '#A87C2A',
  align = 'center',
  className,
  dark = false,
}: {
  eyebrow: string
  title: string
  lede?: string
  accent?: string
  align?: 'center' | 'left'
  className?: string
  dark?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const eyebrowEl = ref.current.querySelector('[data-sh-eyebrow]')
      const titleEl = ref.current.querySelector('[data-sh-title]')
      const ruleEl = ref.current.querySelector('[data-sh-rule]')
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
      })
      tl.fromTo(
        eyebrowEl,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.6, ease: 'power2.out' },
      )
        .fromTo(titleEl, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .fromTo(ruleEl, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: 'power2.out' }, '-=0.5')
    },
    { scope: ref },
  )

  const centered = align === 'center'
  return (
    <div ref={ref} className={cn(centered ? 'text-center' : 'text-left', className)}>
      <p data-sh-eyebrow className="eyebrow" style={{ color: accent }}>
        {eyebrow}
      </p>
      <h2
        data-sh-title
        className={cn(
          'mt-3 font-display font-semibold leading-tight tracking-[0.03em]',
          'text-[clamp(1.75rem,3vw,2.5rem)]',
          dark ? 'text-parchment-on-night' : 'text-ink',
        )}
      >
        {title}
      </h2>
      <div
        data-sh-rule
        className={cn('mt-5 flex items-center gap-3', centered ? 'justify-center' : 'justify-start')}
        style={{ transformOrigin: centered ? 'center' : 'left' }}
      >
        <span className="h-px w-16 bg-gold/60" />
        <span className="inline-block h-2 w-2 rotate-45 bg-gold" />
        <span className="h-px w-16 bg-gold/60" />
      </div>
      {lede && (
        <p
          className={cn(
            'mt-5 font-serif text-[1.2rem] italic leading-[1.6]',
            dark ? 'text-parchment-on-night/80' : 'text-ink-soft',
            centered ? 'mx-auto max-w-[60ch]' : 'max-w-[60ch]',
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
