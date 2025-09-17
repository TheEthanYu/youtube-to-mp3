import { Header } from '@/components/header'
import { Converter } from '@/components/converter'
import { Features } from '@/components/features'
import { Instructions } from '@/components/instructions'
import { BlogSection } from '@/components/blog-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-yellow-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          {/* Background decorative shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-80"></div>
            <div className="absolute top-10 right-20 w-48 h-48 bg-purple-400 rounded-[2rem] opacity-20 transform rotate-12"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-400 rounded-full opacity-70"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The best place to
                <br />
                <span className="text-purple-600">convert</span> and{' '}
                <span className="text-yellow-500 underline decoration-wavy decoration-yellow-400">download</span>
                <br />
                for music lovers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Convert YouTube videos to high-quality MP3 audio files
                instantly and safely with our free online converter.
              </p>
            </div>
            
            {/* Converter Component */}
            <div className="max-w-2xl mx-auto">
              <Converter />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />

        {/* Instructions Section */}
        <Instructions />

        {/* Blog Section */}
        <BlogSection />
      </main>

      <Footer />
    </div>
  )
}
