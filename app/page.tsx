import HeroSection from '@/components/HeroSection'
import StatsBar from '@/components/StatsBar'
import MissionSection from '@/components/MissionSection'
import ProgrammesPreview from '@/components/ProgrammesPreview'
import TournamentsSection from '@/components/TournamentsSection'
import TheIconSection from '@/components/TheIconSection'
import SponsorsStrip from '@/components/SponsorsStrip'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <MissionSection />
      <ProgrammesPreview />
      <TournamentsSection />
      <TheIconSection />
      <SponsorsStrip />
    </>
  )
}
