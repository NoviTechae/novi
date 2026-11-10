"use client";
// src/components/GloweeLinks.jsx
// Link-in-bio page for Instagram: novitech.ae/glowee

import { CalendarCheck, Gift, Sparkles } from "lucide-react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import {
  TEXT,
  useLang,
  Hero,
  SectionTitle,
  Arrow,
  APP_STORE_URL,
  GOOGLE_PLAY_URL,
  OVERVIEW_URLS,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
} from "./GloweeShared";

const FEATURE_ICONS = [CalendarCheck, Gift, Sparkles];

export default function GloweeLinks() {
  const [lang, setLang] = useLang();
  const t = TEXT[lang];
  const overviewUrl = OVERVIEW_URLS[lang];

  return (
    <main
      dir={t.dir}
      lang={lang}
      className={
        "min-h-screen bg-[#FAF6F1] text-[#2B1A27] " +
        (lang === "ar" ? "font-arabic" : "font-sans")
      }
    >
      <Hero t={t} lang={lang} setLang={setLang}>
        <p className="mt-5 text-sm tracking-[0.18em] text-[#C9A24D]">
          {t.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-[#FAF6F1]/80">
          {t.sub}
        </p>
        <p className="mt-2 text-xs text-[#FAF6F1]/50">{t.place}</p>
      </Hero>

      <div className="mx-auto w-full max-w-md px-6 pb-12 pt-8">
        {/* Features */}
        <div className="mb-10 grid grid-cols-3 gap-3">
          {t.features.map((label, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <div
                key={label}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white px-2 py-4 text-center shadow-[0_6px_20px_rgba(74,29,63,0.08)]"
              >
                <Icon className="h-5 w-5 text-[#C9A24D]" aria-hidden="true" />
                <span className="text-xs font-medium leading-snug">{label}</span>
              </div>
            );
          })}
        </div>

        {/* Customers */}
        <section className="mb-10">
          <SectionTitle>{t.customersTitle}</SectionTitle>
          <div className="space-y-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl bg-[#4A1D3F] px-5 py-4 text-[#FAF6F1] shadow-[0_10px_24px_rgba(74,29,63,0.25)] transition-all duration-200 hover:-translate-y-[2px]"
            >
              <div>
                <p className="font-semibold">{t.appStore}</p>
                <p className="mt-0.5 text-xs text-[#FAF6F1]/65">
                  {t.appStoreSub}
                </p>
              </div>
              <span className="text-[#C9A24D]">
                <Arrow />
              </span>
            </a>

            {GOOGLE_PLAY_URL ? (
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_6px_20px_rgba(74,29,63,0.08)] transition-all duration-200 hover:-translate-y-[2px]"
              >
                <p className="font-semibold">{t.googlePlayLive}</p>
                <span className="text-[#C9A24D]">
                  <Arrow />
                </span>
              </a>
            ) : (
              <div
                aria-disabled="true"
                className="rounded-2xl border border-dashed border-[#C9A24D]/60 px-5 py-4 text-[#6F5A66]"
              >
                <p className="font-semibold">{t.googlePlay}</p>
                <p className="mt-0.5 text-xs">{t.googlePlaySub}</p>
              </div>
            )}
          </div>
        </section>

        {/* Salons */}
        <section className="mb-10">
          <SectionTitle>{t.salonsTitle}</SectionTitle>

          <div className="rounded-3xl bg-white p-5 shadow-[0_6px_20px_rgba(74,29,63,0.08)]">
            <p className="mb-4 text-sm leading-relaxed text-[#6F5A66]">
              {t.salonsText}
            </p>

            <div className="space-y-3">
              <a
                href={`/glowee/salons?lang=${lang}`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-[#C9A24D] px-5 py-4 text-[#2B1A27] transition-all duration-200 hover:-translate-y-[2px] hover:brightness-105"
              >
                <div>
                  <p className="font-semibold">{t.registerCta}</p>
                  <p className="mt-0.5 text-xs text-[#2B1A27]/70">
                    {t.registerSub}
                  </p>
                </div>
                <Arrow />
              </a>

              {overviewUrl ? (
                <a
                  href={overviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E8DCD0] px-5 py-4 transition-all duration-200 hover:border-[#C9A24D]"
                >
                  <div>
                    <p className="font-semibold">{t.overview}</p>
                    <p className="mt-0.5 text-xs text-[#6F5A66]">
                      {t.overviewSub}
                    </p>
                  </div>
                  <span className="text-[#C9A24D]">
                    <Arrow />
                  </span>
                </a>
              ) : null}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E8DCD0] px-5 py-4 transition-all duration-200 hover:border-[#C9A24D]"
              >
                <div>
                  <p className="font-semibold">{t.whatsapp}</p>
                  <p className="mt-0.5 text-xs text-[#6F5A66]">
                    {t.whatsappSub}
                  </p>
                </div>
                <span className="text-[#C9A24D]">
                  <Arrow />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className="mb-4 text-xs font-medium text-[#4A1D3F]">{t.follow}</p>

          <div className="flex items-center justify-center gap-3">
            {[
              { href: INSTAGRAM_URL, label: "Instagram", Icon: FaInstagram },
              { href: TIKTOK_URL, label: "TikTok", Icon: FaTiktok },
              { href: WHATSAPP_URL, label: "WhatsApp", Icon: FaWhatsapp },
            ]
              .filter((s) => s.href)
              .map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DCD0] bg-white text-[#4A1D3F] transition hover:border-[#C9A24D] hover:text-[#9B7A2E]"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[#6F5A66]/70">
            {t.footer}
          </p>
        </footer>
      </div>
    </main>
  );
}
