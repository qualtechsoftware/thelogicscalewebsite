"use client";

import { useCallback, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  stars: number;
  quote: string;
  linkedin?: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollStep = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return 0;
    const card = el.querySelector(".tc-mosaic-card") as HTMLElement | null;
    const gap = 16;
    return (card?.offsetWidth ?? 280) + gap;
  }, []);

  const scrollByDir = useCallback(
    (dir: -1 | 1) => {
      const el = viewportRef.current;
      if (!el) return;
      el.scrollBy({ left: dir * scrollStep(), behavior: "smooth" });
    },
    [scrollStep]
  );

  useEffect(() => {
    const id = setInterval(() => scrollByDir(1), 6500);
    return () => clearInterval(id);
  }, [scrollByDir]);

  return (
    <div className="tc-root">
      <div className="tc-viewport" ref={viewportRef}>
        <div className="tc-track">
          {testimonials.map((t, i) => (
            <article key={`${t.name}-${i}`} className="tc-mosaic-card">
              <div className="tc-mosaic-top">
                <div className="tc-mosaic-author">
                  <span className="tc-mosaic-name">{t.name}</span>
                  <span className="tc-mosaic-title">{t.role}</span>
                  <span className="tc-mosaic-stars" aria-hidden="true">
                    {"★".repeat(t.stars)}
                  </span>
                </div>
                {t.linkedin ? (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tc-linkedin"
                    aria-label={`${t.name} on LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                ) : null}
              </div>
              <p className="tc-mosaic-quote">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="tc-nav">
        <button type="button" className="tc-arrow tc-arrow--nav" onClick={() => scrollByDir(-1)} aria-label="Previous testimonials">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button type="button" className="tc-arrow tc-arrow--nav" onClick={() => scrollByDir(1)} aria-label="Next testimonials">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="20" height="20">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
