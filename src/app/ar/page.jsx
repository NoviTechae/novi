import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SystemVisual from "@/components/SystemVisual";

/* ===== SEO (AR) ===== */
export const metadata = {
  title: "نوفيتك | حلول برمجية وتطوير مواقع في الإمارات",
  description:
    "نوفيتك علامة تقنية إماراتية متخصصة في تطوير المواقع الإلكترونية، الأنظمة الإدارية، البرمجيات المخصصة، وحلول الذكاء الاصطناعي.",
  keywords: [
    "نوفيتك",
    "تطوير مواقع الإمارات",
    "برمجة أنظمة",
    "شركة برمجيات إماراتية",
    "حلول تقنية",
  ],
  openGraph: {
    title: "نوفيتك | حلول رقمية دقيقة",
    description: "نحوّل الاحتياجات الحقيقية إلى حلول رقمية دقيقة.",
    locale: "ar_AR",
    siteName: "NoviTech",
    type: "website",
  },
};

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

            <p className="text-lg max-w-md">
              نحوّل الاحتياجات الحقيقية إلى حلول رقمية دقيقة
            </p>

            <p className="mt-3 text-sm text-muted">
              مواقع • أنظمة • برمجيات • ذكاء اصطناعي
            </p>

            <a
              href="#contact"
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
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                من أنا
              </h3>
              <p className="text-muted leading-relaxed">
                NoviTech مشروع تقني مستقل مقره الإمارات، يركّز على بناء حلول
                رقمية عملية ونظيفة.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                الرسالة
              </h3>
              <p className="text-muted leading-relaxed">
                تصميم وتطوير منتجات رقمية موثوقة تحل مشاكل حقيقية بدقة.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                الرؤية
              </h3>
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
              "مواقع وتطبيقات ويب",
              "أنظمة إدارية",
              "برمجيات مخصصة",
              "حلول مدعومة بالذكاء الاصطناعي",
            ].map((item) => (
              <div
                key={item}
                className="
                  relative border border-border p-8
                  hover:-translate-y-1 hover:shadow-sm hover:border-accent
                  transition-all duration-200
                "
              >
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">المشاريع</h2>

          <div className="border border-border p-12 text-muted">
            سيتم نشر دراسات حالة لمشاريع حقيقية قريبًا.
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">المنتجات الرقمية</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <p className="text-lg mb-2">أدوات وقوالب داخلية</p>
              <p className="text-sm text-muted">
                أنظمة وقوالب وأدوات تقنية قابلة لإعادة الاستخدام، قيد التطوير.
              </p>
            </div>

            <div className="border border-border p-8">
              <p className="text-lg mb-2">موارد تعليمية تقنية</p>
              <p className="text-sm text-muted">
                أدلة وموارد عملية للمطورين وأصحاب المشاريع، قريبًا.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted mt-6">
            يتم تطوير المنتجات بناءً على احتياجات مشاريع حقيقية.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-48">
          <div className="border border-border p-12 max-w-3xl">
            <h2 className="text-3xl font-semibold mb-2">ابدأ مشروعك</h2>
            <p className="text-sm text-muted mb-6">
              عادة يتم الرد خلال 24 ساعة
            </p>
            <ContactForm />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}