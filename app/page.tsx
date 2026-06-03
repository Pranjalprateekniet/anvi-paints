import { PageWrapper } from '@/src/components/ui/PageWrapper';
import { Section } from '@/src/components/ui/Section';
import { Container } from '@/src/components/ui/Container';
import { SectionHeading } from '@/src/components/ui/SectionHeading';
import { createPageMetadata } from '@/src/lib/metadata';
import type { Metadata } from 'next';

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = createPageMetadata({
  title: 'Home',
  description:
    'Anvi Paints & Hardware — premium paints, coatings, and hardware supplies trusted by homeowners and professionals.',
  canonicalPath: '/',
});

// ─── Page ─────────────────────────────────────────────────────────────────────

/**
 * Homepage — foundation placeholder.
 * Content sections will be added in the next implementation phase.
 */
export default function HomePage() {
  return (
    <PageWrapper>
      {/* Spacer to account for fixed navbar */}
      <div className="h-16" aria-hidden="true" />

      <Section background="soft" spacing="xl">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Foundation Ready"
            title="Homepage content coming soon."
            subtitle="The design system, layout components, and navigation are fully implemented. Product and content sections will be built in the next phase."
            align="center"
          />
        </Container>
      </Section>
    </PageWrapper>
  );
}
