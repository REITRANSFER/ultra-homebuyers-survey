import Link from "next/link"

export function FooterLinks() {
  return (
    <footer className="bg-white px-4 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-gray-200 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          {/* Company Name */}
          <span className="text-xl font-bold text-[#1a3d6b]">Ultra Homebuyers</span>

          <p className="text-sm text-gray-500">We buy houses in any condition. No obligation, no pressure.</p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="transition-colors hover:text-gray-900">
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/terms-of-service" className="transition-colors hover:text-gray-900">
              Terms of Service
            </Link>
            <span className="text-gray-300">|</span>
            <a href="tel:6464662476" className="transition-colors hover:text-gray-900">
              (646) 466-2476
            </a>
          </div>

          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Ultra Homebuyers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
