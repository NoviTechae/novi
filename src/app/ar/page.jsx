// src/app/ar/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemVisual from "@/components/SystemVisual";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "نوفيتك | حلول برمجية وتطوير مواقع في الإمارات",
  description: "نوفيتك علامة تقنية إماراتية متخصصة في تطوير المواقع والتطبيقات والأنظمة والذكاء الاصطناعي والألعاب.",
  keywords: ["نوفيتك", "تطوير مواقع الإمارات", "تطوير تطبيقات", "برمجة أنظمة", "شركة برمجيات إماراتية"],
  openGraph: {
    title: "نوفيتك | حلول رقمية دقيقة",
    description: "نحوّل الاحتياجات الحقيقية إلى حلول رقمية دقيقة.",
    locale: "ar_AR",
    siteName: "NoviTech",
    type: "website",
  },
};

const projects = [
  {
    name: "Glowee",
    category: "تطبيق جوال + منصة ويب",
    desc: "حل رقمي لقطاع صالونات التجميل يشمل تطبيق جوال للعملاء ومنصة ويب للصالونات لإدارة الحجوزات والخدمات والعملاء والمكافآت والهدايا بسهولة.",
    image: "/projects/glowee.jpeg",
    placeholder: "GL",
  },
  {
    name: "Samar App",
    category: "تطبيق جوال",
    desc: "تطبيق جوال تعليمي وتفاعلي مصمم لدعم الأطفال المصابين بالتوحد من خلال تجربة استخدام مبسطة ومحتوى هادف على iOS وAndroid.",
    image: "/projects/samar.png",
    placeholder: "SA",
  },
  // {
  //   name: "Tolerance Pong",
  //   category: "لعبة",
  //   desc: "لعبة تفاعلية مبنية حول مفهوم التسامح — سريعة وممتعة.",
  //   image: "/projects/pong.jpeg",
  //   placeholder: "TP",
  // },
  // {
  //   name: "NovaStrike",
  //   category: "لعبة",
  //   desc: "لعبة أكشن بميكانيكا حادة وهوية بصرية جريئة.",
  //   image: "/projects/blazblue.png",
  //   placeholder: "NS",
  // },
];

export default function AR() {
  return (
    <main
      id="top"
      dir="rtl"
      className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14 font-arabic"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">NoviTech</h1>
            <div className="w-20 h-[2px] bg-accent my-6" />
            <p className="text-lg max-w-md">نحوّل الاحتياجات الحقيقية إلى حلول رقمية دقيقة</p>
            <p className="mt-3 text-sm text-muted">مواقع • تطبيقات • أنظمة • برمجيات • ذكاء اصطناعي</p>
            <a
              href="/ar/contact"
              className="inline-block mt-10 border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-beige transition"
            >
              ابدأ مشروعك
            </a>
          </div>
          <div className="hidden md:flex justify-start">
            <SystemVisual />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">عن NoviTech</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">من أنا</h3>
              <p className="text-muted leading-relaxed">
                NoviTech مشروع تقني مستقل مقره الإمارات، يركّز على بناء حلول رقمية عملية ونظيفة.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">الرسالة</h3>
              <p className="text-muted leading-relaxed">
                تصميم وتطوير منتجات رقمية موثوقة تحل مشاكل حقيقية بدقة.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">الرؤية</h3>
              <p className="text-muted leading-relaxed">
                بناء NoviTech كشريك تقني موثوق للمشاريع الرقمية عالية الجودة.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* SERVICES */}
        <section id="services" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">ماذا أبني</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "مواقع وتطبيقات ويب", desc: "تجارب ويب سريعة ونظيفة ومتجاوبة." },
              { title: "تطبيقات الجوال", desc: "تطبيقات iOS و Android مبنية للمستخدم الحقيقي." },
              { title: "برمجيات مخصصة", desc: "حلول مصممة خصيصاً لاحتياجات عملك." },
              { title: "أنظمة إدارية", desc: "أدوات داخلية تُبسّط العمليات وترفع الكفاءة." },
              { title: "حلول مدعومة بالذكاء الاصطناعي", desc: "ميزات ذكية وأتمتة مدعومة بالذكاء الاصطناعي." },
              { title: "ألعاب وتجارب تفاعلية", desc: "منتجات رقمية جذابة وتجارب تفاعلية مبتكرة." },
            ].map((item) => (
              <div
                key={item.title}
                className="relative border border-border p-8 hover:-translate-y-1 hover:shadow-sm hover:border-accent transition-all duration-200"
              >
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent" />
                <p className="text-lg mb-2">{item.title}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <h2 className="text-3xl font-semibold mb-4">المشاريع</h2>
          <p className="text-sm text-muted mb-12">أنظمة حقيقية • نتائج حقيقية</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">المنتجات الرقمية</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border p-8">
              <p className="text-lg mb-2">خطوط منتجات قيد التطوير</p>
              <p className="text-sm text-muted">
                تعمل نوفيتك أيضاً على تطوير منتجات رقمية داخلية وأنظمة قابلة لإعادة الاستخدام ضمن رؤيتها طويلة المدى.
              </p>
            </div>
            <div className="border border-border p-8">
              <p className="text-lg mb-2">تطبيقات ومنتجات تفاعلية</p>
              <p className="text-sm text-muted">
                قد تشمل المنتجات الرقمية تطبيقات مستقلة وتجارب تفاعلية وأدوات برمجية للويب والجوال.
              </p>
            </div>
            <div className="border border-border p-8">
              <p className="text-lg mb-2">قوالب وأدوات وموارد</p>
              <p className="text-sm text-muted">
                قد تتضمن الإصدارات المستقبلية قوالب قابلة لإعادة الاستخدام وأنظمة داخلية وموارد تقنية عملية.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted mt-6">
            يعكس هذا القسم توجّه نوفيتك نحو تطوير منتجات رقمية إلى جانب خدماتها البرمجية المخصصة.
          </p>
        </section>

      </div>

      <Footer />
    </main>
  );
}