// src/app/en/page.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemVisual from "@/components/SystemVisual";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "NoviTech | Software, Mobile Apps & Digital Solutions UAE",
  description:
    "NoviTech is a UAE-based technology company building mobile apps, web platforms, custom software, management systems, and AI-powered digital solutions.",
};

const services = [
  {
    title: "Websites & Web Apps",
    desc: "Modern, responsive web experiences and platforms built for performance, usability, and real business needs.",
  },
  {
    title: "Mobile Applications",
    desc: "iOS and Android applications designed around real users, practical workflows, and reliable experiences.",
  },
  {
    title: "Custom Software",
    desc: "Custom-built software designed around specific business workflows, requirements, and operational needs.",
  },
  {
    title: "Management Systems",
    desc: "Digital systems and internal platforms designed to organize workflows, data, and day-to-day operations.",
  },
  {
    title: "AI-powered Solutions",
    desc: "AI-powered features, automation, and intelligent systems designed to improve digital workflows and user experiences.",
  },
  {
    title: "Games & Interactive Experiences",
    desc: "Interactive digital products and experiences built with engaging mechanics, thoughtful design, and purposeful technology.",
  },
];

const projects = [
  {
    name: "Glowee",
    category: "Beauty Technology Platform",
    desc: "A UAE beauty platform connecting customers with salons and home-service businesses through bookings, gifting, and rewards, supported by dedicated business and administration platforms.",
    image: "/projects/glowee-icon.png",
    imageFit:"contain",
    placeholder: "GL",
    href:"/en/projects/glowee"
  },
  {
    name: "Samar App",
    category: "Assistive Education Platform",
    desc: "An interactive mobile platform developed to support learning, communication, and structured activities for People of Determination, with dedicated experiences for students, educators, and administrators.",
    image: "/projects/samar.png",
    placeholder: "SA",
    href:"/en/projects/samar"
  },
];

export default function EN() {
  return (
    <main
      id="top"
      className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mt-32 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-accent mb-5">
              UAE-based • Emirati-led
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              NoviTech
            </h1>

            <div className="w-20 h-[2px] bg-accent my-7" />

            <h2 className="text-xl md:text-2xl leading-relaxed max-w-xl">
              Building digital products and custom technology solutions.
            </h2>

            <p className="mt-5 text-sm md:text-base text-muted leading-relaxed max-w-xl">
              We create mobile applications, web platforms, custom software,
              management systems, and AI-powered solutions for real-world
              business needs.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
              Web • Mobile • Software • Systems • AI
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center border border-charcoal bg-charcoal text-beige px-8 py-3 transition hover:bg-transparent hover:text-charcoal"
              >
                Start a project
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-border px-8 py-3 transition hover:border-charcoal"
              >
                Explore our work
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-end text-charcoal">
            <SystemVisual />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-44">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
              About NoviTech
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Technology built with purpose.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t border-border pt-6">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Who we are
              </h3>

              <p className="text-muted leading-relaxed">
                NoviTech is a UAE-based technology company focused on building
                practical, reliable, and scalable digital solutions for
                businesses and real-world needs.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Mission
              </h3>

              <p className="text-muted leading-relaxed">
                To design and build reliable digital products and technology
                solutions that solve real problems efficiently and precisely.
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Vision
              </h3>

              <p className="text-muted leading-relaxed">
                To grow NoviTech into a trusted UAE technology company known
                for building high-quality digital products and scalable
                technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* SERVICES */}
        <section id="services" className="mt-44">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
              Capabilities
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              What we build
            </h2>

            <p className="mt-4 text-sm text-muted max-w-2xl leading-relaxed">
              From customer-facing products to internal business systems,
              NoviTech develops technology around the needs of each project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((item, index) => (
              <div
                key={item.title}
                className="group relative border border-border p-8 md:p-10 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-accent"
              >
                <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent" />

                <div className="flex items-start gap-5">
                  <span className="text-xs text-accent tracking-widest pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg md:text-xl mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
              Selected Work
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
              Products & systems
            </h2>

            <p className="mt-4 text-sm text-muted max-w-2xl leading-relaxed">
              Selected digital products and systems designed and developed by
              NoviTech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                {...project}
              />
            ))}
          </div>
        </section>

        {/* COMPANY APPROACH */}
        <section className="mt-44">
          <div className="border-y border-border py-14 md:py-16">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
                  Our approach
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Built around the problem,
                  <br className="hidden md:block" /> not the template.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                  <p className="text-sm font-medium mb-2">
                    Understand
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    We start with the problem, users, workflows, and actual
                    requirements behind the project.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    Design
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    We structure the experience and system around clarity,
                    usability, and practical operation.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    Build
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    We develop reliable digital solutions using technology
                    suited to the requirements of the product.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    Improve
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    We refine products through testing, real use, feedback,
                    and continuous development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-36 mb-28">
          <div className="border border-border p-10 md:p-14 lg:p-16 relative overflow-hidden">
            <span className="absolute top-0 right-0 w-12 h-12 border-t border-r border-accent" />
            <span className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-accent" />

            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
                Start a project
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Have a project in mind?
              </h2>

              <p className="mt-5 text-muted leading-relaxed max-w-2xl">
                Tell us what you need, and let&apos;s explore how NoviTech can
                turn it into a reliable digital solution.
              </p>

              <a
                href="/en/contact"
                className="inline-flex items-center justify-center mt-8 bg-charcoal text-beige border border-charcoal px-8 py-3 transition hover:bg-transparent hover:text-charcoal"
              >
                Start a project
                <span className="ml-3" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}