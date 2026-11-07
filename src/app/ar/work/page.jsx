// src/app/ar/work/page.jsx

import {
  SiteShell,
  Container,
  PageHero,
  WorkCard,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { projects } from "@/data/ar/content";

export const metadata = buildMetadata({
  title: "أعمالنا | منتجات من تصميم وتطوير نوفيتك",
  description:
    "تعرّف على Glowee وسمر، منتجات رقمية صممتها نوفيتك وطوّرتها وأطلقتها في الإمارات.",
  path: "/ar/work",
});

export default function WorkPageAR() {
  return (
    <SiteShell locale="ar">
      <PageHero
        eyebrow="أعمالنا"
        title="منتجات صممناها وطوّرناها وأطلقناها."
        intro="نبني منتجاتنا الخاصة ونديرها، من تطبيق الجوال إلى البنية الخلفية ولوحات التحكم والدفع الإلكتروني. وهذه التجربة تنعكس على طريقة بنائنا لكل مشروع."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-8">
          <WorkCard project={projects.glowee} locale="ar" />
          <WorkCard project={projects.samar} locale="ar" />
        </Container>
      </section>

      <CTASection
        locale="ar"
        title="مشروعك قد يكون التالي."
        text="سواء كان موقعاً أو تطبيقاً أو نظاماً لفريقك، أخبرنا بما تحتاجه وسنساعدك في بنائه."
      />
    </SiteShell>
  );
}
