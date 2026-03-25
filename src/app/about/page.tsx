import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Logic Scale",
  description:
    "The Logic Scale delivers mentor-led AWS, Spring, and AI training for engineers who want practical, job-ready skills."
};

export default function AboutPage() {
  return (
    <main className="legal-page about-page">
      <div className="container legal-page-inner">
        <h1>About us</h1>
        <p className="about-lead">
          The Logic Scale exists for one purpose: to help you ship real software—not just collect certificates. We run
          live, mentor-led programs in AWS, Spring, and AI, built around projects and feedback you would expect on a
          real team.
        </p>
        <h2 className="about-subheading">What we believe</h2>
        <ul className="about-list">
          <li>
            <strong>Industry-led curriculum.</strong> Lessons reflect how cloud and AI systems are built and operated
            today—not slides from five years ago.
          </li>
          <li>
            <strong>Project-based learning.</strong> You learn by designing APIs, services, and deployments you can talk
            about in interviews and on your portfolio.
          </li>
          <li>
            <strong>Outcomes over optics.</strong> We care about readiness for the role you want: certifications where
            they matter, fundamentals where they matter more, and support to present your work clearly.
          </li>
          <li>
            <strong>Flexible delivery.</strong> Online live sessions, structured milestones, and recordings so you can
            balance learning with work and life.
          </li>
        </ul>
        <p>
          Whether you are switching into tech, leveling up in your current role, or going deeper into cloud and AI, we
          help you pick the right track and stick with it.
        </p>
        <p className="about-cta-line">
          <a className="button btn-primary" href="/courses">View programs</a>
          <a className="button btn-outline" href="/contact">Contact us</a>
        </p>
      </div>
    </main>
  );
}
