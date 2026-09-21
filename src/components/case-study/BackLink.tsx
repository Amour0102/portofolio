import Link from "next/link";
import { ArrowLeftLong } from "@/components/home/icons";

// "← Go Back Home" row, full-width with the page's side padding.
export default function BackLink({ href = "/", label = "Go Back Home" }: { href?: string; label?: string }) {
  return (
    <div className="flex w-full items-center px-6 sm:px-12 lg:px-[114px]">
      <Link href={href} className="group flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full text-[#333333] ring-1 ring-inset ring-[#E4E4E4] transition-transform group-hover:-translate-x-0.5 dark:text-white dark:ring-white/10">
          <ArrowLeftLong />
        </span>
        <span className="text-[16px] font-medium leading-6 text-[#333333] dark:text-white">{label}</span>
      </Link>
    </div>
  );
}
