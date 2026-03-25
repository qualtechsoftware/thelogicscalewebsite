import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConnectMentorModal from "@/components/ConnectMentorModal";
import DownloadBrochureModal from "@/components/DownloadBrochureModal";
import { CourseTagList } from "@/components/TagLists";
import { courseCatalog, getCourseBySlug, instructors } from "@/app/homeContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courseCatalog.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) {
    return { title: "Program | The Logic Scale" };
  }
  return {
    title: `${course.title} | The Logic Scale`,
    description: course.details
  };
}

type CurriculumModule = {
  title: string;
  topics: string[];
};

export default async function ProgramDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();
  const leadMentor = instructors[0];
  const isAws = course.badge.toLowerCase().includes("aws");
  const providerLabel = isAws ? "Amazon Web Services" : "Spring Framework";
  const providerLogo = isAws
    ? "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
    : "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg";

  const skillsBySlug: Record<string, string[]> = {
    "aws-cloud-practitioner": [
      "Cloud concepts: elasticity, scalability, agility",
      "AWS Global Infrastructure (Regions, AZs, edge locations)",
      "Shared Responsibility Model",
      "AWS Well-Architected Framework (overview)",
      "AWS Identity basics (IAM users, groups, roles, policies)",
      "MFA + least privilege",
      "Security services overview (KMS basics, encryption at rest/in transit)",
      "CloudTrail concept + audit trails (security audit monitoring)",
      "Billing & pricing models (On-Demand/Reserved/Savings Plans at high level)",
      "Cost management tools (Budgets, Cost Explorer, Trusted Advisor basics)",
      "Support plans + incident response basics",
      "Organizations + consolidated billing overview",
      "AWS service categories (compute, storage, database, networking)",
      "Compute fundamentals (EC2, Auto Scaling concepts, Lambda overview)",
      "Containers overview (ECS/EKS high level)",
      "Storage fundamentals (S3, EBS, EFS high level)",
      "S3 storage classes + lifecycle concepts",
      "Databases overview (RDS vs DynamoDB)",
      "Networking basics (VPC, subnets, route tables, SG vs NACL at high level)",
      "DNS + content delivery basics (Route 53, CloudFront)",
      "Monitoring basics (CloudWatch)",
      "Reliability & HA basics (Multi-AZ concept)"
    ],
    "aws-certified-developer-associate": [
      "AWS SDK usage patterns + credentials",
      "IAM for applications (roles, policies, least privilege)",
      "Cognito (User Pools, Identity Pools, auth flows)",
      "Secrets Manager + Parameter Store",
      "KMS integration patterns",
      "App security basics (OWASP mindset, secrets hygiene)",
      "Lambda (handlers, layers, concurrency, event sources)",
      "API Gateway (REST/HTTP), auth, throttling, usage plans",
      "Event-driven architectures (EventBridge, SNS, SQS)",
      "Idempotency, retries, DLQs, ordering considerations",
      "DynamoDB (modeling, indexes, Streams, TTL)",
      "RDS/Aurora basics for developers",
      "S3 (presigned URLs, encryption options, events)",
      "Infrastructure as code (CloudFormation, SAM basics)",
      "CI/CD (CodePipeline, CodeBuild, deployment basics)",
      "Observability (CloudWatch logs/metrics/alarms, X-Ray tracing)",
      "Troubleshooting production issues (logs, traces, metrics)",
      "Deployment strategies + rollback"
    ],
    "aws-certified-solutions-architect": [
      "Security design (IAM, KMS, logging/auditing)",
      "Architecting for HA + fault tolerance",
      "Disaster Recovery (RTO/RPO) strategies",
      "VPC design (subnets, routing, IGW/NAT, SG vs NACL)",
      "Load balancing (ALB/NLB) + Auto Scaling design",
      "Compute selection (EC2, Lambda, containers) trade-offs",
      "Multi-tier architectures & decoupling patterns",
      "Storage selection (S3, EBS, EFS) + lifecycle",
      "Database selection (RDS/Aurora/DynamoDB) trade-offs",
      "Caching patterns (ElastiCache) and performance",
      "Hybrid connectivity (VPN, Direct Connect overview)",
      "DNS + edge (Route 53, CloudFront)",
      "Observability & operations planning",
      "Cost optimization & sizing decisions",
      "Well-Architected reviews & trade-offs"
    ],
    "spring-ai": [
      "Spring AI (providers + configuration)",
      "Prompt templates + prompt management",
      "Structured output patterns",
      "Embeddings + vector stores",
      "RAG pipelines (chunking, retrieval)",
      "Evaluation basics + guardrails",
      "AI-backed REST APIs",
      "Reliability (timeouts, retries, fallbacks)",
      "Observability hooks + config management",
      "Deployment-ready AI microservices"
    ],
    "spring-boot-spring-ai": [
      "Spring Boot REST APIs + validation",
      "Security (Spring Security, JWT)",
      "Testing (unit/integration) + clean architecture",
      "Microservices patterns + resilience",
      "Messaging fundamentals + async workflows",
      "Containers + cloud deployment",
      "Spring AI (chat + RAG + vector stores)",
      "AI API design + production readiness",
      "Capstone: backend + AI feature delivery"
    ]
  };

  const courseSkills = [
    ...new Set([
      ...(skillsBySlug[course.slug] ?? []),
      ...course.tags,
      ...course.outcomes.slice(0, 2)
    ])
  ];

  const curriculumBySlug: Record<string, CurriculumModule[]> = {
    "aws-cloud-practitioner": [
      {
        title: "Cloud concepts & AWS fundamentals (CLF-C02 domain)",
        topics: [
          "Cloud benefits & economics",
          "Elasticity, scalability, agility",
          "AWS Global Infrastructure (Regions, AZs, edge locations)",
          "Shared Responsibility Model",
          "Deployment models (public cloud concepts)",
          "Well-Architected Framework: pillars overview",
          "AWS Management Console + CLI basics",
          "Common architecture patterns at a high level"
        ]
      },
      {
        title: "Security & compliance (CLF-C02 domain)",
        topics: [
          "IAM: users, groups, roles, policies",
          "MFA and best practices",
          "Least privilege principles",
          "Encryption basics (at rest / in transit)",
          "KMS overview",
          "CloudTrail concept + audit trails",
          "Security posture basics (shared controls)",
          "Compliance concepts & responsibility boundaries",
          "AWS Artifact + compliance documentation basics",
          "Identity federation concepts (high-level)"
        ]
      },
      {
        title: "Technology (CLF-C02 domain)",
        topics: [
          "Compute: EC2 overview + pricing models",
          "Serverless: Lambda overview",
          "Containers: ECS/EKS overview",
          "Storage: S3 fundamentals + storage classes",
          "Block storage: EBS overview",
          "File storage: EFS overview",
          "Databases: RDS overview",
          "NoSQL: DynamoDB overview",
          "Networking: VPC basics (subnets, routing)",
          "Security Groups vs NACL basics",
          "DNS: Route 53 overview",
          "CDN: CloudFront overview",
          "Monitoring: CloudWatch fundamentals",
          "Application Integration overview (SQS, SNS basics)",
          "Migration & transfer service overview"
        ]
      },
      {
        title: "Core compute services deep dive",
        topics: [
          "EC2 instance families overview",
          "Auto Scaling concept and use cases",
          "Lambda invocation model basics"
        ]
      },
      {
        title: "Storage & data foundations",
        topics: [
          "S3 bucket architecture basics",
          "Storage class selection criteria",
          "RDS and DynamoDB comparison scenarios"
        ]
      },
      {
        title: "Networking and delivery basics",
        topics: [
          "VPC building blocks in plain language",
          "Route 53 record types (high-level)",
          "CloudFront caching behavior basics"
        ]
      },
      {
        title: "Operations and governance",
        topics: [
          "CloudWatch alarms and dashboards concepts",
          "Account structure with Organizations",
          "Tagging strategy basics for cost visibility"
        ]
      },
      {
        title: "Billing, pricing & support (CLF-C02 domain)",
        topics: [
          "AWS pricing principles & cost drivers",
          "On-Demand vs Reserved vs Savings Plans (high-level)",
          "Cost Explorer + Budgets + alerts",
          "Trusted Advisor basics",
          "Support plans & how they differ",
          "Organizations + consolidated billing overview",
          "Cost allocation tags basics",
          "Pricing calculator & forecasting basics"
        ]
      },
      {
        title: "Exam strategy + mock drills",
        topics: [
          "Domain-wise revision",
          "Scenario-based questions",
          "Full mock exam walkthrough",
          "Elimination strategy for tricky options",
          "Exam-day checklist and time management"
        ]
      },
      {
        title: "Final revision and confidence sprint",
        topics: [
          "High-frequency exam traps",
          "Rapid-fire domain recap",
          "Readiness checklist + next steps"
        ]
      }
    ],
    "aws-certified-developer-associate": [
      {
        title: "AWS developer foundations (DVA-C02 domain)",
        topics: [
          "Secure app design & IAM patterns",
          "SDK basics + auth methods",
          "Service integrations overview",
          "Environment management (dev/test/prod)",
          "Error handling strategy for cloud apps"
        ]
      },
      {
        title: "Security, secrets & configuration",
        topics: [
          "Cognito + identity patterns",
          "Secrets Manager / Parameter Store",
          "KMS basics for app encryption",
          "Token-based auth flows overview",
          "Secure configuration lifecycle"
        ]
      },
      {
        title: "Developer security in practice",
        topics: [
          "JWT + Cognito flow mapping",
          "Secrets rotation patterns",
          "Least-privilege policy validation"
        ]
      },
      {
        title: "Serverless & APIs",
        topics: [
          "Lambda: handler patterns, layers, concurrency",
          "Common event sources (S3/SQS/SNS/EventBridge)",
          "API Gateway (REST/HTTP): stages, deployments",
          "Auth patterns (Cognito/IAM/authorizers at high-level)",
          "Throttling, quotas, usage plans",
          "Step Functions overview for workflows",
          "API versioning and backward compatibility",
          "WebSocket/API integration basics"
        ]
      },
      {
        title: "Advanced API design for AWS apps",
        topics: [
          "REST contract design & versioning",
          "Pagination, throttling, and retries",
          "Error model consistency across services"
        ]
      },
      {
        title: "Data, messaging & event",
        topics: [
          "DynamoDB: modeling, indexes, Streams, TTL",
          "SQS: visibility timeout, DLQ, retries",
          "SNS: topics, fan-out patterns",
          "EventBridge: event buses and routing",
          "Idempotency + ordering considerations",
          "Stream/event replay strategies",
          "Message filtering and routing patterns"
        ]
      },
      {
        title: "Data persistence architecture",
        topics: [
          "Single-table vs multi-table DynamoDB choices",
          "Event sourcing with Streams overview",
          "TTL, archival, and lifecycle strategy"
        ]
      },
      {
        title: "Async and event-driven mastery",
        topics: [
          "Fan-out patterns and filtering",
          "Exactly-once mindset with idempotency",
          "Failure handling with DLQ + redrive"
        ]
      },
      {
        title: "CI/CD, observability & troubleshooting",
        topics: [
          "SAM/CloudFormation basics",
          "CodePipeline/CodeBuild overview",
          "CloudWatch: logs, metrics, alarms",
          "X-Ray tracing + debugging flows",
          "Deployment strategies & rollback",
          "Troubleshooting: traces → logs → metrics",
          "Blue/green and canary concepts",
          "Runbooks and incident triage basics"
        ]
      },
      {
        title: "Mock exam and production case clinic",
        topics: [
          "DVA-style scenario decoding",
          "Troubleshooting timed drills",
          "Final readiness scorecard"
        ]
      }
    ],
    "aws-certified-solutions-architect": [
      {
        title: "Secure architectures (SAA-C03 domain)",
        topics: [
          "IAM patterns for accounts/roles",
          "KMS encryption strategies",
          "Logging & auditing basics",
          "Security boundaries and guardrails",
          "Cross-account access patterns"
        ]
      },
      {
        title: "Resilient architectures (SAA-C03 domain)",
        topics: [
          "Multi-AZ designs + failover",
          "Backup/restore, pilot light, warm standby",
          "DR trade-offs: RTO/RPO",
          "Decoupling patterns for resilience",
          "Failure scenario planning",
          "Health checks and failover validation"
        ]
      },
      {
        title: "High-performing architectures (SAA-C03 domain)",
        topics: [
          "Compute + scaling patterns",
          "Load balancing design choices",
          "Caching & performance decisions",
          "Edge: CloudFront + Route 53",
          "Storage and database performance choices",
          "Data partitioning/sharding concepts",
          "Latency and throughput optimization"
        ]
      },
      {
        title: "Network architecture deep dive",
        topics: [
          "Transit Gateway and hub-spoke concepts",
          "Private/public subnet patterns",
          "Ingress/egress control strategy"
        ]
      },
      {
        title: "Data architecture decisions",
        topics: [
          "RPO/RTO-aware storage patterns",
          "Database migration and modernization options",
          "Consistency and performance trade-offs"
        ]
      },
      {
        title: "Edge and hybrid architecture",
        topics: [
          "Global content delivery patterns",
          "Hybrid connectivity decision matrix",
          "DNS failover routing patterns"
        ]
      },
      {
        title: "Security architecture blueprinting",
        topics: [
          "Multi-account security boundaries",
          "Encryption key strategy at scale",
          "Auditability and forensic readiness"
        ]
      },
      {
        title: "Cost-optimized architectures (SAA-C03 domain)",
        topics: [
          "Right-sizing and pricing models",
          "Storage tiering strategies",
          "Cost-aware service selection",
          "Compute purchasing options",
          "Cost governance and optimization loops"
        ]
      },
      {
        title: "Architectural design labs + mock exams",
        topics: [
          "Case-based design exercises",
          "Well-Architected reviews",
          "Exam-style scenario practice",
          "Architecture trade-off discussions",
          "Design whiteboarding drills"
        ]
      },
      {
        title: "Final architecture review board",
        topics: [
          "End-to-end design presentation",
          "Cost + reliability challenge rounds",
          "SAA exam readiness framework"
        ]
      }
    ],
    "spring-ai": [
      {
        title: "Spring AI foundations",
        topics: [
          "Providers + configuration",
          "Prompt templates + structured output",
          "Function calling patterns",
          "Prompt safety + token optimization",
          "Model selection strategies"
        ]
      },
      {
        title: "Prompt engineering for Java teams",
        topics: [
          "Prompt patterns by use case",
          "Template parameterization strategy",
          "Prompt versioning basics"
        ]
      },
      {
        title: "Model integration architecture",
        topics: [
          "Provider abstraction in Spring AI",
          "Fallback model strategy",
          "Latency and token budgeting"
        ]
      },
      {
        title: "RAG pipelines",
        topics: [
          "Embeddings + document loading",
          "Chunking strategies",
          "Vector store integration + retrieval quality",
          "Reranking and context assembly",
          "Hybrid retrieval concepts"
        ]
      },
      {
        title: "RAG quality and evaluation",
        topics: [
          "Retrieval precision/recall basics",
          "Chunking and overlap tuning",
          "Response quality measurement loops"
        ]
      },
      {
        title: "Security and compliance for AI APIs",
        topics: [
          "Input sanitization and prompt injection basics",
          "PII masking patterns",
          "Audit logging and data boundaries"
        ]
      },
      {
        title: "Production readiness",
        topics: [
          "Timeouts, retries, fallbacks",
          "Evaluation basics + guardrails",
          "Deploying AI microservices",
          "Monitoring prompts and responses",
          "Cost/performance tuning for LLM apps"
        ]
      },
      {
        title: "Operational excellence for AI services",
        topics: [
          "Observability for LLM calls",
          "Rate limiting and backpressure",
          "Incident handling for model outages"
        ]
      },
      {
        title: "Capstone planning and delivery",
        topics: [
          "Problem framing and architecture",
          "Milestones and review checkpoints",
          "Demo narrative for interviews"
        ]
      }
    ],
    "spring-boot-spring-ai": [
      {
        title: "Spring Boot backend engineering",
        topics: [
          "REST APIs + validation + persistence",
          "Security (JWT) + testing strategies",
          "Microservices patterns + resilience",
          "API versioning and documentation",
          "Data modeling and repository patterns"
        ]
      },
      {
        title: "Backend foundations deep dive",
        topics: [
          "Layered architecture and clean boundaries",
          "DTO mapping and validation patterns",
          "Error handling standards"
        ]
      },
      {
        title: "Persistence and transactions",
        topics: [
          "JPA mapping and fetch strategy",
          "Transaction boundaries and consistency",
          "Performance tuning basics"
        ]
      },
      {
        title: "Security and identity",
        topics: [
          "JWT and refresh token design",
          "Role-based authorization patterns",
          "Secure API gateway integration basics"
        ]
      },
      {
        title: "Microservices communication",
        topics: [
          "Sync vs async communication trade-offs",
          "Message broker integration basics",
          "Resilience patterns (retry, circuit breaker)"
        ]
      },
      {
        title: "Cloud delivery & operations",
        topics: [
          "Containers + environment configuration",
          "Deployment workflows + observability basics",
          "Performance + troubleshooting",
          "Release strategies and rollback",
          "Operational runbooks"
        ]
      },
      {
        title: "Spring AI specialization",
        topics: [
          "Chat + prompts + structured output",
          "RAG + vector stores",
          "AI API design + capstone delivery",
          "Guardrails, evaluation, and safety checks",
          "Production hardening for AI endpoints"
        ]
      },
      {
        title: "Deployment and operations",
        topics: [
          "Containerization best practices",
          "Environment and config strategy",
          "Monitoring and alerting setup"
        ]
      },
      {
        title: "Capstone architecture and showcase",
        topics: [
          "End-to-end system design",
          "AI + backend integration milestones",
          "Portfolio-ready final presentation"
        ]
      }
    ]
  };

  const curriculumModules =
    curriculumBySlug[course.slug] ??
    course.curriculum.map((t) => ({ title: t, topics: [] }));
  const keyHighlights = [
    `${course.duration} guided plan`,
    "Live mentor-led sessions",
    "Weekend-friendly schedule",
    "100% online learning",
    "Doubt Support"
  ];
  const heroBannerStats = [course.duration, course.level, "Mentor-led", "24/7 support"];
  const projectExamples = [
    `Guided ${course.badge} use-case implementation`,
    "Architecture and troubleshooting review with mentor",
    "Portfolio-ready mini project with code walkthrough"
  ];
  const reviews = [
    {
      name: "Aman Verma",
      role: "Software Engineer",
      company: "TCS",
      text: `Clear structure, practical assignments, and mentor guidance made ${course.title} easy to apply at work.`
    },
    {
      name: "Nitika Jain",
      role: "Cloud Associate",
      company: "Infosys",
      text: "Weekly feedback and project checkpoints helped me stay consistent and interview-ready."
    },
    {
      name: "Rohit Sharma",
      role: "Backend Developer",
      company: "Cognizant",
      text: "Mentor sessions were practical and direct. I gained confidence in architecture decisions and implementation trade-offs."
    },
    {
      name: "Sneha Kulkarni",
      role: "Senior Analyst",
      company: "Accenture",
      text: "Structured curriculum, clear feedback, and consistent support helped me complete projects faster than expected."
    }
  ];
  const faqs = [
    {
      q: "Do I need prior experience?",
      a: `This track is marked ${course.level}. We support learners from adjacent backgrounds and share a prep path in the first week.`
    },
    {
      q: "Are sessions live or recorded?",
      a: "Sessions are live and interactive. You also get recordings for revision and catch-up."
    },
    {
      q: "How much weekly time should I plan?",
      a: `Typical effort is 6-8 hours/week including classes, labs, and revision for this ${course.duration} program.`
    },
    {
      q: "Will I build real projects?",
      a: "Yes. Each cohort includes practical case studies and implementation-focused assignments."
    }
  ];

  return (
    <main className="course-detail-page">
      <div className="container course-detail-container">
        <nav className="course-detail-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="course-detail-bc-sep" aria-hidden="true">/</span>
          <Link href="/courses">Programs</Link>
          <span className="course-detail-bc-sep" aria-hidden="true">/</span>
          <span className="course-detail-bc-current">{course.title}</span>
        </nav>

        <header className="course-detail-hero">
          <div className={`course-detail-hero-banner course-detail-hero-banner--${isAws ? "aws" : "spring"}`}>
            <div className="course-detail-hero-banner-glow" />
            <div className="course-detail-hero-watermark" aria-hidden="true">
              {course.badge}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={providerLogo} alt={providerLabel} className={`course-detail-provider-logo ${isAws ? "is-aws" : "is-spring"}`} />
            <div className="course-detail-banner-text">
              <p>{providerLabel}</p>
              <h3>{course.examCode}</h3>
              <span className="course-detail-banner-subtitle">Industry-ready mentor-led cohort</span>
            </div>
            <div className="course-detail-banner-stats" aria-hidden="true">
              {heroBannerStats.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="course-detail-banner-chip-row" aria-hidden="true">
              <span>Live</span>
              <span>Weekend</span>
              <span>Online</span>
            </div>
            <span className="course-detail-hero-badge">{course.badge}</span>
          </div>
          <div className="course-detail-hero-body">
            <p className="course-detail-eyebrow">Training program</p>
            <h1 className="course-detail-title">{course.title}</h1>
            <div className="course-detail-meta-row">
              <span className="course-detail-meta duration-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {course.duration}
              </span>
              <span
                className="course-detail-meta level-badge course-detail-level-pill"
                style={{ borderColor: course.levelColor, color: course.levelColor }}
              >
                {course.level}
              </span>
              <span className="course-detail-meta course-detail-code">{course.examCode}</span>
            </div>
            <p className="course-detail-lead">{course.details}</p>
            <div className="course-detail-tags">
              <CourseTagList tags={course.tags} />
            </div>
            <div className="course-detail-highlight-row" aria-label="Key highlights">
              {keyHighlights.map((item) => (
                <span key={item} className="course-detail-highlight-pill">{item}</span>
              ))}
            </div>
            <div className="course-detail-hero-actions">
              <ConnectMentorModal className="button btn-primary" label="Talk to mentor" showIcon />
              <DownloadBrochureModal
                className="button btn-outline course-detail-download-btn"
                courseTitle={course.title}
                showIcon
              />
            </div>
          </div>
        </header>

        <div className="course-detail-grid">
          <div className="course-detail-main">
            <section className="course-detail-section" aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="course-detail-h2">Overview</h2>
              <p className="course-detail-prose">{course.overview}</p>
            </section>

            <div className="course-detail-duo">
              <section className="course-detail-section" aria-labelledby="top-features-heading">
                <h2 id="top-features-heading" className="course-detail-h2">Top features</h2>
                <ul className="course-detail-outcomes">
                  {course.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="course-detail-section" aria-labelledby="highlights-heading">
                <h2 id="highlights-heading" className="course-detail-h2">Key highlights</h2>
                <div className="course-detail-highlight-grid">
                  {keyHighlights.map((item) => (
                    <article key={item} className="course-detail-mini-card">{item}</article>
                  ))}
                </div>
              </section>
            </div>

            <section className="course-detail-section" aria-labelledby="skills-heading">
              <h2 id="skills-heading" className="course-detail-h2">Skills under this course</h2>
              <div className="course-detail-skills">
                {courseSkills.map((skill) => (
                  <span key={skill} className="course-detail-skill-pill">{skill}</span>
                ))}
              </div>
            </section>

            <section className="course-detail-section" aria-labelledby="curriculum-heading">
              <h2 id="curriculum-heading" className="course-detail-h2">Course curriculum</h2>
              <p className="course-detail-prose course-detail-curriculum-intro">
                Weekly structure may shift slightly by cohort; this is the core syllabus we cover end to end.
              </p>
              <div className="course-detail-modules" role="list">
                {curriculumModules.map((m) => (
                  <details key={m.title} className="course-detail-module" role="listitem">
                    <summary>{m.title}</summary>
                    {m.topics.length ? (
                      <ul className="course-detail-module-topics">
                        {m.topics.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    ) : null}
                  </details>
                ))}
              </div>
            </section>

            <section className="course-detail-section" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="course-detail-h2">Real world case studies &amp; projects</h2>
              <ul className="course-detail-outcomes">
                {projectExamples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="course-detail-section" aria-labelledby="reviews-heading">
              <h2 id="reviews-heading" className="course-detail-h2">Reviews</h2>
              <div className="course-detail-reviews">
                {reviews.map((review) => (
                  <article key={review.name} className="course-detail-review">
                    <p className="course-detail-review-stars" aria-label="5 star rating">*****</p>
                    <p className="course-detail-review-text">&ldquo;{review.text}&rdquo;</p>
                    <p className="course-detail-review-meta">{review.name} · {review.role}</p>
                    <p className="course-detail-review-company">{review.company}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="course-detail-section" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="course-detail-h2">Course FAQs</h2>
              <div className="course-detail-faqs">
                {faqs.map((faq) => (
                  <details key={faq.q} className="course-detail-faq">
                    <summary>{faq.q}</summary>
                    <p>{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {course.certification ? (
              <section className="course-detail-section" aria-labelledby="cert-heading">
                <h2 id="cert-heading" className="course-detail-h2">Certification</h2>
                <p className="course-detail-cert-highlight">
                  100% of our learners cleared certification.
                </p>
                <p className="course-detail-prose">{course.certification}</p>
              </section>
            ) : null}
          </div>

          <aside className="course-detail-sidebar">
            <div className="course-detail-card">
              <h3 className="course-detail-card-title">Format</h3>
              <p className="course-detail-card-text">{course.format}</p>
            </div>
            <div className="course-detail-card">
              <h3 className="course-detail-card-title">Who it&apos;s for</h3>
              <p className="course-detail-card-text">{course.audience}</p>
            </div>
            <div className="course-detail-card course-detail-mentor-card-wrap">
              <h3 className="course-detail-card-title">Your mentor</h3>
              <div className="course-detail-mentor-card">
                <a
                  href={leadMentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="course-detail-mentor-linkedin-icon"
                  aria-label={`${leadMentor.name} LinkedIn profile`}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={leadMentor.photo} alt={leadMentor.name} className="course-detail-mentor-photo" />
                <div className="course-detail-mentor-meta">
                  <p className="course-detail-mentor-name">{leadMentor.name}</p>
                  <p className="course-detail-card-text course-detail-mentor-role">
                    <span className="course-detail-mentor-role-pill">{leadMentor.role}</span>
                    <span className="course-detail-mentor-role-company">{leadMentor.company}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="course-detail-card course-detail-card-cta">
              <h3 className="course-detail-card-title">Next step</h3>
              <p className="course-detail-card-text">
                Not sure this track fits? Book a free session—we&apos;ll map your background to the right program.
              </p>
              <ConnectMentorModal className="button btn-primary course-detail-sidebar-btn" label="Talk to mentor" showIcon />
              <DownloadBrochureModal
                className="button btn-outline course-detail-sidebar-btn course-detail-download-btn"
                courseTitle={course.title}
                showIcon
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
