export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-14 py-5 bg-bg border-b border-border">
      <a href="#" className="font-syne font-extrabold text-accent text-lg">AW</a>
      <ul className="flex gap-8 list-none">
        {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="font-mono text-muted text-xs tracking-widest uppercase hover:text-accent transition-colors">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}