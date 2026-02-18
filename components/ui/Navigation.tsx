'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0D1117]/95 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold text-white hover:text-emerald-400 transition-colors duration-150"
          >
            Daniel Aryee
          </Link>

          <div className="flex items-center gap-7">
            {[
              { label: 'Projects', href: '/#projects' },
              { label: 'About',    href: '/#about' },
              { label: 'Contact',  href: '/#contact' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-150 font-medium relative group"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
