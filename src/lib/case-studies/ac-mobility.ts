// ─────────────────────────────────────────────────────────────────────────────
// AC Mobility case study - content, mirroring the Paper source of truth
// ("Redesigning the infrastructure behind Rwanda's public transport network").
// Visual-section images reuse the existing assets (the visuals may be updated later).
// ─────────────────────────────────────────────────────────────────────────────

import { MetaRow, VisualSection } from "./types";
export type { MetaRow, Shot, VisualSection } from "./types";

export const acMobility = {
  title: "Redesigning the infrastructure behind Rwanda's public transport network.",

  summary:
    "Replacing a $12,000/month vendor platform with in-house ticketing infrastructure for Rwanda's upcountry bus network, across two product generations.",

  intro: [
    "AC Mobility runs ticketing for Rwanda's upcountry bus network, and was licensing the whole operation from an external vendor for roughly $12,000 a month. Feature requests sat in a shared queue with no committed timeline, and reporting gaps left management working from incomplete information about its own revenue.",
    "An agent with no float cannot sell a ticket. On the vendor platform agents found that out by trying. When they needed more float they photographed a bank deposit slip into a WhatsApp group and waited, and the estimate failed hardest on the days they could least afford to stop selling. That was one of four operational workarounds discovery turned up, and each one marked the edge of what a shared-configuration platform could represent for a network of operators who compete with each other.",
    "I was the sole product designer across two generations of the replacement. V1 shipped in four months and gave AC Mobility ownership of its operations. After thirteen months running it, I proposed and drove V2, rebuilding the model underneath so relationships between buses, stops, routes and operators became assignable rather than fixed, and so float, authority and audit history became part of the interface rather than conditions sitting behind it.",
    "Daily upcountry revenue went from roughly $60K on the vendor platform to $90K on V1 and roughly $130K on V2, on a network that grew from 17 operators to 21. Float failures stopped appearing as a support category, and the $12,000 monthly contract is gone.",
    "V2 also introduced a problem V1 did not have. It became more capable faster than some users became comfortable with its model, and where the correct path costs more thought than the workaround, the workaround wins. That changed how I think about operational software: a capability is not finished when the system can support it, it is finished when the right path is easier than the way around it.",
  ],

  meta: [
    { label: "Industry", value: "Transportation & Mobility" },
    { label: "Role", value: "Product designer, Researcher" },
    { label: "Timeline", value: "Two generations, July 2024-July 2026" },
    {
      label: "Scope",
      value: "Operations Web, Android POS, Commuter App, Inspector App, USSD, Design System",
    },
    { label: "Scale", value: "21 Operators, 995 Agents, 2,032,930 Tickets/month" },
    { label: "Team", value: "V1: 1 PM, 6 Engineers, 1 DevOps\nV2: 4 Engineers, 2 DevOps" },
  ] as MetaRow[],

  visuals: [
    {
      kind: "video",
      src: "https://res.cloudinary.com/jsgwyynr/video/upload/f_auto,q_auto:best/v1790166800/e-ticketing.mp4",
      poster: "https://res.cloudinary.com/jsgwyynr/video/upload/so_0/v1790166800/e-ticketing.jpg",
      ratio: "3036 / 2160",
      caption: "Operator dashboard, tickets, sales trips, activity overview",
    },
    // Ticket-history visual ("Every modification attributed, timestamped, and
    // reason-coded") temporarily removed per request - restore when ready.
    {
      kind: "video",
      src: "https://res.cloudinary.com/jsgwyynr/video/upload/f_auto,q_auto:best/v1790168106/pos-design.mp4",
      poster: "https://res.cloudinary.com/jsgwyynr/video/upload/so_0/v1790168106/pos-design.jpg",
      ratio: "3022 / 2160",
      bordered: false,
      caption: "The agent POS; selling a ticket, from trip details to issued receipt.",
    },
    {
      kind: "phones",
      images: [
        { src: "/images/case-studies/ac-mobility/inspector-1.png", alt: "Inspector scan" },
        { src: "/images/case-studies/ac-mobility/inspector-2.png", alt: "Inspector validated" },
        { src: "/images/case-studies/ac-mobility/inspector-3.png", alt: "Inspector cancelled" },
      ],
      caption: "Inspector scan result screen, validated and cancelled states",
    },
    {
      kind: "video",
      src: "/images/case-studies/ac-mobility/tap-go-app.mp4",
      ratio: "3036 / 2160",
      caption: "Tap&Go core flow: home, booking, and ticket confirmation screens",
    },
    {
      kind: "phones",
      images: [
        { src: "/images/case-studies/ac-mobility/ussd-1.png", alt: "USSD top-up step 1" },
        { src: "/images/case-studies/ac-mobility/ussd-2.png", alt: "USSD top-up step 2" },
        { src: "/images/case-studies/ac-mobility/ussd-3.png", alt: "USSD top-up step 3" },
      ],
      caption: "USSD top-up flow, step-by-step dialogue states",
    },
  ] as VisualSection[],

  next: { label: "Next Case Study", href: "/work/muvuzi" },
};
