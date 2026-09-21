"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "./icons";

// True only after client hydration - avoids a theme mismatch on first paint
// without a setState-in-effect.
function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

// Pill toggle from the Paper design: #F2F2F2 track, 1px padding, two 36×36
// buttons; the active side is a white knob with a #333 icon.
export default function HomeThemeToggle() {
  const { theme, setTheme } = useTheme();
  const hydrated = useHydrated();
  if (!hydrated) return <div className="h-[38px] w-[74px]" />;

  const isDark = theme === "dark";

  return (
    <div className="flex items-start gap-0 rounded-full p-px bg-[#F2F2F2] dark:bg-white/[0.08]">
      <button
        type="button"
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        aria-pressed={!isDark}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
          !isDark ? "bg-white text-[#333333]" : "text-[#888888] hover:text-white"
        }`}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={isDark}
        className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
          isDark ? "bg-[#2A2A2A] text-white" : "text-[#888888] hover:text-[#333333]"
        }`}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
