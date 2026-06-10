import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ProgrammesContent from './ProgrammesContent'

export const metadata: Metadata = {
  title: 'Programmes | Relebohile Mofokeng Foundation',
  description: 'Explore our three pillars: Education & Culture, CSI & Charity Initiatives, and Sports Development.',
}

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        tag="What We Do"
        title="Our"
        redWord="Programmes"
        subtitle="Three pillars of impact: Education, Community, and Sport — working together to transform lives."
      />
      <ProgrammesContent />
    </>
  )
}
