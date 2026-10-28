"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import CourseCardBanner from "@/components/CourseCardBanner";
import { CourseTagList } from "@/components/TagLists";
import { courseCatalog, type CatalogCourse } from "@/app/homeContent";

type CatalogTabId = "all" | "popular" | "cloud" | "genai" | "software";

const catalogTabs: {
  id: CatalogTabId;
  label: string;
  icon: ReactNode;
}[] = [
  {
    id: "all",
    label: "All",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </svg>
    )
  },
  {
    id: "popular",
    label: "Popular",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
        <path d="M12 2.2c.4 2.4-.4 4.1-1.7 5.5-1.1 1.2-1.7 2.4-1.7 3.9a5.4 5.4 0 0 0 10.8 0c0-3.8-3.4-5.8-4.2-9.4-.9 1.8-2 2.8-3.2 3.4V2.2Z" />
      </svg>
    )
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M7 18h10a4 4 0 0 0 .5-8 5.5 5.5 0 0 0-10.6 1.5A3.5 3.5 0 0 0 7 18Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "genai",
    label: "Generative AI",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true">
        <path d="M12 2.5 13.2 8 18.5 9.2 13.2 10.4 12 15.5 10.8 10.4 5.5 9.2 10.8 8 12 2.5Z" />
        <path d="M18.5 13.5 19.1 16 21.5 16.6 19.1 17.2 18.5 19.5 17.9 17.2 15.5 16.6 17.9 16 18.5 13.5Z" />
        <path d="M6.5 13.8 7 15.8 9 16.3 7 16.8 6.5 18.8 6 16.8 4 16.3 6 15.8 6.5 13.8Z" />
      </svg>
    )
  },
  {
    id: "software",
    label: "Software Development",
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
        <path d="M8 9 4.5 12 8 15M16 9l3.5 3L16 15M13 7l-2 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

function courseMatchesTab(course: CatalogCourse, tab: CatalogTabId) {
  if (tab === "all") return true;
  const slug = course.slug;
  if (tab === "popular") return Boolean(course.recommended);
  if (tab === "cloud") return slug.startsWith("aws-") || course.badge.toLowerCase().includes("aws");
  if (tab === "genai") return slug.includes("ai");
  return slug.includes("java") || slug.includes("full-stack") || slug.includes("spring-boot");
}

type CourseCatalogGridProps = {
  showFilters?: boolean;
};

export default function CourseCatalogGrid({ showFilters = false }: CourseCatalogGridProps) {
  const [activeTab, setActiveTab] = useState<CatalogTabId>("all");

  const courses = [...courseCatalog]
    .filter((course) => (showFilters ? courseMatchesTab(course, activeTab) : true))
    .sort((a, b) => Number(Boolean(b.recommended)) - Number(Boolean(a.recommended)));

  return (
    <div className="catalog-explorer">
      {showFilters ? (
        <div className="catalog-tabs" role="tablist" aria-label="Course categories">
          {catalogTabs.map((tab) => {
            const selected = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`catalog-tab${selected ? " catalog-tab--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="catalog-tab-icon">{tab.icon}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="catalog-grid" role={showFilters ? "tabpanel" : undefined}>
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
    </div>
  );
}
