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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80'
          : 'bg-slate-950/60 backdrop-blur-xl border-b border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Daniel Aryee
          </Link>

          <div className="flex items-center gap-8">
            <motion.a
              href="/#projects"
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="/#about"
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
            <motion.a
              href="/#contact"
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium relative group"
              whileHover={{ y: -2 }}
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
