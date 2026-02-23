import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revenue Intel — Case Study | Daniel Aryee Portfolio',
  description:
    'Technical breakdown of Revenue Intel: a Stripe analytics platform with AI support chat, built with Next.js, MongoDB, OpenAI API, and NextAuth.js.',
}

export default function RevenueIntelCaseStudy() {
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
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] text-emerald-400 text-[11px] font-medium mb-4">
            SaaS / Stripe Analytics Platform
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Revenue Intel</h1>
          <p className="text-sm leading-relaxed mb-5 text-slate-400">
            A Stripe analytics dashboard that surfaces subscription churn signals,
            checkout drop off, and pricing inefficiencies — with an AI support chat
            that understands the page context the user is viewing.
          </p>

          {/* Action links */}
          <div className="flex items-center gap-2 flex-wrap mb-5">
            <a
              href="https://revenue-intel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-emerald-600 hover:bg-emerald-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/revenue-intel"
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
            {[
              'Next.js (App Router)',
              'TypeScript',
              'Stripe SDK',
              'OpenAI API',
              'MongoDB',
              'NextAuth.js',
              'Tailwind CSS',
            ].map((tech) => (
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
              Revenue Intel is a subscription analytics platform built to give SaaS operators
              clearer visibility into their Stripe data. Rather than context switching between
              Stripe&apos;s native dashboard, spreadsheets, and third party tools, operators
              get one focused view — churn risk signals, checkout funnel performance,
              MRR trends, and pricing tier analysis.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              The platform ships with a demo dashboard preloaded with realistic SaaS subscription
              data, demo mode guards that isolate test state from production, and an AI support
              chat that adapts its context to whichever page the user is viewing.
            </p>
          </Section>

          <Section num="02" title="The Problem">
            <p className="text-sm leading-relaxed text-slate-400">
              Stripe&apos;s dashboard is built for operators, not analysts. It surfaces individual
              transactions well but makes it difficult to see patterns across the subscriber base:
              which pricing tier has the highest churn rate, where users drop off during checkout,
              which plan they downgrade to before cancelling.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mt-2">
              The data to answer these questions is all in Stripe — it just isn&apos;t surfaced in
              one place. Revenue Intel pulls it together by consuming Stripe&apos;s webhook stream
              and storing derived metrics in a queryable local database.
            </p>
          </Section>

          <Section num="03" title="Architecture Design">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The system has three layers:
            </p>
            <ul className="space-y-2 mb-3">
              {[
                'Stripe (source of truth): subscription events flow out via webhooks',
                'Next.js API routes: webhook handler, Stripe proxy routes, OpenAI chat proxy, auth middleware',
                'MongoDB: event log, derived subscription metrics, session store',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400">
              Next.js App Router was chosen for its server component model — initial dashboard loads fetch
              from MongoDB directly in server components. Interactive filters and charts are client
              components that receive initial data as props. NextAuth.js session middleware blocks all{' '}
              <Code>/dashboard/*</Code> routes at the edge before the page component renders.
            </p>
          </Section>

          <Section num="04" title="AI Support Chat">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The AI chat widget is powered by OpenAI&apos;s GPT-4o and surfaces as a floating button
              on every dashboard page. Its defining feature is route aware context: the system prompt
              changes based on which page the user is viewing.
            </p>
            <SubHeading>Route aware context prompts</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              When a user opens the chat on the Churn Analysis page, the system prompt includes a
              description of the churn metrics visible on that page. On the Funnel page, it shifts
              context to checkout drop off and conversion rate concepts. This keeps responses
              grounded and reduces hallucination about unrelated features.
            </p>
            <SubHeading>Server side proxy</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              All OpenAI API calls are routed through <Code>POST /api/chat</Code> — a Next.js API
              route that reads the OpenAI secret key from server only env vars and forwards the
              request. The key never appears in the client bundle. The route also enforces a
              per session message cap to prevent runaway token usage.
            </p>
            <SubHeading>Demo mode guards</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400">
              When the app is running in demo mode, the chat widget is restricted to a curated set
              of prompt topics. It cannot be used to query live customer data or trigger Stripe
              operations. This boundary is enforced server side: the API route checks a{' '}
              <Code>DEMO_MODE</Code> flag before processing requests that touch real data.
            </p>
          </Section>

          <Section num="05" title="Stripe Integration Approach">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              The Stripe Node SDK lives exclusively in server side code. The secret key is read from
              environment variables server side and never exposed to the client bundle.
            </p>
            <SubHeading>Webhook Handler</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400 mb-2">
              Incoming webhooks hit <Code>POST /api/webhooks/stripe</Code>. The raw body is
              passed to <Code>stripe.webhooks.constructEvent()</Code> with the{' '}
              <Code>Stripe-Signature</Code> header. Invalid signatures return 400 immediately.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              Events handled:{' '}
              {[
                'customer.subscription.created',
                'customer.subscription.deleted',
                'invoice.payment_failed',
                'checkout.session.completed',
                'customer.subscription.updated',
              ].map((e, i, arr) => (
                <span key={e}>
                  <Code>{e}</Code>{i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <SubHeading>Billing Portal</SubHeading>
            <p className="text-sm leading-relaxed text-slate-400">
              Surfaced through a server action that creates a portal session and returns the URL
              to the client — keeps the customer ID server side.
            </p>
          </Section>

          <Section num="06" title="Data Modeling Decisions">
            <p className="text-sm leading-relaxed text-slate-400 mb-3">
              MongoDB was chosen for its flexible document model — Stripe webhook payloads vary
              significantly by event type.
            </p>
            <SubHeading>Collections</SubHeading>
            <ul className="space-y-2 mb-3">
              {[
                { name: 'stripe_events',     desc: 'Raw webhook payloads. Stripe event ID as _id for deduplication. TTL index expires after 90 days.' },
                { name: 'subscriptions',     desc: 'Derived subscription state. Upserted on each relevant webhook. Tracks plan, status, customer ID, timestamps.' },
                { name: 'checkout_sessions', desc: 'Completed and abandoned session data for funnel analysis.' },
              ].map(({ name, desc }) => (
                <li key={name} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <Code>{name}</Code>: {desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed text-slate-400">
              Compound index on <Code>(customerId, createdAt)</Code> covers the most common
              query pattern: fetching a customer&apos;s subscription history in order.
            </p>
          </Section>

          <Section num="07" title="Security Considerations">
            <ul className="space-y-3">
              {[
                { point: 'Secret isolation',               detail: "Stripe and OpenAI secret keys are server only env vars. Next.js's build process never includes them in the client bundle." },
                { point: 'Webhook signature verification',  detail: 'Every inbound webhook is verified with stripe.webhooks.constructEvent() before any processing. Invalid signatures return 400.' },
                { point: 'Route protection',               detail: 'NextAuth.js middleware runs before route handlers on all /dashboard/* paths. Unauthenticated requests redirect at the middleware layer.' },
                { point: 'Demo mode isolation',            detail: 'A server side DEMO_MODE flag gates all routes that touch real Stripe data or customer records. Demo sessions are fully sandboxed.' },
                { point: 'Minimal data storage',           detail: 'No payment method details stored. Only Stripe customer IDs, subscription metadata, and event timestamps.' },
              ].map(({ point, detail }) => (
                <li key={point} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 mt-[7px] flex-shrink-0" />
                  <span className="text-sm text-slate-400">
                    <strong className="text-slate-300">{point}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section num="08" title="Tradeoffs Made">
            <div className="space-y-3">
              {[
                {
                  decision: 'Local cache vs. direct Stripe API',
                  reasoning: "Caching Stripe data in MongoDB reduces latency and avoids rate limits, but adds sync complexity. If a webhook is missed, local state diverges from Stripe — mitigated by a periodic reconciliation job.",
                },
                {
                  decision: 'NextAuth.js vs. custom JWT',
                  reasoning: 'NextAuth handles CSRF protection, secure cookies, and token rotation out of the box. The tradeoff is reduced flexibility for custom auth flows later.',
                },
                {
                  decision: 'Synchronous webhook processing',
                  reasoning: "Events are processed synchronously in the API route handler — simple to reason about, but a slow DB write could cause Stripe to retry delivery. The fix is a job queue, but that scope wasn't justified yet.",
                },
                {
                  decision: 'Per session token cap on AI chat',
                  reasoning: 'A hard cap on chat messages per session prevents runaway OpenAI costs in production. The tradeoff is a degraded experience for power users; the right fix is usage based billing per account.',
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

          <Section num="09" title="What I Would Improve Next">
            <ul className="space-y-2">
              {[
                'Job queue for webhook processing (BullMQ or Mongo backed) to decouple ingestion from processing and handle retries.',
                'Application layer event deduplication using Stripe event IDs beyond MongoDB _id uniqueness.',
                'A reconciliation endpoint that diffs local state against Stripe API to catch missed webhooks.',
                'Streaming responses for the AI chat widget to improve perceived latency on long completions.',
                'Usage based AI token budgeting per account instead of a flat per session cap.',
                'CSV export for finance/accounting. The data is already there; it just needs a serialization layer.',
                'Test coverage for the webhook handler using stripe mock for realistic event payloads.',
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
              href="https://revenue-intel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white rounded bg-emerald-600 hover:bg-emerald-500 transition-colors duration-150"
            >
              <ExternalLink size={11} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/revenue-intel"
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
      className="text-[11px] px-1.5 py-0.5 rounded font-mono text-emerald-400"
      style={{ backgroundColor: 'var(--bg-raised)', border: '1px solid var(--border)' }}
    >
      {children}
    </code>
  )
}
