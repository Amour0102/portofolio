const linkCls = "inline-block py-2 -my-2 underline underline-offset-2 hover:opacity-70 transition-opacity";

export default function Hero() {
  return (
    <section className="w-full max-w-[576px] flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-[28px] sm:text-[24px] font-semibold leading-9 sm:leading-8 tracking-[-0.02em] text-black dark:text-white">
          Cyusa Amour
        </h1>
        <p className="text-[14px] font-medium leading-5 capitalize text-[#888888]">
          Product Designer
        </p>
      </div>

      <p className="text-[14px] font-medium leading-[22px] text-[#333333] dark:text-white/80">
        I lead design at AC Mobility, building transportation infrastructure that moves 6 million+ commuters
        daily across mobile, web, USSD, and field terminals. I also shipped{" "}
        <a
          href="https://voit.io"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          Voit
        </a>
        , a commercial Figma design system used by designers at Adobe, Webflow,
        Zoom, and Typeform.
      </p>
      <p className="text-[14px] font-medium leading-[22px] text-[#333333] dark:text-white/80">
        I am a systems thinker who cares about design that holds under
        real-world pressure. AI is core to how I work.
      </p>
      <p className="text-[14px] font-medium leading-[22px] text-[#333333] dark:text-white/80">
        Outside of work I am building a Kinyarwanda daily word app for Gen Z
        language preservation grounded in how people actually misuse words
        today.
      </p>
      <p className="text-[14px] font-medium leading-[22px] text-[#333333] dark:text-white/80">
        You can find me on{" "}
        <a
          href="https://x.com/cyusa_drizy"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkCls} px-2 -mx-2`}
        >
          X
        </a>
        ,{" "}
        <a
          href="https://www.linkedin.com/in/cyusa-bahizi-amour-175a9a225/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkCls}
        >
          LinkedIn
        </a>{" "}
        or reach me via{" "}
        <a
          href="mailto:cyusaamour@gmail.com"
          className={linkCls}
        >
          email
        </a>
        .
      </p>
    </section>
  );
}
