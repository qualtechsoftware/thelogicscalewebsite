"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LEAD_FORM_SUCCESS_RESET_MS, submitLeadForm } from "@/lib/formSubmitLead";

type Props = {
  className?: string;
  label?: string;
  showIcon?: boolean;
  title?: string;
  eyebrow?: string;
  subject?: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

export default function ConnectMentorModal({
  className = "button btn-primary",
  label = "Connect with a mentor",
  showIcon = false,
  title = "Connect with a mentor",
  eyebrow = "Free mentorship session",
  subject = "The Logic Scale — Connect with a mentor"
}: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
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
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();

    setStatus("sending");
    try {
      const ok = await submitLeadForm({
        name,
        email,
        phone,
        subject
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
          ref={panelRef}
          className="mentor-modal-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="mentor-modal-accent" aria-hidden="true" />
          <div className="mentor-modal-handle" aria-hidden="true" />

          <div className="mentor-modal-head">
            <div className="mentor-modal-title-row">
              <div className="mentor-modal-icon-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="mentor-modal-title-block">
                <p className="mentor-modal-eyebrow">{eyebrow}</p>
                <p id={titleId} className="mentor-modal-title" role="heading" aria-level={2}>
                  {title}
                </p>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
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
              <label htmlFor="mentor-modal-name">
                Full name <span className="mentor-modal-req" aria-hidden="true">*</span>
              </label>
              <input
                id="mentor-modal-name"
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
              <label htmlFor="mentor-modal-email">
                Email <span className="mentor-modal-req" aria-hidden="true">*</span>
              </label>
              <input
                id="mentor-modal-email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                autoComplete="email"
                className="mentor-modal-input"
                inputMode="email"
                disabled={status === "sending"}
              />
            </div>
            <div className="mentor-modal-field">
              <label htmlFor="mentor-modal-phone">
                Mobile number <span className="mentor-modal-req" aria-hidden="true">*</span>
              </label>
              <input
                id="mentor-modal-phone"
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
                  {status === "sending" ? (
                    <span className="mentor-modal-spinner" aria-hidden="true" />
                  ) : (
                    <SendIcon />
                  )}
                </span>
                {status === "sending" ? "Sending…" : "Send"}
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
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
        ) : null}
        {label}
      </button>
      {mounted && modal ? createPortal(modal, document.body) : null}
    </>
  );
}
