// src/app/ar/about/page.jsx

import {
  SiteShell,
  Container,
  Eyebrow,
  SectionHeading,
  PageHero,
  CTASection,
  Arrow,
  buildMetadata,
} from "@/components/site/ui";
import { recognition } from "@/data/ar/content";

export const metadata = buildMetadata({
  title: "عن نوفيتك | شركة تقنية إماراتية في الإمارات",
  description:
    "تعرّف على قصة نوفيتك التي بدأت مع سمر، التطبيق التعليمي المساند الحاصل على جائزة، ونمت لتصبح شركة تقنية إماراتية تبني برمجيات لهدف واضح.",
  path: "/ar/about",
});

const values = [
  {
    title: "الهدف",
    text: "نبني تقنية تحل مشكلة حقيقية وتصنع فرقاً ملموساً لمن يستخدمها.",
  },
  {
    title: "الجودة",
    text: "نهتم بالتفاصيل: واجهات واضحة، وأنظمة موثوقة، ومنتجات تستمر في العمل مع نموها.",
  },
  {
    title: "الوضوح",
    text: "لغة بسيطة، ونطاق عمل واضح، وتحديثات صادقة. تعرف دائماً أين وصل مشروعك.",
  },
  {
    title: "النزاهة",
    text: "نقول ما نستطيع تقديمه، ونقدّم ما نقوله. ويتم الاتفاق على الالتزامات كتابياً.",
  },
  {
    title: "التفكير بعيد المدى",
    text: "نصمم منتجات يمكن صيانتها وتطويرها وتوسيعها، وليس فقط إطلاقها.",
  },
];

export default function AboutPageAR() {
  return (
    <SiteShell locale="ar">
      <PageHero
        eyebrow="عن نوفيتك"
        title="شركة تقنية إماراتية مبنية حول هدف واضح."
        intro="نوفيتك للأنظمة التقنية شركة تقنية بقيادة إماراتية مقرها العين في أبوظبي. نصمم ونطوّر المواقع وتطبيقات الجوال والبرمجيات المخصصة والأنظمة الإدارية والحلول المدعومة بالذكاء الاصطناعي، ونبني منتجاتنا الخاصة."
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <Eyebrow className="mb-4">قصتنا</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              البداية كانت مع سمر.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-muted">
            <p>
              خلال تطوير سمر، التطبيق التعليمي المساند لأصحاب الهمم، كمشروع تخرج،
              رأت المؤسسة شوق العامري كيف يمكن لمنتج مبني بإتقان أن يغيّر الحياة
              اليومية للطلاب وأسرهم ومعلميهم.
            </p>
            <p>
              حصل سمر لاحقاً على المركز الثاني في مسابقة مشاريع التخرج من صندوق
              خليفة ومزن هب، وعُرض في مؤتمر ITT 2025 الدولي.
            </p>
            <p>
              وأصبحت هذه التجربة أساس نوفيتك: شركة تبني برمجيات لهدف واضح، للأعمال
              التي تحتاج إلى تقنية موثوقة، وللمجتمع من حولنا.
            </p>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-charcoal text-beige">
        <Container className="grid gap-px bg-beige/10 md:grid-cols-2">
          <div className="bg-charcoal py-16 md:py-24 md:pe-16">
            <Eyebrow className="mb-5">الرسالة</Eyebrow>
            <p className="text-2xl font-medium leading-relaxed md:text-3xl md:leading-relaxed">
              تصميم وتطوير منتجات رقمية وحلول تقنية موثوقة تعالج مشكلات حقيقية
              بكفاءة ودقة، لعملائنا وللمجتمع.
            </p>
          </div>
          <div className="bg-charcoal py-16 md:py-24 md:ps-16">
            <Eyebrow className="mb-5">الرؤية</Eyebrow>
            <p className="text-2xl font-medium leading-relaxed md:text-3xl md:leading-relaxed">
              أن تصبح نوفيتك شركة تقنية إماراتية موثوقة ومعروفة بمنتجات رقمية عالية
              الجودة وحلول قابلة للتوسع تصنع فرقاً حقيقياً.
            </p>
          </div>
        </Container>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="ماذا نفعل" title="طريقتان نصنع بهما القيمة" />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border p-8 md:p-10">
              <Eyebrow className="mb-4">01 · منتجاتنا الخاصة</Eyebrow>
              <h3 className="text-2xl font-medium">منتجات تلبي احتياجات حقيقية</h3>
              <p className="mt-4 leading-8 text-muted">
                نبني منتجات لاحتياجات حقيقية في الإمارات والمجتمع. منصتنا لحجز خدمات
                التجميل Glowee متوفرة على App Store، ومنصتنا التعليمية المساندة سمر
                مستمرة في التطوير.
              </p>
            </div>

            <div className="border border-border p-8 md:p-10">
              <Eyebrow className="mb-4">02 · مشاريع العملاء</Eyebrow>
              <h3 className="text-2xl font-medium">برمجيات مبنية لعملك</h3>
              <p className="mt-4 leading-8 text-muted">
                نصمم ونطوّر المواقع وتطبيقات الجوال والبرمجيات المخصصة والأنظمة
                الإدارية وحلول الذكاء الاصطناعي للأعمال والجهات، مبنية حول طريقة
                عملها الفعلية.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="قيمنا" title="ما يوجّه كل مشروع" />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="bg-beige p-8 md:p-9">
                <span className="text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FOUNDER */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <Eyebrow className="mb-4">المؤسسة</Eyebrow>
            <p className="text-3xl font-semibold md:text-4xl">شوق العامري</p>
            <p className="mt-2 text-muted">المؤسسة والرئيسة التنفيذية، مطوّرة برمجيات</p>
          </div>

          <div className="space-y-6 text-lg leading-9 text-muted">
            <p>
              شوق مطوّرة برمجيات إماراتية، حاصلة على بكالوريوس تقنية المعلومات (تطوير
              التطبيقات) من كليات التقنية العليا.
            </p>
            <p>
              صممت وطوّرت تطبيق سمر بالكامل، من الفكرة وتخطيط النظام إلى الواجهات
              والتطوير الكامل للتطبيق، ثم أسست نوفيتك لتواصل بناء تقنية لهدف واضح.
            </p>
            <a
              href="https://www.linkedin.com/in/shouqalameri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-charcoal transition hover:text-accent"
            >
              تواصل عبر لينكدإن
              <Arrow locale="ar" />
            </a>
          </div>
        </Container>
      </section>

      {/* RECOGNITION */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="إنجازات" title="محطات على الطريق" />

          <div className="grid gap-6 md:grid-cols-3">
            {recognition.map((item) => (
              <div key={item.title} className="relative border border-border p-8">
                <span className="absolute end-0 top-0 h-6 w-6 border-e border-t border-accent" />
                <h3 className="text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-accent">{item.by}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{item.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COMPANY DETAILS */}
      <section className="border-t border-border py-16">
        <Container className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <Eyebrow className="mb-2">الاسم القانوني</Eyebrow>
            <p dir="ltr" className="text-start">
              NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C
            </p>
          </div>
          <div>
            <Eyebrow className="mb-2">الترخيص</Eyebrow>
            <p>مسجلة في أبوظبي، الإمارات العربية المتحدة</p>
          </div>
          <div>
            <Eyebrow className="mb-2">الموقع</Eyebrow>
            <p>العين، أبوظبي، الإمارات</p>
          </div>
        </Container>
      </section>

      <CTASection locale="ar" />
    </SiteShell>
  );
}
