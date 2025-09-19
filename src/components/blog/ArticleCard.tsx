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
    <article className={`group hover:bg-gray-50 transition-colors duration-200 py-8 first:pt-0 ${className}`}>
      {/* 文章内容区域 */}
      <div className="flex flex-col">
        {/* 分类标签 */}
        {showCategory && article.category && (
          <div className="mb-3">
            <Link
              href={`/blog?category=${article.category.slug}`}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors"
              style={{
                backgroundColor: `${article.category.color}10`,
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
