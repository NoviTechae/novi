// src/app/en/privacy/page.jsx

import LegalPage, { LEGAL_NAME } from "@/components/site/LegalPage";
import { buildMetadata } from "@/components/site/ui";

const base = buildMetadata({
  title: "Privacy Policy | NoviTech",
  description:
    "How NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C collects, uses, shares, and protects personal data, in line with UAE Federal Decree-Law No. 45 of 2021.",
  path: "/en/privacy",
});

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      "en-AE": "https://www.novitech.ae/en/privacy",
      "ar-AE": "https://www.novitech.ae/ar/privacy",
    },
  },
};

const sections = [
  {
    id: "overview",
    title: "Who we are",
    content: `${LEGAL_NAME}, trading as NoviTech ("NoviTech", "we", "us"), is a technology company licensed in the Emirate of Abu Dhabi, United Arab Emirates.

This Privacy Policy explains how we collect, use, share, and protect personal data when you visit novitech.ae, contact us, or use our services. We are the controller of the personal data described in this policy.

We process personal data in line with Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and other applicable UAE laws.

This policy covers our company website and services. Our own products, such as the Glowee app, have their own privacy policies.`,
  },
  {
    id: "information-collected",
    title: "Information we collect",
    content: `We collect only the information we need:

• Contact details: your name, email address, and phone number when you contact us or submit our contact form.
• Project information: project type, requirements, files, and other details you choose to share about your enquiry or project.
• Business records: proposals, agreements, invoices, payment references, and correspondence when you work with us.
• Technical data: basic server logs, such as IP address, browser type, and pages requested, used for security and to keep the website running.

Please do not send sensitive personal data, such as health information, payment card numbers, passwords, or government ID numbers, through our contact form. If a project requires this kind of data, we will agree on a suitable and secure way to handle it.`,
  },
  {
    id: "how-we-use",
    title: "How and why we use it",
    content: `We use personal data to:

• Respond to your enquiries and prepare proposals
• Deliver, manage, and support the services you request
• Send project communications, invoices, and payment reminders
• Keep our website and systems secure and working properly
• Meet our legal, accounting, and regulatory obligations

We process your data with your consent (for example, when you submit our contact form), where it is necessary to enter into or perform a contract with you, or where processing is needed to comply with UAE law, as permitted under Federal Decree-Law No. 45 of 2021.

You can withdraw your consent at any time. This does not affect processing already carried out.

We do not sell your personal data, and we do not use it for automated decisions that have legal or similarly significant effects on you.`,
  },
  {
    id: "data-sharing",
    title: "Who we share it with",
    content: `We share personal data only where necessary:

• Service providers that help us run our website and business, including website hosting (Vercel), email delivery for our contact form (Resend), and email and document tools (Google Workspace)
• Professional advisers, such as accountants or lawyers, where needed
• Government, regulatory, or judicial authorities where disclosure is required by UAE law

Our service providers may only use your data to provide services to us, and not for their own marketing.`,
  },
  {
    id: "transfers",
    title: "Transfers outside the UAE",
    content: `Some of our service providers store or process data on servers outside the United Arab Emirates.

Where personal data is transferred outside the UAE, we do so in line with the cross-border transfer requirements of Federal Decree-Law No. 45 of 2021, and we use providers that apply appropriate security and contractual safeguards.`,
  },
  {
    id: "data-retention",
    title: "How long we keep it",
    content: `We keep personal data only for as long as needed for the purpose it was collected:

• Enquiries that do not lead to a project are kept for up to 12 months, then deleted.
• Project and client records are kept for the duration of the business relationship and afterwards for as long as required for legal, tax, and accounting purposes under UAE law.

We may keep certain information longer where needed to resolve disputes or protect our legal rights.`,
  },
  {
    id: "security",
    title: "How we protect it",
    content: `We use appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, alteration, or disclosure. These include encrypted connections (HTTPS), access controls, and limiting access to people who need it.

No method of electronic transmission or storage is completely secure. If a personal data breach occurs that is likely to affect your privacy, we will take the steps required by UAE law, including notifying the competent authority and affected individuals where required.`,
  },
  {
    id: "cookies",
    title: "Cookies",
    content: `Our website does not currently use advertising, tracking, or analytics cookies.

Our hosting provider may use strictly necessary technical cookies or similar technologies to deliver the website securely. These do not identify you personally.

If we introduce analytics or other non-essential cookies in the future, we will update this policy and ask for your consent where required.`,
  },
  {
    id: "your-rights",
    title: "Your rights",
    content: `Under Federal Decree-Law No. 45 of 2021, you have the right to:

• Request information about, and a copy of, the personal data we hold about you
• Ask us to correct inaccurate or incomplete data
• Ask us to delete your data, where we are not required to keep it by law
• Ask us to restrict or stop processing your data in certain cases
• Receive your data in a structured, machine-readable format, where applicable
• Withdraw your consent at any time

To make a request, email info@novitech.ae. We may need to verify your identity first, and we will respond within the timeframe required by law.

If you are not satisfied with our response, you may submit a complaint to the UAE Data Office.`,
  },
  {
    id: "third-party",
    title: "Links to other websites",
    content: `Our website links to third-party websites and services, such as the Apple App Store, LinkedIn, Instagram, TikTok, and WhatsApp. We are not responsible for their privacy practices, and we recommend reading their privacy policies.`,
  },
  {
    id: "children",
    title: "Children",
    content: `Our website and services are intended for businesses and adults, and are not directed at children under 18.

We do not knowingly collect personal data from children through this website. If you believe a child has sent us personal data, please contact us and we will delete it.`,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    content: `We may update this Privacy Policy to reflect changes in our services, the tools we use, or the law. The latest version will always be published on this page with a revised "Last updated" date.

This policy is published in Arabic and English. If there is any inconsistency, the Arabic version prevails to the extent required by UAE law.`,
  },
  {
    id: "contact",
    title: "Contact us",
    content: `For any privacy question or request, contact NoviTech:

Email: info@novitech.ae
Phone: +971 50 519 5426
Address: Al Ain, Abu Dhabi, United Arab Emirates`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How NoviTech collects, uses, and protects your personal data, and the rights you have under UAE law."
      sections={sections}
    />
  );
}
