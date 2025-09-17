# TradingLens 首页设计系统指南

本文档总结了TradingLens首页的完整设计风格、配色方案和组件规范，为其他页面的设计开发提供一致性指导。

## 🎨 设计理念

### 核心设计原则
- **投资导向**: 以投资收益和专业性为核心，而非技术实现细节
- **现代简约**: 简洁清晰的布局，突出关键信息
- **信任建立**: 通过专业设计和数据展示建立用户信任
- **一致性**: 统一的视觉语言和交互模式

### 视觉风格
- **现代玻璃态效果**: 使用backdrop-blur和半透明背景
- **渐变背景**: 柔和的颜色渐变营造专业氛围
- **深度层次**: 通过阴影和层次营造空间感
- **微交互**: 按钮hover效果和动画增强用户体验

## 🌈 配色方案

### 主色调 - Emerald/Green 系列
```css
/* 主要绿色调 - 投资和增长的象征 */
emerald-50    #ecfdf5    /* 浅背景色 */
emerald-100   #d1fae5    /* 容器边框 */
emerald-200   #a7f3d0    /* 装饰元素 */
emerald-300   #6ee7b7    /* 背景装饰 */
emerald-500   #10b981    /* 状态指示 */
emerald-600   #059669    /* 主按钮色 */
emerald-700   #047857    /* 按钮hover */

/* 辅助绿色调 */
green-50      #f0fdf4    /* 渐变背景 */
green-300     #86efac    /* 背景装饰 */
green-600     #16a34a    /* 辅助按钮 */

/* 青色调 - 平衡视觉 */
teal-50       #f0fdfa    /* 渐变背景 */
teal-300      #5eead4    /* 背景装饰 */
teal-400      #2dd4bf    /* 强调色 */
teal-600      #0d9488    /* 辅助色 */
```

### 中性色调 - Slate 系列
```css
/* 文本和背景 */
slate-50      #f8fafc    /* 区块背景 */
slate-100     #f1f5f9    /* 浅背景 */
slate-200     #e2e8f0    /* 边框 */
slate-600     #475569    /* 辅助文本 */
slate-700     #334155    /* 次要文本 */
slate-800     #1e293b    /* 深色背景 */
slate-900     #0f172a    /* 主文本色 */
```

### 功能色彩
```css
/* 状态指示 */
blue-500      #3b82f6    /* 信息/步骤2 */
blue-600      #2563eb    /* 信息hover */
purple-500    #8b5cf6    /* 专业/步骤3 */
purple-600    #7c3aed    /* 专业hover */

/* 背景和层次 */
white         #ffffff    /* 主背景 */
white/90      rgba(255,255,255,0.9)  /* 玻璃态 */
white/80      rgba(255,255,255,0.8)  /* 半透明 */
black/20      rgba(0,0,0,0.2)        /* 遮罩层 */
```

## 📐 布局规范

### 容器和间距
```css
/* 主容器 */
max-w-7xl mx-auto       /* 最大宽度容器 */
px-6 lg:px-8           /* 水平内边距 */
py-16 lg:py-20         /* 垂直内边距 - hero */
py-20 lg:py-24         /* 垂直内边距 - 一般区块 */

/* 网格布局 */
grid-cols-1 lg:grid-cols-5    /* Hero: 3/5 文案 + 2/5 视频 */
grid-cols-1 md:grid-cols-3    /* 三列特性展示 */
grid-cols-1 xl:grid-cols-3    /* 详细内容布局 */

/* 间距系统 */
gap-4      1rem        /* 小间距 */
gap-6      1.5rem      /* 中间距 */
gap-8      2rem        /* 大间距 */
gap-12     3rem        /* 超大间距 */
```

### 圆角系统
```css
rounded-xl     12px     /* 按钮和小组件 */
rounded-2xl    16px     /* 卡片和容器 */
rounded-3xl    24px     /* 大容器和区块 */
```

### 阴影系统
```css
shadow-sm      /* 轻微阴影 - 小元素 */
shadow-md      /* 中等阴影 - 按钮 */
shadow-lg      /* 较深阴影 - 卡片 */
shadow-xl      /* 深阴影 - 主要容器 */
shadow-2xl     /* 最深阴影 - 重要区块 */
```

## 🏗️ 组件设计规范

### Header 设计
```css
/* 头部容器 */
.header {
  @apply fixed top-0 z-50 w-full;
  @apply bg-white/90 backdrop-blur-md;
  @apply border-b border-emerald-100;
  @apply supports-[backdrop-filter]:bg-white/80;
  height: 64px; /* h-16 */
}

/* 导航链接 */
.nav-link {
  @apply inline-flex h-9 items-center justify-center;
  @apply px-4 py-2 rounded-xl text-sm font-medium;
  @apply transition-all duration-200 hover:scale-105;
}

.nav-link.active {
  @apply bg-emerald-600 text-white shadow-lg;
}

.nav-link:not(.active) {
  @apply text-slate-700 hover:text-slate-900 hover:bg-emerald-50;
}
```

### 按钮设计
```css
/* 主要按钮 */
.btn-primary {
  @apply bg-emerald-600 hover:bg-emerald-700 text-white;
  @apply px-8 py-4 text-base font-semibold rounded-xl;
  @apply shadow-lg hover:shadow-xl transition-all hover:scale-105;
}

/* 次要按钮 */
.btn-secondary {
  @apply border-emerald-200 bg-white/90 backdrop-blur-sm;
  @apply text-emerald-700 hover:bg-emerald-50;
  @apply px-8 py-4 text-base font-semibold rounded-xl;
  @apply shadow-sm hover:shadow-md transition-all hover:scale-105;
}

/* 轮廓按钮 */
.btn-outline {
  @apply border-emerald-300 bg-emerald-50 text-emerald-700;
  @apply hover:bg-emerald-100 px-8 py-3 font-medium rounded-xl;
  @apply shadow-sm hover:shadow-md transition-all hover:scale-105;
}
```

### 卡片设计
```css
/* 基础卡片 */
.card-base {
  @apply bg-white rounded-2xl shadow-lg border border-emerald-100;
  @apply p-6 transition-all;
}

/* 特性卡片 */
.feature-card {
  @apply bg-white/80 backdrop-blur-sm rounded-xl;
  @apply px-4 py-3 shadow-sm border border-emerald-100;
}

/* 统计卡片 */
.stats-card {
  @apply text-center bg-white rounded-2xl p-6;
  @apply shadow-lg border border-emerald-100;
}

/* 深色卡片 */
.dark-card {
  @apply bg-gradient-to-br from-slate-800 to-slate-900;
  @apply rounded-3xl text-white shadow-2xl border border-slate-700;
}
```

### 标签和标识
```css
/* 状态标签 */
.status-badge {
  @apply inline-flex items-center gap-2;
  @apply bg-white/90 backdrop-blur-sm text-emerald-700;
  @apply px-4 py-2 rounded-xl text-sm font-medium;
  @apply border border-emerald-200 shadow-sm;
}

/* 脉冲指示器 */
.pulse-indicator {
  @apply w-2 h-2 bg-emerald-500 rounded-full animate-pulse;
}
```

## 🎯 背景设计模式

### 渐变背景
```css
/* Hero区域背景 */
.hero-bg {
  @apply bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50;
}

/* CTA区域背景 */
.cta-bg {
  @apply bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600;
}

/* 装饰圆圈 */
.bg-decoration {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px); /* blur-3xl */
}

.decoration-1 {
  @apply w-96 h-96 bg-emerald-300/30;
  @apply top-0 left-0 transform -translate-x-1/2 -translate-y-1/2;
}

.decoration-2 {
  @apply w-80 h-80 bg-green-300/25;
  @apply bottom-0 right-0 transform translate-x-1/2 translate-y-1/2;
}
```

### 区块背景
```css
/* 白色区块 */
.section-white { @apply bg-white; }

/* 浅色区块 */
.section-light { @apply bg-slate-50; }

/* 渐变区块 */
.section-gradient { 
  @apply bg-gradient-to-br from-emerald-50 to-teal-50;
  @apply border border-emerald-200;
}
```

## 📝 文字系统

### 标题层级
```css
/* 主标题 - H1 */
.heading-1 {
  @apply text-4xl lg:text-5xl xl:text-6xl font-bold;
  @apply text-slate-900 leading-tight;
}

/* 区块标题 - H2 */
.heading-2 {
  @apply text-3xl lg:text-4xl font-bold;
  @apply text-slate-900 mb-6;
}

/* 卡片标题 - H3 */
.heading-3 {
  @apply text-xl font-bold text-slate-900 mb-3;
}

/* 小标题 - H4 */
.heading-4 {
  @apply text-lg font-semibold text-slate-900 mb-2;
}
```

### 正文文字
```css
/* 主要描述文字 */
.text-primary {
  @apply text-xl text-slate-700 leading-relaxed;
}

/* 一般正文 */
.text-body {
  @apply text-slate-600 leading-relaxed;
}

/* 辅助文字 */
.text-secondary {
  @apply text-sm text-slate-500;
}

/* 强调文字 */
.text-emphasis {
  @apply font-semibold text-emerald-600;
}
```

## 🔢 数据展示规范

### 数字和统计
```css
/* 大数字展示 */
.stat-number {
  @apply text-4xl font-bold text-white mb-1;
}

/* 数字标签 */
.stat-label {
  @apply text-lg font-semibold text-slate-300 mb-2;
}

/* 对比数据 */
.stat-comparison {
  @apply text-emerald-400 font-semibold;
}

/* 图标容器 */
.stat-icon {
  @apply w-16 h-16 rounded-2xl mx-auto mb-4;
  @apply flex items-center justify-center;
}
```

### 图表和可视化
- 使用统一的emerald色调作为主色
- 对比数据使用slate系列中性色
- 保持简洁的设计，突出数据本身

## 🎭 动画和交互

### 基础动画
```css
/* hover缩放效果 */
.hover-scale {
  @apply transition-all hover:scale-105;
}

/* 过渡动画 */
.transition-smooth {
  @apply transition-all duration-200;
}

.transition-slow {
  @apply transition-all duration-300;
}

/* 脉冲动画 */
.animate-pulse-custom {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### 状态变化
- 按钮hover: scale-105 + shadow增强
- 卡片hover: shadow增强
- 链接hover: 颜色变化 + 背景色变化

## 📱 响应式设计

### 断点系统
```css
/* Mobile First */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

### 响应式模式
```css
/* 网格自适应 */
.responsive-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}

/* 文字自适应 */
.responsive-text {
  @apply text-3xl lg:text-4xl xl:text-6xl;
}

/* 间距自适应 */
.responsive-padding {
  @apply py-16 lg:py-20 px-6 lg:px-8;
}
```

## 🔧 技术实现要点

### CSS框架和工具
- **Tailwind CSS**: 主要样式框架
- **Framer Motion**: 动画库
- **Lucide React**: 图标库
- **Shadcn/ui**: 基础组件库

### 关键类名模式
```css
/* 容器模式 */
.container-pattern {
  @apply max-w-7xl mx-auto px-6 lg:px-8 relative z-10;
}

/* 卡片模式 */
.card-pattern {
  @apply bg-white rounded-2xl p-6 shadow-lg border border-emerald-100;
}

/* 按钮模式 */
.button-pattern {
  @apply px-8 py-4 font-semibold rounded-xl;
  @apply transition-all hover:scale-105 shadow-md;
}
```

## 🎨 设计资源

### 图标使用
- 主要使用Lucide React图标库
- 图标尺寸: w-4 h-4 (16px), w-6 h-6 (24px), w-8 h-8 (32px)
- 图标颜色: 与容器主题色保持一致

### 图片和媒体
- 视频使用圆角设计 (rounded-xl)
- 保持16:9宽高比
- 添加适当的遮罩和控制界面

## 📋 使用建议

### 开发新页面时
1. **遵循配色方案**: 主要使用emerald/green系列，辅助使用slate系列
2. **保持布局一致**: 使用相同的容器宽度和间距系统
3. **统一组件样式**: 按钮、卡片、表单等使用统一的设计模式
4. **响应式优先**: 确保在所有设备上都有良好的用户体验

### 扩展设计系统时
1. **保持一致性**: 新增元素应符合现有的设计语言
2. **文档更新**: 及时更新本设计指南
3. **测试验证**: 确保新设计在不同屏幕尺寸下表现正常
4. **性能考虑**: 避免过度使用动画和复杂效果

---

*本设计系统指南基于TradingLens首页的实际实现，为确保整个应用的设计一致性提供参考。如有更新或修改，请及时同步更新本文档。* 