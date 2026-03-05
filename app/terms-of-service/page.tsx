import { FooterLinks } from "@/components/polar/footer-links"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | American Home Advisor",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#1a3d6b] hover:underline">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p className="mt-3">
              By accessing or using the American Home Advisor website (the &quot;Site&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site. American Home Advisor reserves the right to modify these terms at any time, and your continued use of the Site constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Description of Services</h2>
            <p className="mt-3">
              American Home Advisor provides a platform for homeowners in the Baltimore, Maryland metropolitan area and surrounding suburbs, including DC suburban communities, to request cash offers for the purchase of their residential properties. Our services include property evaluation, cash offer generation, and facilitation of real estate transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. No Obligation</h2>
            <p className="mt-3">
              Submitting your information through our Site does not obligate you to sell your property or accept any offer. All offers made by American Home Advisor are non-binding until a formal purchase agreement is executed by both parties. You are free to accept, reject, or negotiate any offer at your sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Eligibility</h2>
            <p className="mt-3">
              You must be at least 18 years of age and have the legal authority to sell the property in question to use our services. By submitting property information, you represent and warrant that you are the legal owner of the property or have been authorized by the legal owner to act on their behalf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Accuracy of Information</h2>
            <p className="mt-3">
              You agree to provide accurate, current, and complete information when submitting forms on our Site. American Home Advisor is not responsible for any errors, omissions, or inaccuracies in the information you provide. Offers are based on the information submitted and may be adjusted upon verification or property inspection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Communication Consent</h2>
            <p className="mt-3">
              By submitting your contact information through our Site, you consent to receive communications from American Home Advisor, including phone calls, text messages, and emails related to your property inquiry. You may opt out of communications at any time by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Intellectual Property</h2>
            <p className="mt-3">
              All content on this Site, including text, graphics, logos, images, and software, is the property of American Home Advisor or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Limitation of Liability</h2>
            <p className="mt-3">
              American Home Advisor shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of, or inability to use, this Site or our services. This includes, without limitation, damages for loss of profits, goodwill, data, or other intangible losses, even if American Home Advisor has been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Indemnification</h2>
            <p className="mt-3">
              You agree to indemnify, defend, and hold harmless American Home Advisor, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from your use of the Site or your violation of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Governing Law</h2>
            <p className="mt-3">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Maryland, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts located in Baltimore, Maryland.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Third-Party Links</h2>
            <p className="mt-3">
              Our Site may contain links to third-party websites or services that are not owned or controlled by American Home Advisor. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">12. Contact Information</h2>
            <p className="mt-3">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>American Home Advisor</strong><br />
              Phone: <a href="tel:4434078421" className="text-[#1a3d6b] hover:underline">(443) 407-8421</a><br />
              Service Area: Baltimore, MD and surrounding suburbs
            </p>
          </section>
        </div>
      </div>

      <FooterLinks />
    </main>
  )
}
