"use client";
// src/components/GloweeShared.jsx
// Shared pieces for the Glowee pages (/glowee and /glowee/salons).

import { useEffect, useState } from "react";

/* ------------------------------------------------------------------
   Easy-to-edit settings
------------------------------------------------------------------- */
export const APP_STORE_URL =
  "https://apps.apple.com/ae/app/glowee-beauty-booking/id6761380382";

// Put the Google Play link here when the app is live there.
// While it is empty, a disabled "coming soon" card is shown.
export const GOOGLE_PLAY_URL = "";

// The overview files (in public/glowee/), one per language.
// Set a language to "" to hide the button for it.
export const OVERVIEW_URLS = {
  ar: "/glowee/Glowee-Overview-AR.pdf",
  en: "/glowee/Glowee-Overview-EN.pdf",
};

// Glowee's own WhatsApp number: 055 819 8862
export const WHATSAPP_URL = "https://wa.me/971558198862";
export const INSTAGRAM_URL = "https://www.instagram.com/glowee.ae/";

// Put Glowee's TikTok link here when the account exists
// (for example "https://www.tiktok.com/@glowee.ae"). While empty, it is hidden.
export const TIKTOK_URL = "https://www.tiktok.com/@glowee.ae";

/* ------------------------------------------------------------------
   Text (Arabic + English)
------------------------------------------------------------------- */
export const TEXT = {
  ar: {
    dir: "rtl",
    switchTo: "English",
    tagline: "احجزي • أهدي • اكسبي",
    sub: "احجزي موعدك في الصالون أو الخدمة المنزلية بدقيقة وادفعي من التطبيق.",
    place: "العين، الإمارات",
    back: "الرجوع",

    features: ["احجزي بدقيقة", "أهدي خدمة", "اكسبي مكافآت"],

    customersTitle: "للزبونات",
    appStore: "حمّلي التطبيق من App Store",
    appStoreSub: "متوفر الحين على iPhone",
    googlePlay: "Google Play",
    googlePlaySub: "قريباً",
    googlePlayLive: "حمّلي التطبيق من Google Play",

    salonsTitle: "لأصحاب الصالونات",
    salonsText:
      "جرّبوا Glowee مجاناً خلال الفترة التجريبية، وبعدها نسألكم وش الأنسب لكم: اشتراك أو نسبة؟",
    registerCta: "سجّلوا صالونكم",
    registerSub: "صفحة قصيرة، وبعدها نتواصل معكم",
    overview: "نبذة عن Glowee",
    overviewSub: "ملف قصير عن Glowee وفترة التجربة",
    whatsapp: "تواصلوا معنا عبر واتساب",
    whatsappSub: "أي سؤال قبل التسجيل",

    follow: "تابعونا",
    footer: "Glowee من NoviTech",

    // Salons page
    salonsPageTitle: "سجّلوا صالونكم في Glowee",
    salonsPageSub: "للصالونات ومقدمي الخدمة المنزلية.",
    benefits: [
      "كل حجوزاتكم في لوحة وحدة",
      "هدايا ومكافآت لزبائنكم",
      "عروضكم بيدكم: أنتم تقررون متى تشغّلونها",
    ],
    formTitle: "بيانات الصالون",
    form: {
      salonName: "اسم الصالون أو النشاط",
      ownerName: "اسم المسؤول",
      phone: "رقم الجوال / واتساب",
      area: "المنطقة",
      areaPh: "مثلاً: العين",
      type: "نوع النشاط",
      typeOptions: {
        salon: "صالون",
        home_service: "خدمة منزلية",
        both: "الاثنين",
      },
      instagram: "حساب إنستغرام (اختياري)",
      hasSystem: "هل عندكم نظام حجز حالي؟",
      hasSystemOptions: { yes: "إي، عندنا نظام", no: "لا، ما عندنا" },
      choose: "اختاروا",
      submit: "إرسال",
      sending: "جاري الإرسال…",
      success: "وصلنا طلبكم. بنتواصل معكم قريباً.",
      error: "صار خطأ بالإرسال. جرّبوا مرة ثانية أو تواصلوا معنا عبر واتساب.",
    },
  },
  en: {
    dir: "ltr",
    switchTo: "العربية",
    tagline: "Book • Gift • Earn",
    sub: "Book salon and home-service beauty appointments in a minute and pay in the app.",
    place: "Al Ain, UAE",
    back: "Back",

    features: ["Book in a minute", "Gift a service", "Earn rewards"],

    customersTitle: "For customers",
    appStore: "Download on the App Store",
    appStoreSub: "Available now on iPhone",
    googlePlay: "Google Play",
    googlePlaySub: "Coming soon",
    googlePlayLive: "Get it on Google Play",

    salonsTitle: "For salon owners",
    salonsText:
      "Try Glowee free during the trial period, then tell us what suits you best: a subscription or a percentage?",
    registerCta: "Register your salon",
    registerSub: "A short page, then we get in touch",
    overview: "Glowee overview",
    overviewSub: "A short file about Glowee and the trial period",
    whatsapp: "Chat with us on WhatsApp",
    whatsappSub: "Any question before you register",

    follow: "Follow us",
    footer: "Glowee by NoviTech",

    // Salons page
    salonsPageTitle: "Register your salon on Glowee",
    salonsPageSub: "For salons and home-service providers.",
    benefits: [
      "All your bookings in one dashboard",
      "Gifts and rewards for your customers",
      "Your offers, your call: you decide when to switch them on",
    ],
    formTitle: "Salon details",
    form: {
      salonName: "Salon or business name",
      ownerName: "Contact name",
      phone: "Phone / WhatsApp",
      area: "Area",
      areaPh: "For example: Al Ain",
      type: "Type of business",
      typeOptions: {
        salon: "Salon",
        home_service: "Home service",
        both: "Both",
      },
      instagram: "Instagram handle (optional)",
      hasSystem: "Do you already use a booking system?",
      hasSystemOptions: { yes: "Yes, we do", no: "No, we don't" },
      choose: "Choose",
      submit: "Submit",
      sending: "Sending…",
      success: "We received your request. We will be in touch soon.",
      error: "Something went wrong. Please try again or message us on WhatsApp.",
    },
  },
};

/* ------------------------------------------------------------------
   Language: Arabic by default, /glowee?lang=en for English.
   The choice is kept in the URL so it carries between the two pages.
------------------------------------------------------------------- */
export function useLang() {
  const [lang, setLangState] = useState("ar");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "en" || q === "ar") setLangState(q);
  }, []);

  function setLang(next) {
    setLangState(next);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url);
    } catch {
      /* ignore */
    }
  }

  return [lang, setLang];
}

/* ------------------------------------------------------------------
   Hero: plum band with the real Glowee "G" and wordmark
------------------------------------------------------------------- */
export function Hero({ t, lang, setLang, compact = false, children }) {
  return (
    <header className="relative overflow-hidden rounded-b-[2.5rem] bg-[#4A1D3F] px-6 pb-10 pt-6 text-[#FAF6F1]">
      {/* soft gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(201,162,77,0.28),transparent_60%)]"
      />

      <div className="relative mx-auto w-full max-w-md">
        <div className="flex justify-end rtl:justify-start">
          <button
            type="button"
            onClick={() => setLang(lang === "ar" ? "en" : "ar")}
            className="rounded-full border border-[#C9A24D]/60 px-4 py-1.5 text-xs text-[#FAF6F1] transition hover:border-[#C9A24D]"
          >
            {t.switchTo}
          </button>
        </div>

        <div className="mt-2 text-center">
          <img
            src="/glowee/glowee-g.png"
            alt="Glowee"
            className={compact ? "mx-auto h-16 w-auto" : "mx-auto h-28 w-auto"}
          />
          <img
            src="/glowee/glowee-wordmark.png"
            alt=""
            aria-hidden="true"
            className={
              compact
                ? "mx-auto mt-3 w-32 opacity-90"
                : "mx-auto mt-4 w-44 opacity-90"
            }
          />
          {children}
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------
   Small UI helpers
------------------------------------------------------------------- */
export function SectionTitle({ children }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#9B7A2E]">
      {children}
    </p>
  );
}

export function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
    >
      →
    </span>
  );
}
