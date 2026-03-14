// src/app/ar/contact/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "تواصل معنا | نوفيتك",
  description: "تواصل مع نوفيتك لحلول البرمجيات والمواقع والتطبيقات والذكاء الاصطناعي في الإمارات.",
};

const contactInfo = [
  { label: "الاسم القانوني", value: "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C", sub: "كما في الرخصة التجارية الإماراتية" },
  { label: "البريد الإلكتروني", value: "info@novitech.ae", href: "mailto:info@novitech.ae" },
  { label: "واتساب", value: "+971 55 819 8862", href: "https://wa.me/971558198862" },
  { label: "هاتف", value: "+971 55 819 8862", href: "tel:+971558198862" },
  { label: "العنوان", value: "العين، أبوظبي، الإمارات العربية المتحدة" },
  { label: "ساعات العمل", value: "الاثنين – الجمعة: 9:00 ص – 6:00 م (توقيت الإمارات)" },
];

export default function ContactPageAR() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14" dir="rtl">
      <Navbar />
      <div className="max-w-5xl mx-auto py-16">

        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">تواصل معنا</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">تواصل معنا</h1>
          <p className="text-muted leading-relaxed max-w-xl">عندك مشروع؟ نرد عادةً خلال 24 ساعة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-accent">بياناتنا</p>
            {contactInfo.map((item) => (
              <div key={item.label} className="border-b border-border pb-5">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer" className="font-medium hover:text-accent transition">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
                {item.sub && <p className="text-xs text-muted mt-1">{item.sub}</p>}
              </div>
            ))}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">التواصل الاجتماعي</p>
              <div className="flex gap-6 text-sm text-muted">
                <a href="https://wa.me/971558198862" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">واتساب</a>
                <a href="https://www.instagram.com/novitech.ae" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">إنستغرام</a>
                <a href="https://www.tiktok.com/@novitech.ae" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">تيك توك</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-6">أرسل رسالة</p>
            <ContactForm />
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted leading-relaxed">
            NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C شركة مسجلة في الإمارات. جميع الخدمات تخضع لـ{" "}
            <Link href="/ar/terms" className="underline hover:text-accent transition">الشروط</Link>{" "}
            و<Link href="/ar/privacy" className="underline hover:text-accent transition">الخصوصية</Link>{" "}
            و<Link href="/ar/refund-policy" className="underline hover:text-accent transition">سياسة الاسترداد</Link>.
          </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}