'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroParticles = dynamic(() => import('./3d/HeroParticles'), { ssr: false })
const Football3D    = dynamic(() => import('./3d/Football3D'), { ssr: false })

const LINE1 = 'EMPOWERING'
const LINE2 = 'SOUTH AFRICA'

function SplitReveal({ text, delay = 0, className = '' }: {
  text: string
  delay?: number
  className?: string
}) {
  return (
    <span className={`inline-flex flex-wrap ${className}`} aria-hidden="true">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.72, delay: delay + i * 0.036, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  // Scroll progress for parallax + perspective text tilt
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const imageY      = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const headlineTilt = useTransform(scrollYProgress, [0, 0.35], [0, -6])

  return (
    <section
      ref={sectionRef}
      className="relative bg-rmf-black min-h-screen flex flex-col lg:flex-row overflow-hidden"
      aria-label="Hero — Relebohile Mofokeng Foundation"
    >

      {/* ─── RIGHT IMAGE PANEL ─── */}
      <motion.div
        ref={imageRef}
        className="relative w-full mt-16 h-[calc(60vh-4rem)] lg:mt-20 lg:h-[calc(100vh-5rem)] lg:w-[46vw] shrink-0 order-first lg:order-last overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        aria-hidden="true"
      >
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-[1.08] will-change-transform">
          <Image
            src="/images/hero1.png"
            alt=""
            fill
            className="object-cover object-top lg:object-[center_20%]"
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </motion.div>

        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-rmf-black/70 via-rmf-black/10 to-transparent pointer-events-none" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-rmf-black pointer-events-none" />

        <motion.div
          className="hidden lg:block absolute top-0 left-0 bottom-0 w-[4px] bg-rmf-red z-10"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
        />

        <motion.div
          className="hidden lg:flex absolute bottom-10 right-8 flex-col items-end gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        >
          <span className="font-barlow font-semibold uppercase tracking-[4px] text-white/25 text-[9px]">
            Sharpeville · Gauteng
          </span>
          <span className="block w-8 h-[1px] bg-white/20" />
        </motion.div>
      </motion.div>

      {/* ─── LEFT TEXT PANEL ─── */}
      <div className="relative z-10 flex flex-col justify-end lg:justify-center flex-1 px-6 lg:pl-16 xl:pl-24 lg:pr-10 pt-6 pb-16 lg:py-24 overflow-hidden">

        {/* Feature 2 — Particle field */}
        <HeroParticles />

        {/* Feature 1 — 3D Football in background */}
        <div
          className="absolute right-[-8%] top-[50%] -translate-y-1/2 pointer-events-none"
          style={{ width: 'clamp(220px, 38vw, 440px)', height: 'clamp(220px, 38vw, 440px)', opacity: 0.14 }}
          aria-hidden="true"
        >
          <Football3D />
        </div>

        {/* Depth orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="depth-orb1 absolute w-[500px] h-[500px] -top-[150px] -left-[100px] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.07) 0%, transparent 65%)' }} />
          <div className="depth-orb2 absolute w-[350px] h-[350px] bottom-[-80px] right-[5%] rounded-full"
               style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 65%)' }} />
        </div>

        {/* Animated red vertical rule (desktop only) */}
        <motion.div
          className="hidden lg:block absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-rmf-red/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
          aria-hidden="true"
        />

        {/* NPO BADGE */}
        <motion.div
          className="flex items-center gap-4 mb-6 relative z-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="block w-8 h-[2px] bg-rmf-red shrink-0" />
          <span className="font-barlow font-semibold uppercase text-rmf-red tracking-[5px] text-[10px]">
            Relebohile Mofokeng Foundation
          </span>
        </motion.div>

        {/* Feature 3 — 3D Perspective text (scroll-driven tilt) */}
        <motion.div
          className="relative z-10"
          style={{ transformPerspective: 700, rotateX: headlineTilt }}
        >
          <div className="overflow-hidden mb-1">
            <h1
              className="font-bebas leading-[0.88] text-white block"
              style={{ fontSize: 'clamp(4rem, 10vw, 12rem)' }}
              aria-label={`${LINE1} ${LINE2}`}
            >
              <SplitReveal text={LINE1} delay={0.55} />
            </h1>
          </div>
          <div className="overflow-hidden mb-2">
            <h1
              className="font-bebas leading-[0.88] block text-white"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 10.5rem)' }}
              aria-hidden="true"
            >
              <SplitReveal text={LINE2} delay={0.85} />
            </h1>
          </div>
        </motion.div>

        {/* Animated red rule */}
        <motion.div
          className="h-[3px] bg-rmf-red origin-left mt-4 mb-10 relative z-10"
          style={{ maxWidth: 'clamp(160px, 30vw, 440px)' }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* TAGLINE + CTAs */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-14 relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p className="font-inter text-white/50 text-sm lg:text-[15px] max-w-[360px] leading-relaxed">
            Harnessing sport and education to drive sustainable change in South African communities — starting in Sharpeville, reaching the nation.
          </p>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/get-involved"
              className="font-barlow font-semibold uppercase tracking-[3px] text-sm bg-rmf-red text-white px-8 py-3.5 hover:bg-white hover:text-rmf-black transition-all duration-300 cursor-pointer"
            >
              Get Involved
            </Link>
            <Link
              href="/about"
              className="font-barlow font-semibold uppercase tracking-[3px] text-sm border border-white/30 text-white/80 px-8 py-3.5 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
