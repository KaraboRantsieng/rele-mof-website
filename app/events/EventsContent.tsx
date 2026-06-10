'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Users, Trophy, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const filterTabs = ['All', '2025 Events', '2026 Upcoming', 'Tournaments', 'Launch Events']

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function EventsContent() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      {/* Filter Tabs */}
      <section className="bg-rmf-black border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-0 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`font-barlow font-semibold uppercase tracking-[2px] text-sm px-6 py-5 whitespace-nowrap border-b-[3px] transition-all duration-200 cursor-pointer ${
                  activeFilter === tab
                    ? 'border-rmf-red text-white'
                    : 'border-transparent text-rmf-muted hover:text-white'
                }`}
                aria-pressed={activeFilter === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Soccer Tournament 2025 */}
      <section id="soccer-tournament-2025" className="bg-rmf-black py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-10">
              <span className="font-barlow font-semibold uppercase tracking-[3px] text-xs bg-rmf-red text-white px-3 py-1 inline-block mb-4">
                2025 · Tournament
              </span>
              <h2 className="font-bebas text-white text-[clamp(2.5rem,7vw,6rem)] leading-none">
                Inaugural Annual<br />Soccer Tournament 2025
              </h2>
              <div className="flex flex-wrap gap-6 mt-4 text-rmf-muted text-sm font-inter">
                <span className="flex items-center gap-2"><Calendar size={14} aria-hidden="true" /> February 2025</span>
                <span className="flex items-center gap-2"><MapPin size={14} aria-hidden="true" /> Sharpeville, Gauteng</span>
                <span className="flex items-center gap-2"><Users size={14} aria-hidden="true" /> 1,000+ Spectators</span>
                <span className="flex items-center gap-2"><Trophy size={14} aria-hidden="true" /> 100+ Teams</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[21/9] overflow-hidden mb-12 border-l-[3px] border-rmf-red">
              <Image
                src="/images/gallery/17.jpeg"
                alt="2025 Soccer Tournament — Sharpeville, Gauteng"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  In February 2025, Sharpeville came alive as the Relebohile Mofokeng Foundation
                  hosted its inaugural annual soccer tournament — a landmark event that drew over
                  100 teams and 1,000 spectators to the streets and fields of the community.
                </p>
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  The tournament featured age groups from U-12 through to senior categories,
                  providing structured competitive football for hundreds of young athletes who
                  might otherwise never have access to organised sport.
                </p>
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  Media coverage from leading sports outlets, presence of PSL personalities, and
                  the sheer energy of the community turned this into more than just a tournament —
                  it became a statement: Sharpeville produces champions.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Teams', value: '100+' },
                  { label: 'Spectators', value: '1,000+' },
                  { label: 'Age Groups', value: 'U-12 to Senior' },
                  { label: 'Location', value: 'Sharpeville' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-[3px] border-rmf-red bg-white/5 px-5 py-4 flex justify-between items-center">
                    <span className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-muted text-xs">{stat.label}</span>
                    <span className="font-bebas text-white text-2xl">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery preview */}
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
              {[18, 19, 20, 21, 22, 23].map((n) => (
                <div key={n} className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/images/gallery/${n}.jpeg`}
                    alt={`Soccer Tournament 2025 — Sharpeville, image ${n}`}
                    fill
                    className="object-cover hover:scale-[1.05] transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/gallery"
                className="font-barlow font-semibold uppercase tracking-[2px] text-sm text-rmf-red hover:text-red-400 flex items-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                View Full Gallery <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Red divider */}
      <div className="h-1 bg-rmf-red" />

      {/* Gala Dinner 2025 */}
      <section id="gala-dinner-2025" className="bg-rmf-black py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="mb-10">
              <span className="font-barlow font-semibold uppercase tracking-[3px] text-xs bg-rmf-red text-white px-3 py-1 inline-block mb-4">
                2025 · Launch Event
              </span>
              <h2 className="font-bebas text-white text-[clamp(2.5rem,7vw,6rem)] leading-none">
                Foundation Launch<br />& Gala Dinner 2025
              </h2>
              <div className="flex flex-wrap gap-6 mt-4 text-rmf-muted text-sm font-inter">
                <span className="flex items-center gap-2"><Calendar size={14} aria-hidden="true" /> March 2025</span>
                <span className="flex items-center gap-2"><MapPin size={14} aria-hidden="true" /> Riviera On The Vaal</span>
                <span className="flex items-center gap-2"><Users size={14} aria-hidden="true" /> 200+ Attendees</span>
              </div>
            </div>

            <div className="relative aspect-[21/9] overflow-hidden mb-12 border-l-[3px] border-rmf-red">
              <Image
                src="/images/gallery/1.jpeg"
                alt="Foundation Gala Dinner 2025 — Riviera On The Vaal"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2 space-y-6">
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  The official launch of the Relebohile Mofokeng Foundation was a two-part event
                  that brought together the community in an unforgettable celebration of purpose
                  and possibility.
                </p>
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  The afternoon Family Fun Day brought parents, children, and community members
                  together in a festive atmosphere of food, games, and live entertainment. As evening
                  fell, guests transformed for the black-tie Gala Dinner at the prestigious
                  Riviera On The Vaal — where 200+ attendees celebrated the Foundation&apos;s
                  vision with industry leaders, dignitaries, and football personalities.
                </p>
                <p className="font-inter text-rmf-muted text-base leading-relaxed">
                  The event marked the formal beginning of a new chapter — a declaration that the
                  Foundation would be a force for sustained, meaningful impact in South African communities.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Attendees', value: '200+' },
                  { label: 'Format', value: 'Black Tie' },
                  { label: 'Venue', value: 'Riviera On The Vaal' },
                  { label: 'Date', value: 'March 2025' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-[3px] border-rmf-red bg-white/5 px-5 py-4 flex justify-between items-center">
                    <span className="font-barlow font-semibold uppercase tracking-[1px] text-rmf-muted text-xs">{stat.label}</span>
                    <span className="font-bebas text-white text-xl">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
              {[2, 3, 4, 5, 6, 7].map((n) => (
                <div key={n} className="relative aspect-square overflow-hidden">
                  <Image
                    src={`/images/gallery/${n}.jpeg`}
                    alt={`Foundation Gala Dinner 2025 — Riviera On The Vaal, image ${n}`}
                    fill
                    className="object-cover hover:scale-[1.05] transition-transform duration-300"
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming 2026 */}
      <section className="bg-rmf-grey py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Coming Soon</p>
            <h2 className="font-bebas text-rmf-black text-[clamp(2.5rem,6vw,5rem)] leading-none mb-12">
              2026 Upcoming Events
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 2nd Annual Soccer Tournament 2026 */}
              <div className="bg-white border-t-[3px] border-rmf-red p-8">
                <span className="font-barlow font-semibold uppercase tracking-[3px] text-xs text-rmf-red block mb-3">
                  Coming 2026
                </span>
                <h3 className="font-bebas text-rmf-black text-3xl lg:text-4xl mb-4">2nd Annual Soccer Tournament</h3>
                <div className="flex flex-wrap gap-4 text-gray-500 text-sm font-inter mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" /> February 2026</span>
                  <span className="flex items-center gap-1"><MapPin size={12} aria-hidden="true" /> Sharpeville, Gauteng</span>
                </div>
                <p className="font-inter text-gray-600 text-sm leading-relaxed mb-6">
                  Bigger, better, and broader. The 2026 tournament will expand to include more age groups, new venues, and enhanced prize pools.
                </p>
                {/* Official Poster */}
                <div className="relative aspect-[3/4] sm:aspect-[2/3] overflow-hidden border border-gray-200">
                  <Image
                    src="/images/gallery/tornament-poster.jpeg"
                    alt="2nd Annual Soccer Tournament 2026 — Official Poster"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-rmf-red text-white text-center py-2">
                    <span className="font-barlow font-semibold uppercase tracking-[2px] text-xs">Official Poster</span>
                  </div>
                </div>
              </div>

              {/* Foundation Gala Dinner 2026 */}
              <div className="bg-white border-t-[3px] border-rmf-red p-8">
                <span className="font-barlow font-semibold uppercase tracking-[3px] text-xs text-rmf-red block mb-3">
                  Coming 2026
                </span>
                <h3 className="font-bebas text-rmf-black text-3xl lg:text-4xl mb-4">Foundation Gala Dinner 2026</h3>
                <div className="flex flex-wrap gap-4 text-gray-500 text-sm font-inter mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} aria-hidden="true" /> To Be Announced</span>
                  <span className="flex items-center gap-1"><MapPin size={12} aria-hidden="true" /> To Be Announced</span>
                </div>
                <p className="font-inter text-gray-600 text-sm leading-relaxed">
                  Details for the 2026 Foundation Gala Dinner are still to be announced. Stay tuned for updates on date, venue, and ticket information.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
