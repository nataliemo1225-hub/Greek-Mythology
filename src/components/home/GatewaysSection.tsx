import { useRef } from 'react'
import { Link } from 'react-router'
import { primordials, titans, titanBorn, olympians, otherDeities, heroes, kings, stories } from '@/data'
import SectionHeader from '@/components/SectionHeader'
import Chip from '@/components/Chip'
import { gsap, useGSAP, prefersReducedMotion } from '@/lib/gsap'
import { cn } from '@/lib/utils'

const epics = stories.filter((s) => s.category !== 'tragedy')

interface Gate {
  to: string
  title: string
  copy: string
  image?: string
  chips: string[]
  accent: string
  span: string
  tall?: boolean
  imagePosition?: string
}

const GATES: Gate[] = [
  {
    to: '/pantheon',
    title: 'The Pantheon',
    copy: 'Primordial powers, the twelve Titans, and the Olympian gods.',
    image: '/art-olympians.jpg',
    chips: [
      `${primordials.length} Primordials`,
      `${titans.length + titanBorn.length} Titans`,
      `${olympians.length + otherDeities.length} Deities`,
    ],
    accent: '#A87C2A',
    span: 'md:col-span-7',
    tall: true,
  },
  {
    to: '/heroes',
    title: 'The Heroes',
    copy: 'Mortal men and women who dared the impossible.',
    image: '/art-heroes.jpg',
    chips: [`${heroes.length} Heroes`],
    accent: '#A44A2A',
    span: 'md:col-span-5',
    tall: true,
  },
  {
    to: '/stories',
    title: 'Stories & Epics',
    copy: "The Trojan War, Homer's two epics, and the voyage of the Argo.",
    image: '/art-trojan-war.jpg',
    chips: [`${epics.length} Epics`],
    accent: '#25505E',
    span: 'md:col-span-5',
  },
  {
    to: '/tragedies',
    title: 'Tragic Families',
    copy: 'Three houses, three curses.',
    image: '/art-atreus.jpg',
    chips: ['3 Houses'],
    accent: '#6E2B2B',
    span: 'md:col-span-4',
  },
  {
    to: '/maps',
    title: 'The Maps',
    copy: 'Sail the mythic world.',
    image: '/map-greece.jpg',
    chips: ['3 Maps'],
    accent: '#25505E',
    span: 'md:col-span-3',
    imagePosition: 'center 40%',
  },
]

function GateCard({ gate }: { gate: Gate }) {
  return (
    <article
      data-reveal-item
      className={cn(
        'group relative col-span-12 flex flex-col overflow-hidden rounded-md hairline bg-parchment shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg',
        gate.span,
      )}
    >
      <span className="absolute inset-x-0 top-0 z-10 h-1" style={{ backgroundColor: gate.accent }} aria-hidden />
      <div className={cn('relative overflow-hidden', gate.tall ? 'h-56 md:h-64' : 'h-40')}>
        {gate.image && (
          <img
            src={gate.image}
            alt=""
            loading="lazy"
            className="art-breathe h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
            style={gate.imagePosition ? { objectPosition: gate.imagePosition } : undefined}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[1.5rem] font-semibold tracking-[0.02em] text-ink transition-colors group-hover:text-gold">
          {gate.title}
        </h3>
        <p className="mt-2 font-serif text-[1.1rem] leading-relaxed text-ink-soft">{gate.copy}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {gate.chips.map((c) => (
            <Chip key={c} accent={gate.accent}>
              {c}
            </Chip>
          ))}
        </div>
        <Link
          to={gate.to}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean after:absolute after:inset-0"
          aria-label={`Open ${gate.title}`}
        >
          <span className="link-underline">Enter</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

/** Full-width banner card for the Kings module — image left, copy right. */
function KingsStrip() {
  const war = kings.filter((k) => k.group === 'war').length
  const cursed = kings.filter((k) => k.group === 'cursed').length
  const founders = kings.filter((k) => k.group === 'founder').length
  return (
    <article
      data-reveal-item
      className="group relative col-span-12 flex flex-col overflow-hidden rounded-md hairline bg-parchment shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg md:flex-row"
    >
      <span className="absolute inset-x-0 top-0 z-10 h-1 bg-[#674A7E]" aria-hidden />
      <div className="relative h-48 overflow-hidden md:h-auto md:w-[42%]">
        <img
          src="/art-kings.jpg"
          alt=""
          loading="lazy"
          className="art-breathe h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
        <h3 className="font-display text-[1.5rem] font-semibold tracking-[0.02em] text-ink transition-colors group-hover:text-gold">
          The Kings
        </h3>
        <p className="mt-2 max-w-[52ch] font-serif text-[1.1rem] leading-relaxed text-ink-soft">
          Between gods and heroes stood the mortal sovereigns — warlords at Troy, cursed dynasties,
          and the founders of cities.
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Chip accent="#674A7E">{`${war} at Troy`}</Chip>
          <Chip accent="#674A7E">{`${cursed} Cursed`}</Chip>
          <Chip accent="#674A7E">{`${founders} Founders & Legends`}</Chip>
        </div>
        <Link
          to="/kings"
          className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean after:absolute after:inset-0"
          aria-label="Enter the hall of kings"
        >
          <span className="link-underline">Enter</span>
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  )
}

/** Section 3 — "The Atlas": asymmetric bento grid of module gateways. */
export default function GatewaysSection() {
  const ref = useRef<HTMLElement>(null)

  // Next section slides over the pinned prologue with rounded top corners
  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return
      gsap.fromTo(
        ref.current,
        { borderRadius: '24px 24px 0 0' },
        {
          borderRadius: '0px 0px 0 0',
          ease: 'none',
          scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'top 55%', scrub: true },
        },
      )
      gsap.fromTo(
        '[data-reveal-item]',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.09,
          ease: 'power3.out',
          scrollTrigger: { trigger: '[data-gates-grid]', start: 'top 80%', once: true },
        },
      )
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="relative z-10 bg-ivory py-[clamp(56px,9vw,120px)]" aria-label="The Atlas">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)]">
        <SectionHeader
          eyebrow="The Atlas"
          title="Six Gates into the Myths"
          lede="Choose where to begin your wanderings."
        />
        <img src="/divider-laurel.svg" alt="" className="mx-auto mt-8 w-56 opacity-80" />
        <div data-gates-grid className="mt-12 grid grid-cols-12 gap-7">
          {GATES.map((g) => (
            <GateCard key={g.to} gate={g} />
          ))}
          <KingsStrip />
        </div>
      </div>
    </section>
  )
}
