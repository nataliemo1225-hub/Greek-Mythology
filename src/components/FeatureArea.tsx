import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import Reveal from '@/components/Reveal'
import { taleSlug } from '@/lib/utils'
import type { GodFeature } from '@/data'

/** Featured tales of a deity or hero: a directory linking to each tale's own page. */
export default function FeatureArea({
  personId,
  personName,
  features,
  accent,
  basePath,
}: {
  personId: string
  personName: string
  features?: GodFeature[]
  accent: string
  basePath: '/pantheon' | '/heroes' | '/kings'
}) {
  if (!features || features.length === 0) return null

  return (
    <section className="bg-marble/60 py-[clamp(40px,6vw,72px)]">
      <div className="mx-auto max-w-[1200px] px-[clamp(20px,5vw,48px)]">
        <SectionHeader
          eyebrow="On This Page"
          title={`Featured Tales of ${personName}`}
          lede="Long-form stories told of this figure — each opens on its own page."
          accent={accent}
        />
        <Reveal stagger={0.08} className="mx-auto mt-12 grid max-w-[900px] gap-px overflow-hidden rounded-md hairline bg-gold/25 shadow-warm">
          {features.map((feature, i) => (
            <Link
              key={feature.title}
              to={`${basePath}/${personId}/tales/${taleSlug(feature.title)}`}
              data-reveal-item
              className="group flex items-center gap-6 bg-ivory px-6 py-5 text-left transition-colors hover:bg-parchment"
            >
              <span className="font-display text-[1.6rem] font-semibold leading-none text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  {feature.eyebrow}
                </span>
                <span className="mt-1 block font-display text-[1.25rem] font-semibold text-ink">
                  {feature.title}
                </span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
