'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Target, Code2, Globe2 } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-emerald to-transparent opacity-60" />

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
            <span className="text-white">From Bodyguard to </span>
            <span className="text-gradient-luxury">Full Stack Developer</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brand-emerald text-sm font-semibold mb-12"
          >
            Self Taught • Problem Solver • Remote Ready
          </motion.p>

          {/* Content paragraphs with premium styling */}
          <div className="space-y-6 text-lg text-slate-300 mb-12">
            <motion.p variants={fadeInUp} className="leading-relaxed">
              I've always loved computers. As a kid, I was constantly taking things apart,
              trying to understand how and why they worked. That curiosity stayed with me
              through my career as a personal trainer and bodyguard, but it wasn't until
              a car crash left me unable to do the physical work I used to that I discovered
              my true calling.
            </motion.p>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              While searching for a new direction, only programming genuinely interested me.
              I dove into the Full Stack Coursera course and freeCodeCamp study material, and
              I immediately fell in love with the problem solving, the creative expression,
              and the ability to build solutions that help real businesses. I haven't looked back since.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="p-6 luxury-card rounded-xl border-l-4 border-brand-emerald"
            >
              <div className="flex items-start gap-3">
                <Target size={24} className="text-brand-emerald flex-shrink-0 mt-1" />
                <div>
                  <p className="leading-relaxed">
                    <span className="text-brand-emerald font-semibold">
                      My approach to development:
                    </span>{' '}
                    Every technical decision I make considers the problem I'm solving, not just
                    the code I'm writing. I choose MongoDB when I need flexible schemas for rapid
                    iteration. I implement fuzzy matching algorithms when accuracy matters more than
                    speed. I build reusable component systems when scalability is the priority.
                    It's about understanding the "why" behind every choice.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} className="leading-relaxed">
              Based in London but built for remote work. I've managed full development cycles
              independently, from initial architecture decisions to deployment and monitoring.
              My applications handle real world data at scale, from processing 5,000+ leads in
              under 30 seconds to managing complex event planning workflows. Comfortable working
              across US and EU time zones.
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
              className="p-6 luxury-card rounded-xl text-center border-2 border-brand-emerald/30 group cursor-default"
            >
              <motion.div
                className="inline-flex p-3 rounded-full bg-brand-emerald/10 mb-3 group-hover:bg-brand-emerald/20 transition-colors"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <Target size={24} className="text-brand-emerald" />
              </motion.div>
              <div className="text-4xl font-bold text-brand-emerald mb-2">
                Full Stack
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
