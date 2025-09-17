export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube to MP3 Converter",
    "description": "Free YouTube to MP3 converter online. Convert YouTube videos to MP3 instantly with high-quality audio conversion.",
    "url": "https://www.youtubetomp3.art",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "YouTube to MP3",
      "url": "https://www.youtubetomp3.art"
    },
    "featureList": [
      "Free YouTube to MP3 conversion",
      "High-quality audio output",
      "No registration required",
      "Fast conversion speed",
      "Online converter"
    ],
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
