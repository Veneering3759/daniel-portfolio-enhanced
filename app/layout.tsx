import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://daniel-aryee.vercel.app'),
  title: 'Daniel Aryee | Full Stack Developer — Next.js, Stripe, MongoDB',
  description: 'Full stack developer based in London specialising in Stripe-connected SaaS products, analytics dashboards, and subscription flows. Open to remote roles with US/EU companies.',
  openGraph: {
    title: 'Daniel Aryee | Full Stack Developer',
    description: 'Building Stripe-connected SaaS products — analytics dashboards, subscription flows, and data-driven back-offices. Based in London, open to US/EU remote.',
    url: 'https://daniel-aryee.vercel.app',
    siteName: 'Daniel Aryee Portfolio',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Aryee | Full Stack Developer',
    description: 'Building Stripe-connected SaaS products — analytics dashboards, subscription flows, and data-driven back-offices.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
