import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import AskAlex from "@/components/AskAlex";
import Parallax from "@/components/Parallax";


export default function Home() {
  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1e3352 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />
      <Parallax />

      {/* blur strip over content */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-full w-full max-w-6xl pointer-events-none z-1"
        style={{ backdropFilter: "blur(2.5px)" }}
      />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AskAlex />
        <Contact />
      </main>
    </>
  );
}