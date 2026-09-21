import type { Metadata } from "next";
import {
  getSiteUrl,
  SOCIAL_THUMBNAIL,
  SOCIAL_THUMBNAIL_HEIGHT,
  SOCIAL_THUMBNAIL_WIDTH,
} from "@/lib/site";

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

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: "article",
      images: [
        {
          url: SOCIAL_THUMBNAIL,
          width: SOCIAL_THUMBNAIL_WIDTH,
          height: SOCIAL_THUMBNAIL_HEIGHT,
          type: "image/png",
          alt: cleanTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [
        {
          url: SOCIAL_THUMBNAIL,
          width: SOCIAL_THUMBNAIL_WIDTH,
          height: SOCIAL_THUMBNAIL_HEIGHT,
          alt: cleanTitle,
        },
      ],
    },
  };
}
