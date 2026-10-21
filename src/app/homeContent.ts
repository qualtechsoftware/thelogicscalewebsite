export type CatalogCourse = {
  slug: string;
  color: string;
  image: string | null;
  examCode: string;
  badge: string;
  title: string;
  duration: string;
  level: string;
  levelColor: string;
  details: string;
  /** Longer overview for the program detail page */
  overview: string;
  /** Bullet list: skills / outcomes */
  outcomes: string[];
  /** How the program is delivered */
  format: string;
  /** Who should enroll */
  audience: string;
  /** Official exam or credential context (omit if not certification-focused) */
  certification?: string;
  /** Highlight as a flagship / recommended program on catalog cards */
  recommended?: boolean;
  tags: string[];
  curriculum: string[];
};

export const trustPillars = [
  {
    num: "01",
    icon: "/icons/trust-industry.png",
    color: "#0ea5e9",
    title: "Industry-Led Curriculum",
    details:
      "Learn from people who work with AWS and AI-backed products every day. The focus stays on practical cloud and intelligent-application skills you can apply on the job — clear explanations, not endless slide decks."
  },
  {
    num: "02",
    icon: "/icons/trust-project.png",
    color: "#f59e0b",
    title: "Project-Based Learning",
    details:
      "You learn by building: APIs, services, and cloud workflows that mirror real scenarios — including patterns that support AI features and AWS deployments. Less passive watching, more doing you can show in your portfolio."
  },
  {
    num: "03",
    icon: "/icons/trust-career.png",
    color: "#22c55e",
    title: "Job Readiness Focus",
    details:
      "We prioritize what matches your track: AWS certification readiness, strong engineering fundamentals for cloud and AI-related roles, and practical interview and profile support so you can present your skills with confidence."
  },
  {
    num: "04",
    icon: "/icons/trust-flexible.png",
    color: "#a855f7",
    title: "Flexible Learning",
    details:
      "Programs are delivered online: live sessions you can join from anywhere, structured weekly milestones, and ongoing access to recordings so you can revisit AWS and AI topics on your own time."
  }
];

export const courseCatalog: CatalogCourse[] = [
  {
    slug: "aws-cloud-practitioner",
    color: "#f59e0b",
    image: null,
    examCode: "CLF-C02",
    badge: "AWS",
    title: "AWS Cloud Practitioner",
    duration: "6 Weeks",
    level: "Beginner",
    levelColor: "#22c55e",
    details: "Your entry point into cloud computing. Build foundational AWS knowledge and earn your first cloud certification.",
    overview:
      "This program gives you a structured path through AWS fundamentals—from global infrastructure to core services, security, billing, and support—so you can speak confidently about the cloud and sit for the AWS Certified Cloud Practitioner (CLF-C02) exam.",
    outcomes: [
      "Explain the AWS Cloud value proposition, shared responsibility, and well-architected thinking at a high level.",
      "Navigate core services: compute, storage, database, networking, and common management tools.",
      "Read pricing, billing, and support options so you can discuss cost and operations with stakeholders.",
      "Complete guided labs and a full certification-style review to validate exam readiness."
    ],
    format:
      "Live online sessions with a mentor, hands-on labs, weekly milestones, and session recordings you can revisit.",
    audience:
      "Newcomers to AWS, career switchers, managers and engineers who need a credible cloud foundation, and anyone targeting CLF-C02.",
    certification:
      "Aligned with the official AWS Certified Cloud Practitioner (CLF-C02) exam. We cover the exam domains and provide mock practice—register for the exam separately through AWS Certification.",
    tags: ["Hands-on Labs", "Real Projects", "Certification Track"],
    curriculum: [
      "Cloud concepts, global infrastructure & the AWS console",
      "IAM, organizations, and security best practices at practitioner depth",
      "EC2, Lambda, containers at a conceptual and light hands-on level",
      "S3, EBS, databases (RDS, DynamoDB) and when to use what",
      "VPC basics, CloudFront, Route 53 introduction",
      "Monitoring, CloudWatch, billing, cost tools & support plans",
      "Capstone quiz drills and full mock exam walkthrough"
    ]
  },
  {
    slug: "aws-certified-developer-associate",
    color: "#0ea5e9",
    image: null,
    examCode: "DVA-C02",
    badge: "AWS Dev",
    title: "AWS Certified Developer Associate",
    duration: "10 Weeks",
    level: "Intermediate",
    levelColor: "#f59e0b",
    recommended: true,
    details: "Master building and deploying cloud-native applications using the full suite of AWS developer services.",
    overview:
      "Go deep on building and operating applications on AWS: serverless, APIs, data stores, messaging, auth, and CI/CD. You’ll ship realistic features in labs and prepare systematically for the AWS Certified Developer – Associate (DVA-C02) exam.",
    outcomes: [
      "Design and implement serverless and API-driven backends using Lambda, API Gateway, and related services.",
      "Use DynamoDB, SQS, SNS, and event-driven patterns appropriate to production workloads.",
      "Apply Cognito, secrets management, and IAM patterns that developers use daily.",
      "Build deployment pipelines and articulate trade-offs for interviews and the DVA-C02 exam."
    ],
    format:
      "Cohort-style live sessions, code-forward labs, code reviews with mentor feedback, and recordings for async review.",
    audience:
      "Software developers, backend engineers, and DevOps-minded builders who want AWS depth plus certification.",
    certification:
      "Mapped to AWS Certified Developer – Associate (DVA-C02). Includes domain review and practice questions; exam registration is through AWS.",
    tags: ["Hands-on Labs", "Real Projects", "Certification Track"],
    curriculum: [
      "AWS developer ecosystem recap & secure application design",
      "Lambda, API Gateway, SAM/CloudFormation basics for deployable apps",
      "DynamoDB modeling, streams, and integration patterns",
      "SQS, SNS, EventBridge & asynchronous workflows",
      "Cognito, Parameter Store/Secrets Manager, IAM for apps",
      "CI/CD with CodePipeline, CodeBuild, deployment strategies",
      "Observability: X-Ray, CloudWatch, troubleshooting production issues",
      "Security, compliance touchpoints & exam strategy workshops"
    ]
  },
  {
    slug: "aws-certified-solutions-architect",
    color: "#22c55e",
    image: null,
    examCode: "SAA-C03",
    badge: "AWS SA",
    title: "AWS Certified Solutions Architect",
    duration: "10 Weeks",
    level: "Advanced",
    levelColor: "#ef4444",
    details: "Design scalable, fault-tolerant cloud systems. One of the most valued and recognised certifications in the industry.",
    overview:
      "Focus on architecture: multi-tier systems, resilience, performance, security, and cost on AWS. You’ll practice designing solutions for real constraints and prepare for the AWS Certified Solutions Architect – Associate (SAA-C03) exam.",
    outcomes: [
      "Produce multi-AZ and multi-region designs with clear recovery and scaling stories.",
      "Master VPC networking, hybrid connectivity, DNS, CDN, and edge patterns.",
      "Select storage, database, and compute options with cost and performance reasoning.",
      "Apply the Well-Architected Framework and practice exam-style scenario breakdowns."
    ],
    format:
      "Architecture workshops, whiteboard-style design sessions, labs that reinforce networking and services, plus recordings.",
    audience:
      "Experienced developers, tech leads, and aspiring solutions architects preparing for SAA-C03 or architecture interviews.",
    certification:
      "Aligned with AWS Certified Solutions Architect – Associate (SAA-C03). Includes scenario practice; register for the official exam via AWS Certification.",
    tags: ["Hands-on Labs", "Real Projects", "Certification Track"],
    curriculum: [
      "Design principles, HA/DR patterns, and Well-Architected deep dive",
      "VPC, subnets, routing, Transit Gateway, VPN/Direct Connect overview",
      "EC2, Auto Scaling, ELB, and container/EKS touchpoints for architects",
      "S3 tiers, EFS, backup & data lifecycle considerations",
      "RDS, Aurora, DynamoDB, caching (ElastiCache) selection",
      "CloudFront, Route 53, API Gateway at architecture depth",
      "Security services, KMS, IAM patterns for cross-account and regulated workloads",
      "Cost optimization, monitoring & capstone design + mock exams"
    ]
  },
  {
    slug: "spring-ai",
    color: "#a855f7",
    image: null,
    examCode: "Spring AI",
    badge: "Spring AI",
    title: "Spring AI",
    duration: "8 Weeks",
    level: "Intermediate",
    levelColor: "#f59e0b",
    details: "Build intelligent Java applications with the Spring AI framework — real LLM integrations, RAG pipelines, and AI microservices.",
    overview:
      "Learn to integrate large language models into Java/Spring applications using Spring AI: prompts, structured output, vector search, and RAG. You’ll build services that are testable and deployable, not one-off scripts.",
    outcomes: [
      "Configure Spring AI against major model providers and manage prompts in code.",
      "Implement retrieval-augmented generation with embeddings and a vector store.",
      "Expose AI capabilities via REST and integrate with your existing Spring Boot services.",
      "Apply production-minded patterns: errors, timeouts, evaluation basics, and deployment."
    ],
    format:
      "Live coding sessions, mentor-led reviews, and a final mini-project you can describe in interviews.",
    audience:
      "Java/Spring developers who want practical AI engineering skills without leaving the JVM ecosystem.",
    tags: ["LLM Integration", "Java / Spring", "Production Ready"],
    curriculum: [
      "Spring AI setup, models, chat clients, and prompt templates",
      "Structured output, function calling patterns in Java",
      "Embeddings, document loading, and vector store integration",
      "RAG pipelines: chunking, retrieval quality, and evaluation basics",
      "Building AI-backed REST APIs and error handling",
      "Security, API keys, configuration & observability hooks",
      "Deploying AI microservices (e.g. container/cloud) and capstone project"
    ]
  },
  {
    slug: "spring-boot-spring-ai",
    color: "#ef4444",
    image: null,
    examCode: "Full Program",
    badge: "Full Program",
    title: "Spring Boot + Spring AI",
    duration: "14 Weeks",
    level: "Advanced",
    levelColor: "#f59e0b",
    details: "The complete modern Java developer path — full-stack backend engineering combined with production-grade AI capabilities.",
    overview:
      "Combine strong Spring Boot microservices fundamentals with Spring AI. Ideal if you want one continuous journey from REST APIs and cloud deployment to LLM-powered features your team can actually ship.",
    outcomes: [
      "Build and secure Spring Boot microservices with testing and clean boundaries.",
      "Deploy services to the cloud with CI/CD awareness and operational basics.",
      "Add AI features using Spring AI: chat, RAG, and integration with existing domains.",
      "Deliver a capstone that demonstrates backend + AI in one portfolio-ready story."
    ],
    format:
      "Extended cohort with two phases (core backend, then AI specialization), live sessions, labs, and a guided capstone.",
    audience:
      "Developers who want a single program covering modern Java backend plus AI—not separate disconnected courses.",
    tags: ["Microservices", "AI Integration", "Capstone Project"],
    curriculum: [
      "Spring Boot essentials, REST, validation, persistence (JPA)",
      "Security (Spring Security), testing, and API design",
      "Microservices patterns, messaging basics, resilience",
      "Cloud deployment, containers, and environment configuration",
      "Spring AI fundamentals and provider integration",
      "RAG, vector stores, and AI API design in Java",
      "Capstone: end-to-end application with backend + AI features"
    ]
  },
  {
    slug: "java-full-stack-developer",
    color: "#2563eb",
    image: null,
    examCode: "Java 21",
    badge: "Full Stack",
    title: "Java Full Stack Developer",
    duration: "16 Weeks",
    level: "Intermediate",
    levelColor: "#f59e0b",
    recommended: true,
    details:
      "Become a job-ready full stack engineer — Java 21, Spring Boot APIs, and React.js frontends, with real projects you can ship and show.",
    overview:
      "A practical full stack path built for modern product teams: master Java 21 language features, design secure Spring Boot backends, and build responsive React.js UIs that consume your APIs. You’ll work through layered architecture, auth, databases, state management, and a portfolio-ready capstone.",
    outcomes: [
      "Write modern Java 21 code with records, virtual threads awareness, and clean OOP/design patterns.",
      "Build production-style Spring Boot REST APIs with JPA, validation, and Spring Security.",
      "Create React.js frontends with hooks, routing, and API integration against your backend.",
      "Deliver an end-to-end full stack project with auth, CRUD flows, and deployment basics."
    ],
    format:
      "Live mentor-led sessions, hands-on labs for backend and frontend, weekly milestones, code reviews, and a guided full stack capstone.",
    audience:
      "Students, graduates, and working professionals who want a complete Java + Spring Boot + React skill set for full stack roles.",
    tags: ["Java 21", "Spring Boot", "React.js"],
    curriculum: [
      "Java 21 language deep dive: syntax, OOP, and modern features",
      "Collections, generics, Streams, Optional, and date/time API",
      "Exception handling, logging, and concurrency fundamentals",
      "SQL + relational modeling for full stack applications",
      "Spring Boot foundations: DI, starters, configuration, profiles",
      "REST API design, validation, DTOs, and error contracts",
      "JPA/Hibernate, relationships, queries, pagination, and transactions",
      "Spring Security, JWT, roles, and secure API patterns",
      "Testing Spring apps: unit, slice, and integration tests",
      "React.js fundamentals: components, JSX, props, and state",
      "Hooks, routing, forms, and client-side data fetching",
      "Full stack integration: auth, CRUD, and state management",
      "Git, CI basics, Docker, and deploy backend + React",
      "Capstone: production-style Java 21 + Spring Boot + React app"
    ]
  }
];

export function getCourseBySlug(slug: string): CatalogCourse | undefined {
  return courseCatalog.find((c) => c.slug === slug);
}

export const instructors = [
  {
    photo: "/priyanjay-goswami.png",
    name: "Priyanjay Goswami",
    role: "Java Full-Stack Architect",
    company: "Ex-Morgan Stanley",
    certification: "Certified AWS Developer & Solutions Architect",
    bio: "8+ years of experience | Ex–Morgan Stanley, BNP Paribas | AWS Certified, Building engineers who ship real products — not just pass exams.",
    tags: ["AWS", "Spring Boot", "Spring AI", "Microservices", "Full Stack"],
    linkedin: "https://www.linkedin.com/in/priyanjay-goswami-5a5098123/"
  }
];

/** Mid-size and growing product/IT companies across Indore & Pune hiring network */
export const hiringPartners = [
  { name: "InfoBeans", city: "Indore", focus: "Digital Engineering", size: "Mid-size", logo: "/partners/infobeans.png", logoTone: "light" as const },
  { name: "Systango", city: "Indore", focus: "Product Engineering", size: "Mid-size", logo: "/partners/systango.svg", logoTone: "light" as const },
  { name: "Softweb Solutions", city: "Indore", focus: "IoT & Cloud", size: "Mid-size", logo: "/partners/softweb.svg", logoTone: "light" as const },
  { name: "Credencys", city: "Indore", focus: "Digital Transformation", size: "Growing", logo: "/partners/credencys.png", logoTone: "dark" as const },
  { name: "Newput", city: "Indore", focus: "Custom Software", size: "Growing", logo: "/partners/newput.svg", logoTone: "light" as const },
  { name: "Consagous", city: "Indore", focus: "Mobile & Cloud Apps", size: "Growing", logo: "/partners/consagous.svg", logoTone: "light" as const },
  { name: "Deqode", city: "Indore", focus: "Blockchain & Web3", size: "Growing", logo: "/partners/deqode.svg", logoTone: "light" as const },
  { name: "Infograins", city: "Indore", focus: "Software Services", size: "Growing", logo: "/partners/infograins.svg", logoTone: "light" as const },
  { name: "Josh Software", city: "Pune", focus: "Ruby & Cloud Apps", size: "Mid-size", logo: "/partners/josh.svg", logoTone: "light" as const },
  { name: "Softude", city: "Pune", focus: "Product Development", size: "Growing", logo: "/partners/softude.svg", logoTone: "light" as const },
  { name: "Embitel", city: "Pune", focus: "Automotive & IoT", size: "Mid-size", logo: "/partners/embitel.svg", logoTone: "light" as const },
  { name: "SpringCT", city: "Pune", focus: "Enterprise Software", size: "Growing", logo: "/partners/springct.svg", logoTone: "light" as const },
  { name: "Webonise", city: "Pune", focus: "Digital Products", size: "Growing", logo: "/partners/webonise.svg", logoTone: "light" as const },
  { name: "Harbinger Group", city: "Pune", focus: "Learning & EdTech", size: "Mid-size", logo: "/partners/harbinger.svg", logoTone: "light" as const },
  { name: "GS Lab", city: "Pune", focus: "Product Engineering", size: "Mid-size", logo: "/partners/gslab.svg", logoTone: "light" as const },
  { name: "Talentica", city: "Pune", focus: "Product Development", size: "Mid-size", logo: "/partners/talentica.svg", logoTone: "light" as const }
] as const;
