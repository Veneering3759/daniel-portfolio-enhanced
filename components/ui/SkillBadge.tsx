'use client'

import { motion } from 'framer-motion'
import { badgeAnimation } from '../animations/variants'
import { LucideIcon } from 'lucide-react'

interface SkillBadgeProps {
  skill: string
  category: 'frontend' | 'backend' | 'tools'
  icon?: LucideIcon
}

const categoryColors = {
  frontend: {
    bg: 'from-blue-600/20 to-cyan-600/20',
    border: 'border-blue-500/30',
    text: 'text-blue-300',
    glow: '0 0 20px rgba(59, 130, 246, 0.4)',
  },
  backend: {
    bg: 'from-purple-600/20 to-pink-600/20',
    border: 'border-purple-500/30',
    text: 'text-purple-300',
    glow: '0 0 20px rgba(168, 85, 247, 0.4)',
  },
  tools: {
    bg: 'from-emerald-600/20 to-teal-600/20',
    border: 'border-emerald-500/30',
    text: 'text-emerald-300',
    glow: '0 0 20px rgba(16, 185, 129, 0.4)',
  },
}

export function SkillBadge({ skill, category, icon: Icon }: SkillBadgeProps) {
  const colors = categoryColors[category]

  return (
    <motion.div
      variants={badgeAnimation}
      whileHover="hover"
      className={`
        relative px-4 py-2 rounded-full
        bg-gradient-to-r ${colors.bg}
        border ${colors.border}
        backdrop-blur-sm
        cursor-default
        group
      `}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: colors.glow,
        }}
      />

      {/* Content */}
      <div className="relative flex items-center gap-2">
        {Icon && (
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Icon size={16} className={colors.text} />
          </motion.div>
        )}
        <span className={`text-sm font-medium ${colors.text}`}>{skill}</span>
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </motion.div>
  )
}
