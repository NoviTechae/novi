// src/app/ar/refund-policy/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "سياسة الاسترداد | نوفيتك",
  description: "سياسة الاسترداد والإلغاء لشركة NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C",
};

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const summary = [
  { label: "الإلغاء قبل البدء", value: "استرداد الدفعة الأولى ممكن" },
  { label: "الإلغاء في منتصف المشروع", value: "الدفع مقابل العمل المنجز فقط" },
  { label: "العيوب بعد التسليم", value: "إصلاح مجاني خلال فترة الضمان" },
  { label: "المنتجات الرقمية", value: "غير قابلة للاسترداد بعد الوصول" },
  { label: "تكاليف الأطراف الثالثة", value: "غير قابلة للاسترداد" },
];

const sections = [
  { id: "overview", title: "١. نظرة عامة", content: `تنطبق هذه السياسة على جميع خدمات ومنتجات ${LEGAL_NAME}. يُعالَج كل طلب استرداد بشكل فردي وفق الإرشادات أدناه.` },
  { id: "deposits", title: "٢. الدفعات الأولى", content: `الدفعات الأولى غير قابلة للاسترداد بمجرد بدء العمل.\n\nإذا تم الإلغاء قبل بدء أي عمل وقبل اجتماع الانطلاق، قد يُستردّ المبلغ وفق تقدير نوفيتك.` },
  { id: "milestones", title: "٣. المشاريع القائمة على المراحل", content: `• المدفوعات للمراحل المكتملة غير قابلة للاسترداد.\n• الإلغاء في منتصف مرحلة: تُصدر فاتورة بالعمل المنجز. أي دفع زائد يُستردّ.` },
  { id: "cancellation", title: "٤. إلغاء المشروع", content: `عند الإلغاء:\n١. ملخص للأعمال المنجزة.\n٢. فاتورة بالعمل المكتمل بالسعر المتفق عليه.\n٣. تسليم المخرجات عند الدفع النهائي.\n٤. استرداد أي دفع زائد خلال ١٤ يوم عمل.` },
  { id: "defects", title: "٥. العيوب والضمان", content: `فترة ضمان (عادةً ٣٠ يوماً) لإصلاح الأخطاء الناجمة عن عملنا مجاناً.\n\nطلبات الاسترداد تُنظر فقط إذا:\n• تم الإبلاغ خلال فترة الضمان\n• المشكلة قابلة للتكرار وناجمة عن تطبيقنا\n• أُعطيت نوفيتك فرصة معقولة للحل` },
  { id: "digital-products", title: "٦. المنتجات الرقمية", content: `• تصبح غير قابلة للاسترداد بمجرد الوصول إليها أو تنزيلها.\n• إذا كانت مختلفة جوهرياً عن وصفها، يُستردّ المبلغ خلال ٧ أيام.` }, { id: "mobile-games", title: "٧. التطبيقات والألعاب", content: `للتطبيقات الموزعة عبر App Store أو Google Play:\n• تخضع لسياسة المتجر المعني.\n• • لا تستطيع نوفيتك معالجة طلبات الاسترداد الخاصة بالمشتريات التي تتم عبر متاجر التطبيقات التابعة لجهات خارجية.` },
  { id: "non-refundable", title: "٨. البنود غير القابلة للاسترداد", content: `• تكاليف الأطراف الثالثة (نطاقات، استضافة، APIs، رسوم المتاجر)\n• رسوم التسليم العاجل\n• المراحل المكتملة والمعتمدة\n• الاستشارات التي أُجريت\n• العمل المتأخر بسبب العميل` },
  { id: "process", title: "٩. كيفية طلب الاسترداد", content: `تواصل عبر novitech.ae/ar/contact مع:\n• اسمك ومرجع المشروع\n• الدفعة المعنية\n• وصف واضح للسبب\n\nنؤكد استلام الطلب خلال يومي عمل ونسعى إلى معالجته خلال ١٠ أيام عمل.` },
  { id: "governing-law", title: "١٠. القانون المعمول به", content: `تخضع هذه السياسة لقوانين الإمارات وتختص محاكمها بالنظر في النزاعات.` },
];

export default function RefundPolicyPageAR() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14" dir="rtl">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">قانوني</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">سياسة الاسترداد</h1>
          <p className="text-sm text-muted">آخر تحديث: <span className="text-charcoal">مارس ٢٠٢٦</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">الاسم القانوني</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">نحن واثقون من جودة عملنا. هذه السياسة توضح متى يمكن إصدار المبالغ المستردة.</p>
        </div>

        {/* Quick Summary */}
        <div className="border border-border p-6 mb-8">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">ملخص سريع</p>
          <div className="space-y-3">
            {summary.map((item) => (
              <div key={item.label} className="flex items-center justify-between text-sm border-b border-border pb-2 last:border-0 last:pb-0">
                <span className="text-muted">{item.label}</span>
                <span className="text-charcoal">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOC */}
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