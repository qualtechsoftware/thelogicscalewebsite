import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Logic Scale",
  description: "Terms governing use of The Logic Scale website and training services."
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="container legal-page-inner">
        <a className="legal-back" href="/">← Back to home</a>
        <h1>Terms of Service</h1>
        <p>
          These Terms set out the rules for using our website and interacting with our training and
          mentorship services.
        </p>

        <p>
          <strong>Agreement:</strong> By using the website or submitting a request, you agree to these
          Terms.
        </p>

        <p>
          <strong>Program information:</strong> Details on the website are for general guidance. Final
          details may be confirmed during your mentorship/advisory process.
        </p>

        <p>
          <strong>No guarantee:</strong> We provide education and guidance, but outcomes may vary based
          on your effort and other factors.
        </p>

        <p>
          <strong>Acceptable use:</strong> Please don’t misuse the website or try to access it in
          an unauthorized way.
        </p>

        <p>
          <strong>Content:</strong> Our website content is protected. You may not copy or reuse it
          without permission.
        </p>

        <p>
          <strong>Availability:</strong> We may update, change, or stop parts of the website or services.
        </p>

        <p>
          <strong>Liability:</strong> To the extent allowed by law, we are not responsible for indirect or
          unexpected losses related to your use of the website.
        </p>

        <p>
          <strong>Termination:</strong> We may suspend or stop providing access if we believe these Terms
          are being violated.
        </p>

        <p>
          <strong>Contact:</strong> If you have questions, contact us at{" "}
          <a className="legal-contact-link" href="mailto:info@thelogicscale.com">
            info@thelogicscale.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
