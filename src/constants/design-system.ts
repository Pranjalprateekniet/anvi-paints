/**
 * Anvi Paints & Hardware — Design System
 *
 * Single source of truth for all design tokens.
 * Use these constants in Tailwind classes, inline styles, and Framer Motion.
 */

// ─── Colors ─────────────────────────────────────────────────────────────────

export const colors = {
  /** Page background */
  background: '#FFFFFF',
  /** Subtle off-white background for alternating sections */
  backgroundSoft: '#F7F7F5',

  /** Primary body text */
  textPrimary: '#1A1A1A',
  /** Secondary / muted text */
  textSecondary: '#5A5A5A',

  /** Dividers and borders */
  border: '#EAEAEA',

  /** Warm terracotta — primary brand accent */
  accentPrimary: '#B85C38',
  /** Deep forest green — secondary brand accent */
  accentSecondary: '#2F5D50',

  /** Confirmation / positive states */
  success: '#4A7C59',
  /** Alerts / cautionary states */
  warning: '#C96A2B',
} as const;

export type ColorToken = keyof typeof colors;

// ─── Typography ─────────────────────────────────────────────────────────────

export const typography = {
  fontHeading: 'Playfair Display, Georgia, serif',
  fontBody: 'Inter, system-ui, -apple-system, sans-serif',

  /** Font-size scale (rem) */
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },

  /** Font-weight scale */
  weights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  /** Line-height scale */
  leading: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  /** Letter-spacing scale */
  tracking: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// ─── Spacing ─────────────────────────────────────────────────────────────────

/**
 * Spacing scale in rem. Mirrors Tailwind's default scale
 * so tokens stay interoperable with utility classes.
 */
export const spacing = {
  0: '0rem',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem',
} as const;

export type SpacingToken = keyof typeof spacing;

// ─── Border Radius ──────────────────────────────────────────────────────────

export const borderRadius = {
  none: '0px',
  sm: '0.125rem',
  DEFAULT: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export type BorderRadiusToken = keyof typeof borderRadius;

// ─── Shadows ─────────────────────────────────────────────────────────────────

export const shadows = {
  none: 'none',
  /** Ultra-subtle lift for cards at rest */
  xs: '0 1px 2px 0 rgba(26, 26, 26, 0.04)',
  /** Standard card shadow */
  sm: '0 1px 3px 0 rgba(26, 26, 26, 0.06), 0 1px 2px -1px rgba(26, 26, 26, 0.04)',
  /** Hover-state elevation */
  md: '0 4px 6px -1px rgba(26, 26, 26, 0.07), 0 2px 4px -2px rgba(26, 26, 26, 0.05)',
  /** Modals, dropdowns */
  lg: '0 10px 15px -3px rgba(26, 26, 26, 0.08), 0 4px 6px -4px rgba(26, 26, 26, 0.05)',
  /** Full-screen overlays */
  xl: '0 20px 25px -5px rgba(26, 26, 26, 0.08), 0 8px 10px -6px rgba(26, 26, 26, 0.05)',
  /** Deep navbar or sticky element shadows */
  '2xl': '0 25px 50px -12px rgba(26, 26, 26, 0.18)',
  /** Crisp inner shadow for inputs */
  inner: 'inset 0 2px 4px 0 rgba(26, 26, 26, 0.05)',
  /** Accent-tinted glow for CTA buttons */
  accent: '0 4px 14px 0 rgba(184, 92, 56, 0.25)',
} as const;

export type ShadowToken = keyof typeof shadows;

// ─── Animation Timings ───────────────────────────────────────────────────────

/**
 * Shared motion tokens for Framer Motion and CSS transitions.
 * All values are tuned for a premium, unhurried feel.
 */
export const animation = {
  /** Duration in seconds (for Framer Motion) */
  duration: {
    instant: 0.1,
    fast: 0.2,
    normal: 0.35,
    slow: 0.5,
    slower: 0.7,
    crawl: 1.0,
  },

  /** Duration in milliseconds (for CSS transition strings) */
  durationMs: {
    instant: '100ms',
    fast: '200ms',
    normal: '350ms',
    slow: '500ms',
    slower: '700ms',
    crawl: '1000ms',
  },

  /** Framer Motion easing curves */
  easing: {
    /** Standard ease for most UI transitions */
    ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    /** Smooth decelerate for elements entering the screen */
    easeOut: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    /** Smooth accelerate for elements leaving the screen */
    easeIn: [0.4, 0.0, 1.0, 1.0] as [number, number, number, number],
    /** Sharp ease for fine micro-interactions */
    sharp: [0.4, 0.0, 0.6, 1.0] as [number, number, number, number],
    /** Gentle spring-like feel without bounciness */
    elegant: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },

  /** Stagger delay between child elements (seconds) */
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },

  /**
   * Canonical Framer Motion transition presets.
   * Import and spread into `transition` props.
   */
  transition: {
    fadeUp: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
    reveal: {
      duration: 0.35,
      ease: [0.0, 0.0, 0.2, 1.0] as [number, number, number, number],
    },
    hover: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
    },
  },

  /**
   * Canonical Framer Motion variant presets.
   * Reserved for future animation orchestration utilities.
   */
  variants: {
    fadeUp: {
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -24 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 24 },
      visible: { opacity: 1, x: 0 },
    },
  },
} as const;

// ─── Z-Index Scale ───────────────────────────────────────────────────────────

export const zIndex = {
  /** Below the default stacking context */
  behind: -1,
  /** Normal document flow */
  base: 0,
  /** Slightly elevated (cards, badges) */
  raised: 10,
  /** Dropdowns, tooltips */
  dropdown: 100,
  /** Sticky elements (e.g. table headers) */
  sticky: 200,
  /** Fixed elements (banners, toasts) */
  fixed: 300,
  /** Overlay backdrops */
  overlay: 400,
  /** Modals and drawers */
  modal: 500,
  /** Navigation bar */
  navbar: 600,
  /** Tooltips above modals */
  tooltip: 700,
  /** Maximum — skip-links, emergency notices */
  max: 9999,
} as const;

export type ZIndexToken = keyof typeof zIndex;

// ─── Container widths ────────────────────────────────────────────────────────

export const container = {
  /** Max content width for standard layouts */
  maxWidth: '1280px',
  /** Narrow content width for text-heavy sections */
  narrow: '768px',
  /** Wide layout for data-rich pages */
  wide: '1440px',
  /** Horizontal padding for the container at each breakpoint */
  padding: {
    mobile: '1rem',       // 16px
    tablet: '1.5rem',     // 24px
    desktop: '2rem',      // 32px
    wide: '2.5rem',       // 40px
  },
} as const;

// ─── Breakpoints ─────────────────────────────────────────────────────────────

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type BreakpointToken = keyof typeof breakpoints;
