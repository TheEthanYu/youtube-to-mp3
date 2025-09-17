'use client'

export function Footer() {
  return (
    <footer className="py-8 border-t section-white" style={{ borderColor: 'var(--border)' }}>
      <div className="container-style">
        <div className="text-center">
          <p className="text-sm mb-4 max-w-md mx-auto" style={{ color: 'var(--muted)' }}>
            Free YouTube to MP3 converter online. Convert YouTube videos to MP3 instantly with high-quality audio conversion.
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2025 YouTube to MP3. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}