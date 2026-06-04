import { PageWrapper } from '@/src/components/ui/PageWrapper';
import { Hero } from '@/src/components/home/Hero';
import { Products } from '@/src/components/home/Products';
import { WhyChooseUs } from '@/src/components/home/WhyChooseUs';
import { About } from '@/src/components/home/About';
import { Contact } from '@/src/components/home/ContactCTA';
import { createPageMetadata } from '@/src/lib/metadata';
import type { Metadata } from 'next';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = createPageMetadata({
  description:
    'Anvi Paints — authorized Nerolac and Birla Opus paint dealer in Ranchi, Jharkhand. 10+ years of trusted service, 20,000+ happy customers, and expert colour consultation.',
  canonicalPath: '/',
  keywords: [
    'Nerolac Paint Dealer Ranchi',
    'Birla Opus Dealer Ranchi',
    'Paint Shop Ranchi',
    'Interior Paints Ranchi',
    'Exterior Paints Ranchi',
    'Nerolac dealer Jharkhand',
    'paint store Ranchi',
    'colour consultation Ranchi',
    'premium paints Jharkhand',
    'Nerolac authorized dealer',
  ],
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Fixed navbar offset */}
      <div className="h-16" aria-hidden="true" />

      <Hero />

      <Products />

      <WhyChooseUs />

      <About />

      <Contact />
    </PageWrapper>
  );
}
