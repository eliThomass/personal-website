# personal-website
A website showcasing my Software Engineering and Computer Science skills and achievements.

## Deployment

This project deploys to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```

This runs `npm run build` first (via the `predeploy` script), then publishes the `dist/` folder to the `gh-pages` branch.
