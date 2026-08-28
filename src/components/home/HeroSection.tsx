import { useRef } from 'react'
import { Link } from 'react-router'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { scrollToTarget } from '@/components/SmoothScroll'
import MeanderDivider from '@/components/MeanderDivider'

const TITLE = 'MYTHOS'

/** Cinematic full-viewport hero with load choreography and scroll parallax. */
export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!ref.current) return
      const reduced = prefersReducedMotion()

      if (!reduced) {
        // ---- Load choreography ----
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.fromTo('[data-hero-dark]', { opacity: 0.9 }, { opacity: 0, duration: 1.2 })
          .fromTo(
            '[data-hero-eyebrow]',
            { opacity: 0, letterSpacing: '0.5em' },
            { opacity: 1, letterSpacing: '0.34em', duration: 0.9 },
            0.1,
          )
          .fromTo(
            '[data-hero-char]',
            { opacity: 0, y: 60, rotate: 4 },
            { opacity: 1, y: 0, rotate: 0, duration: 1, stagger: 0.035 },
            0.15,
          )
          .fromTo('[data-hero-sub]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 }, 0.65)
          .fromTo('[data-hero-ctas]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.95)
          .fromTo(
            '[data-hero-cue-line]',
            { scaleY: 0 },
            { scaleY: 1, duration: 0.8, transformOrigin: 'top' },
            1.25,
          )
          .fromTo('[data-hero-cue]', { opacity: 0 }, { opacity: 1, duration: 0.4 }, 1.35)

        // ---- Scroll parallax (scrub) ----
        gsap.to('[data-hero-bg]', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
        })
        gsap.to('[data-hero-content]', {
          y: -80,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top top',
            end: '60% top',
            scrub: true,
          },
        })
      } else {
        gsap.set('[data-hero-dark]', { opacity: 0 })
      }
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative flex min-h-[max(100dvh,640px)] flex-col overflow-hidden bg-night">
      {/* Background + scrims */}
      <img
        data-hero-bg
        src="/hero-home.jpg"
        alt="Engraved view of Mount Olympus above golden clouds at dawn"
        className="absolute inset-0 h-[115%] w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(28,26,43,0.25) 0%, rgba(28,26,43,0.55) 70%, rgba(28,26,43,0.85) 100%)',
        }}
        aria-hidden
      />
      <div data-hero-dark className="pointer-events-none absolute inset-0 bg-night" aria-hidden />

      {/* Faint flanking laurels */}
      <img
        src="/laurel.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-1/2 hidden w-[320px] -translate-y-1/2 opacity-[0.08] lg:block"
      />
      <img
        src="/laurel.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-1/2 hidden w-[320px] -translate-y-1/2 opacity-[0.08] lg:block"
      />

      {/* Content — centered, bottom-weighted */}
      <div
        data-hero-content
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-end px-[clamp(20px,5vw,48px)] pb-[14vh] text-center"
      >
        <p data-hero-eyebrow className="font-sans text-[0.75rem] font-semibold uppercase text-gold-bright" style={{ letterSpacing: '0.34em' }}>
          An Atlas of the Ancient Greek World
        </p>
        <h1
          className="mt-5 font-display font-bold uppercase leading-[1.05] text-parchment-on-night"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)', letterSpacing: '0.12em' }}
          aria-label="Mythos"
        >
          {TITLE.split('').map((ch, i) => (
            <span key={i} data-hero-char className="inline-block will-change-transform" aria-hidden>
              {ch}
            </span>
          ))}
        </h1>
        <p
          data-hero-sub
          className="mt-6 max-w-[52ch] font-serif text-[1.5rem] italic leading-[1.5] text-parchment-on-night/90"
        >
          From Chaos to Odysseus — the gods, heroes, and epics of Greek mythology, gathered in one atlas.
        </p>
        <div data-hero-ctas className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/pantheon"
            className="btn-gold-sweep border border-gold-bright bg-gold px-7 py-3.5 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Enter the Pantheon
          </Link>
          <Link
            to="/maps"
            className="border border-parchment-on-night/70 px-7 py-3.5 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-parchment-on-night transition-all hover:-translate-y-0.5 hover:border-gold-bright hover:text-gold-bright"
          >
            Explore the Maps
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        type="button"
        data-hero-cue
        onClick={() => scrollToTarget('#prologue')}
        className="cue-pulse absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-bright"
        aria-label="Scroll to the prologue"
      >
        <span className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <span data-hero-cue-line className="block h-12 w-px bg-gold-bright/80" />
        <span className="block h-2 w-2 rotate-45 bg-gold-bright" />
      </button>

      {/* Meander transition strip */}
      <MeanderDivider className="absolute bottom-0 left-0 z-10" />
    </section>
  )
}
