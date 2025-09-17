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
    <Card className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl border-0 overflow-hidden">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Insert a valid video URL
          </h2>
        </div>

        {/* URL Input */}
        <div className="space-y-4">
          <div className="relative">
            <Input
              type="url"
              placeholder="youtube.com/watch?v=j0u7ub3-ur1"
              value={url}
              onChange={handleUrlChange}
              className={`h-14 text-lg rounded-2xl border-2 ${
                isUrlValid === false 
                  ? 'border-red-300 focus-visible:ring-red-500' 
                  : isUrlValid === true 
                  ? 'border-green-300 focus-visible:ring-green-500'
                  : 'border-gray-200'
              } focus-visible:ring-2 focus-visible:ring-offset-0`}
              disabled={conversion.status === 'loading'}
            />
            {isUrlValid !== null && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                {isUrlValid ? (
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            )}
          </div>
          
          {isUrlValid === false && (
            <p className="text-sm text-red-500 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Please enter a valid YouTube video URL
            </p>
          )}
        </div>

        {/* MP3 Label */}
        <div className="flex justify-center my-6">
          <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
            <Music className="h-4 w-4 inline mr-2" />
            MP3
          </div>
        </div>

        {/* Conversion Progress */}
        {conversion.status === 'loading' && (
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center space-x-2 text-purple-600">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span className="text-sm font-medium">Converting...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${conversion.progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-600">
              {conversion.progress}% completed
            </p>
          </div>
        )}

        {/* Success State */}
        {conversion.status === 'success' && (
          <div className="text-center space-y-4 mb-6">
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <Download className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-green-900 mb-1">Conversion Complete!</h3>
                <p className="text-sm text-green-700 break-all">
                  {conversion.videoTitle}
                </p>
                {conversion.fileSize && (
                  <p className="text-xs text-green-600 mt-1">
                    Size: {conversion.fileSize}
                  </p>
                )}
              </div>
              <div className="flex gap-3 justify-center">
                <Button 
                  onClick={handleDownload} 
                  className="bg-green-600 hover:bg-green-700 rounded-xl px-6"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button onClick={resetConverter} variant="outline" className="rounded-xl">
                  Convert New
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Error State */}
        {conversion.status === 'error' && (
          <div className="text-center space-y-4 mb-6">
            <div className="bg-red-50 p-6 rounded-2xl">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-red-900 mb-1">Conversion Failed</h3>
                <p className="text-sm text-red-700">
                  {conversion.errorMessage}
                </p>
              </div>
              <Button onClick={resetConverter} variant="outline" className="rounded-xl">
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Convert Button */}
        {conversion.status === 'idle' && (
          <Button 
            onClick={handleConvert}
            disabled={!isUrlValid || conversion.status === 'loading'}
            className="w-full h-14 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl text-lg font-medium"
          >
            {conversion.status === 'loading' ? (
              <>
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Converting...
              </>
            ) : (
              <>
                Convert
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
