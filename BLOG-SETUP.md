# 博客功能设置指南

## 环境变量配置

在 `.env.local` 文件中添加以下配置：

```bash
# Content Hub API Configuration
CONTENT_HUB_API=https://your-content-hub.com
SITE_DOMAIN=youtubetomp3.art
SITE_URL=https://youtubetomp3.art

# API Keys (existing)
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=youtube-mp36.p.rapidapi.com

# Webhook Configuration (for content updates)
WEBHOOK_SECRET=your_webhook_secret_here
```

## 需要安装的依赖

```bash
pnpm add marked dompurify @types/dompurify
```

## CSS 样式增强

在 `src/app/globals.css` 中添加以下样式：

```css
/* 文章内容样式 */
.prose {
  @apply text-gray-700 leading-relaxed;
}

.prose h1 {
  @apply text-3xl font-bold text-gray-900 mt-8 mb-4;
}

.prose h2 {
  @apply text-2xl font-semibold text-gray-900 mt-6 mb-3;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-900 mt-5 mb-3;
}

.prose p {
  @apply mb-4;
}

.prose ul,
.prose ol {
  @apply mb-4 pl-6;
}

.prose li {
  @apply mb-2;
}

.prose blockquote {
  @apply border-l-4 border-blue-200 bg-blue-50 p-4 my-4 italic;
}

.prose code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm;
}

.prose pre {
  @apply bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-4;
}

.prose a {
  @apply text-blue-600 hover:text-blue-700 underline;
}

/* 文本截断样式 */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 按钮样式 */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200;
}
```

## 导航菜单更新

在主导航中添加博客链接，更新 `src/app/layout.tsx` 或相关导航组件：

```tsx
// 在导航菜单中添加
<Link href='/blog' className='nav-link'>
  博客
</Link>
```

## API 接口说明

### 1. 获取文章列表

- **URL**: `/api/public/articles`
- **参数**:
  - `domain`: 网站域名 (youtubetomp3.art)
  - `page`: 页码
  - `limit`: 每页数量
  - `category`: 分类筛选

### 2. 获取文章详情

- **URL**: `/api/public/articles/[slug]`
- **功能**: 获取文章完整内容，自动增加浏览量

### 3. 获取分类列表

- **URL**: `/api/public/categories`
- **参数**: `domain`: 网站域名

## SEO 优化配置

文章页面已经包含以下 SEO 优化：

1. **动态元数据**: 根据文章内容生成 title、description 等
2. **结构化数据**: JSON-LD 格式的文章结构化数据
3. **Open Graph**: 社交分享优化
4. **Canonical URL**: 规范化 URL
5. **ISR 缓存**: 每小时重新生成，保证内容及时更新

## 文件结构

```
src/
├── app/
│   └── blog/
│       ├── page.tsx              # 博客首页
│       └── [slug]/
│           └── page.tsx          # 文章详情页
├── components/
│   ├── blog/
│   │   ├── ArticleCard.tsx       # 文章卡片
│   │   ├── ArticleContent.tsx    # 文章内容
│   │   ├── ArticleSEO.tsx        # SEO组件
│   │   ├── BlogList.tsx          # 文章列表
│   │   ├── CategoryFilter.tsx    # 分类筛选
│   │   └── RelatedArticles.tsx   # 相关文章
│   └── ui/
│       └── LoadingSpinner.tsx    # 加载动画
└── lib/
    └── content-api.ts            # API调用封装
```

## 使用说明

1. **配置 Content Hub API 地址**
2. **设置正确的域名**
3. **安装必要依赖**
4. **添加 CSS 样式**
5. **测试文章显示和 SEO 效果**

## 注意事项

1. **API 调用错误处理**: 所有 API 调用都有错误处理，确保页面稳定性
2. **ISR 缓存**: 使用增量静态再生，平衡性能和实时性
3. **SEO 友好**: 所有内容都是服务端渲染，搜索引擎友好
4. **移动端适配**: 响应式设计，支持各种设备
5. **性能优化**: 图片懒加载、分页加载等优化措施

## 后续扩展

可以考虑添加的功能：

- 文章搜索功能
- 标签系统
- 评论系统
- 文章收藏
- 社交分享
- RSS 订阅
