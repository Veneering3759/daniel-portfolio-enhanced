import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daniel Aryee | Full-Stack Developer',
  description: 'Full-Stack Developer building production-ready SaaS applications. Open to remote opportunities with US/EU companies.',
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

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Daniel Aryee
          </Link>
          
          <div className="flex items-center gap-8">
            <a 
              href="/#projects" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              Projects
            </a>
            <a 
              href="/#about" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              About
            </a>
            <a 
              href="/#contact" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Daniel Aryee. Built with Next.js & Tailwind CSS.
          </p>
          
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a 
              href="https://github.com/Veneering3759" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-a-869619399/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:tnix9826@tutamail.com"
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
