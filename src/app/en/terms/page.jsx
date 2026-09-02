import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | NoviTech",
  description:
    "Terms and conditions for NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C services.",
};

const LEGAL_NAME =
  "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const sections = [
  {
    id: "parties",
    title: "1. Parties",
    content: `These Terms constitute a legally binding agreement between you ("Client") and ${LEGAL_NAME}, a company registered in the United Arab Emirates and trading as NoviTech through novitech.ae.`,
  },
  {
    id: "acceptance",
    title: "2. Acceptance of Terms",
    content: `By accessing or using NoviTech's website, services, or digital products, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our services.`,
  },
  {
    id: "services",
    title: "3. Services",
    content: `NoviTech provides:

• Website & Web Application Development
• Mobile Application Development (iOS & Android)
• Custom Software Development
• Management & Business Systems
• AI-powered Solutions
• Games & Interactive Digital Experiences
• Technical Consulting & Custom Coding Solutions

The scope, timeline, deliverables, project requirements, and any applicable support or warranty terms are defined in a separate written agreement, proposal, statement of work, or invoice.`,
  },
  {
    id: "client-responsibilities",
    title: "4. Client Responsibilities",
    content: `Clients are responsible for providing accurate requirements, timely feedback, approvals, content, assets, credentials, and any other information reasonably required to complete the project. Delays caused by missing information, approvals, or client-side dependencies may affect the project timeline and are not the responsibility of NoviTech.`,
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: `Upon full payment, the client owns the custom deliverables specifically created for the client, as defined in the applicable project agreement.

${LEGAL_NAME} retains ownership of pre-existing intellectual property, proprietary frameworks, internal tools, reusable components, libraries, methods, and other materials developed independently of the client project, unless otherwise agreed in writing.`,
  },
  {
    id: "payment",
    title: "6. Payment Terms",
    content: `Payment terms, including any deposit, milestone payments, payment schedule, and final balance, are defined in the applicable project agreement, proposal, or invoice.

NoviTech may pause or suspend work where payment obligations are not met by the agreed due date. Project timelines may be adjusted accordingly.

Unless otherwise agreed in writing, deliverables may be withheld until all outstanding amounts relating to the relevant project have been paid.`,
  },
  {
    id: "confidentiality",
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any non-public, proprietary, commercial, technical, or sensitive information shared during the engagement.

This obligation continues after the completion or termination of the project, except where disclosure is required by law or where the information is already publicly available through no breach of these Terms.`,
  },
  {
    id: "limitation",
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, ${LEGAL_NAME}'s total liability arising from a specific service or project shall not exceed the total amount paid by the client for that specific service or project.

NoviTech shall not be liable for indirect, incidental, special, consequential, or loss-of-profit damages arising from the use of, or inability to use, any service or deliverable.`,
  },
  {
    id: "warranties",
    title: "9. Warranties & Disclaimers",
    content: `NoviTech performs its work professionally and in accordance with the specifications agreed for each project.

Any warranty, support period, maintenance period, or post-delivery correction period is limited to the duration and scope specified in the applicable project agreement.

NoviTech does not guarantee uninterrupted or error-free operation beyond the agreed scope, particularly where issues result from third-party services, external platforms, client modifications, hosting providers, operating system updates, or other factors outside NoviTech's control.`,
  },
  {
    id: "termination",
    title: "10. Termination",
    content: `Either party may terminate a project by written notice, subject to the terms of the applicable project agreement.

The client remains responsible for payment for work completed, costs incurred, and any non-cancellable commitments made up to the effective termination date.

Any deliverables due to the client will be transferred once all outstanding amounts relating to the completed work have been paid.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: `These Terms are governed by the laws of the United Arab Emirates.

Any dispute arising from or relating to these Terms or NoviTech's services shall be subject to the jurisdiction of the competent courts of the United Arab Emirates, unless otherwise agreed in writing.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: `For questions regarding these Terms, please contact NoviTech at info@novitech.ae or through the contact page at novitech.ae/en/contact.`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />

      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Terms of Service
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