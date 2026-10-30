import type { CSSProperties } from "react";
import type { Metadata } from "next";
import ContactMentorForm from "@/components/ContactMentorForm";

export const metadata: Metadata = {
  title: "Contact Us | The Logic Scale",
  description:
    "Book a free mentorship session or reach out to The Logic Scale about AWS, Spring, and AI training programs."
};

const callBenefits = [
  {
    tone: "tracks" as const,
    color: "#0ea5e9",
    title: "Track recommendation",
    text: "Personalized guidance across AWS, Spring, and AI paths."
  },
  {
    tone: "steps" as const,
    color: "#f59e0b",
    title: "Clear next steps",
    text: "A practical plan for your goals, timeline, and role targets."
  },
  {
    tone: "mentor" as const,
    color: "#22c55e",
    title: "Honest mentorship",
    text: "Thoughtful guidance from mentors who work with these stacks."
  }
] as const;

function BenefitIcon({ tone }: { tone: (typeof callBenefits)[number]["tone"] }) {
  if (tone === "tracks") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="2.1" />
        <path d="M12 7.2v4.4l2.8 2.8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.35" fill="currentColor" />
      </svg>
    );
  }

  if (tone === "steps") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M4 19h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <rect x="5.5" y="11" width="4" height="6" rx="1" fill="currentColor" opacity="0.35" />
        <rect x="10" y="7" width="4" height="10" rx="1" fill="currentColor" opacity="0.65" />
        <rect x="14.5" y="4" width="4" height="13" rx="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" fill="currentColor" />
      <circle cx="16.2" cy="9.2" r="2.5" fill="currentColor" opacity="0.55" />
      <path
        d="M3.8 18.5c.55-3 2.7-4.6 5.2-4.6s4.65 1.6 5.2 4.6"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M14.2 15.2c1.45-.55 3.15-.35 4.35.85"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-atmosphere" aria-hidden="true">
        <span className="contact-orb contact-orb--sky" />
        <span className="contact-orb contact-orb--amber" />
        <span className="contact-grid" />
      </div>
      <div className="container contact-layout">
        <div className="contact-col contact-col--copy">
          <header className="contact-hero">
            <p className="section-tag">Get in touch</p>
            <h1>Let&apos;s map your next move</h1>
            <p className="contact-page-lead">
              Tell us what you&apos;re aiming for—we&apos;ll help you choose a track and, if it helps, book a free call with
              a mentor. We&apos;re happy to guide you at your pace.
            </p>
            <p className="contact-page-email">
              <span className="contact-email-chip">
                <span className="contact-email-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor">
                    <path d="M3.5 6.75A2.25 2.25 0 0 1 5.75 4.5h12.5A2.25 2.25 0 0 1 20.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.75a2.25 2.25 0 0 1-2.25-2.25V6.75Zm1.7-.35 6.35 4.55a.75.75 0 0 0 .9 0l6.35-4.55a.75.75 0 0 0-.7-1.3H5.9a.75.75 0 0 0-.7 1.3Z" />
                  </svg>
                </span>
                <a className="legal-contact-link" href="mailto:info@thelogicscale.com">
                  info@thelogicscale.com
                </a>
              </span>
            </p>
          </header>

          <section className="contact-what-next" aria-labelledby="contact-benefits-title">
            <p className="section-tag">On the call</p>
            <h2 id="contact-benefits-title" className="contact-what-next-title">
              What you&apos;ll walk away with
            </h2>
            <div className="contact-benefits-grid">
              {callBenefits.map((item) => (
                <article
                  key={item.title}
                  className="contact-benefit-card"
                  style={{ "--card-accent": item.color } as CSSProperties}
                >
                  <span className="contact-benefit-glow" aria-hidden="true" />
                  <span className="contact-benefit-icon" aria-hidden="true">
                    <BenefitIcon tone={item.tone} />
                  </span>
                  <div className="contact-benefit-copy">
                    <h3 className="contact-benefit-title">{item.title}</h3>
                    <p className="contact-benefit-text">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="contact-col contact-col--form">
          <div className="hero-form-card contact-form-card">
            <div className="hero-form-inner">
              <ContactMentorForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
