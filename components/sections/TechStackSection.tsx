'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/projects'
import { SkillBadge } from '../ui/SkillBadge'
import { fadeInUp, staggerContainerFast } from '../animations/variants'

export function TechStackSection() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-bg-animated opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Tech Stack
        </motion.h2>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerFast}
            className="glassmorphism rounded-xl p-6 border border-blue-500/20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              Frontend
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.frontend.map((skill) => (
                <SkillBadge key={skill} skill={skill} category="frontend" />
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerFast}
            className="glassmorphism rounded-xl p-6 border border-purple-500/20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Backend
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.backend.map((skill) => (
                <SkillBadge key={skill} skill={skill} category="backend" />
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerFast}
            className="glassmorphism rounded-xl p-6 border border-emerald-500/20"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Tools
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <SkillBadge key={skill} skill={skill} category="tools" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
