"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-[74px] h-[38px]" />;

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full border border-[#EEEEEE] dark:border-white/10 bg-white dark:bg-white/5">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
          theme === "light"
            ? "bg-[#F0F0F0] text-black"
            : "text-[#AAAAAA] hover:text-black dark:hover:text-white"
        }`}
      >
        <Sun size={16} strokeWidth={1.75} />
      </button>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
          theme === "dark"
            ? "bg-[#1A1A1A] text-white"
            : "text-[#AAAAAA] hover:text-black dark:hover:text-white"
        }`}
      >
        <Moon size={16} strokeWidth={1.75} />
      </button>
    </div>
  );
}
