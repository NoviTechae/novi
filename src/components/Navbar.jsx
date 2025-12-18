"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitch from "./LanguageSwitch";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-beige/90 backdrop-blur border-b border-border shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between py-6 px-6 md:px-10 max-w-7xl mx-auto relative">
        {/* Logo */}
<div className="flex items-center text-lg tracking-tight font-medium">
  <span className="glitch font-semibold">N</span>
  <span className="ml-[1px]">oviTech</span>
  <span className="text-muted ml-[1px]">.</span>
</div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((link) => (
<a
  key={link.label}
  href={link.href}
  className="
    relative text-muted hover:text-charcoal
    after:absolute after:left-0 after:-bottom-1
    after:w-0 after:h-[1px] after:bg-accent
    hover:after:w-full after:transition-all
  "
>
              {link.label}
            </a>
          ))}
          <LanguageSwitch />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
  <div className="md:hidden bg-beige border-t border-border animate-fade-in">
     <div className="flex flex-col p-6 gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm hover:text-accent transition"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitch />
          </div>
        </div>
      )}
    </nav>
  );
}