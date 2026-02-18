'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/projects'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="mb-12">
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold text-emerald-500 tracking-widest uppercase mb-3"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-3"
            >
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400">
              Looking for my first full-time developer role to build production applications
            </motion.p>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-4 mb-6"
          >
            {/* Email — spans full width */}
            <motion.a
              href={`mailto:${profile.email}`}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="sm:col-span-2 p-5 rounded-xl border flex items-center gap-4 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div
                className="p-3 rounded-lg flex-shrink-0"
                style={{ backgroundColor: 'var(--accent-dim)', border: '1px solid var(--border-accent)' }}
              >
                <Mail size={20} className="text-emerald-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-white font-medium text-sm truncate group-hover:text-emerald-400 transition-colors duration-150">
                  {profile.email}
                </p>
              </div>
              <span className="text-slate-600 group-hover:text-emerald-500 transition-colors duration-150">→</span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-5 rounded-xl border flex items-center gap-3 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.07]">
                <Github size={18} className="text-slate-400 group-hover:text-slate-200 transition-colors duration-150" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-150">
                  @Veneering3759
                </p>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-5 rounded-xl border flex items-center gap-3 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.07]">
                <Linkedin size={18} className="text-slate-400 group-hover:text-slate-200 transition-colors duration-150" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-150">
                  Daniel Aryee
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Availability banner — static, clean */}
          <motion.div
            variants={fadeInUp}
            className="p-5 rounded-xl border"
            style={{
              backgroundColor: 'var(--bg-raised)',
              borderColor: 'var(--border-accent)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 flex-shrink-0">
                <motion.div
                  className="w-2 h-2 rounded-full bg-emerald-500"
                  animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-emerald-400 text-sm font-medium">Available</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <MapPin size={13} className="text-slate-500 flex-shrink-0" />
                London (GMT) · Open to US/EU remote · Can start immediately
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
