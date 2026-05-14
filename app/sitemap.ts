import type { MetadataRoute } from "next";

const baseUrl = "https://toach-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/service",
    "/reasons",
    "/cases",
    "/flow",
    "/faq",
    "/company",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}