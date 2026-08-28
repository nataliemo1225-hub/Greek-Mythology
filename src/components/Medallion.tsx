import { cn } from '@/lib/utils'

/**
 * Avatar fallback for figures without portraits: circle with a thin double
 * gold ring, Cinzel initial centered, tiny laurel sprigs on the bottom arc,
 * radial parchment → marble background.
 */
export default function Medallion({
  name,
  size = 80,
  className,
}: {
  name: string
  size?: number
  className?: string
}) {
  const initial = name.charAt(0).toUpperCase()
  return (
    <div
      className={cn('relative shrink-0 rounded-full', className)}
      style={{
        width: size,
        height: size,
        background: 'radial-gradient(circle at 50% 38%, #EFE5CE 0%, #E4DAC4 78%)',
        boxShadow: `inset 0 0 0 1.5px #A87C2A, inset 0 0 0 4px #EFE5CE, inset 0 0 0 5.5px rgba(168,124,42,0.55)`,
      }}
      role="img"
      aria-label={name}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-display font-bold text-gold"
        style={{ fontSize: size * 0.42, paddingBottom: size * 0.08 }}
      >
        {initial}
      </span>
      {/* laurel sprigs on the bottom arc */}
      <svg
        className="absolute bottom-[6%] left-1/2 -translate-x-1/2"
        width={size * 0.5}
        height={size * 0.22}
        viewBox="0 0 40 16"
        fill="none"
        aria-hidden
      >
        <path d="M20 15 Q10 13 4 5 M20 15 Q30 13 36 5" stroke="#A87C2A" strokeWidth="1.4" strokeLinecap="round" />
        {[8, 13].map((y, i) => (
          <g key={i}>
            <ellipse cx={9 + i * 3.4} cy={y - 4} rx="3.2" ry="1.3" transform={`rotate(${-35 + i * 12} ${9 + i * 3.4} ${y - 4})`} fill="#A87C2A" fillOpacity="0.55" />
            <ellipse cx={31 - i * 3.4} cy={y - 4} rx="3.2" ry="1.3" transform={`rotate(${35 - i * 12} ${31 - i * 3.4} ${y - 4})`} fill="#A87C2A" fillOpacity="0.55" />
          </g>
        ))}
      </svg>
    </div>
  )
}
