import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-between px-[114px] py-6">
      <Link
        href="/"
        className="font-script text-2xl leading-8 select-none text-black dark:text-white"
        aria-label="Back to top"
      >
        CA
      </Link>
      <ThemeToggle />
    </footer>
  );
}
