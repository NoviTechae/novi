import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.novitech.ae";

  const routes = [
    "/",
    "/en",
    "/ar",

    "/en/about",
    "/en/services",
    "/en/services/websites-web-apps",
    "/en/services/mobile-apps",
    "/en/services/custom-software",
    "/en/services/management-systems",
    "/en/services/ai-solutions",
    "/en/work",
    "/en/approach",

    "/en/contact",
    "/ar/about",
    "/ar/services",
    "/ar/services/websites-web-apps",
    "/ar/services/mobile-apps",
    "/ar/services/custom-software",
    "/ar/services/management-systems",
    "/ar/services/ai-solutions",
    "/ar/work",
    "/ar/approach",

    "/ar/contact",

    "/en/projects/glowee",
    "/ar/projects/glowee",

    "/en/projects/samar",
    "/ar/projects/samar",

    "/en/terms",
    "/ar/terms",

    "/en/privacy",
    "/ar/privacy",

    "/en/refund-policy",
    "/ar/refund-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/en" || route === "/ar"
        ? 0.9
        : route.includes("/projects/") || route.includes("/services") || route.endsWith("/about")
        ? 0.8
        : route.includes("/contact")
        ? 0.8
        : 0.5,
  }));
}