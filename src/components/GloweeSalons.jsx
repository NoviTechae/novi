"use client";
// src/components/GloweeSalons.jsx
// Salon registration page: novitech.ae/glowee/salons

import { useState } from "react";
import { Check } from "lucide-react";
import {
  TEXT,
  useLang,
  Hero,
  SectionTitle,
  Arrow,
  WHATSAPP_URL,
} from "./GloweeShared";

const fieldClass =
  "w-full rounded-xl border border-[#E8DCD0] bg-white px-4 py-3 text-sm text-[#2B1A27] outline-none transition placeholder:text-[#6F5A66]/50 focus:border-[#C9A24D]";

const labelClass = "mb-1.5 block text-xs font-medium text-[#6F5A66]";

function SalonForm({ t }) {
  const f = t.form;
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("/api/glowee-salon", {
        method: "POST",
        body: new FormData(form),
      });

      if (!res.ok) throw new Error("failed");

      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-[#EFE3DA] px-5 py-4 text-sm">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#4A1D3F]" aria-hidden="true" />
        <p>{f.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Honeypot: hidden from people, bots tend to fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div>
        <label htmlFor="g-salon" className={labelClass}>
          {f.salonName}
        </label>
        <input id="g-salon" name="salon_name" required maxLength={120} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="g-owner" className={labelClass}>
          {f.ownerName}
        </label>
        <input id="g-owner" name="owner_name" required maxLength={100} autoComplete="name" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="g-phone" className={labelClass}>
          {f.phone}
        </label>
        <input
          id="g-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          maxLength={30}
          autoComplete="tel"
          dir="ltr"
          placeholder="+971 5X XXX XXXX"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="g-area" className={labelClass}>
          {f.area}
        </label>
        <input id="g-area" name="area" maxLength={100} placeholder={f.areaPh} className={fieldClass} />
      </div>

      <div>
        <label htmlFor="g-type" className={labelClass}>
          {f.type}
        </label>
        <select id="g-type" name="type" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {f.choose}
          </option>
          {Object.entries(f.typeOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="g-ig" className={labelClass}>
          {f.instagram}
        </label>
        <input id="g-ig" name="instagram" maxLength={100} dir="ltr" placeholder="@" className={fieldClass} />
      </div>

      <div>
        <label htmlFor="g-sys" className={labelClass}>
          {f.hasSystem}
        </label>
        <select id="g-sys" name="has_system" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            {f.choose}
          </option>
          {Object.entries(f.hasSystemOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-[#4A1D3F] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#2E1127] disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.submit}
      </button>

      {status === "error" ? (
        <p role="alert" className="text-sm text-[#B00020]">
          {f.error}
        </p>
      ) : null}
    </form>
  );
}

export default function GloweeSalons() {
  const [lang, setLang] = useLang();
  const t = TEXT[lang];

  return (
    <main
      dir={t.dir}
      lang={lang}
      className={
        "min-h-screen bg-[#FAF6F1] text-[#2B1A27] " +
        (lang === "ar" ? "font-arabic" : "font-sans")
      }
    >
      <Hero t={t} lang={lang} setLang={setLang} compact>
        <h1 className="mt-5 text-xl font-semibold text-[#FAF6F1]">
          {t.salonsPageTitle}
        </h1>
        <p className="mt-2 text-sm text-[#FAF6F1]/75">{t.salonsPageSub}</p>
      </Hero>

      <div className="mx-auto w-full max-w-md px-6 pb-12 pt-8">
        <a
          href={`/glowee?lang=${lang}`}
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-[#4A1D3F] underline-offset-4 hover:underline"
        >
          <span aria-hidden="true" className="rtl:rotate-180">
            ←
          </span>
          {t.back}
        </a>

        {/* Benefits + trial */}
        <section className="mb-8 rounded-3xl bg-white p-5 shadow-[0_6px_20px_rgba(74,29,63,0.08)]">
          <ul className="space-y-3">
            {t.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A24D]" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="my-4 h-px bg-[#E8DCD0]" />

          <p className="text-sm leading-relaxed text-[#6F5A66]">{t.salonsText}</p>
        </section>

        {/* Form */}
        <section className="mb-8">
          <SectionTitle>{t.formTitle}</SectionTitle>
          <div className="rounded-3xl bg-white p-5 shadow-[0_6px_20px_rgba(74,29,63,0.08)]">
            <SalonForm t={t} />
          </div>
        </section>

        {/* WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[#E8DCD0] bg-white px-5 py-4 transition-all duration-200 hover:border-[#C9A24D]"
        >
          <div>
            <p className="font-semibold">{t.whatsapp}</p>
            <p className="mt-0.5 text-xs text-[#6F5A66]">{t.whatsappSub}</p>
          </div>
          <span className="text-[#C9A24D]">
            <Arrow />
          </span>
        </a>
      </div>
    </main>
  );
}
