"use client";
// src/components/Footer.jsx

import {
  Instagram,
  MessageCircle,
  Video,
  ArrowUp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Paste the NoviTech LinkedIn company page URL here,
// e.g. "https://www.linkedin.com/company/your-page-name".
// The LinkedIn icon only appears once a real https:// link is set.
const LINKEDIN_URL = "https://www.linkedin.com/company/novitech-ae/";

function LinkedinIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const isAr = pathname?.startsWith("/ar");
  const prefix = isAr ? "/ar" : "/en";

  const legalLinks = isAr
    ? [
        { href: `${prefix}/terms`, label: "شروط الخدمة" },
        { href: `${prefix}/privacy`, label: "سياسة الخصوصية" },
        { href: `${prefix}/refund-policy`, label: "سياسة الاسترداد" },
      ]
    : [
        { href: `${prefix}/terms`, label: "Terms of Service" },
        { href: `${prefix}/privacy`, label: "Privacy Policy" },
        { href: `${prefix}/refund-policy`, label: "Refund Policy" },
      ];

  const companyLinks = isAr
    ? [
        { href: "/ar/about", label: "عن نوفيتك" },
        { href: "/ar/services", label: "الخدمات" },
        { href: "/ar/work", label: "أعمالنا" },
        { href: "/ar/approach", label: "منهجيتنا" },
        { href: "/ar/contact", label: "تواصل معنا" },
      ]
    : [
        { href: "/en/about", label: "About" },
        { href: "/en/services", label: "Services" },
        { href: "/en/work", label: "Work" },
        { href: "/en/approach", label: "Approach" },
        { href: "/en/contact", label: "Contact" },
      ];

  const socialLinks = [
    ...(LINKEDIN_URL.startsWith("https://")
      ? [
          {
            href: LINKEDIN_URL,
            label: "LinkedIn",
            icon: LinkedinIcon,
          },
        ]
      : []),
    {
      href: "https://wa.me/971505195426",
      label: "WhatsApp",
      icon: MessageCircle,
    },
    {
      href: "https://www.instagram.com/novitech.ae",
      label: "Instagram",
      icon: Instagram,
    },
    {
      href: "https://www.tiktok.com/@novitech.ae",
      label: "TikTok",
      icon: Video,
    },
  ];

  return (
    <footer
      dir={isAr ? "rtl" : "ltr"}
      className="mt-40 border-t border-border text-muted"
    >
      {/* Main footer */}
      <div className="py-12 md:py-14">
        <div
          className={`grid gap-10 md:gap-12 ${
            companyLinks.length
              ? "md:grid-cols-[1.4fr_1fr_1fr_1fr]"
              : "md:grid-cols-[1.4fr_1fr_1fr]"
          }`}
        >

          {/* Brand */}
          <div>
            <Link
              href={`${prefix}`}
              className="inline-block text-xl font-semibold tracking-tight text-charcoal"
            >
              NoviTech
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7">
              {isAr
                ? "شركة تقنية إماراتية تطوّر منتجات رقمية وحلولاً تقنية مخصصة لاحتياجات الأعمال الحقيقية."
                : "A UAE-based technology company building digital products and custom technology solutions for real-world business needs."}
            </p>

            <p className="mt-5 text-xs text-accent">
              {isAr
                ? "مقرها الإمارات • بقيادة إماراتية"
                : "UAE-based • Emirati-led"}
            </p>
          </div>

          {/* Company */}
          {companyLinks.length > 0 && (
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal">
                {isAr ? "الشركة" : "Company"}
              </p>

              <div className="flex flex-col items-start gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Legal */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal">
              {isAr ? "قانوني" : "Legal"}
            </p>

            <div className="flex flex-col items-start gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal">
              {isAr ? "تواصل معنا" : "Connect"}
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center border border-border text-charcoal transition hover:border-accent hover:text-accent"
                  >
                    <Icon size={17} strokeWidth={1.7} />
                  </a>
                );
              })}
            </div>

            <Link
              href={`${prefix}/contact`}
              className="mt-5 inline-flex items-center text-sm text-charcoal transition hover:text-accent"
            >
              {isAr ? "ابدأ مشروعك" : "Start a project"}

              <span
                className={isAr ? "mr-2" : "ml-2"}
                aria-hidden="true"
              >
                {isAr ? "←" : "→"}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border py-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs">
              © {new Date().getFullYear()} NoviTech.{" "}
              {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
            </p>

            <p
              dir="ltr"
              className={`mt-2 text-[10px] opacity-50 ${
                isAr ? "text-right" : "text-left"
              }`}
            >
              NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C
              <span className="mx-2">•</span>
              {isAr ? "مسجلة في دولة الإمارات العربية المتحدة" : "Registered in the UAE"}
            </p>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            aria-label={isAr ? "العودة إلى الأعلى" : "Back to top"}
            className="inline-flex w-fit items-center gap-2 text-xs text-charcoal transition hover:text-accent"
          >
            {isAr ? "العودة للأعلى" : "Back to top"}
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}