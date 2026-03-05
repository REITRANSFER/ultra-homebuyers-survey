import { NextResponse } from "next/server"

// Rate limiter (resets on deploy/restart) — generous for testing
const submissionLog = new Map<string, { count: number; firstSubmit: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const window = 60 * 60 * 1000 // 1 hour
  const maxSubmissions = 20 // generous limit

  const entry = submissionLog.get(ip)
  if (!entry) {
    submissionLog.set(ip, { count: 1, firstSubmit: now })
    return false
  }

  if (now - entry.firstSubmit > window) {
    submissionLog.set(ip, { count: 1, firstSubmit: now })
    return false
  }

  entry.count++
  return entry.count > maxSubmissions
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try again later." },
        { status: 429 }
      )
    }

    const data = await request.json()

    // Server-side validation
    const phone = (data.phone || "").replace(/\D/g, "").replace(/^1/, "")
    if (phone.length !== 10) {
      return NextResponse.json({ success: false, error: "Invalid phone" }, { status: 400 })
    }

    const email = (data.email || "").trim().toLowerCase()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 })
    }

    if (!(data.name || "").trim()) {
      return NextResponse.json({ success: false, error: "Name required" }, { status: 400 })
    }

    if (!(data.address || "").trim()) {
      return NextResponse.json({ success: false, error: "Address required" }, { status: 400 })
    }

    // Build the full payload with server IP
    const payload = { ...data, server_ip: ip }

    const webhookUrl = process.env.WEBHOOK_URL
    if (!webhookUrl) {
      console.error("[submit] WEBHOOK_URL env var is not set")
      return NextResponse.json({ success: false, error: "Webhook not configured" }, { status: 500 })
    }

    // Forward to n8n webhook
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    if (!webhookRes.ok) {
      console.error(`[submit] Webhook returned ${webhookRes.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("[submit] Error:", err)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}