// src/app/en/terms/page.jsx

import LegalPage, { LEGAL_NAME } from "@/components/site/LegalPage";
import { buildMetadata } from "@/components/site/ui";

const base = buildMetadata({
  title: "Terms of Service | NoviTech",
  description:
    "Terms and conditions for the website, services, and digital products of NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C, governed by the laws of the United Arab Emirates.",
  path: "/en/terms",
});

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      "en-AE": "https://www.novitech.ae/en/terms",
      "ar-AE": "https://www.novitech.ae/ar/terms",
    },
  },
};

const sections = [
  {
    id: "parties",
    title: "About these Terms",
    content: `These Terms of Service ("Terms") form a legally binding agreement between you ("you" or the "Client") and ${LEGAL_NAME}, a company licensed in the Emirate of Abu Dhabi, United Arab Emirates, trading as NoviTech ("NoviTech", "we", "us").

These Terms apply to your use of novitech.ae and to the services and digital products we provide. Where a separate written agreement, proposal, statement of work, or invoice has been agreed for a project, that document applies together with these Terms. If there is a conflict, the project-specific document prevails for that project.`,
  },
  {
    id: "acceptance",
    title: "Acceptance",
    content: `By using our website, requesting a proposal, or engaging our services, you confirm that you have read and agree to these Terms.

If you are using our services on behalf of a company or organisation, you confirm that you are authorised to accept these Terms on its behalf. You must have full legal capacity under UAE law to enter into an agreement with us.`,
  },
  {
    id: "services",
    title: "Our services",
    content: `NoviTech provides:

• Website and web application development
• Mobile application development (iOS and Android)
• Custom software development
• Management and business systems
• AI-powered solutions
• Technical consulting related to the above

The scope, timeline, deliverables, price, and any support or warranty terms for each project are defined in the applicable written agreement, proposal, statement of work, or invoice. Work outside that scope may require a written change request and may affect cost and timeline.`,
  },
  {
    id: "electronic",
    title: "Electronic communications and records",
    content: `You agree that proposals, approvals, invoices, notices, and agreements may be issued, accepted, and stored electronically, including by email or electronic signature.

Electronic records and signatures are recognised under Federal Decree-Law No. 46 of 2021 on Electronic Transactions and Trust Services and have the same effect as paper documents, unless the law requires otherwise.`,
  },
  {
    id: "client-responsibilities",
    title: "Client responsibilities",
    content: `You are responsible for providing accurate requirements, timely feedback and approvals, and the content, assets, access, and information reasonably required to complete the project.

You confirm that any content, data, trademarks, or materials you provide to us are lawful and that you have the right to use them. You are responsible for obtaining any licences or approvals your business needs to operate the product we build for you.

Delays caused by missing information, approvals, or client-side dependencies may affect the project timeline.`,
  },
  {
    id: "website-use",
    title: "Acceptable use of our website",
    content: `You agree not to use our website or services to:

• Break any law of the United Arab Emirates, including Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes
• Attempt to gain unauthorised access to our systems, accounts, or data
• Upload or transmit malicious code, spam, or harmful content
• Copy, scrape, or reuse our website content for commercial purposes without permission
• Impersonate any person or misrepresent your affiliation with any person or organisation`,
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    content: `Unless agreed otherwise in writing, once all amounts due for a project have been paid in full, you own the custom deliverables created specifically for you, as defined in the applicable project agreement.

NoviTech retains ownership of its pre-existing materials, including frameworks, internal tools, reusable components, libraries, know-how, and methods developed independently of your project. Where such materials form part of your deliverables, you receive a non-exclusive licence to use them as part of those deliverables.

Third-party and open-source components remain subject to their own licence terms.

All content on novitech.ae, including text, design, logos, and graphics, belongs to NoviTech or its licensors and is protected under UAE intellectual property law.`,
  },
  {
    id: "payment",
    title: "Prices and payment",
    content: `Prices, deposits, milestone payments, and payment schedules are set out in the applicable proposal, agreement, or invoice. Prices are quoted in UAE Dirhams (AED) unless stated otherwise.

If a payment is not made by the agreed due date, NoviTech may pause work, and project timelines may be adjusted accordingly. Unless agreed otherwise in writing, final deliverables may be withheld until all amounts due for the relevant project have been paid.

Refunds and cancellations are covered by our Refund Policy.`,
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: `Both parties will keep confidential any non-public commercial, technical, or personal information shared during the engagement, and use it only for the purpose of the project.

This obligation continues after the project ends, except where disclosure is required by law or the information is already public through no breach of these Terms.

Personal data is handled in line with our Privacy Policy and Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.`,
  },
  {
    id: "warranties",
    title: "Warranties and disclaimers",
    content: `NoviTech performs its work with reasonable skill and care, in line with the specifications agreed for each project.

Any warranty, support, or post-delivery correction period is limited to the duration and scope set out in the applicable project agreement.

We do not guarantee uninterrupted or error-free operation where issues result from third-party services, external platforms, hosting providers, operating system or browser updates, client modifications, or other factors outside our reasonable control.`,
  },
  {
    id: "limitation",
    title: "Limitation of liability",
    content: `To the extent permitted by UAE law, NoviTech's total liability arising from a specific service or project will not exceed the total amount paid by you for that service or project.

To the extent permitted by UAE law, NoviTech is not liable for indirect or consequential loss, including loss of profit, revenue, data, or business opportunity.

Nothing in these Terms limits or excludes liability that cannot be limited or excluded under UAE law, including liability for fraud, gross negligence, or wilful misconduct.`,
  },
  {
    id: "consumer-rights",
    title: "Your statutory rights",
    content: `If you are a consumer, nothing in these Terms affects the rights you have under Federal Law No. 15 of 2020 on Consumer Protection (as amended), its Executive Regulations, or Federal Decree-Law No. 14 of 2023 on Modern Technology-Based Trade.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `Either party may end a project by written notice, subject to the terms of the applicable project agreement.

You remain responsible for paying for work completed, costs incurred, and any non-cancellable third-party commitments made up to the effective termination date. Deliverables due to you will be handed over once those amounts have been paid.

NoviTech may also end a project immediately if you materially breach these Terms or use our services unlawfully.`,
  },
  {
    id: "force-majeure",
    title: "Events outside our control",
    content: `Neither party is responsible for delays or failures caused by events beyond its reasonable control, such as natural disasters, government actions, widespread network or platform outages, or other force majeure events. The affected party will notify the other party and take reasonable steps to limit the impact.`,
  },
  {
    id: "governing-law",
    title: "Governing law and disputes",
    content: `These Terms are governed by the federal laws of the United Arab Emirates and, where applicable, the laws of the Emirate of Abu Dhabi.

Both parties will first try to resolve any dispute in good faith through direct discussion. If the dispute is not resolved within 30 days, it may be referred to the competent courts of the Emirate of Abu Dhabi, unless the parties agree in writing on another method, such as mediation or arbitration.`,
  },
  {
    id: "general",
    title: "General",
    content: `If any part of these Terms is found to be invalid or unenforceable, the rest of the Terms will remain in effect.

These Terms are published in Arabic and English. If there is any inconsistency between the two versions, the Arabic version prevails to the extent required by UAE law.

We may update these Terms from time to time. The updated version will be published on this page with a revised "Last updated" date. Changes do not affect projects already agreed in writing, unless both parties agree.`,
  },
  {
    id: "contact",
    title: "Contact",
    content: `For questions about these Terms, contact NoviTech:

Email: info@novitech.ae
Phone: +971 50 519 5426
Address: Al Ain, Abu Dhabi, United Arab Emirates`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that apply when you use our website or work with NoviTech. Please read them carefully."
      sections={sections}
    />
  );
}
