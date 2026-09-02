// src/components/ProductCaseStudy.jsx
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Check,
} from "lucide-react";


export default function ProductCaseStudy({
  locale = "en",
  eyebrow,
  name,
  category,
  intro,
  image,
  status,
  primaryAction,
  secondaryAction,
  problemTitle,
  problem,
  solutionTitle,
  solution,
  featuresTitle,
  features,
  audiences = [],
  builtTitle,
  builtItems,
  availabilityTitle,
  availabilityText,
  footerTitle,
  footerText,
}) {
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      {/* Hero */}
      <section className="border-b border-border pb-16 pt-8 md:pb-24 md:pt-14">
        <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.22em] text-accent">
              {eyebrow}
            </p>

            <p className="mb-3 text-sm text-muted">
              {category}
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
              {name}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              {intro}
            </p>

            {status && (
              <div className="mt-7 inline-flex border border-border px-4 py-2 text-xs uppercase tracking-[0.16em] text-accent">
                {status}
              </div>
            )}

            {(primaryAction || secondaryAction) && (
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryAction && (
                  <a
                    href={primaryAction.href}
                    target={primaryAction.external ? "_blank" : undefined}
                    rel={primaryAction.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 bg-charcoal px-5 py-3 text-sm text-beige transition hover:opacity-90"
                  >
                    {primaryAction.label}
                    {primaryAction.external ? (
                      <ExternalLink size={15} />
                    ) : (
                      <Arrow size={15} />
                    )}
                  </a>
                )}

                {secondaryAction && (
                  <a
                    href={secondaryAction.href}
                    target={secondaryAction.external ? "_blank" : undefined}
                    rel={secondaryAction.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm transition hover:border-accent"
                  >
                    {secondaryAction.label}
                    {secondaryAction.external ? (
                      <ExternalLink size={15} />
                    ) : (
                      <Arrow size={15} />
                    )}
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="overflow-hidden border border-border bg-border/20">
            <img
              src={image}
              alt={`${name} product`}
              className="aspect-[16/10] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="grid gap-12 border-b border-border py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            {problemTitle}
          </p>

          <p className="max-w-xl text-lg leading-8 text-muted">
            {problem}
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
            {solutionTitle}
          </p>

          <p className="max-w-xl text-lg leading-8 text-muted">
            {solution}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">
            {featuresTitle}
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="bg-beige p-7 md:p-8"
            >
              <p className="mb-7 text-xs tracking-[0.18em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>

              <p className="text-base leading-7">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Audiences */}
      {audiences?.length > 0 && (
        <section className="grid gap-6 border-b border-border py-16 md:grid-cols-2 md:py-24">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="border border-border p-8 md:p-10"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-accent">
                {audience.title}
              </p>

              <div className="space-y-4">
                {audience.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-muted"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-accent"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* What NoviTech Built */}
      <section className="border-b border-border py-16 md:py-24">
        <p className="mb-9 text-xs uppercase tracking-[0.2em] text-accent">
          {builtTitle}
        </p>

        <div className="flex flex-wrap gap-3">
          {builtItems.map((item) => (
            <span
              key={item}
              className="border border-border px-4 py-2 text-sm text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Availability */}
      <section className="grid gap-8 border-b border-border py-16 md:grid-cols-[0.35fr_0.65fr] md:py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">
          {availabilityTitle}
        </p>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            {availabilityText}
          </p>

          {primaryAction && (
            <a
              href={primaryAction.href}
              target={primaryAction.external ? "_blank" : undefined}
              rel={primaryAction.external ? "noopener noreferrer" : undefined}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium transition hover:text-accent"
            >
              {primaryAction.label}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-accent">
          NoviTech
        </p>

        <h2 className="max-w-3xl text-3xl font-medium tracking-tight md:text-5xl">
          {footerTitle}
        </h2>

        <p className="mt-5 max-w-2xl text-muted leading-8">
          {footerText}
        </p>

        <Link
          href={`/${locale}/contact`}
          className="mt-8 inline-flex items-center gap-2 border border-charcoal px-5 py-3 text-sm transition hover:bg-charcoal hover:text-beige"
        >
          {isArabic ? "ابدأ مشروعك" : "Start a project"}
          <Arrow size={15} />
        </Link>
      </section>
    </div>
  );
}