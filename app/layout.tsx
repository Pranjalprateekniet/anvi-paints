import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { rootMetadata, SITE_URL } from '@/src/lib/metadata';

import './globals.css';

// ─── Font Configuration ────────────────────────────────────────────────────────

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = rootMetadata;

// ─── LocalBusiness JSON-LD Schema ─────────────────────────────────────────────

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Anvi Paints',
  description:
    'Authorized dealer for Nerolac and Birla Opus paints in Ranchi, Jharkhand. Serving customers since 2013 with premium paint solutions and expert colour consultation.',
  url: SITE_URL,
  image: `${SITE_URL}/images/hero/hero-main.png`,
  telephone: '+919031422273',
  foundingDate: '2013',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near SBI Bank, Tetartoli, Morabadi',
    addressLocality: 'Ranchi',
    addressRegion: 'Jharkhand',
    postalCode: '834008',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '23.3943464',
    longitude: '85.3342253',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:00',
      closes: '16:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Card',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nerolac & Birla Opus Paint Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Interior Paints',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Exterior Paints',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Premium Range',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Texture Finishes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Wood Coatings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Nerolac Synthetic Enamel',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Birla Opus Interior Paints',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Birla Opus Exterior Paints',
        },
      },
    ],
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A] antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />

        <GoogleAnalytics gaId="G-JMRZ941BZE" />
      </body>
    </html>
  );
}