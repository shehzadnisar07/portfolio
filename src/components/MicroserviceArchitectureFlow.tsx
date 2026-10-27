"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";

interface ServiceNode {
  id: string;
  name: string;
  role: string;
  port: string;
  tech: string;
  details: string[];
}

const services: ServiceNode[] = [
  {
    id: "gateway",
    name: "API Gateway",
    role: "Reverse Proxy & Edge Guard",
    port: ":8080",
    tech: "Spring Cloud Gateway (WebFlux)",
    details: [
      "Validates incoming client JWT tokens",
      "Injects sanitized X-User-Email into downstream HTTP requests",
      "Redis token-bucket rate limiting (10 req/s, burst 20)",
      "Centralized CORS & route dispatching",
    ],
  },
  {
    id: "auth",
    name: "Auth Service",
    role: "Identity & Cryptography",
    port: ":8081",
    tech: "Spring Security 6 + JJWT",
    details: [
      "Password hashing using BCryptPasswordEncoder",
      "Stateless cryptographic JWT token generation",
      "User credential validation & account registration",
    ],
  },
  {
    id: "account",
    name: "Account Service",
    role: "Ledger & Concurrency Control",
    port: ":8082",
    tech: "Spring Data JPA + MySQL 8",
    details: [
      "Pessimistic row locking (SELECT ... FOR UPDATE) preventing race conditions",
      "UUID customer keys & SecureRandom 12-digit account numbers",
      "Isolated balance debits with BigDecimal scale-2 precision",
    ],
  },
  {
    id: "transaction",
    name: "Transaction Service",
    role: "SAGA Orchestrator",
    port: ":8083",
    tech: "Spring Boot + OpenFeign + Kafka",
    details: [
      "Coordinates 6 transaction lifecycle states",
      "Generates UUID idempotency keys per transfer request",
      "Executes SAGA compensating refunds on fraud or OTP timeout",
    ],
  },
  {
    id: "fraud",
    name: "Fraud Detection",
    role: "Heuristics & Step-Up Security",
    port: ":8084",
    tech: "Redis 7 + Kafka Consumers",
    details: [
      "Velocity rule: flags >5 transfers per minute",
      "Amount spike: flags transfers >3x historical average",
      "Depletion rule: flags transfers >90% available balance",
      "Manages Redis 5-minute OTP step-up verification TTL",
    ],
  },
  {
    id: "notification",
    name: "Notification Service",
    role: "Async Event Dispatcher",
    port: ":8085",
    tech: "Apache Kafka + Java Mailer",
    details: [
      "Listens to Kafka topics: otp.required, transaction.completed",
      "Dispatches real-time security alerts & OTP tokens",
      "Simulates SMS and email gateway delivery",
    ],
  },
];

export default function MicroserviceArchitectureFlow() {
  const [selectedService, setSelectedService] = useState<ServiceNode>(services[3]); // Transaction Service default

  return (
    <section id="architecture" className="w-full py-14 sm:py-20 md:py-28 relative text-white bg-[#06080c]/60">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-mono font-medium text-cyan-400 mb-4">
            <span>03. MICROSERVICES ARCHITECTURE</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.2rem+2.5vw,3rem)] font-black tracking-tight text-white leading-tight">
            TransMoney 6-Service Microservices Topology
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            Interactive architecture demonstrating how 6 Spring Boot microservices communicate via synchronous OpenFeign and asynchronous Apache Kafka topics.
          </p>
        </div>

        {/* Microservices Grid */}
        <div
          role="group"
          aria-label="Select microservice to inspect"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-6 sm:mb-8"
        >
          {services.map((svc) => {
            const isSelected = selectedService.id === svc.id;
            return (
              <button
                key={svc.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedService(svc)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all border ${
                  isSelected
                    ? "bg-emerald-500/10 border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                    : "glass-card border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400">
                    {svc.port}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 truncate">
                    {svc.tech.split(" ")[0]}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {svc.name}
                </h3>
                <p className="text-xs text-zinc-400">
                  {svc.role}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Inspection Card */}
        <AnimatedSection className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-white/15 bg-[#0b0f17]">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-white/10">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <h4 className="text-lg sm:text-2xl font-black text-white font-mono break-words">
                  {selectedService.name} {selectedService.port}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-emerald-400 font-mono mt-1.5 break-words">
                {selectedService.role} • {selectedService.tech}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                SAGA ORCHESTRATED
              </span>
              <span className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                KAFKA SYNCED
              </span>
            </div>
          </div>

          <div className="mt-5 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {selectedService.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl bg-white/[0.03] p-3.5 sm:p-4 border border-white/5"
              >
                <span className="text-emerald-400 font-mono text-xs sm:text-sm shrink-0 mt-0.5">
                  [{idx + 1}]
                </span>
                <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed min-w-0 break-words">
                  {detail}
                </span>
              </div>
            ))}
          </div>

          {/* SAGA Event Bus Visual Diagram */}
          <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10">
            <h5 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              KAFKA EVENT BUS TOPICS
            </h5>
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono">
              <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-emerald-300">
                transaction.initiated
              </span>
              <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-cyan-300">
                fraud.check.clean
              </span>
              <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-amber-300">
                otp.required (TTL: 300s)
              </span>
              <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-emerald-400">
                transaction.completed
              </span>
              <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-rose-400">
                transaction.refunded (SAGA Rollback)
              </span>
            </div>
          </div>
        </AnimatedSection>
      </SectionContainer>
    </section>
  );
}
