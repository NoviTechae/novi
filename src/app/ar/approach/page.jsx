// src/app/ar/approach/page.jsx

import {
  SiteShell,
  Container,
  Eyebrow,
  SectionHeading,
  PageHero,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { processSteps } from "@/data/ar/content";

export const metadata = buildMetadata({
  title: "منهجيتنا | كيف تخطط نوفيتك للمشاريع وتبنيها وتطلقها",
  description:
    "تعرّف على طريقة عمل نوفيتك: الاكتشاف، ونطاق عمل واضح، والتصميم، والتطوير، والاختبار، والإطلاق، والدعم لكل مشروع.",
  path: "/ar/approach",
});

const stepDetails = [
  ["فهم عملك وأهدافك", "مستخدموك وطريقة عملهم اليوم", "المشكلة المطلوب حلها وشكل النجاح"],
  ["الميزات والأولويات", "الجدول الزمني والمراحل", "نطاق العمل والشروط متفق عليها كتابياً"],
  ["مسارات المستخدم وهيكلة المنتج", "تصميم الواجهات", "تصميم عربي وإنجليزي عند الحاجة"],
  ["تطوير على مراحل واضحة", "مشاركة التقدم أولاً بأول", "البنية الخلفية والربط وأدوات الإدارة"],
  ["اختبار على أجهزة وسيناريوهات مختلفة", "معالجة المشكلات قبل الإطلاق", "النشر والتقديم على المتاجر"],
  ["الإصلاحات والتحديثات", "تحسينات بناءً على الاستخدام الفعلي", "ميزات جديدة مع نمو عملك"],
];

const principles = [
  {
    title: "المشكلة أولاً",
    text: "نبدأ بالمشكلة والأشخاص المتأثرين بها، والتقنية تأتي بعد ذلك.",
  },
  {
    title: "الوضوح قبل التعقيد",
    text: "المنتجات البسيطة والواضحة أسهل في الاستخدام والصيانة والتطوير.",
  },
  {
    title: "تواصل صادق",
    text: "نطاق عمل واضح، وجداول زمنية واقعية، وتحديثات مباشرة طوال المشروع.",
  },
  {
    title: "مبني ليدوم",
    text: "نختار أساساً تقنياً متيناً يمكن صيانته وتطويره مع الوقت.",
  },
];

export default function ApproachPageAR() {
  return (
    <SiteShell locale="ar">
      <PageHero
        eyebrow="منهجيتنا"
        title="نبني الحل حول المشكلة، وليس حول قالب جاهز."
        intro="البرمجيات الجيدة تبدأ قبل كتابة أول سطر من الكود بكثير. منهجيتنا مصممة لفهم احتياجاتك، والاتفاق على خطة واضحة، وتقديم منتج يعمل في الواقع."
      />

      {/* STEPS */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="المراحل" title="ست خطوات من الفكرة إلى منتج يعمل" />

          <ol className="border-t border-border">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-[0.2fr_0.8fr_1fr] md:gap-10 md:py-12"
              >
                <span className="text-4xl font-semibold text-accent md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-medium md:text-3xl">{step.title}</h3>
                  <p className="mt-3 leading-8 text-muted">{step.text}</p>
                </div>
                <ul className="space-y-3 md:pt-2">
                  {stepDetails[index].map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-7">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-charcoal text-beige">
        <Container className="py-20 md:py-28">
          <SectionHeading dark eyebrow="مبادئنا" title="ما نلتزم به" />

          <div className="grid gap-px bg-beige/10 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="bg-charcoal p-8 md:p-10">
                <Eyebrow className="mb-4">{item.title}</Eyebrow>
                <p className="text-xl leading-relaxed md:text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        locale="ar"
        title="لنبدأ بمحادثة."
        text="أخبرنا عن فكرتك أو التحدي الذي تواجهه. الخطوة الأولى ببساطة هي فهم ما تحتاجه."
      />
    </SiteShell>
  );
}
