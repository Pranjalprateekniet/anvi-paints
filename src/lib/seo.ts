import { SITE_URL } from './metadata';

// ─── URL Utilities ────────────────────────────────────────────────────────────

/**
 * Builds an absolute canonical URL from a relative path.
 *
 * @example
 * buildCanonicalUrl('/products/exterior-paints')
 * // → 'https://anvipaints.com/products/exterior-paints'
 */
export function buildCanonicalUrl(path: string): string {
  const normalised = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

/**
 * Strips the site origin from an absolute URL, returning the path.
 *
 * @example
 * toRelativePath('https://anvipaints.com/products')
 * // → '/products'
 */
export function toRelativePath(absoluteUrl: string): string {
  return absoluteUrl.replace(SITE_URL, '') || '/';
}

// ─── Breadcrumbs ─────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href: string;
}

/**
 * Creates a breadcrumb array with a home item prepended.
 *
 * @example
 * buildBreadcrumbs([
 *   { label: 'Products', href: '/products' },
 *   { label: 'Exterior Paints', href: '/products/exterior' },
 * ])
 */
export function buildBreadcrumbs(
  items: BreadcrumbItem[],
): BreadcrumbItem[] {
  return [{ label: 'Home', href: '/' }, ...items];
}

// ─── Sitemap Types ────────────────────────────────────────────────────────────

export type SitemapChangeFreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

export interface SitemapEntry {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: SitemapChangeFreq;
  priority?: number;
}

/**
 * Creates a sitemap entry with sensible defaults.
 */
export function createSitemapEntry(
  path: string,
  options: Omit<SitemapEntry, 'url'> = {},
): SitemapEntry {
  return {
    url: buildCanonicalUrl(path),
    changeFrequency: 'monthly',
    priority: 0.7,
    ...options,
  };
}

// ─── SEO Score Helpers ────────────────────────────────────────────────────────

/** Recommended description length range (characters) */
export const META_DESCRIPTION_LENGTH = { min: 120, max: 160 } as const;

/** Recommended title length range (characters) */
export const META_TITLE_LENGTH = { min: 30, max: 60 } as const;

/**
 * Validates whether a meta description falls within the recommended range.
 * Useful for CMS tooling or server-side validation.
 */
export function isValidMetaDescription(description: string): boolean {
  const len = description.trim().length;
  return (
    len >= META_DESCRIPTION_LENGTH.min && len <= META_DESCRIPTION_LENGTH.max
  );
}

/**
 * Validates whether a meta title falls within the recommended range.
 */
export function isValidMetaTitle(title: string): boolean {
  const len = title.trim().length;
  return len >= META_TITLE_LENGTH.min && len <= META_TITLE_LENGTH.max;
}

/**
 * Truncates a string to fit within a max character limit,
 * appending "…" if truncated.
 */
export function truncateForMeta(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trimEnd()}…`;
}
