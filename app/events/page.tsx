import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import EventsContent from './EventsContent'

export const metadata: Metadata = {
  title: 'Events | Relebohile Mofokeng Foundation',
  description: 'Full recaps of the 2025 Soccer Tournament, Foundation Gala Dinner, and upcoming 2026 events.',
}

export default function EventsPage() {
  return (
    <>
      <PageHero
        tag="Our Events"
        title="Events &"
        redWord="Tournaments"
        subtitle="From grassroots soccer to black-tie galas — relive the moments that define our Foundation."
      />
      <EventsContent />
    </>
  )
}
