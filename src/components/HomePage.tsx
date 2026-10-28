import type { CSSProperties } from "react";
import Link from "next/link";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import HeroConsultationForm from "@/components/HeroConsultationForm";
import TypewriterText from "@/components/TypewriterText";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";
import HeroTrustMarquee from "@/components/HeroTrustMarquee";
import LiveCoursesSection from "@/components/LiveCoursesSection";
import { hiringPartners, trustPillars } from "@/app/homeContent";


export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="hero-atmosphere" aria-hidden="true">
          <span className="hero-orb hero-orb--sky" />
          <span className="hero-orb hero-orb--amber" />
          <span className="hero-grid" />
        </div>
        <div className="container">
          <section className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Trusted by 4000+ Learners
              </div>
              <h1>
                <span className="hero-title-line">Empowering Your</span>
                <span className="hero-title-line">Career with</span>
                <span className="hero-title-line hero-title-dynamic">
                  <TypewriterText
                    words={[
                      "Artificial Intelligence",
                      "Cloud Computing",
                      "Full Stack Development",
                      "Data Engineering"
                    ]}
                  />
                </span>
              </h1>
              <p className="subtext">
                Mentor-led, project-based training programs for students, graduates, and professionals targeting high-growth software engineering roles.
              </p>
              <div className="actions">
                <a className="button btn-primary" href="#programs">
                  <span className="cta-btn-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  Explore Programs
                  <span className="cta-btn-arrow" aria-hidden="true">→</span>
                </a>
                <a className="button btn-outline" href="#why-us">
                  <span className="cta-btn-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </span>
                  Why Choose Us
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-num">4000+</span>
                  <span className="stat-label">Learners Trained</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">4.9★</span>
                  <span className="stat-label">Average Rating</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                  <span className="stat-num">10+</span>
                  <span className="stat-label">Expert Trainers</span>
                </div>
              </div>
            </div>

            <aside className="hero-form-card">
              <div className="hero-form-inner">
                <p className="form-eyebrow">Free Consultation</p>
                <h2>Get Personalized Career Guidance</h2>
                <p className="hero-form-lead">Talk to a mentor and find the right AWS, Java, or AI track for your goals.</p>
                <HeroConsultationForm />
              </div>
            </aside>
          </section>
        </div>
      </header>

      <section id="programs" className="section-wrapper dark-section programs-explorer-section">
        <div className="container">
          <div className="programs-explorer-head">
            <p className="section-tag">Course catalog</p>
            <h2 className="section-title">Explore all our courses</h2>
            <p className="section-intro programs-explorer-intro">
              AWS, Spring, and full stack tracks designed for real roles — filter by path and start where you fit.
            </p>
          </div>
          <CourseCatalogGrid showFilters />
        </div>
      </section>

      <section id="why-us" className="section-wrapper why-us-section">
        <div className="why-us-atmosphere" aria-hidden="true">
          <span className="why-us-orb why-us-orb--sky" />
          <span className="why-us-orb why-us-orb--amber" />
          <span className="why-us-grid" />
        </div>
        <div className="container">
          <div className="section-header why-us-header">
            <p className="section-tag">Why choose us</p>
            <h2 className="section-title">Not Just Another Training Program</h2>
            <p className="section-intro">
              Built differently — real mentors, real projects, and outcomes that actually move your career forward.
            </p>
          </div>
          <div className="trust-grid">
            {trustPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="trust-card"
                style={{ "--card-accent": pillar.color } as CSSProperties}
              >
                <div className="trust-card-glow" aria-hidden="true" />
                <div className="trust-card-top">
                  <span className="trust-icon" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pillar.icon} alt="" width={56} height={56} />
                  </span>
                  <span className="trust-num">{pillar.num}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LiveCoursesSection />

      <HeroTrustMarquee />

      <section id="hiring-partners" className="section-wrapper hiring-partners-section">
        <div className="hiring-partners-atmosphere" aria-hidden="true">
          <span className="hiring-partners-orb hiring-partners-orb--sky" />
          <span className="hiring-partners-orb hiring-partners-orb--navy" />
        </div>
        <div className="container">
          <div className="section-header hiring-partners-header">
            <p className="section-tag hiring-partners-tag">Local network</p>
            <h2 className="section-title">Our Local Hiring Partners</h2>
            <p className="section-intro">
              Product and IT teams in Indore and Pune that hire for Java, Spring, cloud, and full stack skills — the network we train you for.
            </p>
          </div>

          {(["Indore", "Pune"] as const).map((city) => {
            const cityPartners = hiringPartners.filter((p) => p.city === city);
            return (
              <div key={city} className="hiring-partners-city-block">
                <div className="hiring-partners-city-label">
                  <span className="hiring-partners-city-dot" aria-hidden="true" />
                  <h3>{city}</h3>
                  <span className="hiring-partners-city-count">{cityPartners.length} partners</span>
                </div>
                <div className="hiring-partners-grid">
                  {cityPartners.map((partner) => (
                    <article key={partner.name} className="hiring-partner-card">
                      <div
                        className={`hiring-partner-logo-plate${
                          partner.logoTone === "dark" ? " hiring-partner-logo-plate--dark" : ""
                        }`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={partner.logo} alt="" className="hiring-partner-logo" />
                      </div>
                      <div className="hiring-partner-meta">
                        <h4 className="hiring-partner-name">{partner.name}</h4>
                        <p className="hiring-partner-focus">{partner.focus}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}

          <p className="hiring-partners-note">
            Interview prep and local introductions across this network. Roles depend on cohort timing and fit.
          </p>
        </div>
      </section>

      <section className="section-wrapper cta-section">
        <div className="cta-atmosphere" aria-hidden="true">
          <span className="cta-orb cta-orb--sky" />
          <span className="cta-orb cta-orb--amber" />
          <span className="cta-grid" />
        </div>
        <div className="container cta-inner">
          <p className="section-tag cta-tag">Free mentorship session</p>
          <h2>Ready to reskill for what&apos;s next?</h2>
          <p className="cta-sub">
            Book a free call with a mentor. We&apos;ll map your goals to the right track—AWS, Spring, or AI—no obligation.
          </p>
          <div className="cta-actions">
            <ConnectMentorModal className="button btn-primary cta-btn-primary" showIcon />
            <Link className="button btn-outline cta-btn-secondary" href="/courses">
              <span className="cta-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M8 7h8M8 11h6" />
                </svg>
              </span>
              Browse courses
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
