import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

// Lists the homepage and every case study for search engines.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const paths = [
    "",
    "/work/ac-mobility",
    "/work/muvuzi",
    "/work/handoff",
    "/work/voit",
    "/work/orla3",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
