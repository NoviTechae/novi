"use client";
// src/components/Footer.jsx

import { Instagram, MessageCircle, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isAr = pathname?.startsWith("/ar");
  const prefix = isAr ? "/ar" : "/en";

  const legalLinks = isAr
    ? [
        { href: `${prefix}/terms`,         label: "شروط الخدمة" },
        { href: `${prefix}/privacy`,        label: "الخصوصية" },
        { href: `${prefix}/refund-policy`,  label: "سياسة الاسترداد" },
      ]
    : [
        { href: `${prefix}/terms`,         label: "Terms" },
        { href: `${prefix}/privacy`,        label: "Privacy" },
        { href: `${prefix}/refund-policy`,  label: "Refunds" },
      ];

  return (
    <footer className="mt-40 pt-10 border-t border-border text-sm text-muted">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

        {/* Left */}
        <p>© {new Date().getFullYear()} NoviTech</p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a href="https://wa.me/971558198862" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-accent transition p-1">
            <MessageCircle size={18} />
          </a>
          <a href="https://www.instagram.com/novitech.ae" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent transition p-1">
            <Instagram size={18} />
          </a>
          <a href="https://www.tiktok.com/@novitech.ae" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-accent transition p-1">
            <Video size={18} />
          </a>
        </div>

        {/* Right */}
        <p className="text-xs">Emirati-led • Built with precision</p>

      </div>

      {/* Legal links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-6 pb-2 text-xs opacity-50">
        {legalLinks.map((l) => (
          <Link key={l.href} href={l.href} className="hover:opacity-100 transition-opacity">
            {l.label}
          </Link>
        ))}
      </div>

      {/* Legal name */}
      <p className="text-center text-[10px] opacity-20 pb-4">
        NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C — Registered in the UAE
      </p>
    </footer>
  );
}