'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/src/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PageWrapperProps extends HTMLMotionProps<'main'> {
  children: React.ReactNode;
  /**
   * Disables the page entrance animation.
   * Useful for pages that handle their own animations.
   * @default false
   */
  disableAnimation?: boolean;
}

// ─── Page Entrance Variants ───────────────────────────────────────────────────

const pageVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * PageWrapper
 *
 * Top-level `<main>` element for every page.
 * Handles page transition animation and provides consistent
 * baseline styling (flex column, min-height).
 *
 * Place this as the outer wrapper in every `app/*\/page.tsx`.
 *
 * @example
 * // app/page.tsx
 * export default function Home() {
 *   return (
 *     <PageWrapper>
 *       <HeroSection />
 *       <FeaturesSection />
 *     </PageWrapper>
 *   );
 * }
 */
export function PageWrapper({
  children,
  disableAnimation = false,
  className,
  ...props
}: PageWrapperProps) {
  if (disableAnimation) {
    return (
      <main className={cn('flex min-h-screen flex-col', className)}>
        {children}
      </main>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
        className={cn('flex min-h-screen flex-col', className)}
        {...props}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
