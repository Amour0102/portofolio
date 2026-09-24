import { MetaRow } from "@/lib/case-studies/types";

// Overview block: title (32/40), intro paragraphs (16/24), and the metadata list.
// All case studies use the PP Neue Montreal (font-grotesk) treatment.
export default function Overview({
  title,
  intro,
  meta,
}: {
  title: string;
  intro: string[];
  meta: MetaRow[];
}) {
  return (
    <section className="flex w-full flex-col items-start gap-6">
      <h1 className="text-[32px] font-medium leading-[40px] tracking-[-0.03em] text-[#333333] dark:text-white">
        {title}
      </h1>

      <div className="flex w-full flex-col items-start gap-4">
        {intro.map((p, i) => (
          <p key={i} className="w-full text-[16px] font-medium leading-6 text-[#333333] dark:text-white/90">
            {p}
          </p>
        ))}

        <dl className="flex w-full flex-col gap-4 pt-2">
          {meta.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-1">
              <dt className="text-[16px] font-medium leading-6 text-[#767676] dark:text-[#888888]">{label}</dt>
              <dd className="whitespace-pre-line text-[16px] font-medium leading-6 text-[#333333] dark:text-white">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
