'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/projects'
import { fadeInUp, staggerContainer } from '../animations/variants'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [name, setName]       = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body    = encodeURIComponent(`Hi Daniel,\n\n${message}\n\nBest,\n${name}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section
      id="contact"
      className="py-16 relative"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(to right, transparent, var(--border), transparent)' }} />

      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div className="mb-8">
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold tracking-widest uppercase mb-2"
              style={{ color: 'var(--accent)' }}
            >
              Contact
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold text-white mb-2"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              Open to full-time roles and project-based contracts building production-grade applications
            </motion.p>
          </motion.div>

          {/* Contact form */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="rounded-lg border p-5 mb-4"
            style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <div className="flex-1">
                <label
                  htmlFor="contact-name"
                  className="block text-[11px] font-medium mb-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 py-2 text-sm rounded-md outline-none transition-colors duration-150 placeholder:text-slate-600"
                  style={{
                    backgroundColor: 'var(--bg-base)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-medium mb-1.5"
                style={{ color: 'var(--text-muted)' }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Tell me about the role or project..."
                className="w-full px-3 py-2 text-sm rounded-md outline-none resize-none transition-colors duration-150 placeholder:text-slate-600"
                style={{
                  backgroundColor: 'var(--bg-base)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-primary)',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md transition-colors duration-150"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0EA572')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'var(--accent)')}
            >
              <Send size={13} />
              {sent ? 'Opening your email client…' : 'Send Message'}
            </button>
          </motion.form>

          {/* Contact cards */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-3 mb-4"
          >
            {/* Email — full width */}
            <motion.a
              href={`mailto:${profile.email}`}
              variants={fadeInUp}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="sm:col-span-2 p-4 rounded-lg border flex items-center gap-3 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div
                className="p-2.5 rounded-md flex-shrink-0"
                style={{
                  backgroundColor: 'var(--accent-dim)',
                  border: '1px solid var(--border-accent)',
                }}
              >
                <Mail size={16} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] mb-0.5" style={{ color: 'var(--text-muted)' }}>Email</p>
                <p
                  className="font-medium text-sm truncate transition-colors duration-150 group-hover:text-emerald-400"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {profile.email}
                </p>
              </div>
              <span
                className="text-sm transition-colors duration-150 group-hover:text-emerald-500"
                style={{ color: 'var(--text-muted)' }}
              >
                →
              </span>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-4 rounded-lg border flex items-center gap-3 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div
                className="p-2 rounded-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}
              >
                <Github size={15} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: 'var(--text-muted)' }}>GitHub</p>
                <p
                  className="text-sm font-medium transition-colors duration-150 group-hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
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
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-4 rounded-lg border flex items-center gap-3 group transition-colors duration-150"
              style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
            >
              <div
                className="p-2 rounded-md"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}
              >
                <Linkedin size={15} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <div>
                <p className="text-[11px] mb-0.5" style={{ color: 'var(--text-muted)' }}>LinkedIn</p>
                <p
                  className="text-sm font-medium transition-colors duration-150 group-hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Daniel Aryee
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Availability pill */}
          <motion.div
            variants={fadeInUp}
            className="p-4 rounded-lg border flex items-center gap-3 flex-wrap"
            style={{
              backgroundColor: 'var(--bg-raised)',
              borderColor: 'var(--border-accent)',
            }}
          >
            <div className="flex items-center gap-2">
              <motion.span
                className="w-2 h-2 rounded-full bg-emerald-500 inline-block"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="text-xs font-medium text-emerald-400">Available</span>
            </div>
            <div className="w-px h-3.5" style={{ backgroundColor: 'var(--border)' }} />
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
              <MapPin size={11} style={{ color: 'var(--text-muted)' }} />
              London GMT · US/EU remote · Full-time &amp; contract · Can start immediately
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
