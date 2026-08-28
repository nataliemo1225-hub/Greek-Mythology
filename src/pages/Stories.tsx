import { Link } from 'react-router'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import { stories, type Story } from '@/data'

const STORY_ART: Record<string, string> = {
  'trojan-war': '/art-trojan-war.jpg',
  iliad: '/art-iliad.jpg',
  odyssey: '/art-odyssey.jpg',
  'house-of-atreus': '/art-atreus.jpg',
  'house-of-thebes': '/art-thebes.jpg',
  'house-of-cadmus': '/art-cadmus.jpg',
  'golden-fleece': '/art-golden-fleece.jpg',
  titanomachy: '/art-titanomachy.jpg',
  gigantomachy: '/art-gigantomachy.jpg',
  typhon: '/art-typhon.jpg',
  'binding-of-zeus': '/art-revolt.jpg',
  medusa: '/art-medusa.jpg',
}

const CATEGORY_META: Record<Story['category'], { label: string; accent: string }> = {
  war: { label: 'War', accent: '#A44A2A' },
  epic: { label: 'Epic', accent: '#25505E' },
  tragedy: { label: 'Tragedy', accent: '#6E2B2B' },
  origin: { label: 'Origin Myth', accent: '#7A5C1E' },
  myth: { label: 'Myth', accent: '#5F6B3F' },
}

function StoryCard({ story }: { story: Story }) {
  const meta = CATEGORY_META[story.category]
  return (
    <Reveal y={40}>
      <Link
        to={`/stories/${story.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-md hairline bg-parchment shadow-warm transition-all duration-[350ms] hover:-translate-y-1.5 hover:border-gold hover:shadow-warm-lg"
      >
        <div className="relative overflow-hidden">
          <img
            src={STORY_ART[story.id] ?? '/art-trojan-war.jpg'}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
          />
          <span
            className="absolute left-4 top-4 rounded-sm px-2.5 py-1 font-sans text-[0.65rem] font-bold uppercase tracking-[0.16em] text-parchment-on-night"
            style={{ backgroundColor: meta.accent }}
          >
            {meta.label}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-[1.4rem] font-semibold text-ink transition-colors group-hover:text-gold">
            {story.title}
          </h3>
          {story.subtitle && (
            <p className="mt-1 font-serif text-[1.1rem] italic text-gold">{story.subtitle}</p>
          )}
          {(story.author || story.date) && (
            <p className="mt-2 font-sans text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft">
              {[story.author, story.date].filter(Boolean).join(' · ')}
            </p>
          )}
          <p className="mt-4 line-clamp-3 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
            {story.intro}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-aegean">
            <span className="link-underline">Read the tale</span>
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  )
}

const DIVINE_WAR_IDS = ['titanomachy', 'gigantomachy', 'typhon', 'binding-of-zeus']

export default function Stories() {
  const originStories = stories.filter((s) => s.category === 'origin')
  const divineWars = stories.filter((s) => DIVINE_WAR_IDS.includes(s.id))
  const warAndEpics = stories.filter(
    (s) => s.category !== 'tragedy' && s.category !== 'origin' && s.category !== 'myth' && !DIVINE_WAR_IDS.includes(s.id),
  )
  const myths = stories.filter((s) => s.category === 'myth')

  return (
    <div>
      <PageHero
        eyebrow="The Great Tales"
        title="Stories and Epics"
        lede="The three wars that won Olympus, the war at Troy, the wrath of Achilles, and the long homecoming of Odysseus — the tales every Greek knew by heart."
        image="/art-trojan-war.jpg"
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Stories' }]}
        tall
      />

      <section className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] py-[clamp(48px,7vw,88px)]">
        {originStories.length > 0 && (
          <div className="mb-[clamp(56px,8vw,96px)]">
            <SectionHeader
              eyebrow="Before the Heroes"
              title="The Making of Mankind"
              lede="How mortals were shaped from clay, how fire was stolen from heaven, and what it cost the Titan who loved us."
              accent="#7A5C1E"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {originStories.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        )}
        <div className="mb-[clamp(56px,8vw,96px)]">
          <SectionHeader
            eyebrow="The Wars for Olympus"
            title="The Divine Succession"
            lede="Three times the old earth rose against the new order — Titans, Giants, and the monster Typhon — and three times the thunderer's order held."
            accent="#A44A2A"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {divineWars.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </div>
        <SectionHeader
          eyebrow="War & Wanderings"
          title="The Heroic Cycle"
          lede="The pillars of Greek storytelling, from the muster at Aulis to the shores of Ithaca."
          accent="#25505E"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {warAndEpics.map((s) => (
            <StoryCard key={s.id} story={s} />
          ))}
        </div>

        {myths.length > 0 && (
          <div className="mt-[clamp(56px,8vw,96px)]">
            <SectionHeader
              eyebrow="Gods, Monsters & Mortals"
              title="The Great Myths"
              lede="The tales of curses, transformations, and monster-slayings that every Greek child learned — where gods and mortals meet, and neither comes away unchanged."
              accent="#5F6B3F"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {myths.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 rounded-md hairline bg-marble/60 p-8 text-center">
          <p className="font-serif text-[1.25rem] italic text-ink">
            The three cursed houses — Atreus, Thebes, and Cadmus — have a stage of their own.
          </p>
          <Link
            to="/tragedies"
            className="mt-5 inline-block border border-blood px-6 py-3 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-blood transition-colors hover:bg-blood hover:text-parchment-on-night"
          >
            Enter the Theater of Tragedy →
          </Link>
        </div>
      </section>
    </div>
  )
}
