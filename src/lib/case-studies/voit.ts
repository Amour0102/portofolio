// ─────────────────────────────────────────────────────────────────────────────
// Voit case study - content, mirroring the Paper source of truth
// ("Turning a design system into something designers could actually build with.").
// Typography is normalized to PP Neue Montreal to match the other case studies
// (the Paper frame itself uses Inter). Visual sections carry no captions; one
// video slot and one surface are placeholders.
// ─────────────────────────────────────────────────────────────────────────────
import { MetaRow, VisualSection } from "./types";

export const voit = {
  title: "Turning a design system into something designers could actually build with.",

  summary:
    "Designing the Blocks layer of a Figma design system, 150+ responsive compositions that take designers from components to complete product screens.",

  intro: [
    "Voit is a Figma design system built to help teams move from foundations to complete product interfaces faster. When I joined, the foundations, components, and patterns were already established. The missing layer was the one designers needed most when building real products: complete screens",
    "I was brought in to design the Blocks layer, creating full-page compositions across 13 categories while working within the existing system. Every block had to be useful on its own while remaining consistent with the foundations underneath it.",
    "I designed 150+ responsive blocks across light and dark themes, turning the system into something designers could use to move from individual components to complete product experiences.",
  ],

  meta: [
    { label: "Industry", value: "Design" },
    { label: "Project Stage", value: "Launched" },
    { label: "Role", value: "Design Systems Specialist" },
    { label: "Timeline", value: "3 Months" },
    { label: "Services Provided", value: "Design systems, UX/UI, Responsive design, Component Composition" },
  ] as MetaRow[],

  visuals: [
    // Explaining video - hosted on S3 and referenced directly (not committed to the repo).
    { kind: "video", src: "https://voit-videos.s3.us-east-1.amazonaws.com/Explaning%20Video.mp4", ratio: "16 / 9", caption: "The system in motion, from foundations to finished screens." },
    { kind: "web", image: { src: "/images/case-studies/voit/component.png", alt: "Voit, Components library" }, ratio: "816 / 455", caption: "The Components library: buttons, inputs, and the building blocks." },
    { kind: "web", image: { src: "/images/case-studies/voit/blocks.png", alt: "Voit, Blocks library" }, ratio: "816 / 455", caption: "The Blocks layer, full-page compositions across 13 categories." },
    { kind: "web", image: { src: "/images/case-studies/voit/pattern.png", alt: "Voit, Pattern library: media, navigation, sections, and utilities" }, ratio: "1632 / 816", caption: "Patterns; the media, navigation, and utilities that hold the system together." },
    { kind: "web", image: { src: "/images/case-studies/voit/dashboard-block-composition.png", alt: "Voit, dashboard block composition" }, ratio: "817 / 453", caption: "Blocks composed into a complete dashboard, end to end." },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/orla3" },
};
