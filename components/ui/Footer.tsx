'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Animated gradient divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Daniel Aryee. All rights reserved.
          </motion.p>

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
              className="hover:text-blue-400 transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/daniel-a-869619399/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:tnix9826@tutamail.com"
              className="hover:text-blue-400 transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
            >
              Email
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
