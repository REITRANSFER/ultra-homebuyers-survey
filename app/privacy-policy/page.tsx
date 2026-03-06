import { FooterLinks } from "@/components/polar/footer-links"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Ultra Homebuyers",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-[#1a3d6b] hover:underline">
          &larr; Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: March 2026</p>

        <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <p className="mt-3">
              We collect &quot;Personal Information,&quot; which is information that can be used to identify you individually, that you submit through the forms contained on our Site. &quot;Personal Information&quot; includes Name, Home Phone Number, Cell Phone Number, Email Address, Property Address, Mailing Address if different than Property Address, Property Status, Property Information (number of bedrooms, number of bathrooms, number of stories, square footage, age and condition of house, garage and basement, property value), Mortgage Information (first mortgage balance, additional mortgage balance, combined balance of all mortgages and debt, combined monthly payments, current payment status, amount owed for back payments), and Selling Information (reason for selling, time frame, listing status, sale price requested).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">How We May Use or Share Personal Information</h2>
            <p className="mt-3">
              Personal Information is an important part of our business, and we are not in the business of selling it to others. We share Personal Information only as described below and with affiliates of Ultra Homebuyers.
            </p>
            <p className="mt-3">
              We may employ other companies or individuals to perform functions on our behalf including analyzing data, providing marketing assistance, and providing customer service. These agents have access to Personal Information needed to perform their functions, but may not use it for other purposes.
            </p>
            <p className="mt-3">
              As we continue to develop our business, we might sell or buy business units. In such transactions, Personal Information generally is one of the transferred business assets. In the event that Ultra Homebuyers or substantially all of its assets are acquired, Personal Information will be one of the transferred assets.
            </p>
            <p className="mt-3">
              We release Personal Information (a) when we believe release is appropriate to comply with the law, respond to claims or comply with legal process served on Ultra Homebuyers (e.g., a lawful subpoena, warrant or court order); (b) to enforce or apply our Terms of Service and other agreements; (c) to protect the rights, property, or safety of Ultra Homebuyers, our Site, our users or others, including preventing fraudulent, abusive, or unlawful use of our Site; or (d) if we reasonably believe that an emergency involving immediate danger of death or serious physical injury to any person requires disclosure of communications or justifies disclosure of records without delay.
            </p>
            <p className="mt-3">
              We may share Personal Information with realtors who are not related to Ultra Homebuyers for the purpose of facilitating a transaction involving a property submitted through our Site. Such realtors are not subject to this Privacy Policy and Ultra Homebuyers disclaims any responsibility for such realtors&apos; privacy policies or practices.
            </p>
            <p className="mt-3">
              We may use Personal Information for our own internal statistical, design, and operational purposes such as to estimate our audience size and understand demographic, customer interest, and other trends among our users.
            </p>
            <p className="mt-3">
              Other than as set out above, you will receive notice when your Personal Information might go to third parties, and you will have an opportunity to choose not to share such Personal Information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Online Security and Data Protection</h2>
            <p className="mt-3">
              We use commercially reasonable efforts to store and maintain Personal Information to protect it from loss, misuse, alteration or destruction by any unauthorized party. We have put into place security measures in an effort to protect Personal Information from loss, misuse or alteration while it is under our control, and use technical, contractual, administrative, and physical measures in an effort to protect against unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Cookies, Web Beacons, and Automatic Information</h2>
            <p className="mt-3">
              Our Site may collect information such as the Internet Protocol (IP) address used to connect your computer to the Internet; computer and connection information such as browser type and version, operating system, and platform; or the full Uniform Resource Locator (URL) clickstream to, through, and from our Site. Further, our Site may make use of &quot;cookies.&quot;
            </p>
            <p className="mt-3">
              Our Site is not designed nor intended to collect Personal Information from children under the age of 18. To respect the privacy of children and to comply with the Children&apos;s Online Privacy Protection Act, children under the age of 18 should not provide any Personal Information on this Site.
            </p>
            <p className="mt-3">
              We may provide links to third-party websites as a service to our users, and we are not responsible for the content or information collection practices of those pages. Please note that these websites&apos; privacy policies may differ from those of Ultra Homebuyers. We encourage you to review and understand their privacy practices before providing them with information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Changes to This Policy</h2>
            <p className="mt-3">
              We reserve the right to change this Privacy Policy at any time. If we decide to change this Privacy Policy, we will post a new statement on our Site and change the date at the top of this Privacy Policy. Therefore, we encourage you to check the date of our Privacy Policy whenever you visit this Site for any updates or changes. Unless stated otherwise, our current Privacy Policy applies to all Personal Information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Help Us Keep Your Personal Information Accurate</h2>
            <p className="mt-3">
              If your Personal Information changes or you would like to review the Personal Information we may have on file, please contact us at <a href="tel:6464662476" className="text-[#1a3d6b] hover:underline">(646) 466-2476</a> with the new information or your review request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
            <p className="mt-3">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Ultra Homebuyers</strong><br />
              Phone: <a href="tel:6464662476" className="text-[#1a3d6b] hover:underline">(646) 466-2476</a><br />
              Service Area: Multiple markets across the US
            </p>
          </section>
        </div>
      </div>

      <FooterLinks />
    </main>
  )
}
