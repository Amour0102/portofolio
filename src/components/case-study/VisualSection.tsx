import Image from "next/image";
import { VisualSection as Section } from "@/lib/case-studies/types";
import AutoplayVideo from "./AutoplayVideo";

// A visual section: media in a #F8F8F8 rounded surface, with an optional Inter
// caption below. "web" = one wide screenshot; "phones" = three phone screens;
// "placeholder" = an empty surface reserved for a visual not yet placed.
export default function VisualSection({ section }: { section: Section }) {
  const caption = "caption" in section ? section.caption : undefined;

  // Intrinsic size for a web image, taken from its ratio so the aspect box is
  // exact and the full-resolution source is honored (served unoptimized).
  const webDims = (() => {
    if (section.kind !== "web") return { w: 1632, h: 1160 };
    const [w, h] = (section.ratio ?? "816 / 580").split("/").map((s) => parseInt(s.trim(), 10));
    return w > 0 && h > 0 ? { w, h } : { w: 1632, h: 1160 };
  })();

  return (
    <figure className="flex w-full flex-col items-center gap-3">
      {section.kind === "video" ? (
        <div
          className={`w-full overflow-hidden rounded-[16px] bg-[#F8F8F8] dark:bg-white/[0.04] ${
            section.bordered === false ? "" : "border-[0.5px] border-[#E4E4E4] dark:border-white/[0.08]"
          }`}
          style={{ aspectRatio: section.ratio }}
        >
          <AutoplayVideo
            src={section.src}
            poster={section.poster}
            controls={section.controls}
            className="h-full w-full object-cover"
          />
        </div>
      ) : section.kind === "placeholder" ? (
        <div
          className="w-full rounded-[16px] bg-[#F8F8F8] dark:bg-white/[0.04]"
          style={{ aspectRatio: section.ratio }}
        />
      ) : section.kind === "web" ? (
        <div className="w-full rounded-[16px] bg-[#F8F8F8] p-4 dark:bg-white/[0.06]">
          <div
            className={`w-full overflow-hidden rounded-[16px] ${
              section.bordered === false ? "" : "border-[0.5px] border-black/[0.06] dark:border-white/[0.18]"
            }`}
            style={{ aspectRatio: section.ratio ?? "816 / 580" }}
          >
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={webDims.w}
              height={webDims.h}
              unoptimized
              className={`h-full w-full object-top ${section.fit === "contain" ? "object-contain" : "object-cover"}`}
            />
          </div>
        </div>
      ) : (
        <div className="w-full rounded-[16px] bg-[#F8F8F8] p-5 sm:p-10 dark:bg-white/[0.04]">
          {/* Mobile: horizontal snap carousel so tall phone mockups stay legible
              without a huge vertical scroll. sm+: a plain three-up grid. */}
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-x-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
            {section.images.map((img) => (
              <div
                key={img.src}
                className="w-[78%] shrink-0 snap-start overflow-hidden rounded-[16px] sm:w-auto"
                style={{ aspectRatio: "240 / 534" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={480}
                  height={1068}
                  unoptimized
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {caption && (
        <figcaption className="text-center text-[14px] font-medium leading-5 text-[#767676] dark:text-[#888888]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
