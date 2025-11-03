# Project Structure

```
gitpages/
│
├── index.html                  # Main HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration (GitHub Pages base path)
├── .gitignore                 # Git ignore rules
│
├── public/
│   └── terminal.svg           # Favicon icon
│
├── src/
│   ├── main.jsx               # React app entry point
│   ├── App.jsx                # Main app component with navigation
│   ├── App.css                # Global terminal-themed styles
│   │
│   ├── components/
│   │   ├── Hero.jsx           # Hero section with typewriter effect
│   │   ├── About.jsx          # About/bio section
│   │   ├── Skills.jsx         # Skills organized by category
│   │   ├── Experience.jsx     # Work history and achievements
│   │   ├── Projects.jsx       # Dynamic GitHub repos showcase
│   │   └── Contact.jsx        # Contact information
│   │
│   └── utils/
│       └── githubApi.js       # GitHub API integration
│
├── README.md                   # Full documentation
├── DEPLOYMENT.md              # Detailed deployment guide
├── QUICKSTART.md              # Quick reference guide
└── PROJECT_STRUCTURE.md       # This file
```

## Component Architecture

### Data Flow

```
App.jsx
  └── Manages all sections
      ├── Hero (static)
      ├── About (static)
      ├── Skills (static)
      ├── Experience (static)
      ├── Projects (dynamic)
      │   └── fetchGitHubRepos() → GitHub API
      └── Contact (static)
```

### Key Features by Component

**Hero.jsx**
- ASCII art header
- Typewriter animation effect
- Terminal window UI
- Responsive design

**About.jsx**
- Professional bio
- Educational background
- Current focus areas
- Comment-style formatting

**Skills.jsx**
- Categorized tech stack
- Grid layout
- Folder-style presentation
- 5 categories: Languages, Frameworks, Cloud, Databases, ML/AI

**Experience.jsx**
- Timeline layout
- Work experience at TCS
- Education at CSU Chico
- Hackathon achievements
- Icon-based categorization

**Projects.jsx**
- Dynamic GitHub API integration
- Repository cards with stats
- Pinned projects badge
- Language tags
- Star/fork counts
- Links to GitHub repos

**Contact.jsx**
- Multiple contact methods
- Social media links
- Professional emails
- Icon-based design

## Styling Approach

### Terminal Theme

**Color Palette:**
- Background: Dark blues/blacks (#0a0e14, #1a1e26)
- Primary: Terminal green (#00ff00)
- Secondary: Cyan (#00ffff)
- Accent: Yellow (#ffff00)
- Text: Light gray (#c9d1d9)

**Typography:**
- Font: JetBrains Mono (monospace)
- Fallbacks: Consolas, Monaco

**Design Elements:**
- Terminal window chrome (colored buttons)
- Command prompt symbols ($, >)
- Border animations on hover
- Typewriter cursor effect
- Console-like formatting

### Responsive Breakpoints

- Desktop: > 768px (full navigation, multi-column grids)
- Tablet: 481px - 768px (simplified layout)
- Mobile: ≤ 480px (single column, hidden nav)

## API Integration

### GitHub API

**Endpoint:**
```
https://api.github.com/users/adityaanilraut/repos
```

**Features:**
- Fetches all public repositories
- Filters out forked repos
- Sorts by pinned → stars → update date
- Rate limit: 60 requests/hour (unauthenticated)

**Pinned Repositories:**
1. homebrew-coderai
2. AI-Model-Context-Routing
3. HavenAI-Live-VideoCall-with-AI-Agent
4. ChatBot-Chain-of-Thought
5. Finetuning-Google-Gemma2
6. Chess-engine

## Build & Deploy

### Development
```bash
npm run dev     # Vite dev server on port 5173
```

### Production
```bash
npm run build   # Builds to /dist folder
npm run preview # Preview production build
```

### Deployment
```bash
npm run deploy  # Builds and deploys to gh-pages branch
```

## File Sizes (Approximate)

- **App.css**: ~10KB (comprehensive terminal styling)
- **Components**: ~2-3KB each
- **Total Bundle**: ~50-70KB (minified, excluding node_modules)

## Performance

- ⚡ Vite for fast HMR (Hot Module Replacement)
- 🎯 Code splitting ready
- 📦 Optimized production builds
- 🚀 Static site generation
- 💾 Lazy loading for API data

## Browser Compatibility

✅ Chrome 90+  
✅ Firefox 88+  
✅ Safari 14+  
✅ Edge 90+  
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Points

1. **Colors**: `src/App.css` → `:root` variables
2. **Content**: Individual component files
3. **GitHub User**: `src/utils/githubApi.js` → `GITHUB_USERNAME`
4. **Pinned Repos**: `src/utils/githubApi.js` → `PINNED_REPOS`
5. **Base URL**: `vite.config.js` → `base` property

## Dependencies

### Production
- react: ^18.2.0
- react-dom: ^18.2.0

### Development
- @vitejs/plugin-react: ^4.2.1
- vite: ^5.0.8
- gh-pages: ^6.1.0

**Total Size**: ~400MB (with node_modules)  
**Production Build**: ~200KB

---

**Last Updated**: November 3, 2025

