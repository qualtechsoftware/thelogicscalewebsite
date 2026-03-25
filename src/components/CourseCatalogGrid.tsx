import Link from "next/link";
import CourseCardBanner from "@/components/CourseCardBanner";
import { CourseTagList } from "@/components/TagLists";
import { courseCatalog } from "@/app/homeContent";

export default function CourseCatalogGrid() {
  return (
    <div className="catalog-grid">
      {courseCatalog.map((course) => (
        <Link key={course.slug} href={`/programs/${course.slug}`} className="course-card course-card--link">
          <div className="course-card-img-wrap">
            <CourseCardBanner course={course} />
            <span className="course-card-badge">{course.badge}</span>
          </div>
          <div className="course-card-body">
            <div className="course-meta-top">
              <span className="duration-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="11" height="11" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {course.duration}
              </span>
              <span className="level-badge">{course.level}</span>
            </div>
            <h3>{course.title}</h3>
            <p className="course-desc">{course.details}</p>
            <div className="course-tags">
              <CourseTagList tags={course.tags} />
            </div>
            <span className="learn-more">
              View syllabus
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
