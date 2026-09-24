import { socials } from "@/lib/home-data";
import { LinkedInIcon, XIcon, MailIcon } from "./icons";

// Header block: name + role on the left, social links on the right.
export default function Intro() {
  return (
    <header className="mx-auto flex w-full max-w-[576px] items-center justify-between gap-4">
      <div className="flex flex-col items-start gap-1">
        <h1 className="text-[40px] font-medium leading-[48px] tracking-[-0.02em] text-[#333333] dark:text-white">
          Cyusa Amour
        </h1>
        <p className="text-[16px] font-medium capitalize leading-[20px] text-[#767676] dark:text-[#888888]">
          Product Designer
        </p>
      </div>

      <nav className="flex items-start gap-3 text-[#767676] dark:text-[#888888]" aria-label="Social links">
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"
          aria-label="LinkedIn" className="transition-opacity hover:opacity-70">
          <LinkedInIcon />
        </a>
        <a href={socials.x} target="_blank" rel="noopener noreferrer"
          aria-label="X" className="transition-opacity hover:opacity-70">
          <XIcon />
        </a>
        <a href={socials.email} aria-label="Email" className="transition-opacity hover:opacity-70">
          <MailIcon />
        </a>
      </nav>
    </header>
  );
}
