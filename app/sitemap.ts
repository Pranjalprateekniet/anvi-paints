import { MetadataRoute } from 'next';
import { SITE_URL } from '@/src/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/terms-of-use`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}