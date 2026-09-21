import SiteBar from "@/components/home/SiteBar";
import BackLink from "./BackLink";

// Shared case-study shell: top bar, back link, a centered 848px column, bottom bar.
// Reusable across case studies (matches the Paper case-study frame).
export default function CaseStudyLayout({
  children,
  backHref = "/",
  backLabel = "Go Back Home",
}: {
  children: React.ReactNode;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="home-root min-h-screen w-full bg-white font-grotesk text-[#333333] antialiased [--home-bg:#FFFFFF] dark:bg-[#0D0D0D] dark:text-white dark:[--home-bg:#0D0D0D]">
      <div className="flex flex-col gap-16 pb-16">
        <SiteBar />
        <BackLink href={backHref} label={backLabel} />
        <main className="flex w-full justify-center px-6 sm:px-12 lg:px-[114px]">
          <div className="flex w-full max-w-[848px] flex-col items-center gap-10">
            {children}
          </div>
        </main>
        <SiteBar />
      </div>
    </div>
  );
}
