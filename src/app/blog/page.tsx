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
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-20 lg:pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}>
          </div>
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            YouTube to MP3 
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"> Converter</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Discover professional audio conversion guides, tips, and tutorials to help you safely convert YouTube videos to high-quality MP3 format
          </p>
          
          {/* Stats */}
          <div className="flex justify-center items-center gap-8 text-slate-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{articles.length}+</div>
              <div className="text-sm">Articles</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{categories.length}</div>
              <div className="text-sm">Categories</div>
            </div>
            <div className="w-px h-8 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-sm">Always</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
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
