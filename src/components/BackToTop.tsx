import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTarget } from '@/components/SmoothScroll'

/** Fixed bottom-right gold-outline button; appears after 600px of scroll. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToTarget(0)}
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-ivory/90 text-gold shadow-warm backdrop-blur transition-all duration-300 hover:bg-gold hover:text-ivory ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
