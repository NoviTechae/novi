import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* HERO */}

      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* الصورة يسار */}
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/brand/novi1.jpeg"
            alt="Development"
            width={450}
            height={40}
            //className="max-w-sm md:max-w-md h-auto"
            priority
          />

        </div>
        {/* الكروت يمين */}
        <div className="order-1 md:order-1">
          <div className="space-y-4 text-center md:text-right">
            <p className="text-indigo-700 font-semibold">حلول تقنية متخصصة</p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">نبني برمجيات تُطلق نموّ عملك</h1>
            <p className="text-slate-600">مواقع، تطبيقات، وأنظمة حسب الطلب — تسليم سريع ودقيق، وتجربة حديثة.</p>
          </div>

          {/* كروت الميزات */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card text-center">
              <h3 className="font-semibold mb-1">🚀 سرعة ومرونة</h3>
              <p className="text-sm text-slate-600">تسليم سريع في أي احتياجاتك</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold mb-1">🌍 لا حدود للأفكار</h3>
              <p className="text-sm text-slate-600">تحويل أي فكرة إلى مشروع ناجح</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold mb-1">🔒 برمجيات موثوقة</h3>
              <p className="text-sm text-slate-600">حلول آمنة بجودة عالية</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold mb-1">💡 دعم دائم</h3>
              <p className="text-sm text-slate-600">متابعة وصيانة بعد الإطلاق</p>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" dir="rtl" className="container mx-auto px-4 py-16">
        <h2 className="section-title">من نحن</h2>

        <p className="section-text max-w-3xl">
          نحن في <span className="font-semibold">NoviTech</span> نؤمن أن التقنية هي المفتاح لنمو الأعمال واستدامتها.
          نطوّر مواقع إلكترونية، تطبيقات موبايل، وأنظمة برمجية مخصّصة تُحوّل أفكاركم إلى منتجاتٍ رقمية عملية،
          مع تركيز على الجودة، السرعة، وتجربة استخدام حديثة.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* هدفنا */}
          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-2xl">🚀</div>
            <h3 className="font-semibold mb-1">هدفنا</h3>
            <p className="text-sm text-slate-600">
              تقديم حلول تقنية مبتكرة ومرنة تُسهّل إطلاق المشاريع وتسريع الوصول إلى النتائج.
            </p>
          </div>

          {/* رؤيتنا */}
          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-2xl">👁️</div>
            <h3 className="font-semibold mb-1">رؤيتنا</h3>
            <p className="text-sm text-slate-600">
              أن نكون الشريك التقني الأول في المنطقة لتحويل الأفكار إلى واقع رقمي ناجح قابل للنمو.
            </p>
          </div>

          {/* قيمنا */}
          <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="mb-2 text-2xl">💎</div>
            <h3 className="font-semibold mb-2">قيمنا</h3>
            <ul className="text-sm text-slate-700 space-y-1 list-disc pr-5">
              <li>الجودة والموثوقية</li>
              <li>السرعة في التنفيذ</li>
              <li>الإبداع والابتكار</li>
              <li>الشفافية والتعاون</li>
            </ul>
          </div>
        </div>
      </section>


      {/* SERVICES (بدل الأسعار) */}
      <section id="services" className="container mx-auto px-4 pb-16">
        <h2 className="section-title">خدماتنا</h2>

        {/* مجموعات الخدمات */}
        <div className="grid lg:grid-cols-3 gap-6">
          <ServiceCard
            title="المواقع الإلكترونية"
            items={[
              "موقع بسيط (صفحة تعريفية)",
              "موقع متعدد الصفحات",
              "متجر إلكتروني (منتجات/سلة/دفع)",
            ]}
            icon={<GlobeIcon />}
          />
          <ServiceCard
            title="تطبيقات الموبايل"
            items={[
              "تطبيق أساسي (iOS أو Android)",
              "تطبيق كامل (iOS + Android + لوحة تحكم)",
            ]}
            icon={<AppIcon />}
          />
          <ServiceCard
            title="أنظمة مخصصة"
            items={[
              "أنظمة حجز وإدارة",
              "لوحات تحكّم وواجهات APIs",
            ]}
            icon={<CogIcon />}
          />
          <ServiceCard
            title="ذكاء اصطناعي"
            items={[
              "شات بوت خدمة عملاء / أدوات بيانات",
              "توليد محتوى (نصوص/صور)",
              "حلول RAG وربط قواعد بيانات",
            ]}
            icon={<RobotIcon />}
          />
          <ServiceCard
            title="الأداء والأمان"
            items={[
              "تحسين السرعة وتجربة المستخدم",
              "حماية البيانات والخصوصية",
              "مراقبة وتتبّع الأخطاء",
            ]}
            icon={<ShieldIcon />}
          />
          <ServiceCard
            title="الدعم والصيانة"
            items={[
              "دعم وإطلاق منظم",
              "صيانة وتحديثات شهرية",
              "نسخ احتياطي ومراقبة",
            ]}
            icon={<WrenchIcon />}
          />
        </div>
        {/* CTA */}
        <div className="mt-8 rounded-2xl border bg-white p-6 text-center shadow-sm">
          <h3 className="text-xl font-bold mb-2">جاهز نبدأ مشروعك؟</h3>
          <p className="text-slate-600 mb-4">
            احصل على عرض مخصص حسب احتياجك — نرد عليك خلال أقل من 24 ساعة.
          </p>
          <div className="flex justify-center gap-3">
            <a href="#contact" className="btn-primary">اطلب عرض</a>
            <a href="https://wa.me/971558198862" target="_blank" className="btn-ghost">تواصل واتساب</a>
          </div>
        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-4 py-12">
        <h2 className="section-title">تواصل معنا</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* معلومات التواصل يسار/يمين حسب تصميمك */}
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

/* ============ Components ============ */


function ServiceCard({
  title,
  items,
  icon,
}: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <div className="group rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 ring-1 ring-slate-200/70 hover:ring-indigo-200">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-500 text-white grid place-items-center mb-3 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="text-sm text-slate-700 space-y-1 list-disc pr-5">
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}


function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 2 4 5v6c0 5 3.8 9.4 8 11 4.2-1.6 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}


/* ====== Simple inline icons (SVG) ====== */
function GlobeIcon() { return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.5 3 2.5 15 0 18" /><path d="M12 3c-2.5 3-2.5 15 0 18" /></svg>); }
function AppIcon() { return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="3" /><circle cx="12" cy="18" r="1.2" /></svg>); }
function CogIcon() { return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a8 8 0 0 1-2.1 3.6l-.1-.1a1 1 0 0 0-1.1-.2l-1.3.5a8 8 0 0 1-3 0l-1.3-.5a1 1 0 0 0-1.1.2l-.1.1a8 8 0 0 1-2.1-3.6l.1-.1a1 1 0 0 0 .2-1.1l-.5-1.3a8 8 0 0 1 0-3l.5-1.3a1 1 0 0 0-.2-1.1l-.1-.1A8 8 0 0 1 8 3.8l.1.1a1 1 0 0 0 1.1.2l1.3-.5a8 8 0 0 1 3 0l1.3.5a1 1 0 0 0 1.1-.2l.1-.1a8 8 0 0 1 2.1 3.6l-.1.1a1 1 0 0 0-.2 1.1l.5 1.3a8 8 0 0 1 0 3l-.5 1.3Z" /></svg>); }
function RobotIcon() { return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="7" width="16" height="12" rx="3" /><circle cx="9" cy="13" r="1.5" /><circle cx="15" cy="13" r="1.5" /><path d="M12 7V4" /></svg>); }
function WrenchIcon() { return (<svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 7a4 4 0 1 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5Z" /></svg>); }
