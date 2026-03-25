"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { LEAD_FORM_SUCCESS_RESET_MS, submitLeadForm } from "@/lib/formSubmitLead";

type Status = "idle" | "sending" | "success" | "error";

export default function HeroConsultationForm() {
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

    setStatus("sending");
    const ok = await submitLeadForm({
      name,
      email,
      phone,
      subject: "The Logic Scale — Free consultation (homepage)"
    });
    setStatus(ok ? "success" : "error");
  }

  return (
    <>
      <form ref={formRef} className="lead-form" onSubmit={handleSubmit}>
        {status === "success" ? (
          <p className="lead-form-feedback lead-form-feedback--success lead-form-feedback--top" role="status">
            Form submitted successfully!
          </p>
        ) : null}
        {status === "error" ? (
          <p className="lead-form-feedback lead-form-feedback--error lead-form-feedback--top" role="alert">
            Something went wrong. Please try again or contact us directly.
          </p>
        ) : null}
        <label>
          Full Name
          <input type="text" name="name" placeholder="Enter your full name" required autoComplete="name" disabled={status === "sending"} />
        </label>
        <label>
          Email Address
          <input type="email" name="email" placeholder="Enter your email address" required autoComplete="email" disabled={status === "sending"} />
        </label>
        <label>
          <span className="label-row">
            Phone Number <span className="required">*</span>
          </span>
          <input type="tel" name="phone" placeholder="Enter your phone number" required autoComplete="tel" disabled={status === "sending"} />
        </label>
        <button type="submit" className="button btn-primary form-submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Book Free Counseling →"}
        </button>
      </form>
      <p className="form-note">Our advisor will call within 4 hours.</p>
    </>
  );
}
