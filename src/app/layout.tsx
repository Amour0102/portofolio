import type { Metadata } from "next";
import { Inter, Arizonia } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  getSiteUrl,
  SOCIAL_THUMBNAIL,
  SOCIAL_THUMBNAIL_HEIGHT,
  SOCIAL_THUMBNAIL_WIDTH,
} from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const arizonia = Arizonia({
  variable: "--font-arizonia",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Cyusa Amour — Product Designer",
  description:
    "Product designer building transportation infrastructure and language preservation tools. Based in Kigali.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: { rel: "manifest", url: "/site.webmanifest" },
  },
  openGraph: {
    title: "Cyusa Amour — Product Designer",
    description:
      "Product designer building transportation infrastructure and language preservation tools.",
    type: "website",
    images: [
      {
        url: SOCIAL_THUMBNAIL,
        width: SOCIAL_THUMBNAIL_WIDTH,
        height: SOCIAL_THUMBNAIL_HEIGHT,
        type: "image/png",
        alt: "Cyusa Amour — Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyusa Amour — Product Designer",
    description:
      "Product designer building transportation infrastructure and language preservation tools.",
    images: [
      {
        url: SOCIAL_THUMBNAIL,
        width: SOCIAL_THUMBNAIL_WIDTH,
        height: SOCIAL_THUMBNAIL_HEIGHT,
        alt: "Cyusa Amour — Product Designer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${arizonia.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-white dark:bg-[#0D0D0D] text-[#333333] dark:text-white antialiased transition-colors duration-200" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
