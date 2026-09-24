import type { Metadata } from "next";
import {
  getSiteUrl,
  SOCIAL_THUMBNAIL,
  SOCIAL_THUMBNAIL_HEIGHT,
  SOCIAL_THUMBNAIL_WIDTH,
} from "@/lib/site";

// Per-case-study cover image (its homepage thumbnail) + short name, used for
// the link-preview card and structured data. Falls back to the site thumbnail.
const CASE_STUDY_OG: Record<
  string,
  { image: string; width: number; height: number; name: string }
> = {
  "/work/ac-mobility": {
    image: "/images/projects/v2/ac-mobility.png",
    width: 1180,
    height: 904,
    name: "AC Mobility",
  },
  "/work/muvuzi": {
    image: "/images/case-studies/muvuzi/hero-section.png",
    width: 4536,
    height: 2730,
    name: "Muvuzi",
  },
  "/work/handoff": {
    image: "/images/projects/v2/handoff.png",
    width: 1180,
    height: 840,
    name: "Handoff",
  },
  "/work/voit": {
    image: "/images/projects/v2/voit.png",
    width: 1180,
    height: 574,
    name: "Voit",
  },
  "/work/orla3": {
    image: "/images/case-studies/orla3/feed.png",
    width: 4320,
    height: 3072,
    name: "Orla3",
  },
};

function ogImageFor(path: string) {
  const og = CASE_STUDY_OG[path];
  return og
    ? { url: og.image, width: og.width, height: og.height }
    : { url: SOCIAL_THUMBNAIL, width: SOCIAL_THUMBNAIL_WIDTH, height: SOCIAL_THUMBNAIL_HEIGHT };
}

// Builds per-case-study metadata so each page has its own title, description,
// canonical URL, and link-preview card (correct SEO + social sharing instead of
// inheriting the generic homepage values).
export function caseStudyMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const cleanTitle = title.replace(/\.$/, "");
  const fullTitle = `${cleanTitle}, Cyusa Amour`;
  const url = `${getSiteUrl()}${path}`;
  const img = ogImageFor(path);

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "article",
      images: [{ url: img.url, width: img.width, height: img.height, type: "image/png", alt: cleanTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: img.url, width: img.width, height: img.height, alt: cleanTitle }],
    },
  };
}

// CreativeWork + BreadcrumbList structured data for a case study, linked to the
// site's Person/WebSite entities defined in the root layout.
export function caseStudyJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const site = getSiteUrl();
  const url = `${site}${path}`;
  const og = CASE_STUDY_OG[path];
  const cleanTitle = title.replace(/\.$/, "");
  const image = new URL(og?.image ?? SOCIAL_THUMBNAIL, site).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: cleanTitle,
        headline: cleanTitle,
        description,
        url,
        image,
        inLanguage: "en",
        author: { "@id": `${site}/#person` },
        creator: { "@id": `${site}/#person` },
        isPartOf: { "@id": `${site}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site },
          { "@type": "ListItem", position: 2, name: og?.name ?? cleanTitle, item: url },
        ],
      },
    ],
  };
}
