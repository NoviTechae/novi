// src/app/en/page.jsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemVisual from "@/components/SystemVisual";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "NoviTech | Custom Software & Web Development UAE",
  description: "NoviTech builds reliable digital solutions — web apps, mobile, software, AI systems, and games. UAE-based, Emirati-led.",
};

const projects = [
  {
    name: "Glowee",
    category: "Mobile App + Web Platform",
    desc: "A digital solution for the beauty salon industry, featuring a customer mobile app and a web platform for salons to manage bookings, services, customers, rewards, and gifting.",
    image: "/projects/glowee.jpeg",
    placeholder: "GL",
  },
  {
    name: "Samar App",
    category: "Mobile Application",
    desc: "An educational and interactive mobile app designed to support children with autism through a simple user experience and meaningful content on iOS and Android.",
    image: "/projects/samar.png",
    placeholder: "SA",
  },
  // {
  //   name: "Tolerance Pong",
  //   category: "Game",
  //   desc: "An interactive game built around the concept of tolerance — fast, fun, and engaging.",
  //   image: "/projects/pong.jpeg",
  //   placeholder: "TP",
  // },
  // {
  //   name: "NovaStrike",
  //   category: "Game",
  //   desc: "A high-energy action game with sharp mechanics and a bold visual identity.",
  //   image: "/projects/blazblue.png",
  //   placeholder: "NS",
  // },
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
        <section className="mt-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold tracking-tight">NoviTech</h1>
            <div className="w-20 h-[2px] bg-accent my-6" />
            <p className="text-lg max-w-md">
              Building reliable digital solutions for real-world needs.
            </p>
            <p className="mt-3 text-sm text-muted">
              Web • Mobile • Software • Systems • AI
            </p>
            <a
              href="/en/contact"
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
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Who I am</h3>
              <p className="text-muted leading-relaxed">
                NoviTech is a solo-led tech brand based in the UAE,
                focused on building clean, practical digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Mission</h3>
              <p className="text-muted leading-relaxed">
                To design and build reliable digital products
                that solve real problems efficiently and precisely.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Vision</h3>
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
              { title: "Websites & Web Apps", desc: "Fast, clean, and responsive web experiences." },
              { title: "Mobile Applications", desc: "iOS & Android apps built for real users." },
              { title: "Custom Software", desc: "Tailored solutions for specific business needs." },
              { title: "Management Systems", desc: "Internal tools that streamline operations." },
              { title: "AI-powered Solutions", desc: "Smart features and automation powered by AI." },
              { title: "Games & Interactive Experiences", desc: "Engaging digital products and interactive builds." },
            ].map((item) => (
              <div
                key={item.title}
                className="relative border border-border p-8 h-full hover:-translate-y-1 hover:shadow-sm hover:border-accent transition-all duration-200"
              >
                <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent" />
                <p className="text-lg mb-2">{item.title}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-44">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <p className="text-sm text-muted mb-12">Real systems • Real results</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="mt-44">
          <h2 className="text-3xl font-semibold mb-12">Digital Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-border p-8">
              <p className="text-lg mb-2">Product Lines in Development</p>
              <p className="text-sm text-muted">
                NoviTech is also developing internal digital products and reusable systems as part of its long-term product vision.
              </p>
            </div>
            <div className="border border-border p-8">
              <p className="text-lg mb-2">Apps & Interactive Products</p>
              <p className="text-sm text-muted">
                Selected digital products may include standalone apps, interactive experiences, and software tools for web and mobile platforms.
              </p>
            </div>
            <div className="border border-border p-8">
              <p className="text-lg mb-2">Templates, Tools & Resources</p>
              <p className="text-sm text-muted">
                Future offerings may include reusable templates, internal systems, and practical technical resources.
              </p>
            </div>
          </div>
          <p className="text-xs text-muted mt-6">
            This section reflects NoviTech’s broader digital product direction in addition to custom client services.
          </p>
        </section>

      </div>

      <Footer />
    </main>
  );
}