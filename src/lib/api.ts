// API configuration for YouTube MP3 converter
export const API_CONFIG = {
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY || '',
  RAPIDAPI_HOST: process.env.RAPIDAPI_HOST || 'youtube-mp36.p.rapidapi.com',
  BASE_URL: 'https://youtube-mp36.p.rapidapi.com'
}

export interface ConvertResponse {
  status: string
  msg: string
  url?: string
  title?: string
  duration?: string
  size?: string
}

export interface ConvertRequest {
  id: string // YouTube video ID
  format?: 'mp3' | 'mp4'
  quality?: 'high' | 'medium' | 'low'
}

// Extract YouTube video ID from URL
export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return match[1]
    }
  }

  return null
}

// Validate YouTube URL
export function isValidYouTubeUrl(url: string): boolean {
  const videoId = extractVideoId(url)
  return videoId !== null && videoId.length === 11
}

// Convert YouTube video to MP3
export async function convertToMp3(videoId: string): Promise<ConvertResponse> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/dl`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_CONFIG.RAPIDAPI_KEY,
        'X-RapidAPI-Host': API_CONFIG.RAPIDAPI_HOST
      }
      // Add video ID as query parameter
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw new Error('Failed to convert video. Please try again.')
  }
}
