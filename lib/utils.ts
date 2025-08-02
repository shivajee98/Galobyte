import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// Utility functions for contact form processing

import type { SanitizedContactData } from "./types";

/**
 * Input sanitization function
 * Removes potential HTML tags and limits length
 */
export function sanitizeInput(input: string, maxLength: number = 1000): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .substring(0, maxLength);
}

/**
 * Enhanced email validation
 * Follows RFC 5322 standard with practical length limits
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}


/**
 * Extract client IP from request headers
 */
export function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const connectingIP = request.headers.get('x-connecting-ip');

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return realIP || connectingIP || 'unknown';
}

/**
 * Generate unique email ID for tracking
 */
export function generateEmailId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Format timestamp for email display
 */
export function formatTimestamp(timestamp: string): string {
  return new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

/**
 * Detect potential spam patterns
 */
export function detectSpamPatterns(data: SanitizedContactData): boolean {
  const spamKeywords = ['viagra', 'cialis', 'loan', 'casino', 'bitcoin', 'crypto'];
  const content = `${data.subject} ${data.message}`.toLowerCase();

  // Check for spam keywords
  const hasSpamKeywords = spamKeywords.some(keyword => content.includes(keyword));

  // Check for excessive links
  const linkCount = (content.match(/https?:\/\//g) || []).length;
  const hasExcessiveLinks = linkCount > 3;

  // Check for repeated characters
  const hasRepeatedChars = /(.)\1{10,}/.test(content);

  return hasSpamKeywords || hasExcessiveLinks || hasRepeatedChars;
}

/**
 * Clean and normalize phone numbers (if provided in message)
 */
export function extractPhoneNumbers(text: string): string[] {
  const phoneRegex = /(\+?1?[-.\s]?)?(\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
  const matches = text.match(phoneRegex) || [];
  return matches.map(phone => phone.replace(/[^\d+]/g, ''));
}
