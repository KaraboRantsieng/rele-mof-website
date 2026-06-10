'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  const dotX = useSpring(rawX, { stiffness: 500, damping: 28 })
  const dotY = useSpring(rawY, { stiffness: 500, damping: 28 })
  const ringX = useSpring(rawX, { stiffness: 120, damping: 18 })
  const ringY = useSpring(rawY, { stiffness: 120, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
      setVisible(true)
    }

    const onEnter = () => setHovering(true)
    const onLeave = () => setHovering(false)

    window.addEventListener('mousemove', move)

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    addListeners()

    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [rawX, rawY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <motion.div
        className="fixed z-[9999] pointer-events-none rounded-full bg-rmf-red"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: hovering ? 6 : 6,
          height: hovering ? 6 : 6,
          opacity: visible ? 1 : 0,
        }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed z-[9998] pointer-events-none rounded-full border border-rmf-red"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          borderColor: hovering ? 'rgba(204,0,0,0.6)' : 'rgba(204,0,0,1)',
          backgroundColor: hovering ? 'rgba(204,0,0,0.08)' : 'transparent',
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  )
}
