'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const chapters = [
  {
    number: '01',
    eyebrow: 'Who We Are',
    heading: 'BORN FROM\nPURPOSE',
    body: 'The Relebohile Mofokeng Foundation was built on a simple truth: sport has the power to change lives. Founded by GQ Sportsperson of the Year 2024, PSL footballer Relebohile Mofokeng, the Foundation is a structured vehicle for the change he grew up needing.',
    cta: { label: 'Our Story', href: '/about' },
  },
  {
    number: '02',
    eyebrow: 'What We Do',
    heading: 'THREE\nPILLARS',
    body: 'Sports Development. Education & Culture. CSI & Charity. Three programmes, one mission — break barriers, build futures, and create pipelines from Sharpeville\'s streets to South Africa\'s biggest stages.',
    cta: { label: 'Our Programmes', href: '/programmes' },
  },
  {
    number: '03',
    eyebrow: 'The Impact',
    heading: 'NATIONAL\nREACH',
    body: '100+ teams. 1,000+ spectators. 200+ gala attendees. In year one. The Foundation has proven its model works. Now we scale — more tournaments, more bursaries, more communities changed forever.',
    cta: { label: 'Get Involved', href: '/get-involved' },
  },
]

function ChapterDot({ index, scrollYProgress, total }: { index: number; scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']; total: number }) {
  const width = useTransform(
    scrollYProgress,
    [(index) / total, (index + 1) / total],
    [6, 24]
  )
  return (
    <motion.div
      className="rounded-full bg-rmf-black/25 h-[6px] transition-colors duration-300"
      style={{ width }}
      aria-hidden="true"
    />
  )
}

export default function MissionSection() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef(null)
  const isHeaderVisible = useInView(headerRef, { once: true, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  })

  const trackX = useTransform(
    scrollYProgress,
    [0.05, 0.95],
    ['0vw', `-${(chapters.length - 1) * 100}vw`]
  )

  return (
    <div ref={wrapperRef} style={{ height: `${chapters.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen overflow-hidden bg-white">

        {/* Top label */}
        <div ref={headerRef} className="absolute top-8 lg:top-12 left-6 lg:left-16 z-20 flex items-center gap-4">
          <motion.div
            className="h-[2px] bg-rmf-red origin-left"
            style={{ width: 40 }}
            initial={{ scaleX: 0 }}
            animate={isHeaderVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.p
            className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-xs"
            initial={{ opacity: 0, x: -10 }}
            animate={isHeaderVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Our Mission
          </motion.p>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {chapters.map((_, i) => (
            <ChapterDot key={i} index={i} scrollYProgress={scrollYProgress} total={chapters.length} />
          ))}
        </div>

        {/* Horizontal track */}
        <motion.div
          className="flex h-full will-change-transform"
          style={{ x: trackX, width: `${chapters.length * 100}vw` }}
        >
          {chapters.map((chapter) => (
            <div
              key={chapter.number}
              className="w-screen h-full flex items-start sm:items-center justify-center px-6 lg:px-24 overflow-y-auto"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center max-w-[1200px] w-full py-24 sm:py-0">

                {/* Left — number + heading */}
                <div>
                  <span
                    className="font-bebas text-rmf-black/[0.05] leading-none hidden sm:block select-none"
                    style={{ fontSize: 'clamp(7rem, 22vw, 22rem)' }}
                    aria-hidden="true"
                  >
                    {chapter.number}
                  </span>
                  <div className="sm:mt-[-0.35em]">
                    <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-xs mb-3">
                      {chapter.eyebrow}
                    </p>
                    <h2
                      className="font-bebas text-rmf-black leading-none whitespace-pre-line"
                      style={{ fontSize: 'clamp(2.8rem, 8vw, 8rem)' }}
                    >
                      {chapter.heading}
                    </h2>
                  </div>
                </div>

                {/* Right — body + CTA */}
                <div>
                  <div className="w-[3px] h-8 sm:h-16 bg-rmf-red mb-4 sm:mb-8" />
                  <p className="font-inter text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-10 max-w-[480px]">
                    {chapter.body}
                  </p>
                  <Link
                    href={chapter.cta.href}
                    className="group inline-flex items-center gap-3 font-barlow font-semibold uppercase tracking-[3px] text-sm text-rmf-black hover:text-rmf-red transition-colors duration-200 cursor-pointer"
                  >
                    {chapter.cta.label}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-2 transition-transform duration-300"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
