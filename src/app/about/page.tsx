import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Logic Scale",
  description:
    "The Logic Scale delivers mentor-led AWS, Spring, and AI training for engineers who want practical, job-ready skills."
};

const beliefs = [
  {
    title: "Industry-led curriculum",
    details:
      "Lessons reflect how cloud and AI systems are built and operated today—not slides from five years ago."
  },
  {
    title: "Project-based learning",
    details:
      "You learn by designing APIs, services, and deployments you can talk about in interviews and on your portfolio."
  },
  {
    title: "Outcomes over optics",
    details:
      "We care about readiness for the role you want: certifications where they matter, fundamentals where they matter more, and support to present your work clearly."
  },
  {
    title: "Flexible delivery",
    details:
      "Online live sessions, structured milestones, and recordings so you can balance learning with work and life."
  }
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-atmosphere" aria-hidden="true">
        <span className="about-orb about-orb--sky" />
        <span className="about-orb about-orb--amber" />
        <span className="about-grid" />
      </div>
      <div className="container about-inner">
        <p className="section-tag">About The Logic Scale</p>
        <h1>About us</h1>
        <p className="about-lead">
          The Logic Scale exists for one purpose: to help you ship real software—not just collect certificates. We run
          live, mentor-led programs in AWS, Spring, and AI, built around projects and feedback you would expect on a
          real team.
        </p>

        <h2 className="about-subheading">What we believe</h2>
        <ul className="about-belief-grid">
          {beliefs.map((item, index) => (
            <li key={item.title} className="about-belief-card">
              <span className="about-belief-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.details}</p>
            </li>
          ))}
        </ul>

        <p className="about-closing">
          Whether you are switching into tech, leveling up in your current role, or going deeper into cloud and AI, we
          help you pick the right track and stick with it.
        </p>

        <p className="about-cta-line">
          <a className="button btn-primary" href="/courses">
            <span className="cta-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            View programs
          </a>
          <a className="button btn-outline" href="/contact">
            <span className="cta-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            Contact us
          </a>
        </p>
      </div>
    </main>
  );
}
