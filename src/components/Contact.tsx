import Reveal from "@/components/Reveal";

const links = [
  { label: "amwells2003@gmail.com", href: "mailto:amwells2003@gmail.com" },
  { label: "LinkedIn ↗", href: "https://linkedin.com/in/alexander-wells-b0a5aa309", target: "_blank" },
  { label: "github.com/xelasrc ↗", href: "https://github.com/xelasrc", target: "_blank" },
  { label: "Download CV ↓", href: "/CV_AW.pdf", download: "Alexander_Wells_CV.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-14 pt-24 pb-40 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 06. Contact</p>
        <h2 className="font-syne font-bold text-bright text-3xl md:text-4xl tracking-tight mb-3">Get in touch</h2>
        <p className="text-muted mb-16 max-w-md">Graduating May 2026 · Actively looking for graduate opportunities.</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.target}
              download={link.download}
              className="flex items-center gap-3 p-4 border border-border hover:border-accent hover:text-accent text-bright transition-all duration-200 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
              <span className="font-mono text-xs tracking-wide">{link.label}</span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.5}>
        <p className="font-mono text-muted text-xs tracking-widest mt-20">
          © {new Date().getFullYear()} Alexander Wells
        </p>
      </Reveal>
    </section>
  );
}