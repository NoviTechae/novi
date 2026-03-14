// src/app/en/terms/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | NoviTech",
  description: "Terms and conditions for NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C services.",
};

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const sections = [
  { id: "parties", title: "1. Parties", content: `These Terms constitute a legally binding agreement between you ("Client") and ${LEGAL_NAME}, a company registered in the UAE, trading as NoviTech at novitech.ae.` },
  { id: "acceptance", title: "2. Acceptance of Terms", content: `By accessing or using NoviTech's services, website, or any digital products, you agree to be bound by these Terms. If you do not agree, please do not use our services.` },
  { id: "services", title: "3. Services", content: `NoviTech provides:\n\n• Website & Web Application Development\n• Mobile Application Development (iOS & Android)\n• Custom Software Development\n• Management & Business Systems\n• AI-powered Solutions\n• Games & Interactive Digital Experiences\n• Technical Consulting & Custom Coding Solutions\n\nScope, timeline, and deliverables are defined in a separate written agreement.` },
  { id: "client-responsibilities", title: "4. Client Responsibilities", content: `Clients are responsible for accurate requirements, timely feedback, and any assets or credentials needed. Delays caused by the client are not NoviTech's responsibility.` },
  { id: "intellectual-property", title: "5. Intellectual Property", content: `Upon full payment, the client owns all custom deliverables as specified. ${LEGAL_NAME} retains ownership of proprietary frameworks and reusable components developed independently.` },
  { id: "payment", title: "6. Payment Terms", content: `Payment terms are outlined in the project agreement or invoice. NoviTech may pause work if obligations are not met.` },
  { id: "confidentiality", title: "7. Confidentiality", content: `Both parties keep confidential any proprietary information shared during the engagement. This obligation survives termination.` },
  { id: "limitation", title: "8. Limitation of Liability", content: `${LEGAL_NAME}'s liability shall not exceed the total amount paid for the specific service. We are not liable for indirect or consequential damages.` },
  { id: "warranties", title: "9. Warranties & Disclaimers", content: `Work is performed professionally per agreed specifications. We do not guarantee uninterrupted operation beyond the agreed warranty period.` },
  { id: "termination", title: "10. Termination", content: `Either party may terminate with written notice. The client pays for all work completed to date. Deliverables are transferred upon receipt of outstanding payments.` },
  { id: "governing-law", title: "11. Governing Law", content: `These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the jurisdiction of the competent courts of the UAE.` },
  { id: "contact", title: "12. Contact", content: `For any questions regarding these Terms, please email info@novitech.ae or visit novitech.ae/en/contact.` },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-sm text-muted">Last updated: <span className="text-charcoal">March 2026</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Legal Entity</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
            <p className="text-xs text-muted mt-1">Registered in the United Arab Emirates</p>
          </div>
        </div>

        {/* TOC */}
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