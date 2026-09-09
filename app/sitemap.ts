import type { MetadataRoute } from "next";
import { siteUrl, pagePaths, contentUpdated } from "@/lib/site-content";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...pagePaths, "/cv.pdf"].map(path => ({ url: siteUrl + path, lastModified: path === "/cv.pdf" ? "2026-08-19" : contentUpdated }));
}
