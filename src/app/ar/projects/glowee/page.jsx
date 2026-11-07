// src/app/ar/projects/glowee/page.jsx
import { SiteShell, Container } from "@/components/site/ui";
import ProductCaseStudy from "@/components/ProductCaseStudy";

export const metadata = {
  title: "قلوي | منصة تقنية لقطاع التجميل من نوفيتك",
  description:
    "تعرّف على قلوي، منصة إماراتية طورتها نوفيتك لحجوزات الصالونات والخدمات المنزلية والهدايا والمكافآت وإدارة الأعمال.",
  openGraph: {
    title: "قلوي | منصة تقنية لقطاع التجميل من نوفيتك",
    description:
      "تعرّف على قلوي، منصة إماراتية طورتها نوفيتك لحجوزات الصالونات والخدمات المنزلية والهدايا والمكافآت وإدارة الأعمال.",
    url: "https://www.novitech.ae/ar/projects/glowee",
    locale: "ar_AE",
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
  canonical: "https://www.novitech.ae/ar/projects/glowee",
  languages: {
    "en-AE": "https://www.novitech.ae/en/projects/glowee",
    "ar-AE": "https://www.novitech.ae/ar/projects/glowee",
  },
},
};

export default function GloweeProjectPageAR() {
  return (
    <SiteShell locale="ar">
      <Container className="pb-8">
        <ProductCaseStudy
          locale="ar"
          eyebrow="منتج مختار"
          name="Glowee"
          category="منصة تقنية لقطاع التجميل"
          intro="منصة إماراتية تجمع الحجوزات والهدايا والولاء وإدارة أعمال التجميل ضمن تجربة رقمية مترابطة."
          image="/projects/glowee-icon.png"
          imageFit="contain"
          status="متوفر على App Store"
          primaryAction={{
            label: "تحميل من App Store",
            href: "https://apps.apple.com/ae/app/glowee-app/id6761380382",
            external: true,
          }}
          problemTitle="المشكلة"
          problem="تجربة حجز خدمات التجميل غالباً ما تكون موزعة بين منصات التواصل والرسائل والمكالمات وأنظمة ولاء منفصلة، ما يجعل اكتشاف الخدمات والحجز وإرسال الهدايا وإدارة المكافآت تجربة غير مترابطة."
          solutionTitle="الحل"
          solution="يجمع Glowee عناصر تجربة التجميل الأساسية في منصة واحدة، تربط العملاء بالصالونات ومقدمي الخدمات المنزلية، وتوفر للأعمال أدوات مخصصة لإدارة الخدمات والحجوزات والتوفر والهدايا والولاء والعمليات اليومية."
          featuresTitle="المنتج"
          features={[
            "حجوزات الصالونات وخدمات التجميل المنزلية",
            "إهداء الخدمات والرصيد كهدية",
            "محفظة العميل وإدارة الرصيد",
            "المكافآت والأختام وبرامج الولاء",
            "إدارة الخدمات والأسعار وأوقات التوفر",
            "أدوات مخصصة للإدارة والتشغيل",
          ]}
          audiences={[
            {
              title: "للعملاء",
              items: [
                "اكتشاف أعمال وخدمات التجميل",
                "حجز مواعيد الصالون والخدمات المنزلية",
                "إرسال هدايا تجميل للأصدقاء والعائلة",
                "كسب المكافآت وتجميع أختام الولاء",
                "إدارة الرصيد والحجوزات والهدايا",
              ],
            },
            {
              title: "لأعمال التجميل",
              items: [
                "إدارة الخدمات والأسعار والتوفر",
                "استقبال الحجوزات وإدارتها",
                "إدارة المواقع ومعلومات فريق العمل",
                "متابعة الهدايا والولاء والتقييمات والتحليلات",
                "إدارة العمليات من خلال لوحة أعمال مخصصة",
              ],
            },
          ]}
          builtTitle="ما الذي طورته نوفيتك"
          builtItems={[
            "تطبيق iOS",
            "لوحة إدارة الأعمال",
            "منصة الإدارة",
            "البنية الخلفية وواجهات API",
            "نظام الحجوزات",
            "نظام الهدايا",
            "المحفظة والمكافآت",
            "تكامل المدفوعات",
            "الإشعارات الفورية",
          ]}
          availabilityTitle="التوفر"
          availabilityText="يتوفر Glowee حالياً على Apple App Store، ويجري العمل على ضم أعمال التجميل والتوسع في السوق الإماراتي." footerTitle="هل تبني منصة تضم مستخدمين متعددين وعمليات وتجارب مترابطة؟"
          footerText="تقوم نوفيتك بتصميم وتطوير منتجات رقمية تجمع تجربة العميل وأدوات الأعمال وأنظمة الإدارة والبنية التقنية الخلفية ضمن حل متكامل."
        />
      </Container>
    </SiteShell>
  );
}