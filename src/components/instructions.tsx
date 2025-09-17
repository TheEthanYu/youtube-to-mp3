import { Copy, Download, Music, Search } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Find Video',
    description: 'Search for your favorite YouTube video',
    detail: 'Go to YouTube.com and find the music video or content you want to convert'
  },
  {
    icon: Copy,
    title: 'Copy URL',
    description: 'Copy the video URL from address bar',
    detail: 'Click on the address bar or share button to copy the complete video link'
  },
  {
    icon: Music,
    title: 'Convert',
    description: 'Paste link and start conversion',
    detail: 'Paste the link in the input box above and click the convert button'
  },
  {
    icon: Download,
    title: 'Download',
    description: 'Download your converted MP3 file',
    detail: 'Once conversion is complete, click download to get your high-quality audio file'
  }
]

export function Instructions() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to convert YouTube to MP3?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Just 4 simple steps to convert any YouTube video to high-quality MP3 audio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center group relative">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {step.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-purple-200 to-purple-300 transform translate-x-4" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Tips */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              💡 Tips & Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-3 text-purple-600">✅ Supported URL formats:</h4>
                <ul className="text-sm space-y-2">
                  <li>• https://youtube.com/watch?v=...</li>
                  <li>• https://youtu.be/...</li>
                  <li>• https://m.youtube.com/watch?v=...</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-600">🎵 Output quality:</h4>
                <ul className="text-sm space-y-2">
                  <li>• High-quality MP3 format</li>
                  <li>• Up to 320kbps audio quality</li>
                  <li>• Fast conversion process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
