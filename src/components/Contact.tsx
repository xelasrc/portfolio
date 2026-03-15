export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-14 py-24 border-t border-border">
      <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-3">Get in touch</h2>
      <p className="text-muted mb-10">Actively looking for software & ai graduate roles in Australia.</p>
      <div className="flex flex-col gap-3 max-w-sm">
        <a href="mailto:amwells2003@gmail.com" className="text-text hover:text-accent transition-colors">amwells2003@gmail.com</a>
        <a href="https://linkedin.com/in/alexander-wells-b0a5aa309" target="_blank" className="text-text hover:text-accent transition-colors">LinkedIn ↗</a>
        <a href="https://github.com/xelasrc" target="_blank" className="text-text hover:text-accent transition-colors">github.com/xelasrc ↗</a>
        <a href="/CV_AW.pdf" download className="text-text hover:text-accent transition-colors">Download CV ↓</a>
      </div>
    </section>
  );
}