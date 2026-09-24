"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

// Autoplaying loop video that honors prefers-reduced-motion: when the viewer has
// asked for reduced motion, it does not autoplay or loop and shows player
// controls instead, so the video is available without moving on its own.
export default function AutoplayVideo({
  src,
  poster,
  className,
  controls = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  controls?: boolean;
}) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <video
      className={className}
      autoPlay={!reduceMotion}
      loop={!reduceMotion}
      controls={controls || reduceMotion}
      muted
      playsInline
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
