'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About',    href: '/#about'    },
  { label: 'Contact',  href: '/#contact'  },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 640) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || mobileOpen
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

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-slate-400 hover:text-slate-100 transition-colors duration-150 font-medium relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}

              <a
                href="/daniel-aryee-cv.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-150"
                style={{
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#34d399',
                  backgroundColor: 'rgba(16,185,129,0.07)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'rgba(16,185,129,0.13)'
                  el.style.borderColor = 'rgba(16,185,129,0.55)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'rgba(16,185,129,0.07)'
                  el.style.borderColor = 'rgba(16,185,129,0.35)'
                }}
              >
                <Download size={12} />
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden p-1.5 rounded-md transition-colors duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden border-t"
              style={{ borderColor: 'var(--border)' }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="/daniel-aryee-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#34d399' }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
