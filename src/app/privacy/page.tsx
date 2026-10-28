import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Logic Scale",
  description: "How The Logic Scale collects, uses, and protects your information."
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-atmosphere" aria-hidden="true">
        <span className="legal-orb legal-orb--sky" />
        <span className="legal-orb legal-orb--amber" />
      </div>
      <div className="container legal-page-inner">
        <a className="legal-back" href="/">← Back to home</a>
        <p className="section-tag">Legal</p>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how The Logic Scale handles personal information when you use
          our website and submit requests.
        </p>

        <p>
          <strong>Who we are:</strong> The Logic Scale — contact{" "}
          <a className="legal-contact-link" href="mailto:info@thelogicscale.com">
            info@thelogicscale.com
          </a>
          .
        </p>

        <p>
          <strong>Information we collect:</strong> When you submit forms on our website, you may share
          your name, email, phone, and any message you include.
        </p>

        <p>
          <strong>How we use information:</strong> We use it to respond to your request, share program
          details, and coordinate calls. We may also use it to improve our services.
        </p>

        <p>
          <strong>Who we share information with:</strong> We do not sell personal information. We may
          share it with trusted service providers that help process submissions.
        </p>

        <p>
          <strong>Security:</strong> We use reasonable safeguards to help protect personal information.
        </p>

        <p>
          <strong>Retention:</strong> We keep information only as long as needed for the purpose it was
          collected and to meet legal requirements.
        </p>

        <p>
          <strong>Your choices:</strong> Where applicable, you can contact us to ask about or update your
          information.
        </p>

        <p>
          <strong>Updates:</strong> We may update this page from time to time. The latest version will be
          posted here.
        </p>

        <p>
          For questions, contact us at{" "}
          <a className="legal-contact-link" href="mailto:info@thelogicscale.com">
            info@thelogicscale.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
