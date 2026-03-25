import type { CSSProperties } from "react";
import Link from "next/link";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import HeroConsultationForm from "@/components/HeroConsultationForm";
import TypewriterText from "@/components/TypewriterText";
import FallbackImg from "@/components/FallbackImg";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";
import { InstructorTagList } from "@/components/TagLists";
import { instructors, trustPillars } from "@/app/homeContent";

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
                <div className="stat"><span className="stat-num">10+</span><span className="stat-label">Expert Mentors</span></div>
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
                <span className="trust-num">{pillar.num}</span>
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

      <section id="mentors" className="section-wrapper mentors-section">
        <div className="container">
          <div className="mentors-header">
            <div className="section-header">
              <p className="section-tag mentors-tag">Our Mentors</p>
              <h2>Learn from Engineers Who Build at Scale</h2>
              <p className="section-intro">Our mentors are active software professionals — not just teachers. They bring real delivery experience into every session.</p>
            </div>
          </div>
          <div className="instructors-grid">
            {instructors.map((ins) => (
              <article key={ins.name} className="instructor-card">
                <div className="instructor-card-banner">
                  <FallbackImg src={ins.photo} alt={ins.name} className="instructor-photo" />
                </div>
                <div className="instructor-info">
                  <div className="instructor-name-row">
                    <div>
                      <p className="instructor-name">{ins.name}</p>
                      <p className="instructor-role">{ins.role}</p>
                    </div>
                    <a href={ins.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                  <p className="instructor-company">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="M3 21h18M3 7v14M21 7v14M6 11h3m-3 4h3m6-4h3m-3 4h3M9 21V7l6-4v18"/></svg>
                    {ins.company}
                  </p>
                  {"certification" in ins ? (
                    <p className="instructor-certification">{String(ins.certification)}</p>
                  ) : null}
                  <p className="instructor-bio">{ins.bio}</p>
                  <div className="instructor-tags">
                    <InstructorTagList tags={ins.tags} />
                  </div>
                </div>
              </article>
            ))}
          </div>
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
