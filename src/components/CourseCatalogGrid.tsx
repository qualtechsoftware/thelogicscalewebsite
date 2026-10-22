import type { CSSProperties } from "react";
import Link from "next/link";
import CourseCardBanner from "@/components/CourseCardBanner";
import { CourseTagList } from "@/components/TagLists";
import { courseCatalog } from "@/app/homeContent";

export default function CourseCatalogGrid() {
  const courses = [...courseCatalog].sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)));

  return (
    <div className="catalog-grid">
      {courses.map((course) => (
        <Link
          key={course.slug}
          href={`/programs/${course.slug}`}
          className={`course-card course-card--link${course.recommended ? " course-card--recommended" : ""}`}
          style={
            {
              "--course-accent": course.color,
              "--level-color": course.levelColor
            } as CSSProperties
          }
        >
          <div className="course-card-img-wrap">
            <CourseCardBanner course={course} />
            {course.recommended ? <span className="course-card-recommended">Recommended</span> : null}
            <span className="course-card-badge">{course.badge}</span>
          </div>
          <div className="course-card-body">
            <div className="course-meta-top">
              <span className="duration-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width={12} height={12} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {course.duration}
              </span>
              <span className="level-badge">{course.level}</span>
              {course.recommended ? <span className="course-featured-pill">Most chosen</span> : null}
            </div>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.details}</p>
            {course.passRate ? (
              <p className="course-cert-outcome">
                <span className="course-cert-outcome-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>{course.passRate}</strong> of our learners cleared AWS certification
                </span>
              </p>
            ) : null}
            {course.placementRate ? (
              <p className="course-cert-outcome">
                <span className="course-cert-outcome-icon" aria-hidden="true">✓</span>
                <span>
                  <strong>{course.placementRate}</strong> of our learners got a job within{" "}
                  {course.placementWindow ?? "3–4 months"}
                </span>
              </p>
            ) : null}
            <div className="course-tags">
              <CourseTagList tags={course.tags} />
            </div>
            <span className="learn-more">
              View syllabus
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width={15} height={15} aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
