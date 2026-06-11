import Image from 'next/image'
import Link from 'next/link'
import { Facebook } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/events', label: 'Events' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

// TikTok SVG icon
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.83a4.85 4.85 0 0 1-1.07-.14z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-rmf-black border-t border-white/10 overflow-hidden" aria-label="Site Footer">
      {/* Animated background */}
      <div className="footer-bg" aria-hidden="true" />
      {/* Feature 2 — 3D perspective grid floor (replaces flat grid) */}
      <div className="footer-grid-3d-wrap" aria-hidden="true">
        <div className="footer-grid-3d-inner" />
      </div>

      {/* Red divider */}
      <div className="h-1 bg-rmf-red relative z-10" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-6">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            {/* Feature 1 — 3D floating logo */}
            <Link href="/" className="inline-block mb-6 float-anim">
              <Image
                src="/images/logo.jpeg"
                alt="Relebohile Mofokeng Foundation"
                width={140}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="font-inter text-rmf-muted text-sm leading-relaxed mb-6">
              Harnessing sports and education to drive sustainable change in South African communities.
            </p>
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572711981738"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-rmf-muted hover:text-rmf-red transition-colors duration-200 cursor-pointer"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@rele_mofokeng_foundation?_r=1&_t=ZS-96zHRCm0zUS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-rmf-muted hover:text-rmf-red transition-colors duration-200 cursor-pointer"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-barlow font-semibold uppercase tracking-[3px] text-white text-sm mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-rmf-muted text-sm hover:text-rmf-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-barlow font-semibold uppercase tracking-[3px] text-white text-sm mb-6">
              Programmes
            </h3>
            <ul className="space-y-3">
              {['Education & Culture', 'CSI & Charity', 'Sports Development', 'Charity Fundraising'].map((item) => (
                <li key={item}>
                  <Link
                    href="/programmes"
                    className="font-inter text-rmf-muted text-sm hover:text-rmf-red transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-barlow font-semibold uppercase tracking-[3px] text-white text-sm mb-6 text-center">
              Contact
            </h3>
            <ul className="space-y-3 font-inter text-rmf-muted text-sm text-center">
              <li>
                <a href="mailto:relebohilemofokengfoundation@gmail.com" className="hover:text-rmf-red transition-colors duration-200 break-all">
                  relebohilemofokengfoundation@gmail.com
                </a>
              </li>
              <li className="pt-2 flex justify-center">
                <a
                  href="https://wa.me/27661349395?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20how%20I%20can%20donate%20to%20the%20Relebohile%20Mofokeng%20Foundation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-barlow font-semibold uppercase tracking-[2px] text-xs bg-rmf-red text-white px-5 py-2 hover:bg-red-700 transition-colors duration-200 inline-block cursor-pointer"
                >
                  Donate Now
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-wrap items-center justify-center">
          <p className="font-inter text-rmf-muted text-xs text-center">
            © {new Date().getFullYear()} Relebohile Mofokeng Foundation. All rights reserved.
          </p>
        </div>

      </div>

      {/* AYEYE Attribution */}
      <div className="relative z-10 border-t border-white/[0.06] py-4 flex flex-row flex-wrap items-center justify-center gap-x-2 gap-y-0">
        <span className="font-barlow font-semibold uppercase tracking-[2px] text-white/20 text-[10px]">
          Developed by
        </span>
        <a
          href="https://www.ayeyecreativeagency.co.za/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="AYEYE Creative Agency"
          className="font-barlow font-semibold uppercase tracking-[4px] text-white/40 hover:text-rmf-red text-[10px] transition-colors duration-300"
        >
          AYEYE CREATIVE AGENCY
        </a>
      </div>
    </footer>
  )
}
