// src/components/site/LegalPage.jsx
// Shared layout for the legal pages (English and Arabic).

import { SiteShell, Container, Eyebrow, PageHero } from "@/components/site/ui";

export const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const labels = {
  en: {
    eyebrow: "Legal",
    entity: "Legal entity",
    registered: "Registered in",
    registeredValue: "Abu Dhabi, United Arab Emirates",
    updated: "Last updated",
    updatedValue: "November 2026",
    contents: "Contents",
    glance: "At a glance",
  },
  ar: {
    eyebrow: "قانوني",
    entity: "الاسم القانوني",
    registered: "مسجلة في",
    registeredValue: "أبوظبي، الإمارات العربية المتحدة",
    updated: "آخر تحديث",
    updatedValue: "نوفمبر 2026",
    contents: "المحتويات",
    glance: "باختصار",
  },
};

export default function LegalPage({
  title,
  intro,
  summary,
  sections,
  locale = "en",
}) {
  const l = labels[locale];

  return (
    <SiteShell locale={locale}>
      <PageHero eyebrow={l.eyebrow} title={title} intro={intro}>
        <div className="mt-10 grid gap-px border border-border bg-border text-sm sm:grid-cols-3">
          <div className="bg-beige p-5">
            <Eyebrow className="mb-2">{l.entity}</Eyebrow>
            <p dir="ltr" className="text-start font-medium">
              {LEGAL_NAME}
            </p>
          </div>
          <div className="bg-beige p-5">
            <Eyebrow className="mb-2">{l.registered}</Eyebrow>
            <p className="font-medium">{l.registeredValue}</p>
          </div>
          <div className="bg-beige p-5">
            <Eyebrow className="mb-2">{l.updated}</Eyebrow>
            <p className="font-medium">{l.updatedValue}</p>
          </div>
        </div>
      </PageHero>

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
          {/* Contents */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow className="mb-4">{l.contents}</Eyebrow>
            <nav aria-label={l.contents}>
              <ol className="space-y-2 text-sm">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-3 text-muted transition hover:text-charcoal"
                    >
                      <span className="w-6 shrink-0 text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div>
            {summary && (
              <div className="mb-14 border border-border">
                <p className="border-b border-border px-6 py-4 text-xs uppercase tracking-[0.2em] text-accent">
                  {l.glance}
                </p>
                <dl className="divide-y divide-border">
                  {summary.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 px-6 py-4 text-sm sm:grid-cols-[0.45fr_0.55fr]"
                    >
                      <dt className="font-medium">{row.label}</dt>
                      <dd className="text-muted">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 border-t border-border pt-8"
                >
                  <h2 className="flex gap-4 text-xl font-semibold tracking-tight md:text-2xl">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h2>
                  <div className="mt-5 whitespace-pre-line leading-8 text-muted">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
