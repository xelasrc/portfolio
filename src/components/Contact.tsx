import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 06. Contact</p>
        <h2 className="font-syne font-bold text-bright text-3xl md:text-4xl tracking-tight mb-3">Get in touch</h2>
        <p className="text-muted mb-10">Graduating May 2026 · Actively looking for graduate opportunities.</p>
      </Reveal>
      <div className="flex flex-col gap-3 max-w-sm">
        <Reveal delay={0}>
          <a href="mailto:amwells2003@gmail.com" className="text-bright hover:text-accent transition-colors">
            amwells2003@gmail.com
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a href="https://linkedin.com/in/alexander-wells-b0a5aa309" target="_blank" className="text-bright hover:text-accent transition-colors">
            LinkedIn ↗
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a href="https://github.com/xelasrc" target="_blank" className="text-bright hover:text-accent transition-colors">
            github.com/xelasrc ↗
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <a href="/CV_AW.pdf" download="Alexander_Wells_CV.pdf" className="text-bright hover:text-accent transition-colors">
            Download CV ↓
          </a>
        </Reveal>
      </div>
    </section>
  );
}