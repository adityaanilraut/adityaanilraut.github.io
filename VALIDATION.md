# Portfolio validation — September 30, 2026

## Content and assets

- Extracted and visually inspected the supplied `Aditya.pdf`; professional dates, roles, degree completion, email, and impact figures follow that résumé.
- Reviewed the live portfolio and all 37 current public repositories. Curated project write-ups follow public README/architecture/evaluation documentation.
- Corrected project repository targets and limited benchmark claims to their published scope. TurboQuant's analytical memory estimates and simulation overhead are identified explicitly.
- Verified SHA-256 equality of every résumé PDF alias and the built download against the supplied PDF.
- Verified prerendered HTML contains professional content and project sources, valid section anchors, unique IDs, and parseable structured data. Checked favicon, social image, sitemap, robots, and `.nojekyll` in the build.

## Browser checks on the production build

- Desktop: 1280px; tablet: 768px; phones: 390px and 320px. No page-level horizontal overflow.
- Project filters: Products shows VoxLibri; ML infrastructure shows retrieval, TurboQuant, and satellite classification; the initial view includes CoderAI and six cards.
- Engineering disclosures open and expose problem, implementation, evidence, and source links.
- Repository search finds CoderAI and its Homebrew tap; Swift filtering finds Xcode-Apps. An unmatched search displays recovery controls, and clearing filters restores results. Pagination increases visible repositories from 6 to 15.
- Mobile menu announces expanded state, closes after section navigation, and closes with Escape.
- Contact email copy displays success feedback. Résumé actions all target the verified current file.
- Production hydration produced no browser console warnings/errors during these checks.
- Small light-surface labels were adjusted after a computed-style contrast review. Decorative project diagrams are hidden from assistive technology. This was a focused review, not a formal accessibility certification.

## Build and publishing

- Production client build, static rendering, and hydration completed successfully.
- `npm audit` reported zero vulnerabilities after dependency updates.
- `git diff --check` passed.
- GitHub Pages publishing uses official actions, with `main` already allowed by the existing deployment environment. The workflow also refreshes repository metadata weekly.

The published evaluation figures were not independently rerun; they are labeled as project-reported and linked to their methodology. Professional figures remain résumé-reported.
