'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Container } from '@/src/components/ui/Container';

// ─── Navigation Data ──────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Brands', href: '/brands' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as [number, number, number, number] },
  },
  open: {
    opacity: 1,
    height: 'auto',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const mobileNavItemVariants = {
  closed: { opacity: 0, x: -8 },
  open: { opacity: 1, x: 0 },
};

// ─── Hamburger Icon ───────────────────────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div
      className="relative flex h-5 w-5 flex-col justify-center gap-[5px]"
      aria-hidden="true"
    >
      <motion.span
        className="block h-px w-full bg-[#1A1A1A] origin-center"
        animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="block h-px w-full bg-[#1A1A1A]"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-px w-full bg-[#1A1A1A] origin-center"
        animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <Link
      href="/"
      className="group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2 rounded-sm"
      aria-label="Anvi Paints & Hardware — Home"
    >
      <span
        className="text-xl font-bold tracking-tight text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#B85C38]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Anvi
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A5A5A]">
        Paints &amp; Hardware
      </span>
    </Link>
  );
}

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────

function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        'relative text-sm font-medium tracking-wide transition-colors duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2 rounded-sm',
        isActive
          ? 'text-[#B85C38]'
          : 'text-[#1A1A1A] hover:text-[#B85C38]',
      )}
    >
      {item.label}
      {/* Active underline indicator */}
      {isActive && (
        <motion.span
          layoutId="navbar-active-pill"
          className="absolute -bottom-1 left-0 right-0 h-px bg-[#B85C38]"
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </Link>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Navbar
 *
 * Sticky site header with:
 * - Logo and wordmark
 * - Desktop horizontal navigation
 * - Mobile hamburger menu with animated slide-down panel
 * - Scroll-aware background (transparent → white with shadow)
 * - Active page highlighting with Framer Motion layout transition
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll-aware navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleMobile = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[600]',
        'transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-[#EAEAEA] shadow-[0_1px_3px_0_rgba(26,26,26,0.06)]'
          : 'bg-transparent',
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between lg:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <ul
            className="hidden lg:flex items-center gap-8"
            role="list"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink
                  item={item}
                  isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)}
                />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center',
                'h-9 px-5 rounded-sm',
                'bg-[#B85C38] text-white text-sm font-medium tracking-wide',
                'transition-all duration-200',
                'hover:bg-[#A34E2E] hover:shadow-[0_4px_14px_0_rgba(184,92,56,0.3)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                'active:scale-[0.98]',
              )}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={toggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={cn(
              'lg:hidden p-2 -mr-2 rounded-sm',
              'text-[#1A1A1A] hover:bg-[#F7F7F5]',
              'transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38]',
            )}
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="navigation"
            aria-label="Mobile navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="overflow-hidden border-t border-[#EAEAEA] bg-white lg:hidden"
          >
            <Container>
              <motion.ul
                className="flex flex-col py-4 gap-1"
                role="list"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                  closed: {},
                }}
              >
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <motion.li key={item.href} variants={mobileNavItemVariants}>
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center py-2.5 px-2 rounded-sm text-sm font-medium tracking-wide',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38]',
                          isActive
                            ? 'text-[#B85C38] bg-[#FBF5F3]'
                            : 'text-[#1A1A1A] hover:text-[#B85C38] hover:bg-[#F7F7F5]',
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
                {/* Mobile CTA */}
                <motion.li
                  variants={mobileNavItemVariants}
                  className="pt-3 pb-1 border-t border-[#EAEAEA] mt-2"
                >
                  <Link
                    href="/contact"
                    className={cn(
                      'flex items-center justify-center w-full',
                      'h-10 rounded-sm',
                      'bg-[#B85C38] text-white text-sm font-medium tracking-wide',
                      'transition-colors duration-200',
                      'hover:bg-[#A34E2E]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                    )}
                  >
                    Get a Quote
                  </Link>
                </motion.li>
              </motion.ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
