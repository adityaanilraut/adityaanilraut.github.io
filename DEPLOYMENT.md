# Deployment Instructions for GitHub Pages

This guide will walk you through deploying your portfolio to GitHub Pages.

## Prerequisites

✅ Node.js installed (v16+)  
✅ Git installed  
✅ GitHub account  
✅ Terminal/Command Prompt access

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
cd /Users/aditya/Desktop/gitpages
npm install
```

### 2. Test Locally (Optional but Recommended)

```bash
npm run dev
```

Visit `http://localhost:5173` to verify everything works correctly.

### 3. Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"
```

### 4. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `gitpages`
3. Description: `Personal portfolio website`
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Initialize with README"
6. Click "Create repository"

### 5. Link Local Repository to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/adityaanilraut/gitpages.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 6. Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This command will:
- Build the production version
- Create a `gh-pages` branch
- Push the build to GitHub Pages

### 7. Enable GitHub Pages

1. Go to: https://github.com/adityaanilraut/gitpages/settings/pages
2. Under **"Build and deployment"**:
   - Source: `Deploy from a branch`
   - Branch: Select `gh-pages`
   - Folder: `/ (root)`
3. Click **"Save"**

### 8. Access Your Site

Your portfolio will be live at:

**https://adityaanilraut.github.io/gitpages/**

⏱️ Initial deployment may take 2-5 minutes.

## Updating Your Portfolio

Whenever you make changes:

```bash
# 1. Test locally
npm run dev

# 2. Commit changes
git add .
git commit -m "Description of changes"
git push origin main

# 3. Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Issue: Site shows 404 error

**Solution**: 
- Check that `base: '/gitpages/'` is set correctly in `vite.config.js`
- Ensure GitHub Pages is enabled and set to `gh-pages` branch
- Wait a few minutes after deployment

### Issue: Repositories not loading

**Solution**:
- Check browser console for API errors
- Verify GitHub username is correct in `src/utils/githubApi.js`
- GitHub API has rate limits (60 requests/hour for unauthenticated)

### Issue: Blank page after deployment

**Solution**:
- Verify the `base` path in `vite.config.js` matches your repo name
- Check browser console for errors
- Clear browser cache and reload

### Issue: CSS not loading

**Solution**:
- Ensure all imports in `main.jsx` are correct
- Check that build completed successfully (`npm run build`)
- Verify `dist` folder was created

## Custom Domain (Optional)

To use a custom domain like `aditya.dev`:

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   aditya.dev
   ```

2. Configure DNS with your domain provider:
   - Add CNAME record pointing to `adityaanilraut.github.io`

3. In GitHub Settings → Pages, enter your custom domain

4. Deploy again: `npm run deploy`

## Environment Variables

If you want to use GitHub Personal Access Token for higher API limits:

1. Create `.env` file (already in .gitignore):
   ```
   VITE_GITHUB_TOKEN=your_token_here
   ```

2. Update `src/utils/githubApi.js` to use the token:
   ```javascript
   const token = import.meta.env.VITE_GITHUB_TOKEN;
   const headers = token ? { Authorization: `token ${token}` } : {};
   const response = await fetch(GITHUB_API_URL, { headers });
   ```

## Useful Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Deployment
npm run deploy       # Deploy to GitHub Pages

# Git
git status          # Check status
git log             # View commits
git diff            # See changes
```

## Support

If you encounter any issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review Vite's [deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
3. Check the browser console for errors
4. Verify all files are committed and pushed

---

**Happy Deploying! 🚀**

