import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Relebohile Mofokeng Foundation',
  description: 'Get in touch with the Relebohile Mofokeng Foundation for partnerships, donations, media enquiries, or volunteering.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Reach Out"
        title="Contact"
        redWord="Us"
        subtitle="We'd love to hear from you — whether you're a partner, donor, volunteer, or just want to connect."
      />
      <ContactContent />
    </>
  )
}
