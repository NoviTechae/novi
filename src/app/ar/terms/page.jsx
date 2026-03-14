// ═══════════════════════════════════════════════════
// src/app/ar/terms/page.jsx
// ═══════════════════════════════════════════════════
// انسخ كل section لملفه المناسب

// ─── ar/terms/page.jsx ────────────────────────────

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

/* ══════════════════════════════
   TERMS
══════════════════════════════ */
const termsSections = [
  { id: "parties", title: "١. أطراف الاتفاقية", content: `تُعدّ هذه الشروط اتفاقية ملزمة بينك ("العميل") وبين ${LEGAL_NAME}، شركة مسجلة في الإمارات، تعمل تحت الاسم التجاري نوفيتك على novitech.ae.` },
  { id: "acceptance", title: "٢. قبول الشروط", content: `بالوصول إلى خدمات نوفيتك أو استخدامها، فإنك توافق على الالتزام بهذه الشروط. وإذا كنت لا توافق عليها، يرجى عدم استخدام خدماتنا.` },
  { id: "services", title: "٣. الخدمات", content: `تقدم نوفيتك:\n\n• تطوير المواقع والتطبيقات\n• تطوير تطبيقات الجوال (iOS و Android)\n• برمجيات مخصصة\n• أنظمة إدارية\n• حلول الذكاء الاصطناعي\n• الألعاب والتجارب الرقمية\n• استشارات تقنية وحلول برمجية مخصصة\n\nويتم تحديد نطاق العمل والمدة الزمنية والمخرجات في اتفاقية مكتوبة منفصلة.` },
  { id: "client-responsibilities", title: "٤. مسؤوليات العميل", content: `يتحمل العميل مسؤولية تقديم متطلبات دقيقة وتغذية راجعة في الوقت المناسب. التأخيرات الناجمة عن العميل لا تقع على عاتق نوفيتك.` },
  { id: "intellectual-property", title: "٥. الملكية الفكرية", content: `عند اكتمال الدفع يحصل العميل على ملكية المنتجات المخصصة المتفق عليها. تحتفظ نوفيتك بملكية الأطر والأدوات المطورة بشكل مستقل.` },
  { id: "payment", title: "٦. شروط الدفع", content: `تُحدَّد شروط الدفع في اتفاقية المشروع. تحتفظ نوفيتك بحق إيقاف العمل عند عدم استيفاء الالتزامات.` },
  { id: "confidentiality", title: "٧. السرية", content: `يلتزم الطرفان بسرية المعلومات المشتركة خلال التعامل. يستمر هذا الالتزام بعد إنهاء الاتفاقية.` },
  { id: "limitation", title: "٨. تحديد المسؤولية", content: `لا تتجاوز مسؤولية نوفيتك المبلغ المدفوع مقابل الخدمة المعنية. لا نتحمل الأضرار غير المباشرة.` },
  { id: "warranties", title: "٩. الضمانات", content: `يُنجز العمل باحترافية وفق المواصفات المتفق عليها.` },
  { id: "termination", title: "١٠. الإنهاء", content: `يحق لأي طرف الإنهاء بإشعار كتابي. يدفع العميل مقابل العمل المنجز حتى تاريخ الإنهاء.` },
  { id: "governing-law", title: "١١. القانون المعمول به", content: `تخضع هذه الشروط لقوانين الإمارات وتختص محاكمها بالنظر في النزاعات.` },
  { id: "contact", title: "١٢. التواصل", content: `لأي استفسارات متعلقة بهذه الشروط، يرجى التواصل عبر البريد الإلكتروني info@novitech.ae أو زيارة صفحة التواصل على novitech.ae/ar/contact` },
];

export function ARTermsPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14" dir="rtl">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">قانوني</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">شروط الخدمة</h1>
          <p className="text-sm text-muted">آخر تحديث: <span className="text-charcoal">مارس ٢٠٢٦</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">الاسم القانوني</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
            <p className="text-xs text-muted mt-1">مسجلة في الإمارات العربية المتحدة</p>
          </div>
        </div>
        <div className="border border-border p-6 mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">المحتويات</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {termsSections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-muted hover:text-charcoal transition py-1">{s.title}</a>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          {termsSections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-8">
              <h2 className="text-lg font-semibold mb-3">{s.title}</h2>
              <p className="text-muted leading-relaxed text-[15px] whitespace-pre-line">{s.content}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default ARTermsPage;