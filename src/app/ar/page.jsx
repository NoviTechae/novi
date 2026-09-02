// src/app/ar/page.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemVisual from "@/components/SystemVisual";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "نوفيتك | برمجيات وتطبيقات وحلول رقمية في الإمارات",
  description:
    "نوفيتك شركة تقنية مقرها الإمارات، تطور تطبيقات الجوال ومنصات الويب والبرمجيات المخصصة والأنظمة الإدارية والحلول المدعومة بالذكاء الاصطناعي.",
  keywords: [
    "نوفيتك",
    "شركة تقنية إماراتية",
    "تطوير تطبيقات الإمارات",
    "تطوير مواقع الإمارات",
    "برمجيات مخصصة",
    "أنظمة إدارية",
    "حلول ذكاء اصطناعي",
  ],
  openGraph: {
    title: "نوفيتك | حلول تقنية ومنتجات رقمية",
    description:
      "نطوّر منتجات رقمية وحلولاً تقنية مخصصة تلبي احتياجات حقيقية.",
    locale: "ar_AE",
    siteName: "NoviTech",
    type: "website",
  },
};

const services = [
  {
    title: "مواقع وتطبيقات ويب",
    desc: "منصات وتجارب ويب حديثة ومتجاوبة، مصممة للأداء وسهولة الاستخدام واحتياجات الأعمال الفعلية.",
  },
  {
    title: "تطبيقات الجوال",
    desc: "تطبيقات iOS وAndroid مصممة حول احتياجات المستخدمين وتجارب الاستخدام العملية والموثوقة.",
  },
  {
    title: "برمجيات مخصصة",
    desc: "حلول برمجية يتم تطويرها وفق متطلبات العمل ومسارات التشغيل والاحتياجات الخاصة بكل مشروع.",
  },
  {
    title: "أنظمة إدارية",
    desc: "أنظمة ومنصات داخلية تساعد على تنظيم العمليات والبيانات وتبسيط إدارة الأعمال اليومية.",
  },
  {
    title: "حلول مدعومة بالذكاء الاصطناعي",
    desc: "ميزات ذكية وأتمتة وأنظمة مدعومة بالذكاء الاصطناعي لتحسين سير العمل وتجربة المستخدم.",
  },
  {
    title: "ألعاب وتجارب تفاعلية",
    desc: "منتجات وتجارب رقمية تفاعلية تجمع بين التقنية والتصميم والتجربة الممتعة والهادفة.",
  },
];

const projects = [
  {
    name: "Glowee",
    category: "منصة تقنية لقطاع التجميل",
    desc: "منصة إماراتية تربط العملاء بالصالونات وخدمات التجميل المنزلية من خلال الحجوزات والهدايا والمكافآت، مع منصات مخصصة لإدارة الأعمال والإدارة التشغيلية.",
    image: "/projects/glowee.jpeg",
    placeholder: "GL",
  },
  {
    name: "Samar App",
    category: "منصة تعليمية مساندة",
    desc: "منصة جوال تفاعلية تم تطويرها لدعم التعلم والتواصل والأنشطة المنظمة لأصحاب الهمم، مع تجارب مخصصة للطلاب والمعلمين والإدارة.",
    image: "/projects/samar.png",
    placeholder: "SA",
  },
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
        <section className="mt-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs tracking-[0.18em] text-accent mb-5">
              مقرها الإمارات • بقيادة إماراتية
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              NoviTech
            </h1>

            <div className="w-20 h-[2px] bg-accent my-7" />

            <h2 className="text-xl md:text-2xl leading-relaxed max-w-xl">
              نطوّر منتجات رقمية وحلولاً تقنية مخصصة.
            </h2>

            <p className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-xl">
              نطوّر تطبيقات الجوال، ومنصات الويب، والبرمجيات المخصصة،
              والأنظمة الإدارية، والحلول المدعومة بالذكاء الاصطناعي
              لتلبية احتياجات أعمال حقيقية.
            </p>

            <p className="mt-6 text-xs tracking-[0.14em] text-muted">
              ويب • جوال • برمجيات • أنظمة • ذكاء اصطناعي
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/ar/contact"
                className="inline-flex items-center justify-center border border-charcoal bg-charcoal text-beige px-8 py-3 transition hover:bg-transparent hover:text-charcoal"
              >
                ابدأ مشروعك
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-border px-8 py-3 transition hover:border-charcoal"
              >
                استكشف أعمالنا
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-start text-charcoal">
            <SystemVisual />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-44">
          <div className="mb-12">
            <p className="text-xs tracking-[0.18em] text-accent mb-3">
              عن NoviTech
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              تقنية تُبنى لهدف واضح.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-border pt-6">
              <h3 className="text-sm tracking-widest text-accent mb-4">
                من نحن
              </h3>

              <p className="text-muted leading-relaxed">
                NoviTech شركة تقنية مقرها الإمارات، تركّز على تطوير حلول
                رقمية عملية وموثوقة وقابلة للتوسع للأعمال والاحتياجات
                الواقعية.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm tracking-widest text-accent mb-4">
                الرسالة
              </h3>

              <p className="text-muted leading-relaxed">
                تصميم وتطوير منتجات رقمية وحلول تقنية موثوقة تعالج
                مشكلات حقيقية بكفاءة ودقة.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm tracking-widest text-accent mb-4">
                الرؤية
              </h3>

              <p className="text-muted leading-relaxed">
                تطوير NoviTech لتصبح شركة تقنية إماراتية موثوقة ومعروفة
                ببناء منتجات رقمية عالية الجودة وحلول تقنية قابلة للتوسع.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* SERVICES */}
        <section id="services" className="mt-44">
          <div className="mb-12">
            <p className="text-xs tracking-[0.18em] text-accent mb-3">
              قدراتنا
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              ما الذي نطوّره
            </h2>

            <p className="mt-4 text-sm text-muted max-w-2xl leading-relaxed">
              من المنتجات الموجهة للعملاء إلى الأنظمة الداخلية للأعمال،
              نطوّر التقنية وفق احتياجات كل مشروع ومتطلباته.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div
                key={item.title}
                className="group relative border border-border p-8 md:p-10 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-accent"
              >
                <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-accent" />

                <div className="flex items-start gap-5">
                  <span className="text-xs text-accent tracking-widest pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg md:text-xl mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <div className="mb-12">
            <p className="text-xs tracking-[0.18em] text-accent mb-3">
              أعمال مختارة
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              منتجات وأنظمة
            </h2>

            <p className="mt-4 text-sm text-muted max-w-2xl leading-relaxed">
              مجموعة مختارة من المنتجات والأنظمة الرقمية التي تم تصميمها
              وتطويرها بواسطة NoviTech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                {...project}
              />
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section className="mt-44">
          <div className="border-y border-border py-14 md:py-16">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
              <div>
                <p className="text-xs tracking-[0.18em] text-accent mb-3">
                  منهجية العمل
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  نبني الحل حول المشكلة،
                  <br className="hidden md:block" /> وليس حول قالب جاهز.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <p className="text-sm font-medium mb-2">
                    نفهم
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    نبدأ بفهم المشكلة والمستخدمين ومسارات العمل والمتطلبات
                    الفعلية التي يقوم عليها المشروع.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    نصمم
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    نصمم تجربة المستخدم وهيكل النظام بما يحقق الوضوح
                    وسهولة الاستخدام والتشغيل العملي.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    نطوّر
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    نطوّر حلولاً رقمية موثوقة باستخدام التقنية المناسبة
                    لمتطلبات كل منتج ومشروع.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    نحسّن
                  </p>

                  <p className="text-sm text-muted leading-relaxed">
                    نعمل على تحسين المنتجات من خلال الاختبار والاستخدام
                    الفعلي والملاحظات والتطوير المستمر.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-36 mb-28">
          <div className="border border-border p-10 md:p-14 lg:p-16 relative overflow-hidden">
            <span className="absolute top-0 left-0 w-12 h-12 border-t border-l border-accent" />
            <span className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-accent" />

            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.18em] text-accent mb-4">
                ابدأ مشروعك
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                لديك فكرة أو مشروع؟
              </h2>

              <p className="mt-5 text-muted leading-relaxed max-w-2xl">
                شاركنا احتياجك، ولنستكشف كيف يمكن لـNoviTech تحويله إلى
                حل رقمي موثوق وعملي.
              </p>

              <a
                href="/ar/contact"
                className="inline-flex items-center justify-center mt-8 bg-charcoal text-beige border border-charcoal px-8 py-3 transition hover:bg-transparent hover:text-charcoal"
              >
                ابدأ مشروعك
                <span className="mr-3" aria-hidden="true">
                  ←
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}