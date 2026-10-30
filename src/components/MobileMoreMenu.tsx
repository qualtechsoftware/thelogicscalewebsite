"use client";

import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/#hiring-partners", label: "Hiring Partners" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
] as const;

export default function MobileMoreMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const el = rootRef.current;
      if (!el) return;
      const target = e.target as Node | null;
      if (target && !el.contains(target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open]);

  return (
    <div className="mobile-more" ref={rootRef}>
      <button
        type="button"
        className={`mobile-more-trigger${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="mobile-hamburger" aria-hidden="true">
          {open ? (
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </span>
      </button>

      {open ? (
        <div id={panelId} className="mobile-more-menu" role="menu" aria-label="More">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mobile-more-item"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
