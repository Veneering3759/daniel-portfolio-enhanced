'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Target, Code2, Globe2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            <span className="text-white">Building Software That </span>
            <span className="text-gradient-luxury">Ships</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-luxury-gold text-sm font-semibold mb-12"
          >
            Product Minded • Full Stack • Remote Ready
          </motion.p>

          {/* Content paragraphs with premium styling */}
          <div className="space-y-6 text-lg text-slate-300 mb-12">
            <motion.p variants={fadeInUp} className="leading-relaxed">
              I'm a full stack developer focused on creating production ready
              SaaS applications. My work spans the entire stack, from designing
              responsive React interfaces to architecting Node.js backends that
              handle real world data at scale.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-6 luxury-card rounded-xl border-l-4 border-luxury-gold"
            >
              <div className="flex items-start gap-3">
                <Target size={24} className="text-luxury-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="leading-relaxed">
                    <span className="text-luxury-gold font-semibold">
                      What sets me apart:
                    </span>{' '}
                    I think like a product owner. Every technical decision I make
                    considers user experience, business impact, and long term
                    maintainability.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              Based in London but built for remote work. I've managed full
              development cycles independently, documented my code for team
              collaboration, and deployed applications that real businesses use
              daily. Comfortable working across US and EU time zones.
            </motion.p>
          </div>

          {/* Premium stats cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 luxury-card rounded-xl text-center group cursor-default"
            >
              <motion.div
                className="inline-flex p-3 rounded-full bg-blue-500/10 mb-3 group-hover:bg-blue-500/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code2 size={24} className="text-blue-400" />
              </motion.div>
              <div className="text-4xl font-bold text-gradient-luxury mb-2">2+</div>
              <div className="text-slate-400 text-sm">Production Apps</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 luxury-card rounded-xl text-center border-2 border-luxury-gold/30 group cursor-default"
            >
              <motion.div
                className="inline-flex p-3 rounded-full bg-luxury-gold/10 mb-3 group-hover:bg-luxury-gold/20 transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Target size={24} className="text-luxury-gold" />
              </motion.div>
              <div className="text-4xl font-bold text-luxury-gold mb-2">
                Full-Stack
              </div>
              <div className="text-slate-400 text-sm">Development Expertise</div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 luxury-card rounded-xl text-center group cursor-default"
            >
              <motion.div
                className="inline-flex p-3 rounded-full bg-emerald-500/10 mb-3 group-hover:bg-emerald-500/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Globe2 size={24} className="text-emerald-400" />
              </motion.div>
              <div className="text-4xl font-bold text-gradient-luxury mb-2">
                100%
              </div>
              <div className="text-slate-400 text-sm">Remote Ready</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
