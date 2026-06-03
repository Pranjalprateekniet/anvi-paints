import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { Navbar } from '@/src/components/layout/Navbar';
import { Footer } from '@/src/components/layout/Footer';
import { rootMetadata } from '@/src/lib/metadata';
import './globals.css';

// ─── Font Configuration ────────────────────────────────────────────────────────

/**
 * Headings — Playfair Display
 * Premium, timeless serif for all h1–h6 elements.
 */
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '800'],
});

/**
 * Body — Inter
 * Clean, highly legible sans-serif for all body copy.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = rootMetadata;

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
      <body className="min-h-screen flex flex-col bg-white text-[#1A1A1A] antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
