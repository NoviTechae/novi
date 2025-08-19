export default async function sitemap() {
  const base = "https://novitech.ae";
  const routes = ["", "/services", "/about", "/contact"];
  return [
    ...routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() })),
  ];
}
