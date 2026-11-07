// src/components/site/ui.jsx
// Shared building blocks for the site pages (English and Arabic).

import Link from "next/link";
import {
  Globe,
  Smartphone,
  Code2,
  LayoutDashboard,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const t = {
  en: {
    learnMore: "Learn more",
    viewCase: "View case study",
    startProject: "Start a project",
    ctaTitle: "Have a project in mind?",
    ctaText:
      "Tell us what you need, and let's explore how NoviTech can turn it into a reliable digital solution.",
  },
  ar: {
    learnMore: "اعرف المزيد",
    viewCase: "عرض المشروع",
    startProject: "ابدأ مشروعك",
    ctaTitle: "لديك فكرة أو مشروع؟",
    ctaText:
      "شاركنا احتياجك، ولنستكشف معاً كيف يمكن لنوفيتك تحويله إلى حل رقمي موثوق وعملي.",
  },
};

export function Arrow({ locale = "en", size = 15, className = "" }) {
  const Icon = locale === "ar" ? ArrowLeft : ArrowRight;
  return <Icon size={size} aria-hidden="true" className={className} />;
}

export function SiteShell({ children, locale = "en" }) {
  const isAr = locale === "ar";
  return (
    <main
      id="top"
      dir={isAr ? "rtl" : "ltr"}
      lang={isAr ? "ar" : "en"}
      className={`min-h-screen bg-beige text-charcoal ${
        isAr ? "font-arabic ar-text" : ""
      }`}
    >
      <Navbar />
      {children}
      <Container>
        <Footer />
      </Container>
    </main>
  );
}

export function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.22em] text-accent ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, dark = false }) {
  return (
    <div className="mb-12 max-w-3xl md:mb-16">
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-8 md:text-lg ${
            dark ? "text-beige/70" : "text-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="border-b border-border">
      <Container className="pb-16 pt-14 md:pb-24 md:pt-20">
        {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight md:text-6xl">
          {title}
        </h1>
        <div className="my-8 h-[2px] w-20 bg-accent" />
        {intro && (
          <p className="max-w-3xl text-lg leading-8 text-muted md:text-xl md:leading-9">
            {intro}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

export function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 border border-charcoal bg-charcoal px-7 py-3.5 text-sm text-beige transition hover:bg-transparent hover:text-charcoal"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children, dark = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 border px-7 py-3.5 text-sm transition ${
        dark
          ? "border-beige/30 text-beige hover:border-beige"
          : "border-border text-charcoal hover:border-charcoal"
      }`}
    >
      {children}
    </Link>
  );
}

const icons = {
  web: Globe,
  mobile: Smartphone,
  software: Code2,
  systems: LayoutDashboard,
  ai: Sparkles,
};

export function ServiceIcon({ name, size = 22 }) {
  const Icon = icons[name] || Code2;
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-accent/40 text-accent">
      <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}

export function ServiceCard({ service, index, locale = "en" }) {
  return (
    <Link
      href={`/${locale}/services/${service.slug}`}
      className="group relative flex h-full flex-col border border-border p-8 transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-sm md:p-9"
    >
      <span className="absolute end-0 top-0 h-6 w-6 border-e border-t border-accent" />
      <div className="mb-8 flex items-center justify-between">
        <ServiceIcon name={service.icon} />
        <span className="text-xs tracking-widest text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-xl font-medium tracking-tight md:text-2xl">
        {service.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted">
        {service.short}
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm text-charcoal transition group-hover:text-accent">
        {t[locale].learnMore}
        <Arrow locale={locale} />
      </span>
    </Link>
  );
}

export function WorkCard({ project, locale = "en" }) {
  return (
    <Link
      href={project.href}
      className="group grid overflow-hidden border border-border transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm md:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-border bg-white/50 p-10 md:aspect-auto md:border-b-0 md:border-e">
        <img
          src={project.image}
          alt={project.name}
          className="max-h-56 w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col p-8 md:p-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-3 text-3xl font-medium tracking-tight">
          {project.name}
        </h3>
        <span className="mt-4 inline-flex w-fit border border-border px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted">
          {project.status}
        </span>
        <p className="mt-5 flex-1 text-sm leading-7 text-muted">
          {project.desc}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.built.map((item) => (
            <span
              key={item}
              className="bg-border/50 px-3 py-1 text-xs text-charcoal"
            >
              {item}
            </span>
          ))}
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm text-charcoal transition group-hover:text-accent">
          {t[locale].viewCase}
          <Arrow locale={locale} />
        </span>
      </div>
    </Link>
  );
}

export function ProcessGrid({ steps }) {
  return (
    <ol className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="bg-beige p-8 md:p-9">
          <span className="text-xs tracking-widest text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function CheckList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 border-b border-border pb-4">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTASection({ title, text, locale = "en" }) {
  const copy = t[locale];
  return (
    <section className="bg-charcoal text-beige">
      <Container className="py-20 md:py-28">
        <div className="grid items-end gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Eyebrow className="mb-5">{copy.startProject}</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {title || copy.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-beige/70">
              {text || copy.ctaText}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 border border-beige bg-beige px-7 py-3.5 text-sm text-charcoal transition hover:bg-transparent hover:text-beige"
            >
              {copy.startProject}
              <Arrow locale={locale} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Builds page metadata. `path` is the page path, e.g. "/en/about".
// The Arabic/English alternate is derived by swapping the prefix.
export function buildMetadata({ title, description, path }) {
  const site = "https://www.novitech.ae";
  const isAr = path.startsWith("/ar");
  const rest = path.replace(/^\/(en|ar)/, "");
  const url = `${site}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      locale: isAr ? "ar_AE" : "en_AE",
      siteName: "NoviTech",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 627,
          alt: "NoviTech",
        },
      ],
    },
    alternates: {
      canonical: url,
      languages: {
        "en-AE": `${site}/en${rest}`,
        "ar-AE": `${site}/ar${rest}`,
      },
    },
  };
}
