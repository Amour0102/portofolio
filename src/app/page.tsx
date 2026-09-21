import SiteBar from "@/components/home/SiteBar";
import Intro from "@/components/home/Intro";
import ProjectList from "@/components/home/ProjectList";
import MoreWork from "@/components/home/MoreWork";
import WritingList from "@/components/home/WritingList";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className="home-root min-h-screen w-full bg-white font-grotesk text-[#333333] antialiased [--home-bg:#FFFFFF] dark:bg-[#0D0D0D] dark:text-white dark:[--home-bg:#0D0D0D]">
      <div className="flex flex-col items-stretch gap-16 pb-16">
        <SiteBar />

        <main className="flex flex-col items-center gap-16 px-6">
          <Intro />
          <ProjectList />
          <MoreWork />
          <WritingList />
          <About />
        </main>

        <SiteBar />
      </div>
    </div>
  );
}
