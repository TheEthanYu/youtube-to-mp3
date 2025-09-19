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
    <article className={`group bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${className}`}>
      {/* 特色图片 */}
      {article.featuredImage ? (
        <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-emerald-100 via-blue-50 to-purple-100 flex items-center justify-center">
          <div className="text-6xl opacity-20">📄</div>
        </div>
      )}

      <div className="p-6">
        {/* 分类标签 */}
        {showCategory && article.category && (
          <div className="mb-4">
            <Link
              href={`/blog?category=${article.category.slug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: `${article.category.color}15`,
                color: article.category.color,
                borderColor: `${article.category.color}30`,
                borderWidth: '1px'
              }}
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: article.category.color }}
              ></div>
              {article.category.name}
            </Link>
          </div>
        )}

        {/* 文章标题 */}
        <h3 className="mb-4">
          <Link
            href={`/blog/${article.slug}`}
            className="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors line-clamp-2 leading-tight group-hover:text-emerald-600"
          >
            {article.title}
          </Link>
        </h3>

        {/* 文章摘要 */}
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>

        {/* 元信息 */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-sm text-slate-500">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Read Article
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
