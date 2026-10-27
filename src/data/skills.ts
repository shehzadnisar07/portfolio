import { Skill } from "@/types";

export const skills: Skill[] = [
  // Languages & Frameworks
  {
    name: "Java 17 / 21",
    category: "Languages & Frameworks",
    src: "/images/skills/java.svg",
    badge: "Core Stack",
    description: "OOP, Streams API, Lambdas, Optionals, Concurrency, Custom Exceptions",
  },
  {
    name: "Spring Boot",
    category: "Languages & Frameworks",
    src: "/images/skills/spring.svg",
    badge: "Backend Core",
    description: "REST APIs, Dependency Injection, Jakarta Validation, Auto-Configuration",
  },
  {
    name: "Spring Cloud Gateway",
    category: "Languages & Frameworks",
    badge: "API Gateway",
    description: "Reactive WebFlux, JWT validation, header sanitization, token-bucket filters",
  },
  {
    name: "Spring Security & JWT",
    category: "Languages & Frameworks",
    badge: "Auth & Security",
    description: "Stateless security filters, BCrypt password hashing, claim extraction",
  },
  {
    name: "Spring Data JPA & Hibernate",
    category: "Languages & Frameworks",
    badge: "ORM & Persistence",
    description: "Entity relationships, pessimistic row locks (SELECT ... FOR UPDATE), BigDecimal",
  },
  {
    name: "OpenFeign",
    category: "Languages & Frameworks",
    badge: "Inter-Service",
    description: "Declarative synchronous REST client for microservice-to-microservice calls",
  },

  // Distributed Systems & Cloud
  {
    name: "Apache Kafka",
    category: "Distributed Systems & Cloud",
    src: "/images/skills/kafka.svg",
    badge: "Event-Driven",
    description: "Decoupled topics, consumer groups, partition ordering, async notification events",
  },
  {
    name: "SAGA Pattern Orchestration",
    category: "Distributed Systems & Cloud",
    badge: "Distributed Tx",
    description: "Compensating transactions, idempotency keys, dual-ledger consistency",
  },
  {
    name: "Redis",
    category: "Distributed Systems & Cloud",
    src: "/images/skills/redis.svg",
    badge: "Cache & Rate Limiting",
    description: "Distributed counters, token-bucket limits (10 req/s, burst 20), OTP TTL",
  },
  {
    name: "Microservices Architecture",
    category: "Distributed Systems & Cloud",
    badge: "Systems Architecture",
    description: "Domain-driven design, service discovery, isolated databases, fault tolerance",
  },

  // Databases & Caching
  {
    name: "MySQL 8",
    category: "Databases & Caching",
    src: "/images/skills/mysql.svg",
    badge: "ACID RDBMS",
    description: "Relational modeling, indexing, foreign key constraints, pessimistic concurrency",
  },
  {
    name: "Relational Data Modeling",
    category: "Databases & Caching",
    badge: "Database Design",
    description: "Double-entry bookkeeping, audit logs, ledger balance integrity",
  },

  // Tools & DevOps & Full Stack
  {
    name: "Docker & Docker Compose",
    category: "Tools & DevOps",
    src: "/images/skills/docker.svg",
    badge: "Containers",
    description: "Containerizing 6 Spring services, Kafka, ZooKeeper, Redis, and MySQL clusters",
  },
  {
    name: "Maven",
    category: "Tools & DevOps",
    badge: "Build Automation",
    description: "Multi-module POM management, dependency resolution, build lifecycles",
  },
  {
    name: "React 19 & TypeScript",
    category: "Tools & DevOps",
    src: "/images/skills/react-color.svg",
    badge: "Modern Frontend",
    description: "Zustand state management, React Hook Form, Zod validation, Axios interceptors",
  },
  {
    name: "Git & GitHub Actions",
    category: "Tools & DevOps",
    src: "/images/skills/github-color.svg",
    badge: "Version Control",
    description: "Branching strategies, CI/CD pipeline triggers, release tracking",
  },
  {
    name: "Postman & API Testing",
    category: "Tools & DevOps",
    badge: "API Tooling",
    description: "Automated regression collections, JWT environment variables, mock servers",
  },
];
