import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://novitech.ae";

  const routes = [
    "/",
    "/en",
    "/ar",

    "/en/contact",
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
        : route.includes("/projects/")
        ? 0.8
        : route.includes("/contact")
        ? 0.8
        : 0.5,
  }));
}