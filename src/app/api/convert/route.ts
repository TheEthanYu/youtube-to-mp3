import { NextRequest, NextResponse } from 'next/server'
import { extractVideoId } from '@/lib/api'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'Please provide a valid YouTube video URL' }, { status: 400 })
    }

    const videoId = extractVideoId(url)
    if (!videoId) {
      return NextResponse.json({ error: 'Invalid YouTube video URL format' }, { status: 400 })
    }

    // Check environment variables
    const rapidApiKey = process.env.RAPIDAPI_KEY
    const rapidApiHost = process.env.RAPIDAPI_HOST || 'youtube-mp36.p.rapidapi.com'

    if (!rapidApiKey) {
      return NextResponse.json({ error: 'API configuration error, please contact administrator' }, { status: 500 })
    }

    // 调用 RapidAPI
    const apiUrl = `https://${rapidApiHost}/dl?id=${videoId}`

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': rapidApiHost,
        Accept: 'application/json'
      }
    })

    if (!response.ok) {
      console.error('API request failed:', response.status, response.statusText)
      return NextResponse.json({ error: `Conversion service temporarily unavailable (${response.status})` }, { status: response.status })
    }

    const data = await response.json()

    // Check API response
    if (data.status === 'fail' || data.status === 'error') {
      return NextResponse.json({ error: data.msg || 'Conversion failed, please try again later' }, { status: 400 })
    }

    // Return success result - adjusted according to API response format
    return NextResponse.json({
      status: 'success',
      data: {
        title: data.title,
        duration: data.duration,
        fileSize: data.filesize,
        downloadUrl: data.link,
        videoId: videoId,
        progress: data.progress || 100
      }
    })
  } catch (error) {
    console.error('Conversion API error:', error)

    return NextResponse.json(
      {
        error: error instanceof Error ? `Error occurred during conversion: ${error.message}` : 'Unknown error, please try again later'
      },
      { status: 500 }
    )
  }
}

// GET method for health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'YouTube to MP3 Converter API is running',
    timestamp: new Date().toISOString()
  })
}
