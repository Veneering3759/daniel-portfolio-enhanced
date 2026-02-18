'use client'

interface SkillBadgeProps {
  skill: string
  category: 'frontend' | 'backend' | 'tools'
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className="inline-block px-2.5 py-1 text-[11px] font-medium rounded border transition-colors duration-150 cursor-default"
      style={{
        backgroundColor: 'rgba(255,255,255,0.04)',
        borderColor: 'var(--border)',
        color: 'var(--text-secondary)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'
        e.currentTarget.style.color = 'var(--text-primary)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.color = 'var(--text-secondary)'
      }}
    >
      {skill}
    </span>
  )
}
