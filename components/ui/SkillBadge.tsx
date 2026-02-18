'use client'

interface SkillBadgeProps {
  skill: string
  category: 'frontend' | 'backend' | 'tools'
}

const categoryStyles = {
  frontend: 'text-blue-300   border-blue-500/15   hover:border-blue-400/30   hover:text-blue-200',
  backend:  'text-violet-300 border-violet-500/15 hover:border-violet-400/30 hover:text-violet-200',
  tools:    'text-emerald-300 border-emerald-500/15 hover:border-emerald-400/30 hover:text-emerald-200',
}

export function SkillBadge({ skill, category }: SkillBadgeProps) {
  return (
    <span
      className={`
        px-3 py-1.5 rounded-full text-xs font-medium border
        transition-colors duration-150 cursor-default
        ${categoryStyles[category]}
      `}
      style={{ backgroundColor: 'var(--bg-input)' }}
    >
      {skill}
    </span>
  )
}
