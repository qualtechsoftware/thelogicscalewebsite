"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LEAD_FORM_SUCCESS_RESET_MS, submitLeadForm } from "@/lib/formSubmitLead";

type Props = {
  className?: string;
  courseTitle?: string;
  showIcon?: boolean;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.32 1.6.59 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.73-1.16a2 2 0 0 1 2.11-.45c.75.27 1.54.47 2.35.59A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
  );
}

export default function DownloadBrochureModal({
  className = "button btn-outline course-detail-download-btn",
  courseTitle,
  showIcon = false
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const titleId = useId();

  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<SubmitStatus>("idle");

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
  }, []);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setStatus("idle");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && statusRef.current !== "sending") close();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open || status !== "success") return;
    const t = window.setTimeout(() => {
      formRef.current?.reset();
      close();
    }, LEAD_FORM_SUCCESS_RESET_MS);
    return () => window.clearTimeout(t);
  }, [open, status, close]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();

    setStatus("sending");
    try {
      const ok = await submitLeadForm({
        name,
        phone,
        subject: "The Logic Scale — Download brochure",
        extra: courseTitle ? { course: courseTitle } : undefined
      });
      setStatus(ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const modal =
    open && mounted ? (
      <div
        className="mentor-modal-root"
        role="presentation"
        onMouseDown={(e) => {
          if (e.target === e.currentTarget && status !== "sending") close();
        }}
      >
        <div
          className="mentor-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mentor-modal-accent" aria-hidden="true" />

          <div className="mentor-modal-head">
            <div className="mentor-modal-title-row">
              <div className="mentor-modal-icon-wrap" aria-hidden="true">
                <PhoneIcon />
              </div>
              <div className="mentor-modal-title-block">
                <p className="mentor-modal-eyebrow">Download brochure</p>
                <h2 id={titleId} className="mentor-modal-title">
                  Get your program guide
                </h2>
              </div>
            </div>

            <button
              ref={closeBtnRef}
              type="button"
              className="mentor-modal-close"
              onClick={close}
              aria-label="Close dialog"
              disabled={status === "sending"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mentor-modal-intro">
            Enter your details to download the brochure{courseTitle ? <> for <strong>{courseTitle}</strong></> : null}.
          </div>

          <form ref={formRef} className="mentor-modal-form" onSubmit={handleSubmit}>
            {status === "success" ? (
              <p className="mentor-modal-feedback mentor-modal-feedback--success mentor-modal-feedback--top" role="status">
                Form submitted successfully!
              </p>
            ) : null}
            {status === "error" ? (
              <p className="mentor-modal-feedback mentor-modal-feedback--error mentor-modal-feedback--top" role="alert">
                Something went wrong. Please try again or email us directly.
              </p>
            ) : null}

            <div className="mentor-modal-field">
              <label htmlFor="download-brochure-name">
                Full name <span className="mentor-modal-req" aria-hidden="true">*</span>
              </label>
              <input
                id="download-brochure-name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                autoComplete="name"
                className="mentor-modal-input"
                disabled={status === "sending"}
              />
            </div>

            <div className="mentor-modal-field">
              <label htmlFor="download-brochure-phone">
                Mobile number <span className="mentor-modal-req" aria-hidden="true">*</span>
              </label>
              <input
                id="download-brochure-phone"
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                required
                autoComplete="tel"
                className="mentor-modal-input"
                inputMode="tel"
                disabled={status === "sending"}
              />
            </div>

            <div className="mentor-modal-actions">
              <button
                type="button"
                className="mentor-modal-btn mentor-modal-btn--ghost"
                onClick={close}
                disabled={status === "sending"}
              >
                <span className="mentor-modal-btn-icon">
                  <CancelIcon />
                </span>
                Cancel
              </button>

              <button type="submit" className="mentor-modal-btn mentor-modal-btn--primary" disabled={status === "sending"}>
                <span className="mentor-modal-btn-icon">
                  {status === "sending" ? <span className="mentor-modal-spinner" aria-hidden="true" /> : <SendIcon />}
                </span>
                {status === "sending" ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)} aria-haspopup="dialog">
        {showIcon ? (
          <span className="cta-btn-icon" aria-hidden="true">
            <DownloadIcon className="course-detail-download-icon" />
          </span>
        ) : null}
        Download brochure
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}

