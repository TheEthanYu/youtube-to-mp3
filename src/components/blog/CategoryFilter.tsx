'use client'

import { Category } from '@/lib/content-api'
import { Tag, X } from 'lucide-react'

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categorySlug: string) => void
}

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const selectedCategoryData = categories.find(cat => cat.slug === selectedCategory)

  return (
    <div className="mb-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg">
            <Tag className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Browse by Category</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* All categories button */}
          <button
            onClick={() => onCategoryChange('')}
            className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              selectedCategory === ''
                ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:scale-105'
            }`}
          >
            <span className="relative z-10">All Articles</span>
            {selectedCategory === '' && (
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl opacity-20 animate-pulse"></div>
            )}
          </button>

          {/* Category buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:scale-105 ${
                selectedCategory === category.slug
                  ? 'text-white shadow-lg scale-105'
                  : 'text-slate-700 hover:shadow-md'
              }`}
              style={{
                backgroundColor: selectedCategory === category.slug 
                  ? category.color 
                  : '#f1f5f9',
                borderColor: category.color,
                borderWidth: selectedCategory === category.slug ? '0' : '2px'
              }}
            >
              <span className="relative z-10">{category.name}</span>
              {selectedCategory === category.slug && (
                <div 
                  className="absolute inset-0 rounded-xl opacity-20 animate-pulse"
                  style={{ backgroundColor: category.color }}
                ></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 当前选中的分类信息 */}
      {selectedCategoryData && (
        <div className="mt-4 p-4 rounded-lg border border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900 mb-1">
                {selectedCategoryData.name}
              </h4>
              {selectedCategoryData.description && (
                <p className="text-sm text-gray-600">
                  {selectedCategoryData.description}
                </p>
              )}
            </div>
              <button
                onClick={() => onCategoryChange('')}
                className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                title="Clear filter"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
          </div>
        </div>
      )}
    </div>
  )
}
