'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { fadeInUp, staggerContainer } from '../animations/variants'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 relative"
      style={{ backgroundColor: 'var(--bg-surface)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />

      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: 'var(--accent)' }}
          >
            Featured Work
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-white mb-2"
          >
            Selected{' '}
            <span className="text-gradient-luxury">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-sm max-w-lg"
            style={{ color: 'var(--text-secondary)' }}
          >
            Full stack applications built from concept to deployment, each with a technical breakdown.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.05 }}
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
