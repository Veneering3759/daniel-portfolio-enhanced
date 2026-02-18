'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/projects'
import { SkillBadge } from '../ui/SkillBadge'
import { fadeInUp, staggerContainerFast } from '../animations/variants'

const categories = [
  { key: 'frontend' as const, label: 'Frontend', color: 'text-blue-400',   border: 'border-blue-500/10',    dot: 'bg-blue-400'    },
  { key: 'backend'  as const, label: 'Backend',  color: 'text-violet-400', border: 'border-violet-500/10',  dot: 'bg-violet-400'  },
  { key: 'tools'    as const, label: 'Tools',    color: 'text-emerald-400', border: 'border-emerald-500/10', dot: 'bg-emerald-400' },
]

export function TechStackSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-emerald-500 tracking-widest uppercase mb-3">Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tech Stack</h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {categories.map(({ key, label, color, border, dot }) => (
            <motion.div
              key={key}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerFast}
              className={`rounded-xl p-6 border ${border}`}
              style={{ backgroundColor: 'var(--bg-raised)' }}
            >
              <motion.h3
                variants={fadeInUp}
                className={`text-sm font-semibold ${color} mb-5 flex items-center gap-2 uppercase tracking-wide`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                {label}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
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
