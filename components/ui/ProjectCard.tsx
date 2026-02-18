'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { fadeInUp } from '../animations/variants'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    tagline: string
    description: string
    highlights: string[]
    tech: string[]
    liveUrl: string
    githubUrl: string
    caseStudyUrl: string
    gradient: string
    flagship?: boolean
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / (rect.width / 2))
    y.set((e.clientY - centerY) / (rect.height / 2))
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const isInternalCaseStudy = project.caseStudyUrl.startsWith('/')

  return (
    <motion.div
      ref={cardRef}
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
      className="relative group h-full"
    >
      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-px bg-gradient-to-br from-slate-600 via-slate-500 to-slate-600 rounded-2xl" />

      {/* Card content */}
      <div className="relative luxury-card rounded-2xl overflow-hidden shadow-card h-full flex flex-col">

        {/* Header gradient */}
        <div className="relative h-36 overflow-hidden flex-shrink-0">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            animate={{ opacity: isHovered ? 0.55 : 0.35 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Flagship badge */}
          {project.flagship && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950/80 border border-violet-500/40 text-violet-300 text-xs font-medium rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                Flagship Project
              </span>
            </div>
          )}

          {/* Live indicator */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 glassmorphism-luxury rounded-full"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-2 h-2 bg-brand-emerald rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-brand-emerald text-xs font-semibold">Live</span>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          <div className="flex-1">
            <h3
              className="text-xl font-bold mb-1.5 transition-colors duration-300"
              style={{ color: isHovered ? undefined : 'white' }}
            >
              {isHovered ? (
                <span className="text-gradient-luxury">{project.title}</span>
              ) : project.title}
            </h3>

            <p className="text-slate-400 text-xs font-medium mb-3 uppercase tracking-wide">{project.tagline}</p>
            <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.description}</p>

            {/* Highlights */}
            <div className="space-y-2 mb-5">
              {project.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                  <p className="text-slate-400 text-sm leading-snug">{highlight}</p>
                </div>
              ))}
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons — pinned to bottom */}
          <div className="flex gap-3 items-center pt-4 border-t border-slate-800 mt-auto">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={13} />
              Live Demo
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 transition-colors"
              whileTap={{ scale: 0.97 }}
            >
              <Github size={13} />
              Code
            </motion.a>

            {isInternalCaseStudy ? (
              <Link href={project.caseStudyUrl} className="ml-auto text-brand-emerald text-sm font-medium hover:text-brand-emerald/80 transition-colors inline-flex items-center gap-1">
                Case Study →
              </Link>
            ) : (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-slate-500 text-sm font-medium hover:text-slate-400 transition-colors inline-flex items-center gap-1"
              >
                View Live →
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
