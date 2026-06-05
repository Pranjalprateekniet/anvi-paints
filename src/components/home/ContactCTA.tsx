'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Container } from '@/src/components/ui/Container';
import { cn } from '@/src/lib/utils';
import { BUSINESS_INFO } from '@/src/constants/business';

// Dynamically import map to avoid SSR issues with Leaflet window object
const LocationMap = dynamic(() => import('./LocationMap'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[300px] w-full items-center justify-center bg-[#F7F7F5] rounded-xl border border-[#EAEAEA]">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#B85C38] border-t-transparent" />
    </div>
  ),
});

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
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#B85C38]/10">
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

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#F7F7F5] py-16 md:py-24 border-t border-[#EAEAEA]"
      aria-labelledby="contact-heading"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* ── LEFT: Contact Info + CTAs ─────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.div variants={fadeUpVariants}>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B85C38]">
                  Get in Touch
                </span>
              </div>
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

            {/* Store details cards */}
            <div className="flex flex-col gap-4">
              {/* Address */}
              <motion.div variants={fadeUpVariants}>
                <InfoCard
                  label="Store Address"
                  value="Anvi Paints, Ranchi"
                  sub="near SBI Bank, Morabadi, Ranchi, Jharkhand 834008"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 1.5A6.5 6.5 0 0 0 2.5 8C2.5 12 9 16.5 9 16.5S15.5 12 15.5 8A6.5 6.5 0 0 0 9 1.5z" stroke="#B85C38" strokeWidth="1.5" fill="none" />
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
                  sub="Sunday: 10:00 AM – 4:00 PM"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <circle cx="9" cy="9" r="7" stroke="#B85C38" strokeWidth="1.5" fill="none" />
                      <path d="M9 5v4l3 2" stroke="#B85C38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  }
                />
              </motion.div>

              {/* Phone InfoCard */}
              <motion.div variants={fadeUpVariants}>
                <InfoCard
                  label="Phone"
                  value={BUSINESS_INFO.phone.display}
                  sub="Call or WhatsApp — we respond quickly"
                  icon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M16 13c0 .35-.08.69-.23 1.01-.16.33-.37.63-.65.88-.44.41-.92.6-1.44.6-.36 0-.75-.08-1.18-.25a11.9 11.9 0 0 1-1.19-.62 18.7 18.7 0 0 1-1.13-.83 18.3 18.3 0 0 1-1.08-1.09 19 19 0 0 1-.83-1.13A12.3 12.3 0 0 1 7.7 9.4c-.17-.43-.25-.82-.25-1.18 0-.35.07-.68.22-1 .15-.31.36-.6.64-.86.44-.44.92-.66 1.44-.66.2 0 .41.04.6.13.2.08.38.2.52.39l1.73 2.44c.14.2.24.38.31.55.07.17.11.32.11.47 0 .18-.05.36-.15.53-.09.16-.22.33-.4.5l-.55.57c-.08.08-.12.18-.12.3 0 .05 0 .11.02.17.02.06.04.1.07.15.23.43.5.83.81 1.21.31.38.66.75 1.03 1.11.37.35.75.67 1.15.96.38.28.78.52 1.17.72.05.02.09.04.16.07.07.02.13.03.2.03.12 0 .22-.04.3-.13l.54-.56c.18-.17.34-.31.51-.39.16-.09.33-.14.51-.14.14 0 .29.03.46.09.17.07.35.17.54.31l2.47 1.76c.2.14.33.31.4.52.07.2.11.41.11.62z" stroke="#B85C38" strokeWidth="1.3" fill="none" />
                    </svg>
                  }
                />
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-3 mt-2">
              <motion.a
                href={BUSINESS_INFO.phone.link}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2.5',
                  'h-12 rounded-sm px-7 w-full sm:w-auto justify-center',
                  'bg-[#B85C38] text-white text-sm font-semibold tracking-wide',
                  'transition-all duration-200',
                  'hover:bg-[#A34E2E] hover:shadow-[0_4px_20px_0_rgba(184,92,56,0.35)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                )}
                aria-label="Call Anvi Paints now"
              >
                Call Now
              </motion.a>

              <motion.a
                href={BUSINESS_INFO.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2.5',
                  'h-12 rounded-sm px-7 w-full sm:w-auto justify-center',
                  'border border-[#25D366] text-[#128C7E] text-sm font-semibold tracking-wide',
                  'transition-all duration-200',
                  'hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_4px_20px_0_rgba(37,211,102,0.25)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2',
                )}
                aria-label="Chat with Anvi Paints on WhatsApp (opens in new tab)"
              >
                WhatsApp Us
              </motion.a>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              variants={fadeUpVariants}
              className="rounded-xl border border-[#EAEAEA] bg-white p-5 mt-2"
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm">
                {[
                  'Serving Ranchi Since 2013',
                  '20,000+ Happy Customers',
                  'Authorized Nerolac Dealer',
                  'Authorized Birla Opus Dealer',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="8" fill="#2F5D50" fillOpacity="0.1" />
                      <path d="M4.5 8L7 10.5L11.5 5.5" stroke="#2F5D50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Interactive Map ────────────────────────── */}
          <motion.div
            className="flex flex-col h-full w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Store Location Header */}
            <motion.div variants={fadeUpVariants} className="mb-5">
              <h3 className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                Store Location
              </h3>
            </motion.div>

            <motion.div 
              variants={fadeUpVariants} 
              className="w-full relative h-[320px] lg:h-[400px] mb-6"
            >
              <LocationMap />
            </motion.div>

            {/* Get Directions CTA */}
            <motion.div variants={fadeUpVariants} className="flex">
              <motion.a
                href={BUSINESS_INFO.maps.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  'inline-flex items-center gap-2.5',
                  'h-12 rounded-xl px-6 w-full sm:w-auto justify-center',
                  'bg-white border border-[#EAEAEA] text-[#1A1A1A] text-sm font-semibold',
                  'shadow-[0_2px_10px_0_rgba(0,0,0,0.03)] transition-all duration-200',
                  'hover:border-[#B85C38] hover:text-[#B85C38] hover:shadow-[0_4px_20px_0_rgba(184,92,56,0.12)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38]',
                )}
                aria-label="Open in Google Maps (opens in new tab)"
              >
                <span className="text-base" aria-hidden="true">📍</span>
                Open in Google Maps
              </motion.a>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
