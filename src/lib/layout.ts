/** Shared horizontal page padding — 24px */
export const siteX = "px-6 md:px-10 lg:px-12 xl:px-6";

export type GalleryMetrics = {
  edgePad: number;
  /** Gap between images inside a group */
  gap: number;
  /** Gap between groups on the horizontal track */
  groupGap: number;
  /** Shared outer height for phone + web cards */
  cardH: number;
  useCompactSticky: boolean;
  web: { pad: number; imgW: number; imgH: number };
  phone: { pad: number; imgW: number; imgH: number };
};

const PHONE_ASPECT = 240 / 494;
const WEB_ASPECT = 759 / 540;

function buildMetrics(
  viewportWidth: number,
  opts: {
    cardH: number;
    gap: number;
    groupGap: number;
    edgePad: number;
    phonePad: number;
    webPad: number;
    useCompactSticky: boolean;
  }
): GalleryMetrics {
  const { cardH, gap, groupGap, edgePad, phonePad, webPad, useCompactSticky } = opts;

  const phoneImgH = cardH - phonePad * 2;
  const phoneImgW = Math.round(phoneImgH * PHONE_ASPECT);

  let webImgH = cardH - webPad * 2;
  let webImgW = Math.round(webImgH * WEB_ASPECT);
  const maxWebW = viewportWidth - edgePad * 2 - webPad * 2;
  if (webImgW > maxWebW && maxWebW > 0) {
    webImgW = maxWebW;
    webImgH = Math.round(webImgW / WEB_ASPECT);
  }

  return {
    edgePad,
    gap,
    groupGap,
    cardH,
    useCompactSticky,
    web: { pad: webPad, imgW: webImgW, imgH: webImgH },
    phone: { pad: phonePad, imgW: phoneImgW, imgH: phoneImgH },
  };
}

export function getGalleryStickyHeight(m: GalleryMetrics): number {
  return m.cardH;
}

export function getGalleryMetrics(viewportWidth: number): GalleryMetrics {
  if (viewportWidth >= 1280) {
    return buildMetrics(viewportWidth, {
      cardH: 574,
      gap: 24,
      groupGap: 24,
      edgePad: 0,
      phonePad: 40,
      webPad: 16,
      useCompactSticky: false,
    });
  }
  if (viewportWidth >= 768) {
    const s = 0.82;
    return buildMetrics(viewportWidth, {
      cardH: 574 * s,
      gap: 24,
      groupGap: 24,
      edgePad: 24,
      phonePad: 32,
      webPad: 14,
      useCompactSticky: false,
    });
  }
  if (viewportWidth >= 480) {
    return buildMetrics(viewportWidth, {
      cardH: 400,
      gap: 24,
      groupGap: 24,
      edgePad: 24,
      phonePad: 16,
      webPad: 12,
      useCompactSticky: true,
    });
  }
  return buildMetrics(viewportWidth, {
    cardH: 320,
    gap: 24,
    groupGap: 24,
    edgePad: 24,
    phonePad: 16,
    webPad: 12,
    useCompactSticky: true,
  });
}
