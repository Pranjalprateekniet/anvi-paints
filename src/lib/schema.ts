import { SITE_URL, SITE_NAME } from './metadata';

// ─── JSON-LD Types ────────────────────────────────────────────────────────────

/** Base type for all JSON-LD objects */
interface JsonLdBase {
  '@context': 'https://schema.org';
  '@type': string;
}

// ─── LocalBusiness Schema ─────────────────────────────────────────────────────

export interface LocalBusinessSchemaOptions {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
  image?: string | string[];
  sameAs?: string[];
}

/**
 * Generates a LocalBusiness JSON-LD object for structured data.
 *
 * Embed in a page via:
 * ```tsx
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
 * />
 * ```
 */
export function localBusinessSchema(
  options: LocalBusinessSchemaOptions = {},
): JsonLdBase & Record<string, unknown> {
  const {
    name = SITE_NAME,
    description,
    url = SITE_URL,
    telephone,
    email,
    address,
    geo,
    openingHours,
    priceRange = '₹₹',
    image,
    sameAs,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name,
    ...(description && { description }),
    url,
    ...(telephone && { telephone }),
    ...(email && { email }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address,
      },
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours && { openingHoursSpecification: openingHours }),
    priceRange,
    ...(image && { image }),
    ...(sameAs && { sameAs }),
  };
}

// ─── Product Schema ───────────────────────────────────────────────────────────

export interface ProductSchemaOptions {
  name: string;
  description?: string;
  image?: string | string[];
  brand?: string;
  sku?: string;
  price?: number;
  priceCurrency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  url?: string;
}

/**
 * Generates a Product JSON-LD object for structured data.
 */
export function productSchema(
  options: ProductSchemaOptions,
): JsonLdBase & Record<string, unknown> {
  const {
    name,
    description,
    image,
    brand = SITE_NAME,
    sku,
    price,
    priceCurrency = 'INR',
    availability = 'InStock',
    url,
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    ...(description && { description }),
    ...(image && { image }),
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    ...(sku && { sku }),
    ...(price !== undefined && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency,
        availability: `https://schema.org/${availability}`,
        ...(url && { url }),
      },
    }),
  };
}

// ─── BreadcrumbList Schema ────────────────────────────────────────────────────

export interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

/**
 * Generates a BreadcrumbList JSON-LD object.
 */
export function breadcrumbSchema(
  items: BreadcrumbSchemaItem[],
): JsonLdBase & Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── FAQPage Schema ───────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Generates a FAQPage JSON-LD object.
 */
export function faqPageSchema(
  faqs: FaqItem[],
): JsonLdBase & Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ─── JSON-LD Script Component Helper ─────────────────────────────────────────

/**
 * Serialises a JSON-LD object to a string safe for embedding in a
 * `<script type="application/ld+json">` tag.
 */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
