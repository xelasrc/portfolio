"use client";

import { useState } from "react";

const links = ["About", "Experience", "Projects", "Skills", "Ask Alex", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg border-b border-border">
      <div className="flex justify-between items-center px-6 md:px-14 py-1">
        <a href="#" className="flex items-center">
          <img src="/apple-touch-icon2.png" alt="AW" className="h-10 w-10 md:h-15 md:w-15" />
        </a>

        {/* desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative font-mono text-muted text-xs tracking-widest uppercase transition-colors duration-200 hover:text-accent group"
              >
                {item}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-px bg-accent transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-accent transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-accent transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col border-t border-border list-none">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 font-mono text-muted text-xs tracking-widest uppercase border-b border-border hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}