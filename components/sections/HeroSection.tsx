'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Download, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { profile } from '@/lib/projects'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { useRef, useState } from 'react'

export function HeroSection() {
  const containerRef = useRef(null)
  const [imgError, setImgError] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute" style={{ width: 560, height: 560, top: '-8%', left: '-4%', background: 'rgba(16,185,129,0.07)' }} />
        <div className="orb absolute" style={{ width: 420, height: 420, bottom: '-4%', right: '44%', background: 'rgba(99,102,241,0.05)', animationDelay: '4s' }} />
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.3 }} />
      </div>

      {/* ── Left: content ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-center px-7 sm:px-12 lg:px-16 xl:px-24 pt-24 pb-12 w-full lg:w-[56%]"
        style={{ y: textY, opacity }}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >

        {/* Mobile: large photo above text */}
        {!imgError && (
          <motion.div variants={fadeInUp} className="lg:hidden mb-7">
            <div
              className="relative overflow-hidden mx-auto sm:mx-0"
              style={{
                width: 140,
                height: 170,
                borderRadius: 14,
                border: '1px solid rgba(16,185,129,0.28)',
                boxShadow: '0 0 0 4px rgba(16,185,129,0.07), 0 12px 40px rgba(0,0,0,0.5)',
              }}
            >
              <Image src="/profile.jpg" alt="Daniel Aryee" fill className="object-cover object-top" onError={() => setImgError(true)} priority />
            </div>
          </motion.div>
        )}

        {/* Available badge */}
        <motion.div variants={fadeInUp} className="mb-5">
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold"
            style={{ backgroundColor: 'rgba(16,185,129,0.07)', borderColor: 'rgba(16,185,129,0.28)', color: '#34d399' }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Available — Full-Time &amp; Contract
          </span>
        </motion.div>

        {/* Name + title */}
        <motion.div variants={fadeInUp} className="mb-4">
          <h1
            className="font-extrabold text-white leading-none mb-3"
            style={{ fontSize: 'clamp(3rem, 7.5vw, 6rem)', letterSpacing: '-0.035em' }}
          >
            Daniel<br />Aryee
          </h1>
          <div className="flex items-center gap-3">
            <div style={{ width: 36, height: 2, background: 'var(--accent)', borderRadius: 999, opacity: 0.7 }} />
            <p className="text-lg font-semibold" style={{ color: 'var(--accent)' }}>Full Stack Developer</p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-base leading-relaxed mb-6 max-w-md"
          style={{ color: 'var(--text-secondary)' }}
        >
          I build Stripe-connected SaaS products — analytics dashboards,
          subscription flows, and data-driven back-offices. Clean architecture,
          shipped to production.
        </motion.p>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="flex items-stretch gap-6 mb-7">
          {[
            { value: '3',   label: 'Apps Deployed' },
            { value: 'GMT', label: 'London · US/EU' },
            { value: 'Now', label: 'Can Start'      },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex flex-col">
              {i > 0 && <div className="absolute" style={{ display: 'none' }} />}
              <span className="font-extrabold leading-none mb-1 text-white" style={{ fontSize: '1.6rem', letterSpacing: '-0.03em' }}>
                {value}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Primary CTAs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5 mb-6">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-200"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#0EA572'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(16,185,129,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--accent)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
          >
            View My Work
          </a>
          <a
            href="/daniel-aryee-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200"
            style={{ border: '1px solid rgba(16,185,129,0.4)', color: '#34d399', backgroundColor: 'rgba(16,185,129,0.07)' }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(16,185,129,0.14)'; el.style.borderColor = 'rgba(16,185,129,0.6)' }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.backgroundColor = 'rgba(16,185,129,0.07)'; el.style.borderColor = 'rgba(16,185,129,0.4)' }}
          >
            <Download size={13} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-200"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--text-secondary)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social links — clearly labelled */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-2">
          {[
            { Icon: Github,   href: profile.github,              label: 'GitHub',   ext: true  },
            { Icon: Linkedin, href: profile.linkedin,            label: 'LinkedIn', ext: true  },
            { Icon: Mail,     href: `mailto:${profile.email}`,   label: 'Email',    ext: false },
          ].map(({ Icon, href, label, ext }) => (
            <a
              key={label}
              href={href}
              target={ext ? '_blank' : undefined}
              rel={ext ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(16,185,129,0.35)'
                el.style.color = '#34d399'
                el.style.backgroundColor = 'rgba(16,185,129,0.06)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--text-muted)'
                el.style.backgroundColor = 'transparent'
              }}
            >
              <Icon size={13} />
              {label}
            </a>
          ))}

          <span className="h-3 w-px mx-1" style={{ backgroundColor: 'var(--border)' }} />

          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={11} className="text-emerald-600" />
            London, UK
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-12"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a href="#projects" className="inline-flex flex-col items-start gap-1.5">
            <div className="p-1.5 rounded-full border transition-colors duration-150" style={{ borderColor: 'var(--border)' }}>
              <ArrowDown size={12} style={{ color: 'var(--text-muted)' }} />
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* ── Right: large photo — desktop only ── */}
      {!imgError && (
        <motion.div
          className="hidden lg:block absolute right-0 top-0 bottom-0"
          style={{ width: '48%', y: photoY }}
        >
          <Image
            src="/profile.jpg"
            alt="Daniel Aryee"
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
            priority
          />
          {/* Left fade — lighter so face stays clear */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #07090E 0%, rgba(7,9,14,0.55) 18%, rgba(7,9,14,0.08) 42%, transparent 70%)' }}
          />
          {/* Top fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #07090E 0%, transparent 15%)' }} />
          {/* Bottom fade */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #07090E 0%, transparent 22%)' }} />
        </motion.div>
      )}
    </section>
  )
}
