"use client";
// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitch from "./LanguageSwitch";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const isAr = pathname?.startsWith("/ar");
  const prefix = isAr ? "/ar" : "/en";

  const isHomePage =
    pathname === "/en" ||
    pathname === "/ar" ||
    pathname === "/";

  const links = isAr
    ? [
        {
          label: "عن نوفيتك",
          href: isHomePage ? "#about" : `${prefix}#about`,
        },
        {
          label: "الخدمات",
          href: isHomePage ? "#services" : `${prefix}#services`,
        },
        {
          label: "المشاريع",
          href: isHomePage ? "#projects" : `${prefix}#projects`,
        },
      ]
    : [
        {
          label: "About",
          href: isHomePage ? "#about" : `${prefix}#about`,
        },
        {
          label: "Services",
          href: isHomePage ? "#services" : `${prefix}#services`,
        },
        {
          label: "Projects",
          href: isHomePage ? "#projects" : `${prefix}#projects`,
        },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "border-b border-border bg-beige/95 shadow-sm backdrop-blur"
            : "border-b border-transparent bg-beige/80 backdrop-blur-sm"
        }
      `}
    >
      <div
        dir={isAr ? "rtl" : "ltr"}
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
      >
        {/* Logo */}
        <Link
          href={prefix}
          aria-label="NoviTech home"
          className="flex items-center text-lg font-medium tracking-tight text-charcoal"
        >
          <span className="glitch font-semibold">
            N
          </span>

          <span className="ms-[1px]">
            oviTech
          </span>

          <span className="ms-[1px] text-accent">
            .
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  relative text-muted transition hover:text-charcoal
                  after:absolute after:-bottom-1 after:start-0
                  after:h-px after:w-0 after:bg-accent
                  after:transition-all hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="h-5 w-px bg-border" />

          <LanguageSwitch />

          <Link
            href={`${prefix}/contact`}
            className="
              inline-flex items-center justify-center
              border border-charcoal
              px-5 py-2.5
              text-sm text-charcoal
              transition
              hover:bg-charcoal hover:text-beige
            "
          >
            {isAr ? "ابدأ مشروعك" : "Start a project"}
          </Link>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={
            open
              ? isAr
                ? "إغلاق القائمة"
                : "Close menu"
              : isAr
              ? "فتح القائمة"
              : "Open menu"
          }
          aria-expanded={open}
          className="
            flex h-10 w-10 items-center justify-center
            border border-border
            text-charcoal
            transition hover:border-accent hover:text-accent
            md:hidden
          "
        >
          {open ? (
            <X size={18} strokeWidth={1.8} />
          ) : (
            <Menu size={18} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          dir={isAr ? "rtl" : "ltr"}
          className="border-t border-border bg-beige md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
                    border-b border-border/70
                    py-4
                    text-sm text-charcoal
                    transition hover:text-accent
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <LanguageSwitch />

              <Link
                href={`${prefix}/contact`}
                onClick={() => setOpen(false)}
                className="
                  inline-flex items-center justify-center
                  border border-charcoal bg-charcoal
                  px-5 py-2.5
                  text-sm text-beige
                  transition
                  hover:bg-transparent hover:text-charcoal
                "
              >
                {isAr ? "ابدأ مشروعك" : "Start a project"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}