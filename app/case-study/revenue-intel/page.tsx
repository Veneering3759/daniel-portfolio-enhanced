import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Revenue Intel — Case Study | Daniel Aryee Portfolio',
  description: 'Technical breakdown of Revenue Intel: a Stripe analytics platform built with Next.js, MongoDB, and NextAuth.js.',
}

export default function RevenueIntelCaseStudy() {
  return (
    <main className="bg-slate-950 min-h-screen pt-24 pb-32">
      <div className="max-w-3xl mx-auto px-6">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-sm transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to portfolio
        </Link>

        {/* Project header */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-xs font-medium mb-6">
            SaaS / Stripe Analytics Platform
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Revenue Intel
          </h1>
          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            A Stripe analytics dashboard that surfaces subscription churn signals,
            checkout drop-off, and pricing inefficiencies in a single auth-protected view.
          </p>

          {/* Action links */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="https://revenue-intel.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href="https://github.com/Veneering3759/revenue-intel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-700"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['Next.js (App Router)', 'TypeScript', 'Stripe SDK', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-16" />

        {/* Case study content */}
        <div className="space-y-16 prose prose-invert max-w-none">

          {/* Overview */}
          <section>
            <SectionLabel>01</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Overview</h2>
            <p className="text-slate-300 leading-relaxed">
              Revenue Intel is a subscription analytics platform built to give SaaS operators
              clearer visibility into their Stripe data. The core idea: rather than context-switching
              between Stripe&apos;s native dashboard, spreadsheets, and third-party analytics tools,
              operators get one focused view — churn risk signals, checkout funnel performance,
              MRR trends, and pricing tier analysis.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The project&apos;s primary goal was to get comfortable with Stripe&apos;s API surface:
              webhook delivery, subscription lifecycle events, idempotency, and the billing portal.
              The dashboard layer was secondary — a useful way to make the backend work visible.
            </p>
          </section>

          {/* The Problem */}
          <section>
            <SectionLabel>02</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">The Problem</h2>
            <p className="text-slate-300 leading-relaxed">
              Stripe&apos;s dashboard is built for operators, not analysts. It surfaces individual
              transactions well but makes it difficult to see patterns across your subscriber base:
              which pricing tier has the highest churn rate, where users drop off during checkout,
              which plan they downgrade to before cancelling.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              The data to answer these questions is all in Stripe — it just isn&apos;t surfaced in
              one place. Revenue Intel pulls it together by consuming Stripe&apos;s webhook stream
              and storing derived metrics in a queryable local database.
            </p>
          </section>

          {/* Architecture Design */}
          <section>
            <SectionLabel>03</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Architecture Design</h2>
            <p className="text-slate-300 leading-relaxed">
              The system has three layers:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Stripe (source of truth) — subscription events flow out via webhooks',
                'Next.js API routes — webhook handler, Stripe proxy routes, auth middleware',
                'MongoDB — event log, derived subscription metrics, session store',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-300 leading-relaxed mt-6">
              Next.js App Router was chosen for its server component model — initial dashboard
              loads fetch from MongoDB directly in server components, avoiding a client-side
              loading state. Interactive filters and charts are client components that receive
              initial data as props.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              NextAuth.js session middleware runs at the edge and blocks all <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">/dashboard/*</code> routes
              for unauthenticated users before the page component even renders.
            </p>
          </section>

          {/* Stripe Integration */}
          <section>
            <SectionLabel>04</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Stripe Integration Approach</h2>
            <p className="text-slate-300 leading-relaxed">
              The Stripe Node SDK lives exclusively in server-side code — API routes and server
              components. The secret key is read from environment variables server-side and never
              exposed to the client bundle.
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">Webhook Handler</h3>
            <p className="text-slate-300 leading-relaxed">
              Incoming webhooks hit a dedicated <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">POST /api/webhooks/stripe</code> route.
              The raw request body is passed to <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">stripe.webhooks.constructEvent()</code> along
              with the <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">Stripe-Signature</code> header, which verifies the payload
              using the webhook signing secret. Requests with invalid signatures are rejected with a 400.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Events handled: <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">customer.subscription.created</code>,{' '}
              <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">customer.subscription.deleted</code>,{' '}
              <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">invoice.payment_failed</code>,{' '}
              <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">checkout.session.completed</code>,{' '}
              <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">customer.subscription.updated</code>.
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">Billing Portal</h3>
            <p className="text-slate-300 leading-relaxed">
              The Stripe billing portal is surfaced through a server action that creates a portal
              session and returns the URL to the client. This keeps the customer ID server-side
              and avoids exposing it in client-side state.
            </p>
          </section>

          {/* Data Modeling */}
          <section>
            <SectionLabel>05</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Data Modeling Decisions</h2>
            <p className="text-slate-300 leading-relaxed">
              MongoDB was chosen for its flexible document model — Stripe webhook payloads
              vary significantly by event type, and storing them in a relational schema would
              require either a wide table with many nullable columns or a complex event-type
              inheritance structure.
            </p>

            <h3 className="text-lg font-semibold text-slate-200 mt-6 mb-3">Collections</h3>
            <ul className="space-y-3">
              {[
                { name: 'stripe_events', desc: 'Raw webhook payloads. Stripe event ID used as _id for built-in deduplication. TTL index expires records after 90 days.' },
                { name: 'subscriptions', desc: 'Derived subscription state. Upserted on each relevant webhook. Tracks plan, status, customer ID, and timestamps.' },
                { name: 'checkout_sessions', desc: 'Completed and abandoned session data for funnel analysis.' },
              ].map(({ name, desc }) => (
                <li key={name} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">
                    <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">{name}</code>
                    {' '}— {desc}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-slate-300 leading-relaxed mt-6">
              Compound index on <code className="text-violet-300 bg-slate-900 px-1.5 py-0.5 rounded text-sm">(customerId, createdAt)</code> in the subscriptions
              collection covers the most common query pattern: fetching a customer&apos;s subscription
              history in chronological order.
            </p>
          </section>

          {/* Security */}
          <section>
            <SectionLabel>06</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Security Considerations</h2>
            <ul className="space-y-4">
              {[
                {
                  point: 'Secret isolation',
                  detail: 'The Stripe secret key and webhook signing secret are environment variables read exclusively in server-side code. Next.js\'s build process ensures they are never included in client bundles (variables without the NEXT_PUBLIC_ prefix are server-only).',
                },
                {
                  point: 'Webhook signature verification',
                  detail: 'Every inbound webhook is verified using Stripe\'s recommended stripe.webhooks.constructEvent() pattern before any processing occurs. Invalid signatures return 400 immediately.',
                },
                {
                  point: 'Route protection',
                  detail: 'NextAuth.js middleware runs before route handlers on all /dashboard/* paths. Unauthenticated requests are redirected to the login page at the middleware layer, not the component layer.',
                },
                {
                  point: 'Minimal data storage',
                  detail: 'No payment method details or raw card data are stored. Only Stripe customer IDs, subscription metadata, and event timestamps — the minimum needed to power the analytics.',
                },
              ].map(({ point, detail }) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                  <span className="text-slate-300">
                    <strong className="text-slate-200">{point}:</strong> {detail}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tradeoffs */}
          <section>
            <SectionLabel>07</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">Tradeoffs Made</h2>
            <div className="space-y-6">
              {[
                {
                  decision: 'Local cache vs. direct Stripe API',
                  reasoning: 'Caching Stripe data in MongoDB reduces latency on dashboard loads and avoids hitting Stripe\'s rate limits under sustained query load. The tradeoff is synchronization complexity — if a webhook is missed, local state diverges from Stripe. Mitigated by a periodic reconciliation job that re-fetches the subscription list from Stripe\'s API.',
                },
                {
                  decision: 'NextAuth.js vs. custom JWT implementation',
                  reasoning: 'NextAuth handles a lot of session management complexity (CSRF protection, secure cookie handling, token rotation) that would take significant time to implement correctly from scratch. The tradeoff is reduced flexibility if custom auth flows are needed later.',
                },
                {
                  decision: 'Synchronous webhook processing',
                  reasoning: 'Webhook events are processed synchronously in the API route handler. Simple and easy to reason about, but a slow database write could cause Stripe to retry the webhook delivery. The right fix is a proper job queue (BullMQ, or a simple MongoDB-backed queue), but that added scope wasn\'t justified at this stage.',
                },
              ].map(({ decision, reasoning }) => (
                <div key={decision} className="p-5 bg-slate-900 rounded-xl border border-slate-800">
                  <h3 className="text-slate-200 font-semibold mb-2">{decision}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{reasoning}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What I Would Improve */}
          <section>
            <SectionLabel>08</SectionLabel>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">What I Would Improve Next</h2>
            <ul className="space-y-3">
              {[
                'Job queue for webhook processing — BullMQ with Redis, or a Mongo-backed queue, to decouple ingestion from processing and handle retries properly.',
                'Proper event deduplication at the application layer using Stripe event IDs, not just MongoDB\'s _id uniqueness constraint.',
                'A reconciliation endpoint that diffs local subscription state against Stripe\'s API to catch any missed webhooks during downtime.',
                'Export functionality (CSV) for finance/accounting use — the underlying data is there, just needs a serialization layer.',
                'Test coverage for the webhook handler using Stripe\'s stripe-mock library for realistic event payloads.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Footer CTA */}
        <div className="mt-20 pt-10 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-slate-400 text-sm">More of my work</p>
              <Link
                href="/#projects"
                className="text-slate-200 font-medium hover:text-violet-400 transition-colors"
              >
                ← Back to all projects
              </Link>
            </div>
            <div className="flex gap-3">
              <a
                href="https://revenue-intel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg text-sm font-medium transition-colors"
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
              <a
                href="https://github.com/Veneering3759/revenue-intel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-700"
              >
                <Github size={13} />
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-xs font-mono text-slate-600 tracking-widest uppercase">
      {children}
    </span>
  )
}
