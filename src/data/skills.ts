import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages & Frameworks
  {
    name: "Java 17 / 21",
    category: "Languages & Frameworks",
    iconName: "Code2",
    badge: "Core Stack",
    description: "OOP, Streams API, Lambdas, Optionals, Concurrency, Custom Exceptions",
  },
  {
    name: "Spring Boot",
    category: "Languages & Frameworks",
    iconName: "Server",
    badge: "Backend Core",
    description: "REST APIs, Dependency Injection, Jakarta Validation, Auto-Configuration",
  },
  {
    name: "Spring Cloud Gateway",
    category: "Languages & Frameworks",
    iconName: "Network",
    badge: "API Gateway",
    description: "Reactive WebFlux, JWT validation, header sanitization, token-bucket filters",
  },
  {
    name: "Spring Security & JWT",
    category: "Languages & Frameworks",
    iconName: "ShieldCheck",
    badge: "Auth & Security",
    description: "Stateless security filters, BCrypt password hashing, claim extraction",
  },
  {
    name: "Spring Data JPA & Hibernate",
    category: "Languages & Frameworks",
    iconName: "Database",
    badge: "ORM & Persistence",
    description: "Entity relationships, pessimistic row locks (SELECT ... FOR UPDATE), BigDecimal",
  },
  {
    name: "OpenFeign",
    category: "Languages & Frameworks",
    iconName: "Workflow",
    badge: "Inter-Service",
    description: "Declarative synchronous REST client for microservice-to-microservice calls",
  },

  // Microservices & Cloud
  {
    name: "Apache Kafka",
    category: "Microservices & Cloud",
    iconName: "Activity",
    badge: "Event-Driven",
    description: "Decoupled topics, consumer groups, partition ordering, async notification events",
  },
  {
    name: "SAGA Pattern Orchestration",
    category: "Microservices & Cloud",
    iconName: "GitMerge",
    badge: "Distributed Tx",
    description: "Compensating transactions, idempotency keys, dual-ledger consistency",
  },
  {
    name: "Redis",
    category: "Microservices & Cloud",
    iconName: "Zap",
    badge: "Cache & Rate Limiting",
    description: "Distributed counters, token-bucket limits (10 req/s, burst 20), OTP TTL",
  },
  {
    name: "Microservices Architecture",
    category: "Microservices & Cloud",
    iconName: "Boxes",
    badge: "Architecture",
    description: "Domain-driven design, service discovery, isolated databases, fault tolerance",
  },

  // Databases & Caching
  {
    name: "MySQL 8",
    category: "Databases & Caching",
    iconName: "Database",
    badge: "ACID RDBMS",
    description: "Relational modeling, indexing, foreign key constraints, pessimistic concurrency",
  },
  {
    name: "Relational Data Modeling",
    category: "Databases & Caching",
    iconName: "TableProperties",
    badge: "Database Design",
    description: "Double-entry bookkeeping, audit logs, ledger balance integrity",
  },

  // Tools & DevOps & Full Stack
  {
    name: "Docker & Docker Compose",
    category: "Tools & DevOps",
    iconName: "Container",
    badge: "Containers",
    description: "Containerizing 6 Spring services, Kafka, ZooKeeper, Redis, and MySQL clusters",
  },
  {
    name: "Maven",
    category: "Tools & DevOps",
    iconName: "Package",
    badge: "Build Automation",
    description: "Multi-module POM management, dependency resolution, build lifecycles",
  },
  {
    name: "React 19 & TypeScript",
    category: "Tools & DevOps",
    iconName: "Layout",
    badge: "Modern Frontend",
    description: "Zustand state management, React Hook Form, Zod validation, Axios interceptors",
  },
  {
    name: "Git & GitHub Actions",
    category: "Tools & DevOps",
    iconName: "GitBranch",
    badge: "Version Control",
    description: "Branching strategies, CI/CD pipeline triggers, release tracking",
  },
  {
    name: "Postman & API Testing",
    category: "Tools & DevOps",
    iconName: "Send",
    badge: "API Tooling",
    description: "Automated regression collections, JWT environment variables, mock servers",
  },
];
