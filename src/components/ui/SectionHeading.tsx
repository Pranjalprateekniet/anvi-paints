'use client';

import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import {
  fadeUpVariants,
  staggerContainerVariants,
  defaultViewport,
} from '@/src/animations/variants';

// ─── Types ────────────────────────────────────────────────────────────────────

type HeadingAlign = 'left' | 'center' | 'right';
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SectionHeadingProps {
  /** Short uppercase label above the heading (e.g. "Our Products") */
  eyebrow?: string;
  /** Main heading text — rendered as `h2` by default */
  title: string;
  /** Optional subtitle / description below the heading */
  subtitle?: string;
  /** Text alignment */
  align?: HeadingAlign;
  /** Heading size variant */
  size?: HeadingSize;
  /** Render a decorative accent rule below the eyebrow */
  showRule?: boolean;
  /** Override the heading HTML element */
  headingLevel?: 'h1' | 'h2' | 'h3';
  /** Additional class names */
  className?: string;
  /** Disable entrance animation (useful above-the-fold) */
  static?: boolean;
}

// ─── Class Maps ───────────────────────────────────────────────────────────────

const alignClasses: Record<HeadingAlign, string> = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
};

const titleSizeClasses: Record<HeadingSize, string> = {
  sm: 'text-2xl md:text-3xl',
  md: 'text-3xl md:text-4xl',
  lg: 'text-4xl md:text-5xl',
  xl: 'text-5xl md:text-6xl',
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * SectionHeading
 *
 * Consistent typographic heading block for all page sections.
 * Animates in with a staggered fade-up by default.
 *
 * @example
 * <SectionHeading
 *   eyebrow="Quality You Can Trust"
 *   title="Our Product Range"
 *   subtitle="From interior emulsions to industrial coatings — we stock it all."
 *   align="center"
 * />
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  size = 'md',
  showRule = true,
  headingLevel: Heading = 'h2',
  className,
  static: isStatic = false,
}: SectionHeadingProps) {
  const containerProps = isStatic
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: defaultViewport,
        variants: staggerContainerVariants,
      };

  const childProps = isStatic
    ? {}
    : { variants: fadeUpVariants };

  return (
    <motion.div
      className={cn(
        'flex flex-col gap-3',
        alignClasses[align],
        className,
      )}
      {...containerProps}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.div
          className="flex items-center gap-3"
          {...childProps}
        >
          {showRule && align === 'left' && (
            <span
              className="inline-block h-px w-8 bg-[#B85C38] flex-shrink-0"
              aria-hidden="true"
            />
          )}
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B85C38]">
            {eyebrow}
          </span>
          {showRule && align === 'right' && (
            <span
              className="inline-block h-px w-8 bg-[#B85C38] flex-shrink-0"
              aria-hidden="true"
            />
          )}
        </motion.div>
      )}

      {/* Title */}
      <motion.div {...childProps}>
        <Heading
          className={cn(
            'font-serif font-bold leading-tight tracking-tight text-[#1A1A1A]',
            titleSizeClasses[size],
          )}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </Heading>
      </motion.div>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-[#5A5A5A] md:text-lg"
          {...childProps}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
