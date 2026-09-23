import { moreWorkVideo } from "@/lib/home-data";

// "More Work" section. The Paper frame reserves a rounded video slot ("WorkVideo").
// When `moreWorkVideo` is set it plays a muted, looping reel; until then it shows
// the placeholder surface from the design.
export default function MoreWork() {
  return (
    <section className="mx-auto flex w-full max-w-[590px] flex-col items-start gap-5">
      <h2 className="text-[20px] font-medium leading-[26px] tracking-[-0.015em] text-[#333333] dark:text-white">
        More Work
      </h2>
      <div
        className="w-full overflow-hidden rounded-[24px] border-[0.5px] border-[#E4E4E4] bg-[#F8F8F8] dark:border-white/[0.08] dark:bg-white/[0.04]"
        style={{ aspectRatio: "590 / 428" }}
        aria-label="Work reel"
      >
        {moreWorkVideo && (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={moreWorkVideo.poster}
          >
            <source src={moreWorkVideo.src} />
          </video>
        )}
      </div>
    </section>
  );
}
