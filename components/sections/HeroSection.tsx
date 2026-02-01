'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Globe, ArrowDown, Sparkles } from 'lucide-react'
import { profile } from '@/lib/projects'
import {
  fadeIn,
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

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Luxury gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 gradient-bg-animated" />

      {/* Radial glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-rose/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Premium floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-brand-rose/40 w-1.5 h-1.5' :
              i % 3 === 1 ? 'bg-brand-emerald/40 w-1 h-1' :
              'bg-brand-pink/30 w-0.5 h-0.5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Static gradient orbs - no spinning */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(244, 63, 94, 0.2))',
          filter: 'blur(40px)',
          y,
          opacity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(244, 63, 94, 0.3))',
          filter: 'blur(40px)',
          y,
          opacity,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full opacity-15"
        style={{
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.2), rgba(16, 185, 129, 0.2))',
          filter: 'blur(30px)',
          y,
          opacity,
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        style={{ y, opacity }}
        initial="initial"
        animate="animate"
      >
        {/* Status badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-5 py-2.5 glassmorphism-luxury rounded-full mb-8 shadow-luxury"
        >
          <motion.div
            className="w-2 h-2 bg-brand-emerald rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <span className="text-gradient-gold font-semibold text-sm">Available for Full-Time Roles</span>
        </motion.div>

        {/* Name with premium styling */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
          variants={textContainer}
        >
          <div className="mb-2">
            {profile.name.split('').map((char, i) => (
              <motion.span
                key={`name-${i}`}
                variants={letterReveal}
                className="inline-block"
                style={{
                  textShadow: '0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(244, 63, 94, 0.3)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </div>
          <motion.span
            className="block text-gradient-luxury text-5xl md:text-7xl"
            variants={fadeInUp}
            style={{
              textShadow: '0 0 60px rgba(16, 185, 129, 0.4)',
            }}
          >
            Full Stack Developer
          </motion.span>
        </motion.h1>

        {/* Premium tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(16, 185, 129, 0.8), rgba(255, 255, 255, 0.95))',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 4s linear infinite',
          }}
        >
          Building full-stack web applications with React, Node.js, and MongoDB.
          From fitness tracking to CRM systems, I create tools that solve real problems for real users.
        </motion.p>

        {/* Location badges with modern styling */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 text-sm mb-10 flex-wrap"
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 glassmorphism-luxury rounded-full"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
          >
            <MapPin size={16} className="text-brand-emerald" />
            <span className="text-slate-200 font-medium">London, UK (GMT)</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 glassmorphism-luxury rounded-full"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(244, 63, 94, 0.3)' }}
          >
            <Globe size={16} className="text-brand-rose" />
            <span className="text-slate-200 font-medium">US/EU Remote Welcome</span>
          </motion.div>
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-4 flex-wrap mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative px-10 py-4 rounded-xl font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-emerald-dark via-brand-emerald to-brand-teal" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-rose via-brand-emerald to-brand-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              View Portfolio
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-10 py-4 glassmorphism-luxury rounded-xl font-semibold text-white border-2 border-brand-rose/30 hover:border-brand-rose/60 transition-all"
            whileHover={{
              y: -3,
              boxShadow: '0 10px 40px rgba(244, 63, 94, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social icons with modern styling */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center justify-center gap-6 mb-20"
        >
          {[
            { Icon: Github, href: profile.github, color: 'emerald' },
            { Icon: Linkedin, href: profile.linkedin, color: 'rose' },
            { Icon: Mail, href: `mailto:${profile.email}`, color: 'teal' },
          ].map(({ Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 glassmorphism-luxury rounded-full hover:bg-white/10 transition-all"
              whileHover={{
                y: -8,
                scale: 1.2,
                boxShadow: color === 'rose'
                  ? '0 0 30px rgba(244, 63, 94, 0.6)'
                  : color === 'emerald'
                  ? '0 0 30px rgba(16, 185, 129, 0.6)'
                  : '0 0 30px rgba(20, 184, 166, 0.6)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={22} className={
                color === 'rose' ? 'text-brand-rose' :
                color === 'emerald' ? 'text-brand-emerald' :
                'text-brand-teal'
              } />
            </motion.a>
          ))}
        </motion.div>

        {/* Elegant scroll indicator */}
        <motion.div variants={bounce} animate="animate" className="inline-block">
          <motion.a
            href="#projects"
            className="inline-flex flex-col items-center gap-3 group"
            whileHover={{ y: 8 }}
          >
            <span className="text-sm text-slate-400 group-hover:text-brand-emerald transition-colors font-medium">
              View My Work
            </span>
            <motion.div
              className="p-2 glassmorphism-luxury rounded-full"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(16, 185, 129, 0.4)',
                  '0 0 0 10px rgba(16, 185, 129, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={20} className="text-brand-emerald" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
