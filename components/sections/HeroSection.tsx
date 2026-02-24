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
  const textY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const photoY  = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex"
    >
      {/* ── Ambient background orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Emerald orb — upper left */}
        <div
          className="orb absolute"
          style={{
            width: 600,
            height: 600,
            top: '-10%',
            left: '-5%',
            background: 'rgba(16,185,129,0.07)',
          }}
        />
        {/* Indigo orb — lower right */}
        <div
          className="orb absolute"
          style={{
            width: 500,
            height: 500,
            bottom: '-5%',
            right: '42%',
            background: 'rgba(99,102,241,0.05)',
            animationDelay: '4s',
          }}
        />
        {/* Subtle grid */}
        <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.35 }} />
      </div>

      {/* ── Left: Text content ── */}
      <motion.div
        className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-20 xl:px-28 pt-24 pb-16 w-full lg:w-[58%]"
        style={{ y: textY, opacity }}
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Mobile photo — shown only on small screens */}
        {!imgError && (
          <motion.div variants={fadeInUp} className="lg:hidden flex justify-start mb-8">
            <div
              className="relative overflow-hidden"
              style={{
                width: 100,
                height: 100,
                borderRadius: '50%',
                border: '2px solid rgba(16,185,129,0.3)',
                boxShadow: '0 0 32px rgba(16,185,129,0.15)',
              }}
            >
              <Image
                src="/profile.jpg"
                alt="Daniel Aryee"
                fill
                className="object-cover object-top"
                onError={() => setImgError(true)}
                priority
              />
            </div>
          </motion.div>
        )}

        {/* Availability badge */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: 'rgba(16,185,129,0.07)',
              borderColor: 'rgba(16,185,129,0.25)',
            }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-emerald-400 text-xs font-semibold tracking-wide">
              Available — Full-Time &amp; Contract
            </span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={fadeInUp} className="mb-5">
          <h1
            className="font-extrabold tracking-tight text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', letterSpacing: '-0.03em' }}
          >
            Daniel<br />Aryee
          </h1>
          <p
            className="mt-3 text-xl sm:text-2xl font-semibold"
            style={{ color: 'var(--accent)' }}
          >
            Full Stack Developer
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeInUp}
          className="mb-6"
          style={{ width: 48, height: 2, background: 'var(--accent)', borderRadius: 999, opacity: 0.6 }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg"
          style={{ color: 'var(--text-secondary)' }}
        >
          I build Stripe-connected SaaS products — analytics dashboards,
          subscription flows, and data-driven back-offices. Clean architecture,
          shipped to production.
        </motion.p>

        {/* Stats row — anchoring psychology */}
        <motion.div variants={fadeInUp} className="flex items-center gap-8 mb-10">
          {[
            { value: '3',   label: 'Apps Deployed' },
            { value: 'GMT', label: 'London · US/EU' },
            { value: 'Now', label: 'Can Start' },
          ].map(({ value, label }, i) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-extrabold leading-none mb-1"
                style={{
                  fontSize: '1.75rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}
              >
                {value}
              </span>
              <span
                className="text-[11px] font-medium uppercase tracking-widest"
                style={{ color: 'var(--text-muted)' }}
              >
                {label}
              </span>
              {i < 2 && (
                <div
                  className="absolute"
                  style={{ display: 'none' }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeInUp} className="flex items-center gap-3 flex-wrap mb-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl transition-all duration-200"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#0EA572'
              e.currentTarget.style.boxShadow = '0 4px 24px rgba(16,185,129,0.35)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--accent)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'none'
            }}
          >
            View My Work
          </a>
          <a
            href="/daniel-aryee-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200"
            style={{
              border: '1px solid rgba(16,185,129,0.35)',
              color: '#34d399',
              backgroundColor: 'rgba(16,185,129,0.07)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'rgba(16,185,129,0.13)'
              el.style.borderColor = 'rgba(16,185,129,0.5)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.backgroundColor = 'rgba(16,185,129,0.07)'
              el.style.borderColor = 'rgba(16,185,129,0.35)'
            }}
          >
            <Download size={14} />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-secondary)'
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social + location */}
        <motion.div variants={fadeInUp} className="flex items-center gap-5">
          {[
            { Icon: Github,   href: profile.github,                    label: 'GitHub'   },
            { Icon: Linkedin, href: profile.linkedin,                  label: 'LinkedIn' },
            { Icon: Mail,     href: `mailto:${profile.email}`,         label: 'Email'    },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="transition-colors duration-150"
              style={{ color: 'var(--text-muted)' }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#34d399')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icon size={18} />
            </motion.a>
          ))}

          <span
            className="h-4 w-px mx-1"
            style={{ backgroundColor: 'var(--border)' }}
          />

          <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
            <MapPin size={11} className="text-emerald-600" />
            London, UK
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="mt-16"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a
            href="#projects"
            className="inline-flex flex-col items-start gap-2 group"
          >
            <div
              className="p-1.5 rounded-full border transition-colors duration-150"
              style={{ borderColor: 'var(--border)' }}
            >
              <ArrowDown size={13} style={{ color: 'var(--text-muted)' }} />
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* ── Right: Large Photo (desktop only) ── */}
      {!imgError && (
        <motion.div
          className="hidden lg:block absolute right-0 top-0 bottom-0"
          style={{ width: '46%', y: photoY }}
        >
          <Image
            src="/profile.jpg"
            alt="Daniel Aryee"
            fill
            className="object-cover object-top"
            onError={() => setImgError(true)}
            priority
          />
          {/* Left edge fade — blends photo into background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #07090E 0%, rgba(7,9,14,0.6) 25%, rgba(7,9,14,0.1) 55%, transparent 100%)',
            }}
          />
          {/* Top edge fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #07090E 0%, transparent 18%)',
            }}
          />
          {/* Bottom edge fade */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to top, #07090E 0%, transparent 28%)',
            }}
          />
          {/* Subtle emerald colour grade on photo */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(16,185,129,0.03)' }}
          />
        </motion.div>
      )}
    </section>
  )
}
