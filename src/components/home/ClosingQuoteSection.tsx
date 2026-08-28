import { useRef } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'

const QUOTE = 'Even the gods themselves are ruled by fate.'

/** Section 6 — closing quote band before the footer. */
export default function ClosingQuoteSection() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      })
      tl.fromTo(
        '[data-quote-laurel]',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
      ).fromTo(
        '[data-quote-word]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: 'power2.out' },
        '-=0.3',
      )
    },
    { scope: ref },
  )

  return (
    <section
      ref={ref}
      className="bg-ivory pb-[clamp(64px,10vw,130px)] pt-[clamp(24px,4vw,48px)] text-center"
      aria-label="Closing quote"
    >
      <img data-quote-laurel src="/divider-laurel.svg" alt="" className="mx-auto w-64 opacity-90" />
      <blockquote className="mx-auto mt-8 max-w-[26ch]">
        <p className="font-serif text-[1.8rem] italic leading-[1.5] text-ink">
          {QUOTE.split(' ').map((w, i) => (
            <span key={i} data-quote-word className="inline-block">
              {w}
              {'\u00A0'}
            </span>
          ))}
        </p>
        <footer className="mt-5 font-sans text-[0.8rem] uppercase tracking-[0.2em] text-ink-soft">
          — after Homer
        </footer>
      </blockquote>
      <img
        data-quote-laurel
        src="/divider-laurel.svg"
        alt=""
        className="mx-auto mt-8 w-64 rotate-180 opacity-90"
      />
    </section>
  )
}
