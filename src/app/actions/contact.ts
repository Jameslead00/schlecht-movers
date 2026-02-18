"use server";

import { z } from "zod";

// ─── In-memory rate limiter ────────────────────────────────────────────
const submissions = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const entry = submissions.get(key);
  if (!entry || now > entry.resetAt) {
    submissions.set(key, { count: 1, resetAt: now + 60_000 }); // 1 min window
    return true;
  }
  if (entry.count >= 5) return false; // max 5 per minute
  entry.count++;
  return true;
}

// ─── Schema ────────────────────────────────────────────────────────────
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  message: z.string().optional(),
  pageSource: z.string().optional(),
  // Honeypot fields
  website: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check
  const website = formData.get("website") as string;
  if (website && website.length > 0) {
    // Silently succeed to not tip off bots
    return { success: true, message: "Thank you!" };
  }

  // Rate limiting by a simple key (in production, use IP)
  const rateLimitKey = `${formData.get("email")}`;
  if (!checkRateLimit(rateLimitKey)) {
    return {
      success: false,
      message: "Too many submissions. Please wait a moment.",
    };
  }

  const raw = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    message: (formData.get("message") as string) || undefined,
    pageSource: (formData.get("pageSource") as string) || undefined,
    website: website || undefined,
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // ── Simulated send (replace with real email service) ──
  console.log("=== NEW CONTACT FORM SUBMISSION ===");
  console.log(JSON.stringify(result.data, null, 2));
  console.log("===================================");

  return {
    success: true,
    message: "Message sent successfully!",
  };
}
