// export default async function sitemap() {
//   const base = "https://novitech.ae";
//   const routes = ["", "/services", "/about", "/contact"];
//   return [
//     ...routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() })),
//   ];
// }

export default function sitemap() {
  const base = "https://novitech.ae";

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
    },
    {
      url: `${base}/ar`,
      lastModified: new Date(),
    },
  ];
}