import type { Metadata } from "next";
import ContactMentorForm from "@/components/ContactMentorForm";

export const metadata: Metadata = {
  title: "Contact Us | The Logic Scale",
  description:
    "Book a free mentorship session or reach out to The Logic Scale about AWS, Spring, and AI training programs."
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="container contact-layout">
        <div className="contact-col contact-col--copy">
          <h1>Contact us</h1>
          <p className="contact-page-lead">
            Tell us what you&apos;re aiming for—we&apos;ll help you choose a track and, if it helps, book a free call with
            a mentor. No pressure.
          </p>
          <p className="contact-page-email">
            Email:{" "}
            <a className="legal-contact-link" href="mailto:info@thelogicscale.com">
              info@thelogicscale.com
            </a>
          </p>

          <div className="contact-mentor-copy">
            <p className="contact-copy-tag">Free mentorship session</p>
            <h2 className="contact-copy-heading">Ready to reskill for what&apos;s next?</h2>
            <p className="contact-copy-sub">
              Book a free call with a mentor. We&apos;ll map your goals to the right track—AWS, Spring, or AI—no
              obligation.
            </p>
          </div>

          <div className="contact-what-next">
            <h3 className="contact-what-next-title">What you&apos;ll get on the call</h3>
            <div className="contact-benefits-grid">
              <div className="contact-benefit-card">
                <span className="contact-benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="contact-benefit-text">Personalized track recommendation (AWS / Spring / AI)</p>
              </div>
              <div className="contact-benefit-card">
                <span className="contact-benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="contact-benefit-text">A clear next-step plan for your career</p>
              </div>
              <div className="contact-benefit-card">
                <span className="contact-benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <p className="contact-benefit-text">No pressure—just guidance and honest advice</p>
              </div>
            </div>

          </div>
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
