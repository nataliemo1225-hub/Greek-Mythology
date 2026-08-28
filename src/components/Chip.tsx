import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Pill tag: Inter 0.7rem, hairline border in the given accent color,
 * transparent bg; hover fills the accent at 10%.
 */
export default function Chip({
  children,
  accent = '#68703C',
  className,
}: {
  children: ReactNode
  accent?: string
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 font-sans text-[0.7rem] font-medium uppercase tracking-[0.08em] transition-colors',
        className,
      )}
      style={{ borderColor: accent, color: accent }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = `${accent}1A`)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      {children}
    </span>
  )
}
