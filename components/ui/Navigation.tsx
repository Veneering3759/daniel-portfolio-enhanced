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
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const [scrollPct,   setScrollPct]   = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 50)
      setScrollPct(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 640) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {/* Scroll progress bar — thin emerald line at very top */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollPct}%` }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#07090E]/92 backdrop-blur-2xl border-b border-white/[0.06]'
            : 'bg-transparent border-b border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide transition-colors duration-150"
              style={{ color: 'var(--text-primary)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              DA
              <span className="ml-2 text-[10px] font-normal tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                Full Stack Dev
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden sm:flex items-center gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-medium tracking-wide uppercase transition-colors duration-150 relative group"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 group-hover:w-full transition-all duration-200" />
                </a>
              ))}

              <a
                href="/daniel-aryee-cv.pdf"
                download
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-150"
                style={{
                  border: '1px solid rgba(16,185,129,0.35)',
                  color: '#34d399',
                  backgroundColor: 'rgba(16,185,129,0.07)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'rgba(16,185,129,0.14)'
                  el.style.borderColor = 'rgba(16,185,129,0.55)'
                  el.style.boxShadow = '0 0 16px rgba(16,185,129,0.15)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.backgroundColor = 'rgba(16,185,129,0.07)'
                  el.style.borderColor = 'rgba(16,185,129,0.35)'
                  el.style.boxShadow = 'none'
                }}
              >
                <Download size={11} />
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="sm:hidden p-1.5 rounded-md transition-colors duration-150"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileOpen(o => !o)}
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
              <div className="px-6 py-5 flex flex-col gap-5">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm font-medium tracking-wide"
                    style={{ color: 'var(--text-secondary)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="/daniel-aryee-cv.pdf"
                  download
                  className="inline-flex items-center gap-2 text-sm font-semibold"
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
