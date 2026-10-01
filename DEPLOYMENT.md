# Deployment

The live site is https://adityaanilraut.github.io/ and the repository is `adityaanilraut/adityaanilraut.github.io`.

1. Use Node.js 22.12+ and run `npm ci`.
2. Run `npm run sync:repos`, `npm run build`, and `npm run preview` locally.
3. Commit reviewed changes to `main` and push.
4. The **Build and publish portfolio** workflow builds, prerenders, and uploads `dist/` through official GitHub Pages actions.
5. Wait for the deployment job to succeed and verify the live content and PDF.

Pages must use **GitHub Actions** as its build source. The deployment workflow has only `contents: read`, `pages: write`, and `id-token: write`; no separate token secret is needed. The `github-pages` environment must allow deployment from `main`.

Every Monday at 16:17 UTC, the workflow refreshes the public repository snapshot and republishes. The public browser API updates the repository directory on visits as well. Curated descriptions and professional experience remain editorial content.

The `gh-pages` branch remains intact for historical reference. `npm run deploy` manually triggers the publishing workflow using an authenticated GitHub CLI. To roll back the site, revert the source commit on `main` and let the workflow publish the previous content. No custom domain or paid hosting is required.
