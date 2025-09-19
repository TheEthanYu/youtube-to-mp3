'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "Is this YouTube to MP3 converter completely free?",
    answer: "Yes! Our YouTube to MP3 converter is 100% free. Convert unlimited YouTube videos to MP3 without any costs, registration, or software installation."
  },
  {
    question: "What quality MP3 files does this YouTube to MP3 converter provide?",
    answer: "Our YouTube to MP3 converter provides high-quality MP3 conversion up to 320kbps. The YouTube to MP3 conversion automatically matches the original audio quality."
  },
  {
    question: "How fast is the YouTube to MP3 conversion process?",
    answer: "YouTube to MP3 conversion with our tool is very fast. Most YouTube videos are converted to MP3 within seconds, depending on the video length."
  },
  {
    question: "Do I need to install software for YouTube to MP3 conversion?",
    answer: "No software installation required! Our YouTube to MP3 converter works entirely online. Just paste the YouTube URL and convert to MP3 instantly."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-style">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-base" style={{ color: 'var(--muted)' }}>
            Common questions about our YouTube to MP3 converter
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 text-left flex items-center justify-between transition-colors"
                style={{ color: 'var(--foreground)' }}
              >
                <h3 className="text-base md:text-lg font-semibold pr-4">{faq.question}</h3>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: 'var(--muted)' }}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 animate-fade-in-up">
                  <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}