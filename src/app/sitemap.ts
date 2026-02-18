import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://schlecht-movers.ch";

  const deRoutes = [
    "/",
    "/de/umzug",
    "/de/umzug/transport",
    "/de/firmenumzug",
    "/de/raeumung-und-entsorgung",
    "/de/usm-haller",
    "/de/ueber-uns",
    "/de/ueber-uns/unser-team",
    "/de/ueber-uns/kontakt",
    "/de/ueber-uns/referenzen",
  ];

  const enRoutes = [
    "/en/home",
    "/en/privat-relocation",
    "/en/privat-relocation/transport",
    "/en/corporate-relocation",
    "/en/disposal-and-clearance",
    "/en/usm-haller",
    "/en/about-us",
    "/en/about-us/our-team",
    "/en/about-us/contact",
    "/en/about-us/references",
  ];

  const allRoutes = [...deRoutes, ...enRoutes];

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
