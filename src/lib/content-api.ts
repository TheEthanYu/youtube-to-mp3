// Content Hub API 调用封装
interface ContentAPIConfig {
  baseUrl: string
  timeout: number
}

interface GetArticlesOptions {
  page?: number
  limit?: number
  category?: string
  domain?: string
  websiteId?: string
  exclude?: string
}

interface GetCategoriesOptions {
  domain?: string
  websiteId?: string
}

interface APIResponse<T> {
  success: boolean
  data: T
}

interface Article {
  id: string
  title: string
  slug: string
  content?: string
  excerpt: string
  featuredImage?: string
  seoTitle?: string
  seoDescription?: string
  seoKeywords?: string
  publishedAt: string
  viewCount: number
  category: {
    id: string
    name: string
    slug: string
    color: string
  }
}

interface ArticlesResponse {
  articles: Article[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

interface Category {
  id: string
  name: string
  slug: string
  description?: string
  color: string
  website: {
    id: string
    name: string
    domain: string
  }
}

class ContentAPI {
  private config: ContentAPIConfig

  constructor(config: ContentAPIConfig) {
    this.config = config
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<APIResponse<T>> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

    try {
      const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        }
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout')
        }
        throw error
      }

      throw new Error('Unknown error occurred')
    }
  }

  async getCategories(options: GetCategoriesOptions = {}): Promise<APIResponse<Category[]>> {
    const params = new URLSearchParams()

    if (options.domain) {
      params.append('domain', options.domain)
    }
    if (options.websiteId) {
      params.append('websiteId', options.websiteId)
    }

    const endpoint = `/api/public/categories${params.toString() ? `?${params.toString()}` : ''}`
    return this.request<Category[]>(endpoint)
  }

  async getArticles(options: GetArticlesOptions = {}): Promise<APIResponse<ArticlesResponse>> {
    const params = new URLSearchParams()

    if (options.page) {
      params.append('page', options.page.toString())
    }
    if (options.limit) {
      params.append('limit', options.limit.toString())
    }
    if (options.category) {
      params.append('category', options.category)
    }
    if (options.domain) {
      params.append('domain', options.domain)
    }
    if (options.websiteId) {
      params.append('websiteId', options.websiteId)
    }

    const endpoint = `/api/public/articles${params.toString() ? `?${params.toString()}` : ''}`
    return this.request<ArticlesResponse>(endpoint)
  }

  async getArticle(slug: string): Promise<Article | null> {
    try {
      const response = await this.request<Article>(`/api/public/articles/${slug}`)
      return response.data
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null
      }
      throw error
    }
  }
}

// 导出配置好的实例
export const contentAPI = new ContentAPI({
  baseUrl: process.env.CONTENT_HUB_API || 'https://content.ethanyu.me',
  timeout: 10000 // 10秒超时
})

// 导出类型定义
export type { Article, Category, ArticlesResponse, GetArticlesOptions, GetCategoriesOptions }
