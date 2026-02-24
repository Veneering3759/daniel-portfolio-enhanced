import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Evently — Case Study | Daniel Aryee Portfolio',
  description:
    'Technical breakdown of Evently: a multi-module event planning application demonstrating component architecture, design systems, and responsive layout with Next.js and Framer Motion.',
}

export default function EventlyCaseStudy() {
  return (
    <main className="min-h-screen pt-20 pb-16" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-2xl mx-auto px-5">

        {/* Back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 group transition-colors duration-150"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-150" />
          Back to portfolio
        </Link>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/[0.08] text-indigo-400 text-[11px] font-medium mb-4">
            Frontend &amp; Component Architecture
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Evently</h1>
          <p className="text-sm leading-relaxed mb-5 text-slate-400">
            A multi-module event planning application covering weddings, parties, and corporate
            occasions. The project was a deliberate exercise in component architecture and
            design systems — making six integrated modules feel like one coherent product.
          </p>

          {/* Action links */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <a
              href="https://daniel-planner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-indigo-600 hover:bg-indigo-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/daniel-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded text-slate-400 hover:text-slate-200 hover:border-white/[0.14] transition-all duration-150"
              style={{ border: '1px solid var(--border)' }}
            >
              <Github size={11} />
              GitHub
            </a>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5">
            {['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] rounded text-slate-400"
                style={{ backgroundColor: 'var(--bg-raised)', border: '1px solid var(--border)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="mb-8" style={{ borderTop: '1px solid var(--border)' }} />

        {/* Content */}
        <div className="space-y-8">

          <Section num="01" title="Overview">
            <p className="text-sm leading-relaxed text-slate-400">
              Evently is a client-side event planning application with six distinct modules:
              Dashboard, Timeline, Guests, Budget, Vendors, and Notes. Each module handles a
              different workflow — RSVP tracking, budget monitoring, vendor coordination, task
              checklists — but they share the same component library and design language.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              The core challenge wasn&apos;t building individual features — it was making six
              separate concerns feel like one cohesive product rather than six apps duct-taped
              together. This is where the design system work paid off.
            </p>
          </Section>

          <Section num="02" title="Why a Design System First">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Early in the build, I was writing one-off styles for each feature. By the second
              module, the inconsistency was obvious: different button sizes, mismatched spacing,
              animation timings that didn&apos;t feel related. I stopped and established a design
              system before continuing.
            </p>
            <SubHeading>Token decisions</SubHeading>
            <ul className="space-y-2.5 mb-3">
              {[
                { token: 'Colour',    detail: 'Indigo as the primary action colour, coral as the accent for guest and deadline states. Both defined as CSS custom properties so they can be updated in one place.' },
                { token: 'Spacing',   detail: 'Tailwind\'s default spacing scale used consistently. No arbitrary values except where a specific pixel measurement was needed for icon alignment.' },
                { token: 'Animation', detail: 'All Framer Motion transitions use the same duration (0.2s) and easing curve (easeOut). Hover states lift by 2-4px. This gives the interface a consistent feel across modules.' },
                { token: 'Typography', detail: 'Two sizes for body text (sm for content, xs for metadata). One weight for headings (font-bold), one for labels (font-medium). No more, no less.' },
              ].map(({ token, detail }) => (
                <li key={token} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{token}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400">
              The result was that adding the fifth and sixth modules was significantly faster than
              the first two — the component library handled the common patterns and I could focus
              on module-specific logic.
            </p>
          </Section>

          <Section num="03" title="Component Architecture">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Each module is a page component that composes shared primitives — cards, badges,
              tables, modal overlays — rather than implementing its own UI from scratch. The
              shared component layer has three levels:
            </p>
            <ul className="space-y-2.5 mb-3">
              {[
                { level: 'Primitives',  desc: 'Buttons, badges, inputs, modals. Stateless, style-only. Accept className and variant props.' },
                { level: 'Composites', desc: 'Cards with headers, tables with sorting, form groups with labels. Built from primitives.' },
                { level: 'Modules',    desc: 'Page-level components (GuestList, BudgetTracker). Compose composites and contain business logic.' },
              ].map(({ level, desc }) => (
                <li key={level} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{level}:</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400">
              TypeScript enforced prop contracts at each layer. This caught several bugs at
              compile time that would have been runtime errors — particularly around optional
              vs. required props in composite components.
            </p>
          </Section>

          <Section num="04" title="Mobile-First Responsive Layout">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Every component was designed for small screens first, then enhanced with Tailwind
              breakpoints for tablet and desktop. This matters practically: wedding planners and
              event coordinators use their phones as much as laptops.
            </p>
            <SubHeading>Key layout decisions</SubHeading>
            <ul className="space-y-2.5">
              {[
                'Navigation collapses to a bottom tab bar on mobile — keeps it thumb-reachable without a hamburger menu.',
                'Data tables shift to card-list layouts below the md breakpoint. Each row becomes a card with its fields stacked vertically.',
                'Budget and timeline views use horizontal scroll containers on small screens rather than forcing the data to wrap in ways that lose meaning.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="05" title="Framer Motion — Strategic Animation">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Framer Motion was used selectively, not universally. The rule: animate things that
              enter, exit, or change state in a way the user initiated. Don&apos;t animate for
              decoration.
            </p>
            <ul className="space-y-2.5">
              {[
                { pattern: 'List entry',   detail: 'New guests, budget items, and tasks animate in with a 200ms fade + 8px upward translate. Gives spatial context to additions.' },
                { pattern: 'Modal open/close', detail: 'Backdrop fades in. Modal scales from 0.95 to 1. Feels more grounded than a simple opacity toggle.' },
                { pattern: 'Hover states', detail: 'Cards lift 2-4px on hover. Consistent across all modules — visual affordance that something is interactive.' },
                { pattern: 'Page transitions', detail: 'Between modules, content fades out then fades in. Keeps the SPA feel without a jarring cut.' },
              ].map(({ pattern, detail }) => (
                <li key={pattern} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{pattern}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="06" title="TypeScript Discipline">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The codebase is fully typed — no <Code>any</Code> escapes, no{' '}
              <Code>as unknown as X</Code> casts. Key type decisions:
            </p>
            <ul className="space-y-2.5">
              {[
                { point: 'Discriminated unions for guest status', detail: "type GuestStatus = 'invited' | 'confirmed' | 'declined'. TypeScript catches unhandled states in switch blocks." },
                { point: 'Strict component prop interfaces',      detail: "Every component declares its prop interface explicitly. Required vs. optional is always intentional." },
                { point: 'Readonly arrays where mutation is unintended', detail: "Prevented accidental in-place sorts that would have mutated displayed data without triggering re-renders." },
              ].map(({ point, detail }) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-indigo-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{point}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="07" title="Tradeoffs Made">
            <div className="space-y-3">
              {[
                {
                  decision: 'Client-side state only (no backend)',
                  reasoning: 'All data lives in React state and is lost on refresh. This was a deliberate scope constraint — the goal was architecture and component quality, not persistence. Adding a backend (Next.js API routes + a database) would be the natural next step.',
                },
                {
                  decision: 'No state management library',
                  reasoning: 'Props and React context handled the shared state at this complexity level. At larger scale, Zustand or Jotai would reduce prop-drilling. The module structure makes adding this clean.',
                },
                {
                  decision: 'Custom animation variants over a UI library',
                  reasoning: 'Using Framer Motion directly instead of a component library meant more code but full control over the animation system. Worth the tradeoff when the design system is the point of the project.',
                },
              ].map(({ decision, reasoning }) => (
                <div
                  key={decision}
                  className="p-4 rounded-lg border"
                  style={{ backgroundColor: 'var(--bg-raised)', borderColor: 'var(--border)' }}
                >
                  <h3 className="text-sm font-semibold text-slate-200 mb-1.5">{decision}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{reasoning}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section num="08" title="What I Would Build Next">
            <ul className="space-y-2">
              {[
                'Persistent backend: Next.js API routes + MongoDB to save event data across sessions.',
                'Multi-event support: a dashboard for managing several events simultaneously.',
                'Collaborative editing: real-time updates when multiple users edit the same event (WebSockets or polling).',
                'Email reminders for guests with RSVP links — triggered by the timeline module.',
                'PDF export for the full event plan — useful for sharing with vendors and venues.',
                'Drag-and-drop timeline reordering using Framer Motion\'s drag gesture API.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-slate-700 mt-[7px] flex-shrink-0" />
                  <span className="text-xs leading-relaxed text-slate-500">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

        </div>

        {/* Footer nav */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <Link
            href="/#projects"
            className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors duration-150"
          >
            ← Back to all projects
          </Link>
          <div className="flex gap-2">
            <a
              href="https://daniel-planner.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-indigo-600 hover:bg-indigo-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/daniel-planner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded text-slate-400 hover:text-slate-200 transition-colors duration-150"
              style={{ border: '1px solid var(--border)' }}
            >
              <Github size={11} />
              GitHub
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}

/* ── Sub-components ───────────────────────────────────────────────────────── */
function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <span className="text-[10px] font-mono tracking-widest uppercase text-slate-600">{num}</span>
      <h2 className="text-base font-bold text-white mt-1 mb-3">{title}</h2>
      {children}
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 mt-4 mb-2">
      {children}
    </p>
  )
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      className="text-[11px] px-1.5 py-0.5 rounded font-mono text-indigo-400"
      style={{ backgroundColor: 'var(--bg-raised)', border: '1px solid var(--border)' }}
    >
      {children}
    </code>
  )
}
