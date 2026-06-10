'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const achievements = [
  { label: 'GQ Sportsperson of the Year', value: '2024' },
  { label: 'Premier Soccer League', value: 'PSL' },
  { label: 'NPO Founder', value: '312-143' },
  { label: 'Community Champion', value: 'ZA' },
]

export default function TheIconSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef(null)
  const isInView = useInView(textRef, { once: true, amount: 0.25 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.0, 1.06])
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section
      ref={sectionRef}
      className="relative bg-rmf-black overflow-hidden"
      aria-labelledby="icon-heading"
    >
      <div className="grid lg:grid-cols-2 min-h-screen">

        {/* LEFT — TEXT COLUMN */}
        <div
          ref={textRef}
          className="relative z-10 flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-24 lg:py-0"
        >
          {/* Giant outline letters behind */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-0 leading-none select-none pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="font-bebas block"
              style={{
                fontSize: 'clamp(8rem, 20vw, 22rem)',
                WebkitTextStroke: '1px rgba(255,255,255,0.04)',
                color: 'transparent',
              }}
            >
              RELE
            </span>
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-8 h-[2px] bg-rmf-red flex-shrink-0" />
              <span className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-xs">
                The Founder
              </span>
            </motion.div>

            {/* Name — stroke then fill */}
            <div className="overflow-hidden mb-1">
              <motion.h2
                id="icon-heading"
                className="font-bebas leading-none block text-white"
                style={{ fontSize: 'clamp(4rem, 10vw, 10rem)' }}
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Relebohile
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.span
                className="font-bebas leading-none block text-white"
                style={{ fontSize: 'clamp(4rem, 10vw, 10rem)' }}
                initial={{ y: '100%' }}
                animate={isInView ? { y: '0%' } : {}}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-hidden="true"
              >
                Mofokeng
              </motion.span>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-[3px] border-rmf-red pl-6 mb-10"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <p className="font-inter text-white/65 text-sm lg:text-base leading-relaxed italic max-w-[400px]">
                &ldquo;Growing up in Sharpeville, I saw what sport could do for a community. The Foundation is my promise to give back to the next generation.&rdquo;
              </p>
              <footer className="mt-3 font-barlow font-semibold uppercase text-rmf-red tracking-[3px] text-xs not-italic">
                — Relebohile Mofokeng
              </footer>
            </motion.blockquote>

            {/* Achievement chips */}
            <motion.div
              className="grid grid-cols-2 gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              {achievements.map((a) => (
                <div
                  key={a.label}
                  className="group flex items-center gap-3 border border-white/[0.08] px-4 py-3 hover:border-rmf-red/50 transition-colors duration-300"
                >
                  <span className="font-bebas text-rmf-red text-2xl leading-none flex-shrink-0">
                    {a.value}
                  </span>
                  <span className="font-barlow font-semibold uppercase text-white/50 text-[10px] tracking-[1.5px] leading-tight">
                    {a.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-barlow font-semibold uppercase tracking-[3px] text-sm bg-rmf-red text-white px-8 py-4 hover:bg-white hover:text-rmf-black transition-all duration-300 cursor-pointer"
              >
                Read His Story
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — IMAGE COLUMN (full bleed, edge-to-edge) */}
        <div className="relative min-h-[60vw] lg:min-h-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 will-change-transform"
            style={{ scale: imageScale, y: imageY }}
          >
            <Image
              src="/images/gallery/founder.jpeg"
              alt="Relebohile Mofokeng — GQ Sportsperson of the Year 2024, Founder of the Relebohile Mofokeng Foundation"
              fill
              className="object-cover object-[center_top]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Color grade overlay for editorial feel */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-rmf-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-rmf-black/60 via-transparent to-transparent" />
            {/* Duotone-lite: red tint in shadows */}
            <div
              className="absolute inset-0 mix-blend-multiply opacity-20"
              style={{ background: 'linear-gradient(135deg, #cc0000 0%, transparent 60%)' }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Vertical label on the right edge */}
          <div
            className="absolute top-1/2 right-6 -translate-y-1/2 z-10 select-none"
            aria-hidden="true"
          >
            <span
              className="font-bebas text-white/10 text-sm tracking-[8px] uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              GQ Sportsperson of the Year 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
