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
        {/* Hero — 80px top on desktop, 24px on mobile; 64px bottom */}
        <div className="w-full flex justify-center px-6 md:px-0 pt-6 md:pt-[80px] pb-6 md:pb-[64px]">
          <Hero />
        </div>

        {/* Scroll-driven horizontal gallery — full-bleed, sticky */}
        <Gallery />

        {/* Projects — 24px top on mobile, 80px on desktop; 80px bottom */}
        <div className="w-full flex justify-center px-6 md:px-0 pt-6 md:pt-[80px] pb-[80px]">
          <Projects />
        </div>
      </main>

      <Footer />
    </div>
  );
}
