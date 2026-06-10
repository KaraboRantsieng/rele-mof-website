'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Star, Shield, Users, BookOpen, Check } from 'lucide-react'

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const WA_SPONSOR = 'https://wa.me/27661349395?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20corporate%20sponsorship%20with%20the%20Relebohile%20Mofokeng%20Foundation.'

const sponsorTiers = [
  {
    icon: Shield,
    name: 'Platinum',
    color: 'bg-rmf-red',
    textColor: 'text-white',
    benefits: [
      'Premier logo placement on all materials',
      'Named presenting sponsor of key events',
      'VIP table at Gala Dinner (10 seats)',
      'Social media brand integration',
      'Quarterly impact reports',
      'Press release co-branding',
    ],
  },
  {
    icon: Star,
    name: 'Gold',
    color: 'bg-rmf-black',
    textColor: 'text-white',
    benefits: [
      'Logo on event materials and website',
      'VIP table at Gala Dinner (6 seats)',
      'Social media brand mentions',
      'Quarterly impact reports',
      'Brand visibility at tournaments',
    ],
  },
  {
    icon: Heart,
    name: 'Silver',
    color: 'bg-white',
    textColor: 'text-rmf-black',
    benefits: [
      'Logo on website and select materials',
      'Gala Dinner tickets (4 seats)',
      'Social media acknowledgement',
      'Annual impact report',
    ],
  },
]

export default function GetInvolvedContent() {
  return (
    <>
      {/* Donate */}
      <section className="relative bg-rmf-red py-24 lg:py-36 overflow-hidden">
        {/* Decorative ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-bebas text-white/[0.05] leading-none whitespace-nowrap" style={{ fontSize: 'clamp(8rem, 28vw, 36rem)' }}>
            GIVE
          </span>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="font-barlow font-semibold uppercase tracking-[5px] text-white/70 text-xs mb-6">Make A Difference</p>
            {/* Heading with flanking lines */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="hidden sm:block h-[2px] bg-white/30 flex-1 max-w-[120px]" />
              <h2
                className="font-bebas text-white leading-none"
                style={{ fontSize: 'clamp(5rem, 15vw, 14rem)' }}
              >
                Donate
              </h2>
              <div className="hidden sm:block h-[2px] bg-white/30 flex-1 max-w-[120px]" />
            </div>
            <p className="font-inter text-white/85 text-base lg:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Your donation directly funds bursaries for deserving students, sporting equipment
              for grassroots teams, tournament infrastructure, and community welfare programmes.
            </p>
            <p className="font-inter text-white/70 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
              No donation is too small — every rand changes a life. Message us on WhatsApp to
              find out how you can support the Foundation.
            </p>
            <a
              href="https://wa.me/27661349395?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20how%20I%20can%20donate%20to%20the%20Relebohile%20Mofokeng%20Foundation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-barlow font-semibold uppercase tracking-[3px] text-sm bg-white text-rmf-black px-12 py-5 hover:bg-[#0a0a0a] hover:text-white transition-all duration-300 cursor-pointer shadow-xl"
              aria-label="Donate via WhatsApp"
            >
              <WhatsAppIcon size={20} />
              Donate via WhatsApp
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Corporate Sponsorship */}
      <section id="sponsorship" className="bg-rmf-black py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Partner With Us</p>
              <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,5rem)] leading-none mb-4">Corporate Sponsorship</h2>
              <p className="font-inter text-rmf-muted text-base max-w-2xl mx-auto leading-relaxed">
                Align your brand with purpose. Our corporate sponsorship packages offer meaningful
                brand visibility, community impact, and association with one of South Africa&apos;s
                most compelling sports personalities.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {sponsorTiers.map((tier, i) => {
                const Icon = tier.icon
                return (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`${tier.color} ${tier.textColor} border-t-[3px] border-rmf-red p-8`}
                  >
                    <Icon size={32} className="text-rmf-red mb-4" aria-hidden="true" />
                    <h3 className="font-bebas text-4xl mb-6">{tier.name}</h3>
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Check size={14} className="text-rmf-red mt-0.5 shrink-0" aria-hidden="true" />
                          <span className={`font-inter text-sm ${tier.textColor === 'text-white' ? 'text-white/80' : 'text-gray-600'}`}>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={WA_SPONSOR}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-barlow font-semibold uppercase tracking-[2px] text-xs block text-center py-3 px-6 border transition-colors duration-200 cursor-pointer ${
                        tier.textColor === 'text-white'
                          ? 'border-white text-white hover:bg-white hover:text-rmf-black'
                          : 'border-rmf-black text-rmf-black hover:bg-rmf-black hover:text-white'
                      }`}
                    >
                      Inquire Now
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Book */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Book mockup */}
              <div className="relative">
                <div className="bg-rmf-black border-l-[3px] border-rmf-red aspect-[3/4] flex flex-col items-center justify-center p-12 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-5 grid-lines"
                    aria-hidden="true"
                  />
                  <p className="font-barlow font-semibold uppercase tracking-[3px] text-rmf-red text-xs mb-6 z-10">
                    By Relebohile Mofokeng
                  </p>
                  <h3 className="font-bebas text-white text-5xl text-center leading-tight z-10">
                    I Better Be<br />The Better<br />Me
                  </h3>
                  <div className="w-12 h-1 bg-rmf-red my-6 z-10" />
                  <p className="font-inter text-rmf-muted text-sm text-center z-10">
                    A motivational guide to unlocking your potential
                  </p>
                  {/* TODO: Replace with real book cover image */}
                </div>
              </div>
              <div>
                <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">The Book</p>
                <h2 className="font-bebas text-rmf-black text-[clamp(2rem,5vw,4.5rem)] leading-none mb-6">
                  &ldquo;I Better Be<br />The Better Me&rdquo;
                </h2>
                <div className="w-16 h-1 bg-rmf-red mb-8" />
                <p className="font-inter text-gray-700 text-base leading-relaxed mb-6">
                  Relebohile Mofokeng&apos;s personal journey from Sharpeville to the Premier Soccer League
                  is a story of resilience, sacrifice, and relentless self-belief. This motivational
                  book shares the lessons, mindsets, and principles that shaped his path.
                </p>
                <p className="font-inter text-gray-600 text-base leading-relaxed mb-10">
                  All proceeds from book sales support the Foundation&apos;s education and bursary programmes.
                  Buy a book, fund a future.
                </p>
                {/* TODO: Connect book purchase link */}
                <button
                  className="font-barlow font-semibold uppercase tracking-[2px] text-sm bg-rmf-black text-white px-8 py-3 hover:bg-rmf-red transition-colors duration-200 cursor-pointer"
                >
                  Purchase the Book
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Volunteer */}
      <section className="bg-rmf-grey py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Give Your Time</p>
                <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-6">
                  Volunteer With Us
                </h2>
                <div className="w-16 h-1 bg-rmf-red mb-8" />
                <p className="font-inter text-gray-700 text-base leading-relaxed mb-6">
                  Skills, time, and passion are equally valuable. Whether you&apos;re a football coach,
                  teacher, healthcare professional, event organiser, or simply someone who cares —
                  we have a place for you.
                </p>
                <ul className="space-y-3 mb-10">
                  {[
                    'Tournament officials and match coordinators',
                    'Tutors and academic mentors',
                    'Event setup and logistics volunteers',
                    'Photography and media volunteers',
                    'Administrative and operations support',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Users size={14} className="text-rmf-red mt-1 shrink-0" aria-hidden="true" />
                      <span className="font-inter text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="font-barlow font-semibold uppercase tracking-[2px] text-sm bg-rmf-black text-white px-8 py-3 hover:bg-rmf-red transition-colors duration-200 cursor-pointer inline-block"
                >
                  Join As Volunteer
                </a>
              </div>
              <div className="bg-rmf-black border-l-[3px] border-rmf-red p-10">
                <BookOpen size={32} className="text-rmf-red mb-6" aria-hidden="true" />
                <h3 className="font-bebas text-white text-3xl mb-4">Volunteer Commitment</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Minimum', value: '4 hrs / month' },
                    { label: 'Events', value: 'Seasonal' },
                    { label: 'Training', value: 'Provided' },
                    { label: 'Certificate', value: 'On completion' },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between border-b border-white/10 pb-3">
                      <span className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-muted text-xs">{item.label}</span>
                      <span className="font-bebas text-white text-xl">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
