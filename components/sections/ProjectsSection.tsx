'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-surface)' }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold text-emerald-500 tracking-widest uppercase mb-3"
          >
            Featured Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Selected{' '}
            <span className="text-gradient-luxury">Projects</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-slate-400 max-w-xl">
            Full-stack applications built from concept to deployment.
            Each project includes a technical breakdown of the decisions made.
          </motion.p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
