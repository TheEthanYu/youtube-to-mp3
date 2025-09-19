import { Metadata } from 'next'
import { BlogList } from '@/components/blog/BlogList'
import { contentAPI } from '@/lib/content-api'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'YouTube to MP3 Converter - Tutorials & Guides',
  description: 'Professional YouTube to MP3 conversion tutorials, including the latest conversion tips, format selection guides, and practical content.',
  keywords: 'YouTube to MP3, audio conversion, download tutorial, online tools',
}

export default async function BlogPage() {
  let articles = []
  let categories = []

  try {
    // 并行获取文章列表和分类数据
    const [articlesResponse, categoriesResponse] = await Promise.all([
      contentAPI.getArticles({
        domain: process.env.SITE_DOMAIN,
        limit: 20,
        page: 1
      }),
      contentAPI.getCategories({
        domain: process.env.SITE_DOMAIN
      })
    ])

    articles = articlesResponse.data?.articles || []
    categories = categoriesResponse.data || []
  } catch (error) {
    console.error('Failed to fetch blog data:', error)
    // 在错误情况下返回空数组，页面仍然可以正常渲染
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-20 lg:pt-24 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-12 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            YouTube to MP3 Converter
            <span className="text-emerald-600"> Guides</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Professional audio conversion guides, tips, and tutorials to help you safely convert YouTube videos to high-quality MP3 format
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <BlogList 
          initialArticles={articles} 
          categories={categories}
          domain={process.env.SITE_DOMAIN || ''}
        />
      </div>
      
      <Footer />
    </div>
  )
}

// ISR配置 - 每小时重新生成一次
export const revalidate = 3600
