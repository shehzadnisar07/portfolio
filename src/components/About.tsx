"use client";

import Image from "next/image";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const quickFacts = [
    {
      label: "Alma Mater",
      value: "University of Karachi (UBIT)",
      icon: "🎓",
      detail: "BS Computer Science (2023 – Expected 2026)",
    },
    {
      label: "Location",
      value: "Karachi, Pakistan",
      icon: "📍",
      detail: "Open to Local & Remote Engineering Roles",
    },
    {
      label: "Core Specialization",
      value: "Java, Spring Boot & Distributed Systems",
      icon: "⚡",
      detail: "Microservices, Kafka, Redis, SAGA Pattern, MySQL",
    },
    {
      label: "Availability",
      value: "Actively Interviewing",
      icon: "💼",
      detail: "Entry / Junior Java Backend & Full-Stack Roles",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative text-white">
      <SectionContainer>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          {/* Left Column: Profile Photo at Karachi University Gate */}
          <AnimatedSection className="w-full lg:w-[420px] shrink-0 flex flex-col items-center">
            <div className="relative group w-full max-w-[360px]">
              {/* Radiant Ambient Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />

              {/* Photo Frame Container */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0d121c] p-2.5 shadow-2xl">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile/shehzad-uok.jpg"
                    alt="Shehzad Nisar at University of Karachi"
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                    className="object-cover object-top filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60" />
                </div>

                {/* Photo Caption Badge */}
                <div className="mt-3 flex items-center justify-between px-2 py-1 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    SHEHZAD NISAR
                  </span>
                  <span>UNIV. OF KARACHI</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Bio Narrative & Technical Ethos */}
          <AnimatedSection delay={0.2} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
              <span>01. ABOUT ME</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Engineering Resilient Backends & Distributed Consistency
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              <p>
                I am a final-year Bachelor of Computer Science student at the{" "}
                <strong className="text-white font-semibold">University of Karachi</strong>.
                My passion lies in backend systems: designing microservice boundaries, handling high-concurrency race conditions, and modeling event-driven data flows that never corrupt financial state.
              </p>
              <p>
                Rather than building toy CRUD apps, I designed and delivered{" "}
                <strong className="text-emerald-400 font-semibold">TransMoney</strong>—a complete 6-service microservices wallet platform implementing SAGA distributed transactions, Redis token-bucket rate limits, Kafka topic event streaming, and pessimistic database locking to simulate real-world fintech challenges.
              </p>
              <p>
                I also designed the modular payment abstraction layer for{" "}
                <strong className="text-cyan-400 font-semibold">Basho Valley Foundation</strong> (supporting JazzCash, Easypaisa, PayFast, and Stripe) and co-engineered the{" "}
                <strong className="text-white font-semibold">Pakistan Sign Language (PSL) Real-Time AI</strong> recognition system with MediaPipe and TensorFlow Lite.
              </p>
            </div>

            {/* Quick Facts Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {quickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 border border-white/10 hover:border-emerald-500/30 transition-all flex items-start gap-3.5"
                >
                  <span className="text-2xl shrink-0 mt-0.5">{fact.icon}</span>
                  <div>
                    <span className="block text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                      {fact.label}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {fact.value}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {fact.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>
    </section>
  );
}
