// src/app/ar/services/page.jsx

import {
  SiteShell,
  Container,
  SectionHeading,
  PageHero,
  ServiceCard,
  ProcessGrid,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { services, processSteps } from "@/data/ar/content";

export const metadata = buildMetadata({
  title: "الخدمات | تطوير المواقع والتطبيقات والبرمجيات والذكاء الاصطناعي في الإمارات | نوفيتك",
  description:
    "المواقع وتطبيقات الويب، وتطبيقات الجوال، والبرمجيات المخصصة، والأنظمة الإدارية، والحلول المدعومة بالذكاء الاصطناعي، من تصميم وتطوير نوفيتك في الإمارات.",
  path: "/ar/services",
});

const engagement = [
  {
    title: "منتج جديد",
    text: "لديك فكرة تطبيق أو منصة أو نظام. نساعدك في بلورتها وتخطيطها وبنائها من البداية.",
  },
  {
    title: "تطوير ما هو موجود",
    text: "لديك موقع أو نظام يحتاج إلى إعادة تصميم، أو ميزات جديدة، أو أساس تقني أحدث.",
  },
  {
    title: "دعم مستمر",
    text: "بعد الإطلاق، يمكننا الاستمرار في التحديثات والإصلاحات والميزات الجديدة مع نمو عملك.",
  },
];

export default function ServicesPageAR() {
  return (
    <SiteShell locale="ar">
      <PageHero
        eyebrow="الخدمات"
        title="تقنية مبنية حول طريقة عمل مؤسستك."
        intro="نصمم ونطوّر المنتجات الرقمية بالكامل، من التخطيط وتصميم الواجهات إلى التطوير والإطلاق والدعم. كل مشروع يُبنى حول احتياج حقيقي، وليس حول قالب جاهز."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                locale="ar"
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="طرق العمل معنا" title="أينما كنت، يمكننا البدء من هناك" />

          <div className="grid gap-6 md:grid-cols-3">
            {engagement.map((item) => (
              <div key={item.title} className="border border-border p-8">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="منهجية العمل" title="نفس المنهجية الواضحة لكل خدمة" />
          <ProcessGrid steps={processSteps} />
        </Container>
      </section>

      <CTASection locale="ar" />
    </SiteShell>
  );
}
