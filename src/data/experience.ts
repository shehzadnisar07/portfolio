import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Junior Java Backend & Full-Stack Developer",
    company: "TransMoney Financial Systems (Independent Project)",
    period: "2024 — Present",
    location: "Karachi, Pakistan",
    description:
      "Architected, built, and tested an event-driven 6-service microservices wallet platform implementing SAGA distributed transactions, Kafka streaming, and pessimistic locking.",
    bullets: [
      "Engineered a six-service Spring Boot system (API Gateway, Auth, Account, Transaction, Fraud Detection, Notification) exposing 11+ REST endpoints.",
      "Configured Spring Cloud Gateway with reactive filters for JWT verification, X-User-Email header rewriting, and Redis token-bucket rate limiting (10 req/s, burst 20).",
      "Developed SAGA-pattern money transfers with UUID idempotency keys, OpenFeign synchronous debit calls, and automatic compensating refunds.",
      "Implemented a 3-rule fraud detection engine (60s transaction velocity counters, running average amount spikes, and 90% balance depletion thresholds) with Redis OTP step-up verification.",
      "Built the full React 19 + TypeScript frontend with Zustand state persistence, React Hook Form, and Axios JWT interceptors.",
    ],
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Apache Kafka",
      "Redis",
      "MySQL 8",
      "Docker",
      "React 19",
      "TypeScript",
    ],
  },
  {
    title: "Full-Stack Software Engineer (Contract / Open-Source)",
    company: "Basho Valley Foundation",
    period: "2024",
    location: "Gilgit-Baltistan & Karachi, Pakistan",
    description:
      "Designed and delivered a high-conversion web presence and multi-gateway donation processing layer for an educational non-profit empowering rural mountain schools.",
    bullets: [
      "Architected a modular payment abstraction layer integrating JazzCash, Easypaisa, PayFast, and Stripe for domestic and international donations.",
      "Built an idempotent webhook engine verifying digital signatures and preventing duplicate transaction receipts.",
      "Implemented an audited governance reporting hub with downloadable PDF annual reviews for SECP regulatory compliance.",
      "Deployed on Vercel with automated CI/CD and edge caching, maintaining 100% uptime for regional fundraising campaigns.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Gateways", "REST APIs", "Vercel"],
  },
];
