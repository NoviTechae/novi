"use client";
// src/components/Navbar.jsx

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isAr = pathname?.startsWith("/ar");
  const prefix = isAr ? "/ar" : "/en";
  const isHomePage = pathname === "/en" || pathname === "/ar" || pathname === "/";

  const links = isAr
    ? [
        { label: "عن نوفيتك", href: isHomePage ? "#about"    : `${prefix}#about`    },
        { label: "الخدمات",   href: isHomePage ? "#services"  : `${prefix}#services`  },
        { label: "المشاريع",  href: isHomePage ? "#projects"  : `${prefix}#projects`  },
        { label: "تواصل",     href: `${prefix}/contact` },
      ]
    : [
        { label: "About",    href: isHomePage ? "#about"    : `${prefix}#about`    },
        { label: "Services", href: isHomePage ? "#services"  : `${prefix}#services`  },
        { label: "Projects", href: isHomePage ? "#projects"  : `${prefix}#projects`  },
{ label: "Contact", href: `${prefix}/contact` }      ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
      <div
        className="flex items-center justify-between py-6 px-6 md:px-10 max-w-7xl mx-auto relative"
        dir={isAr ? "rtl" : "ltr"}
      >
        {/* Logo */}
        <a href={prefix} className="flex items-center text-lg tracking-tight font-medium">
          <span className="glitch font-semibold">N</span>
          <span className="ml-[1px]">oviTech</span>
          <span className="text-muted ml-[1px]">.</span>
        </a>

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

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-beige border-t border-border animate-fade-in" dir={isAr ? "rtl" : "ltr"}>
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