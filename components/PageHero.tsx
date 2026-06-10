'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface PageHeroProps {
  tag?: string
  title: string
  redWord?: string
  subtitle?: string
}

export default function PageHero({ tag, title, redWord, subtitle }: PageHeroProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="bg-rmf-black pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden grid-lines"
      aria-label={`${title} hero banner`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {tag && (
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">
              {tag}
            </p>
          )}
          <h1 className="font-bebas text-white text-[clamp(4rem,12vw,10rem)] leading-none">
            {title}
            {redWord && (
              <>
                {' '}
                <span className="text-rmf-red">{redWord}</span>
              </>
            )}
          </h1>
          {/* Animated underline */}
          <motion.svg
            className="mt-2 w-full max-w-[320px]"
            height="6"
            viewBox="0 0 320 6"
            fill="none"
            aria-hidden="true"
          >
            <motion.path
              d="M0 3 L320 3"
              stroke="#cc0000"
              strokeWidth="3"
              strokeLinecap="square"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
          </motion.svg>
          {subtitle && (
            <p className="font-inter text-rmf-muted text-lg mt-6 max-w-[600px] leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
