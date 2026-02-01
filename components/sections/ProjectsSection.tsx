'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Award } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 gradient-mesh opacity-40" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Premium section header */}
        <motion.div
          className="text-center mb-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 glassmorphism-luxury rounded-full mb-6"
          >
            <Award size={16} className="text-luxury-gold" />
            <span className="text-luxury-gold text-sm font-semibold">Featured Work</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Production Ready{' '}
            <span className="text-gradient-luxury">Applications</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real world SaaS applications built from concept to deployment,
            solving actual business problems at scale
          </motion.p>
        </motion.div>

        {/* Projects grid with luxury styling */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
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
