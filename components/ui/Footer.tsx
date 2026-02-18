'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()}{' '}
              <span className="text-slate-300 font-medium">Daniel Aryee Portfolio</span>
            </p>
            <p className="text-slate-600 text-xs mt-1">Full-Stack Developer · London, UK</p>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 text-sm text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Veneering3759"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daniel-a-869619399/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:tnix9826@tutamail.com"
              className="hover:text-slate-200 transition-colors"
              whileHover={{ y: -2 }}
            >
              Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
