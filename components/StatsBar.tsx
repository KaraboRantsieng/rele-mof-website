'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 100, suffix: '+', label: 'Teams Competed', sub: 'Annual Soccer Tournament' },
  { value: 1000, suffix: '+', label: 'Spectators', sub: 'Sharpeville, Gauteng' },
  { value: 200, suffix: '+', label: 'Gala Attendees', sub: 'Riviera On The Vaal' },
  { value: 2025, suffix: '', label: 'Year Founded', sub: 'NPO Reg. 312-143', noFormat: true },
]

function CountUp({ target, suffix, active, noFormat }: { target: number; suffix: string; active: boolean; noFormat?: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const totalFrames = 80
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const timer = setInterval(() => {
      frame++
      const progress = ease(Math.min(frame / totalFrames, 1))
      setDisplay(Math.floor(progress * target))
      if (frame >= totalFrames) {
        setDisplay(target)
        clearInterval(timer)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {noFormat ? display : display.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-[#0d0d0d] relative overflow-hidden" aria-label="Foundation Impact Statistics">
      {/* Ghost background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-bebas text-white/[0.025] leading-none whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 22vw, 28rem)' }}
        >
          IMPACT
        </span>
      </div>

      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col justify-center px-8 lg:px-14 py-14 lg:py-20 group ${
              i < stats.length - 1 ? 'border-r border-white/[0.07]' : ''
            } ${i < 2 ? 'border-b border-white/[0.07] lg:border-b-0' : ''}`}
          >
            {/* Hover red fill */}
            <div className="absolute inset-0 bg-rmf-red/[0] group-hover:bg-rmf-red/[0.04] transition-colors duration-500" />

            <p
              className="font-bebas text-white leading-none relative z-10"
              style={{ fontSize: 'clamp(4rem, 9vw, 11rem)' }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} active={isInView} noFormat={stat.noFormat} />
            </p>
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[3px] text-xs mt-2 mb-1 relative z-10">
              {stat.label}
            </p>
            <p className="font-inter text-white/30 text-xs relative z-10">{stat.sub}</p>

            {/* Red corner accent on hover */}
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-rmf-red group-hover:h-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
