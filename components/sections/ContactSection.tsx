'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/projects'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-luxury-gold/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Premium header */}
          <motion.div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 glassmorphism-luxury rounded-full mb-6"
            >
              <Sparkles size={16} className="text-luxury-gold" />
              <span className="text-luxury-gold text-sm font-semibold">Let's Collaborate</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span className="text-white">Ready to Build </span>
              <span className="text-gradient-luxury">Something Amazing?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 max-w-2xl mx-auto"
            >
              Open for exciting opportunities and challenging projects
            </motion.p>
          </motion.div>

          {/* Premium contact cards */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-10"
          >
            {/* Email card - Featured */}
            <motion.a
              href={`mailto:${profile.email}`}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 p-8 luxury-card rounded-xl group cursor-pointer border-2 border-luxury-gold/30 hover:border-luxury-gold/60 transition-all relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className="p-4 rounded-xl bg-luxury-gold/10 group-hover:bg-luxury-gold/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail size={28} className="text-luxury-gold" />
                </motion.div>
                <div className="flex-1">
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold text-lg group-hover:text-luxury-gold transition-colors">
                    {profile.email}
                  </p>
                </div>
                <motion.div
                  className="text-luxury-gold"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className="p-6 luxury-card rounded-xl group cursor-pointer hover:border-blue-400/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Github size={20} className="text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-slate-500 text-xs">GitHub</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    @Veneering3759
                  </p>
                </div>
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{
                y: -6,
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className="p-6 luxury-card rounded-xl group cursor-pointer hover:border-blue-400/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin size={20} className="text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-slate-500 text-xs">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    Daniel Aryee
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 luxury-card rounded-xl border-2 border-luxury-gold/20"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-luxury-gold/10">
                  <MapPin size={20} className="text-luxury-gold" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Location</p>
                  <p className="text-white font-medium">London, UK (GMT)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Premium availability banner */}
          <motion.div
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-luxury-gold/20 to-purple-600/20 animate-gradient-shift" />
            <motion.div
              className="relative p-8 glassmorphism-luxury border-2 border-luxury-gold/30 rounded-2xl text-center"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 mb-3"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="w-3 h-3 bg-luxury-gold rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      '0 0 0 0 rgba(212, 175, 55, 0.7)',
                      '0 0 0 10px rgba(212, 175, 55, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <span className="text-luxury-gold font-semibold text-sm">
                  Currently Available
                </span>
              </motion.div>
              <p className="text-slate-200 text-lg">
                <span className="text-gradient-luxury font-semibold">
                  Open for elite opportunities
                </span>
                {' '}— Based in London, flexible with US/EU time zones. Ready to make an immediate impact on your next project.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
