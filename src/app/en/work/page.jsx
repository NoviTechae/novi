// src/app/en/work/page.jsx

import {
  SiteShell,
  Container,
  PageHero,
  WorkCard,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { projects } from "@/data/en/content";

export const metadata = buildMetadata({
  title: "Our Work | Products Designed and Built by NoviTech",
  description:
    "Explore Glowee and Samar, digital products designed, developed, and launched by NoviTech in the UAE.",
  path: "/en/work",
});

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our work"
        title="Products we've designed, built, and launched."
        intro="We build and run our own products, from the mobile app to the backend, dashboards, and payments. That experience shapes how we build for every client."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-8">
          <WorkCard project={projects.glowee} />
          <WorkCard project={projects.samar} />
        </Container>
      </section>

      <CTASection
        title="Your project could be next."
        text="Whether it's a website, an app, or a system for your team, tell us what you need and we'll help you build it."
      />
    </SiteShell>
  );
}
