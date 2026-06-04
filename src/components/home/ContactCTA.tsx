'use client';

import { motion } from 'framer-motion';
import { Container } from '@/src/components/ui/Container';
import { cn } from '@/src/lib/utils';
import { BUSINESS_INFO } from '@/src/constants/business';

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_ELEGANT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_ELEGANT },
  },
};

// ─── Info Card ────────────────────────────────────────────────────────────────

function InfoCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-[#EAEAEA] bg-white p-5">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#B85C38]/08">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5A5A5A]">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#1A1A1A]">{value}</p>
        {sub && <p className="text-xs text-[#5A5A5A]">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Contact
 *
 * Conversion-focused contact section with Call, WhatsApp, and Directions CTAs.
 * Address and hours are clearly displayed as trust signals.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F7F7F5] py-16 md:py-24 border-t border-[#EAEAEA]"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── LEFT: Heading + CTAs ─────────────────────────────── */}
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
                Get in Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUpVariants}>
              <h2
                id="contact-heading"
                className="text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] md:text-4xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Need Product Details or Pricing?
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#5A5A5A]">
                Contact us directly for current pricing, colour options, availability and expert
                guidance. Our team will help you choose the right paint solution for your project.
              </p>
            </motion.div>

            {/* Primary CTAs */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-3">
              {/* Call Now */}
              <motion.a
                href={BUSINESS_INFO.phone.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2.5',
                  'h-12 rounded-sm px-7',
                  'bg-[#B85C38] text-white text-sm font-semibold tracking-wide',
                  'transition-all duration-200',
                  'hover:bg-[#A34E2E] hover:shadow-[0_4px_20px_0_rgba(184,92,56,0.35)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                )}
                aria-label="Call us now"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M14.5 11.5c0 .3-.07.59-.2.87-.14.28-.32.54-.56.76-.38.35-.8.52-1.25.52-.31 0-.65-.07-1.02-.22a10.3 10.3 0 0 1-1.03-.53 16.1 16.1 0 0 1-.98-.72 15.8 15.8 0 0 1-.93-.94 16.4 16.4 0 0 1-.72-.98 10.6 10.6 0 0 1-.52-1.02c-.15-.37-.22-.71-.22-1.02 0-.3.06-.59.19-.86.13-.27.31-.52.55-.74.38-.38.8-.57 1.24-.57.18 0 .36.04.52.11.17.07.32.18.44.34l1.5 2.11c.12.17.21.33.27.48.06.14.1.28.1.4 0 .16-.04.31-.13.46-.08.14-.2.29-.35.44l-.47.49c-.07.07-.1.15-.1.25 0 .05 0 .1.02.15.02.05.04.09.06.13.2.37.43.72.7 1.05.27.33.57.65.89.96.32.3.65.58.99.83.33.24.67.45 1.01.62.04.02.08.04.14.06.06.02.11.03.17.03.11 0 .19-.04.26-.11l.47-.48c.15-.15.3-.27.44-.34.14-.08.29-.12.45-.12.12 0 .25.02.4.08.14.06.3.15.47.27l2.14 1.52c.17.12.28.27.35.45.06.17.1.35.1.54z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
                Call Now
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={BUSINESS_INFO.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2.5',
                  'h-12 rounded-sm px-7',
                  'border border-[#25D366] text-[#128C7E] text-sm font-semibold tracking-wide',
                  'transition-all duration-200',
                  'hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_4px_20px_0_rgba(37,211,102,0.25)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
                )}
                aria-label="Chat on WhatsApp (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 1.41.37 2.74 1.01 3.89L0 16l4.24-1A7.97 7.97 0 0 0 8 16c4.42 0 8-3.58 8-8s-3.58-8-8-8zm3.9 11.27c-.17.48-.97.92-1.34.97-.34.05-.77.07-1.25-.08a11.3 11.3 0 0 1-1.13-.42C6.7 10.9 5.4 9.3 5.3 9.17c-.11-.13-.87-1.16-.87-2.21 0-1.06.55-1.58.75-1.79.19-.21.42-.26.56-.26h.41c.13 0 .31-.05.48.37.18.43.61 1.5.66 1.6.05.11.09.24.02.38-.07.14-.11.22-.22.34-.11.12-.23.27-.33.36-.11.1-.22.2-.1.4.12.19.55.9 1.18 1.46.81.72 1.5.94 1.7 1.05.2.1.32.09.44-.05.12-.14.51-.6.65-.8.14-.21.27-.17.46-.1.19.07 1.2.57 1.4.67.21.1.35.15.4.23.05.08.05.47-.12.95z" />
                </svg>
                WhatsApp
              </motion.a>
            </motion.div>

            {/* Get Directions */}
            <motion.div variants={fadeUpVariants}>
              <motion.a
                href={BUSINESS_INFO.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2',
                  'text-sm font-semibold text-[#2F5D50]',
                  'border-b border-transparent transition-colors duration-200',
                  'hover:border-[#2F5D50]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F5D50] focus-visible:ring-offset-2 rounded-sm',
                )}
                aria-label="Get directions on Google Maps (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 1.5A5.5 5.5 0 0 0 2.5 7C2.5 10.5 8 14.5 8 14.5S13.5 10.5 13.5 7A5.5 5.5 0 0 0 8 1.5z"
                    stroke="#2F5D50"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle cx="8" cy="7" r="2" stroke="#2F5D50" strokeWidth="1.3" fill="none" />
                </svg>
                Get Directions on Google Maps
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Store details cards ────────────────────────── */}
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Address */}
            <motion.div variants={fadeUpVariants}>
              <InfoCard
                label="Store Address"
                value="Anvi Paints, Ranchi"
                sub="near SBI Bank, Morabadi, Ranchi, Jharkhand 834008"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M9 1.5A6.5 6.5 0 0 0 2.5 8C2.5 12 9 16.5 9 16.5S15.5 12 15.5 8A6.5 6.5 0 0 0 9 1.5z"
                      stroke="#B85C38"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <circle cx="9" cy="8" r="2.2" stroke="#B85C38" strokeWidth="1.3" fill="none" />
                  </svg>
                }
              />
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={fadeUpVariants}>
              <InfoCard
                label="Business Hours"
                value="Mon – Sat: 9:00 AM – 8:00 PM"
                sub="Sunday: 9:15 AM – 1:30 PM"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="7" stroke="#B85C38" strokeWidth="1.5" fill="none" />
                    <path d="M9 5v4l3 2" stroke="#B85C38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUpVariants}>
              <InfoCard
                label="Phone"
                value={BUSINESS_INFO.phone.display}
                sub="Call or WhatsApp — we respond quickly"
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path
                      d="M16 13c0 .35-.08.69-.23 1.01-.16.33-.37.63-.65.88-.44.41-.92.6-1.44.6-.36 0-.75-.08-1.18-.25a11.9 11.9 0 0 1-1.19-.62 18.7 18.7 0 0 1-1.13-.83 18.3 18.3 0 0 1-1.08-1.09 19 19 0 0 1-.83-1.13A12.3 12.3 0 0 1 7.7 9.4c-.17-.43-.25-.82-.25-1.18 0-.35.07-.68.22-1 .15-.31.36-.6.64-.86.44-.44.92-.66 1.44-.66.2 0 .41.04.6.13.2.08.38.2.52.39l1.73 2.44c.14.2.24.38.31.55.07.17.11.32.11.47 0 .18-.05.36-.15.53-.09.16-.22.33-.4.5l-.55.57c-.08.08-.12.18-.12.3 0 .05 0 .11.02.17.02.06.04.1.07.15.23.43.5.83.81 1.21.31.38.66.75 1.03 1.11.37.35.75.67 1.15.96.38.28.78.52 1.17.72.05.02.09.04.16.07.07.02.13.03.2.03.12 0 .22-.04.3-.13l.54-.56c.18-.17.34-.31.51-.39.16-.09.33-.14.51-.14.14 0 .29.03.46.09.17.07.35.17.54.31l2.47 1.76c.2.14.33.31.4.52.07.2.11.41.11.62z"
                      stroke="#B85C38"
                      strokeWidth="1.3"
                      fill="none"
                    />
                  </svg>
                }
              />
            </motion.div>

            {/* Trust badge */}
            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-3 rounded-xl border border-[#2F5D50]/20 bg-[#2F5D50]/05 px-5 py-4"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#2F5D50]/10">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 1.5L2.5 4.5v4C2.5 12.07 5.3 15.5 9 16.5c3.7-1 6.5-4.43 6.5-8V4.5z"
                    stroke="#2F5D50"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 9l2 2 4-4"
                    stroke="#2F5D50"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1A1A1A]">Authorized Dealer</p>
                <p className="text-xs text-[#5A5A5A]">Official Nerolac &amp; Birla Opus stockist — Ranchi</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
