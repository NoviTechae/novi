// src/app/connect/page.jsx

export const metadata = {
    title: "Connect with NoviTech",
    description:
        "Connect with NoviTech through our website, WhatsApp, Instagram, LinkedIn, or email.",
    robots: {
        index: false,
        follow: true,
    },
};

const links = [
    {
        label: "Website",
        sublabel: "Explore NoviTech",
        href: "https://novitech.ae",
        external: true,
    },
    {
        label: "WhatsApp",
        sublabel: "Start a conversation",
        href: "https://wa.me/971505195426",
        external: true,
    },
    {
        label: "Instagram",
        sublabel: "Follow NoviTech",
        href: "https://www.instagram.com/novitech.ae/",
        external: true,
    },
    {
        label: "LinkedIn",
        sublabel: "Connect with NoviTech",
        href: "https://www.linkedin.com/company/novitech-ae/",
        external: true,
    },
    {
        label: "Email",
        sublabel: "info@novitech.ae",
        href: "mailto:info@novitech.ae",
        external: false,
    },
];

export default function ConnectPage() {
    return (
        <main className="min-h-screen bg-beige text-charcoal px-6 py-12 flex items-center justify-center">
            <div className="w-full max-w-md">

                {/* BRAND */}
                <div className="text-center mb-12">
                    <img
                        src="/header1.png"
                        alt="NoviTech Technology Systems"
                        className="w-full max-w-[420px] mx-auto mb-7"
                    />

                    <p className="text-xs uppercase tracking-[0.24em] text-accent mb-5">
                        UAE-based • Emirati-led
                    </p>

                    <div className="w-16 h-[2px] bg-accent mx-auto my-6" />

                    <p className="text-sm text-muted leading-relaxed">
                        Technology built with purpose.
                    </p>

                </div>

                {/* LINKS */}
                <div className="space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className="group flex items-center justify-between border border-border px-6 py-5 transition-all duration-200 hover:border-accent hover:-translate-y-[2px]"
                        >
                            <div>
                                <p className="font-medium">
                                    {link.label}
                                </p>

                                <p className="text-xs text-muted mt-1">
                                    {link.sublabel}
                                </p>
                            </div>

                            <span
                                className="text-accent transition-transform duration-200 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </a>
                    ))}
                </div>

                {/* FOOTER */}
                <div className="text-center mt-10">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                        Digital Products • Custom Technology Solutions
                    </p>

                    <p className="text-xs text-muted mt-5">
                        © {new Date().getFullYear()} NoviTech
                    </p>
                </div>

            </div>
        </main>
    );
}