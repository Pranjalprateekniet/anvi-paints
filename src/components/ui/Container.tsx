import type { HTMLAttributes } from 'react';
import { cn } from '@/src/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type ContainerSize = 'narrow' | 'default' | 'wide' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Max-width variant:
   * - `narrow`  — 768 px  (text-heavy / article content)
   * - `default` — 1280 px (standard page layout)
   * - `wide`    — 1440 px (data-rich / full-bleed grids)
   * - `full`    — 100%    (truly full-width, no max-width constraint)
   */
  size?: ContainerSize;
  /**
   * Whether to apply symmetric horizontal padding.
   * Disable when the parent already provides padding.
   * @default true
   */
  padded?: boolean;
  children: React.ReactNode;
}

// ─── Size Map ─────────────────────────────────────────────────────────────────

const sizeClasses: Record<ContainerSize, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-[1280px]',
  wide: 'max-w-[1440px]',
  full: 'max-w-none',
};

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Container
 *
 * Provides responsive horizontal constraints and consistent side gutters.
 * All layout sections should nest their content inside a Container.
 *
 * @example
 * <Container size="narrow" className="py-16">
 *   <p>Readable long-form text.</p>
 * </Container>
 */
export function Container({
  size = 'default',
  padded = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        sizeClasses[size],
        padded && 'px-4 sm:px-6 lg:px-8 xl:px-10',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
