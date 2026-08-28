import { useRef } from 'react'
import { Link } from 'react-router'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

/**
 * Full-width banner (40–52vh) for index/detail pages: module artwork with a
 * dark gradient scrim, breadcrumb, eyebrow, Cinzel H1 in parchment, one-line
 * lede. Background parallaxes yPercent -12 on scroll.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  breadcrumb,
  tall = false,
}: {
  eyebrow: string
  title: string
  lede?: string
  image: string
  breadcrumb: { label: string; to?: string }[]
  tall?: boolean
}) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const bg = ref.current.querySelector('[data-hero-bg]')
      gsap.fromTo(
        bg,
        { yPercent: 0 },
        {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className={`relative flex items-end overflow-hidden ${tall ? 'min-h-[52vh]' : 'min-h-[40vh]'}`}
    >
      <img
        data-hero-bg
        src={image}
        alt=""
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(28,26,43,.35), rgba(28,26,43,.75))' }}
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-14 pt-28">
        <nav className="mb-4 font-sans text-[0.75rem] uppercase tracking-[0.14em] text-parchment-on-night/70" aria-label="Breadcrumb">
          {breadcrumb.map((c, i) => (
            <span key={c.label}>
              {i > 0 && <span className="mx-2 text-gold/70">/</span>}
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-gold-bright">
                  {c.label}
                </Link>
              ) : (
                <span className="text-parchment-on-night">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <p className="eyebrow text-gold-bright">{eyebrow}</p>
        <h1 className="mt-3 font-display text-[clamp(2.5rem,5vw,4.25rem)] font-bold uppercase leading-[1.05] tracking-[0.05em] text-parchment-on-night">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-[60ch] font-serif text-[1.45rem] italic leading-[1.6] text-parchment-on-night/85">
            {lede}
          </p>
        )}
      </div>
    </section>
  )
}
