# Agentic Orch Website

A modern, high-end website for Agentic Orch - AI Agent Orchestration Consulting

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Smooth Animations**: Framer Motion for beautiful page transitions and interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **SEO Optimized**: Complete meta tags and Open Graph configuration
- **Glassmorphism Design**: Modern UI with glass effects and gradients
- **Performance Focused**: Fast load times with Vite build optimization

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Update Contact Form

Replace the Formspree endpoint in `/src/components/sections/ContactSection.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

Get your Formspree form ID from https://formspree.io/

### Update Colors

Edit `/tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  background: '#0B0C10',
  foreground: '#FAFAFA',
  primary: {
    DEFAULT: '#00C2FF',
    hover: '#00A8E6',
  },
  secondary: {
    DEFAULT: '#6A5CFF',
    hover: '#5A4CDD',
  },
  accent: '#8B5CF6',
}
```

### Update Content

- **Hero Section**: `/src/components/sections/HeroSection.tsx`
- **About**: `/src/components/sections/AboutSection.tsx`
- **Services**: `/src/components/sections/ExpertiseSection.tsx`
- **Case Studies**: `/src/components/sections/CaseStudySection.tsx`
- **Contact**: `/src/components/sections/ContactSection.tsx`
- **Footer**: `/src/components/sections/Footer.tsx`

### Update SEO

Edit meta tags in `/index.html`:

```html
<title>Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your OG Title" />
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to https://app.netlify.com/drop

### Build Configuration

The site is configured for optimal production builds:
- Automatic code splitting
- CSS minification
- Image optimization
- Tree shaking

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Support

For questions or support, contact: hello@agenticorch.ai

## 📄 License

© 2025 Agentic Orch - All rights reserved
