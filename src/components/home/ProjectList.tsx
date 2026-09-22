import Image from "next/image";
import Link from "next/link";
import { homeProjects, HomeProject } from "@/lib/home-data";

// "Projects" section - a stacked list of media + caption blocks.
export default function ProjectList() {
  return (
    <section className="mx-auto flex w-full max-w-[590px] flex-col items-start gap-6">
      <h2 className="text-[20px] font-medium leading-[26px] tracking-[-0.015em] text-[#333333] dark:text-white">
        Projects
      </h2>
      <div className="flex w-full flex-col items-start gap-10">
        {homeProjects.map((p, i) => (
          <ProjectItem key={p.id} project={p} priority={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectItem({ project: p, priority }: { project: HomeProject; priority?: boolean }) {
  // The media is its own hover group so the interaction fires on the thumbnail
  // itself - a soft lift + shadow, with a slow inner zoom of the image - for
  // every project, matted or not.
  // A matted card (themeable light/dark surface, 16px radius) frames a branded
  // or opaque image; otherwise the image fills a plain 24px card.
  const matted = Boolean(p.surfaceClass);
  const radius = matted ? "rounded-[16px]" : "rounded-[24px]";
  const media = (
    <div
      className={`group relative w-full overflow-hidden ${radius} transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_16px_32px_-24px_rgba(17,42,80,0.22)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        matted
          ? `${p.surfaceClass} p-4`
          : "ring-1 ring-inset ring-[#efefef] dark:ring-white/[0.06]"
      }`}
    >
      {/* aspect-ratio lives on the image box (not the padded outer) so the
          matted mat never crops the image via object-cover. */}
      <div className={`w-full overflow-hidden ${radius}`} style={{ aspectRatio: `${p.width} / ${p.height}` }}>
        <Image
          src={p.image}
          alt={`${p.client}, ${p.description}`}
          width={p.width * 2}
          height={p.height * 2}
          unoptimized
          priority={priority}
          className={`h-full w-full ${radius} object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
      </div>
    </div>
  );

  const caption = (
    <div className="flex w-full max-w-[576px] flex-col items-start gap-2">
      <span className="text-[16px] font-medium leading-[20px] text-[#767676] dark:text-[#888888]">{p.client}</span>
      <p className="text-[20px] font-medium leading-[26px] tracking-[-0.015em] text-[#333333] dark:text-white">
        {p.description}
      </p>
    </div>
  );

  if (p.href) {
    return (
      <Link href={p.href} className="flex w-full flex-col items-start gap-4">
        {media}
        {caption}
      </Link>
    );
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      {media}
      {caption}
    </div>
  );
}
