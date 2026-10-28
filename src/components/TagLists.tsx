import { Fragment } from "react";
import type { CatalogCourse } from "@/app/homeContent";

export const TAG_ICONS: Record<string, string> = {
  "Hands-on Labs": "/icons/tag-cloud-labs.png",
  "Real Projects": "/icons/tag-cloud-projects.png",
  "Certification Track": "/icons/tag-cloud-cert.png",
  "LLM Integration": "/icons/tag-spring-llm.png",
  "Java / Spring": "/icons/tag-spring-java.png",
  "Production Ready": "/icons/tag-spring-ready.png",
  Microservices: "/icons/tag-spring-micro.png",
  "AI Integration": "/icons/tag-spring-ai.png",
  "Capstone Project": "/icons/tag-spring-ready.png",
  "Java 21": "/icons/tag-spring-java.png",
  "Spring Boot": "/icons/tag-spring-micro.png",
  "React.js": "/icons/tag-react.png"
};

export function CourseTagList({ tags }: { tags: CatalogCourse["tags"] }) {
  return (
    <Fragment>
      {tags.map((tag) => {
        const icon = TAG_ICONS[tag];
        return (
          <span key={tag} className="course-tag">
            {icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={icon} alt="" className="course-tag-icon" width={18} height={18} />
            ) : (
              <span className="course-tag-dot" aria-hidden="true" />
            )}
            {tag}
          </span>
        );
      })}
    </Fragment>
  );
}

export function InstructorTagList({ tags }: { tags: string[] }) {
  return (
    <Fragment>
      {tags.map((tag) => (
        <span key={tag} className="instructor-tag">
          {tag}
        </span>
      ))}
    </Fragment>
  );
}
