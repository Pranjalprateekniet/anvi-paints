'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/src/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  /**
   * Visual variant:
   * - `primary`   — filled terracotta (main CTA)
   * - `secondary` — filled forest-green
   * - `outline`   — bordered, transparent background
   * - `ghost`     — borderless, subtle hover
   * - `link`      — plain text with underline on hover
   */
  variant?: ButtonVariant;
  /** Size variant */
  size?: ButtonSize;
  /** Fills parent container width */
  fullWidth?: boolean;
  /** Replaces children with a loading spinner */
  loading?: boolean;
  /** Allows wrapping an anchor element */
  asChild?: boolean;
  children: React.ReactNode;
}

// ─── Class Maps ───────────────────────────────────────────────────────────────

const baseClasses = [
  'relative inline-flex items-center justify-center gap-2',
  'font-medium rounded-sm tracking-wide',
  'transition-all duration-200',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B85C38]',
  'disabled:opacity-50 disabled:pointer-events-none',
  'select-none',
].join(' ');

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#B85C38] text-white',
    'hover:bg-[#A34E2E]',
    'active:bg-[#8E4427]',
    'shadow-sm hover:shadow-[0_4px_14px_0_rgba(184,92,56,0.3)]',
  ].join(' '),

  secondary: [
    'bg-[#2F5D50] text-white',
    'hover:bg-[#274E43]',
    'active:bg-[#1F3E36]',
    'shadow-sm',
  ].join(' '),

  outline: [
    'border border-[#B85C38] text-[#B85C38] bg-transparent',
    'hover:bg-[#B85C38] hover:text-white',
    'active:bg-[#A34E2E] active:text-white',
  ].join(' '),

  ghost: [
    'text-[#1A1A1A] bg-transparent',
    'hover:bg-[#F7F7F5]',
    'active:bg-[#EAEAEA]',
  ].join(' '),

  link: [
    'text-[#B85C38] bg-transparent p-0 h-auto',
    'underline-offset-4 hover:underline',
    'active:opacity-70',
  ].join(' '),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

// ─── Loading Spinner ──────────────────────────────────────────────────────────

function Spinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-4 w-4 animate-spin', className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Button
 *
 * Primary interactive element with Framer Motion micro-interactions.
 * Supports five visual variants and three size options.
 *
 * @example
 * <Button variant="primary" size="lg" onClick={handleCta}>
 *   Get a Quote
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      className,
      children,
      disabled,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled ?? loading;

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        whileHover={isDisabled ? {} : { scale: 1.015 }}
        whileTap={isDisabled ? {} : { scale: 0.975 }}
        transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }}
        className={cn(
          baseClasses,
          variantClasses[variant],
          variant !== 'link' && sizeClasses[size],
          fullWidth && 'w-full',
          className,
        )}
        {...props}
      >
        {loading && <Spinner />}
        <span className={loading ? 'opacity-0 absolute' : undefined}>
          {children}
        </span>
        {loading && (
          <span className="sr-only">Loading…</span>
        )}
      </motion.button>
    );
  },
);

Button.displayName = 'Button';
