# Video Producer & Sports Photographer Portfolio

A stunning portfolio website for video production and sports photography professionals, featuring a modern design with dark blue and white color scheme.

## Features

- 🎬 **Hero Section** - Eye-catching landing with call-to-action buttons
- 📺 **Video Showcase** - Featured reel with thumbnail gallery
- 🖼️ **Portfolio Gallery** - Filterable projects by category (Matchday, Training, Interviews, Social Media, Events, Sponsored Content)
- 👤 **About Section** - Personal bio with achievement stats
- 💼 **Skills & Experience** - Professional journey timeline
- 📧 **Contact Form** - Working form with toast notifications (saves to localStorage)
- 📱 **Fully Responsive** - Mobile, tablet, and desktop optimized

## Design Highlights

- **Typography**: Bebas Neue (headings) + Poppins (body)
- **Colors**: Dark Blue (#1E3A8A) + White/Light Grey
- **Icons**: Lucide React (no emojis)
- **Components**: Shadcn UI

## Quick Start

### Prerequisites
- Node.js 16+ and Yarn

### Installation

```bash
cd frontend
yarn install
yarn start
```

The site will open at `http://localhost:3000`

## Building for Production

```bash
yarn build
```

This creates an optimized build in the `build/` folder ready for deployment.

## Deployment Options

### Option 1: GitHub Pages

1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/your-repo-name",
```

2. Install gh-pages:
```bash
yarn add -D gh-pages
```

3. Add scripts to `package.json`:
```json
"predeploy": "yarn build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
yarn deploy
```

### Option 2: Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd frontend
vercel
```

### Option 3: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
cd frontend
yarn build
netlify deploy --prod --dir=build
```

## Customization

Edit `/frontend/src/mock.js` to update:
- Personal information (name, title, email, social links)
- Featured reel video URL
- Portfolio projects
- Skills and experience

## Technologies Used

- React 19
- React Router 7
- Tailwind CSS 3
- Shadcn UI Components
- Lucide React Icons
- Axios

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
