'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Code2, Globe2, Layers } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold text-emerald-500 tracking-widest uppercase mb-3"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            <span className="text-white">Building with </span>
            <span className="text-gradient-luxury">purpose and clarity</span>
          </motion.h2>

          {/* Body */}
          <div className="space-y-4 text-[15px] text-slate-400 mb-10 leading-relaxed">
            <motion.p variants={fadeInUp}>
              Self-taught full-stack developer based in London. I came to programming through
              deliberate self-study — Coursera, freeCodeCamp, and building real projects from
              the start. That background means I&apos;m comfortable learning unfamiliar
              systems, reading documentation without hand-holding, and working independently
              through ambiguous problems.
            </motion.p>

            <motion.p variants={fadeInUp}>
              My focus is on backend-connected applications: data-driven dashboards, REST APIs
              with clean data models, and full auth-protected product flows. I try to understand
              the problem before reaching for a framework — choosing MongoDB when a flexible
              schema genuinely helps, using server components when SSR reduces client complexity,
              implementing a design system early when the application is complex enough to need one.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-4 rounded-lg border-l-2 border-emerald-500/40"
              style={{ backgroundColor: 'var(--bg-raised)', borderRightColor: 'var(--border)' }}
            >
              <p>
                <span className="text-slate-200 font-medium">Current focus:</span>{' '}
                Stripe integrations, subscription data modeling, and building analytics layers
                on top of payment APIs. Interested in roles where I can work across the full
                stack with clear product context.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp}>
              Based in London (GMT), comfortable working with US and EU teams. I&apos;ve managed
              full development cycles independently — from architecture decisions to deployment
              and debugging in production.
            </motion.p>
          </div>

          {/* Stat cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { Icon: Code2,   color: 'text-blue-400',    label: 'Full Stack',   sub: 'Frontend to API to database' },
              { Icon: Layers,  color: 'text-emerald-400', label: 'Architecture', sub: 'Thoughtful about tradeoffs'  },
              { Icon: Globe2,  color: 'text-slate-400',   label: 'Remote',       sub: 'London GMT · US/EU welcome'  },
            ].map(({ Icon, color, label, sub }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="p-5 rounded-xl border text-center cursor-default transition-colors duration-150"
                style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
              >
                <div className={`inline-flex p-2 rounded-lg mb-3 ${color} bg-current/10`}
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <Icon size={18} className={color} />
                </div>
                <div className="text-base font-semibold text-white mb-1">{label}</div>
                <div className="text-xs text-slate-500">{sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
