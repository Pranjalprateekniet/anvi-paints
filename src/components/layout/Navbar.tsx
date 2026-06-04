'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { Container } from '@/src/components/ui/Container';

// ─── Navigation Data ──────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',     sectionId: 'home' },
  { label: 'Products', sectionId: 'products' },
  { label: 'About',    sectionId: 'about' },
  { label: 'Contact',  sectionId: 'contact' },
];

// ─── Smooth scroll helper ─────────────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = 64; // matches h-16
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: 'smooth' });
}

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

function Logo({ isHome }: { isHome: boolean }) {
  const router = useRouter();
  
  const handleClick = useCallback(() => {
    if (isHome) {
      scrollToSection('home');
    } else {
      router.push('/');
    }
  }, [isHome, router]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2 rounded-sm"
      aria-label="Anvi Paints — scroll to top"
    >
      <span
        className="text-xl font-bold tracking-tight text-[#1A1A1A] transition-colors duration-200 group-hover:text-[#B85C38]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Anvi
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5A5A5A]">
        Paints
      </span>
    </button>
  );
}

// ─── Desktop Nav Button ───────────────────────────────────────────────────────

function NavButton({
  item,
  isActive,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
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
    </button>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Navbar
 *
 * Single-page sticky header with:
 * - Logo (scrolls to #home on click)
 * - Smooth-scroll section navigation (no route changes)
 * - IntersectionObserver-driven active state that updates while scrolling
 * - Scroll-aware background (transparent → white with shadow)
 * - Mobile hamburger menu that closes after any item tap
 */
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';

  // Scroll-aware navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver — track which section is visible
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.sectionId);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Fire when 30% of the section enters the viewport
        threshold: [0, 0.3],
        // Shrink the top rootMargin by navbar height so #home activates properly
        rootMargin: '-64px 0px -40% 0px',
      },
    );

    if (!isHome) return; // Only observe if on home page

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [isHome]);

  const handleNavClick = useCallback((sectionId: string) => {
    setMobileOpen(false);
    
    if (!isHome) {
      router.push(`/${sectionId === 'home' ? '' : '#' + sectionId}`);
      return;
    }

    // Small delay so mobile menu closes before scroll jump
    setTimeout(() => scrollToSection(sectionId), 50);
  }, [isHome, router]);

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
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo isHome={isHome} />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <NavButton
                  item={item}
                  isActive={activeSection === item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
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
              Get in Touch
            </button>
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
                  const isActive = activeSection === item.sectionId;
                  return (
                    <motion.li key={item.sectionId} variants={mobileNavItemVariants}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(item.sectionId)}
                        className={cn(
                          'flex w-full items-center py-2.5 px-2 rounded-sm text-sm font-medium tracking-wide',
                          'transition-colors duration-150',
                          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38]',
                          isActive
                            ? 'text-[#B85C38] bg-[#FBF5F3]'
                            : 'text-[#1A1A1A] hover:text-[#B85C38] hover:bg-[#F7F7F5]',
                        )}
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  );
                })}

                {/* Mobile CTA */}
                <motion.li
                  variants={mobileNavItemVariants}
                  className="pt-3 pb-1 border-t border-[#EAEAEA] mt-2"
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick('contact')}
                    className={cn(
                      'flex items-center justify-center w-full',
                      'h-10 rounded-sm',
                      'bg-[#B85C38] text-white text-sm font-medium tracking-wide',
                      'transition-colors duration-200',
                      'hover:bg-[#A34E2E]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2',
                    )}
                  >
                    Get in Touch
                  </button>
                </motion.li>
              </motion.ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
