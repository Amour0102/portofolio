// ─────────────────────────────────────────────────────────────────────────────
// Homepage content - mirrors the Paper "Home(Light)" source of truth.
// ─────────────────────────────────────────────────────────────────────────────

export type HomeProject = {
  id: string;
  /** Small label above the description (e.g. "AC Mobility"). */
  client: string;
  /** One-line description shown under the media. */
  description: string;
  image: string;
  /** Intrinsic media size from Paper (used for the aspect ratio). */
  width: number;
  height: number;
  /** Case-study link, when one exists. */
  href?: string;
};

export const homeProjects: HomeProject[] = [
  {
    id: "ac-mobility",
    client: "AC Mobility",
    description: "Redesigning the infrastructure behind Rwanda's public transport network.",
    image: "/images/projects/v2/ac-mobility.png",
    width: 590,
    height: 452,
    href: "/work/ac-mobility",
  },
  {
    id: "muvuzi",
    client: "Muvuzi",
    description:
      "Designing the brand, website and product experience for a pharmacy platform built for everyday operations",
    image: "/images/projects/v2/muvuzi.png",
    width: 590,
    height: 362,
    href: "/work/muvuzi",
  },
  {
    id: "handoff",
    client: "Handoff",
    description: "Designing the handoff between an AI coding agent and a human",
    image: "/images/projects/v2/handoff.png",
    width: 590,
    height: 420,
    href: "/work/handoff",
  },
  {
    id: "voit",
    client: "Voit",
    description: "Turning a design system into something designers could actually build with.",
    image: "/images/projects/v2/voit.png",
    width: 590,
    height: 287,
    href: "/work/voit",
  },
  {
    id: "orla3",
    client: "Orla3",
    description:
      "Designing the marketplace where booking a videographer means putting money on the line",
    image: "/images/projects/v2/orla3.png",
    width: 590,
    height: 429,
    href: "/work/orla3",
  },
];

export type WritingEntry = { title: string; description: string; href: string };

export const writingEntries: WritingEntry[] = [
  {
    title: "When money becomes a UI state",
    description:
      "What designing ticketing infrastructure taught me about balances, reversals, pending payments, and financial accountability.",
    href: "#",
  },
  {
    title: "When should an AI agent stop?",
    description:
      "What changed in Handoff after talking to developers who use AI coding agents every day.",
    href: "#",
  },
  {
    title: "Designing around a 2016 Android POS",
    description:
      "A closer look at what happens when the hardware becomes one of the biggest constraints in the product.",
    href: "#",
  },
];

export const aboutParagraphs: string[] = [
  "I'm a product designer working across strategy, systems, and interface design. I like projects where the answer isn't obvious yet: products with real constraints, complicated workflows, ambitious ideas, or a lot of moving pieces.",
  "I care about how a product works as much as how it looks, and I like getting close enough to the problem to understand what actually needs to be designed.",
];
// The closing "Based in Kigali..." line is rendered in About.tsx so it can carry
// inline links to X, LinkedIn, and email.

// "More Work" reel. A video is coming - when the file is ready, point `src` at it
// (e.g. "/videos/more-work.mp4") and optionally set a `poster` still. While this is
// null the section shows the placeholder surface from the Paper frame.
export const moreWorkVideo: { src: string; poster?: string } | null = null;

export const socials = {
  linkedin: "https://www.linkedin.com/in/cyusa-bahizi-amour-175a9a225/",
  x: "https://x.com/cyusa_drizy",
  email: "mailto:cyusaamour@gmail.com",
};
