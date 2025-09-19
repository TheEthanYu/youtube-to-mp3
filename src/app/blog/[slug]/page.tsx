import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { contentAPI, Article } from '@/lib/content-api'
import { ArticleContent } from '@/components/blog/ArticleContent'
import { RelatedArticles } from '@/components/blog/RelatedArticles'
import { ArticleSEO } from '@/components/blog/ArticleSEO'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

// 生成动态元数据
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  try {
    const article = await contentAPI.getArticle(params.slug)
    
    if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist or has been deleted.'
    }
    }

    return {
      title: article.seoTitle || article.title,
      description: article.seoDescription || article.excerpt,
      openGraph: {
        title: article.seoTitle || article.title,
        description: article.seoDescription || article.excerpt,
        images: article.featuredImage ? [article.featuredImage] : [],
        type: 'article',
        publishedTime: article.publishedAt,
        authors: ['YouTube转MP3工具'],
      },
      twitter: {
        card: 'summary_large_image',
        title: article.seoTitle || article.title,
        description: article.seoDescription || article.excerpt,
        images: article.featuredImage ? [article.featuredImage] : [],
      },
      alternates: {
        canonical: `${process.env.SITE_URL}/blog/${article.slug}`
      }
    }
  } catch (error) {
    console.error('Failed to generate metadata:', error)
    return {
      title: 'Article Loading Failed',
      description: 'Article content is temporarily unavailable, please try again later.'
    }
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  let article = null
  let relatedArticles: Article[] = []

  try {
    // 获取文章详情
    article = await contentAPI.getArticle(params.slug)
    
    if (!article) {
      notFound()
    }

    // 获取相关文章（同分类的其他文章）
    if (article.category) {
      const relatedResponse = await contentAPI.getArticles({
        domain: process.env.SITE_DOMAIN,
        category: article.category.slug,
        limit: 3,
        exclude: article.id // 假设API支持排除当前文章
      })
      relatedArticles = relatedResponse.data?.articles || []
    }
  } catch (error) {
    console.error('Failed to fetch article:', error)
    notFound()
  }

  return (
    <>
      <ArticleSEO article={article} />
      <Header />
      
      <div className="min-h-screen bg-white">
        <div className="pt-20 lg:pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* 面包屑导航 */}
            <nav className="mb-8 py-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li>
                  <Link href="/" className="hover:text-emerald-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                    Blog
                  </Link>
                </li>
                {article.category && (
                  <>
                    <li>/</li>
                    <li>
                      <Link 
                        href={`/blog?category=${article.category.slug}`}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        {article.category.name}
                      </Link>
                    </li>
                  </>
                )}
                <li>/</li>
                <li className="text-gray-900 font-medium truncate">
                  {article.title}
                </li>
              </ol>
            </nav>

            {/* 文章主体内容 */}
            <ArticleContent article={article} />

            {/* CTA引导到转换工具 */}
            <div className="my-16 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Try Our YouTube to MP3 Converter
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Fast, secure, and high-quality audio conversion service
                </p>
                <Link 
                  href="/" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 text-sm font-medium rounded-md transition-colors inline-flex items-center"
                >
                  Start Converting
                </Link>
              </div>
            </div>

            {/* 相关文章 */}
            {relatedArticles.length > 0 && (
              <RelatedArticles articles={relatedArticles} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

// 生成静态路径 - 预生成热门文章
export async function generateStaticParams() {
  try {
    const response = await contentAPI.getArticles({
      domain: process.env.SITE_DOMAIN,
      limit: 50 // 预生成前50篇文章
    })
    
    const articles = response.data?.articles || []
    
    return articles.map((article) => ({
      slug: article.slug
    }))
  } catch (error) {
    console.error('Failed to generate static params:', error)
    return []
  }
}

// ISR配置 - 每小时重新生成一次
export const revalidate = 3600
