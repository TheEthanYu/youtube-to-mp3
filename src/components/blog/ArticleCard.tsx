'use client'

import Link from 'next/link'
import { Article } from '@/lib/content-api'
import { Calendar, Eye, Tag } from 'lucide-react'

interface ArticleCardProps {
  article: Article
  showCategory?: boolean
  className?: string
}

export function ArticleCard({ article, showCategory = true, className = '' }: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatViewCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  return (
    <article className={`group bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col ${className}`}>
      {/* 分类标签 */}
      {showCategory && article.category && (
        <div className="mb-3">
          <Link
            href={`/blog?category=${article.category.slug}`}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors"
            style={{
              backgroundColor: `${article.category.color}15`,
              color: article.category.color,
            }}
          >
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: article.category.color }}
            ></div>
            {article.category.name}
          </Link>
        </div>
      )}

      {/* 文章标题 */}
      <h3 className="mb-3 flex-grow">
        <Link
          href={`/blog/${article.slug}`}
          className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2 leading-tight group-hover:text-emerald-600"
        >
          {article.title}
        </Link>
      </h3>

      {/* 文章摘要 */}
      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm flex-grow">
        {article.excerpt}
      </p>

      {/* 元信息 */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
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
          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
        >
          Read Article →
        </Link>
      </div>
    </article>
  )
}
