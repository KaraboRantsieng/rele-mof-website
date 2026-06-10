'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'

const events = [
  {
    tag: 'Soccer Tournament',
    year: '2025',
    title: 'Inaugural Annual\nSoccer Tournament',
    date: 'February 2025',
    location: 'Sharpeville, Gauteng',
    stats: ['100+ Teams', '1,000+ Spectators', 'Multiple Age Groups'],
    image: '/images/gallery/17.jpeg',
    href: '/events#soccer-tournament-2025',
  },
  {
    tag: 'Foundation Launch',
    year: '2025',
    title: 'Gala Dinner &\nFoundation Launch',
    date: 'March 2025',
    location: 'Riviera On The Vaal',
    stats: ['200+ Attendees', 'Black-Tie Gala', 'Industry Leaders'],
    image: '/images/gallery/1.jpeg',
    href: '/events#gala-dinner-2025',
  },
]

export default function TournamentsSection() {
  const ref = useRef<HTMLElement>(null)
  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yearY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} className="relative bg-rmf-black py-24 lg:py-36 overflow-hidden" aria-labelledby="events-heading">

      {/* Ghost year */}
      <motion.div
        style={{ y: yearY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bebas text-white/[0.03] leading-none"
          style={{ fontSize: 'clamp(12rem, 38vw, 52rem)' }}
        >
          2025
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={headerRef} className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-xs mb-3">
              On The Ground
            </p>
            <h2
              id="events-heading"
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              Events &<br />Tournaments
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 font-barlow font-semibold uppercase tracking-[3px] text-xs text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              All Events
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Event Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {events.map((ev, i) => (
            <motion.article
              key={ev.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden cursor-pointer bg-[#111111] border border-white/[0.06] hover:border-white/[0.14] transition-colors duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
                {/* Hover overlay tint */}
                <div className="absolute inset-0 bg-rmf-red/0 group-hover:bg-rmf-red/10 transition-colors duration-500" />
                {/* Tag badge */}
                <div className="absolute top-4 left-4 bg-rmf-red px-3 py-1.5">
                  <span className="font-barlow font-semibold uppercase text-white tracking-[3px] text-[10px]">
                    {ev.tag}
                  </span>
                </div>
                {/* Year badge */}
                <div className="absolute top-4 right-4 glass-dark px-3 py-1.5">
                  <span className="font-bebas text-white tracking-[2px] text-lg leading-none">{ev.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 lg:px-8 pt-6 pb-8">
                <div className="flex flex-wrap gap-5 mb-4">
                  <span className="inline-flex items-center gap-1.5 font-inter text-white/40 text-xs">
                    <Calendar size={11} aria-hidden="true" />{ev.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-inter text-white/40 text-xs">
                    <MapPin size={11} aria-hidden="true" />{ev.location}
                  </span>
                </div>

                <h3
                  className="font-bebas text-white leading-none whitespace-pre-line mb-5 group-hover:text-rmf-red transition-colors duration-300"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}
                >
                  {ev.title}
                </h3>

                {/* Stats pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {ev.stats.map((s) => (
                    <span
                      key={s}
                      className="font-barlow font-semibold uppercase tracking-[2px] text-[10px] px-3 py-1.5 border border-white/[0.1] text-white/50 group-hover:border-rmf-red/40 group-hover:text-white/80 transition-all duration-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  href={ev.href}
                  className="group/btn inline-flex items-center gap-3 font-barlow font-semibold uppercase tracking-[3px] text-xs text-rmf-red hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  View Recap
                  <ArrowUpRight
                    size={14}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Red left bar */}
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-rmf-red/0 group-hover:bg-rmf-red transition-colors duration-500" />
              {/* Red bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-rmf-red/20 group-hover:bg-rmf-red transition-colors duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
