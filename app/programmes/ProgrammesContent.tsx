'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Heart, Dumbbell, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  { label: 'Education\n& Culture', height: 100, delay: 0.1 },
  { label: 'CSI\n& Charity', height: 130, delay: 0.22 },
  { label: 'Sports\nDevelopment', height: 160, delay: 0.34 },
]

function Pillar3D({ label, height, delay }: { label: string; height: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const tiltRef = useRef<HTMLDivElement>(null)

  const onEnter = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'translateY(-10px) scale(1.06)'
      tiltRef.current.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.25), 0 16px 40px rgba(204,0,0,0.3)'
      tiltRef.current.style.transition = 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
    }
  }
  const onLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'translateY(0) scale(1)'
      tiltRef.current.style.boxShadow = '4px 4px 0 rgba(0,0,0,0.2), 0 8px 24px rgba(204,0,0,0.15)'
      tiltRef.current.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    }
  }

  return (
    <div ref={ref} className="flex flex-col items-center gap-3" style={{ perspective: '400px' }}>
      <motion.div
        ref={tiltRef as React.RefObject<HTMLDivElement>}
        className="w-14 lg:w-16 bg-rmf-red relative cursor-default"
        initial={{ scaleY: 0, rotateX: -25, opacity: 0 }}
        animate={isInView ? { scaleY: 1, rotateX: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height,
          transformOrigin: 'bottom',
          transformStyle: 'preserve-3d',
          boxShadow: '4px 4px 0 rgba(0,0,0,0.2), 0 8px 24px rgba(204,0,0,0.15)',
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {/* Right face for 3D depth */}
        <div
          className="absolute top-0 right-[-8px] bottom-0 w-2"
          style={{ background: 'rgba(0,0,0,0.28)', transform: 'skewY(0deg)' }}
          aria-hidden="true"
        />
      </motion.div>
      <motion.p
        className="font-barlow font-semibold uppercase tracking-[2px] text-rmf-black text-[10px] text-center whitespace-pre-line leading-tight max-w-[70px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
      >
        {label}
      </motion.p>
    </div>
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

export default function ProgrammesContent() {
  return (
    <>
      {/* Intro */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-inter text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14">
              The Foundation operates across three integrated programme pillars — each designed to
              address a critical dimension of youth development in South African communities.
              Together, they form a holistic ecosystem of opportunity.
            </p>
            {/* Feature 5 — 3D rising pillar columns */}
            <div className="flex justify-center items-end gap-8 lg:gap-14" aria-hidden="true">
              {pillars.map((p) => (
                <Pillar3D key={p.label} {...p} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillar 1 — Education */}
      <section id="education" className="bg-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-2">Pillar 01</p>
                <div className="flex items-center gap-4 mb-6">
                  <BookOpen size={40} className="text-rmf-red shrink-0" aria-hidden="true" />
                  <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none">
                    Education & Culture
                  </h2>
                </div>
                <div className="w-16 h-1 bg-rmf-red mb-8" />
                <p className="font-inter text-gray-700 text-base leading-relaxed mb-6">
                  We believe education is the great equaliser. Our education programme provides
                  holistic academic support that goes beyond the classroom — nurturing young minds
                  while celebrating the rich cultural heritage that defines South African identity.
                </p>
                <ul className="space-y-3">
                  {[
                    'Bursary and scholarship support for deserving students',
                    'Academic mentorship and tutoring programmes',
                    'Cultural heritage workshops and events',
                    'Life skills and leadership development',
                    'School holiday programmes and career guidance',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-rmf-red mt-1 shrink-0" aria-hidden="true" />
                      <span className="font-inter text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rmf-grey border-l-[3px] border-rmf-red p-10">
                <h3 className="font-bebas text-rmf-black text-3xl mb-4">Our Approach</h3>
                <p className="font-inter text-gray-700 text-sm leading-relaxed mb-6">
                  We partner with schools, universities, and community organisations to create
                  seamless support pathways. Students receive not just financial assistance, but
                  mentorship, networks, and practical skills that prepare them for the real world.
                </p>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  Cultural heritage is woven into all our programmes — because knowing where you
                  come from gives you the confidence to go anywhere.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillar 2 — CSI */}
      <section id="csi" className="bg-rmf-black py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-white/5 border-l-[3px] border-rmf-red p-10">
                <h3 className="font-bebas text-white text-3xl mb-4">Community First</h3>
                <p className="font-inter text-rmf-muted text-sm leading-relaxed mb-6">
                  Our CSI initiatives are designed to address both immediate needs and long-term
                  structural challenges. We work with corporate partners to channel meaningful
                  investment into the communities that need it most.
                </p>
                <p className="font-inter text-rmf-muted text-sm leading-relaxed">
                  From food drives and winter campaigns to infrastructure support and community
                  clean-up initiatives, we show up where it matters most.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-2">Pillar 02</p>
                <div className="flex items-center gap-4 mb-6">
                  <Heart size={40} className="text-rmf-red shrink-0" aria-hidden="true" />
                  <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,5rem)] leading-none">
                    CSI & Charity
                  </h2>
                </div>
                <div className="w-16 h-1 bg-rmf-red mb-8" />
                <p className="font-inter text-rmf-muted text-base leading-relaxed mb-6">
                  Corporate Social Investment and charity initiatives form the community heartbeat
                  of the Foundation. We mobilise resources to address immediate needs while
                  building resilient support structures that outlast any single intervention.
                </p>
                <ul className="space-y-3">
                  {[
                    'Food and essential goods drives',
                    'Winter warmth campaigns',
                    'Community infrastructure support',
                    'Healthcare awareness and access programmes',
                    'Corporate volunteering initiatives',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-rmf-red mt-1 shrink-0" aria-hidden="true" />
                      <span className="font-inter text-rmf-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillar 3 — Sports */}
      <section id="sports" className="bg-rmf-grey py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-2">Pillar 03</p>
                <div className="flex items-center gap-4 mb-6">
                  <Dumbbell size={40} className="text-rmf-red shrink-0" aria-hidden="true" />
                  <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none">
                    Sports Development
                  </h2>
                </div>
                <div className="w-16 h-1 bg-rmf-red mb-8" />
                <p className="font-inter text-gray-700 text-base leading-relaxed mb-6">
                  Sport is our DNA. From our inaugural 100-team soccer tournament in Sharpeville to
                  elite development camps with professional coaches, we create every rung on the
                  ladder from community pitch to PSL stadium.
                </p>
                <ul className="space-y-3">
                  {[
                    'Annual soccer tournaments across age groups',
                    'Elite training camps with professional coaches',
                    'Talent identification and scouting pathway',
                    'Sports nutrition and injury prevention education',
                    'Women\'s and girls\' football development',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="text-rmf-red mt-1 shrink-0" aria-hidden="true" />
                      <span className="font-inter text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-rmf-black border-l-[3px] border-rmf-red p-10">
                <h3 className="font-bebas text-white text-3xl mb-4">2025 Tournament Results</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Teams Participated', value: '100+' },
                    { label: 'Spectators', value: '1,000+' },
                    { label: 'Location', value: 'Sharpeville, Gauteng' },
                    { label: 'Age Groups', value: 'U-12 to Senior' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between border-b border-white/10 pb-3">
                      <span className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-muted text-xs">{stat.label}</span>
                      <span className="font-bebas text-white text-xl">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Charity Fundraising Callout */}
      <section className="bg-rmf-red py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="font-barlow font-semibold uppercase tracking-[4px] text-white/80 text-sm mb-4">Support Our Work</p>
            <h2 className="font-bebas text-white text-[clamp(3rem,8vw,7rem)] leading-none mb-6">
              Charity Fundraising
            </h2>
            <p className="font-inter text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Your contribution directly funds bursaries, sporting equipment, tournament infrastructure,
              and community programmes. Every rand makes a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-involved"
                className="font-barlow font-semibold uppercase tracking-[2px] text-sm bg-white text-rmf-black px-8 py-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer inline-flex items-center gap-2"
              >
                Donate Now <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="/get-involved#sponsorship"
                className="font-barlow font-semibold uppercase tracking-[2px] text-sm border border-white text-white px-8 py-3 hover:bg-white/10 transition-colors duration-200 cursor-pointer inline-block"
              >
                Corporate Sponsorship
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
