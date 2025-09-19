'use client'

import { Article } from '@/lib/content-api'
import { Calendar, Eye, Tag, Clock } from 'lucide-react'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

interface ArticleContentProps {
  article: Article
}

export function ArticleContent({ article }: ArticleContentProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  const formatViewCount = (count: number) => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万`
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toString()
  }

  // 估算阅读时间 (每分钟250字)
  const calculateReadingTime = (content: string) => {
    const textContent = content.replace(/<[^>]*>/g, '')
    const wordCount = textContent.length
    const readingTime = Math.ceil(wordCount / 250)
    return readingTime
  }

  // 安全地渲染Markdown内容
  const renderMarkdown = (content: string) => {
    if (typeof window !== 'undefined') {
      const html = marked(content)
      const cleanHtml = DOMPurify.sanitize(html as string)
      return { __html: cleanHtml }
    }
    // 服务端渲染时的简单处理
    return { __html: marked(content) as string }
  }

  const readingTime = article.content ? calculateReadingTime(article.content) : 5

  return (
    <article className="prose prose-lg max-w-none">
      {/* 文章头部 */}
      <header className="mb-8 not-prose">
        {/* 分类标签 */}
        {article.category && (
          <div className="mb-4">
            <span
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${article.category.color}20`,
                color: article.category.color
              }}
            >
              <Tag className="w-3 h-3" />
              {article.category.name}
            </span>
          </div>
        )}

        {/* 文章标题 */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {article.title}
        </h1>

        {/* 特色图片 */}
        {article.featuredImage && (
          <div className="mb-8 rounded-xl overflow-hidden">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* 文章元信息 */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 py-4 border-y border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{formatViewCount(article.viewCount)} 次阅读</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>约 {readingTime} 分钟阅读</span>
          </div>
        </div>
      </header>

      {/* 文章内容 */}
      {article.content && (
        <div 
          className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-code:bg-gray-100 prose-code:text-gray-800 prose-pre:bg-gray-900"
          dangerouslySetInnerHTML={renderMarkdown(article.content)}
        />
      )}

      {/* 文章标签 */}
      {article.seoKeywords && (
        <div className="mt-8 pt-6 border-t border-gray-200 not-prose">
          <h3 className="text-sm font-medium text-gray-900 mb-3">相关标签</h3>
          <div className="flex flex-wrap gap-2">
            {article.seoKeywords.split(',').map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
