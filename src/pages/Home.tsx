import { useState } from 'react'
import HeroSection from '@/components/home/HeroSection'
import SearchSection from '@/components/home/SearchSection'
import PrologueSection from '@/components/home/PrologueSection'
import GatewaysSection from '@/components/home/GatewaysSection'
import ClosingQuoteSection from '@/components/home/ClosingQuoteSection'
import MeanderDivider from '@/components/MeanderDivider'

export default function Home() {
  // While a search query is active, the modules below the search section are
  // hidden so scrolling stops at the end of the results.
  const [searching, setSearching] = useState(false)
  return (
    <>
      <HeroSection />
      <SearchSection onQueryChange={(q) => setSearching(q.trim().length > 0)} />
      {!searching && (
        <>
          <PrologueSection />
          <GatewaysSection />
          <MeanderDivider />
          <ClosingQuoteSection />
        </>
      )}
    </>
  )
}
