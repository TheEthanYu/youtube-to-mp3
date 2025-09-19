'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-emerald-100 supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-900">YouTube to MP3</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="inline-flex h-9 items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="inline-flex h-9 items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
            >
              Blog
            </Link>
            <Link 
              href="/#how-to-use" 
              className="inline-flex h-9 items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
            >
              How to Use
            </Link>
            <Link 
              href="/#faq" 
              className="inline-flex h-9 items-center justify-center px-4 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-emerald-50 transition-all duration-200 hover:scale-105"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#how-to-use" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How to Use
              </Link>
              <Link 
                href="/#faq" 
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
