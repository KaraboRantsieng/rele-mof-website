'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Facebook, Check, AlertCircle } from 'lucide-react'
import SaMapBackground from '@/components/3d/SaMapBackground'

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.83a4.85 4.85 0 0 1-1.07-.14z" />
    </svg>
  )
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactContent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    try {
      // TODO: Replace YOUR_FORMSPREE_ID with actual Formspree form ID
      const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  return (
    <section ref={ref} className="bg-rmf-black py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Get In Touch</p>
            <h2 className="font-bebas text-white text-[clamp(2.5rem,5vw,4rem)] leading-none mb-6">
              Contact Information
            </h2>
            <div className="w-16 h-1 bg-rmf-red mb-10" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rmf-red flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-sm mb-1">Email</p>
                  <a href="mailto:relebohilemofokengfoundation@gmail.com" className="font-inter text-rmf-muted text-sm hover:text-rmf-red transition-colors duration-200 break-all">
                    relebohilemofokengfoundation@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rmf-red flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-sm mb-1">Deputy Secretary</p>
                  <a href="tel:+27730553826" className="font-inter text-rmf-muted text-sm hover:text-rmf-red transition-colors duration-200">
                    073 055 3826
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rmf-red flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-sm mb-1">Chairperson</p>
                  <a href="tel:+27659703524" className="font-inter text-rmf-muted text-sm hover:text-rmf-red transition-colors duration-200">
                    065 970 3524
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rmf-red flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-sm mb-1">Location</p>
                  <p className="font-inter text-rmf-muted text-sm">Sharpeville, Gauteng, South Africa</p>
                </div>
              </div>
            </div>

            {/* Feature 10 — 3D SA map pin drop */}
            <div className="mt-10">
              <p className="font-barlow font-semibold uppercase tracking-[3px] text-white/30 text-[10px] mb-3">
                Our Location
              </p>
              <SaMapBackground className="w-full max-w-[320px] opacity-90" />
            </div>

            {/* WhatsApp — editorial minimal, brand-consistent */}
            <div className="mt-10 relative group">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-rmf-red" />
              <a
                href="https://wa.me/27661349395"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 pl-6 pr-5 py-5 border border-white/10 hover:border-white/25 transition-colors duration-300 cursor-pointer"
                aria-label="Contact us on WhatsApp"
              >
                <div className="w-11 h-11 border border-white/15 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/70" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-barlow font-semibold uppercase tracking-[3px] text-white text-xs mb-1">WhatsApp Us</p>
                  <p className="font-inter text-white/50 text-sm group-hover:text-white/70 transition-colors duration-300">
                    +27 66 134 9395
                  </p>
                  <p className="font-inter text-white/25 text-xs mt-0.5">Message us directly</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 group-hover:text-white/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </a>
            </div>

            {/* Social — centred */}
            <div className="mt-8 text-center">
              <p className="font-barlow font-semibold uppercase tracking-[3px] text-white text-xs mb-5">Follow Us</p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61572711981738"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 border border-white/15 hover:border-rmf-red hover:text-rmf-red text-rmf-muted flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.tiktok.com/@rele_mofokeng_foundation?_r=1&_t=ZS-96zHRCm0zUS"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-11 h-11 border border-white/15 hover:border-rmf-red hover:text-rmf-red text-rmf-muted flex items-center justify-center transition-all duration-200 cursor-pointer"
                >
                  <TikTokIcon size={18} />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="font-barlow font-semibold uppercase text-rmf-red tracking-[4px] text-sm mb-4">Send A Message</p>
            <h2 className="font-bebas text-white text-[clamp(2.5rem,5vw,4rem)] leading-none mb-6">
              Send Us A Message
            </h2>
            <div className="w-16 h-1 bg-rmf-red mb-10" />

            {status === 'success' ? (
              <div className="border-l-[3px] border-rmf-red bg-white/5 p-8 flex items-start gap-4">
                <Check size={24} className="text-rmf-red shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-barlow font-semibold uppercase tracking-[2px] text-white text-lg">Message Sent!</p>
                  <p className="font-inter text-rmf-muted text-sm mt-2">
                    Thank you for reaching out. We&apos;ll get back to you within 2–3 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs block mb-2">
                    Full Name <span className="text-rmf-red">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.name ? 'border-rmf-red' : 'border-white/20'} text-white font-inter text-sm px-4 py-3 focus:border-rmf-red focus:outline-none transition-colors duration-200 placeholder:text-white/30`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="font-inter text-rmf-red text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs block mb-2">
                    Email Address <span className="text-rmf-red">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.email ? 'border-rmf-red' : 'border-white/20'} text-white font-inter text-sm px-4 py-3 focus:border-rmf-red focus:outline-none transition-colors duration-200 placeholder:text-white/30`}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="font-inter text-rmf-red text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs block mb-2">
                    Subject <span className="text-rmf-red">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.subject ? 'border-rmf-red' : 'border-white/20'} text-white font-inter text-sm px-4 py-3 focus:border-rmf-red focus:outline-none transition-colors duration-200 cursor-pointer appearance-none`}
                    aria-required="true"
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  >
                    <option value="" className="bg-rmf-black">Select a subject</option>
                    <option value="General Enquiry" className="bg-rmf-black">General Enquiry</option>
                    <option value="Donation" className="bg-rmf-black">Donation</option>
                    <option value="Corporate Sponsorship" className="bg-rmf-black">Corporate Sponsorship</option>
                    <option value="Volunteering" className="bg-rmf-black">Volunteering</option>
                    <option value="Media Enquiry" className="bg-rmf-black">Media Enquiry</option>
                    <option value="Other" className="bg-rmf-black">Other</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="font-inter text-rmf-red text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="message" className="font-barlow font-semibold uppercase tracking-[2px] text-white text-xs">
                      Message <span className="text-rmf-red">*</span>
                    </label>
                    <span className="font-inter text-white/30 text-xs">{formData.message.length}/500</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-white/5 border ${errors.message ? 'border-rmf-red' : 'border-white/20'} text-white font-inter text-sm px-4 py-3 focus:border-rmf-red focus:outline-none transition-colors duration-200 resize-none placeholder:text-white/30`}
                    placeholder="Tell us how we can help..."
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="font-inter text-rmf-red text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} aria-hidden="true" /> {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="font-inter text-rmf-red text-sm flex items-center gap-2">
                    <AlertCircle size={16} aria-hidden="true" />
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group font-barlow font-semibold uppercase tracking-[3px] text-sm bg-rmf-red text-white px-10 py-4 hover:bg-white hover:text-rmf-black transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full lg:w-auto inline-flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                        <path d="M7 17L17 7M17 7H7M17 7v10"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
