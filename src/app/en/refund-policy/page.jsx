// src/app/en/refund-policy/page.jsx

import LegalPage, { LEGAL_NAME } from "@/components/site/LegalPage";
import { buildMetadata } from "@/components/site/ui";

const base = buildMetadata({
  title: "Refund Policy | NoviTech",
  description:
    "Refund and cancellation policy for services and products of NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C, in line with UAE consumer protection law.",
  path: "/en/refund-policy",
});

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      "en-AE": "https://www.novitech.ae/en/refund-policy",
      "ar-AE": "https://www.novitech.ae/ar/refund-policy",
    },
  },
};

const summary = [
  {
    label: "Cancelled before work starts",
    value: "Deposit refunded, less any costs already incurred",
  },
  {
    label: "Cancelled during the project",
    value: "You pay for completed work and costs incurred; any overpayment is refunded",
  },
  {
    label: "Defects after delivery",
    value: "We fix them within the agreed warranty scope",
  },
  {
    label: "Third-party costs",
    value: "Non-refundable once paid",
  },
  {
    label: "Your statutory rights",
    value: "Always protected under UAE consumer protection law",
  },
];

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: `This Refund Policy applies to services and digital products provided by ${LEGAL_NAME}, trading as NoviTech.

Refunds and cancellations depend on the stage of the project, the work already completed, the costs already incurred, and the terms of the applicable project agreement. Where a project agreement sets out specific refund terms, those terms apply together with this policy.`,
  },
  {
    id: "statutory-rights",
    title: "Your statutory rights",
    content: `Nothing in this policy limits or excludes the rights you have under Federal Law No. 15 of 2020 on Consumer Protection (as amended), its Executive Regulations, or Federal Decree-Law No. 14 of 2023 on Modern Technology-Based Trade.

If a service we provide is defective or does not match what was agreed, we will repair it, redo it, or refund the amount paid for the affected part, as required by law.`,
  },
  {
    id: "deposits",
    title: "Deposits and upfront payments",
    content: `If you cancel a project before work begins, we refund the deposit, less any documented costs already incurred for your project, such as third-party purchases you approved.

Once work has started, the deposit is applied to the work completed and costs incurred, as described below.`,
  },
  {
    id: "milestones",
    title: "Milestone-based projects",
    content: `For projects divided into milestones:

• Payments for completed and approved milestones are non-refundable, except as required by law.
• If a project is cancelled during a milestone, you pay for the work completed and costs incurred up to the cancellation date.
• Any amount you have paid above what is due will be refunded.
• Milestone scope and approval criteria are set out in the project agreement.`,
  },
  {
    id: "cancellation",
    title: "Cancelling a project",
    content: `To cancel a project, notify us in writing at info@novitech.ae. We will then:

1. Prepare a written summary of the work completed and the costs incurred up to the cancellation date.
2. Calculate the amount due, or any amount to be refunded to you.
3. Hand over the deliverables for the completed work once any amount due has been paid.
4. Refund any overpayment within 14 working days of agreeing the final amount, using the original payment method where possible.`,
  },
  {
    id: "defects",
    title: "Defects and warranty",
    content: `Where a project includes a warranty or post-delivery correction period, its length and scope are set out in the project agreement.

During that period, we fix reproducible defects caused by our work that fall within the agreed scope, at no extra cost. Where a defect can be fixed, we will fix it first. If we are unable to fix it within a reasonable time, you may be entitled to a refund for the affected part of the work.

The warranty does not cover issues caused by:

• Changes made by you or third parties
• Third-party services, APIs, hosting providers, or platforms
• Operating system, browser, or app store updates
• Use outside the agreed specifications
• New features or requirements outside the original scope`,
  },
  {
    id: "digital-products",
    title: "Digital products",
    content: `Digital products purchased directly from NoviTech, such as templates, licences, or downloadable software, are generally non-refundable once access, download, or activation has taken place, because they cannot be returned.

If a digital product is faulty, cannot be accessed because of a problem on our side, or is materially different from its description, contact us and we will fix it, replace it, or refund it.

Any product-specific refund terms shown at the time of purchase also apply.`,
  },
  {
    id: "apps",
    title: "Purchases in our apps",
    content: `Purchases made in apps downloaded from the Apple App Store or Google Play that are billed by those platforms follow the platform's refund rules. We cannot process those refunds directly.

Payments made inside our own products, such as bookings or gifts in the Glowee app, are covered by that product's own terms and refund rules.`,
  },
  {
    id: "non-refundable",
    title: "Non-refundable costs",
    content: `Except where required by law, the following are non-refundable once incurred or delivered:

• Third-party costs paid on your behalf, such as domains, hosting, licences, subscriptions, and app store fees
• Completed and approved milestones
• Consultations already provided
• Work completed before cancellation`,
  },
  {
    id: "process",
    title: "How to request a refund",
    content: `To request a refund, email info@novitech.ae or use our contact page, and include:

• Your name and contact details
• Your project, invoice, or payment reference
• The amount concerned and the reason for your request
• Any supporting information

We will acknowledge your request and respond with a decision within 10 working days. Approved refunds are paid within 14 working days, using the original payment method where possible.`,
  },
  {
    id: "complaints",
    title: "Complaints",
    content: `If you are not satisfied with how your request was handled, contact us so we can review it again.

If the matter is still not resolved, you may contact the competent consumer protection authority in the UAE, such as the Abu Dhabi Department of Economic Development or the UAE Ministry of Economy.`,
  },
  {
    id: "governing-law",
    title: "Governing law",
    content: `This Refund Policy is governed by the federal laws of the United Arab Emirates and, where applicable, the laws of the Emirate of Abu Dhabi. Disputes are handled as set out in our Terms of Service.

This policy is published in Arabic and English. If there is any inconsistency, the Arabic version prevails to the extent required by UAE law.`,
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="How cancellations, refunds, and defects are handled for NoviTech services and products."
      summary={summary}
      sections={sections}
    />
  );
}
