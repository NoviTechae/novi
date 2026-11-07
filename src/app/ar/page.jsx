// src/app/ar/page.jsx

import Link from "next/link";
import SystemVisual from "@/components/SystemVisual";
import {
  SiteShell,
  Container,
  Eyebrow,
  PrimaryButton,
  SecondaryButton,
  WorkCard,
  CTASection,
  Arrow,
  buildMetadata,
} from "@/components/site/ui";
import { services, projects } from "@/data/ar/content";

export const metadata = buildMetadata({
  title: "نوفيتك | برمجيات وتطبيقات وحلول رقمية في الإمارات",
  description:
    "نوفيتك شركة تقنية إماراتية مقرها الإمارات، تطوّر المواقع وتطبيقات الجوال والبرمجيات المخصصة والأنظمة الإدارية والحلول المدعومة بالذكاء الاصطناعي.",
  path: "/ar",
});

const facts = [
  { value: "5", label: "خدمات رئيسية" },
  { value: "2", label: "منتجات خاصة بنا" },
  { value: "متوفر", label: "Glowee على App Store" },
  { value: "الثاني", label: "مركز في مسابقة صندوق خليفة ومزن هب" },
];

const reasons = [
  "شركة إماراتية مقرها الإمارات",
  "نبني منتجاتنا الخاصة",
  "كل مراحل المشروع في مكان واحد",
  "العربية والإنجليزية من البداية",
];

export default function HomeAR() {
  return (
    <SiteShell locale="ar">
      {/* HERO */}
      <section className="border-b border-border">
        <Container className="grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow className="mb-6">شركة تقنية إماراتية • بقيادة إماراتية</Eyebrow>

            <h1 className="text-5xl font-semibold leading-[1.2] tracking-tight md:text-6xl lg:text-7xl">
              نطوّر منتجات رقمية وحلولاً تقنية مخصصة.
            </h1>

            <div className="my-8 h-[2px] w-20 bg-accent" />

            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              تصمم نوفيتك وتطوّر المواقع وتطبيقات الجوال والبرمجيات المخصصة
              والأنظمة الإدارية والحلول المدعومة بالذكاء الاصطناعي للأعمال في
              الإمارات، وتبني منتجاتها الخاصة.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton href="/ar/contact">
                ابدأ مشروعك
                <Arrow locale="ar" />
              </PrimaryButton>
              <SecondaryButton href="/ar/services">تعرّف على خدماتنا</SecondaryButton>
            </div>
          </div>

          <div className="hidden justify-end text-charcoal lg:flex">
            <SystemVisual />
          </div>
        </Container>

        <Container>
          <dl className="grid grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`bg-beige py-8 pe-4 md:py-10 ${
                  index === 0 ? "" : index === 2 ? "md:ps-8" : "ps-6 md:ps-8"
                }`}
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight md:text-4xl">
                    {fact.value}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-4">ماذا نقدّم</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              خدمات مبنية حول احتياجات الأعمال الحقيقية
            </h2>
            <div className="mt-8">
              <SecondaryButton href="/ar/services">
                جميع الخدمات
                <Arrow locale="ar" />
              </SecondaryButton>
            </div>
          </div>

          <ul className="border-t border-border">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/ar/services/${service.slug}`}
                  className="group flex items-center gap-6 border-b border-border py-6 transition hover:text-accent md:py-7"
                >
                  <span className="w-8 shrink-0 text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-xl font-medium md:text-2xl">
                    {service.title}
                  </span>
                  <Arrow
                    locale="ar"
                    size={18}
                    className="shrink-0 transition-transform group-hover:-translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FEATURED WORK */}
      <section id="projects" className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="mb-4">من أعمالنا</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                صممناه وطوّرناه، ومتوفر الآن على App Store
              </h2>
            </div>
            <SecondaryButton href="/ar/work">
              جميع الأعمال
              <Arrow locale="ar" />
            </SecondaryButton>
          </div>

          <WorkCard project={projects.glowee} locale="ar" />
        </Container>
      </section>

      {/* WHY NOVITECH */}
      <section id="about" className="bg-charcoal text-beige">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-4">لماذا نوفيتك</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              تقنية تُبنى لهدف واضح.
            </h2>
          </div>

          <div>
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="border-t border-beige/15 pt-5">
                  <p className="font-medium">{reason}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <SecondaryButton href="/ar/about" dark>
                عن نوفيتك
                <Arrow locale="ar" />
              </SecondaryButton>
              <SecondaryButton href="/ar/approach" dark>
                كيف نعمل
                <Arrow locale="ar" />
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      <CTASection locale="ar" />
    </SiteShell>
  );
}
