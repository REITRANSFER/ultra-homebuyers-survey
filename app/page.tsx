import { SurveyCard } from "@/components/survey/survey-card"
import { FooterLinks } from "@/components/polar/footer-links"
import { Phone } from "lucide-react"
import Image from "next/image"

export default function AmericanHomeAdvisorPage() {
  return (
    <main className="relative min-h-screen bg-gray-50">
      {/* Content */}
      <div className="relative z-10">
        {/* Phone number at top */}
        <div className="flex items-center justify-center gap-2 bg-white py-2 md:py-4 shadow-sm">
          <Phone className="h-4 w-4 md:h-5 md:w-5 text-[#1a3d6b]" />
          <a
            href="tel:4434078421"
            className="text-base md:text-lg font-semibold text-gray-900 hover:text-[#1a3d6b] transition-colors"
          >
            (443) 407-8421
          </a>
        </div>

        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-4 py-4 md:py-6 lg:px-8">
          {/* Centered Hero content */}
          <div className="mx-auto text-center">
            <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
              Baltimore Area Homeowners: Get a <span className="text-[#1a3d6b]">Fair Cash Offer</span> in 24 Hours. No Fees. No Repairs. <span className="text-[#9b2335]">Close in as Few as 14 Days.</span>
            </h1>
            <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
              We handle the paperwork, the timeline, and the stress. You pick the closing date and walk away with a check.
            </p>

            {/* Trust indicators */}
            <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 md:gap-5">
              <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]/10">
                  <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">No Fees or Commissions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]/10">
                  <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">Local Maryland Buyers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]/10">
                  <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">Cash Offer in 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Survey Form */}
          <div className="mt-4 md:mt-6 mx-auto max-w-3xl">
            <SurveyCard />
          </div>

          {/* Photo Section - Below CTA */}
          <div className="mt-8 md:mt-12 mx-auto flex flex-col items-center">
            <div className="h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full border-2 border-gray-200 shadow-md">
              <Image
                src="/images/handshake.jpeg"
                alt="Joe Estefan - American Home Advisor"
                width={96}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-gray-900">Joe Estefan</p>
            <p className="text-xs text-gray-500">Founder, American Home Advisor</p>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 py-8">
          <FooterLinks />
        </div>
      </div>
    </main>
  )
}
