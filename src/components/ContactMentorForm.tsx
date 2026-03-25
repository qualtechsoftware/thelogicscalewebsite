"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { LEAD_FORM_SUCCESS_RESET_MS, submitLeadForm } from "@/lib/formSubmitLead";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactMentorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (status !== "success") return;
    const t = window.setTimeout(() => {
      formRef.current?.reset();
      setStatus("idle");
    }, LEAD_FORM_SUCCESS_RESET_MS);
    return () => window.clearTimeout(t);
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const goals = String(fd.get("goals") ?? "").trim();

    setStatus("sending");
    const ok = await submitLeadForm({
      name,
      email,
      phone,
      subject: "The Logic Scale — Contact form",
      extra: goals ? { goals } : undefined
    });
    setStatus(ok ? "success" : "error");
  }

  return (
    <form ref={formRef} className="lead-form contact-mentor-form" onSubmit={handleSubmit}>
      <p className="form-eyebrow">Request a callback</p>
      <p className="contact-form-card-hint">
        Share a few details—we&apos;ll reply to schedule a free call.
      </p>
      {status === "success" ? (
        <p className="lead-form-feedback lead-form-feedback--success lead-form-feedback--top" role="status">
          Form submitted successfully!
        </p>
      ) : null}
      {status === "error" ? (
        <p className="lead-form-feedback lead-form-feedback--error lead-form-feedback--top" role="alert">
          Something went wrong. Please try again or email us at info@thelogicscale.com.
        </p>
      ) : null}
      <label>
        Full name
        <input type="text" name="name" placeholder="Your name" required autoComplete="name" disabled={status === "sending"} />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="Enter your email address" required autoComplete="email" disabled={status === "sending"} />
      </label>
      <label>
        <span className="label-row">
          Phone <span className="required" aria-hidden="true">*</span>
        </span>
        <input type="tel" name="phone" placeholder="Phone number" required autoComplete="tel" disabled={status === "sending"} />
      </label>
      <label>
        Goals or questions
        <textarea
          name="goals"
          rows={4}
          placeholder="What you want to learn, your timeline, AWS vs Spring vs AI, etc."
          className="lead-form-textarea"
          disabled={status === "sending"}
        />
      </label>
      <button type="submit" className="button btn-primary form-submit contact-form-submit" disabled={status === "sending"}>
        <span className="cta-btn-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </span>
        {status === "sending" ? "Sending…" : "Connect with a mentor"}
      </button>
      <p className="form-note contact-form-note">Submissions are sent securely; we typically respond within 4 hours.</p>
    </form>
  );
}
