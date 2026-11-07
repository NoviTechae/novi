// src/app/en/services/[slug]/page.jsx

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  SiteShell,
  Container,
  Eyebrow,
  SectionHeading,
  PageHero,
  PrimaryButton,
  ServiceIcon,
  ServiceCard,
  WorkCard,
  ProcessGrid,
  CheckList,
  CTASection,
  buildMetadata,
} from "@/components/site/ui";
import { services, projects, processSteps } from "@/data/en/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.title} in the UAE | NoviTech`,
    description: `${service.short} ${service.title} by NoviTech, a UAE-based, Emirati-led technology company.`,
    path: `/en/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = service.related.map((key) => projects[key]).filter(Boolean);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <SiteShell>
      <PageHero eyebrow="Services" title={service.title} intro={service.intro}>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <PrimaryButton href="/en/contact">
            Discuss your project
            <ArrowRight size={15} aria-hidden="true" />
          </PrimaryButton>
          <Link
            href="/en/services"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-charcoal"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            All services
          </Link>
        </div>
      </PageHero>

      {/* WHAT WE BUILD */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What we build" title="What this covers" />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {service.whatWeBuild.map((item) => (
              <div key={item} className="flex items-start gap-4 bg-beige p-7">
                <ServiceIcon name={service.icon} size={18} />
                <p className="pt-3 font-medium leading-6">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WHO + DELIVERABLES */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid gap-16 md:grid-cols-2">
          <div>
            <Eyebrow className="mb-4">Who it&apos;s for</Eyebrow>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight">
              A good fit if you are
            </h2>
            <CheckList items={service.whoFor} />
          </div>

          <div>
            <Eyebrow className="mb-4">What you get</Eyebrow>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight">
              Included in the work
            </h2>
            <CheckList items={service.deliverables} />
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="From first conversation to launch"
          />
          <ProcessGrid steps={processSteps} />
        </Container>
      </section>

      {/* RELATED WORK */}
      {related.length > 0 && (
        <section className="border-t border-border py-20 md:py-28">
          <Container>
            <SectionHeading eyebrow="Related work" title="Built by NoviTech" />
            <div className="grid gap-8">
              {related.map((project) => (
                <WorkCard key={project.name} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ */}
      <section className="border-t border-border py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow className="mb-4">FAQ</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Common questions
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {faq.q}
                  <span
                    className="text-2xl font-light text-accent transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-8 text-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-t border-border py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Other services" title="Explore more" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <ServiceCard
                key={s.slug}
                service={s}
                index={services.findIndex((x) => x.slug === s.slug)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Planning a project like this?"
        text="Tell us what you're planning. We'll review your needs and suggest the right approach before any work begins."
      />
    </SiteShell>
  );
}
