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
    color: "#0ea5e9",
    title: "Track recommendation",
    text: "Personalized guidance across AWS, Spring, and AI paths."
  },
  {
    color: "#f59e0b",
    title: "Clear next steps",
    text: "A practical plan for your goals, timeline, and role targets."
  },
  {
    color: "#22c55e",
    title: "Honest mentorship",
    text: "Thoughtful guidance from mentors who work with these stacks."
  }
] as const;

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
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
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
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
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
