import {
  AwsCertMenuIcon,
  JavaMenuIcon,
  SpringAiMenuIcon,
  SpringBootMenuIcon
} from "@/components/NavCourseMenuIcons";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import MobileMoreMenu from "@/components/MobileMoreMenu";

const awsCourses = [
  { href: "/programs/aws-certified-developer-associate", label: "AWS Certified Developer Associate", recommended: true, icon: "aws" as const },
  { href: "/programs/aws-cloud-practitioner", label: "AWS Cloud Practitioner", icon: "aws" as const },
  { href: "/programs/aws-certified-solutions-architect", label: "AWS Certified Solutions Architect", icon: "aws" as const }
] as const;

const springCourses = [
  { href: "/programs/java-full-stack-developer", label: "Java Full Stack Developer", recommended: true, icon: "java" as const },
  { href: "/programs/spring-ai", label: "Spring AI", icon: "spring-ai" as const },
  { href: "/programs/spring-boot-spring-ai", label: "Spring Boot + Spring AI", icon: "spring-boot" as const }
] as const;

function CourseMenuIcon({ kind }: { kind: "aws" | "java" | "spring-ai" | "spring-boot" }) {
  if (kind === "aws") return <AwsCertMenuIcon />;
  if (kind === "java") return <JavaMenuIcon />;
  if (kind === "spring-ai") return <SpringAiMenuIcon />;
  return <SpringBootMenuIcon />;
}

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
            <img src="/icons/aws-cloud.png" alt="AWS" className="announce-banner-aws-logo" width={40} height={25} />
            <span className="announce-banner-batch-label">Batch live</span>
          </span>
          <p className="announce-banner-text">
            <span className="announce-banner-text-full">
              Limited seats left in this cohort. Secure your spot today!
            </span>
            <span className="announce-banner-text-short">Limited seats — enroll today</span>
          </p>
          <ConnectMentorModal
            className="announce-banner-cta"
            label="Enroll now →"
            eyebrow="AWS batch enrollment"
            title="Enroll in AWS batch"
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
                <div className="courses-dropdown-panel">
                  <span className="courses-dropdown-caret" aria-hidden="true" />
                  <div className="courses-dropdown-atmosphere" aria-hidden="true">
                    <span className="courses-dropdown-orb courses-dropdown-orb--sky" />
                    <span className="courses-dropdown-orb courses-dropdown-orb--amber" />
                  </div>
                  <div className="courses-dropdown-head">
                    <p className="section-tag courses-dropdown-tag">Course catalog</p>
                    <p className="courses-dropdown-title">Explore our programs</p>
                    <p className="courses-dropdown-lead">Mentor-led tracks in AWS, Spring, and AI.</p>
                  </div>
                  <div className="courses-dropdown-body">
                    <div className="courses-dropdown-col" aria-labelledby="menu-aws">
                      <p className="courses-dropdown-group" id="menu-aws">
                        <span className="courses-dropdown-group-dot is-aws" aria-hidden="true" />
                        AWS certifications
                      </p>
                      {awsCourses.map((c) => (
                        <a key={c.href} href={c.href} className="courses-dropdown-item is-aws" role="menuitem">
                          <span className="courses-item-glow" aria-hidden="true" />
                          <span className="courses-item-main">
                            <span className="courses-item-icon" aria-hidden="true">
                              <CourseMenuIcon kind={c.icon} />
                            </span>
                            <span className="courses-item-copy">
                              <span className="courses-item-label">{c.label}</span>
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
                    <div className="courses-dropdown-col" aria-labelledby="menu-spring">
                      <p className="courses-dropdown-group" id="menu-spring">
                        <span className="courses-dropdown-group-dot is-spring" aria-hidden="true" />
                        Spring &amp; AI
                      </p>
                      {springCourses.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          className={`courses-dropdown-item ${
                            c.icon === "java" ? "is-java" : c.icon === "spring-ai" ? "is-spring-ai" : "is-spring-boot"
                          }`}
                          role="menuitem"
                        >
                          <span className="courses-item-glow" aria-hidden="true" />
                          <span className="courses-item-main">
                            <span className="courses-item-icon" aria-hidden="true">
                              <CourseMenuIcon kind={c.icon} />
                            </span>
                            <span className="courses-item-copy">
                              <span className="courses-item-label">{c.label}</span>
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
                  </div>
                  <a className="courses-dropdown-footer" href="/courses">
                    <span className="courses-dropdown-footer-copy">
                      <span className="courses-dropdown-footer-label">Browse full catalog</span>
                      <span className="courses-dropdown-footer-sub">All tracks, filters, and details</span>
                    </span>
                    <span className="courses-dropdown-footer-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <MobileMoreMenu />

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
