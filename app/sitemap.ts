import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://heylucy.org/', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://heylucy.org/contact', changeFrequency: 'yearly', priority: 0.5 },
    { url: 'https://heylucy.org/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://heylucy.org/terms', changeFrequency: 'yearly', priority: 0.3 },
  ];
}
