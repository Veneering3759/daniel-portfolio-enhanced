'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Code2, Globe2, Layers } from 'lucide-react'

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 relative"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />

      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: 'var(--accent)' }}
          >
            About
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-6"
          >
            <span className="text-white">Building with </span>
            <span className="text-gradient-luxury">purpose and clarity</span>
          </motion.h2>

          {/* Body copy */}
          <div
            className="space-y-3 text-sm mb-6 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
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
              className="p-4 rounded-lg border-l-2 text-sm"
              style={{
                backgroundColor: 'var(--bg-raised)',
                borderLeftColor: 'var(--accent)',
                borderRightColor: 'var(--border)',
                borderTopColor: 'var(--border)',
                borderBottomColor: 'var(--border)',
                border: '1px solid var(--border)',
                borderLeft: '2px solid var(--accent)',
              }}
            >
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                Current focus:
              </span>{' '}
              Stripe integrations, subscription data modeling, and building analytics layers
              on top of payment APIs. Interested in roles where I can work across the full
              stack with clear product context.
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {[
              { Icon: Code2,  label: 'Full Stack',   sub: 'Frontend to API to database'  },
              { Icon: Layers, label: 'Architecture',  sub: 'Thoughtful about tradeoffs'   },
              { Icon: Globe2, label: 'Remote',        sub: 'London GMT · US/EU welcome'   },
            ].map(({ Icon, label, sub }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="p-4 rounded-lg border text-center cursor-default"
                style={{
                  backgroundColor: 'var(--bg-raised)',
                  borderColor: 'var(--border)',
                }}
              >
                <div
                  className="inline-flex p-2 rounded-md mb-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  <Icon size={16} style={{ color: 'var(--text-secondary)' }} />
                </div>
                <div className="text-sm font-semibold text-white mb-0.5">{label}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
