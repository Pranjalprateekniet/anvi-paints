import type { HTMLAttributes } from 'react';
import { cn } from '@/src/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type SectionBackground = 'white' | 'soft' | 'accent' | 'dark';
type SectionSpacing = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /**
   * Section background variant.
   * - `white` — pure white (#FFFFFF)
   * - `soft`  — subtle off-white (#F7F7F5)
   * - `accent`— warm terracotta brand accent
   * - `dark`  — deep primary text color, inverted text
   */
  background?: SectionBackground;
  /**
   * Vertical spacing variant.
   * - `sm` — py-8
   * - `md` — py-12 / py-16
   * - `lg` — py-16 / py-24 (default)
   * - `xl` — py-24 / py-32
   * - `none` — no vertical padding
   */
  spacing?: SectionSpacing;
  /** Renders as `<article>` instead of `<section>` */
  as?: 'section' | 'article' | 'div' | 'aside';
  children: React.ReactNode;
}

// ─── Class Maps ───────────────────────────────────────────────────────────────

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'bg-white',
  soft: 'bg-[#F7F7F5]',
  accent: 'bg-[#B85C38] text-white',
  dark: 'bg-[#1A1A1A] text-white',
};

const spacingClasses: Record<SectionSpacing, string> = {
  none: '',
  sm: 'py-8',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Section
 *
 * Semantic page section with background and spacing variants.
 * Nest a `<Container>` inside for horizontal constraints.
 *
 * @example
 * <Section background="soft" spacing="lg">
 *   <Container>
 *     <SectionHeading title="Why Choose Us" />
 *   </Container>
 * </Section>
 */
export function Section({
  background = 'white',
  spacing = 'lg',
  as: Tag = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        backgroundClasses[background],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
