<<<<<<< HEAD
# adityaanilraut.github.io
=======
# Aditya Raut - Developer Portfolio

A modern, terminal-themed portfolio website built with React + Vite, featuring dynamic GitHub API integration to showcase projects.

## 🚀 Features

- **Terminal/Developer Theme**: Authentic terminal aesthetics with monospace fonts and retro colors
- **Dynamic GitHub Integration**: Automatically fetches and displays repositories from GitHub API
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Typewriter effects and hover animations
- **Single Page Application**: Smooth scroll navigation between sections

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **GitHub API** - Dynamic repository data
- **CSS3** - Custom terminal styling
- **GitHub Pages** - Free hosting

## 📋 Sections

1. **Hero** - Terminal-style introduction with ASCII art
2. **About** - Professional background and current focus
3. **Skills** - Technical expertise organized by category
4. **Experience** - Work history, education, and achievements
5. **Projects** - Dynamic showcase of GitHub repositories
6. **Contact** - Multiple ways to connect

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173`

## 📦 Deployment to GitHub Pages

### Step 1: Initialize Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `gitpages`
3. **Do NOT** initialize with README, .gitignore, or license

### Step 3: Link and Push

```bash
# Add remote repository
git remote add origin https://github.com/adityaanilraut/gitpages.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build your application
2. Create/update the `gh-pages` branch
3. Deploy to GitHub Pages

### Step 5: Configure GitHub Pages

1. Go to your repository settings: `https://github.com/adityaanilraut/gitpages/settings/pages`
2. Under "Source", select the `gh-pages` branch
3. Click "Save"

Your site will be live at: `https://adityaanilraut.github.io/gitpages/`

## 🔧 Configuration

### Change Base URL

If you want to use a custom domain or different repository name, update `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this
})
```

### Update GitHub Username

To fetch repositories for a different GitHub user, edit `src/utils/githubApi.js`:

```javascript
const GITHUB_USERNAME = 'your-username'; // Change this
```

### Customize Pinned Projects

Edit the `PINNED_REPOS` array in `src/utils/githubApi.js`:

```javascript
const PINNED_REPOS = [
  'repo-name-1',
  'repo-name-2',
  // Add your repos here
];
```

## 📝 Customization

### Colors

Terminal theme colors can be customized in `src/App.css`:

```css
:root {
  --bg-primary: #0a0e14;
  --terminal-green: #00ff00;
  --terminal-cyan: #00ffff;
  /* Add more custom colors */
}
```

### Content

- **Personal Info**: Edit individual component files in `src/components/`
- **Skills**: Update the `skillCategories` array in `src/components/Skills.jsx`
- **Experience**: Modify the `experiences` array in `src/components/Experience.jsx`
- **Contact**: Update the `contacts` array in `src/components/Contact.jsx`

## 🔄 Updating Content

After making changes:

```bash
# Test locally
npm run dev

# Deploy updates
npm run deploy
```

Changes will be live in 1-2 minutes!

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📧 Contact

- **Email**: araut1@csuchico.edu
- **GitHub**: [@adityaanilraut](https://github.com/adityaanilraut)
- **LinkedIn**: [Aditya Raut](https://www.linkedin.com/in/aditya-raut)

---

**Built with ❤️ using React + Vite**

>>>>>>> 6930d3d (Initial commit for portfolio)
