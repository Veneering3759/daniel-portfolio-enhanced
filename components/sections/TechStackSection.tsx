'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/projects'
import { SkillBadge } from '../ui/SkillBadge'
import { fadeInUp, staggerContainerFast } from '../animations/variants'

const categories: { key: keyof typeof skills; label: string }[] = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend'  },
  { key: 'tools',    label: 'Tools'    },
]

export function TechStackSection() {
  return (
    <section
      className="py-16 relative"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: 'var(--accent)' }}
          >
            Stack
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tools I ship with
          </h2>
        </motion.div>

        {/* Unified card with three columns */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerFast}
          className="rounded-xl border overflow-hidden"
          style={{
            backgroundColor: 'var(--bg-raised)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
            style={{ '--tw-divide-opacity': '1', borderColor: 'var(--border)' } as React.CSSProperties}
          >
            {categories.map(({ key, label }, idx) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="p-6"
                style={
                  idx < categories.length - 1
                    ? { borderColor: 'var(--border)' }
                    : undefined
                }
              >
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mb-4"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skills[key].map((skill) => (
                    <SkillBadge key={skill} skill={skill} category={key} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust signal footer strip */}
          <div
            className="px-6 py-3 border-t"
            style={{
              backgroundColor: 'rgba(0,0,0,0.18)',
              borderColor: 'var(--border)',
            }}
          >
            <p
              className="text-xs italic text-center"
              style={{ color: 'var(--text-muted)' }}
            >
              Every project ships to production. No localhost demos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
