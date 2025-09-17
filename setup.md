# 🚀 快速设置指南

## 1. 获取 RapidAPI 密钥

1. 访问 [RapidAPI](https://rapidapi.com/)
2. 注册账号或登录
3. 搜索 "YouTube MP3" 或访问： https://rapidapi.com/ytjar/api/youtube-mp36/
4. 点击 "Subscribe to Test"
5. 选择免费计划或付费计划
6. 在 API 页面复制您的 X-RapidAPI-Key

## 2. 配置环境变量

在项目根目录创建 `.env.local` 文件：

```bash
# 创建环境变量文件
cp .env.example .env.local
```

编辑 `.env.local` 并填入您的 API 密钥：

```env
RAPIDAPI_KEY=your_actual_api_key_here
RAPIDAPI_HOST=youtube-mp36.p.rapidapi.com
NEXT_PUBLIC_APP_NAME=YouTube to MP3 Converter
NEXT_PUBLIC_APP_DESCRIPTION=Convert YouTube videos to MP3 audio files easily and fast
```

## 3. 启动应用

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

## 4. 测试功能

1. 打开浏览器访问 http://localhost:3000
2. 粘贴一个 YouTube 视频链接
3. 点击 "开始转换" 按钮
4. 等待转换完成
5. 下载转换后的 MP3 文件

## 常见问题

### Q: API 调用失败怎么办？

A: 检查您的 RapidAPI 密钥是否正确，确保已订阅相关服务

### Q: 支持哪些 YouTube 链接格式？

A:

- https://youtube.com/watch?v=VIDEO_ID
- https://youtu.be/VIDEO_ID
- https://m.youtube.com/watch?v=VIDEO_ID

### Q: 转换需要多长时间？

A: 通常在 10-30 秒内完成，取决于视频长度和网络状况

### Q: 有文件大小限制吗？

A: 根据 RapidAPI 服务的限制，通常支持 90 分钟以内的视频

## 部署到生产环境

### Vercel 部署

1. 推送代码到 GitHub
2. 在 Vercel 连接您的 GitHub 仓库
3. 在 Vercel 设置环境变量
4. 自动部署完成

### 环境变量设置

在部署平台设置以下环境变量：

- `RAPIDAPI_KEY`: 您的 RapidAPI 密钥
- `RAPIDAPI_HOST`: youtube-mp36.p.rapidapi.com

就这样！您的 YouTube 转 MP3 应用已经可以使用了！ 🎉
