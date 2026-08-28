import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import BackButton from '@/components/BackButton'
import SmoothScroll, { scrollTopImmediate } from '@/components/SmoothScroll'
import { ScrollTrigger } from '@/lib/gsap'

/**
 * App shell: sticky Navbar (in normal flow — no page offset needed),
 * routed page slot, Footer, BackToTop. Uses the nested-route (<Outlet/>) pattern.
 */
export default function Layout() {
  const location = useLocation()

  // Reset scroll position and refresh ScrollTrigger on route change
  useEffect(() => {
    scrollTopImmediate()
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Navbar />
        <main key={location.pathname} className="page-enter flex-1">
          <Outlet />
        </main>
        <Footer />
        <BackButton />
        <BackToTop />
      </div>
    </SmoothScroll>
  )
}
