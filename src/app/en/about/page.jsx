// src/app/en/about/page.jsx

import { ArrowRight } from "lucide-react";
import {
  SiteShell,
  Container,
  Eyebrow,
  SectionHeading,
  PageHero,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { recognition } from "@/data/en/content";

export const metadata = buildMetadata({
  title: "About NoviTech | Emirati-led Technology Company in the UAE",
  description:
    "Learn how NoviTech started with Samar, an award-winning assistive education app, and grew into a UAE technology company building software with a clear purpose.",
  path: "/en/about",
});

const values = [
  {
    title: "Purpose",
    text: "We build technology that solves a real problem and makes a measurable difference for the people who use it.",
  },
  {
    title: "Quality",
    text: "We care about the details: clean interfaces, reliable systems, and products that keep working as they grow.",
  },
  {
    title: "Clarity",
    text: "Simple language, clear scope, and honest updates. You always know where your project stands.",
  },
  {
    title: "Integrity",
    text: "We say what we can deliver, and we deliver what we say. Commitments are agreed in writing.",
  },
  {
    title: "Long-term thinking",
    text: "We design products that can be maintained, improved, and scaled, not just launched.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About NoviTech"
        title="A UAE technology company built around purpose."
        intro="NoviTech for Technology Systems is an Emirati-led technology company based in Al Ain, Abu Dhabi. We design and develop websites, mobile apps, custom software, management systems, and AI-powered solutions, and we build products of our own."
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <Eyebrow className="mb-4">Our story</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              It started with Samar.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              While building Samar, an assistive education app for People of
              Determination, as her graduation project, founder Shouq Alameri
              saw how much a well-built product could change daily life for
              students, families, and educators.
            </p>
            <p>
              Samar went on to win 2nd place in the Khalifa Fund &amp; MZN Hub
              graduation project competition and was presented at the ITT 2025
              international conference.
            </p>
            <p>
              That experience became the foundation of NoviTech: a company that
              builds software with a clear purpose, for businesses that need
              reliable technology and for the community around us.
            </p>
          </div>
        </Container>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-charcoal text-beige">
        <Container className="grid gap-px bg-beige/10 md:grid-cols-2">
          <div className="bg-charcoal py-16 md:py-24 md:pr-16">
            <Eyebrow className="mb-5">Mission</Eyebrow>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              To design and build reliable digital products and technology
              solutions that solve real problems efficiently and precisely, for
              our clients and for the community.
            </p>
          </div>
          <div className="bg-charcoal py-16 md:py-24 md:pl-16">
            <Eyebrow className="mb-5">Vision</Eyebrow>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              To grow NoviTech into a trusted UAE technology company known for
              high-quality digital products and scalable solutions that make a
              real difference.
            </p>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title="Two ways we create value"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-border p-8 md:p-10">
              <Eyebrow className="mb-4">01 · Our own products</Eyebrow>
              <h3 className="text-2xl font-medium tracking-tight">
                Products that address real needs
              </h3>
              <p className="mt-4 leading-8 text-muted">
                We build products for real needs in the UAE and the wider
                community. Glowee, our beauty booking platform, is live on the
                App Store, and Samar, our assistive education platform,
                continues in development.
              </p>
            </div>

            <div className="border border-border p-8 md:p-10">
              <Eyebrow className="mb-4">02 · Client projects</Eyebrow>
              <h3 className="text-2xl font-medium tracking-tight">
                Software built for your business
              </h3>
              <p className="mt-4 leading-8 text-muted">
                We design and develop websites, mobile apps, custom software,
                management systems, and AI solutions for businesses and
                organisations, built around how they actually work.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="What guides every project"
          />

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={value.title} className="bg-beige p-8 md:p-9">
                <span className="text-xs tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-medium">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FOUNDER */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <Eyebrow className="mb-4">Founder</Eyebrow>
            <p className="text-3xl font-semibold tracking-tight md:text-4xl">
              Shouq Alameri
            </p>
            <p className="mt-2 text-muted">
              Founder &amp; CEO, Software Developer
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-muted">
            <p>
              Shouq is an Emirati software developer with a Bachelor&apos;s degree
              in Information Technology (Applications Development) from the
              Higher Colleges of Technology.
            </p>
            <p>
              She designed and built Samar end to end, from the idea and system
              planning to the interface and full mobile development, and later
              founded NoviTech to keep building technology with a clear purpose.
            </p>
            <a
              href="https://www.linkedin.com/in/shouqalameri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base text-charcoal transition hover:text-accent"
            >
              Connect on LinkedIn
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>

      {/* RECOGNITION */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Recognition"
            title="Milestones along the way"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {recognition.map((item) => (
              <div
                key={item.title}
                className="relative border border-border p-8"
              >
                <span className="absolute right-0 top-0 h-6 w-6 border-r border-t border-accent" />
                <h3 className="text-lg font-medium leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-accent">{item.by}</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* COMPANY DETAILS */}
      <section className="border-t border-border py-16">
        <Container className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <Eyebrow className="mb-2">Legal name</Eyebrow>
            <p>NOVITECH FOR TECHNOLOGY SYSTEMS L.L.C S.P.C</p>
          </div>
          <div>
            <Eyebrow className="mb-2">Licence</Eyebrow>
            <p>Registered in Abu Dhabi, United Arab Emirates</p>
          </div>
          <div>
            <Eyebrow className="mb-2">Location</Eyebrow>
            <p>Al Ain, Abu Dhabi, UAE</p>
          </div>
        </Container>
      </section>

      <CTASection />
    </SiteShell>
  );
}
