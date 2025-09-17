# 🎵 ConvertKids - YouTube to MP3 Converter

A modern YouTube to MP3 online converter built with Next.js, providing fast, secure, and high-quality audio conversion services.

## ✨ Features

- 🚀 **Lightning Fast** - Convert in seconds
- 🛡️ **Safe & Secure** - No data storage, privacy protected
- 🎵 **High Quality Audio** - Up to 320kbps MP3 format
- 📱 **Responsive Design** - Perfect on mobile, tablet, desktop
- 🎨 **Modern Interface** - Beautiful SaaS-style design
- 🆓 **Completely Free** - No registration required
- ⚡ **Instant Download** - Download immediately after conversion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **API**: RapidAPI YouTube MP3 conversion service
- **Package Manager**: pnpm

## 🚀 Quick Start

### Requirements

- Node.js 18+
- pnpm

### Install Dependencies

```bash
pnpm install
```

### Environment Setup

1. Copy the environment variables example file:

```bash
cp .env.example .env.local
```

2. Configure your RapidAPI key in `.env.local`:

```env
RAPIDAPI_KEY=your_rapidapi_key_here
RAPIDAPI_HOST=youtube-mp36.p.rapidapi.com
```

### Get RapidAPI Key

1. Visit [RapidAPI](https://rapidapi.com/)
2. Register/Login to your account
3. Subscribe to [YouTube MP3 API](https://rapidapi.com/ytjar/api/youtube-mp36/)
4. Copy your API key

### Start Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── convert/       # Conversion API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── ui/               # Base UI components
│   ├── converter.tsx     # Converter component
│   ├── features.tsx      # Features showcase
│   ├── footer.tsx        # Footer
│   ├── header.tsx        # Header
│   ├── instructions.tsx  # Instructions
│   └── blog-section.tsx  # Blog section
└── lib/                  # Utility libraries
    ├── api.ts           # API configuration
    └── utils.ts         # Utility functions
```

## 🎯 Core Features

### 1. YouTube URL Recognition

Supports multiple YouTube URL formats:

- `https://youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://m.youtube.com/watch?v=VIDEO_ID`

### 2. Real-time Conversion Status

- Input validation feedback
- Conversion progress display
- Error message handling
- Success status feedback

### 3. High-Quality Output

- MP3 audio format
- Up to 320kbps quality support
- Preserves original audio quality

## 🎨 Design Features

### Modern SaaS Style

- Gradient color schemes
- Fluid animations
- Responsive layout
- Accessibility design

### User Experience Optimization

- Intuitive operation flow
- Real-time feedback mechanism
- Friendly error messages
- Mobile optimization

## 🔧 Customization

### Modify API Configuration

Edit API configuration in `src/lib/api.ts`:

```typescript
export const API_CONFIG = {
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY || '',
  RAPIDAPI_HOST: process.env.RAPIDAPI_HOST || 'youtube-mp36.p.rapidapi.com',
  BASE_URL: 'https://youtube-mp36.p.rapidapi.com'
}
```

### Custom Styling

Modify global styles in `src/app/globals.css` or use Tailwind CSS classes in components.

## 📦 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Automatic deployment complete

### Other Platforms

Supports deployment to any Node.js platform:

- Netlify
- Railway
- Heroku
- AWS
- Google Cloud

## 🤝 Contributing

Issues and Pull Requests are welcome!

1. Fork the project
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## ⚠️ Disclaimer

This project is for learning and technical exchange only. Users should comply with relevant laws and regulations, respect copyrights, and only convert content you have the right to use. We do not store any audio files, conversion is done completely online.

## 📞 Contact

- GitHub Issues: [Project Issues](https://github.com/yourusername/convertkids/issues)
- Email: support@convertkids.com

---

**Note**: Please ensure you have the right to convert relevant YouTube content and comply with local copyright laws before use.
