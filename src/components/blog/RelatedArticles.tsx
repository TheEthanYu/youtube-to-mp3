'use client'

import { Article } from '@/lib/content-api'
import { ArticleCard } from './ArticleCard'
import { BookOpen } from 'lucide-react'

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-5 h-5 text-emerald-600" />
        <h2 className="text-xl font-semibold text-gray-900">Related Articles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            showCategory={false}
          />
        ))}
      </div>
    </section>
  )
}
