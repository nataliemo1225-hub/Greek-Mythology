import { Link } from 'react-router'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import KingCard, { KING_ACCENT } from '@/components/KingCard'
import Reveal from '@/components/Reveal'
import Chip from '@/components/Chip'
import { kings } from '@/data'

const GROUP_META: Record<string, { eyebrow: string; title: string; note: string }> = {
  war: {
    eyebrow: 'The Kings of the Great War',
    title: 'Five Thrones Bound to Troy',
    note: 'The Iliad is a war of kings: overlord, wronged husband, old counselor, and the last king of a burning city.',
  },
  cursed: {
    eyebrow: 'The Cursed Thrones',
    title: 'Houses That Devoured Themselves',
    note: 'The raw material of tragedy — dynasties where the crown itself carried the curse.',
  },
  founder: {
    eyebrow: 'Founders & Fabled Kings',
    title: 'City-Builders and Cautionary Tales',
    note: 'Kings who founded cities, judged the dead, and taught the gods’ hardest lessons.',
  },
}

export default function Kings() {
  const spotlight = kings.find((k) => k.id === 'agamemnon') ?? kings[0]
  const groups = (['war', 'cursed', 'founder'] as const).map((g) => ({
    key: g,
    ...GROUP_META[g],
    count: kings.filter((k) => k.group === g).length,
    entries: kings.filter((k) => k.group === g && k.id !== spotlight.id),
  }))

  return (
    <div>
      <PageHero
        eyebrow="Mortal Sovereignty"
        title="The Kings"
        lede="Between the gods above and the heroes below stood the kings — lawgivers and oath-keepers, founders and the cursed, upon whose thrones the fate of cities hung."
        image="/art-kings.jpg"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Kings' }]}
        tall
      />

      {/* Directory: the three orders of kings */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pt-[clamp(40px,6vw,64px)]">
        <Reveal
          stagger={0.08}
          className="grid gap-px overflow-hidden rounded-md hairline bg-gold/25 shadow-warm sm:grid-cols-3"
        >
          {groups.map((group, i) => (
            <a
              key={group.key}
              href={`#order-${group.key}`}
              data-reveal-item
              className="group flex flex-col bg-ivory px-6 py-6 transition-colors hover:bg-parchment"
            >
              <span className="flex items-baseline justify-between">
                <span
                  className="font-display text-[1.6rem] font-semibold leading-none"
                  style={{ color: KING_ACCENT }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {group.count} {group.count === 1 ? 'king' : 'kings'}
                </span>
              </span>
              <span className="mt-4 block font-display text-[1.2rem] font-semibold leading-snug text-ink">
                {group.eyebrow}
              </span>
              <span className="mt-1 block font-serif text-[0.95rem] italic text-gold">
                {group.title}
              </span>
              <span
                className="mt-4 inline-flex items-center gap-1 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 group-hover:translate-y-0.5"
                style={{ color: KING_ACCENT }}
              >
                Enter this order <span aria-hidden>↓</span>
              </span>
            </a>
          ))}
        </Reveal>
      </section>

      {/* Agamemnon spotlight */}
      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        <Reveal>
          <Link
            to={`/kings/${spotlight.id}`}
            className="group grid items-center gap-10 rounded-md border border-gold/60 bg-parchment p-8 shadow-warm-lg min-[960px]:grid-cols-[55fr_45fr] min-[960px]:p-12"
          >
            <div>
              <p className="eyebrow" style={{ color: KING_ACCENT }}>
                First Among Kings
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold text-ink transition-colors group-hover:text-gold">
                {spotlight.name}
              </h2>
              {spotlight.epithet && (
                <p className="mt-1 font-serif text-[1.35rem] italic text-gold">{spotlight.epithet}</p>
              )}
              <p className="mt-5 line-clamp-4 max-w-[56ch] font-serif text-[1.15rem] leading-[1.75] text-ink">
                {spotlight.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip accent={KING_ACCENT}>King of {spotlight.realm}</Chip>
                {spotlight.house && <Chip accent="#5A5548">{spotlight.house}</Chip>}
                <Chip accent="#25505E">{spotlight.famousFor}</Chip>
              </div>
              <span className="mt-7 inline-flex items-center gap-1.5 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-aegean">
                <span className="link-underline">Read his story</span>
                <span aria-hidden>→</span>
              </span>
            </div>
            <div className="relative mx-auto">
              <span
                className="absolute inset-0 rounded-full blur-3xl"
                style={{ backgroundColor: `${KING_ACCENT}40` }}
                aria-hidden
              />
              <img
                src="/portrait-agamemnon.jpg"
                alt="Engraved portrait of Agamemnon"
                className="relative aspect-square w-full max-w-[360px] rounded-sm border object-cover shadow-warm"
                style={{ borderColor: `${KING_ACCENT}80` }}
              />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* The three orders of kings */}
      {groups.map((group) => (
        <section
          key={group.key}
          id={`order-${group.key}`}
          className="mx-auto max-w-[1200px] scroll-mt-24 px-[clamp(20px,5vw,48px)] pb-[clamp(56px,8vw,96px)]"
        >
          <SectionHeader eyebrow={group.eyebrow} title={group.title} accent={KING_ACCENT} />
          <p className="mt-4 max-w-[68ch] font-serif text-[1.1rem] italic leading-relaxed text-ink-soft">
            {group.note}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {group.entries.map((king) => (
              <KingCard key={king.id} king={king} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
