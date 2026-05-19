"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const navItems = [
  { id: "overview",          label: "Overview" },
  { id: "the-system",       label: "The System" },
  { id: "design-decisions", label: "Design Decisions" },
  { id: "what-i-built",     label: "What I Built" },
  { id: "outcome",          label: "Outcomes" },
];

export default function VoitPage() {
  const [activeId, setActiveId] = useState("overview");

  useEffect(() => {
    const TRIGGER_OFFSET = 180;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const readingLine = scrollY + TRIGGER_OFFSET;

      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(navItems[navItems.length - 1].id);
        return;
      }

      let current = navItems[0].id;
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= readingLine) current = id;
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0D0D0D]">
      <Navbar />

      {/* Back bar */}
      <div className="w-full flex items-center px-[114px] h-[44px]">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex items-center justify-center w-10 h-10 rounded-full outline outline-1 outline-[#E4E4E4] dark:outline-white/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.529 5.47a.75.75 0 0 1 0 1.06L5.809 11.25H20a.75.75 0 0 1 0 1.5H5.809l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                fill="currentColor"
                className="text-[#333333] dark:text-white"
              />
            </svg>
          </span>
          <span className="text-[#333333] dark:text-white font-semibold text-base leading-6 group-hover:opacity-70 transition-opacity">
            Go Back Home
          </span>
        </Link>
      </div>

      {/* Two-column layout */}
      <div className="flex-1 flex flex-row px-[114px] pt-16 pb-24 gap-[276px]">

        {/* Sticky sidebar */}
        <aside className="w-[160px] flex-shrink-0 sticky top-[136px] h-fit flex flex-col gap-5">
          {navItems.map(({ id, label }) => {
            const active = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-3 text-[13px] font-medium leading-5 transition-colors ${
                  active
                    ? "text-[#333333] dark:text-white"
                    : "text-[#AAAAAA] hover:text-[#888888] dark:hover:text-white/60"
                }`}
              >
                <span
                  className={`block h-px flex-shrink-0 transition-all ${
                    active ? "w-5 bg-[#333333] dark:bg-white" : "w-4 bg-[#CCCCCC] dark:bg-white/20"
                  }`}
                />
                {label}
              </a>
            );
          })}
        </aside>

        {/* Main sections */}
        <div className="w-[848px] flex flex-col">

          {/* 1. Overview */}
          <section id="overview" className="flex flex-col gap-6 pb-16 scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              1. Overview
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              <a
                href="https://www.voit.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333333] dark:text-white underline underline-offset-2 hover:opacity-70 transition-opacity"
              >
                Voit
              </a>
              {" "}is a premium Figma design system built for teams who think in systems. Ali Tohme,
              Founder of Voit, had laid the foundation; core styles, tokens, miscellaneous assets,
              components, and patterns were in place. I was brought in to build the top of the stack:
              Blocks - full page and screen compositions that turn a component library into something
              designers can actually ship from. Every block in Voit is my work.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              The result shipped in December 2025. Voit is now used by 500+ designers at companies
              including Adobe, Webflow, Zoom, Typeform, and Classpass.
            </p>

            {/* Video */}
            <div className="flex flex-col gap-3">
              <div className="w-full rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/images/case-studies/voit/explaning-video.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-center text-[14px] font-medium text-[#888888]">
                10,000+ components. One system. Built to scale.
              </p>
            </div>
          </section>

          {/* 2. The System */}
          <section id="the-system" className="flex flex-col gap-6 pb-16 scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              2. The System
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              One design system. Two modes. Infinite configurations.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              Voit is structured across five layers: Foundation (tokens, typography, spacing, color),
              Miscellaneous (6,000+ assets, icons, brand logos), Components (10,000+ variants),
              Patterns (250+ reusable layout sections), and Blocks (150+ full-page compositions).
              My work lives at the top of that stack - the layer where everything underneath either
              holds together or falls apart.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              Blocks combine patterns into complete, responsive page layouts ready to ship. A designer
              drops in a Hero block, a Features block, a Pricing block, a Testimonial block - and has
              a product page. The system does the heavy lifting. My job was to make sure every block
              was composed well enough that the output felt intentional, not assembled.
            </p>

            <div className="flex flex-col gap-3">
              <div className="w-full rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-6">
                <Image
                  src="/images/case-studies/voit/component.png"
                  alt="Voit component library overview"
                  width={2448}
                  height={1365}
                  unoptimized
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <p className="text-center text-[14px] font-medium text-[#888888]">
                Every block built from what already existed. Consistency enforced from the bottom up.
              </p>
            </div>
          </section>

          {/* 3. Design Decisions */}
          <section id="design-decisions" className="flex flex-col gap-8 pb-16 scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              3. Three Decisions That Shaped the System
            </h2>

            <div className="flex flex-col gap-8">

              {/* Decision 1 */}
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  Constraint as a design discipline.
                </strong>{" "}
                Every block had to be built from existing patterns and components; no exceptions, no
                workarounds. That constraint, which could have been limiting, enforced exactly the kind
                of consistency a design system needs to function at scale. The discipline of composing
                upward from what already exists rather than redesigning from preference is what makes
                the output trustworthy for 500+ designers building products we'd never seen.
              </p>

              {/* Decision 2 */}
              <div className="flex flex-col gap-4">
                <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                  <strong className="font-semibold text-[#333333] dark:text-white">
                    Blocks as the real proof of system.
                  </strong>{" "}
                  Foundations and components are invisible to most designers, they work underneath.
                  Blocks are where designers actually spend their time, dropping in a Hero or a Pricing
                  section and trusting it to work. Designing 150+ blocks meant thinking about how each
                  composition would be used, stretched, and repurposed by someone building a product
                  under deadline. Every block had to be opinionated enough to be useful and flexible
                  enough to be adapted without breaking.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="w-full rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-6">
                    <Image
                      src="/images/case-studies/voit/blocks.png"
                      alt="Voit blocks overview"
                      width={2448}
                      height={1365}
                      unoptimized
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <p className="text-center text-[14px] font-medium text-[#888888]">
                    Every block built from what already existed. Consistency enforced from the bottom up.
                  </p>
                </div>
              </div>

              {/* Decision 3 — no image here, visual moved to 4.2 */}
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  Dashboard as the hardest block to get right.
                </strong>{" "}
                Dashboards are where design systems either hold up or fall apart. Dense information
                hierarchy, multiple data states, complex component combinations, if the system works
                here, it works everywhere. The dashboard block category was the most technically
                demanding work in the project. Every gap in the underlying component library became
                visible immediately when composing at this level of complexity.
              </p>

            </div>
          </section>

          {/* 4. What I Built */}
          <section id="what-i-built" className="flex flex-col gap-8 pb-16 scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              4. What I Built
            </h2>

            <div className="flex flex-col gap-8">

              {/* 4.1 */}
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.1. All 150+ Blocks
                </strong>{" "}
                Full page and screen compositions covering 13 categories: 404 Page, Activity Feed,
                Blog, Dashboard, FAQ, Features, Footer, Hero, Pricing, Sections, and Testimonial.
                Each block is built from Voit patterns and components, tokenized for light and dark
                mode, and responsive by default.
              </p>

              {/* 4.2 — with dashboard visual below */}
              <div className="flex flex-col gap-4">
                <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                  <strong className="font-semibold text-[#333333] dark:text-white">
                    4.2. Dashboard Blocks
                  </strong>{" "}
                  The most complex block category. Data tables, analytics panels, activity feeds, user
                  profiles, and reporting layouts, all composed from Voit's component library and
                  stress-tested against the system's token architecture.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="w-full rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-6">
                    <Image
                      src="/images/case-studies/voit/dashboard-block-composition.png"
                      alt="Voit dashboard block composition"
                      width={2451}
                      height={1359}
                      unoptimized
                      className="w-full h-auto rounded-2xl"
                    />
                  </div>
                  <p className="text-center text-[14px] font-medium text-[#888888]">
                    If the system holds here, it holds anywhere.
                  </p>
                </div>
              </div>

              {/* 4.3 */}
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.3. Marketing contributions
                </strong>{" "}
                Website section mockups and social assets for the voit.io marketing site and X
                account, contributing to how the product presents itself publicly.
              </p>

            </div>
          </section>

          {/* 5. Outcomes */}
          <section id="outcome" className="flex flex-col gap-6 pb-16 scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              5. Outcomes
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              Shipped December 2025. 500+ designers using Voit. Trusted by designers at Adobe,
              Webflow, Zoom, Typeform, and Classpass. 150+ blocks delivered. 13 block categories.
              Light and dark mode throughout. One token architecture. Every block in the system is
              my work.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
              Design systems work when nobody notices the seams. The goal was never to add to Voit,
              it was to complete it in a way that felt like it was always whole.
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                Figma file (foundations, components, and patterns):
              </p>
              <a
                href="https://www.figma.com/design/Nk0lGxrdAtsifZZro6mjQ0/VOIT-DS?node-id=834133&t=OORNylhcWl16jwCh-0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] leading-[22px] font-medium text-[#888888] underline underline-offset-2 hover:opacity-70 transition-opacity break-all"
              >
                https://www.figma.com/design/Nk0lGxrdAtsifZZro6mjQ0/VOIT-DS
              </a>
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                Blocks are not included in the public file.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
