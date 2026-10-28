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
      <section className="section-wrapper dark-section programs-explorer-section courses-catalog-section">
        <div className="container">
          <div className="programs-explorer-head">
            <p className="section-tag">Course catalog</p>
            <h1 className="section-title courses-page-title">Explore all our courses</h1>
            <p className="section-intro programs-explorer-intro">
              AWS, Spring, and full stack tracks designed for real roles — filter by path and start where you fit.
            </p>
          </div>
          <CourseCatalogGrid showFilters />
        </div>
      </section>
    </main>
  );
}
