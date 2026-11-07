// src/app/en/page.jsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SystemVisual from "@/components/SystemVisual";
import {
  SiteShell,
  Container,
  Eyebrow,
  PrimaryButton,
  SecondaryButton,
  WorkCard,
  CTASection,
} from "@/components/site/ui";
import { services, projects } from "@/data/en/content";

export const metadata = {
  title: "NoviTech | Software, Mobile Apps & Digital Solutions UAE",
  description:
    "NoviTech is a UAE-based, Emirati-led technology company building websites, mobile apps, custom software, management systems, and AI-powered solutions.",
  openGraph: {
    title: "NoviTech | Web, Mobile & AI Solutions in the UAE",
    description:
      "NoviTech is a UAE-based, Emirati-led technology company building mobile apps, web platforms, custom software, management systems, and AI-powered solutions.",
    url: "https://www.novitech.ae/en",
    locale: "en_AE",
    siteName: "NoviTech",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 627,
        alt: "NoviTech",
      },
    ],
  },
  alternates: {
    canonical: "https://www.novitech.ae/en",
    languages: {
      "en-AE": "https://www.novitech.ae/en",
      "ar-AE": "https://www.novitech.ae/ar",
    },
  },
};

const facts = [
  { value: "5", label: "Core services" },
  { value: "2", label: "In-house products" },
  { value: "Live", label: "Glowee on the App Store" },
  { value: "2nd", label: "Place, Khalifa Fund & MZN Hub competition" },
];

const reasons = [
  {
    title: "Emirati-led, UAE-based",
    text: "We understand the local market, culture, and language, and we build products for the way people here work and live.",
  },
  {
    title: "We build our own products",
    text: "Glowee and Samar are ours. We know what it takes to design, launch, and run a real product, not just hand over code.",
  },
  {
    title: "End to end in one place",
    text: "Planning, design, development, backend, and launch are handled together, so nothing gets lost between handoffs.",
  },
  {
    title: "Arabic and English by default",
    text: "Right-to-left Arabic and English are built in from the start, not added as an afterthought.",
  },
];

export default function HomeEN() {
  return (
    <SiteShell>
      {/* HERO */}
      <section className="border-b border-border">
        <Container className="grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow className="mb-6">
              UAE-based • Emirati-led technology company
            </Eyebrow>

            <h1 className="text-5xl font-semibold leading-[1.04] tracking-tight md:text-6xl lg:text-7xl">
              Building digital products and custom technology solutions.
            </h1>

            <div className="my-8 h-[2px] w-20 bg-accent" />

            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
              NoviTech designs and develops websites, mobile apps, custom
              software, management systems, and AI-powered solutions for
              businesses in the UAE, and builds products of its own.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <PrimaryButton href="/en/contact">
                Start a project
                <ArrowRight size={15} aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton href="/en/services">
                Explore our services
              </SecondaryButton>
            </div>
          </div>

          <div className="hidden justify-end text-charcoal lg:flex">
            <SystemVisual />
          </div>
        </Container>

        <Container>
          <dl className="grid grid-cols-2 gap-px border-t border-border bg-border md:grid-cols-4">
            {facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`bg-beige py-8 pr-4 md:py-10 ${
                  index === 0 ? "" : index === 2 ? "md:pl-8" : "pl-6 md:pl-8"
                }`}
              >
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight md:text-4xl">
                    {fact.value}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-muted">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-4">What we do</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Services built around real business needs
            </h2>
            <div className="mt-8">
              <SecondaryButton href="/en/services">
                All services
                <ArrowRight size={15} aria-hidden="true" />
              </SecondaryButton>
            </div>
          </div>

          <ul className="border-t border-border">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/en/services/${service.slug}`}
                  className="group flex items-center gap-6 border-b border-border py-6 transition hover:text-accent md:py-7"
                >
                  <span className="w-8 shrink-0 text-xs tracking-widest text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-xl font-medium tracking-tight md:text-2xl">
                    {service.title}
                  </span>
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FEATURED WORK */}
      <section id="projects" className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow className="mb-4">Featured work</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Designed, built, and live on the App Store
              </h2>
            </div>
            <SecondaryButton href="/en/work">
              View all work
              <ArrowRight size={15} aria-hidden="true" />
            </SecondaryButton>
          </div>

          <WorkCard project={projects.glowee} />
        </Container>
      </section>

      {/* WHY NOVITECH */}
      <section id="about" className="bg-charcoal text-beige">
        <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-4">Why NoviTech</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Technology built with purpose.
            </h2>
          </div>

          <div>
            <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason.title} className="border-t border-beige/15 pt-5">
                  <p className="font-medium">{reason.title}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <SecondaryButton href="/en/about" dark>
                About NoviTech
                <ArrowRight size={15} aria-hidden="true" />
              </SecondaryButton>
              <SecondaryButton href="/en/approach" dark>
                How we work
                <ArrowRight size={15} aria-hidden="true" />
              </SecondaryButton>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </SiteShell>
  );
}
