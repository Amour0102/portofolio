export type GalleryImage = {
  src: string;
  alt: string;
};

export type GalleryGroup = {
  id: string;
  images: GalleryImage[];
};

export type Project = {
  id: string;
  title: string;
  client: string;
  tags: ("Apps" | "Website")[];
  image: string;
  description: string;
  href: string;
};

// Gallery groups match Paper design exactly — 5 rounded #F8F8F8 cards, each
// with its own set of phones. Order and grouping follow the Paper canvas.
export const galleryGroups: GalleryGroup[] = [
  {
    id: "group-1",
    images: [
      { src: "/images/gallery/2F-0.png", alt: "AC Mobility – confirm stop location" },
      { src: "/images/gallery/2G-0.png", alt: "AC Mobility – map stop submit" },
    ],
  },
  {
    id: "group-2",
    images: [
      { src: "/images/gallery/20-0.png",  alt: "AC Mobility – account screen" },
      { src: "/images/gallery/1Z-0.png",  alt: "AC Mobility – review & pay" },
      { src: "/images/gallery/1Y-0.png",  alt: "AC Mobility – live bus tracking" },
    ],
  },
  {
    id: "group-3",
    images: [
      { src: "/images/gallery/1J-0.png", alt: "Ishoka – word of the day" },
      { src: "/images/gallery/1K-0.png", alt: "Ishoka – word detail" },
      { src: "/images/gallery/1L-0.png", alt: "Ishoka – lock screen" },
    ],
  },
  {
    id: "group-4",
    images: [
      { src: "/images/gallery/2B-0.png", alt: "InspectorApp – home dashboard" },
      { src: "/images/gallery/2C-0.png", alt: "Zentra – login screen" },
    ],
  },
  {
    id: "group-5",
    images: [
      { src: "/images/gallery/2J-0.png", alt: "VugoGo – map view" },
      { src: "/images/gallery/2K-0.png", alt: "VugoGo – sidebar" },
    ],
  },
  {
    id: "group-6",
    images: [
      { src: "/images/gallery/1S-0.png", alt: "App screen – 1S" },
    ],
  },
  {
    id: "group-7",
    images: [
      { src: "/images/gallery/1U-0.png", alt: "App screen – 1U" },
    ],
  },
  {
    id: "group-8",
    images: [
      { src: "/images/gallery/1Q-0.png", alt: "App screen – 1Q" },
      { src: "/images/gallery/2Q-0.png", alt: "App screen – 2Q" },
    ],
  },
  {
    id: "group-9",
    images: [
      { src: "/images/gallery/1R-0.png", alt: "App screen – 1R" },
    ],
  },
  {
    id: "group-10",
    images: [
      { src: "/images/gallery/1T-0.png", alt: "App screen – 1T" },
    ],
  },
  {
    id: "group-11",
    images: [
      { src: "/images/gallery/1P-0.png", alt: "App screen – 1P" },
      { src: "/images/gallery/2P-0.png", alt: "App screen – 2P" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ac-mobility",
    title: "Designing a Multi-Channel Transaction System for Mobility Operations",
    client: "AC Mobility",
    tags: ["Apps", "Website"],
    image: "/images/projects/ac-mobility-dashboard.png",
    description:
      "End-to-end design of a transport management platform — covering ticketing, real-time tracking, analytics, and field-terminal operations.",
    href: "/work/ac-mobility",
  },
];

export const filterTabs = ["All", "Apps", "Website"] as const;
export type FilterTab = (typeof filterTabs)[number];
