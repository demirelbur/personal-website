import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { posts } from "@/content/writing";

const siteUrl = "https://burakdemirel.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${siteUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/research`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), priority: 0.6 },
  ];

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  const blogPages = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
