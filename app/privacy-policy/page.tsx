import { PageWrapper } from '@/src/components/ui/PageWrapper';
import { Container } from '@/src/components/ui/Container';
import { createPageMetadata } from '@/src/lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Anvi Paints — learn how we collect, use, and protect your information.',
  canonicalPath: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 4, 2026';

  return (
    <PageWrapper>
      <div className="h-16" aria-hidden="true" />
      <main className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h1
              className="mb-6 text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Privacy Policy
            </h1>
            <p className="mb-10 text-sm text-[#5A5A5A]">
              Last Updated: {lastUpdated}
            </p>

            <div className="prose prose-slate max-w-none text-[#5A5A5A]">
              <p className="mb-6 leading-relaxed">
                Welcome to <strong>Anvi Paints</strong>. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our business in Ranchi.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                1. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products, or when otherwise contacting us.
              </p>
              <ul className="mb-6 list-disc pl-5 space-y-2">
                <li>
                  <strong>Contact Forms:</strong> Name, email address, phone number, and project details submitted through our website.
                </li>
                <li>
                  <strong>Phone and WhatsApp Inquiries:</strong> Phone numbers, chat history, and information provided during phone calls or WhatsApp chats.
                </li>
                <li>
                  <strong>Store Visits:</strong> Information provided for billing, colour consultation, or delivery scheduling at our physical store in Ranchi.
                </li>
              </ul>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                2. How We Use Your Information
              </h2>
              <p className="mb-4 leading-relaxed">
                We use the information we collect or receive to:
              </p>
              <ul className="mb-6 list-disc pl-5 space-y-2">
                <li>Respond to your inquiries, provide quotes, and fulfill your requests.</li>
                <li>Send administrative information, such as updates to our terms, conditions, and policies.</li>
                <li>Facilitate colour consultation services and product deliveries.</li>
                <li>Improve our website, customer service, and overall shopping experience.</li>
              </ul>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                3. Cookies and Analytics
              </h2>
              <p className="mb-6 leading-relaxed">
                Our website may use cookies and similar tracking technologies to access or store information. We use these technologies to analyze website traffic, understand user behavior, and improve our online presence. You can control cookies through your browser settings, though disabling them may limit some website functionality.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                4. Third-Party Services
              </h2>
              <p className="mb-6 leading-relaxed">
                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners. For communication, we utilize third-party services like WhatsApp (Meta) and Google Maps, which are governed by their respective privacy policies.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                5. Your User Rights
              </h2>
              <p className="mb-6 leading-relaxed">
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or request the deletion of your personal information. If you wish to exercise any of these rights, please contact us using the information provided below.
              </p>

              <h2 className="mt-10 mb-4 text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)' }}>
                6. Contact Information
              </h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions or comments about this Privacy Policy, please contact us at:
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
      </main>
    </PageWrapper>
  );
}
