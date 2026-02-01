'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { fadeInUp } from '../animations/variants'
import { ExternalLink, Github, Sparkles } from 'lucide-react'

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
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Mouse position for 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
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
        y: -16,
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      {/* Luxury animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, #3B82F6, #D4AF37, #8B5CF6, #3B82F6)',
          backgroundSize: '300% 300%',
          padding: '2px',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%',
        }}
        transition={{
          duration: 4,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full rounded-2xl bg-slate-950" />
      </motion.div>

      {/* Card content */}
      <div className="relative luxury-card rounded-2xl overflow-hidden shadow-luxury group-hover:shadow-luxury-hover transition-shadow duration-500">
        {/* Premium gradient header with gold accent */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            animate={{
              opacity: isHovered ? 0.5 : 0.3,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Gold shimmer overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(212, 175, 55, 0.3) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%',
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Floating sparkle */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: isHovered ? [0.5, 1, 0.5] : 0,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles size={24} className="text-luxury-gold" />
          </motion.div>
        </div>

        {/* Content with premium styling */}
        <div className="p-8">
          {/* Title with luxury gradient */}
          <motion.h3
            className="text-2xl font-bold mb-2 group-hover:text-gradient-luxury transition-all duration-300"
            style={{
              color: isHovered ? undefined : 'white',
            }}
          >
            {project.title}
          </motion.h3>

          <p className="text-gradient-gold text-sm mb-4 font-semibold">{project.tagline}</p>
          <p className="text-slate-300 text-sm mb-5 leading-relaxed">{project.description}</p>

          {/* Highlights with gold bullets */}
          <div className="space-y-2.5 mb-5">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-1.5 flex-shrink-0"
                  whileHover={{ scale: 1.5, boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)' }}
                />
                <p className="text-slate-400 text-sm flex-1">{highlight}</p>
              </motion.div>
            ))}
          </div>

          {/* Premium tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 glassmorphism-luxury text-slate-200 text-xs rounded-full border border-luxury-gold/20 font-medium"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  borderColor: 'rgba(212, 175, 55, 0.5)',
                  boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
                }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Luxury action buttons */}
          <div className="flex gap-3 items-center">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg text-sm font-semibold relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"
              />
              <span className="relative z-10">Live Demo</span>
              <ExternalLink size={14} className="relative z-10" />
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 glassmorphism-luxury text-white rounded-lg text-sm font-semibold border border-luxury-gold/20 hover:border-luxury-gold/50"
              whileHover={{
                y: -3,
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={14} />
              Code
            </motion.a>

            <Link href={project.caseStudyUrl} passHref>
              <motion.span
                className="ml-auto text-luxury-gold text-sm font-semibold cursor-pointer inline-flex items-center gap-1 hover:gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Case Study
                <motion.span
                  animate={{
                    x: isHovered ? [0, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                  }}
                >
                  →
                </motion.span>
              </motion.span>
            </Link>
          </div>
        </div>

        {/* Luxury corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-luxury-gold/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}
