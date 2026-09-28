import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thinkram.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/professionals", "/partners", "/membership", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
