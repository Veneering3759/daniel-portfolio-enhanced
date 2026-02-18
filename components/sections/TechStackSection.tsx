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
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />

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
          <h2 className="text-2xl md:text-3xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {categories.map(({ key, label }) => (
            <motion.div
              key={key}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerFast}
              className="rounded-lg p-5 border"
              style={{
                backgroundColor: 'var(--bg-raised)',
                borderColor: 'var(--border)',
              }}
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold uppercase tracking-wide mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {label}
              </motion.p>
              <div className="flex flex-wrap gap-1.5">
                {skills[key].map((skill) => (
                  <SkillBadge key={skill} skill={skill} category={key} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
