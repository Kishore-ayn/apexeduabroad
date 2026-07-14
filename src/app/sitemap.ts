import type { MetadataRoute } from "next";
import { countries } from "@/lib/data";

// TODO: confirm the live domain before launch and update this base URL.
const siteUrl = "https://apexeduabroad.com";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/destinations",
  "/test-preparation",
  "/success-stories",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const countryEntries = countries.map((country) => ({
    url: `${siteUrl}/destinations/${country.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...countryEntries];
}
