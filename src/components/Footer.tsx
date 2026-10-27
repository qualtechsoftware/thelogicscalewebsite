export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="site-footer-brand">
          <a href="/" className="site-footer-logo-link">
            <img src="/footer-logo.png" alt="The Logic Scale" className="site-footer-logo" />
          </a>
          <p className="site-footer-tagline">
            Practical training in AWS, Spring, and AI—mentor-led, project-based, built for College students & working professionals.
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
            </ul>
          </div>
          <div className="site-footer-col">
            <p className="site-footer-heading">Contact</p>
            <ul>
              <li>
                <a href="mailto:info@thelogicscale.com">info@thelogicscale.com</a>
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
