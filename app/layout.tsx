import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Aryee Portfolio',
  description: 'Full stack developer based in London. Building SaaS applications with Next.js, Node.js, and MongoDB. Open to remote opportunities with US/EU companies.',
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
