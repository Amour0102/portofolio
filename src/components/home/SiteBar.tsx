import Link from "next/link";
import HomeThemeToggle from "./HomeThemeToggle";

// Top/bottom bar: script "CA" monogram (Arizonia) on the left, theme toggle on
// the right. Full-width with generous side padding, per the Paper frame.
// (Social links live in the intro title and the About section, not here.)
export default function SiteBar() {
  return (
    <div className="flex w-full items-start justify-between px-6 py-6 sm:px-12 lg:px-[114px]">
      <Link
        href="/"
        aria-label="Cyusa Amour - home"
        className="font-script text-[24px] leading-[32px] text-[#333333] dark:text-white transition-opacity hover:opacity-70"
      >
        CA
      </Link>

      <HomeThemeToggle />
    </div>
  );
}
