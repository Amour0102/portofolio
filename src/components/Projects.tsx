"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, filterTabs, type FilterTab } from "@/lib/data";

export default function Projects() {
  const [active, setActive] = useState<FilterTab>("All");

  const filtered = projects.filter(
    (p) => active === "All" || p.tags.includes(active as "Apps" | "Website")
  );

  return (
    <section className="w-full max-w-[576px] flex flex-col gap-6">

      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <h2
          className="text-[20px] font-semibold leading-[26px] tracking-[-0.01em] text-[#333333] dark:text-white"
        >
          Projects
        </h2>
        <nav className="flex items-center gap-4" aria-label="Project filter">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`text-[13px] leading-5 py-2.5 -my-2.5 transition-colors ${
                active === tab
                  ? "font-semibold text-[#333333] dark:text-white"
                  : "font-medium text-[#888888]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group flex flex-col gap-4"
          >
            {project.thumbnail?.centered ? (
              /* Centered thumbnail style (e.g. Voit) */
              <div
                className="w-full overflow-hidden rounded-xl sm:rounded-3xl outline outline-1 outline-[#F2F2F2] dark:outline-white/[0.08] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-[3px] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex items-center justify-center h-auto py-6 sm:py-0 sm:h-[280px]"
                style={{
                  backgroundColor: project.thumbnail.bg ?? "#F8F8F8",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={project.thumbnail.imageWidth}
                  height={project.thumbnail.imageHeight}
                  unoptimized
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: project.thumbnail.imageWidth,
                  }}
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.015] will-change-transform"
                  priority
                />
              </div>
            ) : (
              /* Full-bleed thumbnail style (default, e.g. AC Mobility) */
              <div
                className="relative w-full overflow-hidden rounded-xl sm:rounded-3xl bg-[#F8F8F8] dark:bg-white/[0.06] outline outline-1 outline-[#F2F2F2] dark:outline-white/[0.08] transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-[3px] group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] h-[240px] sm:h-[440px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={900}
                  height={640}
                  unoptimized
                  style={{
                    position: "absolute",
                    maxWidth: "none",
                  }}
                  className="top-3 left-3 sm:top-6 sm:left-6 w-full h-auto sm:w-[900px] sm:h-[640px] transition-transform duration-500 ease-out group-hover:scale-[1.015] will-change-transform"
                  priority
                />
              </div>
            )}

            {/* Title + client */}
            <div className="flex flex-col gap-2">
              <h3
                className="text-[18px] sm:text-[22px] font-semibold leading-[26px] sm:leading-[30px] tracking-[-0.02em] text-[#333333] dark:text-white transition-opacity duration-300 ease-out group-hover:opacity-80"
              >
                {project.title}
              </h3>
              <p className="text-[14px] font-medium leading-5 tracking-[0.04em] uppercase text-[#888888]">
                {project.client}
              </p>
            </div>
          </Link>
        ))}

        {filtered.length === 0 && (
          <p className="text-[14px] text-[#888888]">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
}
