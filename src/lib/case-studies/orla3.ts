// ─────────────────────────────────────────────────────────────────────────────
// Orla3 case study - content, mirroring the Paper source of truth
// ("Designing trust into a marketplace where money moves before trust exists.").
// Typography is normalized to PP Neue Montreal to match the other case studies
// (this frame uses Inter). Each visual carries a short caption tied to the moment
// it shows in the buyer flow; the opening feed shot keeps its original line.
// ─────────────────────────────────────────────────────────────────────────────
import { MetaRow, VisualSection } from "./types";

export const orla3 = {
  title: "Designing trust into a marketplace where money moves before trust exists.",

  summary:
    "Designing trust into a UK marketplace where money moves before trust exists, escrow, delivery, and structured handover between two strangers.",

  intro: [
    "Orla3 is a UK marketplace connecting people with professional videographers. The challenge wasn't simply finding someone to film an event. It was creating enough trust for two strangers to agree on a brief, exchange money, deliver finished work, and resolve issues when expectations weren't met.",
    "As the sole product designer, I designed both sides of the marketplace, from discovery and booking to escrow, delivery, amendments, payments, and post-booking management. The product had to make the transaction understandable for first-time buyers while giving videographers control over their availability, enquiries, pricing, and work.",
    "Orla3 launched in the UK with 500 videographers joining the platform at launch, with escrow and structured handover at the centre of the experience.",
  ],

  meta: [
    { label: "Industry", value: "Marketplace" },
    { label: "Project Stage", value: "Launched 2025" },
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "2 Months" },
    { label: "Services Provided", value: "Product Design" },
  ] as MetaRow[],

  visuals: [
    // Keeps its frame (no bordered:false): this is a dark screenshot, so in dark
    // mode the border defines its edge against the near-black page instead of the
    // black content dissolving into it. The light/grey shots below stay borderless.
    { kind: "web", image: { src: "/images/case-studies/orla3/feed.png", alt: "Orla3, feed with a videographer showcase" }, ratio: "4320 / 3072", caption: "Discovering a videographer; showreel, price range, and availability." },
    { kind: "web", image: { src: "/images/case-studies/orla3/location-time.png", alt: "Orla3, choosing shoot location, date, and estimated duration" }, ratio: "4320 / 3072", bordered: false, caption: "Pricing complexity stays behind a simpler question for the buyer." },
    { kind: "web", image: { src: "/images/case-studies/orla3/question1.png", alt: "Orla3, an open question about the video brief" }, ratio: "4320 / 3072", bordered: false, caption: "The brief begins as a plain question, not a form." },
    { kind: "web", image: { src: "/images/case-studies/orla3/payment.png", alt: "Orla3, confirm and pay with escrow and a full price breakdown" }, ratio: "4320 / 3072", bordered: false, caption: "The full financial commitment is visible before the buyer pays." },
    { kind: "web", image: { src: "/images/case-studies/orla3/buyer-work-review.png", alt: "Orla3, reviewing the delivered work with accept, amend, or decline" }, ratio: "4320 / 3072", bordered: false, caption: "One screen resolves the most important moment between buyer and seller." },
    { kind: "web", image: { src: "/images/case-studies/orla3/amendment-request.png", alt: "Orla3, describing the amendments needed on delivered work" }, ratio: "4314 / 3066", bordered: false, caption: "Marketplace rules surface at the moment they affect the transaction." },
    { kind: "web", image: { src: "/images/case-studies/orla3/video-declined.png", alt: "Orla3, a declined video preview with the payment held" }, ratio: "4320 / 3072", bordered: false, caption: "A decline keeps the payment in escrow, not with the seller." },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/ac-mobility" },
};
