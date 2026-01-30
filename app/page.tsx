'use client';

import { projects, profile, skills } from '@/lib/projects';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            Open to Remote Opportunities
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">Daniel Aryee</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Building production-ready SaaS applications that solve real business problems.
            Specialized in React, Node.js, and scalable MongoDB architectures.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-10 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              <span>London, UK (GMT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-purple-400" />
              <span>US/EU Remote Welcome</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-xl font-semibold transition-all">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-xl font-semibold transition-all">
              Get In Touch
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={'mailto:' + profile.email} className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-slate-400">Production applications built end-to-end</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className={'h-48 bg-gradient-to-br ' + project.gradient + ' opacity-20'}></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-400 text-sm mb-4">{project.tagline}</p>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <div className="space-y-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <p key={i} className="text-slate-400 text-sm">• {h}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Live Demo</a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm">Code</a>
                    <Link href={project.caseStudyUrl} className="ml-auto text-blue-400 text-sm pt-2">Case Study →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Tech Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
              {skills.frontend.map((s) => <p key={s} className="text-slate-300 mb-2">{s}</p>)}
            </div>
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Backend</h3>
              {skills.backend.map((s) => <p key={s} className="text-slate-300 mb-2">{s}</p>)}
            </div>
            <div className="bg-slate-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Tools</h3>
              {skills.tools.map((s) => <p key={s} className="text-slate-300 mb-2">{s}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Building Software That Ships</h2>
          <div className="space-y-6 text-lg text-slate-300">
            <p>I'm a full-stack developer focused on creating production-ready SaaS applications. My work spans the entire stack—from designing responsive React interfaces to architecting Node.js backends that handle real-world data at scale.</p>
            <p>What sets me apart: I think like a product owner. Every technical decision I make considers user experience, business impact, and long-term maintainability.</p>
            <p>Based in London but built for remote work. I've managed full development cycles independently, documented my code for team collaboration, and deployed applications that real businesses use daily. Comfortable working across US and EU time zones.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Lets Build Something</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href={'mailto:' + profile.email} className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50">
              <p className="text-slate-500 text-sm">Email</p>
              <p className="text-white font-medium">{profile.email}</p>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50">
              <p className="text-slate-500 text-sm">GitHub</p>
              <p className="text-white font-medium">@Veneering3759</p>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-6 bg-slate-900 rounded-xl border border-slate-800 hover:border-blue-500/50">
              <p className="text-slate-500 text-sm">LinkedIn</p>
              <p className="text-white font-medium">Daniel Aryee</p>
            </a>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <p className="text-slate-500 text-sm">Location</p>
              <p className="text-white font-medium">London, UK (GMT)</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-blue-950/30 rounded-xl border border-blue-500/20 text-center">
            <p className="text-slate-300"><span className="text-blue-400 font-semibold">Available for remote work</span> — Based in London, flexible with US/EU time zones.</p>
          </div>
        </div>
      </section>
    </div>
  );
}