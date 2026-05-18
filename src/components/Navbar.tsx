import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-[114px] py-6">
      <Link
        href="/"
        className="font-script text-2xl leading-8 select-none text-black dark:text-white"
        aria-label="Cyusa Amour home"
      >
        CA
      </Link>
      <ThemeToggle />
    </header>
  );
}
