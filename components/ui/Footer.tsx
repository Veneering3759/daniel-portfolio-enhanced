'use client'

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              © {new Date().getFullYear()}{' '}
              <span style={{ color: 'var(--text-primary)' }}>Daniel Aryee Portfolio</span>
            </p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
              Full Stack Developer · London, UK
            </p>
          </div>

          <div className="flex items-center gap-5 text-xs" style={{ color: 'var(--text-muted)' }}>
            {[
              { label: 'GitHub',   href: 'https://github.com/Veneering3759' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-a-869619399/' },
              { label: 'Email',    href: 'mailto:tnix9826@tutamail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="transition-colors duration-150"
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
