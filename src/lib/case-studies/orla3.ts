// ─────────────────────────────────────────────────────────────────────────────
// Orla3 case study - content, mirroring the Paper source of truth
// ("Designing trust into a marketplace where money moves before trust exists.").
// Typography is normalized to PP Neue Montreal to match the other case studies
// (this frame uses Inter). Visual sections carry no captions.
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
    { kind: "web", image: { src: "/images/case-studies/orla3/orla3-1.png", alt: "Orla3 - feed with a videographer showcase" }, ratio: "816 / 581", caption: "Discovering a videographer - showreel, price range, and availability." },
    { kind: "web", image: { src: "/images/case-studies/orla3/orla3-2.png", alt: "Orla3 - chat with delivery preview and booking details" }, ratio: "816 / 580", caption: "Delivery arrives in chat, with the booking details alongside." },
    { kind: "web", image: { src: "/images/case-studies/orla3/orla3-3.png", alt: "Orla3 - requesting amendments in chat" }, ratio: "817 / 581", caption: "Requesting amendments before the work is accepted." },
    { kind: "web", image: { src: "/images/case-studies/orla3/orla3-4.png", alt: "Orla3 - confirm and pay with escrow" }, ratio: "816 / 580", caption: "Confirm and pay - the fee held in escrow until handover." },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/ac-mobility" },
};
