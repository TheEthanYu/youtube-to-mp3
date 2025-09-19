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
    <div className="mb-10">
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Filter by Category</h3>

        <div className="flex flex-wrap gap-2">
          {/* All categories button */}
          <button
            onClick={() => onCategoryChange('')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedCategory === ''
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Articles
          </button>

          {/* Category buttons */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === category.slug
                  ? 'text-white'
                  : 'text-gray-700 hover:opacity-80'
              }`}
              style={{
                backgroundColor: selectedCategory === category.slug 
                  ? category.color 
                  : `${category.color}15`,
                color: selectedCategory === category.slug ? 'white' : category.color
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* 当前选中的分类信息 */}
      {selectedCategoryData && (
        <div className="mt-3 p-3 rounded-md bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-gray-900">
                {selectedCategoryData.name}
              </span>
              {selectedCategoryData.description && (
                <p className="text-xs text-gray-600 mt-1">
                  {selectedCategoryData.description}
                </p>
              )}
            </div>
            <button
              onClick={() => onCategoryChange('')}
              className="p-1 rounded-full hover:bg-gray-200 transition-colors"
              title="Clear filter"
            >
              <X className="w-3.5 h-3.5 text-gray-500" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
