'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const programmes = [
  {
    tag: '01',
    title: 'Sports\nDevelopment',
    body: 'From grassroots tournaments in Sharpeville to elite training camps — creating pathways for young athletes to reach professional levels.',
    href: '/programmes#sports',
    image: '/images/gallery/17.jpeg',
    span: 'large',
  },
  {
    tag: '02',
    title: 'Education\n& Culture',
    body: 'Bursary support, cultural heritage programmes, and academic mentorship bridging South Africa\'s past with a prosperous future.',
    href: '/programmes#education',
    image: '/images/gallery/1.jpeg',
    span: 'small',
  },
  {
    tag: '03',
    title: 'CSI\n& Charity',
    body: 'Corporate Social Investment initiatives and charity drives that address immediate community needs while building sustainable support structures.',
    href: '/programmes#csi',
    image: '/images/gallery/5.jpeg',
    span: 'small',
  },
]

export default function ProgrammesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-rmf-black py-20 lg:py-32 overflow-hidden" aria-labelledby="prog-heading">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-xs mb-3">
              What We Do
            </p>
            <h2
              id="prog-heading"
              className="font-bebas text-white leading-none"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              Our Programmes
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link
              href="/programmes"
              className="group inline-flex items-center gap-2 font-barlow font-semibold uppercase tracking-[3px] text-xs text-white/40 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              View All
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Equal 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {programmes.map((prog, i) => (
            <motion.article
              key={prog.tag}
              className="relative overflow-hidden group cursor-pointer img-zoom min-h-[420px] lg:min-h-[500px]"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={prog.image}
                alt={prog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                <span className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-xs mb-3 block">
                  Pillar {prog.tag}
                </span>
                <h3
                  className="font-bebas text-white leading-none whitespace-pre-line mb-4"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {prog.title}
                </h3>
                <p className="font-inter text-white/60 text-sm leading-relaxed mb-6 max-w-[320px]">
                  {prog.body}
                </p>
                <Link
                  href={prog.href}
                  className="group/btn inline-flex items-center gap-3 font-barlow font-semibold uppercase tracking-[3px] text-xs text-white hover:text-rmf-red transition-colors duration-200 cursor-pointer"
                >
                  Explore
                  <ArrowUpRight
                    size={14}
                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="absolute top-0 left-0 w-[3px] h-full bg-rmf-red" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
