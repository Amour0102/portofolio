import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { siteX } from "@/lib/layout";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        <div className={`w-full flex justify-center ${siteX} pt-10 sm:pt-16 lg:pt-[80px] max-lg:pb-10 lg:pb-[56px]`}>
          <Hero />
        </div>

        <Gallery />

        <div className={`w-full flex justify-center ${siteX} max-lg:pt-4 lg:pt-[56px] pb-12 sm:pb-16 lg:pb-[80px]`}>
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  );
}
