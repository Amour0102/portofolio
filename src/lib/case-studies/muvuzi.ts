// ─────────────────────────────────────────────────────────────────────────────
// Muvuzi case study - content, mirroring the Paper source of truth
// ("Designing the brand, website and product experience for a pharmacy platform…").
// Visuals are empty placeholders in the design; surfaces are reserved with captions.
// ─────────────────────────────────────────────────────────────────────────────
import { MetaRow, VisualSection } from "./types";

export const muvuzi = {
  title:
    "Designing the brand, website and product experience for a pharmacy platform built for everyday operations",

  summary:
    "Brand, website, and product design for a Rwandan pharmacy platform, inventory, dispensing, and insurance brought together in one operational SaaS.",

  intro: [
    "Muvuzi is a pharmacy management platform built for pharmacies in Rwanda. The initial brief outlined six modules, but turning that idea into a product meant defining how inventory, dispensing, insurance, branches, staff, subscriptions, and administration should actually work together.",
    "I owned the product strategy, architecture, UX, content, and interaction design, taking Muvuzi from that high-level brief to a 229-screen multi-tenant SaaS product. Feedback from pharmacy owners and staff validated the operational problems behind the product and uncovered another opportunity: giving patients a way to check where a drug is available before visiting a pharmacy.",
    "Muvuzi has secured Mastercard funding and mentorship and has its first pharmacy clients lined up for testing.",
  ],

  meta: [
    { label: "Industry", value: "Healthtech, Pharmacy SaaS" },
    { label: "Project Stage", value: "Pre-launch" },
    { label: "Role", value: "Product Designer, Strategist" },
    { label: "Services Provided", value: "Product Strategy, Product Design, Brand Design" },
  ] as MetaRow[],

  visuals: [
    { kind: "video", src: "/images/case-studies/muvuzi/muvuzi-brand.mp4", ratio: "3710 / 2160", caption: "The Muvuzi identity, one wordmark and a green system built for every surface." },
    { kind: "video", src: "/images/case-studies/muvuzi/muvuzi-landing2.mp4", ratio: "3438 / 2160", bordered: false, caption: "The landing page, six modules distilled into one scroll for pharmacy owners." },
    { kind: "video", src: "https://res.cloudinary.com/jsgwyynr/video/upload/f_auto,q_auto:best/v1790167173/muvuzi-showcase1.mp4", poster: "https://res.cloudinary.com/jsgwyynr/video/upload/so_0/v1790167173/muvuzi-showcase1.jpg", ratio: "3326 / 2160", caption: "Inside the workspace; inventory, dispensing, and insurance in one flow." },
    { kind: "web", image: { src: "/images/case-studies/muvuzi/findmedication.png", alt: "Muvuzi, patients search a medication and see nearby pharmacies with it in stock" }, ratio: "4536 / 2946", caption: "The patient side: search a medication, see which nearby pharmacies have it in stock." },
    { kind: "video", src: "https://res.cloudinary.com/jsgwyynr/video/upload/f_auto,q_auto:best/v1790167749/muvuzi-showcase2.mp4", poster: "https://res.cloudinary.com/jsgwyynr/video/upload/so_0/v1790167749/muvuzi-showcase2.jpg", ratio: "3326 / 2160", caption: "Purchase orders; procurement across suppliers, from draft to received." },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/handoff" },
};
