'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { Container } from '@/src/components/ui/Container';

// ─── Scroll helper ────────────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = 64;
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_ELEGANT = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_OUT = [0.0, 0.0, 0.2, 1.0] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_ELEGANT },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const visualVariants = {
  hidden: { opacity: 0, x: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_ELEGANT, delay: 0.2 },
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'interior',
    label: 'Interior Paints',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="1.5" stroke="#B85C38" strokeWidth="1.5" fill="none" />
        <path d="M5 9h8M9 5v8" stroke="#B85C38" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'exterior',
    label: 'Exterior Paints',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 14V7l6-4 6 4v7" stroke="#B85C38" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
        <rect x="6.5" y="9" width="5" height="5" rx="0.5" stroke="#B85C38" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    id: 'premium-solutions',
    label: 'Premium Paint Solutions',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1l1.8 4.6L16 6.5l-3.5 3.4.83 4.84L9 12.35 4.67 14.74l.83-4.84L2 6.5l5.2-.9z" stroke="#B85C38" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'colour-consultation',
    label: 'Colour Consultation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6.5" stroke="#B85C38" strokeWidth="1.5" fill="none" />
        <path d="M6 9a3 3 0 0 1 6 0" stroke="#B85C38" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <circle cx="9" cy="9" r="1.2" fill="#B85C38" />
      </svg>
    ),
  },
];

const TRUST_ITEMS = [
  { value: '10+', label: 'Years of Trust' },
  { value: '20000+', label: 'Happy Customers' },
  { value: '2013', label: 'Est. in Ranchi' },
];

// ─── Brand strip data ─────────────────────────────────────────────────────────

const BRANDS = [
  { name: 'Nerolac', color: '#E87722' },
  { name: 'Birla Opus', color: '#1B3D6F' },
];

// ─── Hero Visual (right panel) ────────────────────────────────────────────────

function HeroVisual() {
  return (
    <motion.div
      variants={visualVariants}
      initial="hidden"
      animate="visible"
      className="relative w-full"
    >
      {/* Main hero image — object-contain so the full store image is always visible */}
      <div className="relative rounded-2xl bg-[#F7F7F5] overflow-hidden">
        {/* Subtle warm vignette overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
          style={{
            background:
              'radial-gradient(ellipse at 30% 70%, rgba(184,92,56,0.06) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <Image
          src="/images/hero/hero-main.png"
          alt="Anvi Paints store — Nerolac and Birla Opus authorized dealer in Ranchi"
          width={1200}
          height={800}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
          quality={90}
          className="w-full h-auto"
        />
      </div>

      {/* Brand strip — floats below the image */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_ELEGANT, delay: 0.75 }}
        className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-2"
        aria-label="Authorised dealer for"
      >
        <span className="text-[10px] uppercase tracking-[0.14em] text-[#5A5A5A] font-medium">
          Authorised dealer:
        </span>
        {BRANDS.map((brand) => (
          <span
            key={brand.name}
            className="text-xs font-bold tracking-wide whitespace-nowrap"
            style={{ color: brand.color, opacity: 0.9 }}
          >
            {brand.name}
          </span>
        ))}
      </motion.div>

      {/* Floating badge — top-left corner of image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_ELEGANT, delay: 0.65 }}
        className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-md border border-[#EAEAEA] backdrop-blur-sm"
      >
        <div className="h-8 w-8 rounded-full bg-[#B85C38]/10 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1l1.8 4.6L15 6.5l-3.5 3.4.83 4.84L8 12.35 3.67 14.74l.83-4.84L1 6.5l5.2-.9z" fill="#B85C38" />
          </svg>
        </div>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-[#1A1A1A]">Authorized Dealer</p>
          <p className="text-[10px] text-[#5A5A5A]">Nerolac & Birla Opus</p>
        </div>
      </motion.div>

      {/* Floating badge — bottom-right corner of image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_ELEGANT, delay: 0.75 }}
        className="absolute bottom-16 right-4 z-20 flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-md border border-[#EAEAEA] backdrop-blur-sm"
      >
        <div className="h-8 w-8 rounded-full bg-[#2F5D50]/10 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2.5 8.5l3.5 3.5 7.5-7.5" stroke="#2F5D50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="leading-tight">
          <p className="text-xs font-semibold text-[#1A1A1A]">Free Consultation</p>
          <p className="text-[10px] text-[#5A5A5A]">Colour experts on-site</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Service Pill ─────────────────────────────────────────────────────────────

function ServicePill({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      variants={fadeInVariants}
      className={cn(
        'flex items-center gap-2 px-3 py-2 rounded-sm',
        'bg-[#F7F7F5] border border-[#EAEAEA]',
        'text-sm text-[#1A1A1A] font-medium',
        'transition-all duration-200',
        'hover:border-[#B85C38]/30 hover:bg-white hover:shadow-sm',
      )}
    >
      {icon}
      <span>{label}</span>
    </motion.div>
  );
}

// ─── Trust Stat ───────────────────────────────────────────────────────────────

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <motion.div variants={fadeUpVariants} className="flex flex-col gap-0.5">
      <span
        className="text-2xl font-bold text-[#1A1A1A] leading-none"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {value}
      </span>
      <span className="text-xs text-[#5A5A5A] font-medium tracking-wide">
        {label}
      </span>
    </motion.div>
  );
}

// ─── Hero Component ───────────────────────────────────────────────────────────

/**
 * Hero
 *
 * Full-viewport hero section for Anvi Paints.
 *
 * Layout:
 * - Left:  Headline, supporting text, service pills, CTAs, trust stats
 * - Right: /images/hero/hero-main.png with floating badges
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      aria-label="Hero — Anvi Paints"
    >
      {/* Background accent blobs — extremely subtle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-24 -right-24 h-[480px] w-[480px] rounded-full opacity-[0.035]"
          style={{ background: 'radial-gradient(circle, #B85C38 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-[0.035]"
          style={{ background: 'radial-gradient(circle, #2F5D50 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#EAEAEA]" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-6 py-12 lg:grid-cols-2 lg:gap-16 lg:py-24">

          {/* ── LEFT COLUMN ──────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-5 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[#B85C38]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B85C38]">
                SERVING RANCHI SINCE 2013
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUpVariants}>
              <h1
                className="text-4xl font-bold leading-[1.08] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ranchi&apos;s Trusted{' '}
                <span className="relative inline-block">
                  Paint Dealer.
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="6"
                    viewBox="0 0 200 6"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 5 Q50 1 100 4 Q150 7 200 3"
                      stroke="#B85C38"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                Since 2013.
              </h1>
            </motion.div>

            {/* Supporting text */}
            <motion.p
              variants={fadeUpVariants}
              className="max-w-[480px] text-[15px] leading-relaxed text-[#5A5A5A] sm:text-lg"
            >
              Authorised dealer for Nerolac &amp; Birla Opus — every shade,
              every finish, every space covered, backed by 10+ years of
              trusted service and expert colour consultation in Ranchi.
            </motion.p>

            {/* Service pills */}
            <motion.div
              className="flex flex-wrap gap-2"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
              }}
            >
              {SERVICES.map((s) => (
                <ServicePill key={s.id} icon={s.icon} label={s.label} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('products')}
                  className={cn(
                    'inline-flex items-center gap-2',
                    'h-12 rounded-sm px-7',
                    'bg-[#B85C38] text-white text-sm font-semibold tracking-wide',
                    'transition-all duration-200',
                    'hover:bg-[#A34E2E] hover:shadow-[0_4px_20px_0_rgba(184,92,56,0.35)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                  )}
                >
                  Explore Products
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.15 }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className={cn(
                    'inline-flex items-center gap-2',
                    'h-12 rounded-sm px-7',
                    'border border-[#1A1A1A] text-[#1A1A1A] text-sm font-semibold tracking-wide',
                    'transition-all duration-200',
                    'hover:bg-[#1A1A1A] hover:text-white',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2',
                  )}
                  aria-label="Get in touch with us"
                >
                  Get in Touch
                </button>
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={fadeInVariants}
              className="h-px w-full max-w-xs bg-[#EAEAEA] my-0 lg:my-0"
            />

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-8"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
            >
              {TRUST_ITEMS.map((item) => (
                <TrustStat key={item.label} value={item.value} label={item.label} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ────────────────────────────────────── */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm lg:max-w-none">
              <HeroVisual />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
