import { cn } from '@/lib/utils'

/**
 * Horizontal Greek-key (meander) band, 24px tall, gold at 50% opacity,
 * with a slow 60s drift. Used between major page sections.
 */
export default function MeanderDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('meander-drift h-6 w-full opacity-50', className)}
      style={{
        backgroundImage: "url('/meander.svg')",
        backgroundRepeat: 'repeat-x',
        backgroundSize: '28px 24px',
      }}
    />
  )
}
