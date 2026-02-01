import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Aryee | Full-Stack Developer',
  description: 'Full-Stack Developer building production ready SaaS applications. Open to remote opportunities with US/EU companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
