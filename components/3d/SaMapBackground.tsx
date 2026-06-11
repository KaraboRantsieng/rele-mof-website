'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// South Africa outline — simplified polygon, viewBox 0 0 200 175
const SA_PATH =
  'M 0,88 L 0,82 L 3,70 L 5,58 L 10,45 L 16,34 L 18,28 L 25,18 ' +
  'L 35,10 L 47,4 L 60,1 L 80,0 L 100,0 L 120,0 L 136,1 L 150,1 ' +
  'L 160,5 L 175,20 L 185,38 L 193,55 L 198,68 L 195,78 L 188,92 ' +
  'L 178,108 L 168,118 L 155,128 L 145,138 L 132,148 L 120,156 ' +
  'L 110,162 L 98,167 L 85,170 L 72,167 L 60,158 L 50,148 ' +
  'L 40,135 L 30,118 L 22,104 L 16,92 L 8,90 Z'

// Gauteng/Sharpeville at ~28°E, 26.5°S
const GX = 138
const GY = 57

interface Props {
  className?: string
}

export default function SaMapBackground({ className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 14}deg) rotateY(${x * 14}deg)`
    el.style.transition = 'transform 0.12s ease-out'
  }

  const onMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
      tiltRef.current.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`select-none ${className}`}
      style={{ perspective: '700px' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div
        ref={tiltRef}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        <svg
          viewBox="0 0 200 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <filter id="sa-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Country fill */}
          <path
            d={SA_PATH}
            fill="rgba(204,0,0,0.07)"
            stroke="rgba(204,0,0,0.35)"
            strokeWidth="1.2"
            strokeLinejoin="round"
            filter="url(#sa-glow)"
          />

          {/* Gauteng / Sharpeville pulsing marker */}
          <circle cx={GX} cy={GY} r="12" fill="rgba(204,0,0,0.08)">
            <animate attributeName="r" values="10;20;10" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" />
          </circle>
          <circle cx={GX} cy={GY} r="5" fill="rgba(204,0,0,0.22)">
            <animate attributeName="r" values="4;9;4" dur="2.8s" repeatCount="indefinite" begin="0.9s" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" repeatCount="indefinite" begin="0.9s" />
          </circle>
          <circle cx={GX} cy={GY} r="2.8" fill="#cc0000" />

          <text
            x={GX + 6}
            y={GY - 4}
            fill="rgba(255,255,255,0.5)"
            fontSize="6.5"
            fontFamily="Barlow Condensed, sans-serif"
            letterSpacing="0.8"
          >
            SHARPEVILLE
          </text>
          <text
            x={GX + 6}
            y={GY + 5}
            fill="rgba(255,255,255,0.3)"
            fontSize="5.5"
            fontFamily="Barlow Condensed, sans-serif"
            letterSpacing="0.5"
          >
            GAUTENG
          </text>
        </svg>
      </div>
    </motion.div>
  )
}
