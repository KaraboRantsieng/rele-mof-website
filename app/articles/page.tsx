import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticlesContent from './ArticlesContent'

export const metadata: Metadata = {
  title: 'Articles | Relebohile Mofokeng Foundation',
  description: 'Latest news, press features, and articles covering the work of the Relebohile Mofokeng Foundation.',
}

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        tag="Press & Media"
        title="Articles"
        subtitle="Stories from the press — covering the Foundation's impact, achievements, and community work."
      />
      <ArticlesContent />
    </>
  )
}
