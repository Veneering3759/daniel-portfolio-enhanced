'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  const isInternalCaseStudy = project.caseStudyUrl.startsWith('/')

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="relative group h-full"
    >
      {/* Card */}
      <div
        className="h-full flex flex-col rounded-xl overflow-hidden border transition-all duration-200"
        style={{
          backgroundColor: 'var(--bg-raised)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {/* Header gradient strip */}
        <div className={`relative h-28 flex-shrink-0 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-slate-950/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Flagship badge */}
          {project.flagship && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-950/80 border border-violet-500/30 text-violet-300 text-xs font-medium rounded-full backdrop-blur-sm">
                <span className="w-1 h-1 rounded-full bg-violet-400 inline-block" />
                Flagship
              </span>
            </div>
          )}

          {/* Category label */}
          <div className="absolute bottom-3 left-3">
            <span className="text-xs text-white/60 font-medium">{project.id}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            {/* Title + tagline */}
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-150">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-3 uppercase tracking-wide">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1.5 mb-5">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500/60 mt-1.5 flex-shrink-0" />
                  <span className="text-xs text-slate-400 leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs rounded font-medium"
                  style={{
                    backgroundColor: 'var(--bg-input)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div
            className="flex items-center gap-2 pt-4 border-t mt-auto"
            style={{ borderColor: 'var(--border)' }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded-md transition-colors duration-150"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0EA572')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              <ExternalLink size={12} />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150"
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              <Github size={12} />
              Code
            </a>

            {isInternalCaseStudy ? (
              <Link
                href={project.caseStudyUrl}
                className="ml-auto text-xs text-emerald-500 hover:text-emerald-400 font-medium transition-colors duration-150 inline-flex items-center gap-1"
              >
                Case Study →
              </Link>
            ) : (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs font-medium transition-colors duration-150 inline-flex items-center gap-1"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
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
