import { MetadataRoute } from 'next';
import { SITE_URL } from '@/src/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/privacy-policy',
    '/terms-of-use',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Including hash routes as requested for sections, though typically sitemaps focus on separate pages.
  // We set lower priority for them as they are part of the homepage.
  const sectionRoutes = [
    '/#products',
    '/#about',
    '/#contact',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...sectionRoutes];
}
