import Link from 'next/link';
import { Container } from '@/src/components/ui/Container';
import { cn } from '@/src/lib/utils';
import { BUSINESS_INFO } from '@/src/constants/business';

// ─── Footer Data ──────────────────────────────────────────────────────────────

interface FooterLink {
  id: string;
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
      { id: 'prod-interior', label: 'Interior Paints', href: '/#contact' },
      { id: 'prod-exterior', label: 'Exterior Paints', href: '/#contact' },
      { id: 'prod-premium', label: 'Premium Emulsions', href: '/#contact' },
      { id: 'prod-texture', label: 'Texture Finishes', href: '/#contact' },
      { id: 'prod-wood', label: 'Wood Coatings', href: '/#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { id: 'comp-about', label: 'About Us', href: '/#about' },
      { id: 'comp-contact', label: 'Contact Us', href: '/#contact' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { id: 'sup-whatsapp', label: 'WhatsApp Us', href: BUSINESS_INFO.whatsapp.href },
    ],
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'social-whatsapp',
    label: 'WhatsApp',
    href: BUSINESS_INFO.whatsapp.href,
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
      >
        <span
          className="block text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-[#B85C38]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Anvi
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Paints
        </span>
      </Link>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
        Authorized Nerolac &amp; Birla Opus dealer in Ranchi, trusted by 20,000+ customers since 2013, providing quality paint solutions for homes, offices and commercial spaces.
      </p>
    </div>
  );
}

function FooterColumnGroup({ column }: { column: FooterColumn }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-300">
        {column.heading}
      </h3>
      <ul className="flex flex-col gap-2.5" role="list">
        {column.links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={cn(
                'text-sm text-gray-400',
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
      <p className="text-xs text-gray-400">
        &copy; {year} Anvi Paints. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
        {[
          { id: 'bottom-privacy', label: 'Privacy Policy', href: '/privacy-policy' },
          { id: 'bottom-terms', label: 'Terms of Use', href: '/terms-of-use' },
        ].map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-xs text-gray-400 hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B85C38] rounded-sm"
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
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} — opens in a new tab`}
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-sm',
                    'text-gray-400 bg-gray-800',
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
