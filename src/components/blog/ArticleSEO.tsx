'use client'

import { Article } from '@/lib/content-api'

interface ArticleSEOProps {
  article: Article
}

export function ArticleSEO({ article }: ArticleSEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription || article.excerpt,
    image: article.featuredImage ? [article.featuredImage] : [],
    datePublished: article.publishedAt,
    dateModified: article.publishedAt, // 如果有更新时间字段可以替换
    author: {
      '@type': 'Organization',
      name: 'YouTube转MP3工具',
      url: process.env.SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: 'YouTube转MP3工具',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.SITE_URL}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.SITE_URL}/blog/${article.slug}`
    },
    articleSection: article.category?.name,
    keywords: article.seoKeywords
  }

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />

      {/* 额外的SEO meta标签 */}
      <meta property="article:published_time" content={article.publishedAt} />
      <meta property="article:section" content={article.category?.name} />
      {article.seoKeywords && (
        <meta property="article:tag" content={article.seoKeywords} />
      )}
    </>
  )
}
