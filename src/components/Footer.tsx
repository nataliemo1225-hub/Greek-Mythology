import { Link } from 'react-router'

const explore = [
  { to: '/pantheon', label: 'The Pantheon' },
  { to: '/heroes', label: 'Heroes' },
  { to: '/kings', label: 'The Kings' },
  { to: '/stories', label: 'Stories & Epics' },
  { to: '/tragedies', label: 'Tragic Families' },
]
const epics = [
  { to: '/stories/trojan-war', label: 'The Trojan War' },
  { to: '/stories/iliad', label: 'The Iliad' },
  { to: '/stories/odyssey', label: 'The Odyssey' },
]
const reference = [
  { to: '/maps', label: 'Interactive Maps' },
]

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow mb-4 text-gold">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="font-sans text-[0.85rem] text-parchment-on-night/80 transition-colors hover:text-gold-bright"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-night text-parchment-on-night">
      <div
        className="meander-drift h-6 w-full opacity-50"
        style={{ backgroundImage: "url('/meander.svg')", backgroundRepeat: 'repeat-x', backgroundSize: '28px 24px' }}
        aria-hidden
      />
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)] pb-10 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/laurel.svg" alt="" className="h-9 w-9" />
              <span className="font-display text-lg font-bold tracking-[0.18em]">MYTHOS</span>
            </div>
            <p className="mt-4 max-w-[26ch] font-serif text-[0.95rem] italic leading-relaxed text-parchment-on-night/70">
              An open atlas of the Greek mythic world.
            </p>
          </div>
          <FooterCol title="Explore" links={explore} />
          <FooterCol title="The Epics" links={epics} />
          <FooterCol title="Reference" links={reference} />
        </div>

        <p className="mt-14 text-center font-serif text-lg italic text-gold">
          “Sing, O goddess, the anger of Achilles…”
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-parchment-on-night/15 pt-6 font-sans text-[0.75rem] text-parchment-on-night/50 sm:flex-row">
          <span>Built for the love of myth — ΜΥΘΟΣ</span>
          <span>© {new Date().getFullYear()} Mythos Atlas. All myths belong to the ages.</span>
        </div>
      </div>
    </footer>
  )
}
