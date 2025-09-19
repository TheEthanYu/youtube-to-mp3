'use client'

import Link from 'next/link'
import { Article } from '@/lib/content-api'
import { Calendar, Eye } from 'lucide-react'

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
    <article className={`group transition-colors duration-200 py-10 first:pt-8 ${className}`}>
      {/* 文章内容区域 */}
      <div className="flex flex-col">
        {/* 分类标签 */}
        {showCategory && article.category && (
          <div className="mb-3">
            <Link
              href={`/blog?category=${article.category.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              {article.category.name}
            </Link>
          </div>
        )}

        {/* 文章标题 */}
        <h3 className="mb-3">
          <Link
            href={`/blog/${article.slug}`}
            className="text-xl font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2 leading-snug group-hover:text-emerald-600"
          >
            {article.title}
          </Link>
        </h3>

        {/* 文章摘要 */}
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {article.excerpt}
        </p>

        {/* 元信息 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt)}
              </time>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span>{formatViewCount(article.viewCount)}</span>
            </div>
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-all duration-200 group-hover:translate-x-1"
          >
            Read →
          </Link>
        </div>
      </div>
    </article>
  )
}
