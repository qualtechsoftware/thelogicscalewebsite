import type { CatalogCourse } from "@/app/homeContent";

type AwsTrack = {
  theme: "practitioner" | "developer" | "architect";
  label: string;
  chip: string;
  services: string[];
};

type SpringTrack = {
  theme: "ai" | "full" | "fullstack";
  label: string;
  chip: string;
  services: string[];
};

const AWS_TRACKS: Record<string, AwsTrack> = {
  "aws-cloud-practitioner": {
    theme: "practitioner",
    label: "Cloud Foundations",
    chip: "Entry Certification",
    services: ["IAM", "EC2", "S3", "Billing"]
  },
  "aws-certified-developer-associate": {
    theme: "developer",
    label: "Developer Track",
    chip: "Build & Deploy",
    services: ["Lambda", "API GW", "DynamoDB", "CI/CD"]
  },
  "aws-certified-solutions-architect": {
    theme: "architect",
    label: "Architecture Track",
    chip: "Design at Scale",
    services: ["VPC", "ALB", "RDS", "HA/DR"]
  }
};

const SPRING_TRACKS: Record<string, SpringTrack> = {
  "spring-ai": {
    theme: "ai",
    label: "AI Engineering Track",
    chip: "LLM + RAG",
    services: ["Prompts", "Embeddings", "RAG", "APIs"]
  },
  "spring-boot-spring-ai": {
    theme: "full",
    label: "Spring Boot + AI Track",
    chip: "Boot + AI Capstone",
    services: ["Boot", "Security", "Microservices", "AI"]
  },
  "java-full-stack-developer": {
    theme: "fullstack",
    label: "Java Full Stack Track",
    chip: "Java 21 + React",
    services: ["Java 21", "Spring Boot", "React.js", "APIs"]
  }
};

function AwsDecorPractitioner() {
  return (
    <svg className="aws-cloud-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <path
        d="M70 132c-16 0-28-12-28-27s12-27 28-27c2-16 16-28 33-28 14 0 26 9 31 21 4-3 10-4 15-4 16 0 28 12 28 28v1c12 3 21 13 21 26 0 15-12 27-27 27H70z"
        fill="rgba(255,153,0,0.14)"
      />
      <path
        d="M250 56c-9 0-17 5-21 12-3-2-6-3-10-3-10 0-19 8-20 18-8 2-14 9-14 18 0 10 8 19 19 19h66c9 0 17-8 17-17s-8-17-17-17c0-1 0-3-1-4-3-14-15-26-29-26z"
        fill="rgba(255,255,255,0.08)"
      />
      <circle cx="48" cy="48" r="14" fill="rgba(255,255,255,0.07)" />
      <circle cx="310" cy="148" r="24" fill="rgba(255,153,0,0.1)" />
    </svg>
  );
}

function AwsDecorDeveloper() {
  return (
    <svg className="aws-cloud-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <path d="M58 78l-22 22 22 22" stroke="rgba(125,211,252,0.35)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M118 78l22 22-22 22" stroke="rgba(125,211,252,0.35)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M78 128l20-56" stroke="rgba(255,153,0,0.35)" strokeWidth="3" strokeLinecap="round" />
      <rect x="210" y="58" width="96" height="72" rx="10" fill="rgba(14,165,233,0.12)" stroke="rgba(125,211,252,0.25)" />
      <path d="M226 78h64M226 94h48M226 110h56" stroke="rgba(186,230,253,0.35)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="300" cy="150" r="26" fill="rgba(14,165,233,0.12)" />
      <path d="M40 162h280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 6" />
    </svg>
  );
}

function AwsDecorArchitect() {
  return (
    <svg className="aws-cloud-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <circle cx="90" cy="70" r="16" fill="rgba(74,222,128,0.18)" stroke="rgba(134,239,172,0.35)" />
      <circle cx="180" cy="46" r="14" fill="rgba(255,153,0,0.16)" stroke="rgba(255,186,73,0.35)" />
      <circle cx="270" cy="70" r="16" fill="rgba(74,222,128,0.18)" stroke="rgba(134,239,172,0.35)" />
      <circle cx="180" cy="130" r="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
      <path d="M102 78l64 40M258 78l-64 40M180 60v52" stroke="rgba(134,239,172,0.28)" strokeWidth="2" />
      <rect x="54" y="148" width="28" height="18" rx="3" fill="rgba(74,222,128,0.2)" />
      <rect x="166" y="148" width="28" height="18" rx="3" fill="rgba(255,153,0,0.2)" />
      <rect x="278" y="148" width="28" height="18" rx="3" fill="rgba(74,222,128,0.2)" />
      <path d="M68 148v-12M180 148v-18M292 148v-12" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
    </svg>
  );
}

function AwsDecor({ theme }: { theme: AwsTrack["theme"] }) {
  if (theme === "developer") return <AwsDecorDeveloper />;
  if (theme === "architect") return <AwsDecorArchitect />;
  return <AwsDecorPractitioner />;
}

function SpringDecorAi() {
  return (
    <svg className="spring-banner-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <circle cx="70" cy="60" r="18" fill="rgba(168,85,247,0.18)" />
      <circle cx="98" cy="78" r="10" fill="rgba(109,179,63,0.22)" />
      <circle cx="54" cy="86" r="8" fill="rgba(196,181,253,0.25)" />
      <path d="M78 70l40 28M90 84l36 12" stroke="rgba(196,181,253,0.3)" strokeWidth="2" />
      <rect x="210" y="52" width="100" height="68" rx="12" fill="rgba(168,85,247,0.12)" stroke="rgba(196,181,253,0.28)" />
      <path d="M228 74h64M228 90h48M228 106h56" stroke="rgba(221,214,254,0.4)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="300" cy="150" r="24" fill="rgba(109,179,63,0.12)" />
      <path d="M40 162h280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 6" />
    </svg>
  );
}

function SpringDecorFull() {
  return (
    <svg className="spring-banner-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <rect x="48" y="56" width="52" height="36" rx="8" fill="rgba(109,179,63,0.18)" stroke="rgba(134,239,172,0.3)" />
      <rect x="118" y="56" width="52" height="36" rx="8" fill="rgba(239,68,68,0.14)" stroke="rgba(252,165,165,0.28)" />
      <rect x="188" y="56" width="52" height="36" rx="8" fill="rgba(109,179,63,0.18)" stroke="rgba(134,239,172,0.3)" />
      <path d="M100 74h18M170 74h18" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
      <path d="M74 92v24M144 92v24M214 92v24" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
      <rect x="56" y="116" width="176" height="28" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" />
      <path d="M72 130h40M72 138h64" stroke="rgba(134,239,172,0.35)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="300" cy="140" r="26" fill="rgba(239,68,68,0.12)" />
      <path d="M288 140l8 8 16-16" stroke="rgba(252,165,165,0.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SpringDecorFullstack() {
  return (
    <svg className="spring-banner-decor" viewBox="0 0 360 200" fill="none" aria-hidden="true">
      <rect x="42" y="48" width="120" height="78" rx="12" fill="rgba(37,99,235,0.14)" stroke="rgba(147,197,253,0.3)" />
      <path d="M58 68h88M58 84h64M58 100h76" stroke="rgba(191,219,254,0.4)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="250" cy="70" r="28" fill="none" stroke="rgba(96,165,250,0.45)" strokeWidth="3" />
      <circle cx="250" cy="70" r="10" fill="rgba(96,165,250,0.35)" />
      <ellipse cx="250" cy="70" rx="40" ry="16" fill="none" stroke="rgba(147,197,253,0.35)" strokeWidth="2" transform="rotate(-30 250 70)" />
      <ellipse cx="250" cy="70" rx="40" ry="16" fill="none" stroke="rgba(147,197,253,0.35)" strokeWidth="2" transform="rotate(30 250 70)" />
      <rect x="54" y="140" width="36" height="22" rx="5" fill="rgba(109,179,63,0.22)" />
      <rect x="102" y="140" width="36" height="22" rx="5" fill="rgba(37,99,235,0.22)" />
      <rect x="150" y="140" width="36" height="22" rx="5" fill="rgba(96,165,250,0.22)" />
      <path d="M40 162h280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="4 6" />
    </svg>
  );
}

function SpringDecor({ theme }: { theme: SpringTrack["theme"] }) {
  if (theme === "full") return <SpringDecorFull />;
  if (theme === "fullstack") return <SpringDecorFullstack />;
  return <SpringDecorAi />;
}

export default function CourseCardBanner({ course }: { course: CatalogCourse }) {
  if (course.image) {
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={course.image} alt={course.title} className="course-card-img" />
      </>
    );
  }

  const springTrack = SPRING_TRACKS[course.slug];
  if (springTrack) {
    return (
      <div className={`course-card-spring-banner spring-banner--${springTrack.theme}`}>
        <div className="spring-banner-glow" />
        <SpringDecor theme={springTrack.theme} />
        <div className="spring-banner-content">
          <div className="spring-logo-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
              alt="Spring Framework"
              className="spring-logo"
            />
          </div>
          <p className="spring-banner-label">{springTrack.label}</p>
          <div className="spring-banner-meta">
            <span className="spring-exam-code">{course.examCode}</span>
            <span className="spring-cert-chip">{springTrack.chip}</span>
          </div>
          <div className="spring-service-chips" aria-hidden="true">
            {springTrack.services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const track = AWS_TRACKS[course.slug] ?? {
    theme: "practitioner" as const,
    label: "Cloud Computing Track",
    chip: "AWS Certified",
    services: ["EC2", "S3", "Lambda", "VPC"]
  };

  return (
    <div className={`course-card-aws-banner aws-banner--${track.theme}`}>
      <div className="aws-banner-glow" />
      <AwsDecor theme={track.theme} />
      <div className="aws-banner-content">
        <div className="aws-logo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="Amazon Web Services"
            className="aws-logo"
          />
        </div>
        <p className="aws-banner-label">{track.label}</p>
        <div className="aws-banner-meta">
          <span className="aws-exam-code">{course.examCode}</span>
          <span className="aws-cert-chip">{track.chip}</span>
        </div>
        <div className="aws-service-chips" aria-hidden="true">
          {track.services.map((service) => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
