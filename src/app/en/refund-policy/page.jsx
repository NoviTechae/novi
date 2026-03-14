// src/app/en/refund-policy/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund Policy | NoviTech",
  description: "Refund and cancellation policy for NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C.",
};

const LEGAL_NAME = "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const summary = [
  { label: "Pre-work cancellation",  value: "Full deposit refund possible" },
  { label: "Mid-project cancellation", value: "Pay for completed work only" },
  { label: "Post-delivery defects",  value: "Free fixes within warranty period" },
  { label: "Digital products",       value: "Non-refundable after download/access" },
  { label: "Third-party costs",      value: "Non-refundable" },
];

const sections = [
  { id: "overview", title: "1. Overview", content: `This Refund Policy applies to all services and products provided by ${LEGAL_NAME} (trading as NoviTech). Refunds are handled case-by-case per the guidelines below.` },
  { id: "deposits", title: "2. Deposits & Upfront Payments", content: `Deposits are non-refundable once work has commenced.\n\nIf cancelled before any work begins and before a kickoff meeting, the full deposit may be refunded at NoviTech's discretion.` },
  { id: "milestones", title: "3. Milestone-Based Projects", content: `• Payments for completed milestones are non-refundable.\n• Mid-milestone cancellations: invoiced for work completed. Any overpayment is refunded.\n• Milestone completion is determined by NoviTech delivering the agreed outputs.` },
  { id: "cancellation", title: "4. Project Cancellation", content: `Upon cancellation:\n1. NoviTech prepares a summary of completed work.\n2. Client is invoiced at the agreed rate.\n3. Deliverables transferred upon final payment.\n4. Overpayment refunded within 14 business days.` },
  { id: "defects", title: "5. Defects & Warranty", content: `NoviTech provides a warranty period (typically 30 days post-delivery) for bugs caused by our work.\n\nRefunds for defects only if:\n• Reported within the warranty period\n• Issue is reproducible and caused by our implementation\n• NoviTech was given a reasonable opportunity to resolve it` },
  { id: "digital-products", title: "6. Digital Products", content: `• Final once accessed or downloaded.\n• If significantly different from description, full refund within 7 days.\n• Requests via novitech.ae/en/contact within 7 days of purchase.` },
  { id: "mobile-games", title: "7. Mobile Apps & Games", content: `For apps distributed via App Store or Google Play:\n• Refunds subject to the platform's own policies.\n• NoviTech cannot process refunds for third-party store purchases.\n• Directly-sold licenses follow standard refund terms.` },
  { id: "non-refundable", title: "8. Non-Refundable Items", content: `Never eligible for refunds:\n• Third-party costs (domains, hosting, APIs, licenses, app store fees)\n• Rush or expedited delivery fees\n• Completed and approved milestones\n• Consultations already conducted\n• Work delayed due to client inaction` },
  { id: "process", title: "9. How to Request a Refund", content: `Contact us via novitech.ae/en/contact with:\n• Your name and project/order reference\n• The specific payment in question\n• A clear description of the reason\n\nWe acknowledge refund requests within 2 business days and aim to resolve them within 10 business days.` },
  { id: "governing-law", title: "10. Governing Law", content: `This policy is governed by UAE law. Disputes are subject to UAE jurisdiction.` },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Refund Policy</h1>
          <p className="text-sm text-muted">Last updated: <span className="text-charcoal">March 2026</span></p>
          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">Legal Entity</p>
            <p className="text-sm font-medium">{LEGAL_NAME}</p>
          </div>
          <p className="mt-4 text-muted leading-relaxed">We stand behind our work. This policy outlines when refunds may be issued.</p>
        </div>

        {/* Quick Summary */}
        <div className="border border-border p-6 mb-8">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">Quick Summary</p>
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