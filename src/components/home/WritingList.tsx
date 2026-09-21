import { writingEntries } from "@/lib/home-data";

// "Writing" section - a compact list of essays. The pieces aren't published yet,
// so each row is non-interactive and carries a "Coming soon" label.
export default function WritingList() {
  return (
    <section className="mx-auto flex w-full max-w-[576px] flex-col items-start gap-5">
      <h2 className="text-[20px] font-medium leading-[26px] tracking-[-0.015em] text-[#333333] dark:text-white">
        Writing about the work behind the work.
      </h2>
      <div className="flex w-full flex-col items-start gap-4">
        {writingEntries.map((w) => (
          <div key={w.title} className="flex w-full items-center gap-4">
            <div className="flex w-full flex-col items-start gap-1">
              <span className="text-[16px] font-medium leading-[22px] text-[#333333] dark:text-white">
                {w.title}
              </span>
              <span className="text-[14px] font-medium leading-[18px] text-[#888888]">
                {w.description}
              </span>
            </div>
            <span className="shrink-0 whitespace-nowrap text-[11px] font-medium uppercase tracking-wide text-[#888888]">
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
