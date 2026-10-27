import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "TransMoney",
    slug: "trans-money",
    subtitle: "Event-Driven Distributed Digital Wallet & Banking Microservices",
    description:
      "A production-grade, distributed digital banking platform engineered with 6 Spring Boot microservices, Apache Kafka event orchestration, Redis rate-limiting and fraud velocity counters, MySQL pessimistic row locking, and a React 19 frontend.",
    overview:
      "TransMoney simulates modern fintech operations: account isolation, peer-to-peer transfers, real-time balance tracking, and automated fraud mitigation. The system implements the SAGA pattern for distributed money transfers, ensuring transactional safety and compensating refunds across independently scaled microservices.",
    challenge:
      "Financial systems require sub-second transaction acknowledgment while strictly preventing race conditions (double debits), phantom reads, and fraudulent spikes across decoupled microservice databases without introducing high-latency distributed two-phase commit locks.",
    architecture: [
      "Spring Cloud Gateway: Reverse proxy validating JWTs, rewriting X-User-Email headers, and applying Redis token-bucket rate limiting (10 req/s, burst 20).",
      "Auth Service: Stateless JWT issuing and BCrypt password encryption.",
      "Account Service: MySQL 8 with pessimistic row-level locking (SELECT ... FOR UPDATE) guaranteeing thread-safe balance deductions.",
      "Transaction Service: SAGA orchestrator tracking 6 lifecycle states (PENDING, PROCESSING, PENDING_VERIFICATION, COMPLETED, FAILED, FLAGGED) with UUID idempotency keys.",
      "Fraud Detection Service: Redis-backed 60-second velocity counters, 3x historical amount spike heuristics, 90% balance depletion checks, and 5-minute OTP step-up verification.",
      "Notification Service: Asynchronous Kafka consumer processing verification alerts, delivery notifications, and automated account freeze events.",
    ],
    solution:
      "Designed a decoupled event-driven architecture using Apache Kafka topics for asynchronous fraud scoring and notification fanout, paired with synchronous OpenFeign clients for initial debit execution. Enforced pessimistic database locking on sender accounts to eliminate race conditions, and implemented automatic SAGA compensating refunds when fraud rules trigger or OTP verification times out.",
    outcome:
      "Achieved sub-50ms debit acknowledgment with zero concurrency anomalies under synthetic race condition testing. Established dual-sided double-entry bookkeeping with immutable audit logs and complete idempotency guarantees.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud Gateway",
      "Apache Kafka",
      "Redis",
      "MySQL 8",
      "OpenFeign",
      "Docker Compose",
      "React 19",
      "TypeScript",
    ],
    liveDemo: "",
    github: "https://github.com/shehzadnisar07/trans-money-microservices",
    image: "/images/projects/trans-money/02-dashboard-shehzad.png",
    featured: true,
    highlights: [
      "6-Service Microservices Architecture",
      "SAGA Pattern with Compensating Refunds",
      "Pessimistic Row-Level Locking (SELECT ... FOR UPDATE)",
      "Apache Kafka Event Bus",
      "Redis Token-Bucket Rate Limiter & Velocity Counters",
      "Full React 19 + TypeScript Client",
    ],
    metrics: [
      { label: "Microservices", value: "6 Services", description: "Gateway, Auth, Account, Transaction, Fraud, Notification" },
      { label: "Concurrency Control", value: "Pessimistic Lock", description: "Row-level SELECT ... FOR UPDATE on balance ledger" },
      { label: "Rate Limiting", value: "10 req/s (20 burst)", description: "Redis token-bucket filter at API Gateway" },
      { label: "Messaging", value: "Kafka Event Bus", description: "Asynchronous topic streaming for fraud & notifications" },
    ],
    gallery: [
      {
        title: "Executive Customer Dashboard",
        caption: "Live balance tracking (Rs. 46,015.00), verified account status, and quick action transfers.",
        src: "/images/projects/trans-money/02-dashboard-shehzad.png",
      },
      {
        title: "Peer-to-Peer Transfer Workflow",
        caption: "Sender inputs recipient account (733812374884) and amount with real-time balance validation.",
        src: "/images/projects/trans-money/03-transfer-form.png",
      },
      {
        title: "SAGA Review & Idempotency Generation",
        caption: "Confirmation checkpoint generating a unique UUID idempotency key before dispatching debit requests.",
        src: "/images/projects/trans-money/04-confirm-transfer.png",
      },
      {
        title: "Receiver Balance Instant Settlement",
        caption: "Recipient account balance automatically updated from Rs. 2,485 to Rs. 3,485 via Kafka/Feign event pipeline.",
        src: "/images/projects/trans-money/05-receiver-settled.png",
      },
      {
        title: "Sender Immutable Transaction Ledger",
        caption: "Chronological debit history reflecting -$1,000.00 transfer with linkable transaction trace IDs.",
        src: "/images/projects/trans-money/06-sender-ledger.png",
      },
      {
        title: "Receiver Credit Ledger Synchronization",
        caption: "Double-entry bookkeeping verification displaying matching +$1,000.00 credit entry on recipient profile.",
        src: "/images/projects/trans-money/07-receiver-ledger.png",
      },
      {
        title: "Secure Authentication Portal",
        caption: "Stateless JWT authentication with 256-bit encryption assurances and BCrypt credential hashing.",
        src: "/images/projects/trans-money/01-signin.png",
      },
    ],
    codeSnippet: {
      language: "java",
      filename: "AccountTransferService.java",
      code: `@Transactional
public TransferResponse processTransfer(TransferRequest request, String idempotencyKey) {
    // 1. Verify idempotency record in Redis / MySQL
    if (idempotencyRepository.existsByKey(idempotencyKey)) {
        return idempotencyRepository.getExistingResponse(idempotencyKey);
    }

    // 2. Thread-safe pessimistic balance debit with row lock
    Account sender = accountRepository.findByAccountNumberForUpdate(request.getFromAccount())
        .orElseThrow(() -> new AccountNotFoundException("Sender account not found"));

    sender.debit(request.getAmount());
    accountRepository.save(sender);

    // 3. Publish asynchronous Kafka event for SAGA orchestration & fraud scoring
    TransactionEvent event = new TransactionEvent(request, TransactionStatus.PROCESSING);
    kafkaTemplate.send("transaction.initiated", event.getTransactionId(), event);

    return new TransferResponse(event.getTransactionId(), TransactionStatus.PROCESSING);
}`,
    },
  },
  {
    title: "Basho Valley Foundation",
    slug: "basho-valley-foundation",
    subtitle: "High-Conversion Educational Platform & Modular Payment Abstraction",
    description:
      "A production-ready web platform empowering mountain schools and teacher academies across Gilgit-Baltistan, featuring a modular payment abstraction layer supporting JazzCash, Easypaisa, PayFast, and Stripe with idempotent webhooks.",
    overview:
      "Built for Basho Valley Foundation, this platform connects local and international donors with verified educational projects in Skardu. It features real-time currency switching (PKR/USD), automated donation receipt generation, SECP compliance audit downloads, and a dedicated staff administration portal.",
    challenge:
      "Handling international and domestic donation gateways simultaneously across fragmented Pakistani payment processors (JazzCash, Easypaisa, PayFast) while ensuring webhook idempotency, preventing dropped donation receipts, and presenting SECP governance compliance.",
    solution:
      "Engineered a unified payment adapter layer abstracting all payment providers behind a single interface. Built an idempotent webhook deduplication engine (`provider + eventId`), serverless receipt generators, and a high-performance Next.js 16 frontend styled with an elegant alpine educational palette.",
    outcome:
      "Successfully deployed on Vercel with zero cold-start latency, supporting 4,500+ students and 18 model mountain schools with verified transparency metrics.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Payment Abstraction Layer",
      "JazzCash & Easypaisa",
      "Stripe Integration",
      "Idempotent Webhooks",
      "Vercel",
    ],
    liveDemo: "https://basho-valley-foundation.vercel.app/",
    github: "https://github.com/shehzadnisar07/Basho-Valley-Foundation",
    image: "/images/projects/basho-valley/hero_students.png",
    featured: true,
    highlights: [
      "Live Production Platform Deployed on Vercel",
      "Modular Payment Abstraction (JazzCash, Easypaisa, PayFast, Stripe)",
      "Idempotent Webhook Verification & Deduplication",
      "SECP Regulatory Governance & Audited Financials",
      "Interactive Multi-Currency Donation Flows (PKR & USD)",
    ],
    metrics: [
      { label: "Students Empowered", value: "4,500+", description: "Across Basho Valley & Skardu districts" },
      { label: "Payment Providers", value: "4 Gateways", description: "JazzCash, Easypaisa, PayFast, Stripe" },
      { label: "Deployment", value: "Vercel Edge", description: "Sub-second TTFB and zero cold-start" },
      { label: "Compliance", value: "SECP Verified", description: "Audited financial reviews & legal governance" },
    ],
    gallery: [
      {
        title: "Mountain Community Educational Mission",
        caption: "Hero section highlighting community-embedded model schools in Gilgit-Baltistan.",
        src: "/images/projects/basho-valley/hero_students.png",
      },
      {
        title: "Model School Architecture",
        caption: "Campus infrastructure and learning facilities supported across Basho Valley.",
        src: "/images/projects/basho-valley/model_school.png",
      },
      {
        title: "Teacher Training Academy",
        caption: "Empowering 280+ rural educators with modern pedagogy and digital classrooms.",
        src: "/images/projects/basho-valley/teacher_academy.png",
      },
    ],
  },
  {
    title: "Sign Analyzer (PSL AI)",
    slug: "sign-analyzer",
    subtitle: "Real-Time Pakistan Sign Language Recognition with Computer Vision & TFLite",
    description:
      "A real-time AI system bridging the communication barrier for Pakistan's deaf community. Translates 37 static Urdu alphabets and 62 dynamic PSL signs using on-device MediaPipe landmark extraction, a high-throughput FastAPI WebSocket server, and TensorFlow Lite inference.",
    overview:
      "Sign Analyzer was developed as a comprehensive Final Year Project (FYP). The architecture decouples client-side webcam/mobile camera landmark detection from the server inference engine, streaming normalized hand coordinate packets over low-latency WebSockets for instantaneous Urdu sign language prediction.",
    challenge:
      "Translating sign language on mobile devices without thermal throttling or lag requires avoiding heavy raw video stream uploads. Dynamic signs also require capturing temporal motion trajectories over sequences of frames rather than isolated still images.",
    solution:
      "Extracted 21 3D hand keypoints directly in the browser/Expo client using MediaPipe, reducing payload size by 99% compared to raw video. Streamed landmark arrays via WebSockets to a FastAPI microservice running optimized TensorFlow Lite models trained on Kaggle.",
    outcome:
      "Achieved 96%+ accuracy across 37 Urdu alphabets and real-time inference under 30ms latency, enabling natural conversational sign language interpretation.",
    technologies: [
      "Python 3.9+",
      "FastAPI & Uvicorn",
      "WebSockets",
      "MediaPipe Hands",
      "TensorFlow Lite",
      "OpenCV",
      "Expo / React Native",
      "TypeScript",
    ],
    liveDemo: "",
    github: "https://github.com/shehzadnisar07/sign-analyzer",
    image: "/images/projects/sign-analyzer/training_curves_alphabets.png",
    featured: true,
    highlights: [
      "Real-Time WebSocket Inference Engine (<30ms Latency)",
      "Recognizes 37 Static Urdu Alphabets & 62 Dynamic PSL Signs",
      "Client-Side MediaPipe Hand Landmark Extraction (21 3D Keypoints)",
      "Optimized TensorFlow Lite Quantized Classifiers",
      "Cross-Platform Expo React Native Mobile Client",
    ],
    metrics: [
      { label: "Model Accuracy", value: "96.4%", description: "Evaluated on diverse hand angle datasets" },
      { label: "Inference Latency", value: "< 30ms", description: "Per-frame WebSocket landmark classification" },
      { label: "Vocabulary", value: "99 Total Signs", description: "37 Urdu alphabets + 62 dynamic PSL words" },
      { label: "Payload Optimization", value: "99% Reduction", description: "21 normalized landmarks vs raw video streams" },
    ],
    gallery: [
      {
        title: "Urdu Alphabet Model Training Accuracy & Loss",
        caption: "Kaggle training convergence curves validating high classification precision for 37 Urdu letters.",
        src: "/images/projects/sign-analyzer/training_curves_alphabets.png",
      },
      {
        title: "Dynamic PSL Word Sequence Learning Curves",
        caption: "Temporal model training metrics showcasing stable convergence across dynamic hand gesture sequences.",
        src: "/images/projects/sign-analyzer/training_curves_words.png",
      },
    ],
  },
  {
    title: "Console Banking Core Engine",
    slug: "console-banking-backend",
    subtitle: "Enterprise Clean Architecture Banking Simulation in Pure Java 17",
    description:
      "A four-layer banking backend engine built from scratch in Java 17 demonstrating Domain-Driven Design, the Collections Framework, Java Streams, Lambdas, and custom functional validation interfaces.",
    overview:
      "Designed to model core retail banking principles: account opening (SAVINGS/CURRENT) with sequential account identifiers (AC000001), double-entry transaction ledgers, peer-to-peer transfers, and chronological account statement queries.",
    challenge:
      "Enforcing strict data integrity, preventing self-transfers, handling insufficient funds, and generating multi-criteria sorted ledger statements without relying on external frameworks or databases.",
    solution:
      "Structured the project into strict Domain, Repository, Service, and Validation layers. Utilized `HashMap` and `ArrayList` with `computeIfAbsent` for per-account ledger isolation, and created a generic `@FunctionalInterface Validation<T>` to chain reusable validation rules.",
    outcome:
      "Created a robust, crash-resilient core banking engine with zero external dependencies, comprehensive exception handling, and full Streams-based audit reporting.",
    technologies: [
      "Java 17",
      "Object-Oriented Programming (OOP)",
      "Collections Framework",
      "Java Streams API",
      "Lambdas & Optionals",
      "Functional Interfaces",
      "Custom Exceptions",
    ],
    liveDemo: "",
    github: "https://github.com/shehzadnisar07/Java-programming-backend",
    image: "/images/projects/trans-money/06-sender-ledger.png",
    featured: false,
    highlights: [
      "Four-Layer Architecture (Domain, Repository, Service, Validation)",
      "Generic Functional Validation Interface with Lambda Chaining",
      "In-Memory Isolated Ledgers using computeIfAbsent",
      "Java Streams Comparator-Driven Statement Generation",
      "Robust Custom Exception Hierarchy",
    ],
    gallery: [],
  },
];
