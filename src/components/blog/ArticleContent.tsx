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
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
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

  // Calculate reading time (250 words per minute)
  const calculateReadingTime = (content: string) => {
    const textContent = content.replace(/<[^>]*>/g, '')
    const wordCount = textContent.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 250)
    return readingTime
  }

  // Safely render Markdown content
  const renderMarkdown = (content: string) => {
    if (typeof window !== 'undefined') {
      const html = marked(content)
      const cleanHtml = DOMPurify.sanitize(html as string)
      return { __html: cleanHtml }
    }
    // Simple handling for server-side rendering
    return { __html: marked(content) as string }
  }

  const readingTime = article.content ? calculateReadingTime(article.content) : 5

  return (
    <article className="prose prose-lg max-w-none">
      {/* Article header */}
      <header className="mb-12 not-prose">
        {/* Category tag */}
        {article.category && (
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium"
              style={{
                backgroundColor: `${article.category.color}15`,
                color: article.category.color
              }}
            >
              <Tag className="w-3 h-3" />
              {article.category.name}
            </span>
          </div>
        )}

        {/* Article title */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Article metadata */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>

          <div className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span>{formatViewCount(article.viewCount)} views</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article content */}
      {article.content && (
        <div 
          className="prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700 prose-blockquote:border-gray-200 prose-blockquote:bg-gray-50 prose-code:bg-gray-100 prose-code:text-gray-800 prose-pre:bg-gray-900 mt-8"
          dangerouslySetInnerHTML={renderMarkdown(article.content)}
        />
      )}

      {/* Article tags */}
      {article.seoKeywords && (
        <div className="mt-12 pt-8 border-t border-gray-200 not-prose">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {article.seoKeywords.split(',').map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
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
