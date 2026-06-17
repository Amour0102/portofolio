import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { getSiteUrl } from "@/lib/site";

// ── Static routes ──────────────────────────────────────────────────────────────
// Add new top-level pages here. Work case studies are auto-discovered below.
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
];

// ── Auto-discover /work/* case studies ────────────────────────────────────────
function getCaseStudyRoutes(): MetadataRoute.Sitemap {
  const workDir = path.join(process.cwd(), "src", "app", "work");

  if (!fs.existsSync(workDir)) return [];

  return fs
    .readdirSync(workDir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        fs.existsSync(path.join(workDir, entry.name, "page.tsx"))
    )
    .map((entry) => ({
      url: `${getSiteUrl()}/work/${entry.name}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticEntries, ...getCaseStudyRoutes()];
}
