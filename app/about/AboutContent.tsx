'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Target, Users, BookOpen, Heart, Shield, Globe } from 'lucide-react'

const aims = [
  { icon: Target, title: 'Sports Development', desc: 'Create structured pathways from grassroots to professional football through organised competitions and elite development programmes.' },
  { icon: BookOpen, title: 'Education Support', desc: 'Provide bursaries, mentorship and academic support to ensure no talented young person is held back by circumstance.' },
  { icon: Heart, title: 'Community Welfare', desc: 'Address immediate needs through charity initiatives while building long-term community resilience and cohesion.' },
  { icon: Globe, title: 'Cultural Heritage', desc: 'Celebrate and preserve South African cultural identity as a source of pride, unity, and inspiration for the next generation.' },
  { icon: Shield, title: 'Advocacy', desc: 'Give voice to underrepresented communities, advocating for equitable access to sport, education, and opportunity at all levels.' },
  { icon: Users, title: 'Stakeholder Engagement', desc: 'Build lasting partnerships with corporates, government, and civil society to amplify our reach and sustainable impact.' },
]

const orgStructure = [
  { role: 'Chairperson', name: 'Mr. Sechaba Mofokeng' },
  { role: 'Deputy Chairperson', name: 'Mr. Lucas Msimanga' },
  { role: 'Treasurer', name: 'Mrs. Naome Mofokeng' },
  { role: 'Secretary', name: 'Mr. Floyd Mahano' },
  { role: 'Deputy Secretary', name: 'Mr. Malefane Motsiri' },
  { role: 'Organiser', name: 'Mr. Fanyana Moleli' },
]

function Section({ children, bg = 'bg-white' }: { children: React.ReactNode; bg?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <section ref={ref} className={`${bg} py-20 lg:py-28`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-[1440px] mx-auto px-6 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default function AboutContent() {
  return (
    <>
      {/* Who We Are */}
      <Section bg="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Our Story</p>
            <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-6">Who We Are</h2>
            <div className="w-16 h-1 bg-rmf-red mb-8" />
            <p className="font-inter text-gray-700 text-base leading-relaxed mb-5">
              The Relebohile Mofokeng Foundation (NPO Reg. No. 312-143) is a registered non-profit organisation
              founded by professional PSL footballer and GQ Sportsperson of the Year 2024, Relebohile Mofokeng.
            </p>
            <p className="font-inter text-gray-600 text-base leading-relaxed mb-5">
              Rooted in Sharpeville, Gauteng, the Foundation was established with a singular vision: to harness
              the power of sport and education as twin engines of sustainable community transformation.
            </p>
            <p className="font-inter text-gray-600 text-base leading-relaxed">
              We believe that talent is equally distributed but opportunity is not. Our work is to bridge that gap
              — creating structures, events, and programmes that give every young South African a fair chance to
              reach their full potential.
            </p>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/5' }}>
              <Image
                src="/images/gallery/founder.jpeg"
                alt="Relebohile Mofokeng, Founder of the Relebohile Mofokeng Foundation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-rmf-red" aria-hidden="true" />
          </div>
        </div>
      </Section>

      {/* Aims & Objectives */}
      <section className="bg-rmf-black py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">What Drives Us</p>
            <h2 className="font-bebas text-white text-[clamp(2.5rem,6vw,5rem)] leading-none">Aims & Objectives</h2>
            <div className="w-16 h-1 bg-rmf-red mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aims.map((aim, i) => {
              const Icon = aim.icon
              return (
                <AimCard key={aim.title} aim={aim} Icon={Icon} index={i} />
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Goal */}
      <section className="bg-rmf-red py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="font-barlow font-semibold uppercase tracking-[4px] text-white/80 text-sm mb-6">Our Vision</p>
          <blockquote className="font-bebas text-white text-[clamp(2rem,5vw,4.5rem)] leading-tight max-w-4xl mx-auto">
            &ldquo;A South Africa where every young person — regardless of background — has access
            to the tools, mentorship, and opportunity to build a better life through sport and education.&rdquo;
          </blockquote>
          <p className="font-inter text-white/70 mt-6 text-base">— Relebohile Mofokeng, Founder</p>
        </div>
      </section>

      {/* Mission & Advocacy */}
      <Section bg="bg-white">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="border-l-[3px] border-rmf-red bg-rmf-grey p-10">
            <h3 className="font-bebas text-rmf-black text-4xl mb-4">Our Mission</h3>
            <p className="font-inter text-gray-700 text-base leading-relaxed">
              To leverage professional sport and structured education as vehicles for measurable,
              sustainable social impact — creating pipelines from grassroots participation to
              professional achievement, while addressing systemic barriers faced by underserved communities.
            </p>
          </div>
          <div className="border-l-[3px] border-rmf-red bg-rmf-grey p-10">
            <h3 className="font-bebas text-rmf-black text-4xl mb-4">Our Advocacy</h3>
            <p className="font-inter text-gray-700 text-base leading-relaxed">
              We actively engage with government, media, and corporate partners to advocate for
              equitable investment in youth sport and education. We use Relebohile&apos;s platform
              to amplify community voices and champion policy changes that create lasting opportunity.
            </p>
          </div>
        </div>
      </Section>

      {/* Organisational Structure */}
      <section className="bg-rmf-grey py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Our Team</p>
            <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none">Leadership Team</h2>
            <div className="w-16 h-1 bg-rmf-red mx-auto mt-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {orgStructure.map((item, i) => (
              <OrgCard key={item.role} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AimCard({ aim, Icon, index }: { aim: typeof aims[0]; Icon: typeof Target; index: number }) {
  const inViewRef = useRef(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { once: true, amount: 0.3 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.02)`
    el.style.transition = 'transform 0.12s ease-out'
  }

  const onMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'rotateX(0) rotateY(0) scale(1)'
      tiltRef.current.style.transition = 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)'
    }
  }

  return (
    <div ref={inViewRef} style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      >
        <div
          ref={tiltRef}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          <div className="border-l-[3px] border-rmf-red bg-white/5 p-7 group hover:bg-white/[0.08] transition-colors duration-300">
            <Icon size={28} className="text-rmf-red mb-4" aria-hidden="true" />
            <h3 className="font-barlow font-semibold uppercase tracking-[2px] text-white text-lg mb-3">{aim.title}</h3>
            <p className="font-inter text-rmf-muted text-sm leading-relaxed">{aim.desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function OrgCard({ item, index }: { item: typeof orgStructure[0]; index: number }) {
  const inViewRef = useRef(null)
  const liftRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { once: true, amount: 0.3 })

  const onEnter = () => {
    if (liftRef.current) {
      liftRef.current.style.transform = 'translateY(-8px) scale(1.03)'
      liftRef.current.style.boxShadow = '0 20px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(204,0,0,0.15)'
      liftRef.current.style.transition = 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease'
    }
  }
  const onLeave = () => {
    if (liftRef.current) {
      liftRef.current.style.transform = 'translateY(0px) scale(1)'
      liftRef.current.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'
      liftRef.current.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease'
    }
  }

  return (
    <div ref={inViewRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
        style={{ perspective: '600px' }}
      >
        <div
          ref={liftRef}
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.06)', willChange: 'transform' }}
          className="bg-white border-t-[3px] border-rmf-red px-8 py-6 text-center min-w-[200px] cursor-default"
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <p className="font-bebas text-rmf-black text-xl leading-tight">{item.name}</p>
          <p className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-red text-xs mt-2">{item.role}</p>
        </div>
      </motion.div>
    </div>
  )
}
