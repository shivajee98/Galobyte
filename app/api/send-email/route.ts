import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import type {
  ContactFormData,
  SanitizedContactData,
  RateLimitRecord,
  RateLimitResult,
  APIConfig
} from "../../../lib/types"
import {
  sanitizeInput,
  validateEmail,
  getClientIP,
  generateEmailId,
  formatTimestamp,
  detectSpamPatterns
} from "../../../lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting store (in production, use Redis or a proper database)
const rateLimitStore = new Map<string, RateLimitRecord>()

// Configuration
const CONFIG: APIConfig = {
  RATE_LIMIT: {
    MAX_REQUESTS: 5, // Max requests per window
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  },
  EMAIL: {
    // Use onboarding@resend.dev for testing or your verified domain
    FROM: process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev",
    TO: process.env.CONTACT_TO_EMAIL?.split(',') || ["info.galobyte@gmail.com"],
    REPLY_TO_ENABLED: process.env.ENABLE_REPLY_TO !== 'false',
  },
  VALIDATION: {
    MAX_MESSAGE_LENGTH: 5000,
    MAX_SUBJECT_LENGTH: 200,
    MAX_NAME_LENGTH: 100,
  }
}

// Rate limiting function
function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now()
  const record = rateLimitStore.get(identifier)

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + CONFIG.RATE_LIMIT.WINDOW_MS
    })
    return { allowed: true }
  }

  if (record.count >= CONFIG.RATE_LIMIT.MAX_REQUESTS) {
    return { allowed: false, resetTime: record.resetTime }
  }

  // Increment count
  record.count++
  rateLimitStore.set(identifier, record)
  return { allowed: true }
}

// Dynamic email template generator
function generateEmailTemplate(data: SanitizedContactData): string {
    const emailId = generateEmailId();
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Form Submission</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                        line-height: 1.6;
                        color: #1f2937;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    }
                    .container {
                        background: #ffffff;
                        border-radius: 16px;
                        padding: 0;
                        border: 2px solid #fbbf24;
                        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                        overflow: hidden;
                    }
                    .header {
                        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
                        padding: 32px;
                        text-align: center;
                        color: #1f2937;
                    }
                    .logo {
                        font-size: 32px;
                        font-weight: 800;
                        color: #1f2937;
                        margin-bottom: 8px;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .subtitle {
                        color: #374151;
                        font-size: 16px;
                        font-weight: 600;
                        margin-top: 8px;
                    }
                    .priority-indicator {
                        display: inline-block;
                        padding: 6px 12px;
                        border-radius: 20px;
                        font-size: 12px;
                        font-weight: 700;
                        text-transform: uppercase;
                        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                        color: #ffffff;
                        margin-top: 12px;
                        box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);
                    }
                    .content {
                        padding: 32px;
                        background: #ffffff;
                    }
                    .field {
                        margin-bottom: 24px;
                        padding: 20px;
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                        border-radius: 12px;
                        border-left: 5px solid #fbbf24;
                        transition: all 0.2s ease;
                    }
                    .field:hover {
                        transform: translateY(-1px);
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .field-label {
                        font-weight: 700;
                        color: #1f2937;
                        font-size: 14px;
                        text-transform: uppercase;
                        letter-spacing: 0.8px;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .field-value {
                        color: #374151;
                        font-size: 16px;
                        line-height: 1.6;
                        font-weight: 500;
                    }
                    .email-link {
                        color: #2563eb;
                        text-decoration: none;
                        font-weight: 600;
                        transition: color 0.2s ease;
                    }
                    .email-link:hover {
                        color: #1d4ed8;
                        text-decoration: underline;
                    }
                    .message-field {
                        background: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        border: 2px solid #e5e7eb;
                        margin-top: 10px;
                        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
                    }
                    .message-field .field-value {
                        color: #1f2937;
                        font-weight: 400;
                        line-height: 1.7;
                    }
                    .metadata {
                        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                        padding: 24px;
                        border-radius: 12px;
                        margin-top: 32px;
                        color: #e5e7eb;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .metadata strong {
                        color: #fbbf24;
                        font-size: 16px;
                        display: block;
                        margin-bottom: 12px;
                    }
                    .metadata-item {
                        margin: 8px 0;
                        padding-left: 20px;
                        position: relative;
                    }
                    .metadata-item::before {
                        content: "•";
                        color: #fbbf24;
                        font-weight: bold;
                        position: absolute;
                        left: 0;
                    }
                    .footer {
                        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                        padding: 32px;
                        text-align: center;
                        color: #64748b;
                        font-size: 14px;
                        border-top: 1px solid #e2e8f0;
                    }
                    .footer p {
                        margin: 8px 0;
                    }
                    .cosmic-accent {
                        color: #f59e0b;
                        font-weight: 700;
                    }
                    .tracking-id {
                        background: #1f2937;
                        color: #e5e7eb;
                        padding: 12px 16px;
                        border-radius: 8px;
                        font-family: 'Courier New', monospace;
                        font-size: 12px;
                        margin-top: 16px;
                        display: inline-block;
                        border: 1px solid #374151;
                    }
                    .icon {
                        font-size: 16px;
                        margin-right: 4px;
                    }
                    .divider {
                        height: 2px;
                        background: linear-gradient(90deg, #fbbf24 0%, #f59e0b 100%);
                        margin: 24px 0;
                        border-radius: 1px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <div class="logo">🚀 GALOBYTE</div>
                        <div class="subtitle">New Contact Form Submission</div>
                        <div class="priority-indicator">🎯 New Lead</div>
                    </div>

                    <div class="content">
                        <div class="field">
                            <div class="field-label">
                                <span class="icon">👤</span>Contact Name
                            </div>
                            <div class="field-value">${data.name}</div>
                        </div>

                        <div class="field">
                            <div class="field-label">
                                <span class="icon">📧</span>Email Address
                            </div>
                            <div class="field-value">
                                <a href="mailto:${data.email}" class="email-link">
                                    ${data.email}
                                </a>
                            </div>
                        </div>

                        <div class="field">
                            <div class="field-label">
                                <span class="icon">📝</span>Subject
                            </div>
                            <div class="field-value">${data.subject}</div>
                        </div>

                        <div class="field">
                            <div class="field-label">
                                <span class="icon">💬</span>Message
                            </div>
                            <div class="message-field">
                                <div class="field-value">${data.message.replace(/\n/g, "<br>")}</div>
                            </div>
                        </div>

                        <div class="divider"></div>

                        <div class="metadata">
                            <strong>📊 Submission Details</strong>
                            <div class="metadata-item">Timestamp: ${formatTimestamp(data.timestamp)}</div>
                            ${data.userAgent ? `<div class="metadata-item">User Agent: ${data.userAgent.substring(0, 80)}${data.userAgent.length > 80 ? '...' : ''}</div>` : ''}
                            <div class="metadata-item">Source: Contact Form (galobyte.com)</div>
                            <div class="metadata-item">Email ID: ${emailId}</div>
                        </div>
                    </div>

                    <div class="footer">
                        <p>This message was sent from the <span class="cosmic-accent">Galobyte</span> contact form.</p>
                        <p><strong>Reply directly to this email</strong> to respond to ${data.name}.</p>

                        <div class="tracking-id">
                            Tracking ID: ${emailId}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request)

    // Check rate limiting
    const rateLimitResult = checkRateLimit(clientIP)
    if (!rateLimitResult.allowed) {
      const resetTime = new Date(rateLimitResult.resetTime!).toISOString()
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          resetTime
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetTime! - Date.now()) / 1000).toString()
          }
        }
      )
    }

    // Parse and validate request body
    let requestData: ContactFormData
    try {
      requestData = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 })
    }

    const { name, email, subject, message, honeypot } = requestData

    // Honeypot check (basic bot detection)
    if (honeypot) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 })
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({
        error: "All fields are required",
        details: {
          name: !name ? "Name is required" : null,
          email: !email ? "Email is required" : null,
          subject: !subject ? "Subject is required" : null,
          message: !message ? "Message is required" : null,
        }
      }, { status: 400 })
    }

    // Validate field lengths
    if (name.length > CONFIG.VALIDATION.MAX_NAME_LENGTH) {
      return NextResponse.json({ error: `Name must be less than ${CONFIG.VALIDATION.MAX_NAME_LENGTH} characters` }, { status: 400 })
    }
    if (subject.length > CONFIG.VALIDATION.MAX_SUBJECT_LENGTH) {
      return NextResponse.json({ error: `Subject must be less than ${CONFIG.VALIDATION.MAX_SUBJECT_LENGTH} characters` }, { status: 400 })
    }
    if (message.length > CONFIG.VALIDATION.MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: `Message must be less than ${CONFIG.VALIDATION.MAX_MESSAGE_LENGTH} characters` }, { status: 400 })
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedData: SanitizedContactData = {
      name: sanitizeInput(name, CONFIG.VALIDATION.MAX_NAME_LENGTH),
      email: email.trim().toLowerCase(),
      subject: sanitizeInput(subject, CONFIG.VALIDATION.MAX_SUBJECT_LENGTH),
      message: sanitizeInput(message, CONFIG.VALIDATION.MAX_MESSAGE_LENGTH),
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent')?.substring(0, 200) || undefined
    }

    // Check for spam patterns
    if (detectSpamPatterns(sanitizedData)) {
      console.log(`Potential spam detected from ${clientIP}: ${sanitizedData.email}`)
      // Still send the email but flag it
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Validate the FROM email domain
    const fromEmail = CONFIG.EMAIL.FROM
    const fromDomain = fromEmail.split('@')[1]

    // Log domain information for debugging
    console.log(`Using FROM email: ${fromEmail}, Domain: ${fromDomain}`)

    // Generate dynamic email content
    const emailHtml = generateEmailTemplate(sanitizedData)
    const emailId = generateEmailId()

    // Send email using Resend with dynamic configuration
    const emailOptions: any = {
      from: CONFIG.EMAIL.FROM,
      to: CONFIG.EMAIL.TO,
      subject: `🚀 New Contact: ${sanitizedData.subject}`,
      html: emailHtml,
      headers: {
        'X-Contact-Form': 'galobyte-contact',
        'X-Submission-Time': sanitizedData.timestamp,
        'X-Client-IP': clientIP,
        'X-Email-ID': emailId,
      }
    }

    // Add reply-to if enabled
    if (CONFIG.EMAIL.REPLY_TO_ENABLED) {
      emailOptions.replyTo = sanitizedData.email
    }

    const { data, error } = await resend.emails.send(emailOptions)

    if (error) {
      console.error("Resend error:", error)

      // Provide specific error messages based on error type
      let errorMessage = "Failed to send email. Please try again later."

      if (error.name === 'validation_error' && error.message?.includes('domain is not verified')) {
        errorMessage = "Email service configuration issue. Please contact support."
        console.error(`Domain verification required for: ${CONFIG.EMAIL.FROM}`)
      } else if ('statusCode' in error && error.statusCode === 403) {
        errorMessage = "Email service authentication issue. Please contact support."
      } else if ('statusCode' in error && error.statusCode === 429) {
        errorMessage = "Email service rate limit exceeded. Please try again later."
      }

      return NextResponse.json({
        error: errorMessage,
        ...(process.env.NODE_ENV === 'development' && {
          debug: error,
          suggestion: "Try setting CONTACT_FROM_EMAIL=onboarding@resend.dev in your .env file for testing"
        })
      }, { status: 500 })
    }    // Log successful submission (in production, use proper logging)
    console.log(`Contact form submission: ${sanitizedData.email} - ${sanitizedData.subject} (ID: ${emailId})`)

    return NextResponse.json({
      success: true,
      messageId: data?.id,
      emailId,
      message: "Your message has been sent successfully! We'll get back to you soon."
    }, { status: 200 })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({
      error: "Internal server error. Please try again later.",
      ...(process.env.NODE_ENV === 'development' && { debug: error })
    }, { status: 500 })
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGINS || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  })
}
