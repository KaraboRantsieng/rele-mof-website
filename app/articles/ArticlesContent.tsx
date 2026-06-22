'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Pin, ArrowRight } from 'lucide-react'
import Image from 'next/image'

function AnimatedSection({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const featuredArticle = {
  source: 'Forbes Africa',
  tag: 'Under 30',
  date: '2026',
  title: 'Relebohile Mofokeng: The PSL Star Turning Passion Into Purpose',
  snippet:
    'Forbes Africa shines a spotlight on Relebohile Mofokeng — one of South Africa\'s most recognisable football talents — for a chapter that goes far beyond the pitch. Featured in the Forbes Africa Under 30 class, Mofokeng is recognised not only for his rise through the ranks of professional football, but for the establishment of the Relebohile Mofokeng Foundation, an NPO dedicated to uplifting communities through sport, education, and opportunity. A remarkable achievement that cements his legacy both on and off the field.',
  href: 'https://www.forbesafrica.com/under-30/2026/',
  image: '/images/mofokeng-forbes.jpeg',
}

const articles = [
  {
    source: 'The Citizen',
    tag: 'Sport',
    date: '7 June 2026',
    title: 'Relebohile Mofokeng Foundation Gears Up for 2nd Annual Soccer Tournament',
    snippet:
      'The Sedibeng Ster reports on the Relebohile Mofokeng Foundation\'s 2nd Annual Soccer Tournament, set to take place from 27 June to 19 July 2026. Building on the success of the inaugural tournament, the Foundation is bringing together young talent from across the community in a competition designed to identify potential, nurture discipline, and reward excellence. Registration is open via WhatsApp, and the Foundation invites all eligible participants to be part of the movement.',
    href: 'https://www.citizen.co.za/sedibeng-ster/sport/sport-sport/2026/06/07/rele-mofokeng-foundation-2nd-annual-tournament/',
    image: '/images/gallery/tornament-poster.jpeg',
  },
]

export default function ArticlesContent() {
  return (
    <section className="bg-rmf-black py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-rmf-red/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* ── FEATURED / PINNED ARTICLE ── */}
        <AnimatedSection delay={0}>
          <div className="flex items-center gap-3 mb-6">
            <Pin size={14} className="text-rmf-red" aria-hidden="true" />
            <span className="font-barlow font-semibold uppercase tracking-[4px] text-rmf-red text-xs">
              Pinned Feature
            </span>
          </div>

          <a
            href={featuredArticle.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-white/10 hover:border-rmf-red/50 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer overflow-hidden"
            aria-label={`Read full article: ${featuredArticle.title} on ${featuredArticle.source}`}
          >
            {/* Source bar */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-3">
                <span className="font-bebas text-white tracking-[2px] text-xl">{featuredArticle.source}</span>
                <span className="font-barlow font-semibold uppercase tracking-[3px] text-rmf-red text-[10px] border border-rmf-red/40 px-2 py-0.5">
                  {featuredArticle.tag}
                </span>
              </div>
              <span className="font-inter text-white/30 text-xs">{featuredArticle.date}</span>
            </div>

            {/* Body — image right on desktop, stacked on mobile */}
            <div className="flex flex-col lg:flex-row">
              {/* Text */}
              <div className="flex-1 px-8 py-10 lg:py-12">
                <h2 className="font-bebas text-white text-[clamp(1.8rem,4vw,3.2rem)] leading-tight mb-6 group-hover:text-rmf-red transition-colors duration-300">
                  {featuredArticle.title}
                </h2>
                <div className="w-16 h-[3px] bg-rmf-red mb-6" />
                <p className="font-inter text-white/60 text-base leading-relaxed max-w-[600px]">
                  {featuredArticle.snippet}
                </p>
                <div className="flex items-center gap-2 mt-8 font-barlow font-semibold uppercase tracking-[3px] text-rmf-red text-xs group-hover:gap-3 transition-all duration-200">
                  <span>Read Full Article</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full lg:w-[380px] h-[300px] lg:h-auto shrink-0 overflow-hidden bg-[#111]">
                <Image
                  src={featuredArticle.image}
                  alt="Relebohile Mofokeng in Orlando Pirates kit"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </a>
        </AnimatedSection>

        {/* ── MORE ARTICLES ── */}
        <AnimatedSection delay={0.15} className="mt-20">
          <p className="font-barlow font-semibold uppercase tracking-[4px] text-white/30 text-xs mb-8">
            More Coverage
          </p>

          <div className="grid gap-6">
            {articles.map((article, i) => (
              <AnimatedSection key={i} delay={0.1 + i * 0.1}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-stretch gap-0 border border-white/[0.07] hover:border-rmf-red/40 bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300 cursor-pointer overflow-hidden"
                  aria-label={`Read full article: ${article.title} on ${article.source}`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-[200px] h-[180px] sm:h-auto shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 200px"
                    />
                    <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#111]/60 to-transparent sm:block hidden" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-bebas text-white tracking-[2px] text-base">{article.source}</span>
                        <span className="font-barlow font-semibold uppercase tracking-[2px] text-rmf-red/80 text-[10px] border border-rmf-red/30 px-2 py-0.5">
                          {article.tag}
                        </span>
                        <span className="font-inter text-white/25 text-[11px] ml-auto">{article.date}</span>
                      </div>
                      <h3 className="font-bebas text-white text-[clamp(1.2rem,2.5vw,1.6rem)] leading-tight mb-3 group-hover:text-rmf-red transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="font-inter text-white/50 text-sm leading-relaxed">
                        {article.snippet}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-5 font-barlow font-semibold uppercase tracking-[3px] text-rmf-red text-[10px] group-hover:gap-3 transition-all duration-200">
                      <span>Read More</span>
                      <ArrowRight size={11} aria-hidden="true" />
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
