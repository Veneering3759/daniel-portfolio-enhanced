'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Code2, Globe2, Layers } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.p
            variants={fadeInUp}
            className="text-center text-brand-emerald text-xs font-semibold tracking-widest uppercase mb-4"
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            <span className="text-white">Building with </span>
            <span className="text-gradient-luxury">purpose and clarity</span>
          </motion.h2>

          {/* Content */}
          <div className="space-y-5 text-base text-slate-300 mb-12">
            <motion.p variants={fadeInUp} className="leading-relaxed">
              Self-taught full-stack developer based in London. I came to programming through
              deliberate self-study — Coursera, freeCodeCamp, and building real projects from
              the start. That background means I&apos;m comfortable learning unfamiliar
              systems, reading documentation without hand-holding, and working independently
              through ambiguous problems.
            </motion.p>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              My focus is on backend-connected applications: data-driven dashboards, REST APIs
              with clean data models, and full auth-protected product flows. I try to understand
              the problem before reaching for a framework — choosing MongoDB when a flexible
              schema genuinely helps, using server components when SSR reduces client complexity,
              implementing a design system early when the application is complex enough to need one.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-slate-950/50 rounded-xl border-l-3 border border-slate-800 border-l-brand-emerald"
            >
              <p className="leading-relaxed text-slate-300">
                <span className="text-slate-200 font-medium">Current focus:</span>{' '}
                Stripe integrations, subscription data modeling, and building analytics layers
                on top of payment APIs. Interested in roles where I can work across the full
                stack with clear product context — not just tickets, but an understanding
                of what the feature is actually trying to do.
              </p>
            </motion.div>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              Based in London (GMT), comfortable working with US and EU teams. I&apos;ve managed
              full development cycles independently — from architecture decisions to deployment
              and debugging in production.
            </motion.p>
          </div>

          {/* Stat cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-slate-950/60 rounded-xl border border-slate-800 text-center cursor-default"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-blue-500/10 mb-3">
                <Code2 size={20} className="text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Full Stack</div>
              <div className="text-slate-500 text-sm">Frontend to API to database</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-slate-950/60 rounded-xl border border-brand-emerald/20 text-center cursor-default"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-brand-emerald/10 mb-3">
                <Layers size={20} className="text-brand-emerald" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Architecture</div>
              <div className="text-slate-500 text-sm">Thoughtful about tradeoffs</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="p-5 bg-slate-950/60 rounded-xl border border-slate-800 text-center cursor-default"
            >
              <div className="inline-flex p-2.5 rounded-lg bg-emerald-500/10 mb-3">
                <Globe2 size={20} className="text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Remote</div>
              <div className="text-slate-500 text-sm">London GMT · US/EU welcome</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
