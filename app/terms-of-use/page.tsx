import { PageWrapper } from '@/src/components/ui/PageWrapper';
import { Container } from '@/src/components/ui/Container';
import { createPageMetadata } from '@/src/lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Use',
  description: 'Terms of Use for Anvi Paints. Please read these terms carefully before using our website.',
  canonicalPath: '/terms-of-use',
});

export default function TermsOfUsePage() {
  const lastUpdated = 'June 4, 2026';

  return (
    <PageWrapper>
      <div className="h-16" aria-hidden="true" />
      <article className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1
              className="mb-6 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Terms of Use
            </h1>
            <p className="mb-10 text-sm text-[#5A5A5A]">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-slate max-w-none text-[#5A5A5A]">
              <p className="mb-6 leading-relaxed">
                Welcome to <strong>Anvi Paints</strong>. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                1. Website Usage Terms
              </h2>
              <p className="mb-6 leading-relaxed">
                This website is provided for informational purposes to help you learn about our paint products and services in Ranchi. You agree to use this site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                2. Information Accuracy Disclaimer
              </h2>
              <p className="mb-6 leading-relaxed">
                While we strive to keep the information on our website accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                3. Product Availability Disclaimer
              </h2>
              <p className="mb-6 leading-relaxed">
                The display of products, colours, and brands (such as Nerolac and Birla Opus) on this website does not guarantee their immediate availability at our physical store. Paint colours may appear differently on digital screens compared to physical swatches. We highly recommend visiting our store for accurate colour consultation and to confirm product stock before making project commitments.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                4. External Links Disclaimer
              </h2>
              <p className="mb-6 leading-relaxed">
                Through this website, you may be able to link to other websites (such as Google Maps or WhatsApp) which are not under the control of Anvi Paints. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                5. Limitation of Liability
              </h2>
              <p className="mb-6 leading-relaxed">
                In no event will Anvi Paints be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or the products purchased through our physical store.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                6. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="rounded-lg bg-[#F7F7F5] p-6 border border-[#EAEAEA]">
                <p className="mb-2 font-semibold text-[#1A1A1A]">Anvi Paints</p>
                <p className="mb-1 text-[#5A5A5A]">Tetartoli, Morabadi</p>
                <p className="mb-4 text-[#5A5A5A]">Ranchi, Jharkhand 834008</p>
                <p className="mb-1 text-[#5A5A5A]">
                  <strong className="font-medium text-[#1A1A1A]">Phone / WhatsApp:</strong>{' '}
                  <a href="tel:+919031422273" className="text-[#B85C38] hover:underline">+91 9031422273</a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </PageWrapper>
  );
}
