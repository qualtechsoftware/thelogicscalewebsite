import { AwsCertMenuIcon, SpringAiMenuIcon, SpringStackMenuIcon } from "@/components/NavCourseMenuIcons";
import ConnectMentorModal from "@/components/ConnectMentorModal";

const awsCourses = [
  { href: "/programs/aws-cloud-practitioner", label: "AWS Cloud Practitioner" },
  { href: "/programs/aws-certified-developer-associate", label: "AWS Certified Developer Associate", recommended: true },
  { href: "/programs/aws-certified-solutions-architect", label: "AWS Certified Solutions Architect" }
] as const;

const springCourses = [
  { href: "/programs/spring-ai", label: "Spring AI" },
  { href: "/programs/spring-boot-spring-ai", label: "Spring Boot + Spring AI" },
  { href: "/programs/java-full-stack-developer", label: "Java Full Stack Developer", recommended: true }
] as const;

/** Sticky nav with course dropdown. “Explore Courses” opens the full catalog; items link to program pages. */
export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="announce-banner" role="region" aria-label="AWS batch announcement">
        <div className="announce-banner-glow" aria-hidden="true" />
        <div className="announce-banner-track" aria-hidden="true" />
        <div className="container announce-banner-inner">
          <span className="announce-banner-batch">
            <span className="announce-banner-live" aria-hidden="true" />
            <span className="announce-banner-batch-mark">AWS</span>
            <span className="announce-banner-batch-label">Batch live</span>
          </span>
          <p className="announce-banner-text">
            Limited seats left in this cohort. Secure your spot today!
          </p>
          <ConnectMentorModal
            className="announce-banner-cta"
            label="Enroll now →"
            eyebrow="AWS batch enrollment"
            title="Enroll in the live AWS batch"
            subject="The Logic Scale — AWS Batch enrollment"
          />
        </div>
      </div>
      <div className="container">
        <nav className="navbar">
          <div className="nav-left">
            <a className="brand" href="/">
              <img src="/thelogicscale-logo.png" alt="The Logic Scale" className="brand-logo" />
            </a>
            <div className="courses-menu courses-menu--desktop">
              <a className="courses-trigger" href="/courses">
                <span>Explore Courses</span>
                <span className="courses-trigger-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </a>
              <div className="courses-dropdown" role="menu" aria-label="Course programs">
                <div className="courses-dropdown-head">
                  <p className="courses-dropdown-kicker">Programs</p>
                  <p className="courses-dropdown-title">Pick a track to get started</p>
                </div>
                <div className="courses-dropdown-body">
                  <p className="courses-dropdown-group" id="menu-aws">
                    <span className="courses-dropdown-group-dot is-aws" aria-hidden="true" />
                    AWS certifications
                  </p>
                  {awsCourses.map((c) => (
                    <a key={c.href} href={c.href} className="courses-dropdown-item is-aws" role="menuitem">
                      <span className="courses-item-main">
                        <span className="courses-item-icon" aria-hidden="true">
                          <AwsCertMenuIcon />
                        </span>
                        <span className="courses-item-text">
                          {c.label}
                          {"recommended" in c && c.recommended ? (
                            <span className="courses-item-rec">Recommended</span>
                          ) : null}
                        </span>
                      </span>
                      <span className="courses-item-chevron" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
                      </span>
                    </a>
                  ))}
                  <p className="courses-dropdown-group" id="menu-spring">
                    <span className="courses-dropdown-group-dot is-spring" aria-hidden="true" />
                    Spring &amp; AI
                  </p>
                  {springCourses.map((c) => (
                    <a key={c.href} href={c.href} className="courses-dropdown-item is-spring" role="menuitem">
                      <span className="courses-item-main">
                        <span className="courses-item-icon" aria-hidden="true">
                          {c.href.includes("spring-boot") || c.href.includes("java-full-stack") ? (
                            <SpringStackMenuIcon />
                          ) : (
                            <SpringAiMenuIcon />
                          )}
                        </span>
                        <span className="courses-item-text">
                          {c.label}
                          {"recommended" in c && c.recommended ? (
                            <span className="courses-item-rec">Recommended</span>
                          ) : null}
                        </span>
                      </span>
                      <span className="courses-item-chevron" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M7 17L17 7M17 7H9M17 7v8" /></svg>
                      </span>
                    </a>
                  ))}
                </div>
                <a className="courses-dropdown-footer" href="/courses">
                  View all courses
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <details className="mobile-nav-details">
            <summary className="mobile-nav-summary" aria-label="Open menu">
              <span className="mobile-hamburger" aria-hidden="true">
                <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </svg>
              </span>
            </summary>
            <div className="mobile-nav-links" aria-label="Mobile navigation links">
              <a href="/#hiring-partners">Hiring Partners</a>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
            </div>
          </details>

          <div className="nav-links nav-right">
            <a href="/#hiring-partners">Hiring Partners</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
