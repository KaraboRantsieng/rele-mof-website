import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About | Relebohile Mofokeng Foundation',
  description:
    'Learn about the Relebohile Mofokeng Foundation — who we are, our aims and objectives, mission, and organisational structure.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Who We Are"
        title="About The"
        redWord="Foundation"
        subtitle="Built on purpose, driven by impact. The story behind the Relebohile Mofokeng Foundation."
      />
      <AboutContent />
    </>
  )
}
