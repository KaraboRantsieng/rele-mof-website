'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Facebook, ArrowUpRight } from 'lucide-react'

// TikTok icon
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.83a4.85 4.85 0 0 1-1.07-.14z" />
    </svg>
  )
}

interface GalleryImage {
  id: number
  src: string
  alt: string
  caption: string
  category: 'soccer' | 'gala'
}

const allImages: GalleryImage[] = [
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/${i + 1}.jpeg`,
    alt: `Foundation Gala Dinner 2025 — Riviera On The Vaal, image ${i + 1}`,
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  })),
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 17,
    src: `/images/gallery/${i + 17}.jpeg`,
    alt: `Soccer Tournament 2025 — Sharpeville, image ${i + 17}`,
    caption: 'Soccer Tournament 2025 — Sharpeville',
    category: 'soccer' as const,
  })),
  {
    id: 26,
    src: '/images/gallery/26.png',
    alt: 'Soccer Tournament 2025 — Sharpeville, image 26',
    caption: 'Soccer Tournament 2025 — Sharpeville',
    category: 'soccer' as const,
  },
  {
    id: 27,
    src: '/images/gallery/27.jpg',
    alt: 'Foundation Gala Dinner 2025 — Riviera On The Vaal, image 27',
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  },
  {
    id: 28,
    src: '/images/gallery/28.jpeg',
    alt: 'Foundation Gala Dinner 2025 — Riviera On The Vaal, image 28',
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  },
  {
    id: 29,
    src: '/images/gallery/29.jpeg',
    alt: 'Foundation Gala Dinner 2025 — Riviera On The Vaal, image 29',
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  },
  {
    id: 30,
    src: '/images/gallery/30.jpeg',
    alt: 'Foundation Gala Dinner 2025 — Riviera On The Vaal, image 30',
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  },
  {
    id: 31,
    src: '/images/gallery/31.jpeg',
    alt: 'Foundation Gala Dinner 2025 — Riviera On The Vaal, image 31',
    caption: 'Foundation Gala Dinner 2025 — Riviera On The Vaal',
    category: 'gala' as const,
  },
]

const filterTabs = [
  { label: 'All', value: 'all' },
  { label: 'Soccer Tournament 2025', value: 'soccer' },
  { label: 'Gala Dinner 2025', value: 'gala' },
]

function GalleryImage({ image, onClick, index }: { image: GalleryImage; onClick: () => void; index: number }) {
  const inViewRef = useRef(null)
  const tiltRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(inViewRef, { once: true, amount: 0.1 })
  const [hasError, setHasError] = useState(false)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.04)`
    el.style.transition = 'transform 0.12s ease-out'
    el.style.zIndex = '10'
  }

  const onMouseLeave = () => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = 'rotateX(0) rotateY(0) scale(1)'
      tiltRef.current.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
      tiltRef.current.style.zIndex = '1'
    }
  }

  return (
    <div style={{ perspective: '800px' }}>
      <motion.div
        ref={inViewRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      >
        <div
          ref={tiltRef}
          style={{ transformStyle: 'preserve-3d', willChange: 'transform', position: 'relative' }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
    <div
      className="relative overflow-hidden cursor-pointer group bg-gray-900"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${image.alt}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {hasError ? (
        <div className="aspect-square flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 text-center">
          <div className="w-10 h-10 border-2 border-rmf-muted/30 flex items-center justify-center mb-3">
            <span className="text-rmf-muted text-xl">📷</span>
          </div>
          <p className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-muted text-xs">
            {image.category === 'soccer' ? 'Soccer Tournament 2025' : 'Gala Dinner 2025'}
          </p>
        </div>
      ) : (
        <div className="aspect-square relative">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setHasError(true)}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <span className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-rmf-red px-3 py-1">
              View
            </span>
          </div>
        </div>
      )}
    </div>
        </div>
      </motion.div>
    </div>
  )
}


export default function GalleryContent() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'soccer' | 'gala'>('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter((img) => img.category === activeFilter)

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((i) => (i! > 0 ? i! - 1 : filteredImages.length - 1))
  }, [lightboxIndex, filteredImages.length])

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return
    setLightboxIndex((i) => (i! < filteredImages.length - 1 ? i! + 1 : 0))
  }, [lightboxIndex, filteredImages.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  return (
    <>
      {/* Filter Tabs */}
      <section className="bg-rmf-black border-b border-white/10 relative">
        <div className="overflow-x-auto no-scrollbar">
        <div className="flex min-w-max px-6 lg:px-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as typeof activeFilter)}
              className={`font-barlow font-semibold uppercase tracking-[2px] text-sm px-5 py-5 whitespace-nowrap border-b-[3px] transition-all duration-200 cursor-pointer ${
                activeFilter === tab.value
                  ? 'border-rmf-red text-white'
                  : 'border-transparent text-rmf-muted hover:text-white'
              }`}
              aria-pressed={activeFilter === tab.value}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </div>
        {/* Fade gradient to signal scrollable content on mobile */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-rmf-black to-transparent lg:hidden" />
      </section>

      {/* Photos Grid */}
      <section className="bg-rmf-black py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="mb-8">
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-2">Photos</p>
            <p className="font-inter text-rmf-muted text-sm">{filteredImages.length} images</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredImages.map((image, i) => (
              <GalleryImage
                key={image.id}
                image={image}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Tournament Poster */}
      <section className="bg-[#0d0d0d] py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Coming 2026</p>
          <h2 className="font-bebas text-white text-[clamp(2rem,5vw,4rem)] leading-none mb-10">
            2nd Annual Soccer Tournament — Official Poster
          </h2>
          <div className="max-w-sm">
            <div className="relative aspect-[2/3] overflow-hidden border-l-[3px] border-rmf-red">
              <Image
                src="/images/gallery/tornament-poster.jpeg"
                alt="2nd Annual Soccer Tournament 2026 — Official Poster"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-rmf-black py-16 lg:py-20 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Follow Us</p>
          <h2 className="font-bebas text-white text-[clamp(2rem,5vw,4rem)] leading-none mb-3">
            Relebohile Mofokeng Foundation
          </h2>
          <p className="font-inter text-rmf-muted text-base mb-12 max-w-xl mx-auto">
            Follow us on social media for more highlights, behind-the-scenes content and foundation updates.
          </p>
          <div className="flex flex-col gap-px max-w-md mx-auto w-full border border-white/[0.08]">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61572711981738"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="group relative flex items-center gap-5 px-6 py-5 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rmf-red translate-x-[-3px] group-hover:translate-x-0 transition-transform duration-300" />
              <div className="w-10 h-10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <Facebook size={20} aria-hidden="true" />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs mb-0.5">Facebook</p>
                <p className="font-inter text-rmf-muted text-xs truncate">Relebohile Mofokeng Foundation</p>
              </div>
              <ArrowUpRight size={15} className="text-white/20 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" aria-hidden="true" />
            </a>

            {/* Divider */}
            <div className="h-px bg-white/[0.06]" />

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@rele_mofokeng_foundation?_r=1&_t=ZS-96zHRCm0zUS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on TikTok"
              className="group relative flex items-center gap-5 px-6 py-5 bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rmf-red translate-x-[-3px] group-hover:translate-x-0 transition-transform duration-300" />
              <div className="w-10 h-10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <TikTokIcon size={20} />
              </div>
              <div className="flex-1 text-left min-w-0">
                <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs mb-0.5">TikTok</p>
                <p className="font-inter text-rmf-muted text-xs truncate">@rele_mofokeng_foundation</p>
              </div>
              <ArrowUpRight size={15} className="text-white/20 group-hover:text-white/60 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-rmf-red transition-colors duration-200 z-10 cursor-pointer p-2"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-rmf-red transition-colors duration-200 z-10 cursor-pointer p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <p className="absolute bottom-0 left-0 right-0 text-center font-inter text-white/70 text-sm py-3 bg-black/50">
                {filteredImages[lightboxIndex].caption} · {lightboxIndex + 1} / {filteredImages.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-rmf-red transition-colors duration-200 z-10 cursor-pointer p-2"
              aria-label="Next image"
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
