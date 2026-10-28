"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import CourseCardBanner from "@/components/CourseCardBanner";
import { TAG_ICONS } from "@/components/TagLists";
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

function CategoryIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M4 19V5M4 19h16" strokeLinecap="round" />
      <path d="M8 16v-5M12 16V8M16 16v-3" strokeLinecap="round" />
    </svg>
  );
}

function coursePills(course: CatalogCourse) {
  const toolIcons = course.tags.map((tag) => TAG_ICONS[tag]).filter(Boolean).slice(0, 3);
  const toolsLabel =
    course.category === "Generative AI"
      ? `${Math.max(course.tags.length, 3)}+ AI Tools`
      : course.category === "Cloud Computing"
        ? "AWS Tools"
        : "Dev Tools";

  const featurePills: string[] = [];
  if (course.careerSupport) featurePills.push("Job bootcamp");
  if (course.passRate || course.certification) featurePills.push("Certification");
  if (course.placementRate && !featurePills.includes("Job bootcamp")) featurePills.push("Placement support");
  if (featurePills.length === 0) {
    featurePills.push(...course.tags.slice(0, 2));
  }

  return { toolIcons, toolsLabel, featurePills: featurePills.slice(0, 2) };
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
        {courses.map((course) => {
          const { toolIcons, toolsLabel, featurePills } = coursePills(course);
          return (
            <Link
              key={course.slug}
              href={`/programs/${course.slug}`}
              className={`course-card course-card--link${course.recommended ? " course-card--recommended" : ""}`}
              style={{ "--course-accent": course.color } as CSSProperties}
            >
              <div className="course-card-media">
                <div className="course-card-img-wrap">
                  <CourseCardBanner course={course} />
                </div>
                <span className="course-card-category">
                  <CategoryIcon />
                  {course.category}
                </span>
                {course.recommended ? (
                  <span className="course-card-recommended">Recommended</span>
                ) : null}
              </div>

              <div className="course-card-body">
                <div className="course-card-provider">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.providerLogo}
                    alt=""
                    className="course-card-provider-logo"
                    width={28}
                    height={28}
                  />
                  <span className="course-card-provider-name">{course.provider}</span>
                </div>

                <h3>{course.title}</h3>

                <p className="course-card-stats">
                  <span>{course.duration}</span>
                  <span className="course-card-stats-sep" aria-hidden="true">
                    |
                  </span>
                  <span>{course.enrolled} Enrolled</span>
                </p>

                <div className="course-card-pills">
                  <span className="course-pill course-pill--tools">
                    {toolIcons.length > 0 ? (
                      <span className="course-pill-logos" aria-hidden="true">
                        {toolIcons.map((src) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img key={src} src={src} alt="" width={16} height={16} />
                        ))}
                      </span>
                    ) : null}
                    {toolsLabel}
                  </span>
                  {featurePills.map((pill) => (
                    <span key={pill} className="course-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
