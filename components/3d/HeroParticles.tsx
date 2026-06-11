'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; z: number
  vx: number; vy: number; vz: number
  isRed: boolean; size: number
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    const particles: Particle[] = []
    const COUNT = 65

    const setSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: 0.2 + Math.random() * 0.8,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.18 - 0.06,
        vz: (Math.random() - 0.5) * 0.003,
        isRed: Math.random() > 0.72,
        size: 0.8 + Math.random() * 2.0,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        p.z = Math.max(0.2, Math.min(1.0, p.z + p.vz))
        if (p.z <= 0.2 || p.z >= 1.0) p.vz *= -1
        if (p.x < -8) p.x = canvas.width + 8
        if (p.x > canvas.width + 8) p.x = -8
        if (p.y < -8) p.y = canvas.height + 8
        if (p.y > canvas.height + 8) p.y = -8

        const r = p.size * p.z
        const a = p.z * 0.42
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = p.isRed
          ? `rgba(204,0,0,${a})`
          : `rgba(255,255,255,${a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
