import Link from 'next/link';
import { Container } from '@/src/components/ui/Container';
import { cn } from '@/src/lib/utils';

// ─── Footer Data ──────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Products',
    links: [
      { label: 'Interior Paints', href: '/products/interior' },
      { label: 'Exterior Paints', href: '/products/exterior' },
      { label: 'Industrial Coatings', href: '/products/industrial' },
      { label: 'Wood Finishes', href: '/products/wood' },
      { label: 'Hardware', href: '/products/hardware' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Story', href: '/about/story' },
      { label: 'Projects', href: '/projects' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Get a Quote', href: '/contact#quote' },
      { label: 'Colour Consultation', href: '/services/consultation' },
      { label: 'Technical Guides', href: '/resources/guides' },
    ],
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.563 9.876V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988A10.002 10.002 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.069 1.645.069 4.849s-.011 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.974.975-2.241 1.247-3.607 1.31-1.266.058-1.645.069-4.85.069s-3.584-.011-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.974-1.247-2.241-1.31-3.607C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163c-3.259 0-3.667.014-4.947.072C5.709.163 4.171.534 2.927 1.778 1.683 3.022 1.312 4.56 1.234 5.904.176 7.12.163 7.527.163 12s.013 4.88.072 6.096c.078 1.344.449 2.882 1.693 4.126 1.244 1.244 2.782 1.615 4.126 1.693C7.12 23.987 7.527 24 12 24s4.88-.013 6.096-.072c1.344-.078 2.882-.449 4.126-1.693 1.244-1.244 1.615-2.782 1.693-4.126.059-1.216.072-1.623.072-6.097s-.013-4.88-.072-6.096c-.078-1.344-.449-2.882-1.693-4.126C21.978 1.534 20.44 1.163 19.096 1.085 17.88.026 17.473.013 12 .013v.013z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/',
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.122 1.523 5.855L0 24l6.29-1.508A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 0 1-5.007-1.372l-.36-.213-3.731.894.944-3.618-.235-.372A9.789 9.789 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
      </svg>
    ),
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <div className="flex flex-col gap-1">
      <Link
        href="/"
        className="group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38] focus-visible:ring-offset-2 rounded-sm"
        aria-label="Anvi Paints & Hardware — Home"
      >
        <span
          className="block text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#B85C38]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Anvi
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
          Paints &amp; Hardware
        </span>
      </Link>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#9CA3AF]">
        Premium paints and hardware supplies — trusted by homeowners,
        contractors, and builders across the region.
      </p>
    </div>
  );
}

function FooterColumnGroup({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#D1D5DB]">
        {column.heading}
      </h3>
      <ul className="flex flex-col gap-2.5" role="list">
        {column.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'text-sm text-[#9CA3AF]',
                'transition-colors duration-150',
                'hover:text-white',
                'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B85C38] rounded-sm',
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-[#374151] pt-8 sm:flex-row">
      <p className="text-xs text-[#6B7280]">
        &copy; {year} Anvi Paints &amp; Hardware. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
        {[
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms of Use', href: '/terms' },
          { label: 'Sitemap', href: '/sitemap.xml' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs text-[#6B7280] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B85C38] rounded-sm"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * Footer
 *
 * Site-wide footer with:
 * - Logo and brand description
 * - Multi-column navigation links
 * - Social media links
 * - Legal / copyright bar
 *
 * Server Component — no client interactivity required.
 */
export function Footer() {
  return (
    <footer className="bg-[#111827] text-white" aria-label="Site footer">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — spans 2 cols on large screens */}
          <div className="lg:col-span-2">
            <FooterLogo />

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} — opens in a new tab`}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-sm',
                    'text-[#9CA3AF] bg-[#1F2937]',
                    'transition-all duration-200',
                    'hover:text-white hover:bg-[#B85C38]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B85C38]',
                  )}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {FOOTER_COLUMNS.map((column) => (
            <FooterColumnGroup key={column.heading} column={column} />
          ))}
        </div>

        {/* Bottom bar */}
        <FooterBottom />
      </Container>

      {/* Bottom safe-area spacer */}
      <div className="h-4" aria-hidden="true" />
    </footer>
  );
}
