import Link from "next/link";
import { ArrowLeftLong } from "@/components/home/icons";

// Bordered footer card linking to the next case study: right-arrow + label.
export default function NextCaseStudy({ href, label = "Next Case Study" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col items-center justify-center gap-4 rounded-[24px] border border-[#E4E4E4] px-6 py-20 transition-colors hover:bg-[#F8F8F8] dark:border-white/10 dark:hover:bg-white/[0.03]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full text-black ring-1 ring-inset ring-[#E4E4E4] transition-transform group-hover:translate-x-0.5 dark:text-white dark:ring-white/10">
        <ArrowLeftLong className="rotate-180" />
      </span>
      <span className="text-[24px] font-medium leading-[30px] text-[#333333] dark:text-white">{label}</span>
    </Link>
  );
}
