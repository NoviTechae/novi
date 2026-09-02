import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Refund Policy | NoviTech",
  description:
    "Refund and cancellation policy for NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C.",
};

const LEGAL_NAME =
  "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const summary = [
  {
    label: "Pre-work cancellation",
    value: "May be eligible for a deposit refund",
  },
  {
    label: "Mid-project cancellation",
    value: "Pay for completed work and incurred costs",
  },
  {
    label: "Post-delivery defects",
    value: "Corrections within the agreed warranty scope",
  },
  {
    label: "Digital products",
    value: "Generally non-refundable after access",
  },
  {
    label: "Third-party costs",
    value: "Non-refundable once incurred",
  },
];

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `This Refund Policy applies to services and products provided by ${LEGAL_NAME}, trading as NoviTech.

Refunds, credits, and cancellation outcomes are assessed according to the nature of the service, the stage of the project, work already completed, costs already incurred, and the applicable project agreement or purchase terms.`,
  },
  {
    id: "deposits",
    title: "2. Deposits & Upfront Payments",
    content: `Deposits and upfront payments may become non-refundable once work has commenced or costs have been incurred in connection with the project.

If a project is cancelled before work begins, NoviTech may refund some or all of the deposit, depending on the applicable project agreement and whether any administrative, planning, third-party, or other project-related costs have already been incurred.`,
  },
  {
    id: "milestones",
    title: "3. Milestone-Based Projects",
    content: `For projects divided into milestones:

• Payments relating to completed and accepted milestones are generally non-refundable.
• If a project is cancelled during an active milestone, the client remains responsible for work completed and costs incurred up to the effective cancellation date.
• Any amount paid in excess of the amount properly due may be refundable.
• Milestone scope and completion are determined by the deliverables and acceptance criteria defined in the applicable project agreement.`,
  },
  {
    id: "cancellation",
    title: "4. Project Cancellation",
    content: `If a project is cancelled:

1. NoviTech may prepare a summary of work completed and costs incurred.
2. The client will remain responsible for all amounts due for completed work, approved milestones, and non-cancellable or third-party costs already incurred.
3. Deliverables due to the client may be transferred after outstanding amounts relating to the completed work have been paid.
4. If the client has made an overpayment after all applicable amounts are calculated, the refundable balance will be returned within a reasonable processing period.`,
  },
  {
    id: "defects",
    title: "5. Defects & Warranty",
    content: `Where a project includes a warranty or post-delivery correction period, its duration and scope will be specified in the applicable project agreement.

During that period, NoviTech may correct reproducible defects caused directly by NoviTech's implementation and falling within the agreed project scope.

A refund will not normally be issued where NoviTech can reasonably correct the defect.

Warranty coverage does not apply to issues caused by:

• Client or third-party modifications
• Third-party services, APIs, hosting providers, or platforms
• Operating system, browser, marketplace, or platform updates
• Incorrect use or use outside the agreed specifications
• Features, changes, or requirements outside the original project scope`,
  },
  {
    id: "digital-products",
    title: "6. Digital Products",
    content: `Digital products, downloadable materials, templates, software, licenses, or other immediately accessible digital content are generally non-refundable once access, download, activation, or delivery has occurred.

Where a directly purchased digital product is materially different from its published description or cannot be accessed due to a defect attributable to NoviTech, the customer should contact us promptly so the issue can be reviewed and, where appropriate, corrected, replaced, credited, or refunded.

Any product-specific refund terms displayed at the time of purchase will also apply.`,
  },
  {
    id: "mobile-games",
    title: "7. Mobile Apps & Games",
    content: `For applications, games, or digital products purchased through third-party platforms such as the Apple App Store or Google Play:

• Refund requests are subject to the relevant platform's own refund rules and procedures.
• NoviTech cannot directly process refunds for purchases handled and billed by a third-party marketplace.
• Products or licenses purchased directly from NoviTech are subject to this Refund Policy and any product-specific terms provided at the time of purchase.`,
  },
  {
    id: "non-refundable",
    title: "8. Non-Refundable Items",
    content: `The following amounts are generally non-refundable once incurred, delivered, or completed:

• Third-party costs, including domains, hosting, APIs, licenses, subscriptions, app store fees, and external services
• Rush or expedited delivery charges
• Completed and accepted milestones
• Consultations or advisory sessions already provided
• Work already completed before cancellation
• Custom work developed according to approved specifications
• Costs or work resulting from delays, changes, or inactivity on the client's side

Nothing in this section limits any rights that cannot lawfully be excluded under applicable law.`,
  },
  {
    id: "process",
    title: "9. How to Request a Refund",
    content: `To request a refund or discuss a payment issue, contact NoviTech through novitech.ae/en/contact and provide:

• Your name
• Project, invoice, order, or payment reference
• The payment concerned
• A clear description of the reason for the request
• Any supporting information that may help us review the matter

NoviTech will review the request and respond within a reasonable timeframe. Additional information may be requested where necessary.`,
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: `This Refund Policy is governed by the laws of the United Arab Emirates.

Any dispute relating to this policy shall be subject to the jurisdiction of the competent courts of the United Arab Emirates, unless otherwise agreed in writing.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />

      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Refund Policy
          </h1>

          <p className="text-sm text-muted">
            Last updated:{" "}
            <span className="text-charcoal">
              September 2026
            </span>
          </p>

          <div className="mt-4 border border-border p-4">
            <p className="text-xs uppercase tracking-widest text-accent mb-1">
              Legal Entity
            </p>

            <p className="text-sm font-medium">
              {LEGAL_NAME}
            </p>

            <p className="text-xs text-muted mt-1">
              Registered in the United Arab Emirates
            </p>
          </div>

          <p className="mt-4 text-muted leading-relaxed">
            We stand behind our work. This policy explains how
            cancellations, payment adjustments, and refund requests are
            handled.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="border border-border p-6 mb-8">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            Quick Summary
          </p>

          <div className="space-y-3">
            {summary.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 border-b border-border pb-3 text-sm last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-muted">
                  {item.label}
                </span>

                <span className="text-charcoal sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* TOC */}
        <div className="border border-border p-6 mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            Contents
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-muted hover:text-charcoal transition py-1"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28"
            >
              <h2 className="text-lg font-semibold mb-3">
                {section.title}
              </h2>

              <p className="text-muted leading-relaxed text-[15px] whitespace-pre-line">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}