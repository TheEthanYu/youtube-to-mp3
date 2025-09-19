'use client'

import { Article } from '@/lib/content-api'
import { BookOpen, Calendar, Eye } from 'lucide-react'
import Link from 'next/link'

interface RelatedArticlesProps {
  articles: Article[]
}

// 简化的文章卡片组件，专用于相关文章
function RelatedArticleCard({ article }: { article: Article }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const formatViewCount = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`
    }
    return count.toString()
  }

  return (
    <article className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all duration-200">
      {/* 分类标签 */}
      {article.category && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
            {article.category.name}
          </span>
        </div>
      )}

      {/* 文章标题 */}
      <h3 className="mb-3">
        <Link
          href={`/blog/${article.slug}`}
          className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2 leading-snug group-hover:text-emerald-600"
        >
          {article.title}
        </Link>
      </h3>

      {/* 文章摘要 */}
      <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
        {article.excerpt}
      </p>

      {/* 元信息 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>
          
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span>{formatViewCount(article.viewCount)}</span>
          </div>
        </div>

        <Link
          href={`/blog/${article.slug}`}
          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-all duration-200 group-hover:translate-x-1"
        >
          Read →
        </Link>
      </div>
    </article>
  )
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <section className="mt-20 pt-12 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-10">
        <BookOpen className="w-5 h-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Related Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.slice(0, 4).map((article) => (
          <RelatedArticleCard 
            key={article.id} 
            article={article}
          />
        ))}
      </div>
    </section>
  )
}
