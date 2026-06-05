'use client';

/**
 * Anvi Paints — Framer Motion Animation Variants
 *
 * Centralised variant + transition presets consumed across all components.
 * Architecture is prepared for future cursor effects and paint-splash interactions
 * without implementing them yet.
 */

import type { Variants, Transition } from 'framer-motion';

// ─── Transition Presets ──────────────────────────────────────────────────────

/** Standard fade-up entrance — use for sections and cards */
export const fadeUpTransition: Transition = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1],
};

/** Quick reveal for UI chrome (navbar links, badges) */
export const revealTransition: Transition = {
  duration: 0.3,
  ease: [0.0, 0.0, 0.2, 1.0],
};

/** Smooth hover micro-interaction */
export const hoverTransition: Transition = {
  duration: 0.2,
  ease: [0.25, 0.1, 0.25, 1.0],
};

/** Slow, elegant entrance for hero and page-level elements */
export const elegantTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

// ─── Variant Presets ─────────────────────────────────────────────────────────

/** Gentle upward fade — primary entrance animation */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

/** Pure opacity reveal */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: revealTransition,
  },
};

/** Slide in from the left */
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeUpTransition,
  },
};

/** Slide in from the right */
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: fadeUpTransition,
  },
};

/** Container variant — orchestrates staggered children */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Fast stagger for dense lists */
export const fastStaggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/** Slow stagger for large feature grids */
export const slowStaggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// ─── Viewport Defaults ───────────────────────────────────────────────────────

/**
 * Shared `viewport` prop defaults for `whileInView` animations.
 * Trigger animations once when 20% of the element is visible.
 */
export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

