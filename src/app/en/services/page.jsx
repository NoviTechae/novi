// src/app/en/services/page.jsx

import {
  SiteShell,
  Container,
  SectionHeading,
  PageHero,
  ServiceCard,
  ProcessGrid,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { services, processSteps } from "@/data/en/content";

export const metadata = buildMetadata({
  title: "Services | Web, Mobile, Software & AI Development in the UAE | NoviTech",
  description:
    "Websites and web apps, mobile applications, custom software, management systems, and AI-powered solutions, designed and built by NoviTech in the UAE.",
  path: "/en/services",
});

const engagement = [
  {
    title: "New product",
    text: "You have an idea for an app, platform, or system. We help shape it, plan it, and build it from the ground up.",
  },
  {
    title: "Improve what exists",
    text: "You already have a website or system that needs a redesign, new features, or a more modern foundation.",
  },
  {
    title: "Ongoing support",
    text: "After launch, we can continue with updates, fixes, and new features as your business grows.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Technology built around how your business works."
        intro="We design and develop digital products end to end, from planning and interface design to development, launch, and support. Every project is shaped around a real need, not a template."
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Ways to work with us"
            title="Wherever you are, we can start there"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {engagement.map((item) => (
              <div key={item.title} className="border border-border p-8">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title="The same clear process for every service"
          />
          <ProcessGrid steps={processSteps} />
        </Container>
      </section>

      <CTASection />
    </SiteShell>
  );
}
