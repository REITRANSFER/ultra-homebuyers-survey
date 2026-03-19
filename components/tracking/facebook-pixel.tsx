"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

const FB_PIXEL_ID = "2768124393525724"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: (...args: unknown[]) => void
  }
}

export function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    // Delay pixel load so it doesn't compete with LCP
    const timer = setTimeout(() => {
      if (window.fbq) return

      const f = window
      const b = document
      const n = "script"
      const fbq = function (...args: unknown[]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(fbq as any).callMethod
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (fbq as any).callMethod(...args)
          : // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (fbq as any).queue.push(args)
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(fbq as any).push = fbq
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(fbq as any).loaded = true
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(fbq as any).version = "2.0"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(fbq as any).queue = []
      f.fbq = fbq
      f._fbq = fbq

      const s = b.createElement(n)
      s.async = true
      s.src = "https://connect.facebook.net/en_US/fbevents.js"
      const fjs = b.getElementsByTagName(n)[0]
      fjs?.parentNode?.insertBefore(s, fjs)

      window.fbq("init", FB_PIXEL_ID)
      window.fbq("track", "PageView")
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Track page views on route change
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView")
    }
  }, [pathname])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}