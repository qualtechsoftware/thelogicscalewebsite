import { Fragment } from "react";
import type { CatalogCourse } from "@/app/homeContent";

export function CourseTagList({ tags }: { tags: CatalogCourse["tags"] }) {
  return (
    <Fragment>
      {tags.map((tag) => (
        <span key={tag} className="course-tag">
          {tag}
        </span>
      ))}
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
