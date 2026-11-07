// src/app/en/approach/page.jsx

import {
  SiteShell,
  Container,
  Eyebrow,
  SectionHeading,
  PageHero,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { processSteps } from "@/data/en/content";

export const metadata = buildMetadata({
  title: "Our Approach | How NoviTech Plans, Builds, and Launches Projects",
  description:
    "See how NoviTech works: discovery, clear scope, design, development, testing, launch, and support for every project.",
  path: "/en/approach",
});

const stepDetails = [
  ["Understanding your business and goals", "Your users and how they work today", "The problem to solve and what success looks like"],
  ["Features and priorities", "Timeline and milestones", "Scope and terms agreed in writing"],
  ["User flows and structure", "Interface design", "Arabic and English layouts where needed"],
  ["Development in clear stages", "Progress shared along the way", "Backend, integrations, and admin tools"],
  ["Testing across devices and scenarios", "Fixes before release", "Deployment and store submission"],
  ["Fixes and updates", "Improvements based on real use", "New features as you grow"],
];

const principles = [
  {
    title: "Problem first",
    text: "We start with the problem and the people affected by it. The technology comes second.",
  },
  {
    title: "Clarity over complexity",
    text: "Simple, clear products are easier to use, easier to maintain, and easier to grow.",
  },
  {
    title: "Honest communication",
    text: "Clear scope, realistic timelines, and straightforward updates throughout the project.",
  },
  {
    title: "Built to last",
    text: "We choose solid foundations so your product can be maintained and extended over time.",
  },
];

export default function ApproachPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our approach"
        title="Built around the problem, not the template."
        intro="Good software starts long before the first line of code. Our process is designed to understand your needs, agree on a clear plan, and deliver a product that works in the real world."
      />

      {/* STEPS */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="The process"
            title="Six steps from idea to a working product"
          />

          <ol className="border-t border-border">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-[0.2fr_0.8fr_1fr] md:gap-10 md:py-12"
              >
                <span className="text-4xl font-semibold text-accent md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-8 text-muted">{step.text}</p>
                </div>
                <ul className="space-y-3 md:pt-2">
                  {stepDetails[index].map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-charcoal text-beige">
        <Container className="py-20 md:py-28">
          <SectionHeading
            dark
            eyebrow="Principles"
            title="What we hold ourselves to"
          />

          <div className="grid gap-px bg-beige/10 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="bg-charcoal p-8 md:p-10">
                <Eyebrow className="mb-4">{item.title}</Eyebrow>
                <p className="text-xl leading-snug md:text-2xl">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's start with a conversation."
        text="Tell us about your idea or the problem you're facing. The first step is simply understanding what you need."
      />
    </SiteShell>
  );
}
