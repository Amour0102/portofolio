import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center">
        {/* Hero — 80px top, 64px bottom (reduced from 80px per design) */}
        <div className="w-full flex justify-center pt-[80px] pb-[64px]">
          <Hero />
        </div>

        {/* Scroll-driven horizontal gallery — full-bleed, sticky */}
        <Gallery />

        {/* Projects — 80px top gap after gallery, 80px bottom */}
        <div className="w-full flex justify-center pt-[80px] pb-[80px]">
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  );
}
