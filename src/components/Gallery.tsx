"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { galleryGroups } from "@/lib/data";

export default function Gallery() {
  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);

  const [scrollDist, setScrollDist] = useState(2032);

  useEffect(() => {
    const measure = () => {
      const track  = trackRef.current;
      const sticky = stickyRef.current;
      if (!track || !sticky) return;
      const dist = track.scrollWidth - sticky.clientWidth;
      if (dist > 0) setScrollDist(dist);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
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
  }, [scrollDist]);

  return (
    <div
      ref={outerRef}
      className="w-full"
      style={{ height: `calc(100vh + ${scrollDist}px)` }}
    >
      <div
        ref={stickyRef}
        aria-label="Work samples gallery"
        className="w-full overflow-hidden bg-white dark:bg-[#0D0D0D] transition-colors duration-200"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          ref={trackRef}
          style={{ display: "flex", gap: 24, width: "max-content", willChange: "transform" }}
        >
          {galleryGroups.map((group) =>
            group.type === "web" ? (
              // Web app screenshots — Paper frames 6/7/9/10: 791×574 card, 16px pad, 759×540 image
              <div
                key={group.id}
                className="bg-[#F8F8F8] dark:bg-white/[0.06] transition-colors duration-200"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 24,
                  padding: 16,
                  borderRadius: 24,
                  height: 574,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {group.images.map((img) => (
                  // Native img — serves original PNG from /public with no Next.js optimization
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="block shrink-0 object-cover object-center"
                    style={{ width: 759, height: 540 }}
                    draggable={false}
                    decoding="async"
                  />
                ))}
              </div>
            ) : (
              // Phone screenshots — rounded card with bg
              <div
                key={group.id}
                className="bg-[#F8F8F8] dark:bg-white/10 transition-colors duration-200"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 24,
                  padding: 40,
                  borderRadius: 24,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                {group.images.map((img) => (
                  <div
                    key={img.src}
                    style={{ position: "relative", width: 240, height: 494, flexShrink: 0 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-resolution: 2dppx) 960px, 480px"
                      unoptimized
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
