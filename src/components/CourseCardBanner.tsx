import type { CatalogCourse } from "@/app/homeContent";

export default function CourseCardBanner({ course }: { course: CatalogCourse }) {
  if (course.image) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.title} className="course-card-img" />
      </>
    );
  }

  if (course.badge.startsWith("Spring") || course.badge === "Full Program") {
    return (
      <div className="course-card-spring-banner">
        <div className="spring-banner-glow" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
          alt="Spring Framework"
          className="spring-logo"
        />
        <span className="spring-exam-code">{course.examCode}</span>
      </div>
    );
  }

  return (
    <div className="course-card-aws-banner">
      <div className="aws-banner-glow" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
        alt="Amazon Web Services"
        className="aws-logo"
      />
      <span className="aws-exam-code">{course.examCode}</span>
    </div>
  );
}
