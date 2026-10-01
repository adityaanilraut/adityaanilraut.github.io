# Aditya Raut — Software Engineer

Portfolio: **https://adityaanilraut.github.io/**

A React + Vite portfolio focused on backend engineering, AI systems, and inspectable project evidence. Professional experience comes from the supplied September 2026 résumé; project descriptions were checked against current public repository documentation.

## Develop

Use Node.js 22.12+.

```sh
npm ci
npm run dev
npm run sync:repos
npm run build
npm run preview
```

The build produces `dist/`. It renders the entire portfolio to HTML before publishing, then hydrates React for filters, repository search, and the mobile menu. Text, résumé links, project sources, and native engineering-note disclosures are available before JavaScript loads. System illustrations are lightweight CSS graphics.

## Update content

- `src/data/portfolio.js`: identity, contact, selected projects, experience, skills.
- `public/Aditya_Anil_Raut_resume.pdf`: the current supplied résumé, used by every résumé link.
- `src/data/repos.json`: saved public repository snapshot. Refresh with `npm run sync:repos`.
- `src/components/`: page sections and interactions.
- `src/App.css`: responsive design, focus states, reduced-motion and print styles.
- `index.html`: search metadata, social card, canonical URL, and ProfilePage structured data.

The browser requests fresh public repositories from GitHub with an eight-second deadline. A saved snapshot appears immediately and remains available during rate limits or network errors. No client API keys or personal access tokens are used. Only non-fork, non-archived public repositories are displayed.

## Publishing

`.github/workflows/deploy.yml` builds and publishes through the official GitHub Pages actions on pushes to `main`, manual runs, and a weekly repository refresh. Set Settings → Pages → Source to **GitHub Actions**. The existing `gh-pages` branch is preserved as deployment history.

The weekly run refreshes the build's repository snapshot; it does not overwrite editorial project write-ups or commit generated snapshots into `main`. Review selected projects periodically for new evidence and outcomes. See [DEPLOYMENT.md](DEPLOYMENT.md).

## Content integrity

Professional metrics are résumé-reported. CoderAI's precision and review latency are labeled as project-reported results for the linked 50-PR evaluation configuration. CodeAgentBench's 10-task sample mixes five SWE-bench Verified and five local tasks. TurboQuant reports analytical cache storage and simulation-path overhead, not measured production compressed-cache savings. No new employment, awards, global rankings, or unverified production claims were added.

The root PDF aliases match the current résumé for compatibility. `resume.tex`, `code.html`, and ASCII art are legacy source/reference artifacts and do not drive the current site. The supplied PDF is the authoritative download.

## Validation

Run `npm run build` and `npm audit`. Verify mobile navigation, keyboard focus, project category filters, engineering notes, repository search/language filters/pagination, no-results recovery, and résumé downloads in a browser. Confirm the built HTML contains meaningful content without JavaScript. See [DESIGN.md](DESIGN.md) for design and accessibility decisions.
