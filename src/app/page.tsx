import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <SequenceScroll />
      <div className="relative z-10 bg-black">
        <About />
        <Projects />
        <Services />
        <Marquee />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
