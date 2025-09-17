"use client"

import React, { useState, useCallback } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Download, Loader2, Music, AlertCircle, Play } from 'lucide-react'
import { extractVideoId, isValidYouTubeUrl } from '@/lib/api'
import { debounce } from '@/lib/utils'

interface ConversionState {
  status: 'idle' | 'loading' | 'success' | 'error'
  progress: number
  downloadUrl?: string
  videoTitle?: string
  errorMessage?: string
  fileSize?: string
  duration?: string
}

export function Converter() {
  const [url, setUrl] = useState('')
  const [isUrlValid, setIsUrlValid] = useState<boolean | null>(null)
  const [conversion, setConversion] = useState<ConversionState>({
    status: 'idle',
    progress: 0
  })

  // Debounced URL validation
  const validateUrl = useCallback(
    debounce((inputUrl: string) => {
      if (inputUrl.trim() === '') {
        setIsUrlValid(null)
        return
      }
      setIsUrlValid(isValidYouTubeUrl(inputUrl))
    }, 500),
    []
  )

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value
    setUrl(newUrl)
    validateUrl(newUrl)
  }

  const handleConvert = async () => {
    if (!isValidYouTubeUrl(url)) {
      setConversion({
        status: 'error',
        progress: 0,
        errorMessage: 'Please enter a valid YouTube video URL'
      })
      return
    }

    setConversion({ status: 'loading', progress: 0 })

    try {
      // Simulate progress for better UX
      const progressInterval = setInterval(() => {
        setConversion(prev => ({
          ...prev,
          progress: Math.min(prev.progress + 15, 90)
        }))
      }, 800)

      // Call our API endpoint
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })

      clearInterval(progressInterval)

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Conversion failed')
      }

      if (result.status === 'success' && result.data) {
        setConversion({
          status: 'success',
          progress: 100,
          downloadUrl: result.data.downloadUrl,
          videoTitle: result.data.title || 'Unknown Title',
          fileSize: result.data.fileSize,
          duration: result.data.duration
        })
      } else {
        throw new Error('Conversion failed, please try again')
      }
    } catch (error) {
      setConversion({
        status: 'error',
        progress: 0,
        errorMessage: error instanceof Error ? error.message : 'An error occurred during conversion'
      })
    }
  }

  const handleDownload = () => {
    if (conversion.downloadUrl) {
      window.open(conversion.downloadUrl, '_blank')
    }
  }

  const resetConverter = () => {
    setUrl('')
    setIsUrlValid(null)
    setConversion({ status: 'idle', progress: 0 })
  }

  return (
    <div className="card-style p-6 md:p-8 max-w-3xl mx-auto shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
          Insert YouTube URL
        </h3>
      </div>

        {/* URL Input */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 p-4 md:p-5 border-2 rounded-xl transition-all duration-200 hover:border-emerald-300" style={{ borderColor: isUrlValid === false ? '#ef4444' : isUrlValid === true ? '#10b981' : 'var(--border)', background: 'var(--card)' }}>
            <div className="flex items-center gap-3 flex-1">
              <svg className="w-8 h-8 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <Input
                type="url"
                placeholder="youtube.com/watch?v=example"
                value={url}
                onChange={handleUrlChange}
                className="flex-1 border-0 text-base md:text-lg bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
                style={{ color: 'var(--foreground)' }}
                disabled={conversion.status === 'loading'}
              />
              {isUrlValid !== null && (
                <div className="flex-shrink-0">
                  {isUrlValid ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              )}
            </div>
            <Button
              onClick={handleConvert}
              disabled={!isUrlValid || conversion.status === 'loading'}
              className="btn-primary min-w-[140px] h-12 text-base font-semibold"
            >
              {conversion.status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Converting...
                </>
              ) : (
                'Convert'
              )}
            </Button>
          </div>

          {isUrlValid === false && (
            <p className="text-sm text-red-500 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Please enter a valid YouTube video URL
            </p>
          )}
        </div>


        {/* Conversion Progress */}
        {conversion.status === 'loading' && (
          <div className="space-y-4 p-6 bg-emerald-50 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-center space-x-2" style={{ color: 'var(--primary)' }}>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm font-medium">Converting your video...</span>
            </div>
            <div className="w-full bg-emerald-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${conversion.progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm" style={{ color: 'var(--muted)' }}>
              {conversion.progress}% completed
            </p>
          </div>
        )}

        {/* Success State */}
        {conversion.status === 'success' && (
          <div className="text-center space-y-4">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">Conversion Complete!</h3>
                <p className="text-sm text-green-700 break-all mb-2">
                  {conversion.videoTitle}
                </p>
                {conversion.fileSize && (
                  <p className="text-xs text-green-600">
                    File size: {conversion.fileSize}
                  </p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={handleDownload}
                  className="btn-primary px-8 py-3 font-semibold"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download MP3
                </Button>
                <Button onClick={resetConverter} variant="outline" className="px-6 py-3 rounded-xl font-medium border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                  Convert Another
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {conversion.status === 'error' && (
          <div className="text-center space-y-4">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">Conversion Failed</h3>
                <p className="text-sm text-red-700">
                  {conversion.errorMessage}
                </p>
              </div>
              <Button onClick={resetConverter} className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold">
                Try Again
              </Button>
            </div>
          </div>
        )}

    </div>
  )
}
