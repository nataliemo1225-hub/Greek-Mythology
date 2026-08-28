import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { primordials, titans, titanBorn, olympians, otherDeities, heroes, kings, stories } from '@/data'

interface NavChild {
  to: string
  title: string
  meta?: string
  /** Third level — e.g. every god under a generation of the pantheon. */
  children?: NavChild[]
}

interface NavItem {
  to: string
  label: string
  header?: string
  children?: NavChild[]
}

const taleStories = stories.filter((s) => s.category !== 'tragedy')
const tragedyStories = stories.filter((s) => s.category === 'tragedy')

const KING_GROUP_META: { group: 'war' | 'cursed' | 'founder'; title: string }[] = [
  { group: 'war', title: 'Kings of the Great War' },
  { group: 'cursed', title: 'The Cursed Thrones' },
  { group: 'founder', title: 'Founders & Fabled Kings' },
]

const CATEGORY_LABEL: Record<string, string> = {
  war: 'War',
  epic: 'Epic',
  tragedy: 'Tragedy',
  origin: 'Origin Myth',
}

const LINKS: NavItem[] = [
  {
    to: '/pantheon',
    label: 'Pantheon',
    header: 'Three Generations of Gods',
    children: [
      {
        to: '/pantheon?tab=primordial',
        title: 'Primordial Gods',
        meta: `${primordials.length} first powers`,
        children: primordials.map((g) => ({ to: `/pantheon/${g.id}`, title: g.name })),
      },
      {
        to: '/pantheon?tab=titan',
        title: 'The Twelve Titans',
        meta: `${titans.length} titans · ${titanBorn.length} titan-born`,
        children: [...titans, ...titanBorn].map((g) => ({
          to: `/pantheon/${g.id}`,
          title: g.name,
        })),
      },
      {
        to: '/pantheon?tab=olympian',
        title: 'The Olympians',
        meta: `${olympians.length} olympians · ${otherDeities.length} more`,
        children: [...olympians, ...otherDeities].map((g) => ({
          to: `/pantheon/${g.id}`,
          title: g.name,
        })),
      },
    ],
  },
  {
    to: '/heroes',
    label: 'Heroes',
    header: `${heroes.length} Heroes`,
    children: heroes.map((h) => ({
      to: `/heroes/${h.id}`,
      title: h.name,
      meta: h.epithet,
    })),
  },
  {
    to: '/kings',
    label: 'Kings',
    header: `${kings.length} Mortal Sovereigns`,
    children: KING_GROUP_META.map(({ group, title }) => {
      const members = kings.filter((k) => k.group === group)
      return {
        to: '/kings',
        title,
        meta: `${members.length} ${members.length === 1 ? 'king' : 'kings'}`,
        children: members.map((k) => ({
          to: k.heroId ? `/heroes/${k.heroId}` : `/kings/${k.id}`,
          title: k.name,
        })),
      }
    }),
  },
  {
    to: '/stories',
    label: 'Stories',
    header: `${taleStories.length} Tales`,
    children: taleStories.map((s) => ({
      to: `/stories/${s.id}`,
      title: s.title,
      meta: CATEGORY_LABEL[s.category] ?? 'Tale',
    })),
  },
  {
    to: '/tragedies',
    label: 'Tragedies',
    header: `${tragedyStories.length} Cursed Houses`,
    children: tragedyStories.map((s) => ({
      to: `/stories/${s.id}`,
      title: s.title,
    })),
  },
  {
    to: '/maps',
    label: 'Maps',
    header: 'Three Maps',
    children: [
      { to: '/maps?map=greece', title: 'The Aegean World', meta: 'Gods, heroes & cities' },
      { to: '/maps?map=trojan', title: 'The Trojan War Theater', meta: 'The siege of Troy' },
      { to: '/maps?map=odyssey', title: "Odysseus's Voyage", meta: 'Ten years of wandering' },
    ],
  },
]

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Mythos home">
      <img src="/laurel.svg" alt="" className="h-10 w-10" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-[0.18em] text-ink">
          MYTHOS
        </span>
        <span className="mt-1 hidden font-sans text-[0.6rem] font-medium uppercase tracking-[0.3em] text-gold sm:block">
          Atlas of Greek Mythology
        </span>
      </span>
    </Link>
  )
}

/** Desktop top-level link with an opaque hover dropdown of sub-items. */
function DesktopNavItem({ item }: { item: NavItem }) {
  const hasGrandchildren = item.children?.some((c) => c.children) ?? false
  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `relative font-sans text-[0.85rem] font-medium transition-colors duration-200 ${
            isActive ? 'text-gold' : 'text-ink-soft hover:text-ink'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="nav-diamond"
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.5rem] text-gold"
                aria-hidden
              >
                ◆
              </motion.span>
            )}
            {item.label}
          </>
        )}
      </NavLink>
    )
  }

  return (
    <div className="group relative">
      <NavLink
        to={item.to}
        // Clicking the parent navigates away; drop focus so its dropdown
        // doesn't linger via focus-within while hovering the next item.
        onClick={() => {
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
        }}
        className={({ isActive }) =>
          `relative flex items-center gap-1 font-sans text-[0.85rem] font-medium transition-colors duration-200 ${
            isActive ? 'text-gold' : 'text-ink-soft hover:text-ink'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="nav-diamond"
                className="absolute -top-3 left-1/2 -translate-x-1/2 text-[0.5rem] text-gold"
                aria-hidden
              >
                ◆
              </motion.span>
            )}
            {item.label}
            <ChevronDown
              size={13}
              strokeWidth={2.5}
              className="mt-px opacity-60 transition-transform duration-200 group-hover:rotate-180"
              aria-hidden
            />
          </>
        )}
      </NavLink>

      {/* Opaque dropdown — solid background so page content never bleeds through.
          Menus with a third level (Pantheon) open wider, right-aligned, and lay
          the names out in columns so the whole list fits without scrolling. */}
      <div
        className={`invisible absolute top-full z-50 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
          hasGrandchildren ? 'left-1/2 w-[30rem] -translate-x-1/2' : 'left-1/2 w-72 -translate-x-1/2'
        }`}
        // Clicking any item navigates away; drop focus so the menu closes
        // instead of lingering via focus-within until the next click elsewhere.
        onClickCapture={() => {
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur()
          }
        }}
      >
        <div className="overflow-hidden rounded-md border border-gold/50 bg-ivory shadow-warm-lg">
          <div className="border-b border-gold/30 bg-marble/70 px-4 py-2.5">
            <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">
              {item.header}
            </span>
          </div>
          {/* data-lenis-prevent: let this menu scroll itself instead of the page */}
          <ul className="max-h-[72vh] overflow-y-auto py-1.5" data-lenis-prevent>
            {item.children.map((c) => (
              <li key={c.to} className="border-b border-gold/15 last:border-b-0">
                <Link
                  to={c.to}
                  className="flex items-baseline justify-between gap-3 px-4 py-2 transition-colors hover:bg-gold/10"
                >
                  <span className="font-display text-[0.92rem] font-semibold text-ink">
                    {c.title}
                  </span>
                  {c.meta && (
                    <span className="shrink-0 text-right font-sans text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
                      {c.meta}
                    </span>
                  )}
                </Link>
                {c.children && (
                  <div className="grid grid-cols-3 gap-x-3 gap-y-1 px-4 pb-3 pt-1">
                    {c.children.map((g) => (
                      <Link
                        key={g.to}
                        to={g.to}
                        className="font-sans text-[0.72rem] font-medium leading-relaxed text-ink-soft transition-colors hover:text-gold"
                      >
                        {g.title}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="border-t border-gold/25">
              <Link
                to={item.to}
                className="block px-4 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-aegean transition-colors hover:bg-gold/10"
              >
                View all {item.label} →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [expandedChild, setExpandedChild] = useState<string | null>(null)
  const lastY = useRef(0)
  const location = useLocation()

  // Close the drawer on navigation
  useEffect(() => {
    setOpen(false)
    setExpanded(null)
    setExpandedChild(null)
  }, [location.pathname, location.search])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 160 && y > lastY.current)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: hidden && !open ? -72 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`sticky top-0 z-50 h-[72px] border-b bg-ivory/85 backdrop-blur-[12px] transition-colors duration-300 ${
        scrolled ? 'border-gold/40' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-[clamp(20px,5vw,48px)]">
        <Wordmark />

        {/* Desktop links with dropdown submenus */}
        <nav className="hidden items-center gap-7 min-[861px]:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <DesktopNavItem key={l.to} item={l} />
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-ink min-[861px]:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </motion.header>

    {/* Mobile full-screen drawer — rendered outside the transformed header so
        `fixed` positions against the viewport and the solid background covers
        the whole drawer */}
    <AnimatePresence>
      {open && (
        <motion.nav
          key="drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-[72px] z-[60] flex flex-col overflow-y-auto border-t border-gold/40 bg-ivory px-8 pb-12 pt-6 shadow-warm-lg min-[861px]:hidden"
          aria-label="Mobile"
          data-lenis-prevent
        >
          {LINKS.map((l, i) => (
            <motion.div
              key={l.to}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.35, ease: 'easeOut' }}
            >
              {l.children ? (
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        `block py-4 font-display text-2xl font-semibold tracking-[0.05em] ${
                          isActive ? 'text-gold' : 'text-ink'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                    <button
                      type="button"
                      aria-label={`Expand ${l.label} submenu`}
                      aria-expanded={expanded === l.to}
                      onClick={() => setExpanded((v) => (v === l.to ? null : l.to))}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold"
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          expanded === l.to ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <AnimatePresence initial={false}>
                    {expanded === l.to && (
                      <motion.ul
                        key="submenu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden rounded-sm border border-gold/30 bg-marble/60"
                      >
                        <li className="border-b border-gold/25 px-4 py-2">
                          <span className="font-sans text-[0.62rem] font-bold uppercase tracking-[0.22em] text-gold">
                            {l.header}
                          </span>
                        </li>
                        {l.children.map((c) => (
                          <li key={c.title} className="border-b border-gold/15 last:border-b-0">
                            <div className="flex items-center justify-between gap-2">
                              <Link
                                to={c.to}
                                className="flex flex-1 items-baseline justify-between gap-3 px-4 py-2.5"
                              >
                                <span className="font-display text-[1.05rem] font-semibold text-ink">
                                  {c.title}
                                </span>
                                {c.meta && (
                                  <span className="shrink-0 text-right font-sans text-[0.62rem] uppercase tracking-[0.08em] text-ink-soft">
                                    {c.meta}
                                  </span>
                                )}
                              </Link>
                              {c.children && (
                                <button
                                  type="button"
                                  aria-label={`Expand ${c.title} list`}
                                  aria-expanded={expandedChild === c.title}
                                  onClick={() =>
                                    setExpandedChild((v) => (v === c.title ? null : c.title))
                                  }
                                  className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold"
                                >
                                  <ChevronDown
                                    size={15}
                                    className={`transition-transform duration-200 ${
                                      expandedChild === c.title ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                              )}
                            </div>
                            {c.children && expandedChild === c.title && (
                              <div className="flex flex-wrap gap-x-1 gap-y-1 px-4 pb-3">
                                {c.children.map((g) => (
                                  <Link
                                    key={g.to}
                                    to={g.to}
                                    className="rounded-sm border border-gold/30 bg-ivory px-2.5 py-1 font-sans text-[0.72rem] font-medium text-ink-soft transition-colors hover:border-gold hover:text-gold"
                                  >
                                    {g.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block py-4 font-display text-2xl font-semibold tracking-[0.05em] ${
                      isActive ? 'text-gold' : 'text-ink'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )}
              <img
                src="/meander.svg"
                alt=""
                className="h-4 w-full opacity-40 [mask-image:linear-gradient(90deg,black,transparent)]"
                style={{ objectFit: 'cover', objectPosition: 'left' }}
              />
            </motion.div>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
    </>
  )
}
