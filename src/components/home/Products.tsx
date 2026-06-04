'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { Container } from '@/src/components/ui/Container';
import { BUSINESS_INFO } from '@/src/constants/business';

// ─── Scroll helper ────────────────────────────────────────────────────────────

function scrollToContact() {
  const el = document.getElementById('contact');
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_ELEGANT = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_OUT = [0.0, 0.0, 0.2, 1.0] as [number, number, number, number];

const headingVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_ELEGANT },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_ELEGANT },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// ─── Product Category Data ────────────────────────────────────────────────────

interface ProductCategory {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  accent: string;
  badge: string;
}

const CATEGORIES: ProductCategory[] = [
  {
    id: 'interior-paints',
    title: 'Nerolac Interior Paints',
    description:
      'Premium emulsions and distempers for living rooms, bedrooms and ceilings. Available in matt, satin and high-gloss finishes with exceptional coverage.',
    imageSrc: '/images/products/interior.png',
    accent: '#B85C38',
    badge: 'Most Popular',
  },
  {
    id: 'exterior-paints',
    title: 'Nerolac Exterior Paints',
    description:
      'Weather-resistant, UV-protected coatings that keep your facade looking pristine through every season — rain, heat and humidity.',
    imageSrc: '/images/products/exterior.png',
    accent: '#2F5D50',
    badge: 'All-Weather',
  },
  {
    id: 'premium-emulsions',
    title: 'Nerolac Premium Range',
    description:
      'High-sheen, washable emulsions with superior coverage and long-lasting colour retention. Perfect for premium residential interiors.',
    imageSrc: '/images/products/premium.png',
    accent: '#B85C38',
    badge: 'Premium Range',
  },
  {
    id: 'texture-finishes',
    title: 'Nerolac Texture Finishes',
    description:
      'Create depth and character with sand, stone and designer textures. Transform plain walls into stunning visual statements.',
    imageSrc: '/images/products/texture-finish.png',
    accent: '#2F5D50',
    badge: 'Designer Pick',
  },
  {
    id: 'wood-coatings',
    title: 'Nerolac Wood Coatings',
    description:
      'PU clear coats, wood stains, teak oil, varnishes and melamine finishes that enhance and protect natural wood beautifully.',
    imageSrc: '/images/products/wood-coating.png',
    accent: '#6B3A2A',
    badge: 'Wood Care',
  },
  {
    id: 'synthetic-enamel',
    title: 'Nerolac Synthetic Enamel',
    description:
      'Durable, corrosion-resistant enamel paints for gates, grilles, furniture and metal surfaces. High gloss, long-lasting finish.',
    imageSrc: '/images/products/enamel.png',
    accent: '#374151',
    badge: 'Heavy Duty',
  },
];

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ category }: { category: ProductCategory }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-white transition-shadow duration-300 hover:shadow-[0_16px_40px_-8px_rgba(26,26,26,0.12)]"
    >
      {/* Product image */}
      <div className="relative h-52 w-full overflow-hidden bg-[#F7F7F5]">
        <Image
          src={category.imageSrc}
          alt={`${category.title} — Anvi Paints, Ranchi`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(26,26,26,0.10) 0%, transparent 50%)',
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        <span
          className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white"
          style={{ backgroundColor: category.accent }}
        >
          {category.badge}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Accent rule + title */}
        <div>
          <div
            className="mb-2.5 h-[2px] w-8 rounded-full transition-all duration-300 group-hover:w-12"
            style={{ backgroundColor: category.accent }}
            aria-hidden="true"
          />
          <h3
            className="text-lg font-bold leading-tight tracking-tight text-[#1A1A1A]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {category.title}
          </h3>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-[#5A5A5A]">
          {category.description}
        </p>

        {/* CTA — scrolls to contact */}
        <button
          type="button"
          onClick={scrollToContact}
          className={cn(
            'group/btn mt-1 inline-flex items-center gap-1.5',
            'text-sm font-semibold transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-sm',
          )}
          style={{ color: category.accent }}
          aria-label={`Get product details for ${category.title}`}
        >
          <span className="border-b border-transparent transition-colors duration-200 group-hover/btn:border-current">
            Get Product Details
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
          >
            <path
              d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.article>
  );
}

// ─── Footer CTA strip ─────────────────────────────────────────────────────────

function ProductsFooterCTA() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={footerVariants}
      className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-[#EAEAEA] bg-[#F7F7F5] px-6 py-10 text-center sm:px-12"
    >
      <div className="flex flex-col gap-2">
        <p
          className="text-xl font-bold text-[#1A1A1A] md:text-2xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Can&apos;t find what you&apos;re looking for?
        </p>
        <p className="max-w-md text-sm leading-relaxed text-[#5A5A5A]">
          Visit our store in Ranchi or call us — we&apos;ll help you find the
          perfect Nerolac or Birla Opus product for your space.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        <motion.a
          href={BUSINESS_INFO.phone.link}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.975 }}
          transition={{ duration: 0.15 }}
          className={cn(
            'inline-flex items-center gap-2',
            'h-11 rounded-sm px-6',
            'bg-[#B85C38] text-white text-sm font-semibold tracking-wide',
            'transition-colors duration-200',
            'hover:bg-[#A34E2E] hover:shadow-[0_4px_16px_0_rgba(184,92,56,0.3)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
          )}
          aria-label="Call us"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M14.5 11.5c0 .3-.07.59-.2.87-.14.28-.32.54-.56.76-.38.35-.8.52-1.25.52-.31 0-.65-.07-1.02-.22a10.3 10.3 0 0 1-1.03-.53 16.1 16.1 0 0 1-.98-.72 15.8 15.8 0 0 1-.93-.94 16.4 16.4 0 0 1-.72-.98 10.6 10.6 0 0 1-.52-1.02c-.15-.37-.22-.71-.22-1.02 0-.3.06-.59.19-.86.13-.27.31-.52.55-.74.38-.38.8-.57 1.24-.57.18 0 .36.04.52.11.17.07.32.18.44.34l1.5 2.11c.12.17.21.33.27.48.06.14.1.28.1.4 0 .16-.04.31-.13.46-.08.14-.2.29-.35.44l-.47.49c-.07.07-.1.15-.1.25 0 .05 0 .1.02.15.02.05.04.09.06.13.2.37.43.72.7 1.05.27.33.57.65.89.96.32.3.65.58.99.83.33.24.67.45 1.01.62.04.02.08.04.14.06.06.02.11.03.17.03.11 0 .19-.04.26-.11l.47-.48c.15-.15.3-.27.44-.34.14-.08.29-.12.45-.12.12 0 .25.02.4.08.14.06.3.15.47.27l2.14 1.52c.17.12.28.27.35.45.06.17.1.35.1.54z"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          Call Us Now
        </motion.a>

        <motion.a
          href={BUSINESS_INFO.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.975 }}
          transition={{ duration: 0.15 }}
          className={cn(
            'inline-flex items-center gap-2',
            'h-11 rounded-sm px-6',
            'border border-[#25D366] text-[#128C7E] text-sm font-semibold tracking-wide',
            'transition-all duration-200',
            'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
          )}
          aria-label="Chat on WhatsApp (opens in new tab)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.74 1.01 3.89L0 16l4.24-1A7.97 7.97 0 0 0 8 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.9 11.27c-.17.48-.97.92-1.34.97-.34.05-.77.07-1.25-.08a11.3 11.3 0 0 1-1.13-.42C6.7 10.9 5.4 9.3 5.3 9.17c-.11-.13-.87-1.16-.87-2.21 0-1.06.55-1.58.75-1.79.19-.21.42-.26.56-.26h.41c.13 0 .31-.05.48.37.18.43.61 1.5.66 1.6.05.11.09.24.02.38-.07.14-.11.22-.22.34-.11.12-.23.27-.33.36-.11.1-.22.2-.1.4.12.19.55.9 1.18 1.46.81.72 1.5.94 1.7 1.05.2.1.32.09.44-.05.12-.14.51-.6.65-.8.14-.21.27-.17.46-.1.19.07 1.2.57 1.4.67.21.1.35.15.4.23.05.08.05.47-.12.95z" />
          </svg>
          Chat on WhatsApp
        </motion.a>
      </div>
    </motion.div>
  );
}

// ─── Products Component ───────────────────────────────────────────────────────

/**
 * Products
 *
 * Paint solutions section with 6 Nerolac-branded product cards.
 * "Get Product Details" on each card smooth-scrolls to #contact.
 */
export function Products() {
  return (
    <section
      id="products"
      className="w-full bg-white py-16 md:py-24 border-t border-[#EAEAEA]"
      aria-labelledby="products-heading"
    >
      <Container>
        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B85C38]">
                Nerolac &amp; Birla Opus
              </span>
            </div>
            <h2
              id="products-heading"
              className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Paint Solutions for Every Space
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#5A5A5A] sm:text-right">
            Explore our range of premium paint solutions available through Nerolac and Birla Opus.
          </p>
        </motion.div>

        {/* ── Product Grid ── */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridVariants}
          role="list"
          aria-label="Product categories"
        >
          {CATEGORIES.map((category) => (
            <div key={category.id} role="listitem">
              <ProductCard category={category} />
            </div>
          ))}
        </motion.div>

        {/* ── Footer CTA ── */}
        <ProductsFooterCTA />
      </Container>
    </section>
  );
}
