'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Globe, ArrowDown } from 'lucide-react'
import { profile } from '@/lib/projects'
import {
  fadeInUp,
  textContainer,
  letterReveal,
  bounce,
} from '../animations/variants'
import { useRef } from 'react'

export function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.6, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Single soft radial glow — emerald, top-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Very faint grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        style={{ y, opacity }}
        initial="initial"
        animate="animate"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-white/[0.07] rounded-full mb-8"
        >
          <motion.div
            className="w-2 h-2 bg-emerald-500 rounded-full"
            animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-emerald-400 font-medium text-sm">Available for Full-Time Roles</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-5 tracking-tight"
          variants={textContainer}
        >
          <div className="mb-2 text-white">
            {profile.name.split('').map((char, i) => (
              <motion.span
                key={`name-${i}`}
                variants={letterReveal}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.span
            className="block text-emerald-400 text-4xl sm:text-5xl md:text-7xl"
            variants={fadeInUp}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-slate-400"
        >
          Building full-stack applications with Next.js, Node.js, and MongoDB.
          Stripe integrations, auth flows, and data-driven dashboards — from architecture to deployment.
        </motion.p>

        {/* Location badges */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-3 text-sm mb-8 flex-wrap"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-white/[0.07] rounded-full">
            <MapPin size={14} className="text-emerald-500" />
            <span className="text-slate-300 text-sm">London, UK (GMT)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-white/[0.07] rounded-full">
            <Globe size={14} className="text-slate-400" />
            <span className="text-slate-300 text-sm">US/EU Remote Welcome</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-3 flex-wrap mb-10"
        >
          <a
            href="#projects"
            className="px-7 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-colors duration-150"
          >
            View Portfolio →
          </a>
          <a
            href="#contact"
            className="px-7 py-3 bg-transparent border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.03] text-slate-300 text-sm font-medium rounded-lg transition-all duration-150"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 mb-16"
        >
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
              className="p-2.5 text-slate-500 hover:text-slate-200 transition-colors duration-150"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={bounce} animate="animate" className="inline-block">
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 group"
          >
            <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-150 tracking-wide uppercase">
              Scroll
            </span>
            <div className="p-1.5 border border-white/[0.08] rounded-full group-hover:border-emerald-500/30 transition-colors duration-200">
              <ArrowDown size={16} className="text-slate-600 group-hover:text-emerald-500 transition-colors duration-200" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
