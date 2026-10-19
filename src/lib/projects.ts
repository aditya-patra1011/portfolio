import { getCollection, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"projects">;

const tierRank = { flagship: 0, featured: 1, more: 2 } as const;

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection("projects");
  return all.sort(
    (a, b) =>
      tierRank[a.data.tier] - tierRank[b.data.tier] ||
      a.data.order - b.data.order ||
      b.data.year - a.data.year,
  );
}

export function byTier(projects: Project[], tier: Project["data"]["tier"]) {
  return projects.filter((p) => p.data.tier === tier);
}
