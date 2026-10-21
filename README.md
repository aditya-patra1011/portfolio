# Portfolio

Personal portfolio of M. Aditya Patra, built with [Astro](https://astro.build) as a static site.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/site.ts` | Name, tagline, links, photo, experience cards, stats, services, skills |
| `src/content/projects/*.md` | One case study per project; the file name is the URL slug |
| `src/content.config.ts` | Frontmatter schema for projects (tier, status, stack, highlights...) |
| `src/pages/` | Routes: one-page home, `/projects`, `/projects/[slug]`, 404 |
| `src/components/` | Header, footer, section heading, page banner, project card |
| `src/styles/global.css` | Design tokens (dark + green) and shared styles |
| `public/` | Static files: favicon, contour background, project screenshots, `resume.pdf` |

To use a photo, put it in `public/` (for example `public/me.jpg`) and set `photo: "/me.jpg"` in `src/data/site.ts`.

## Adding a project

Create `src/content/projects/<slug>.md` with the frontmatter fields from `content.config.ts`.
`tier` decides placement: `flagship` (big cards on home), `featured` (grid), `more` (compact list).
