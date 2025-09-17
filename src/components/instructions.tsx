'use client'

import { Copy, ArrowRight, Download } from 'lucide-react'

export function Instructions() {
  return (
    <section className="section-spacing section-white">
      <div className="container-style">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            How to Use Our YouTube to MP3 Converter
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Convert YouTube to MP3 in 3 simple steps with our free YouTube to MP3 converter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <Copy className="h-8 w-8 text-white" />
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                1. Copy YouTube URL
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Copy the YouTube video URL that you want to convert to MP3 format.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                2. Paste URL & Convert
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Paste the YouTube URL into our converter above and click the Convert button.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <Download className="h-8 w-8 text-white" />
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                3. Download MP3
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Download your high-quality MP3 file instantly and enjoy offline listening.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-emerald-200 bg-emerald-50">
            <svg className="w-5 h-5" style={{ color: 'var(--success)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium" style={{ color: 'var(--success)' }}>
              No software installation required - 100% online YouTube to MP3 converter
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}