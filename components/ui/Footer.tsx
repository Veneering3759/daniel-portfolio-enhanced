'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer
      className="relative"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()}{' '}
              <span className="text-slate-400">Daniel Aryee Portfolio</span>
            </p>
            <p className="text-slate-600 text-xs mt-0.5">Full-Stack Developer · London, UK</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-5 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
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
                className="hover:text-slate-300 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
