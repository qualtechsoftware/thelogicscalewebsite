"use client";

import type { CSSProperties } from "react";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import {
  AwsCertMenuIcon,
  JavaMenuIcon,
  SpringAiMenuIcon
} from "@/components/NavCourseMenuIcons";

const liveCourses = [
  {
    id: "aws-developer",
    markTone: "aws" as const,
    headline: "AWS Developer Associate is live",
    support: "Limited seats left in this cohort. Secure your spot today!",
    title: "Enroll in AWS Developer Associate",
    eyebrow: "AWS live batch enrollment",
    subject: "The Logic Scale — Live course enrollment: AWS Developer Associate",
    accent: "#0ea5e9"
  },
  {
    id: "java-fullstack",
    markTone: "java" as const,
    headline: "Java Full Stack Developer is live",
    support: "Limited seats left in this cohort. Secure your spot today!",
    title: "Enroll in Java Full Stack Developer",
    eyebrow: "Java live batch enrollment",
    subject: "The Logic Scale — Live course enrollment: Java Full Stack Developer",
    accent: "#22c55e"
  },
  {
    id: "spring-ai",
    markTone: "ai" as const,
    headline: "Spring AI is live",
    support: "Limited seats left in this cohort. Secure your spot today!",
    title: "Enroll in Spring AI",
    eyebrow: "Spring AI live batch enrollment",
    subject: "The Logic Scale — Live course enrollment: Spring AI",
    accent: "#f59e0b"
  }
] as const;

function LiveCourseMark({ tone }: { tone: (typeof liveCourses)[number]["markTone"] }) {
  if (tone === "aws") return <AwsCertMenuIcon size={34} />;
  if (tone === "java") return <JavaMenuIcon size={22} />;
  return <SpringAiMenuIcon size={22} />;
}

export default function LiveCoursesSection() {
  return (
    <section id="live-courses" className="section-wrapper live-courses-section">
      <div className="container">
        <div className="section-header live-courses-header">
          <p className="section-tag live-courses-tag">
            <span className="live-courses-tag-dot" aria-hidden="true" />
            Enrolling now
          </p>
          <h2 className="section-title">Our Live Courses</h2>
          <p className="section-intro">
            Open cohorts with limited seats — join a live batch and learn with mentors in real time.
          </p>
        </div>

        <div className="live-course-rows">
          {liveCourses.map((course) => (
            <div
              key={course.id}
              className={`live-course-row live-course-row--${course.markTone}`}
              style={{ "--live-accent": course.accent } as CSSProperties}
            >
              <div className="live-course-row-glow" aria-hidden="true" />
              <div className="live-course-row-inner">
                <span className="live-course-row-batch">
                  <span className="live-course-row-live" aria-hidden="true" />
                  <span className="live-course-row-mark" aria-hidden="true">
                    <LiveCourseMark tone={course.markTone} />
                  </span>
                  Batch live
                </span>
                <div className="live-course-row-copy">
                  <strong className="live-course-row-headline">{course.headline}</strong>
                  <span className="live-course-row-sep" aria-hidden="true">
                    —
                  </span>
                  <span className="live-course-row-support">{course.support}</span>
                </div>
                <ConnectMentorModal
                  className="live-course-row-cta"
                  label="Enroll now →"
                  eyebrow={course.eyebrow}
                  title={course.title}
                  subject={course.subject}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
