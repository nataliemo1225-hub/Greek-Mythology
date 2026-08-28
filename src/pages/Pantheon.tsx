import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import GodCard, { GENERATION_ACCENT } from '@/components/GodCard'
import Reveal from '@/components/Reveal'
import MeanderDivider from '@/components/MeanderDivider'
import { primordials, titans, titanBorn, olympians, otherDeities } from '@/data'

type TabId = 'primordial' | 'titan' | 'olympian'

const TABS: {
  id: TabId
  label: string
  subtitle: string
  numeral: string
  name: string
  art: string
  intro: string
  main: typeof primordials
  extra?: typeof primordials
  extraHeader?: string
  badge: string
}[] = [
  {
    id: 'primordial',
    label: 'Primordial Gods',
    subtitle: 'The first powers',
    numeral: 'I',
    name: 'The Primordial Gods',
    art: '/art-primordial.jpg',
    intro:
      'Before gods there were powers: the void of Chaos, broad-breasted Gaia, starry Uranus, night itself. They are not worshipped so much as endured — the stage on which all myth unfolds.',
    main: primordials,
    badge: String(primordials.length),
  },
  {
    id: 'titan',
    label: 'The Twelve Titans',
    subtitle: 'Lords of the golden age',
    numeral: 'II',
    name: 'The Twelve Titans',
    art: '/art-titans.jpg',
    intro:
      'The twelve children of Earth and Sky ruled a golden age from Mount Othrys — until their own son Cronus was overthrown in turn. Their children, Atlas and Prometheus among them, still bear the weight of that fall.',
    main: titans,
    extra: titanBorn,
    extraHeader: 'Second Generation — the Titan-born',
    badge: `${titans.length} + ${titanBorn.length}`,
  },
  {
    id: 'olympian',
    label: 'The Olympians',
    subtitle: 'The thrones of Olympus',
    numeral: 'III',
    name: 'The Olympians',
    art: '/art-olympians.jpg',
    intro:
      'Victors of the Titanomachy, the twelve dwellers of Olympus rule sky, sea, harvest, war, love, and craft. Their quarrels and loves drive nearly every story in this atlas.',
    main: olympians,
    extra: otherDeities,
    extraHeader: 'Also among the Olympian circle',
    badge: `${olympians.length} + ${otherDeities.length}`,
  },
]

const TAB_ACCENT: Record<TabId, string> = {
  primordial: '#3D3A5C',
  titan: '#8C5A2B',
  olympian: '#A87C2A',
}

export default function Pantheon() {
  const [params, setParams] = useSearchParams()
  const tabParam = params.get('tab')
  const activeTab: TabId =
    tabParam === 'titan' || tabParam === 'olympian' ? tabParam : 'primordial'
  const tab = useMemo(() => TABS.find((t) => t.id === activeTab)!, [activeTab])
  const accent = TAB_ACCENT[activeTab]

  return (
    <div>
      <PageHero
        key={activeTab}
        eyebrow="Three Generations of Divine Power"
        title="The Pantheon"
        lede="From the first void to the thrones of Olympus."
        image={tab.art}
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Pantheon' }]}
        tall
      />

      {/* Generation tabs — intentionally not sticky, so they never overlap the content below while scrolling */}
      <div className="border-b border-gold/25 bg-ivory">
        <div className="mx-auto grid max-w-[1200px] gap-2 px-[clamp(20px,5vw,48px)] py-3 sm:grid-cols-3">
          {TABS.map((t) => {
            const active = t.id === activeTab
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setParams({ tab: t.id })}
                className={`relative rounded-sm px-4 py-2.5 text-left transition-colors duration-300 ${
                  active ? 'bg-gold/10' : 'hover:bg-parchment'
                }`}
              >
                <span className="flex items-baseline justify-between gap-2">
                  <span className="font-display text-[0.95rem] font-semibold uppercase tracking-[0.06em] text-ink">
                    {t.label}
                  </span>
                  <span className="rounded-sm border border-gold/50 px-1.5 py-0.5 font-sans text-[0.62rem] font-semibold text-ink-soft">
                    {t.badge}
                  </span>
                </span>
                <span className="block font-sans text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft">
                  {t.subtitle}
                </span>
                {active && (
                  <motion.span
                    layoutId="pantheon-tab-bar"
                    className="absolute inset-x-0 bottom-0 h-[3px]"
                    style={{ backgroundColor: TAB_ACCENT[t.id] }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {/* Generation intro */}
          <section className="mx-auto grid max-w-[1200px] items-center gap-6 px-[clamp(20px,5vw,48px)] pt-[clamp(40px,6vw,72px)] md:grid-cols-[auto_1fr] md:gap-12">
            <div className="flex items-center gap-5">
              <span
                className="font-display text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-none"
                style={{ color: accent }}
              >
                {tab.numeral}
              </span>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-ink">
                {tab.name}
              </h2>
            </div>
            <p className="max-w-[62ch] font-serif text-[1.15rem] italic leading-[1.75] text-ink-soft">
              {tab.intro}
            </p>
          </section>

          {/* God grid */}
          <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(40px,6vw,72px)]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tab.main.map((god) => (
                <GodCard key={god.id} god={god} />
              ))}
            </div>

            {tab.extra && tab.extra.length > 0 && (
              <>
                <div className="mt-16 mb-8 flex items-center gap-4">
                  <span
                    className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {tab.extraHeader}
                  </span>
                  <span className="h-px flex-1 bg-gold/30" aria-hidden />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {tab.extra.map((god) => (
                    <GodCard key={god.id} god={god} />
                  ))}
                </div>
              </>
            )}
          </section>
        </motion.div>
      </AnimatePresence>

      {/* Footer CTA */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-[clamp(56px,8vw,96px)] text-center">
        <MeanderDivider />
        <Reveal className="mt-10">
          <p className="font-serif text-[1.3rem] italic text-ink-soft">
            Some of these names appear on the map —
          </p>
          <Link
            to="/maps"
            className="btn-gold-sweep mt-6 inline-block border border-gold-bright bg-gold px-7 py-3.5 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-ink hover:-translate-y-0.5"
          >
            See them in the Atlas →
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

// re-export to keep the accent map importable elsewhere
export { GENERATION_ACCENT }
