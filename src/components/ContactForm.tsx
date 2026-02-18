"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { type Locale, getUi } from "@/content/site";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/actions/contact";

interface ContactFormProps {
  locale: Locale;
  pageSource?: string;
}

const initialState: ContactFormState = { success: false };

export function ContactForm({ locale, pageSource }: ContactFormProps) {
  const t = getUi(locale);
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  if (state.success && state.message) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-success-light border border-success/20 text-center"
      >
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <p className="text-lg font-semibold text-success">{t.formSuccess}</p>
      </motion.div>
    );
  }

  const errors = state.errors || {};

  return (
    <form action={formAction} className="space-y-5" id="contact-form">
      <input type="hidden" name="pageSource" value={pageSource || ""} />
      {/* Honeypot – hidden from users */}
      <div
        className="absolute -z-10 opacity-0 h-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Error summary */}
      {Object.keys(errors).length > 0 && (
        <div className="p-4 rounded-2xl bg-danger-light border border-danger/20 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
          <div className="text-sm text-danger">
            <p className="font-semibold mb-1">{t.formError}</p>
            <ul className="list-disc list-inside space-y-0.5">
              {Object.entries(errors).map(([field, messages]) =>
                messages?.map((msg, i) => <li key={`${field}-${i}`}>{msg}</li>),
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {t.firstName} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-300"
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-danger">{errors.firstName[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {t.lastName} <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-300"
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-danger">{errors.lastName[0]}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {t.email} <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-300"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-danger">{errors.email[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-1.5"
          >
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-300"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-border bg-bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-all duration-300 resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-light disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-sm hover:shadow-md"
      >
        {isPending ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {t.sendMessage}
      </button>
    </form>
  );
}
