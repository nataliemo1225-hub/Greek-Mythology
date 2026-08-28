import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { ArrowLeft } from 'lucide-react'

/**
 * Fixed bottom-left "Back" pill — present on every page.
 * Keeps an in-app history stack (this component lives in Layout, so it
 * persists across route changes) so going back never leaves the site;
 * with no in-app history it falls back to Home.
 */
export default function BackButton() {
  const location = useLocation()
  const navigate = useNavigate()
  const stack = useRef<string[]>([])
  const skipPush = useRef(false)

  const key = location.pathname + location.search

  useEffect(() => {
    if (skipPush.current) {
      skipPush.current = false
      return
    }
    if (stack.current[stack.current.length - 1] !== key) {
      stack.current.push(key)
    }
  }, [key])

  const goBack = () => {
    if (stack.current.length > 1) {
      stack.current.pop()
      skipPush.current = true
      navigate(stack.current[stack.current.length - 1])
    } else {
      navigate('/')
    }
  }

  return (
    <button
      type="button"
      aria-label="Back to previous page"
      onClick={goBack}
      className="fixed bottom-6 left-6 z-40 flex h-11 items-center gap-2 rounded-full border border-gold bg-ivory/90 pl-3.5 pr-5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold shadow-warm backdrop-blur transition-colors duration-300 hover:bg-gold hover:text-ivory"
    >
      <ArrowLeft size={16} aria-hidden />
      Back
    </button>
  )
}
