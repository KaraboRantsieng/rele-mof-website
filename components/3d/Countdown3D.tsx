'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TARGET = new Date('2026-06-27T08:00:00')

function pad(n: number) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function FlipUnit({ value, label }: { value: string; label: string }) {
  const [displayed, setDisplayed] = useState(value)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (value === displayed) return
    setFlipping(true)
    const t = setTimeout(() => {
      setDisplayed(value)
      setFlipping(false)
    }, 260)
    return () => clearTimeout(t)
  }, [value, displayed])

  return (
    <div className="flex flex-col items-center gap-2">
      <div style={{ perspective: '280px' }}>
        <motion.div
          animate={flipping ? { rotateX: -22, scale: 0.92 } : { rotateX: 0, scale: 1 }}
          transition={{ duration: 0.26, ease: 'easeInOut' }}
          className="bg-[#111] border border-white/[0.10] flex items-center justify-center"
          style={{
            transformStyle: 'preserve-3d',
            width: 'clamp(48px, 8vw, 72px)',
            height: 'clamp(60px, 10vw, 88px)',
            boxShadow: '0 10px 36px rgba(0,0,0,0.55), 0 2px 8px rgba(204,0,0,0.12)',
          }}
        >
          <span
            className="font-bebas text-white leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            {displayed}
          </span>
        </motion.div>
      </div>
      <span className="font-barlow font-semibold uppercase tracking-[2px] text-rmf-red text-[9px]">
        {label}
      </span>
    </div>
  )
}

export default function Countdown3D() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [time, setTime] = useState({ d: '00', h: '00', m: '00', s: '00' })

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now()
      if (diff <= 0) {
        setTime({ d: '00', h: '00', m: '00', s: '00' })
        return
      }
      setTime({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor((diff % 86400000) / 3600000)),
        m: pad(Math.floor((diff % 3600000) / 60000)),
        s: pad(Math.floor((diff % 60000) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      ref={ref}
      className="flex items-end justify-center lg:justify-start gap-2 lg:gap-3"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <FlipUnit value={time.d} label="Days" />
      <span className="font-bebas text-white/20 pb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>:</span>
      <FlipUnit value={time.h} label="Hours" />
      <span className="font-bebas text-white/20 pb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>:</span>
      <FlipUnit value={time.m} label="Mins" />
      <span className="font-bebas text-white/20 pb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>:</span>
      <FlipUnit value={time.s} label="Secs" />
    </motion.div>
  )
}
