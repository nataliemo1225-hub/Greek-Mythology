import { Link } from 'react-router'
import { stories, tragicHouses } from '@/data'

const HOUSES = tragicHouses

/** Timeline names that match a king's detail page become links. */
const KING_LINKS: Record<string, string> = {
  Cadmus: '/kings/cadmus',
  Oedipus: '/kings/oedipus',
  Tantalus: '/kings/tantalus',
  Agamemnon: '/kings/agamemnon',
}

export default function Tragedies() {
  return (
    <div className="bg-night text-parchment-on-night">
      {/* Dark hero */}
      <section className="relative flex min-h-[52vh] items-end overflow-hidden">
        <img
          src="/art-atreus.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(28,26,43,0.65), rgba(28,26,43,0.92))',
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-16 pt-32">
          <nav
            className="font-sans text-[0.75rem] tracking-[0.08em]"
            style={{ color: 'rgba(233,223,198,0.7)' }}
            aria-label="Breadcrumb"
          >
            <Link to="/" className="transition-colors hover:text-gold-bright">Home</Link>
            <span className="mx-2 text-gold">/</span>
            <span>Tragedies</span>
          </nav>
          <p className="eyebrow mt-6" style={{ color: '#C67B5F' }}>
            Cursed Bloodlines
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.05] text-parchment-on-night">
            The Great Tragic Families
          </h1>
          <p
            className="mt-4 max-w-[62ch] font-serif text-[1.45rem] italic leading-[1.6]"
            style={{ color: 'rgba(233,223,198,0.85)' }}
          >
            Three royal houses, three hereditary curses — where the sins of the fathers are visited
            upon the children, and the gods watch in silence.
          </p>
        </div>
      </section>

      {/* Prologue strip */}
      <section className="mx-auto max-w-[60ch] px-[clamp(20px,5vw,48px)] py-[clamp(40px,6vw,72px)] text-center">
        <p
          className="font-serif text-[1.25rem] leading-[1.8]"
          style={{ color: 'rgba(233,223,198,0.9)' }}
        >
          Greek tragedy begins where heroism ends. The poets of Athens returned again and again to a
          handful of doomed dynasties — houses marked by an ancestral crime, generation after
          generation paying the debt.
        </p>
        <div className="mt-8 flex justify-center gap-8">
          {HOUSES.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className="font-display text-xl font-semibold text-gold transition-colors hover:text-gold-bright"
            >
              {h.numeral}
            </a>
          ))}
        </div>
      </section>

      {/* House sections */}
      {HOUSES.map((house, hi) => {
        const story = stories.find((s) => s.id === house.id)
        const flip = hi % 2 === 1
        return (
          <section
            key={house.id}
            id={house.id}
            className="mx-auto max-w-[1200px] scroll-mt-24 px-[clamp(20px,5vw,48px)] py-[clamp(40px,6vw,80px)]"
          >
            <div
              className={`grid items-center gap-10 min-[960px]:grid-cols-2 ${
                flip ? 'min-[960px]:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Visual */}
              <div className="relative rounded-sm border border-gold/40 p-2" style={{ backgroundColor: '#242136' }}>
                <img
                  src={house.art}
                  alt={`Artwork evoking the house of ${house.name}`}
                  loading="lazy"
                  className="w-full rounded-sm object-cover"
                  style={{ boxShadow: 'inset 0 0 60px rgba(0,0,0,0.5)' }}
                />
                <span
                  className="pointer-events-none absolute right-5 top-4 font-display text-[6rem] font-bold leading-none"
                  style={{ color: 'rgba(233,223,198,0.1)' }}
                  aria-hidden
                >
                  {house.numeral}
                </span>
              </div>

              {/* Text */}
              <div>
                <p className="eyebrow" style={{ color: '#C67B5F' }}>
                  {house.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-[clamp(1.9rem,3.5vw,2.8rem)] font-semibold text-parchment-on-night">
                  {story?.title ?? house.eyebrow}
                </h2>
                <p className="mt-3 font-serif text-[1.25rem] italic text-gold">{house.curse}</p>
                {story && (
                  <p
                    className="mt-5 line-clamp-4 font-serif text-[1.1rem] leading-[1.8]"
                    style={{ color: 'rgba(233,223,198,0.9)' }}
                  >
                    {story.intro}
                  </p>
                )}

                {/* Doomed generations */}
                <div className="mt-8">
                  <p
                    className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: 'rgba(233,223,198,0.65)' }}
                  >
                    Doomed Generations
                  </p>
                  <ol className="relative mt-4 space-y-4 border-l pl-6" style={{ borderColor: 'rgba(110,43,43,0.9)' }}>
                    {house.timeline.map((node) => (
                      <li key={node.name} className="relative">
                        <span
                          className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold"
                          aria-hidden
                        />
                        {KING_LINKS[node.name] ? (
                          <Link
                            to={KING_LINKS[node.name]}
                            className="block font-display text-[0.95rem] font-semibold text-parchment-on-night underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold-bright"
                            title={`Read the myth of ${node.name}`}
                          >
                            {node.name}
                          </Link>
                        ) : (
                          <span className="block font-display text-[0.95rem] font-semibold text-parchment-on-night">
                            {node.name}
                          </span>
                        )}
                        <span
                          className="block font-sans text-[0.78rem] leading-relaxed"
                          style={{ color: 'rgba(233,223,198,0.7)' }}
                        >
                          {node.fate}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Link
                  to={`/stories/${house.id}`}
                  className="mt-8 inline-block border px-6 py-3 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] transition-colors"
                  style={{ borderColor: '#B4553F', color: '#C67B5F' }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#6E2B2B'
                    e.currentTarget.style.color = '#E9DFC6'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#C67B5F'
                  }}
                >
                  Read the full tragedy →
                </Link>
              </div>
            </div>
          </section>
        )
      })}

      {/* Closing */}
      <section className="mx-auto max-w-[34ch] px-[clamp(20px,5vw,48px)] py-[clamp(56px,8vw,96px)] text-center">
        <img src="/divider-laurel.svg" alt="" className="mx-auto w-48 opacity-80" />
        <p
          className="mt-8 font-serif text-[1.35rem] italic leading-[1.7]"
          style={{ color: 'rgba(233,223,198,0.85)' }}
        >
          From these houses Aeschylus, Sophocles, and Euripides built the tragedies of Athens — and
          Western drama was born.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/pantheon?tab=olympian"
            className="border border-gold px-6 py-3 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Return to the light — The Olympians →
          </Link>
          <Link
            to="/kings"
            className="px-6 py-3 font-sans text-[0.82rem] font-semibold uppercase tracking-[0.14em] underline underline-offset-4 transition-colors hover:text-gold-bright"
            style={{ color: 'rgba(233,223,198,0.75)' }}
          >
            Meet the kings of these houses
          </Link>
        </div>
      </section>
    </div>
  )
}
