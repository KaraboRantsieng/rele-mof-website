'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const sponsors = [
  { name: 'Adidas', logo: '/images/gallery/adidas-logo.jpg' },
  { name: 'Aquelle', logo: '/images/gallery/Aquelle-Logo.png' },
  { name: 'Aquelle Viv', logo: '/images/gallery/aquelle-viv-logo.jpg' },
]

export default function SponsorsStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section ref={ref} className="bg-[#080808] border-t border-white/[0.06] py-20 lg:py-28 overflow-hidden" aria-labelledby="sponsors-heading">

      {/* Header */}
      <motion.div
        className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-xs mb-3">
              Our Partners
            </p>
            <h2
              id="sponsors-heading"
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5.5rem)' }}
            >
              Sponsors &amp; Partners
            </h2>
          </div>
          <Link
            href="/get-involved#sponsorship"
            className="group inline-flex items-center gap-2 font-barlow font-semibold uppercase tracking-[3px] text-xs text-white/30 hover:text-rmf-red transition-colors duration-200 cursor-pointer"
          >
            Become a Partner →
          </Link>
        </div>
      </motion.div>

      {/* Sponsor Logos */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0a0a0a] border border-white/[0.08] hover:border-white/25 p-10 lg:p-12 flex items-center justify-center transition-all duration-400"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 32px rgba(204,0,0,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Red top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-rmf-red/0 group-hover:bg-rmf-red transition-colors duration-400" />
              <div className="relative w-full h-20 lg:h-24">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain opacity-55 group-hover:opacity-100 transition-opacity duration-400"
                  sizes="(max-width: 640px) 80vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-center font-inter text-white/20 text-xs mt-12 tracking-[3px] uppercase"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Proud partners of the Relebohile Mofokeng Foundation
        </motion.p>
      </div>
    </section>
  )
}
