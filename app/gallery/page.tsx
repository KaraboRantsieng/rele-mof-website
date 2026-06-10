import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import GalleryContent from './GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery | Relebohile Mofokeng Foundation',
  description: 'Photos and videos from the 2025 Soccer Tournament (Sharpeville) and Foundation Gala Dinner 2025 (Riviera On The Vaal).',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        tag="Memories"
        title="Our"
        redWord="Gallery"
        subtitle="Relive the moments — Soccer Tournament 2025 and Gala Dinner 2025."
      />
      <GalleryContent />
    </>
  )
}
