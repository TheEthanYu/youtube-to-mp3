'use client'

export function Header() {
  return (
    <header className="py-8">
      <div className="container-style text-center">
        <h1 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
          YouTube to MP3
        </h1>
        <p className="text-sm mt-2" style={{ color: 'var(--muted)' }}>
          Free Online Converter
        </p>
      </div>
    </header>
  )
}