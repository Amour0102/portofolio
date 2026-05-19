/** Open Graph / Twitter / link-preview image (1200×630) */
export const SOCIAL_THUMBNAIL = "/images/social-thumbnail-1200x630.png";

export const SOCIAL_THUMBNAIL_WIDTH = 1200;
export const SOCIAL_THUMBNAIL_HEIGHT = 630;

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
