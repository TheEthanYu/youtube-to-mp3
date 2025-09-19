import { MetadataRoute } from 'next'
import { contentAPI } from '@/lib/content-api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || 'https://www.youtubetomp3.art'
  const domain = process.env.SITE_DOMAIN

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ]

  try {
    // 分页获取所有文章 slug
    const pageSize = 100
    let currentPage = 1
    let totalPages = 1

    while (currentPage <= totalPages) {
      const { data } = await contentAPI.getArticles({
        domain,
        page: currentPage,
        limit: pageSize
      })

      const articles = data?.articles || []
      totalPages = data?.pagination?.totalPages || 1

      for (const article of articles) {
        routes.push({
          url: `${baseUrl}/blog/${article.slug}`,
          lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
          changeFrequency: 'weekly',
          priority: 0.7
        })
      }

      currentPage += 1
    }
  } catch (error) {
    console.error('Failed to build blog sitemap:', error)
    // 出错时保留基础路由，避免站点地图完全失败
  }

  return routes
}
