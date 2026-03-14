// src/app/en/contact/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | NoviTech",
  description: "Get in touch with NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C for custom software, web, mobile, and AI solutions in the UAE.",
};

const contactInfo = [
  { label: "Legal Name", value: "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C", sub: "As per UAE Trade License" },
  { label: "Email", value: "info@novitech.ae", href: "mailto:info@novitech.ae" },
  { label: "WhatsApp", value: "+971558198862", href: "https://wa.me/971558198862" },
  { label: "Phone", value: "+971558198862", href: "tel:+971558198862" },
  { label: "Address", value: "Al Ain, Abu Dhabi, United Arab Emirates" },
  { label: "Working Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM (UAE Time)" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />
      <div className="max-w-5xl mx-auto py-16">

        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Get in touch</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-muted leading-relaxed max-w-xl">
            Have a project in mind? We typically reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-accent">Our details</p>
            {contactInfo.map((item) => (
              <div key={item.label} className="border-b border-border pb-5">
                <p className="text-xs uppercase tracking-widest text-accent mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-medium hover:text-accent transition"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
                {item.sub && <p className="text-xs text-muted mt-1">{item.sub}</p>}
              </div>
            ))}

            {/* Social */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-widest text-accent mb-3">Social</p>
              <div className="flex gap-6 text-sm text-muted">
                <a href="https://wa.me/971558198862" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">WhatsApp</a>
                <a href="https://www.instagram.com/novitech.ae" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">Instagram</a>
                <a href="https://www.tiktok.com/@novitech.ae" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">TikTok</a>
              </div>
            </div>
          </div>

          {/* Right — Form (الأصلي بدون تعديل) */}
          <div>
            <p className="text-xs uppercase tracking-widest text-accent mb-6">Send a message</p>
            <ContactForm />
          </div>

        </div>

        {/* Legal note */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted leading-relaxed">
            NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C is registered in the UAE. All services subject to our{" "}
            <Link href="/en/terms" className="underline hover:text-accent transition">Terms</Link>,{" "}
            <Link href="/en/privacy" className="underline hover:text-accent transition">Privacy Policy</Link>, and{" "}
            <Link href="/en/refund-policy" className="underline hover:text-accent transition">Refund Policy</Link>.
          </p>
        </div>

      </div>
      <Footer />
    </main>
  );
}