import { useRef } from 'react'
import { Link } from 'react-router'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

interface Beat {
  numeral: string
  eyebrow: string
  title: string
  text: string
  image: string
  linkTo: string
  linkLabel: string
}

const BEATS: Beat[] = [
  {
    numeral: 'I',
    eyebrow: 'The Beginning',
    title: 'Chaos',
    text: 'In the beginning there was Chaos — the yawning void. Then Gaia, the Earth; Tartarus, the depths; Eros, desire; Nyx and Erebus, night and darkness.',
    image: '/art-primordial.jpg',
    linkTo: '/pantheon?tab=primordial',
    linkLabel: 'Meet them',
  },
  {
    numeral: 'II',
    eyebrow: 'The Golden Age',
    title: 'The Titans',
    text: 'From Gaia and Uranus came the Titans — twelve colossal powers who ruled the golden age, until Cronus devoured his own children and the wheel of fate turned.',
    image: '/art-titans.jpg',
    linkTo: '/pantheon?tab=titan',
    linkLabel: 'Meet them',
  },
  {
    numeral: 'III',
    eyebrow: 'The New Order',
    title: 'The Olympians',
    text: 'Then Zeus and his siblings rose, cast the Titans into Tartarus, and took their thrones on Olympus — the Twelve whose stories fill this atlas.',
    image: '/art-olympians.jpg',
    linkTo: '/pantheon?tab=olympian',
    linkLabel: 'Meet them',
  },
]

function BeatText({ beat, index }: { beat: Beat; index: number }) {
  return (
    <div data-beat-text={index} className="absolute inset-0 flex items-center">
      <div className="ml-[12%] max-w-[640px] pr-8">
        <span
          className="pointer-events-none absolute left-[4%] top-1/2 -translate-y-1/2 select-none font-display text-[8rem] font-bold text-parchment-on-night/[0.12]"
          aria-hidden
        >
          {beat.numeral}
        </span>
        <p className="eyebrow text-gold-bright">{beat.eyebrow}</p>
        <h3 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase tracking-[0.05em] text-parchment-on-night">
          {beat.title}
        </h3>
        <p className="mt-5 font-serif text-[1.3rem] leading-[1.7] text-parchment-on-night/85">
          {beat.text.split(' ').map((w, i) => (
            <span key={i} data-beat-word={index} className="inline-block will-change-transform">
              {w}
              {'\u00A0'}
            </span>
          ))}
        </p>
        <Link
          to={beat.linkTo}
          className="mt-6 inline-flex items-center gap-2 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-gold-bright transition-colors hover:text-gold"
        >
          <span className="link-underline">{beat.linkLabel}</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  )
}

/** Static stacked panels for prefers-reduced-motion. */
function StaticBeats() {
  return (
    <div className="bg-night">
      {BEATS.map((b) => (
        <div key={b.numeral} className="relative flex min-h-[60vh] items-center overflow-hidden">
          <img src={b.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-night/60" aria-hidden />
          <div className="relative ml-[12%] max-w-[640px] py-16 pr-8">
            <p className="eyebrow text-gold-bright">{b.eyebrow}</p>
            <h3 className="mt-3 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold uppercase tracking-[0.05em] text-parchment-on-night">
              {b.title}
            </h3>
            <p className="mt-5 font-serif text-[1.3rem] leading-[1.7] text-parchment-on-night/85">{b.text}</p>
            <Link
              to={b.linkTo}
              className="mt-6 inline-flex items-center gap-2 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-gold-bright transition-colors hover:text-gold"
            >
              <span className="link-underline">{b.linkLabel}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

/**
 * "From Chaos to Olympus" — pinned, scroll-scrubbed three-beat prologue with
 * a progress rail (I · II · III). 300vh of scroll length.
 */
export default function PrologueSection() {
  const ref = useRef<HTMLElement>(null)
  const reduced = typeof window !== 'undefined' && prefersReducedMotion()

  useGSAP(
    () => {
      if (reduced || !ref.current) return

      const stage = ref.current.querySelector('[data-stage]')

      // initial states
      gsap.set('[data-beat-bg="1"], [data-beat-bg="2"]', { opacity: 0 })
      gsap.set('[data-beat-text="1"], [data-beat-text="2"]', { opacity: 0, y: 40 })
      gsap.set('[data-beat-word="0"]', { opacity: 0, y: 24 })
      gsap.set('[data-beat-word="1"], [data-beat-word="2"]', { opacity: 1, y: 0 })
      gsap.set('[data-rail-fill="0"]', { scaleX: 1 })
      gsap.set('[data-rail-fill="1"], [data-rail-fill="2"]', { scaleX: 0, transformOrigin: 'left' })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: '+=200%',
          pin: stage,
          scrub: 0.6,
          anticipatePin: 1,
        },
      })

      // Beat 1: backdrop fades/scales in (0–20%), words rise (5–25%)
      tl.fromTo('[data-beat-bg="0"]', { opacity: 0, scale: 1 }, { opacity: 1, scale: 1.12, duration: 0.2 }, 0)
        .to('[data-beat-word="0"]', { opacity: 1, y: 0, duration: 0.2, stagger: 0.004 }, 0.05)
        // keep scaling beat 1 bg gently until its exit
        .to('[data-beat-bg="0"]', { scale: 1.16, duration: 0.13, ease: 'none' }, 0.2)
        // --- crossfade to beat 2 at ~33% ---
        .to('[data-beat-text="0"]', { opacity: 0, y: -40, duration: 0.08 }, 0.33)
        .to('[data-beat-bg="0"]', { opacity: 0, duration: 0.12 }, 0.33)
        .fromTo('[data-beat-bg="1"]', { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1.12, duration: 0.14 }, 0.36)
        .to('[data-beat-text="1"]', { opacity: 1, y: 0, duration: 0.1 }, 0.38)
        .to('[data-rail-fill="1"]', { scaleX: 1, duration: 0.05 }, 0.4)
        .to('[data-beat-bg="1"]', { scale: 1.16, duration: 0.14, ease: 'none' }, 0.5)
        // --- crossfade to beat 3 at ~66% ---
        .to('[data-beat-text="1"]', { opacity: 0, y: -40, duration: 0.08 }, 0.66)
        .to('[data-beat-bg="1"]', { opacity: 0, duration: 0.12 }, 0.66)
        .fromTo('[data-beat-bg="2"]', { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1.12, duration: 0.14 }, 0.69)
        .to('[data-beat-text="2"]', { opacity: 1, y: 0, duration: 0.1 }, 0.71)
        .to('[data-beat-bg="2"]', { scale: 1.16, duration: 0.2, ease: 'none' }, 0.8)
    },
    { scope: ref },
  )

  if (reduced) {
    return (
      <section id="prologue" aria-label="From Chaos to Olympus">
        <StaticBeats />
      </section>
    )
  }

  return (
    <section ref={ref} id="prologue" className="relative bg-night" aria-label="From Chaos to Olympus">
      <div data-stage className="relative h-[100dvh] overflow-hidden">
        {/* Backdrops */}
        {BEATS.map((b, i) => (
          <img
            key={b.numeral}
            data-beat-bg={i}
            src={b.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 will-change-transform"
          />
        ))}
        <div className="absolute inset-0 bg-night/55" aria-hidden />

        {/* Beat texts */}
        {BEATS.map((b, i) => (
          <BeatText key={b.numeral} beat={b} index={i} />
        ))}
      </div>
    </section>
  )
}
