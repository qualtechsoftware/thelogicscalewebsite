import type { CSSProperties } from "react";
import Link from "next/link";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import HeroConsultationForm from "@/components/HeroConsultationForm";
import TypewriterText from "@/components/TypewriterText";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";
import { hiringPartners, trustPillars } from "@/app/homeContent";


export default function HomePage() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <section className="hero-layout">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Trusted by 1000+ Learners
              </div>
              <h1>
                <span className="hero-title-line">Empowering Your</span>
                <span className="hero-title-line">Career with</span>
                <span className="hero-title-line hero-title-dynamic">
                  <TypewriterText words={["Artificial Intelligence", "Cloud Computing", "Full Stack Development", "Data Engineering"]} />
                </span>
              </h1>
              <p className="subtext">
                Mentor-led, project-based training programs for students, graduates, and professionals targeting high-growth software engineering roles.
              </p>
              <div className="actions">
                <a className="button btn-primary" href="#programs">Explore Programs →</a>
                <a className="button btn-outline" href="/#why-us">Why Choose Us</a>
              </div>
              <div className="hero-stats">
                <div className="stat"><span className="stat-num">1000+</span><span className="stat-label">Learners Trained</span></div>
                <div className="stat-divider" />
                <div className="stat"><span className="stat-num">4.9★</span><span className="stat-label">Average Rating</span></div>
                <div className="stat-divider" />
                <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Expert Trainers</span></div>
              </div>
            </div>

            <aside className="hero-form-card">
              <div className="hero-form-inner">
                <p className="form-eyebrow">Free Consultation</p>
                <h2>Get Personalized Career Guidance</h2>
                <HeroConsultationForm />
              </div>
            </aside>
          </section>
        </div>
      </header>

      <section id="why-us" className="section-wrapper why-us-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Why Choose Us</p>
            <h2>Not Just Another Training Program</h2>
            <p className="section-intro">We are built differently — with real mentors, real projects, and a relentless focus on outcomes that actually matter to your career.</p>
          </div>
          <div className="trust-grid">
            {trustPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="trust-card"
                style={{ "--card-accent": pillar.color } as CSSProperties}
              >
                <div className="trust-card-top">
                  <span className="trust-icon" aria-hidden="true">
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

      <section id="programs" className="section-wrapper dark-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Programs</p>
            <h2>Choose Your Learning Track</h2>
            <p className="section-intro">High-demand programs built for real engineering roles — not just certifications.</p>
          </div>
          <CourseCatalogGrid />
        </div>
      </section>

      <section id="hiring-partners" className="section-wrapper hiring-partners-section">
        <div className="container">
          <div className="section-header hiring-partners-header">
            <p className="section-tag hiring-partners-tag">Hiring Partners</p>
            <h2>Our Local Hiring Partners</h2>
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
