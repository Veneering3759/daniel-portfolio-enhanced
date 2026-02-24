'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { useState } from 'react'

export function FeaturedProjectSection() {
  const project = projects.find((p) => p.flagship)
  const [imgError, setImgError] = useState(false)

  if (!project) return null

  const isInternalCaseStudy = project.caseStudyUrl.startsWith('/')

  return (
    <section className="py-14 relative" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {/* Section label */}
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold tracking-widest uppercase mb-5"
            style={{ color: 'var(--accent)' }}
          >
            Flagship Project
          </motion.p>

          {/* Card */}
          <motion.div
            variants={fadeInUp}
            className="relative rounded-xl overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-raised)',
              border: '1px solid rgba(16,185,129,0.28)',
              boxShadow: '0 0 0 1px rgba(16,185,129,0.08), 0 0 80px rgba(16,185,129,0.10), 0 2px 8px rgba(0,0,0,0.5)',
            }}
          >
            {/* Screenshot with browser chrome mockup, or gradient stripe */}
            {project.image && !imgError ? (
              <div className="relative">
                {/* Browser chrome bar */}
                <div
                  className="flex items-center gap-3 px-4 py-2.5"
                  style={{
                    backgroundColor: '#1a1f2e',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  {/* Traffic light dots */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28CA41' }} />
                  </div>
                  {/* URL bar */}
                  <div
                    className="flex-1 mx-2 px-3 py-1 rounded text-xs truncate"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.35)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(148,163,184,0.7)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {project.liveUrl.replace(/^https?:\/\//, '')}
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover object-top"
                    onError={() => setImgError(true)}
                    priority
                  />
                  <div className="absolute inset-0 bg-slate-950/30" />
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />
                </div>
              </div>
            ) : (
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
            )}

            <div className="p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-8">

                {/* Left: heading + description + CTAs */}
                <div className="flex-1 min-w-0">
                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <span
                      className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium rounded-full border"
                      style={{
                        borderColor: 'rgba(16,185,129,0.2)',
                        backgroundColor: 'rgba(16,185,129,0.08)',
                        color: '#34d399',
                      }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-medium rounded-full border"
                      style={{
                        borderColor: 'rgba(167,139,250,0.25)',
                        backgroundColor: 'rgba(167,139,250,0.08)',
                        color: '#c4b5fd',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" />
                      Flagship
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-1.5">
                    {project.title}
                  </h2>

                  {/* Tagline */}
                  <p
                    className="text-sm font-medium mb-4"
                    style={{ color: 'rgba(52,211,153,0.85)' }}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-7 max-w-2xl"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {project.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-150"
                      style={{ backgroundColor: 'var(--accent)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = '#0EA572')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = 'var(--accent)')
                      }
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>

                    {isInternalCaseStudy && (
                      <Link
                        href={project.caseStudyUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-all duration-150"
                        style={{
                          border: '1px solid rgba(16,185,129,0.3)',
                          color: '#34d399',
                          backgroundColor: 'rgba(16,185,129,0.07)',
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement
                          el.style.backgroundColor = 'rgba(16,185,129,0.12)'
                          el.style.borderColor = 'rgba(16,185,129,0.45)'
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement
                          el.style.backgroundColor = 'rgba(16,185,129,0.07)'
                          el.style.borderColor = 'rgba(16,185,129,0.3)'
                        }}
                      >
                        Case Study
                        <ArrowRight size={13} />
                      </Link>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-md transition-all duration-150"
                      style={{
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'rgba(255,255,255,0.14)'
                        el.style.color = 'var(--text-primary)'
                        el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement
                        el.style.borderColor = 'var(--border)'
                        el.style.color = 'var(--text-secondary)'
                        el.style.backgroundColor = 'transparent'
                      }}
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right: highlights + stack */}
                <div className="md:w-68 lg:w-72 flex-shrink-0">
                  <div
                    className="rounded-lg p-5"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.22)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <p
                      className="text-[10px] font-semibold uppercase tracking-widest mb-3"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      What I built
                    </p>

                    <ul className="space-y-2.5 mb-4">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className="w-1 h-1 rounded-full mt-[7px] flex-shrink-0"
                            style={{ backgroundColor: 'var(--accent)' }}
                          />
                          <span
                            className="text-xs leading-snug"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="pt-3 border-t"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <p
                        className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        Stack
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-1.5 py-0.5 text-[11px] rounded font-medium"
                            style={{
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--border)',
                              color: 'var(--text-secondary)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
