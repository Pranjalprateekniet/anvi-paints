import type { Metadata } from 'next';

// ─── Brand Constants ──────────────────────────────────────────────────────────

export const SITE_NAME = 'Anvi Paints & Hardware';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anvipaints.com';
export const SITE_LOCALE = 'en_IN';

/** Default description used when no page-specific description is provided */
export const DEFAULT_DESCRIPTION =
  'Anvi Paints & Hardware — your trusted source for premium paints, coatings, and hardware supplies. Quality you can see, trust you can count on.';

/** Default OG image (relative to /public) */
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

// ─── Metadata Factory ────────────────────────────────────────────────────────

export interface PageMetadataOptions {
  /** Page-level title — will be combined with the site name */
  title?: string;
  /** Page-level description */
  description?: string;
  /** Canonical path (e.g. "/products") — SITE_URL is prepended */
  canonicalPath?: string;
  /** Custom OG image path (relative to /public) */
  ogImage?: string;
  /** Extra keywords */
  keywords?: string[];
  /** Prevent indexing by search engines */
  noIndex?: boolean;
}

/**
 * Generates a complete `Metadata` object for a given page.
 *
 * @example
 * ```ts
 * // app/products/page.tsx
 * export const metadata = createPageMetadata({
 *   title: 'Products',
 *   description: 'Browse our full range of paints and hardware.',
 *   canonicalPath: '/products',
 * });
 * ```
 */
export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  keywords = [],
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = canonicalPath
    ? `${SITE_URL}${canonicalPath}`
    : SITE_URL;
  const absoluteOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage}`;

  const baseKeywords = [
    'paints',
    'hardware',
    'paint supplier',
    'hardware store',
    'premium paints',
    'Anvi Paints',
  ];

  return {
    title: pageTitle,
    description,
    keywords: [...baseKeywords, ...keywords],

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      url: canonicalUrl,
      locale: SITE_LOCALE,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [absoluteOgImage],
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ─── Root Metadata ────────────────────────────────────────────────────────────

/**
 * Root-level metadata for `app/layout.tsx`.
 * Provides site-wide defaults and title template.
 */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description: DEFAULT_DESCRIPTION,

  keywords: [
    'paints',
    'hardware',
    'paint supplier',
    'hardware store',
    'premium paints',
    'coatings',
    'Anvi Paints',
    'Anvi Hardware',
  ],

  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};
