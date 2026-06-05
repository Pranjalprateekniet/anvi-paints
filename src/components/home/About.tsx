'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Container } from '@/src/components/ui/Container';

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_ELEGANT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_ELEGANT },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_ELEGANT, delay: 0.15 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  { label: 'Established', value: '2013' },
  { label: 'Location', value: 'Ranchi, Jharkhand' },
  { label: 'Specialisation', value: 'Nerolac & Birla Opus' },
];

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * About
 *
 * Concise "About Us" section — dealer story, trust signals, store image placeholder.
 * Server-friendly as a client component for Framer Motion scroll animations.
 */
export function About() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 md:py-24 border-t border-[#EAEAEA]"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT: Content ────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B85C38]">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUpVariants}>
              <h2
                id="about-heading"
                className="text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ranchi&apos;s Trusted Paint Dealer Since 2013
              </h2>
            </motion.div>

            {/* Body copy */}
            <motion.div variants={fadeUpVariants} className="flex flex-col gap-4 text-[#5A5A5A]">
              <p className="text-base leading-relaxed">
                Anvi Paints has been a trusted name in Ranchi&apos;s paint market
                since 2013. We are proud authorized dealers for{' '}
                <strong className="text-[#E87722] font-semibold">Nerolac</strong> and{' '}
                <strong className="text-[#1B3D6F] font-semibold">Birla Opus</strong> — two of
                India&apos;s most respected paint manufacturers.
              </p>
              <p className="text-base leading-relaxed">
                Whether you&apos;re painting a single room or an entire building, our team provides
                honest, knowledgeable guidance to help you choose the right product, finish, and
                colour for your space — every time.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col rounded-xl border border-[#EAEAEA] bg-[#F7F7F5] px-5 py-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5A5A5A]">
                    {h.label}
                  </span>
                  <span
                    className="mt-0.5 text-base font-bold text-[#1A1A1A]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {h.value}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Brand badges */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-[#5A5A5A] font-medium">Authorized dealer for:</span>
              <span className="rounded-full border border-[#E87722]/30 bg-[#E87722]/08 px-4 py-1.5 text-sm font-bold text-[#E87722]">
                Nerolac
              </span>
              <span className="rounded-full border border-[#1B3D6F]/30 bg-[#1B3D6F]/08 px-4 py-1.5 text-sm font-bold text-[#1B3D6F]">
                Birla Opus
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Store front image ──────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#EAEAEA] bg-[#F7F7F5] shadow-sm">
              {/* Actual store front image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <Image
                  src="/images/about/store-front.png"
                  alt="Anvi Paints storefront in Ranchi — Nerolac and Birla Opus authorized dealer since 2013"
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  className="w-full h-auto"
                />
              </motion.div>

              {/* Corner badge — Since 2013 */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-md border border-[#EAEAEA] backdrop-blur-sm">
                <div className="h-6 w-6 rounded-full bg-[#2F5D50]/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l2.5 2.5 5.5-5.5" stroke="#2F5D50" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-[#1A1A1A]">Since 2013</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
