"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import SectionContainer from "./SectionContainer";
import { contact } from "@/data/contact";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-transparent pt-12 sm:pt-20 pb-16 md:pb-28">
      {/* 3D Cyber Matrix Grid */}
      <div className="bg-cyber-grid pointer-events-none opacity-40"></div>

      {/* Atmospheric Radial Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-radial from-emerald-500/15 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <SectionContainer className="relative z-10 flex flex-col items-start justify-center">
        {/* Telemetry pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 mb-6 text-xs font-mono font-medium text-emerald-300 shadow-sm shadow-emerald-500/10"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-widest uppercase">
            Java 17 • Spring Boot • Microservices • Kafka • React 19
          </span>
        </motion.div>

        {/* Hero Headings */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full text-left"
        >
          <h1 className="flex flex-col font-black tracking-tight leading-[0.92] text-white">
            <span className="text-zinc-400 text-3xl sm:text-5xl md:text-6xl font-light font-mono mb-2">
              HELLO, WORLD. I&apos;M
            </span>
            <span className="text-[12vw] sm:text-[9vw] md:text-[7.5vw] lg:text-[6.8vw] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-zinc-400">
              SHEHZAD NISAR
            </span>
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base md:text-xl font-mono text-emerald-400 font-semibold tracking-wide">
            <span>[ JUNIOR JAVA BACKEND DEVELOPER ]</span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-cyan-400">[ SPRING BOOT & MICROSERVICES ]</span>
          </div>
        </motion.div>

        {/* Lead Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal"
        >
          Final-year Computer Science student at the <strong>University of Karachi</strong> building high-throughput event-driven microservices. Specializing in <strong>Spring Boot 4/3</strong>, <strong>Apache Kafka</strong>, <strong>Redis</strong>, and ACID transactional architectures with real-world <strong>SAGA pattern</strong> implementations.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full max-w-md sm:max-w-none"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-black transition-all hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>EXPLORE ARCHITECTURE</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-wider text-white backdrop-blur-sm transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET IN TOUCH</span>
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 sm:py-4 text-xs sm:text-sm font-mono text-zinc-400 hover:text-white hover:border-white/30 transition-all"
            >
              <span>github.com/shehzadnisar07</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Real-World Architecture Proof Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 sm:mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono">
              6 Services
            </div>
            <div className="text-xs text-emerald-400 font-mono mt-1">
              Microservices Cluster
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
              API Gateway, Auth, Account, Transaction, Fraud & Notification
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono">
              SAGA Pattern
            </div>
            <div className="text-xs text-cyan-400 font-mono mt-1">
              Distributed Tx
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
              UUID Idempotency keys + automatic compensating refunds
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono">
              Row Locks
            </div>
            <div className="text-xs text-emerald-400 font-mono mt-1">
              Pessimistic Concurrency
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
              SELECT ... FOR UPDATE prevents race conditions & phantom debits
            </p>
          </div>

          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left">
            <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white font-mono">
              Kafka + Redis
            </div>
            <div className="text-xs text-cyan-400 font-mono mt-1">
              Event Streaming & Cache
            </div>
            <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
              Decoupled topic bus + token-bucket rate limiter & velocity rules
            </p>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
}
