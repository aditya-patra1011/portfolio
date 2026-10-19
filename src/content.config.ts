import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// One Markdown file per project in src/content/projects. The file name is the URL slug.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one or two sentences for cards
    // flagship: big cards on the home page; featured: grid; more: compact list
    tier: z.enum(["flagship", "featured", "more"]),
    status: z.enum(["shipped", "in-progress"]),
    order: z.number().default(100), // lower sorts first within a tier
    year: z.number(),
    domains: z.array(z.string()), // e.g. "Space", "Motorsport"
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]), // short, verifiable facts or metrics
    repo: z.url(),
    demo: z.url().optional(),
    cover: z.string().optional(), // path under /public, e.g. /projects/boxbox.png
  }),
});

export const collections = { projects };
