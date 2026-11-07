// src/app/ar/contact/page.jsx

import ContactForm from "@/components/ContactForm";
import {
  SiteShell,
  Container,
  Eyebrow,
  PageHero,
  buildMetadata,
} from "@/components/site/ui";

export const metadata = buildMetadata({
  title: "تواصل معنا | نوفيتك",
  description:
    "تواصل مع نوفيتك لتطوير المواقع وتطبيقات الجوال والبرمجيات المخصصة والأنظمة الإدارية وحلول الذكاء الاصطناعي في الإمارات.",
  path: "/ar/contact",
});

const contactInfo = [
  {
    label: "البريد الإلكتروني",
    value: "info@novitech.ae",
    href: "mailto:info@novitech.ae",
    ltr: true,
  },
  {
    label: "واتساب",
    value: "+971 50 519 5426",
    href: "https://wa.me/971505195426",
    ltr: true,
  },
  {
    label: "الهاتف",
    value: "+971 50 519 5426",
    href: "tel:+971505195426",
    ltr: true,
  },
  { label: "العنوان", value: "العين، أبوظبي، الإمارات العربية المتحدة" },
  {
    label: "ساعات العمل",
    value: "الاثنين – الخميس: 9:00 ص – 6:00 م\nالجمعة: 8:00 ص – 12:00 م (بتوقيت الإمارات)",
  },
];

const social = [
  { label: "لينكدإن", href: "https://www.linkedin.com/company/novitech-ae/" },
  { label: "إنستغرام", href: "https://www.instagram.com/novitech.ae" },
  { label: "تيك توك", href: "https://www.tiktok.com/@novitech.ae" },
];

const nextSteps = [
  "نراجع رسالتك ونرد عليك، عادةً خلال 24 ساعة.",
  "نرتب مكالمة قصيرة لفهم احتياجك.",
  "نرسل لك عرضاً واضحاً يتضمن نطاق العمل والمدة والتكلفة.",
];

export default function ContactPageAR() {
  return (
    <SiteShell locale="ar">
      <PageHero
        eyebrow="تواصل معنا"
        title="لنتحدث عن مشروعك."
        intro="أخبرنا بما تحتاجه، سواء كان موقعاً أو تطبيقاً أو نظاماً لفريقك أو مجرد فكرة تريد استكشافها. نرد عادةً خلال 24 ساعة."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Details */}
          <div>
            <Eyebrow className="mb-6">بياناتنا</Eyebrow>

            <dl className="border-t border-border">
              {contactInfo.map((item) => (
                <div key={item.label} className="border-b border-border py-5">
                  <dt className="mb-1 text-xs text-accent">{item.label}</dt>
                  <dd className="whitespace-pre-line font-medium">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        dir={item.ltr ? "ltr" : undefined}
                        className="transition hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="mb-3 text-xs text-accent">تابعنا</p>
              <div className="flex flex-wrap gap-6 text-sm">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-charcoal p-8 text-beige">
              <Eyebrow className="mb-5">ماذا يحدث بعد ذلك</Eyebrow>
              <ol className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-7">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-beige/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="border border-border p-6 md:p-10">
            <Eyebrow>أرسل رسالة</Eyebrow>
            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
