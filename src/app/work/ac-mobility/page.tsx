"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Sidebar nav items ────────────────────────────────────────────────────────
const navItems = [
  { id: "overview",             label: "Overview" },
  { id: "the-system",          label: "The System" },
  { id: "design-decisions",    label: "Design Decisions" },
  { id: "platform-spotlights", label: "Platform Spotlights" },
  { id: "e-ticketing",         label: "e-ticketing" },
  { id: "agent-pos",           label: "Agent POS" },
  { id: "tap-go",              label: "Tap&Go" },
  { id: "ussd",                label: "USSD" },
  { id: "inspector-app",       label: "Inspector App" },
  { id: "outcome",             label: "Outcomes" },
];

// ─── Metrics ──────────────────────────────────────────────────────────────────
const metrics = [
  { value: "$130K",    label: "Upcountry Revenue" },
  { value: "2M+",      label: "Journeys" },
  { value: "~76,000",  label: "Trips" },
  { value: "0.6%",     label: "Reversal" },
  { value: "~30s",     label: "Issuance" },
];

// ─── Design decisions ─────────────────────────────────────────────────────────
const decisions: {
  phrase: string;
  body: string;
  image?: string;
  caption?: string;
}[] = [
  {
    phrase: "Accountability over flexibility.",
    body: "Early versions let operators cancel, transfer, and modify tickets without record. Revenue losses had no traceable cause. I introduced mandatory reason fields and permanent audit history across all modification actions. Business owners can now see patterns, not just losses.",
    image: "/images/case-studies/ac-mobility/decision-accountability.png",
    caption: "Every modification attributed, timestamped, and reason-coded.",
  },
  {
    phrase: "Design for the worst device, not the average one.",
    body: "POS hardware dates to 2016 and cannot be updated. Every flow was stripped to essential steps, defaults pre-populated, guardrails placed at confirmation rather than mid-flow. Result: approximately 30 seconds per ticket at 99.9% of daily sales volume.",
  },
  {
    phrase: "Financial state as a design problem.",
    body: "When an agent's float is exhausted, they cannot sell. This is not an edge case, it happens daily. The system surfaces float constraints clearly, prevents invalid transactions at the point of sale, and communicates the reason in terms the agent can act on immediately.",
  },
  {
    phrase: "Channel parity without interface uniformity.",
    body: "The same ticket, schedule, and balance data surfaces across five interfaces, but the interaction model is completely different on each. USSD is sequential and session-bound. POS is tap heavy and time pressured. Tap&Go is self-directed. The design challenge was keeping data consistent while letting each interface behave on its own terms, not forcing a lowest-common-denominator approach across all of them.",
  },
  {
    phrase: "Role as a design surface.",
    body: "Not all agents are equal. The system supports a hierarchy: agents, super agents, principals, each with different financial permissions, visibility scope, and interface states. A super agent sees float balances across agents they manage. A principal sees across branches. Designing these role views meant the interface itself had to communicate authority and constraint without a manual, at a glance, before any action is taken.",
  },
];


export default function AcMobilityPage() {
  const [activeId, setActiveId] = useState("overview");

  // Scroll-tracking for sidebar active state
  useEffect(() => {
    const TRIGGER_OFFSET = 180; // px from top of viewport

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const readingLine = scrollY + TRIGGER_OFFSET;

      // If at the very bottom of the page, always activate the last section
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(navItems[navItems.length - 1].id);
        return;
      }

      // Find the last section whose top is above the reading line
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
    handleScroll(); // set correct state on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0D0D0D]">
      <Navbar />

      {/* ── Back bar ─────────────────────────────────────────────────────── */}
      <div className="w-full flex items-center px-6 md:px-[114px] h-[44px]">
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

      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      {/*  1512px page · 114px side padding → 1284px inner             */}
      {/*  sidebar 160px + gap 276px + sections 848px = 1284px          */}
      <div className="flex-1 flex flex-col min-[1512px]:flex-row px-6 md:px-[114px] pt-8 md:pt-16 pb-8 md:pb-16 gap-0 min-[1512px]:gap-[276px]">

        {/* ── Sticky sidebar — desktop only ───────────────────────────────── */}
        <aside className="hidden min-[1512px]:flex w-[160px] flex-shrink-0 sticky top-[136px] h-fit flex-col gap-5">
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

        {/* ── Main sections ────────────────────────────────────────────────── */}
        <div className="w-full min-[1512px]:w-[848px] flex flex-col">

          {/* ══ 1. Overview ══════════════════════════════════════════════════ */}
          <section id="overview" className="flex flex-col gap-6 pb-10 md:pb-16 scroll-mt-20 md:scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              1. Overview
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              AC Mobility was paying an external vendor to run its core operations platform;
              expensive, brittle, and misaligned with how the business ran. I was brought in
              as the sole designer to replace it entirely, from scratch.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              The result is a live system serving 21 upcountry bus operators and 995 agents,
              processing $130K+ daily in upcountry operations alone. Kigali routes run on the
              same USSD and mobile infrastructure for commuter top-up, self-registration, card
              management, and balance. Total system reach is substantially wider. That
              translates to 2,032,930 tickets and 76,615 trips monthly across upcountry
              operations.
            </p>

            {/* Metrics row */}
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-5">
              {metrics.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#333333] dark:text-white">
                    {value}
                  </span>
                  <span className="text-[11px] font-medium leading-[16px] text-[#888888]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ══ 2. The System ════════════════════════════════════════════════ */}
          <section id="the-system" className="flex flex-col gap-6 pb-10 md:pb-16 scroll-mt-20 md:scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              2. The System
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              Five platforms. Five user types. One design system.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              The e-ticketing platform sits at the center as the source of truth for tickets,
              schedules, and transactions. Around it: an Android POS terminal for agents, a
              consumer mobile app (Tap&Go) for commuters, a USSD interface for balance
              management, and an Android Inspector app for field validation. The USSD, mobile,
              and web platforms serve both upcountry and Kigali operations.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              A financial layer controls float allocation across agents, principals, and internal
              teams. The ability to issue a ticket is not a UI state, it is a financial condition.
            </p>
            <SystemDiagram />
          </section>

          {/* ══ 3. Three Decisions That Shaped the System ════════════════════ */}
          <section id="design-decisions" className="flex flex-col gap-8 pb-10 md:pb-16 scroll-mt-20 md:scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              3. Decisions That Shaped the System
            </h2>

            <div className="flex flex-col gap-8">
              {decisions.map(({ phrase, body, image, caption }) => (
                <div key={phrase} className="flex flex-col gap-4">
                  {/* Decision text */}
                  <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
                    <strong className="font-semibold text-[#333333] dark:text-white">{phrase}</strong>{" "}
                    {body}
                  </p>

                  {/* Screenshot — only rendered when image is provided */}
                  {image && (
                    <div className="flex flex-col gap-3">
                      <div className="w-full rounded-2xl md:rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-2">
                        <Image
                          src={image}
                          alt={phrase}
                          width={4320}
                          height={3072}
                          unoptimized
                          className="w-full h-auto rounded-lg md:rounded-2xl"
                        />
                      </div>
                      {caption && (
                        <p className="text-center text-[14px] font-medium text-[#888888]">
                          {caption}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ══ 4. Platform Spotlights ═══════════════════════════════════════ */}
          <section id="platform-spotlights" className="flex flex-col gap-12 pb-10 md:pb-16 scroll-mt-20 md:scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              4. Platform Spotlights
            </h2>

            {/* 4.1 E-Ticketing Platform — web dashboard */}
            <div id="e-ticketing" className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-40">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.1. E-Ticketing Platform (Web · Operations core)
                </strong>{" "}
                The source of truth. Manages tickets, schedules, transactions, and the financial
                layer. Designed for operations staff who need full visibility without being
                overwhelmed by system complexity.
              </p>
              <div className="flex flex-col gap-3">
                <div className="w-full rounded-2xl md:rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-2">
                  <div className="relative w-full overflow-hidden rounded-lg md:rounded-2xl h-[200px] lg:h-[480px]">
                    <Image
                      src="/images/case-studies/ac-mobility/e-ticketing-dashboard.png"
                      alt="AC Mobility e-ticketing operations dashboard"
                      fill
                      sizes="(min-resolution: 2dppx) 1696px, 848px"
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <p className="text-center text-[14px] font-medium text-[#888888]">
                  Operator dashboard, tickets, sales trips, activity overview
                </p>
              </div>
            </div>

            {/* 4.2 POS Terminal */}
            <div id="agent-pos" className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-40">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.2. POS Terminal (Android · Agent-facing)
                </strong>{" "}
                Built for throughput on decade-old hardware. No unnecessary steps, defaults
                pre-populated, guardrails at confirmation. Assumes high volume, low error
                tolerance, and variable literacy across 995 agents serving 21 bus operators.
              </p>
              <PhoneRow
                caption="Register card flow, onboarding and input states"
                images={[
                  { src: "/images/case-studies/ac-mobility/agent-pos-1.png", alt: "POS Terminal screen 1" },
                  { src: "/images/case-studies/ac-mobility/agent-pos-2.png", alt: "POS Terminal screen 2" },
                  { src: "/images/case-studies/ac-mobility/agent-pos-3.png", alt: "POS Terminal screen 3" },
                ]}
              />
            </div>

            {/* 4.3 Tap&Go */}
            <div id="tap-go" className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-40">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.3. Tap&Go (Android, iOS, Web · Consumer)
                </strong>{" "}
                Rising self-service channel for commuters. Designed for people familiar with
                USSD and cash, not apps. Balance, booking, and validation in one flow. No
                training assumed. Projected to reach 30% of daily sales by June 2026.
              </p>
              <PhoneRow
                caption="Tap&Go core flow: home, booking, and ticket confirmation screens"
                images={[
                  { src: "/images/case-studies/ac-mobility/tap-go-1.png", alt: "Tap&Go screen 1" },
                  { src: "/images/case-studies/ac-mobility/tap-go-2.png", alt: "Tap&Go screen 2" },
                  { src: "/images/case-studies/ac-mobility/tap-go-3.png", alt: "Tap&Go screen 3" },
                ]}
              />
            </div>

            {/* 4.4 USSD */}
            <div id="ussd" className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-40">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.4. USSD (Consumer)
                </strong>{" "}
                Handles top-up and transaction history under strict session constraints.
                Reaches users with no smartphone or data access. Built around the USSD mental
                model: numbered menus, sequential flows, no back-navigation.
              </p>
              <PhoneRow
                caption="USSD top-up flow, step-by-step dialogue states"
                images={[
                  { src: "/images/case-studies/ac-mobility/ussd-1.png", alt: "USSD screen 1" },
                  { src: "/images/case-studies/ac-mobility/ussd-2.png", alt: "USSD screen 2" },
                  { src: "/images/case-studies/ac-mobility/ussd-3.png", alt: "USSD screen 3" },
                ]}
              />
            </div>

            {/* 4.5 Inspector App */}
            <div id="inspector-app" className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-40">
              <p className="text-[14px] leading-[22px] font-medium text-[#888888]">
                <strong className="font-semibold text-[#333333] dark:text-white">
                  4.5. Inspector App (Android · Field)
                </strong>{" "}
                Offline-first ticket validation. Fast scan-to-result, clear pass/fail states
                readable in bright daylight and crowded conditions.
              </p>
              <PhoneRow
                caption="Inspector scan result screen, validated and cancelled states"
                images={[
                  { src: "/images/case-studies/ac-mobility/inspector-1.png", alt: "Inspector App screen 1" },
                  { src: "/images/case-studies/ac-mobility/inspector-2.png", alt: "Inspector App screen 2" },
                  { src: "/images/case-studies/ac-mobility/inspector-3.png", alt: "Inspector App screen 3" },
                ]}
              />
            </div>
          </section>

          {/* ══ 5. Outcomes ══════════════════════════════════════════════════ */}
          <section id="outcome" className="flex flex-col gap-6 pb-10 md:pb-16 scroll-mt-20 md:scroll-mt-40">
            <h2 className="text-[20px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#333333] dark:text-white">
              5. Outcomes
            </h2>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              $130K+ processed daily in upcountry operations alone. Kigali commuters on the
              same USSD and mobile stack push total system reach substantially wider. 2,032,930
              tickets monthly. 76,615 trips monthly. 21 upcountry bus operators. 995 agents.
              0.6% transaction reversal rate. ~30 seconds average ticket issuance. External
              vendor contract eliminated. v2.0 in planning to onboard additional transport
              operators.
            </p>
            <p className="text-[14px] leading-[22px] font-medium text-[#888888] max-w-[576px]">
              Transport is the context. The problems are not. Distributed channel consistency,
              non-standard infrastructure, financial constraints and role hierarchies surfaced
              as UI problems; these appear in fintech, logistics, healthcare operations, and
              anywhere multiple actors share state under real-world pressure.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// ─── Shared UI primitives ─────────────────────────────────────────────────────

function PhoneRow({ images, caption }: { images: { src: string; alt: string }[]; caption?: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full rounded-2xl md:rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#EEEEEE] dark:outline-white/[0.08] p-2">
        <div className="flex flex-row gap-2 lg:gap-6 w-full">
          {images.map(({ src, alt }) => (
            <div
              key={src + alt}
              className="relative overflow-hidden rounded-xl lg:rounded-[28px] flex-1 h-[200px] lg:flex-none lg:w-[240px] lg:h-[494px]"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-resolution: 2dppx) 960px, 480px"
                unoptimized
                className="object-cover object-top"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          ))}
        </div>
      </div>
      {caption && (
        <p className="text-center text-[14px] font-medium text-[#888888]">{caption}</p>
      )}
    </div>
  );
}

// ─── System diagram ──────────────────────────────────────────────────────────

function SystemDiagram() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">
        {/* Light mode — hidden in dark */}
        <Image
          src="/images/case-studies/ac-mobility/system-architecture-diagram.png"
          alt="System architecture: four platforms connected to the central e-ticketing hub"
          width={2544}
          height={1463}
          unoptimized
          className="w-full h-auto rounded-lg md:rounded-2xl dark:hidden"
        />
        {/* Dark mode — force visible with !important to beat hidden's specificity */}
        <Image
          src="/images/case-studies/ac-mobility/system-architecture-diagram-dark.png"
          alt="System architecture: four platforms connected to the central e-ticketing hub"
          width={2544}
          height={1463}
          unoptimized
          className="w-full h-auto rounded-lg md:rounded-2xl hidden dark:!block"
        />
      </div>
      <p className="text-center text-[14px] font-medium text-[#888888]">
        System architecture diagram: four platforms connected to the central e-ticketing
      </p>
    </div>
  );
}

