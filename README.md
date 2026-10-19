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
| `src/data/site.ts` | Name, tagline, links, skills, "Now" line, early work |
| `src/content/projects/*.md` | One case study per project; the file name is the URL slug |
| `src/content.config.ts` | Frontmatter schema for projects (tier, status, stack, highlights...) |
| `src/pages/` | Routes: home, `/projects`, `/projects/[slug]`, `/about`, 404 |
| `src/components/` | Header, footer, project card, list row, animated background |
| `src/styles/global.css` | Design tokens (dark neon theme) and shared styles |
| `public/` | Static files: favicon, project screenshots, `resume.pdf` |

## Adding a project

Create `src/content/projects/<slug>.md` with the frontmatter fields from `content.config.ts`.
`tier` decides placement: `flagship` (big cards on home), `featured` (grid), `more` (compact list).
