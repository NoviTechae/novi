// src/app/en/contact/page.jsx

import ContactForm from "@/components/ContactForm";
import {
  SiteShell,
  Container,
  Eyebrow,
  PageHero,
  buildMetadata,
} from "@/components/site/ui";

const base = buildMetadata({
  title: "Contact Us | NoviTech",
  description:
    "Get in touch with NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C for websites, mobile apps, custom software, management systems, and AI solutions in the UAE.",
  path: "/en/contact",
});

export const metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    languages: {
      "en-AE": "https://www.novitech.ae/en/contact",
      "ar-AE": "https://www.novitech.ae/ar/contact",
    },
  },
};

const contactInfo = [
  {
    label: "Email",
    value: "info@novitech.ae",
    href: "mailto:info@novitech.ae",
  },
  {
    label: "WhatsApp",
    value: "+971 50 519 5426",
    href: "https://wa.me/971505195426",
  },
  {
    label: "Phone",
    value: "+971 50 519 5426",
    href: "tel:+971505195426",
  },
  { label: "Address", value: "Al Ain, Abu Dhabi, United Arab Emirates" },
  {
    label: "Working hours",
    value: "Mon – Thu: 9:00 AM – 6:00 PM\nFri: 8:00 AM – 12:00 PM (UAE time)",
  },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/novitech-ae/" },
  { label: "Instagram", href: "https://www.instagram.com/novitech.ae" },
  { label: "TikTok", href: "https://www.tiktok.com/@novitech.ae" },
];

const nextSteps = [
  "We review your message and reply, usually within 24 hours.",
  "We arrange a short call to understand your needs.",
  "We send a clear proposal with scope, timeline, and cost.",
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Tell us what you need, whether it's a website, an app, a system for your team, or just an idea you want to explore. We typically reply within 24 hours."
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Details */}
          <div>
            <Eyebrow className="mb-6">Our details</Eyebrow>

            <dl className="border-t border-border">
              {contactInfo.map((item) => (
                <div key={item.label} className="border-b border-border py-5">
                  <dt className="mb-1 text-xs uppercase tracking-widest text-accent">
                    {item.label}
                  </dt>
                  <dd className="whitespace-pre-line font-medium">
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="transition hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-widest text-accent">
                Follow us
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-charcoal p-8 text-beige">
              <Eyebrow className="mb-5">What happens next</Eyebrow>
              <ol className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex gap-4 text-sm leading-6">
                    <span className="text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-beige/80">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="border border-border p-6 md:p-10">
            <Eyebrow>Send a message</Eyebrow>
            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
