# Alfian Mutakim — Portfolio

Personal portfolio website built with React, Vite, Bootstrap, and AOS, deployed to GitHub Pages at `/my-portfolio/`.

## Pages

| Route            | Content                                                        |
| ---------------- | -------------------------------------------------------------- |
| `/home`          | Profile, tech stack, education, achievements, experience       |
| `/projects`      | Project gallery (GitHub, Figma, and Drive links)               |
| `/skills`        | Tools and technologies (from `src/data/techStack.js`)          |
| `/certification` | Certificates with links to the original files                  |
| `/contact`       | Contact form (sent via EmailJS) and social media links         |

Page content lives in data arrays at the top of each component (`projectData`, `certifications`, `educationData`, and so on). To add an item, append an object to the relevant array.

## Scripts

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # build to dist/ (also copies index.html to 404.html)
npm run preview   # preview the production build
npm run lint      # run ESLint
npm run deploy    # manual deploy: build and publish dist/ to the gh-pages branch
```

`404.html` is a copy of `index.html`, so GitHub Pages serves the app for every route and refreshing a page such as `/my-portfolio/projects` works.

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which installs dependencies, runs the linter, builds the site, and publishes `dist/` to the `gh-pages` branch. GitHub Pages serves that branch at <https://alfianmutaqin01.github.io/my-portfolio/>, usually within a couple of minutes. If the lint or build step fails, nothing is published and the live site stays as it was.

To redeploy without a new commit, open the **Actions** tab on GitHub, pick **Deploy to GitHub Pages**, and click **Run workflow**.
