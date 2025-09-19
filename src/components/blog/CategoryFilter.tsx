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
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-600 font-medium">Filter:</span>
        
        {/* All categories button */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === ''
              ? 'bg-emerald-600 text-white shadow-sm'
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
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'text-white shadow-sm'
                : 'hover:scale-105'
            }`}
            style={{
              backgroundColor: selectedCategory === category.slug 
                ? category.color 
                : `${category.color}10`,
              color: selectedCategory === category.slug ? 'white' : category.color
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 当前选中的分类信息 */}
      {selectedCategoryData && selectedCategoryData.description && (
        <div className="mt-4 p-3 rounded-lg bg-gray-50">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-600">
                {selectedCategoryData.description}
              </p>
            </div>
            <button
              onClick={() => onCategoryChange('')}
              className="ml-3 p-1 rounded-full hover:bg-gray-200 transition-colors flex-shrink-0"
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
