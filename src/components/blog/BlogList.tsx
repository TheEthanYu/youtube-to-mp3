'use client'

import { useState, useEffect } from 'react'
import { ArticleCard } from './ArticleCard'
import { CategoryFilter } from './CategoryFilter'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { contentAPI, Article, Category } from '@/lib/content-api'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface BlogListProps {
  initialArticles: Article[]
  categories: Category[]
  domain: string
}

export function BlogList({ initialArticles, categories, domain }: BlogListProps) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: initialArticles.length,
    totalPages: 1
  })

  // 获取文章列表
  const fetchArticles = async (page: number = 1, category: string = '') => {
    setLoading(true)
    try {
      const response = await contentAPI.getArticles({
        domain,
        page,
        limit: 12,
        category: category || undefined
      })

      if (response.success && response.data) {
        setArticles(response.data.articles)
        setPagination(response.data.pagination)
      }
    } catch (error) {
      console.error('Failed to fetch articles:', error)
    } finally {
      setLoading(false)
    }
  }

  // 处理分类筛选
  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug)
    setCurrentPage(1)
    fetchArticles(1, categorySlug)
  }

  // 处理分页
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    fetchArticles(page, selectedCategory)
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="space-y-8">
      {/* 分类筛选器 */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* 加载状态 */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-slate-200 border-t-emerald-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-600 rounded-full animate-spin animation-delay-150"></div>
          </div>
          <p className="mt-6 text-slate-600 font-medium">Loading articles...</p>
          <div className="mt-4 flex space-x-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce animation-delay-75"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-150"></div>
          </div>
        </div>
      )}

      {/* 文章列表 */}
      {!loading && (
        <>
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {selectedCategory ? 'No articles in this category' : 'No articles found'}
                </h3>
                <p className="text-slate-600">
                  {selectedCategory ? 'Try selecting a different category or check back later.' : 'We\'re working on adding more content. Check back soon!'}
                </p>
              </div>
            </div>
          )}

          {/* 分页器 */}
          {pagination.totalPages > 1 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
              <div className="flex justify-center items-center space-x-3">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="flex items-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </button>

                <div className="flex space-x-2">
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
                    .filter(page => {
                      // 显示当前页面附近的页码
                      return Math.abs(page - currentPage) <= 2 || page === 1 || page === pagination.totalPages
                    })
                    .map((page, index, arr) => {
                      // 添加省略号
                      if (index > 0 && page - arr[index - 1] > 1) {
                        return [
                          <span key={`ellipsis-${page}`} className="px-3 py-3 text-slate-400 font-medium">
                            ...
                          </span>,
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-12 h-12 text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 ${
                              currentPage === page
                                ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                                : 'text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-emerald-300 shadow-md'
                            }`}
                          >
                            {page}
                          </button>
                        ]
                      }

                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-12 h-12 text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 ${
                            currentPage === page
                              ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg'
                              : 'text-slate-700 bg-white border-2 border-slate-200 hover:bg-slate-50 hover:border-emerald-300 shadow-md'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= pagination.totalPages}
                  className="flex items-center px-6 py-3 text-sm font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-xl hover:bg-slate-50 hover:border-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              
              {/* 分页信息 */}
              <div className="text-center mt-4 text-sm text-slate-600">
                Showing {((currentPage - 1) * pagination.limit) + 1} to {Math.min(currentPage * pagination.limit, pagination.total)} of {pagination.total} articles
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
