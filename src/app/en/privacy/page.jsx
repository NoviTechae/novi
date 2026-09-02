import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | NoviTech",
  description:
    "How NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C collects, uses, and protects your information.",
};

const LEGAL_NAME =
  "NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C";

const sections = [
  {
    id: "overview",
    title: "1. Overview",
    content: `${LEGAL_NAME}, trading as NoviTech, is committed to respecting your privacy and protecting your personal information.

This policy explains how we collect, use, retain, and share information when you visit novitech.ae, contact us, or use our services.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We may collect the following types of information:

• Contact Information: Such as your name, email address, and phone number when you contact us or submit a form through the website.
• Project Information: Such as project type, requirements, specifications, content, and other information you choose to share regarding your inquiry or project.
• Business and Transaction Information: Such as proposal, invoice, payment, and communication records when you begin a business relationship with us.
• Technical Data: Such as server logs, device or browser information, and IP address where available, for security, operational, and performance purposes.

We do not intentionally request unnecessary sensitive information through our general contact form, such as full payment card details, passwords, or government identification numbers, unless there is a legitimate and appropriate need within a specific service and suitable handling procedures are in place.`,
  },
  {
    id: "how-we-use",
    title: "3. How We Use Your Information",
    content: `We may use the information we collect to:

• Respond to inquiries and project requests
• Evaluate project needs and prepare proposals or scopes of work
• Deliver, manage, and improve our services
• Communicate regarding projects, updates, invoices, and payments
• Operate, secure, and improve the website
• Prevent misuse, fraud, or security issues
• Comply with applicable legal and regulatory obligations in the United Arab Emirates

We do not sell or trade your personal information.`,
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: `We only share personal information where necessary and appropriate, which may include:

• Technology, hosting, email, or infrastructure service providers that help us operate our website and services
• Professional advisers or service providers where required
• Government, regulatory, or legal authorities where disclosure is required by law
• Relevant parties in connection with a business restructuring, merger, or transfer, subject to appropriate legal requirements

We do not permit service providers to use your information for their own independent marketing purposes merely because they provide services to us.`,
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: `We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, to provide services, manage our business relationship, or meet legal, accounting, and regulatory requirements.

Some information may be retained for longer where required by law or where necessary to protect legal rights, resolve disputes, or maintain business records.

You may contact us to request deletion of your information, and we will assess the request in accordance with applicable legal and operational obligations.`,
  },
  {
    id: "security",
    title: "6. Data Security",
    content: `We apply appropriate technical, organizational, and administrative measures designed to protect information against unauthorized access, loss, misuse, alteration, or disclosure.

However, no method of electronic transmission or storage can be guaranteed to be completely secure.`,
  },
  {
    id: "cookies",
    title: "7. Cookies & Similar Technologies",
    content: `Our website may use cookies or similar technologies that are necessary to operate the website and its functionality.

At present, we do not use cookies for targeted advertising or cross-site marketing tracking.

If additional analytics or tracking technologies are introduced in the future, this policy may be updated accordingly.`,
  },
  {
    id: "your-rights",
    title: "8. Your Rights",
    content: `Subject to applicable law, you may have the right to request:

• Access to certain personal information we hold about you
• Correction of inaccurate or incomplete information
• Deletion of information where legally permitted
• Restriction of, or objection to, certain processing where applicable
• Information about how your personal data is used

To exercise any applicable rights, contact us at info@novitech.ae.

We may need to verify your identity before processing certain requests.`,
  },
  {
    id: "third-party",
    title: "9. Third-Party Websites & Services",
    content: `Our website or services may contain links to, or integrations with, third-party websites or services.

NoviTech does not control the privacy practices of those third parties. We recommend reviewing their privacy policies before providing personal information to them.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `NoviTech's corporate website and general business services are not directed at individuals under the age of 18.

We do not knowingly collect children's personal information through this website. If we become aware that a child's information has been submitted without an appropriate basis, we will take reasonable steps to address it.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our services, systems, or legal requirements.

The updated version will be published on this page and the "Last updated" date will be revised accordingly.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `For questions or requests relating to privacy or your personal information, please contact NoviTech at info@novitech.ae or through novitech.ae/en/contact.`,
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14">
      <Navbar />

      <div className="max-w-3xl mx-auto py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-accent mb-3">
            Legal
          </p>

          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Privacy Policy
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
            Your privacy matters. This policy explains what we collect, why we collect it, and how we use and protect it.
          </p>
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