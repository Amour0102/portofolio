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
            className="h-full w-full object-cover"
          />
        </div>
      ) : section.kind === "placeholder" ? (
        <div
          className="w-full rounded-[16px] bg-[#F8F8F8] dark:bg-white/[0.04]"
          style={{ aspectRatio: section.ratio }}
        />
      ) : section.kind === "web" ? (
        <div className="w-full rounded-[16px] bg-[#F8F8F8] p-4 dark:bg-white/[0.04]">
          <div
            className="w-full overflow-hidden rounded-[16px] border-[0.5px] border-black/[0.06] dark:border-white/[0.08]"
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
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-3 sm:justify-items-stretch sm:gap-6">
            {section.images.map((img) => (
              <div
                key={img.src}
                className="w-full max-w-[200px] overflow-hidden rounded-[16px] sm:max-w-none"
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
        <figcaption className="text-center text-[14px] font-medium leading-5 text-[#888888]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
