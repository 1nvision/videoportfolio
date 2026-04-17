# Portfolio Website - GitHub Deployment Guide

## ✅ Static Version Ready!

Your portfolio is now a **pure static website** that can be deployed to GitHub Pages or any static hosting service. No backend or database required!

## 📁 What You Need

Only the `/frontend` folder contains everything needed for deployment:
- All portfolio data is in `/frontend/src/mock.js`
- Contact form saves to browser localStorage
- No external APIs or databases

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

#### Step 1: Create GitHub Repository
```bash
# In your local machine, navigate to the frontend folder
cd /path/to/your/frontend

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Install gh-pages Package
```bash
cd frontend
yarn add -D gh-pages
```

#### Step 3: Update package.json
Add these two lines to your `package.json`:

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",  // ADD THIS LINE
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "predeploy": "yarn build",  // ADD THIS LINE
    "deploy": "gh-pages -d build"  // ADD THIS LINE
  },
  // ... rest of the file
}
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

#### Step 4: Deploy!
```bash
yarn deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

⏱️ **Wait 2-3 minutes** for GitHub Pages to build and publish your site.

---

### Option 2: Vercel (Super Easy)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Set **Root Directory** to `frontend`
5. Click "Deploy"

✅ Done! Your site will be live in seconds with a free `.vercel.app` domain.

---

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your `frontend/build` folder (after running `yarn build`)
3. Or connect your GitHub repo and set:
   - **Base directory**: `frontend`
   - **Build command**: `yarn build`
   - **Publish directory**: `frontend/build`

✅ Live with a free `.netlify.app` domain!

---

## 🎨 Customization

### Update Your Information
Edit `/frontend/src/mock.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "YOUR NAME",
    title: "YOUR TITLE",
    email: "your@email.com",
    social: {
      instagram: "YOUR_INSTAGRAM_URL",
      linkedin: "YOUR_LINKEDIN_URL",
      artstation: "YOUR_ARTSTATION_URL"
    }
  },
  // ... update projects, skills, experience
}
```

### Add Your Projects
Replace the placeholder projects in `mock.js` with your real work:
- Upload your images to Unsplash, Imgur, or host them in your repo
- Update thumbnail URLs
- Change titles, descriptions, and categories

### Change Video Reel
Update the YouTube video URL in `featuredReel.videoUrl`

---

## 📧 Contact Form Behavior

**Static Version**: Contact form saves messages to browser's localStorage
- Messages won't be sent to you automatically
- Good for portfolio demonstration
- To see submitted messages: Open browser console → Application → Local Storage → `contactMessages`

**Want Real Contact Form?**
Add a service like:
- [Formspree](https://formspree.io) - Free tier available
- [EmailJS](https://www.emailjs.com) - Free tier available
- [Netlify Forms](https://www.netlify.com/products/forms/) - Built-in if using Netlify

---

## 🐛 Troubleshooting

### Site shows blank page
- Check browser console for errors
- Ensure `homepage` in package.json is correct
- Try building locally: `yarn build` and check for errors

### Images not loading
- Use absolute URLs (https://) for all images
- Ensure images are publicly accessible
- Consider hosting images in your GitHub repo

### Routing issues on GitHub Pages
- GitHub Pages works best with HashRouter
- Or use 404.html redirect trick (Google: "GitHub Pages SPA routing")

---

## 📊 Next Steps

1. **Update Content**: Replace all placeholder data in `mock.js`
2. **Add Your Images**: Upload your real work photos/videos
3. **Test Locally**: Run `yarn start` and check everything works
4. **Build**: Run `yarn build` to create production version
5. **Deploy**: Follow one of the deployment options above
6. **Share**: Add the live URL to your resume and social media!

---

## 🎯 Pro Tips

- **Custom Domain**: GitHub Pages and Netlify support custom domains (yourname.com)
- **Analytics**: Add Google Analytics to track visitors
- **SEO**: Update `public/index.html` meta tags with your info
- **Favicon**: Replace `public/favicon.ico` with your own
- **Performance**: All images are optimized, site loads fast!

---

## 💡 Support

Need help? Check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

**Your portfolio is ready to impress!** 🎉
