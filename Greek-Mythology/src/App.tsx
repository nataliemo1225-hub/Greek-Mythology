import { Routes, Route } from 'react-router'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import Pantheon from '@/pages/Pantheon'
import GodDetail from '@/pages/GodDetail'
import TaleDetail from '@/pages/TaleDetail'
import Heroes from '@/pages/Heroes'
import HeroDetail from '@/pages/HeroDetail'
import Kings from '@/pages/Kings'
import KingDetail from '@/pages/KingDetail'
import Stories from '@/pages/Stories'
import StoryDetail from '@/pages/StoryDetail'
import Tragedies from '@/pages/Tragedies'
import Maps from '@/pages/Maps'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pantheon" element={<Pantheon />} />
        <Route path="pantheon/:id" element={<GodDetail />} />
        <Route path="pantheon/:id/tales/:tale" element={<TaleDetail />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="heroes/:id" element={<HeroDetail />} />
        <Route path="heroes/:id/tales/:tale" element={<TaleDetail />} />
        <Route path="kings" element={<Kings />} />
        <Route path="kings/:id" element={<KingDetail />} />
        <Route path="kings/:id/tales/:tale" element={<TaleDetail />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:id" element={<StoryDetail />} />
        <Route path="tragedies" element={<Tragedies />} />
        <Route path="maps" element={<Maps />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
