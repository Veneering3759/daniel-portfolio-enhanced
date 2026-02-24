'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { fadeInUp } from '../animations/variants'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    tagline: string
    description: string
    highlights: string[]
    tech: string[]
    image?: string
    liveUrl: string
    githubUrl: string
    caseStudyUrl: string
    gradient: string
    flagship?: boolean
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInternal = project.caseStudyUrl.startsWith('/')
  const [imgError, setImgError] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.18, ease: 'easeOut' } }}
      className="h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="h-full flex flex-col rounded-xl overflow-hidden border transition-all duration-200"
        style={{
          backgroundColor: 'var(--bg-raised)',
          borderColor: hovered ? 'rgba(16,185,129,0.15)' : 'var(--border)',
          boxShadow: hovered
            ? '0 0 0 1px rgba(16,185,129,0.2), 0 8px 32px rgba(0,0,0,0.45), 0 2px 8px rgba(16,185,129,0.08)'
            : 'var(--shadow-card)',
        }}
      >
        {/* Screenshot or gradient header */}
        <div
          className={`relative flex-shrink-0 overflow-hidden ${project.image && !imgError ? 'h-48' : 'h-14'} bg-gradient-to-br ${project.gradient}`}
        >
          {project.image && !imgError ? (
            <>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover object-top"
                onError={() => setImgError(true)}
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/20 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-slate-950/55" />
          )}

          {project.flagship && (
            <div className="absolute top-2.5 left-3">
              <span
                className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-medium rounded-full border"
                style={{
                  backgroundColor: 'rgba(13,17,23,0.85)',
                  borderColor: 'rgba(167,139,250,0.3)',
                  color: '#c4b5fd',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-violet-400 inline-block" />
                Flagship
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            {/* Title + category */}
            <h3 className="text-base font-bold text-white mb-0.5">
              {project.title}
            </h3>
            <p
              className="text-[11px] font-medium uppercase tracking-wide mb-3"
              style={{ color: 'var(--text-muted)' }}
            >
              {project.tagline}
            </p>

            {/* Description */}
            <p
              className="text-sm mb-3 leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-1 mb-3">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                  <span className="text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] rounded font-medium"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div
            className="flex items-center gap-2 pt-3 mt-auto border-t"
            style={{ borderColor: 'var(--border)' }}
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-white rounded transition-colors duration-150"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0EA572')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              <ExternalLink size={11} />
              Live Demo
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium rounded transition-all duration-150"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                backgroundColor: 'transparent',
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
              <Github size={11} />
              Code
            </a>

            {isInternal ? (
              <Link
                href={project.caseStudyUrl}
                className="ml-auto text-[11px] font-medium transition-colors duration-150"
                style={{ color: 'var(--accent)' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Case Study →
              </Link>
            ) : (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[11px] font-medium transition-colors duration-150"
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
