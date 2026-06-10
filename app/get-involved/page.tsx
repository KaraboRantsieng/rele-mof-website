import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import GetInvolvedContent from './GetInvolvedContent'

export const metadata: Metadata = {
  title: 'Get Involved | Relebohile Mofokeng Foundation',
  description: 'Donate, become a corporate sponsor, volunteer, or purchase the "I Better Be The Better Me" book.',
}

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        tag="Join The Movement"
        title="Get"
        redWord="Involved"
        subtitle="Every contribution — big or small — moves the needle. Find your way to make an impact."
      />
      <GetInvolvedContent />
    </>
  )
}
