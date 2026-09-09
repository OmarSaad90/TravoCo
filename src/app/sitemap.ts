import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/lifecycle",
  "/services",
  "/projects",
  "/claims",
  "/methodology",
  "/training",
  "/research",
  "/about",
  "/contact",
  // The executive-brief sheet is deliberately absent: it is a condensed
  // rendering of the article and points its canonical there.
  "/insights/risk-intelligence-imperative",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
