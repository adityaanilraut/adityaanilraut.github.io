# Quick Start Guide 🚀

Get your portfolio up and running in 5 minutes!

## 1️⃣ Install Dependencies

```bash
cd /Users/aditya/Desktop/gitpages
npm install
```

## 2️⃣ Test Locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser

## 3️⃣ Deploy to GitHub Pages

### First Time Setup:

```bash
# Initialize and push to GitHub
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/adityaanilraut/gitpages.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

### Enable GitHub Pages:
1. Go to: https://github.com/adityaanilraut/gitpages/settings/pages
2. Set Source to `gh-pages` branch
3. Save

Your site: **https://adityaanilraut.github.io/gitpages/**

## 4️⃣ Future Updates

```bash
# Make your changes, then:
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

## ✨ Features

✅ Terminal-themed design  
✅ Dynamic GitHub API integration  
✅ Fully responsive  
✅ Smooth animations  
✅ Easy to customize

## 🎨 Customization

### Update Your Info:
- **Skills**: Edit `src/components/Skills.jsx`
- **Experience**: Edit `src/components/Experience.jsx`
- **Contact**: Edit `src/components/Contact.jsx`
- **Colors**: Edit CSS variables in `src/App.css`

### Change GitHub Username:
Edit `src/utils/githubApi.js`:
```javascript
const GITHUB_USERNAME = 'your-username';
```

### Pin Different Repos:
Edit `PINNED_REPOS` array in `src/utils/githubApi.js`

## 📱 Preview Commands

```bash
npm run dev      # Development mode
npm run build    # Build for production
npm run preview  # Preview build locally
npm run deploy   # Deploy to GitHub Pages
```

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- See `DEPLOYMENT.md` for troubleshooting
- Browser console for error messages

---



