'use client';

import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_ELEGANT = [0.16, 1, 0.3, 1] as [number, number, number, number];

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
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

// ─── Feature Data ─────────────────────────────────────────────────────────────

interface Feature {
  id: string;
  value: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
}

const FEATURES: Feature[] = [
  {
    id: 'trust',
    value: '10+',
    title: 'Years of Trust',
    description:
      'Serving Ranchi since 2013, we have built lasting relationships with thousands of homeowners and contractors.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 2l2.6 6.6L23 9.5l-5 4.9 1.18 6.9L14 17.8 8.82 21.3 10 14.4 5 9.5l6.4-.9z"
          stroke="#B85C38"
          strokeWidth="1.8"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    accent: '#B85C38',
  },
  {
    id: 'authorized',
    value: '✓',
    title: 'Authorized Paint Dealer',
    description:
      'Official authorized dealer for Nerolac and Birla Opus — you get genuine products with manufacturer warranty and support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="#2F5D50" strokeWidth="1.8" fill="none" />
        <path
          d="M9 14l3.5 3.5 6.5-6.5"
          stroke="#2F5D50"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    accent: '#2F5D50',
  },
  {
    id: 'customers',
    value: '20000+',
    title: 'Happy Customers',
    description:
      'Over five thousand satisfied customers across Ranchi have trusted us for their painting needs — residential and commercial.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="4" stroke="#B85C38" strokeWidth="1.8" fill="none" />
        <circle cx="20" cy="10" r="4" stroke="#B85C38" strokeWidth="1.8" fill="none" />
        <path
          d="M3 24c0-3.87 3.13-7 7-7s7 3.13 7 7"
          stroke="#B85C38"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M20 17c2.76 0 5 2.24 5 5"
          stroke="#B85C38"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    accent: '#B85C38',
  },
  {
    id: 'guidance',
    value: '🎨',
    title: 'Expert Colour Guidance',
    description:
      'Not sure which colour or finish to pick? Our in-store colour experts guide you from palette selection to perfect application.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#2F5D50" strokeWidth="1.8" fill="none" />
        <circle cx="14" cy="14" r="4" stroke="#2F5D50" strokeWidth="1.5" fill="none" />
        <path
          d="M14 4v3M14 21v3M4 14h3M21 14h3"
          stroke="#2F5D50"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    accent: '#2F5D50',
  },
];

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(26,26,26,0.10)' }}
      transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-[#EAEAEA] bg-white p-8"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-8 right-8 h-[3px] rounded-b-full transition-all duration-300 group-hover:left-6 group-hover:right-6"
        style={{ backgroundColor: feature.accent }}
        aria-hidden="true"
      />

      {/* Icon container */}
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${feature.accent}12` }}
      >
        {feature.icon}
      </div>

      {/* Value / stat */}
      <div>
        <span
          className="block text-3xl font-bold leading-none tracking-tight"
          style={{ color: feature.accent, fontFamily: 'var(--font-heading)' }}
        >
          {feature.value}
        </span>
        <h3
          className="mt-1.5 text-lg font-bold leading-snug tracking-tight text-[#1A1A1A]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-[#5A5A5A]">{feature.description}</p>
    </motion.article>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * WhyChooseUs
 *
 * "Why Choose Anvi Paints" section with 4 feature cards.
 * Showcases trust signals: years in business, authorization, customer count, guidance.
 */
export function WhyChooseUs() {
  return (
    <section
      className="w-full bg-[#F7F7F5] py-16 md:py-24 border-t border-[#EAEAEA]"
      aria-labelledby="why-choose-us-heading"
    >
      <Container>
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
          className="mb-12 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B85C38]">
              Why Us
            </span>
            <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
          </div>
          <h2
            id="why-choose-us-heading"
            className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Why Choose Anvi Paints
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#5A5A5A]">
            Over a decade of trusted service, genuine products, and expert guidance — all under one roof in Ranchi.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridVariants}
          role="list"
          aria-label="Key features"
        >
          {FEATURES.map((feature) => (
            <div key={feature.id} role="listitem">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
