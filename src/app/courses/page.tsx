import type { Metadata } from "next";
import CourseCatalogGrid from "@/components/CourseCatalogGrid";

export const metadata: Metadata = {
  title: "Courses | The Logic Scale",
  description:
    "Browse all mentor-led programs: AWS certifications, Spring AI, and full-stack tracks. Open any course for syllabus, format, and outcomes."
};

export default function CoursesPage() {
  return (
    <main>
      <section className="section-wrapper dark-section courses-catalog-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Programs</p>
            <h1 className="courses-page-title">All courses</h1>
            <p className="section-intro">
              AWS, Spring, and AI tracks—each card opens the full program page with syllabus, curriculum, and how to enroll.
            </p>
          </div>
          <CourseCatalogGrid />
        </div>
      </section>
    </main>
  );
}
