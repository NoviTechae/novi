import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SystemVisual from "@/components/SystemVisual";

export default function EN() {
  return (
    <main
      id="top"
      className="min-h-screen bg-beige text-charcoal px-6 md:px-10 py-10 md:py-14"
    >
      <Navbar />

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">NoviTech</h1>

            <div className="w-20 h-[2px] bg-accent my-6" />

            <p className="text-lg max-w-md">
              Building reliable digital solutions for real-world needs.
            </p>

            <p className="mt-3 text-sm text-muted">
              Web • Software • Systems • AI
            </p>

            <a
              href="#contact"
              className="inline-block mt-10 border border-charcoal px-8 py-3 hover:bg-charcoal hover:text-beige transition"
            >
              Start a project
            </a>
          </div>

          <div className="hidden md:flex justify-end text-charcoal">
            <SystemVisual />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">About</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Who I am
              </h3>
              <p className="text-muted leading-relaxed">
                NoviTech is a solo-led tech brand based in the UAE,
                focused on building clean, practical digital solutions.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To design and build reliable digital products
                that solve real problems efficiently and precisely.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">
                Vision
              </h3>
              <p className="text-muted leading-relaxed">
                To grow NoviTech into a trusted technical partner
                for high-quality and scalable digital projects.
              </p>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* SERVICES */}
        <section id="services" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">What I build</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Websites & Web Apps",
              "Custom Software",
              "Management Systems",
              "AI-powered Solutions",
            ].map((item) => (
              <div
                key={item}
                className="
                  relative border border-border p-8 h-full
                  hover:-translate-y-1 hover:shadow-sm hover:border-accent
                  transition-all duration-200
                "
              >
                <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent" />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">Projects</h2>

          <div className="border border-border p-12 text-muted">
            <p className="text-lg">
              Selected real-world projects will be published here.
            </p>
            <p className="text-sm mt-2">
              Real systems • Real results
            </p>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">
            Digital Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <p className="text-lg mb-2">
                Internal tools & templates
              </p>
              <p className="text-sm text-muted">
                Reusable systems, starter kits, and technical tools
                built for efficiency. Currently in development.
              </p>
            </div>

            <div className="border border-border p-8">
              <p className="text-lg mb-2">
                Educational resources
              </p>
              <p className="text-sm text-muted">
                Practical guides and technical resources
                for developers and founders. Coming soon.
              </p>
            </div>
          </div>

          <p className="text-xs text-muted mt-6">
            Products are developed internally based on real project needs and experience.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-48">
          <div className="border border-border p-12 max-w-3xl">
            <h2 className="text-3xl font-semibold mb-2">
              Start a project
            </h2>
            <p className="text-sm text-muted mb-6">
              Usually replies within 24 hours.
            </p>
            <ContactForm />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}