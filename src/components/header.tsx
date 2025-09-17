import Link from 'next/link'
import { Music, User } from 'lucide-react'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <Music className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ConvertKids</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="rounded-full">
              Sign In
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700 rounded-full">
              <User className="h-4 w-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
