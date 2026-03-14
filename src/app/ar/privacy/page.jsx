// src/app/ar/privacy/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "سياسة الخصوصية | نوفيتك",
  description: "كيف تجمع NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C بياناتك وتحميها.",
};

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const sections = [
  { id: "overview", title: "١. نظرة عامة", content: `تلتزم ${LEGAL_NAME} بحماية خصوصيتك. توضح هذه السياسة كيفية جمع المعلومات واستخدامها عند زيارة novitech.ae أو التعامل مع خدماتنا.` },
  { id: "information-collected", title: "٢. المعلومات التي نجمعها", content: `معلومات التواصل: الاسم، البريد الإلكتروني، رقم الهاتف عبر نموذج الاتصال.\n\nمعلومات المشروع: المتطلبات والمواصفات المشتركة خلال التعامل.\n\nبيانات تقنية: سجلات الخادم للأمان والأداء فقط.\n\nلا نجمع عمداً عبر هذا الموقع بيانات شخصية حساسة مثل تفاصيل الحسابات المالية أو بيانات البطاقات أو أرقام الهوية الحكومية.` }, { id: "how-we-use", title: "٣. كيف نستخدم معلوماتك", content: `• الرد على الاستفسارات وطلبات المشاريع\n• تقديم خدماتنا وتحسينها\n• إرسال تحديثات المشروع والفواتير\n• الحفاظ على أمان الموقع\n• الامتثال للقوانين الإماراتية\n\nلا نبيع بياناتك أو نتاجر بها.` },
  { id: "data-sharing", title: "٤. مشاركة البيانات", content: `نشارك بياناتك فقط مع مزودي الخدمة الملتزمين بالسرية، وعند الطلب القانوني، أو في حال إعادة هيكلة الأعمال.` },
  { id: "data-retention", title: "٥. الاحتفاظ بالبيانات", content: `نحتفظ بالبيانات فقط طالما هو ضروري. يمكنك طلب الحذف في أي وقت.` },
  { id: "security", title: "٦. أمان البيانات", content: `نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك.` },
  { id: "cookies", title: "٧. ملفات الارتباط", content: `نستخدم ملفات ارتباط أساسية فقط. لا نستخدم ملفات تتبع أو إعلانات.` },
  { id: "your-rights", title: "٨. حقوقك", content: `يحق لك الوصول إلى بياناتك وتصحيحها وحذفها. تواصل: info@novitech.ae` },
  { id: "third-party", title: "٩. روابط الأطراف الثالثة", content: `لسنا مسؤولين عن ممارسات الخصوصية للمواقع الخارجية.` },
  { id: "children", title: "١٠. خصوصية الأطفال", content: `خدماتنا غير موجهة لمن هم دون ١٨ عاماً.` },
  { id: "changes", title: "١١. التغييرات على السياسة", content: `قد نحدّث هذه السياسة دورياً. الاستمرار يُعدّ قبولاً.` },
  { id: "contact", title: "١٢. التواصل", content: `لأي استفسارات متعلقة بالخصوصية، يرجى التواصل عبر البريد الإلكتروني info@novitech.ae أو زيارة صفحة التواصل على novitech.ae/ar/contact` },];

export default function PrivacyPageAR() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14" dir="rtl">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">قانوني</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">سياسة الخصوصية</h1>
          <p className="text-sm text-muted">آخر تحديث: <span className="text-charcoal">مارس ٢٠٢٦</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">الاسم القانوني</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">خصوصيتك مهمة. هذه السياسة توضح ما نجمعه ولماذا وكيف نحميه.</p>
        </div>
        <div className="border border-border p-6 mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">المحتويات</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-muted hover:text-charcoal transition py-1">{s.title}</a>
            ))}
          </div>
        </div>
        <div className="space-y-10">
          {sections.map((s) => (
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