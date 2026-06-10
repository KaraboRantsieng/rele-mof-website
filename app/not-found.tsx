import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | Relebohile Mofokeng Foundation',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rmf-black flex items-center justify-center px-6 pt-20">
      <div className="text-center">
        <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">
          Error 404
        </p>
        <h1 className="font-bebas text-white text-[clamp(6rem,20vw,16rem)] leading-none">
          404
        </h1>
        <p className="font-inter text-rmf-muted text-lg mt-4 mb-10">
          This page doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="font-barlow font-semibold uppercase tracking-[2px] text-sm bg-rmf-red text-white px-8 py-3 hover:bg-red-700 transition-colors duration-200 cursor-pointer inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
