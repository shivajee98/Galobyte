// Contact form types and interfaces

import { LucideIcon } from "lucide-react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // Bot detection field
}

export interface SanitizedContactData extends Omit<ContactFormData, 'honeypot'> {
  timestamp: string;
  userAgent?: string;
}

export interface ContactFormResponse {
  success: boolean;
  messageId?: string;
  message?: string;
  error?: string;
  resetTime?: string;
  details?: Record<string, string | null>;
  debug?: any;
}

export interface RateLimitRecord {
  count: number;
  resetTime: number;
}

export interface RateLimitResult {
  allowed: boolean;
  resetTime?: number;
}

export interface EmailConfig {
  FROM: string;
  TO: string[];
  REPLY_TO_ENABLED: boolean;
}

export interface ValidationConfig {
  MAX_MESSAGE_LENGTH: number;
  MAX_SUBJECT_LENGTH: number;
  MAX_NAME_LENGTH: number;
}

export interface RateLimitConfig {
  MAX_REQUESTS: number;
  WINDOW_MS: number;
}

export interface APIConfig {
  RATE_LIMIT: RateLimitConfig;
  EMAIL: EmailConfig;
  VALIDATION: ValidationConfig;
}


export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
  benefits: string[];
  technologies?: string[];
  metrics?: { value: string; label: string }[];
  features?: string[];
}
