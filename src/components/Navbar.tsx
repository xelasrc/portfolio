export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-5 bg-bg border-b border-border">
      <a href="#" className="font-syne font-extrabold text-accent text-lg">AW</a>
      <ul className="flex gap-8 list-none">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="relative font-mono text-muted text-xs tracking-widest uppercase transition-colors duration-200 hover:text-accent group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}