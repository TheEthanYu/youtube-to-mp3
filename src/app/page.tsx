import { Converter } from '@/components/converter'
import { Instructions } from '@/components/instructions'
import { Footer } from '@/components/footer'
import { FAQ } from '@/components/faq'
import { StructuredData } from '@/components/structured-data'

export default function Home() {
  return (
    <div className="min-h-screen hero-bg">
      <StructuredData />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16">
          <div className="container-style">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
                YouTube to MP3
              </h1>
              <p className="text-lg mb-6 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--muted)' }}>
                Convert YouTube videos to high-quality MP3 audio files instantly
              </p>
            </div>
            
            {/* Converter Component */}
            <div className="max-w-4xl mx-auto mb-8">
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

        {/* About Section */}
        <section className="py-16" style={{ backgroundColor: 'var(--muted-bg, #f8fafc)' }}>
          <div className="container-style">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
                Why Choose Our YouTube to MP3 Service
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature Card 1 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    Lightning Fast
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Convert YouTube videos to MP3 in seconds with our optimized conversion technology.
                  </p>
                </div>

                {/* Feature Card 2 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    High Quality Audio
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Crystal-clear sound quality with support for multiple bitrates up to 320kbps.
                  </p>
                </div>

                {/* Feature Card 3 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    100% Secure
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Your privacy is protected. No registration required and files are automatically deleted.
                  </p>
                </div>

                {/* Feature Card 4 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    All Formats Supported
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Works with all YouTube video formats including music, podcasts, and lectures.
                  </p>
                </div>

                {/* Feature Card 5 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    Completely Free
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Unlimited conversions with no hidden costs, premium accounts, or subscriptions.
                  </p>
                </div>

                {/* Feature Card 6 */}
                <div className="bg-white rounded-lg p-6 shadow-sm border" style={{ borderColor: 'var(--border)' }}>
                  <div className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: 'var(--success-bg, #dcfce7)' }}>
                    <svg className="w-8 h-8" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    Mobile Friendly
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    Works perfectly on all devices - desktop, tablet, and mobile phones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}