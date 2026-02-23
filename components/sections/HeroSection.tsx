'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Globe, ArrowDown } from 'lucide-react'
import { profile } from '@/lib/projects'
import { fadeInUp, textContainer, letterReveal, bounce } from '../animations/variants'
import { useRef } from 'react'

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.5, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Single emerald radial glow — top-center, very subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(16,185,129,0.07) 0%, transparent 65%)',
        }}
      />
      {/* Barely-visible grid */}
      <div className="absolute inset-0 grid-pattern" style={{ opacity: 0.5 }} />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-5 text-center"
        style={{ y, opacity }}
        initial="initial"
        animate="animate"
      >
        {/* Availability badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5"
          style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-emerald-400 text-xs font-medium">Available for Full-Time Roles</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          variants={textContainer}
        >
          <div className="mb-1 text-white">
            {profile.name.split('').map((char, i) => (
              <motion.span key={`n${i}`} variants={letterReveal} className="inline-block">
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.span
            className="block text-emerald-400 text-2xl sm:text-3xl md:text-5xl font-semibold"
            variants={fadeInUp}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base mb-5 max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Building full stack applications with Next.js, Node.js, and MongoDB.
          Stripe integrations, auth flows, and data driven dashboards.
        </motion.p>

        {/* Location chips */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 mb-6 flex-wrap"
        >
          {[
            { icon: <MapPin size={12} className="text-emerald-500" />, label: 'London, UK (GMT)' },
            { icon: <Globe   size={12} className="text-slate-500"   />, label: 'US/EU Remote'     },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs"
              style={{
                backgroundColor: 'var(--bg-raised)',
                borderColor: 'var(--border)',
                color: 'var(--text-secondary)',
              }}
            >
              {icon}
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-2 flex-wrap mb-8"
        >
          <a
            href="#projects"
            className="px-5 py-2.5 text-sm font-medium text-white rounded-md transition-colors duration-150"
            style={{ backgroundColor: 'var(--accent)' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0EA572')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
          >
            View Portfolio →
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-150"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
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

        {/* Social icons */}
        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-5 mb-8">
          {[
            { Icon: Github,   href: profile.github },
            { Icon: Linkedin, href: profile.linkedin },
            { Icon: Mail,     href: `mailto:${profile.email}` },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="transition-colors duration-150"
              style={{ color: 'var(--text-muted)' }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.92 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={bounce} animate="animate" className="inline-block">
          <a href="#projects" className="inline-flex flex-col items-center gap-1.5 group">
            <span
              className="text-xs tracking-widest uppercase transition-colors duration-150"
              style={{ color: 'var(--text-muted)' }}
            >
              Scroll
            </span>
            <div
              className="p-1 rounded-full border transition-colors duration-150 group-hover:border-emerald-500/30"
              style={{ borderColor: 'var(--border)' }}
            >
              <ArrowDown size={14} style={{ color: 'var(--text-muted)' }} />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
