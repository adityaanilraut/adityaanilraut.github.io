# Project structure

- `src/main.jsx`: client hydration, with a development render fallback.
- `src/entry-server.jsx`: build-time React rendering.
- `src/App.jsx`: navigation, shared presentation helpers, page composition, footer.
- `src/components/`: hero, selected projects/repository directory, experience, about, skills, contact.
- `src/data/portfolio.js`: curated professional and project content.
- `src/data/repos.json`: public GitHub snapshot.
- `src/utils/githubApi.js`: paginated public API retrieval and normalization.
- `src/App.css`: design, responsive rules, accessibility and print styles.
- `scripts/sync-repos.mjs`: refreshes the saved repository snapshot.
- `scripts/prerender.mjs`: injects rendered content into built HTML.
- `public/`: résumé, favicon, social image, sitemap, robots, and `.nojekyll`.
- `.github/workflows/deploy.yml`: build, weekly snapshot refresh, and GitHub Pages publishing.
- `dist/`: generated deployment output (ignored).

Root PDF aliases are retained for compatibility and match the current download. `resume.tex`, `code.html`, and `ascii-text-art.txt` are legacy reference artifacts, not website inputs.
