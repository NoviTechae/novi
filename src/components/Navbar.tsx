// src/components/Navbar.tsx

"use client";
import { useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  const items = [
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#contact", label: "تواصل" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/brand/noviLogo1.png"   // ضع اسم ملف لوجو شركتك
            alt="NoviTech Logo"
            width={100}        // تعدل الحجم مثل ما تحب
            height={100}
            className="rounded-md"
          />
        </div>


        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {items.map((it) => (
            <li key={it.href}><a href={it.href} className="nav-link">{it.label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden md:inline-flex">ابدأ مشروعك</a>

        {/* Burger on mobile */}
        <details ref={detailsRef} className="md:hidden relative">
          <summary className="cursor-pointer rounded-md px-3 py-2 hover:bg-slate-100 select-none list-none">
            {/* أيقونة 3 خطوط */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <ul className="absolute left-0 mt-0 w-40 rounded-lg border bg-white shadow-lg p-2 space-y-1">
            <li><a href="#about" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-slate-50">من نحن</a></li>
            <li><a href="#services" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-slate-50">خدماتنا</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block px-3 py-2 rounded hover:bg-slate-50">تواصل</a></li>
          </ul>
        </details>

      </nav>
    </header>
  );
}
