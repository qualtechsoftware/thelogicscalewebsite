export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-atmosphere" aria-hidden="true">
        <span className="site-footer-orb site-footer-orb--sky" />
        <span className="site-footer-orb site-footer-orb--amber" />
      </div>
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <a href="/" className="site-footer-logo-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/footer-logo.png"
              alt="The Logic Scale"
              className="site-footer-logo"
              width={215}
              height={75}
            />
          </a>
          <p className="site-footer-tagline">
            Practical training in AWS, Spring, and AI—mentor-led, project-based, built for college students &amp; working professionals.
          </p>
        </div>

        <nav className="site-footer-nav" aria-label="Footer">
          <div className="site-footer-col">
            <p className="site-footer-heading">Learn</p>
            <ul>
              <li><a href="/courses">Programs</a></li>
              <li><a href="/#hiring-partners">Hiring Partners</a></li>
              <li><a href="/about">About us</a></li>
            </ul>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">Get started</p>
            <ul>
              <li><a href="/contact">Book a free session</a></li>
              <li><a href="mailto:info@thelogicscale.com">Email us</a></li>
            </ul>
          </div>
          <div className="site-footer-col site-footer-col--contact">
            <p className="site-footer-heading">Contact</p>
            <ul>
              <li>
                <a href="mailto:info@thelogicscale.com">info@thelogicscale.com</a>
              </li>
              <li className="site-footer-address">
                <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
                  <path d="M12 2.5a7.25 7.25 0 0 0-7.25 7.25c0 5.2 6.1 11.05 6.72 11.64a.77.77 0 0 0 1.06 0c.62-.59 6.72-6.44 6.72-11.64A7.25 7.25 0 0 0 12 2.5Zm0 9.9a2.65 2.65 0 1 1 0-5.3 2.65 2.65 0 0 1 0 5.3Z" />
                </svg>
                <span>4th Floor, THE ARC, Behind TCS, Super Corridor, Indore, 453112</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="site-footer-bottom">
        <div className="container site-footer-bottom-inner site-footer-bottom-row">
          <p className="site-footer-copy">
            © {year} The Logic Scale. All rights reserved.
          </p>
          <nav className="site-footer-legal" aria-label="Legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
