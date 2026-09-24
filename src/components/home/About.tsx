import { aboutParagraphs, socials } from "@/lib/home-data";

// "About Me" section - short bio paragraphs, closing with a contact line whose
// X / LinkedIn / email are inline links.
const linkClass =
  "underline underline-offset-2 decoration-[#888888] transition-colors hover:decoration-[#333333] dark:hover:decoration-white";

export default function About() {
  return (
    <section className="mx-auto flex w-full max-w-[576px] flex-col items-start gap-5">
      <h2 className="text-[20px] font-medium leading-[26px] tracking-[-0.015em] text-[#333333] dark:text-white">
        About Me
      </h2>
      <div className="flex w-full flex-col items-start gap-4">
        {aboutParagraphs.map((p, i) => (
          <p key={i} className="w-full text-[16px] font-medium leading-6 text-[#333333] dark:text-white/90">
            {p}
          </p>
        ))}
        <p className="w-full text-[16px] font-medium leading-6 text-[#333333] dark:text-white/90">
          Based in Kigali. Working worldwide. Find me on{" "}
          <a href={socials.x} target="_blank" rel="noopener noreferrer" className={linkClass}>
            X
          </a>{" "}
          or{" "}
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          , or{" "}
          <a href={socials.email} className={linkClass}>
            email me
          </a>
          .
        </p>
      </div>
    </section>
  );
}
