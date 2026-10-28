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
          <div className="programs-explorer-head">
            <h1 className="section-title courses-page-title">Explore all our courses</h1>
          </div>
          <CourseCatalogGrid showFilters />
        </div>
      </section>
    </main>
  );
}
