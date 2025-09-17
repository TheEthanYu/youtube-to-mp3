import { Header } from '@/components/header'
import { Converter } from '@/components/converter'
import { Instructions } from '@/components/instructions'
import { Footer } from '@/components/footer'
import { FAQ } from '@/components/faq'
import { StructuredData } from '@/components/structured-data'

export default function Home() {
  return (
    <div className="min-h-screen hero-bg">
      <StructuredData />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16">
          <div className="container-style">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: 'var(--foreground)' }}>
                Free YouTube to MP3 Converter
              </h2>
              <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
                Convert YouTube videos to MP3 instantly. Our free YouTube to MP3 converter provides high-quality MP3 downloads from any YouTube video.
              </p>
            </div>
            
            {/* Converter Component */}
            <div className="max-w-4xl mx-auto mb-10">
              <Converter />
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free and Unlimited
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No Registration Required
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fast Conversion
              </div>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                <svg className="w-4 h-4" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                High Quality MP3
              </div>
            </div>
          </div>
        </section>

        {/* Instructions Section */}
        <Instructions />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}