import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LeadManager CRM — Case Study | Daniel Aryee Portfolio',
  description:
    'Technical breakdown of LeadManager CRM: a full stack pipeline tracking platform built with React, Node.js, Express, and MongoDB.',
}

export default function LeadManagerCaseStudy() {
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/[0.08] text-blue-400 text-[11px] font-medium mb-4">
            Backend &amp; System Design
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">LeadManager CRM</h1>
          <p className="text-sm leading-relaxed mb-5 text-slate-400">
            A full stack CRM for tracking leads and managing sales pipelines — built for
            consultants and service businesses that need organised pipeline management without
            enterprise overhead.
          </p>

          {/* Action links */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <a
              href="https://crm-dashboard-navy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-blue-600 hover:bg-blue-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/leadmanager-crm"
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
            {['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API'].map((tech) => (
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
              LeadManager CRM is a pipeline tracking application that lets consultants and
              small service businesses manage their sales process without the complexity and
              cost of tools like Salesforce or HubSpot. Users create leads, move them through
              pipeline stages, and get a clear view of where every deal stands.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              The project was an exercise in RESTful API design, MongoDB data modelling, and
              building a frontend that gives immediate feedback for operations that are
              inherently asynchronous.
            </p>
          </Section>

          <Section num="02" title="The Problem">
            <p className="text-sm leading-relaxed text-slate-400">
              Most CRM tools are built for sales teams with rigid stage definitions and
              mandatory fields that don&apos;t match how independent consultants actually work.
              A web designer tracking five proposals doesn&apos;t need Salesforce — they need
              something lightweight that maps to their actual workflow.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              The data model problem is equally real: different businesses need different lead
              fields. A rigid SQL schema would require migrations every time a client wanted
              custom fields, slowing iteration significantly.
            </p>
          </Section>

          <Section num="03" title="API Design">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The backend is a RESTful Express API with four main resource routes:
            </p>
            <ul className="space-y-2.5 mb-3">
              {[
                { route: 'GET /api/leads',        desc: 'Returns all leads, sorted by createdAt desc. Supports ?status= filter.'           },
                { route: 'POST /api/leads',       desc: 'Creates a lead. Mongoose validates required fields before writing.'                },
                { route: 'PATCH /api/leads/:id',  desc: 'Partial update — pipeline status changes, field edits. Returns the updated doc.'  },
                { route: 'DELETE /api/leads/:id', desc: 'Hard delete. No soft delete was warranted at this scale.'                         },
              ].map(({ route, desc }) => (
                <li key={route} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <Code>{route}</Code>: {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400">
              All routes return consistent JSON shapes. Errors include a <Code>message</Code>{' '}
              field so the frontend can surface meaningful feedback without parsing HTTP status
              codes alone.
            </p>
          </Section>

          <Section num="04" title="Data Modelling with Mongoose">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              MongoDB was chosen for its flexible document model. Stripe webhook payloads and
              custom lead fields vary significantly — a relational schema would require frequent
              migrations as the field set evolved.
            </p>
            <SubHeading>Lead schema</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The core schema enforces the fields every lead needs — name, contact, value,
              status — while allowing additional properties through a{' '}
              <Code>customFields</Code> mixed type. This gives flexibility without abandoning
              validation entirely.
            </p>
            <SubHeading>Indexing strategy</SubHeading>
            <ul className="space-y-2">
              {[
                { field: 'status',    reason: 'Most common filter — listing leads by pipeline stage' },
                { field: 'createdAt', reason: 'Default sort order for the lead list view'            },
              ].map(({ field, reason }) => (
                <li key={field} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <Code>{field}</Code>: {reason}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400 mt-3">
              The compound index on <Code>(status, createdAt)</Code> covers the most frequent
              query pattern — filtered list views sorted by date — and keeps API responses under
              100ms even as the lead count grows.
            </p>
          </Section>

          <Section num="05" title="Optimistic UI Updates">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Pipeline status changes feel instant in the UI because updates are applied
              optimistically: the frontend state updates immediately on user action, and the
              API call happens in the background. If the request fails, the UI rolls back to the
              previous state and shows an error.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              This pattern matters for drag-and-drop stage changes where a noticeable delay
              makes the interface feel broken. The tradeoff is complexity around failure
              states — the rollback logic has to be explicit, not an afterthought.
            </p>
          </Section>

          <Section num="06" title="Validation Strategy">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Validation happens at two layers deliberately:
            </p>
            <ul className="space-y-2.5">
              {[
                {
                  layer: 'Frontend',
                  detail: 'Required field checks before submitting. Prevents obviously invalid requests from hitting the API and gives immediate feedback.',
                },
                {
                  layer: 'Mongoose schema',
                  detail: 'The schema declares required fields and type constraints. Any request that bypasses the frontend (direct API calls, testing tools) still hits the same validation layer.',
                },
              ].map(({ layer, detail }) => (
                <li key={layer} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-blue-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{layer}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400 mt-3">
              The lesson here was that flexible databases don&apos;t mean skipping validation —
              they just move it to the application layer, where it still needs to be
              intentional.
            </p>
          </Section>

          <Section num="07" title="Tradeoffs Made">
            <div className="space-y-3">
              {[
                {
                  decision: 'MongoDB over PostgreSQL',
                  reasoning: 'The flexible schema was the deciding factor. Lead field requirements vary by business type, and document storage handles this without migrations. A relational schema would have needed a JSON column or EAV pattern anyway.',
                },
                {
                  decision: 'No authentication in v1',
                  reasoning: 'The initial build focused on the data model and API design. Auth would be the next layer — JWT-protected routes with user-scoped lead visibility. The API route structure was designed to make this addition clean.',
                },
                {
                  decision: 'Hard delete over soft delete',
                  reasoning: 'At this scale, soft delete adds complexity (filtering deleted records from all queries) for a benefit that only matters when you need recovery. A simple archive flag would be the right next step.',
                },
                {
                  decision: 'Optimistic updates without a library',
                  reasoning: 'React Query or SWR would handle this pattern cleanly. Building it manually was intentional — understanding the pattern before abstracting it.',
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
                'JWT authentication with user-scoped lead visibility — the API route structure is ready for it.',
                'React Query for server state management — cleaner than manual optimistic update logic.',
                'Activity log per lead: timestamped status changes and notes, stored as a subdocument array.',
                'CSV export for lead lists — useful for reporting without a full analytics layer.',
                'Email integration: send follow-up reminders when a lead has been in a stage too long.',
                'Unit tests for the Express route handlers using supertest and an in-memory MongoDB instance.',
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
              href="https://crm-dashboard-navy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-blue-600 hover:bg-blue-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/leadmanager-crm"
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
      className="text-[11px] px-1.5 py-0.5 rounded font-mono text-blue-400"
      style={{ backgroundColor: 'var(--bg-raised)', border: '1px solid var(--border)' }}
    >
      {children}
    </code>
  )
}
