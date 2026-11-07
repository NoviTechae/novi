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

  const links = isAr
    ? [
        { label: "عن نوفيتك", href: "/ar/about" },
        { label: "الخدمات", href: "/ar/services" },
        { label: "أعمالنا", href: "/ar/work" },
        { label: "منهجيتنا", href: "/ar/approach" },
      ]
    : [
        { label: "About", href: "/en/about" },
        { label: "Services", href: "/en/services" },
        { label: "Work", href: "/en/work" },
        { label: "Approach", href: "/en/approach" },
      ];

  const isActive = (href) =>
    !href.includes("#") &&
    (pathname === href || pathname?.startsWith(`${href}/`) ||
      (href.endsWith("/work") && pathname?.startsWith(`${prefix}/projects`)));

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
        ${scrolled
          ? "border-b border-border bg-beige/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-beige/80 backdrop-blur-sm"
        }
      `}
    >
      <div
        dir={isAr ? "rtl" : "ltr"}
        className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10"
      >
        {/* Logo */}
        <Link
          href={prefix}
          aria-label={isAr ? "الصفحة الرئيسية لنوفيتك" : "NoviTech home"}
          className="flex items-center"
        >
          <img
            src="/header1.png"
            alt="NoviTech Technology Systems"
            className="h-14 w-auto object-contain md:h-20"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-7 text-sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`
                  relative transition hover:text-charcoal
                  after:absolute after:-bottom-1 after:start-0
                  after:h-px after:bg-accent after:transition-all
                  hover:after:w-full
                  ${isActive(link.href)
                    ? "text-charcoal after:w-full"
                    : "text-muted after:w-0"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="h-5 w-px bg-border" />

          <LanguageSwitch />

          <Link
            href={`${prefix}/contact`}
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
            flex h-11 w-11 items-center justify-center
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
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    border-b border-border/70
                    py-4
                    text-sm
                    transition hover:text-accent
                    ${isActive(link.href) ? "text-accent" : "text-charcoal"}
                  `}
                >
                  {link.label}
                </Link>
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
