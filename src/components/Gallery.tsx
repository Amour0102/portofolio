"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { galleryGroups } from "@/lib/data";
import {
  getGalleryMetrics,
  type GalleryMetrics,
} from "@/lib/layout";

const DEFAULT_METRICS = getGalleryMetrics(1280);

const cardShell =
  "bg-[#F8F8F8] dark:bg-white/[0.06] transition-colors duration-200 flex flex-row items-center shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl";

function GalleryCards({
  metrics,
  snapAlign,
}: {
  metrics: GalleryMetrics;
  snapAlign?: boolean;
}) {
  const { web, phone, gap, cardH } = metrics;
  return (
    <>
      {galleryGroups.map((group) =>
        group.type === "web" ? (
          <div
            key={group.id}
            className={cardShell}
            style={{
              gap,
              padding: web.pad,
              height: cardH,
              ...(snapAlign ? { scrollSnapAlign: "start" } : {}),
            }}
          >
            {group.images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="block shrink-0 object-cover object-center"
                style={{ width: web.imgW, height: web.imgH }}
                draggable={false}
                decoding="async"
              />
            ))}
          </div>
        ) : (
          <div
            key={group.id}
            className={`${cardShell} dark:bg-white/10`}
            style={{
              gap,
              padding: phone.pad,
              height: cardH,
              ...(snapAlign ? { scrollSnapAlign: "start" } : {}),
            }}
          >
            {group.images.map((img) => (
              <div
                key={img.src}
                style={{
                  position: "relative",
                  width: phone.imgW,
                  height: phone.imgH,
                  flexShrink: 0,
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 280px, 480px"
                  unoptimized
                  className="object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
}

export default function Gallery() {
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollDist, setScrollDist] = useState(2032);
  const [metrics, setMetrics] = useState<GalleryMetrics>(DEFAULT_METRICS);

  useEffect(() => {
    const update = () => setMetrics(getGalleryMetrics(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (metrics.useCompactSticky) return;
    const measure = () => {
      const track = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;
      const dist = track.scrollWidth - sticky.clientWidth;
      if (dist > 0) setScrollDist(dist);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [metrics]);

  useEffect(() => {
    if (metrics.useCompactSticky) return;
    const handleScroll = () => {
      const outer = outerRef.current;
      const track = trackRef.current;
      if (!outer || !track) return;
      const outerTop = outer.getBoundingClientRect().top + window.scrollY;
      const progress = Math.max(0, Math.min(1, (window.scrollY - outerTop) / scrollDist));
      track.style.transform = `translateX(${-progress * scrollDist}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDist, metrics.useCompactSticky]);

  const { groupGap, edgePad, cardH, useCompactSticky } = metrics;

  // Mobile: horizontal snap-scroll swipe carousel
  if (useCompactSticky) {
    return (
      <section
        className="w-full py-4 relative"
        aria-label="Work samples gallery section"
      >
        <div
          className="w-full overflow-x-auto scrollbar-none"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
            scrollPaddingLeft: edgePad,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: groupGap,
              width: "max-content",
              paddingLeft: edgePad,
              paddingRight: edgePad,
            }}
          >
            <GalleryCards metrics={metrics} snapAlign />
          </div>
        </div>
        {/* Right-edge fade — swipe affordance */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-14 bg-gradient-to-l from-white dark:from-[#0D0D0D] to-transparent"
        />
      </section>
    );
  }

  // Desktop: scroll-driven sticky pan
  const outerH = `calc(100svh + ${scrollDist}px)`;

  return (
    <section
      className="w-full lg:py-0"
      aria-label="Work samples gallery section"
    >
      <div
        ref={outerRef}
        className="w-full"
        style={{ height: outerH }}
      >
        <div
          ref={stickyRef}
          aria-label="Work samples gallery"
          className="w-full overflow-hidden bg-white dark:bg-[#0D0D0D] transition-colors duration-200"
          style={{
            position: "sticky",
            top: 0,
            height: "100svh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: groupGap,
              width: "max-content",
              willChange: "transform",
              paddingLeft: edgePad,
              paddingRight: edgePad,
            }}
          >
            <GalleryCards metrics={metrics} />
          </div>
        </div>
      </div>
    </section>
  );
}
