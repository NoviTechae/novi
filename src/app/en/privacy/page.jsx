// src/app/en/privacy/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | NoviTech",
  description: "How NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C collects and protects your data.",
};

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const sections = [
  { id: "overview", title: "1. Overview", content: `${LEGAL_NAME} ("NoviTech") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you visit novitech.ae or engage our services.` },
  { id: "information-collected", title: "2. Information We Collect", content: `Contact Information: Name, email, phone provided via our contact form.\n\nProject Information: Requirements and technical specs shared during an engagement.\n\nTechnical Data: Server logs (IP, browser type, pages visited) for security and performance only.\n\nWe do not intentionally collect sensitive personal data such as financial account details, payment card information, or government identification numbers through this website.` },
  { id: "how-we-use", title: "3. How We Use Your Information", content: `• Respond to inquiries and project requests\n• Deliver and improve our services\n• Send project updates and invoices\n• Maintain website security\n• Comply with UAE legal obligations\n\nWe do not sell or rent your data to third parties.` },
  { id: "data-sharing", title: "4. Data Sharing", content: `We share your data only with:\n\nService Providers: Email and hosting tools bound by confidentiality.\nLegal Requirements: When required by UAE law.\nBusiness Transfers: In the event of restructuring.` },
  { id: "data-retention", title: "5. Data Retention", content: `We retain data only as long as necessary. You may request deletion at any time by contacting us.` },
  { id: "security", title: "6. Data Security", content: `We apply appropriate technical and organizational measures to protect your information.` },
  { id: "cookies", title: "7. Cookies", content: `We use essential cookies only. No tracking or advertising cookies. You may disable cookies in your browser settings.` },
  { id: "your-rights", title: "8. Your Rights", content: `You have rights to access, correct, delete, or withdraw consent for your data. Email info@novitech.ae.` },
  { id: "third-party", title: "9. Third-Party Links", content: `Our site may link to external websites. We are not responsible for their privacy practices.` },
  { id: "children", title: "10. Children's Privacy", content: `Our services are not directed at individuals under 18.` },
  { id: "changes", title: "11. Changes to This Policy", content: `We may update this policy periodically. Continued use constitutes acceptance.` },
  { id: "contact", title: "12. Contact Us", content: `For privacy questions, email info@novitech.ae or visit novitech.ae/en/contact.` },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-sm text-muted">Last updated: <span className="text-charcoal">March 2026</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Legal Entity</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">Your privacy matters. This policy explains what we collect, why, and how we protect it.</p>
        </div>

        <div className="border border-border p-6 mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">Contents</p>
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