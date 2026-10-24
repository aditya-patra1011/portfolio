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
| `src/data/site.ts` | Name, tagline, links, experience tablets, stat coins, gifts, skills |
| `src/content/projects/*.md` | One case study per project; the file name is the URL slug |
| `src/content.config.ts` | Frontmatter schema for projects (tier, status, stack, highlights...) |
| `src/pages/` | Routes: the temple home page (entrance, five halls), `/projects` (treasury), `/projects/[slug]` (a scroll), 404 |
| `src/components/` | Header, footer, hall heading, temple banner, column, scroll card/modal/content, `Poseidon` guide |
| `src/styles/global.css` | Design tokens (marble, Aegean blue, gold) and shared styles |
| `public/` | Static files: favicon, project screenshots, `resume.pdf` |

## Adding a project

Create `src/content/projects/<slug>.md` with the frontmatter fields from `content.config.ts`.
`flagship` and `featured` projects appear on the home page; every project appears in `/projects`.

## The guide

Poseidon stands in the bottom-right corner of the home page and walks visitors through it step by step.
Each section with a `data-tour` attribute is a step: `data-tour` is his line, `data-tour-title` is the step name,
and the optional `data-tour-point` is a CSS selector he aims his trident at. Scrolling moves the steps along, and
the Back / Next buttons jump between them. Visitors can dismiss him; the choice is remembered in their browser.
