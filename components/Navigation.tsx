'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Facebook } from 'lucide-react'

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.83a4.85 4.85 0 0 1-1.07-.14z" />
    </svg>
  )
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60)
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark border-b border-white/[0.07]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between h-16 lg:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 cursor-pointer" aria-label="Relebohile Mofokeng Foundation Home">
          <Image
            src="/images/logo.jpeg"
            alt="RMF"
            width={120}
            height={44}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-barlow font-semibold uppercase tracking-[2px] text-xs pb-1 transition-colors duration-200 cursor-pointer ${
                    active ? 'text-rmf-red' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-rmf-red"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Donate CTA */}
        <div className="hidden lg:block">
          <Link
            href="/get-involved"
            className="font-barlow font-semibold uppercase tracking-[3px] text-xs bg-rmf-red text-white px-6 py-2.5 hover:bg-white hover:text-rmf-black transition-all duration-300 cursor-pointer"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 cursor-pointer"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile drawer — full height, scrollable links, sticky bottom CTA */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-white/[0.07] fixed top-16 left-0 right-0 flex flex-col z-[49] bg-[#0a0a0a]"
            style={{ height: 'calc(100dvh - 4rem)' }}
          >
            {/* Scrollable nav links */}
            <div className="flex-1 min-h-0 overflow-y-auto px-6 pt-4">
              <ul>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: 0.04 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={`font-bebas uppercase tracking-[3px] flex items-center justify-between py-3.5 border-b border-white/[0.07] transition-colors duration-200 cursor-pointer ${
                        pathname === link.href ? 'text-rmf-red' : 'text-white/80 hover:text-white'
                      }`}
                      style={{ fontSize: 'clamp(1.6rem, 5.5vw, 2.2rem)' }}
                    >
                      {link.label}
                      {pathname === link.href ? (
                        <span className="block w-5 h-[2px] bg-rmf-red shrink-0" />
                      ) : (
                        <span className="font-barlow text-white/15 text-xs tracking-widest">→</span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Sticky bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.42 }}
              className="px-6 pt-5 pb-8 border-t border-white/[0.07] bg-[rgba(10,10,10,0.6)] space-y-3"
            >
              {/* Donate button — brand red */}
              <a
                href="https://wa.me/27661349395?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20how%20I%20can%20donate%20to%20the%20Relebohile%20Mofokeng%20Foundation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 font-barlow font-semibold uppercase tracking-[4px] text-sm bg-rmf-red text-white py-4 w-full hover:bg-white hover:text-rmf-black transition-all duration-300 cursor-pointer"
              >
                <WhatsAppIcon size={18} />
                Donate
              </a>

              {/* Social icons — centred */}
              <div className="flex items-center justify-center gap-6 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61572711981738"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/35 hover:text-rmf-red transition-colors duration-200"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.tiktok.com/@rele_mofokeng_foundation?_r=1&_t=ZS-96zHRCm0zUS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white/35 hover:text-rmf-red transition-colors duration-200"
                >
                  <TikTokIcon size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
