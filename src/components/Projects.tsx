"use client";

import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  Terminal,
  ArrowRight,
  Activity,
  Check,
  CheckCircle2,
} from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-14 sm:py-20 md:py-28 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>04. FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.2rem+2.8vw,3.5rem)] font-black tracking-tight text-white leading-tight">
            Production Microservices &amp; Systems
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            Detailed case studies across Spring Boot microservices, modular payment platforms, and real-time AI inference engines.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-14 sm:space-y-20 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = (index + 1).toString().padStart(2, "0");
            const hasImage = Boolean(project.image);

            return (
              <AnimatedSection
                key={project.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 sm:gap-8 lg:gap-14 items-center`}
              >
                {/* Media Preview Column */}
                <div className="w-full lg:w-1/2 group min-w-0">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1017] shadow-2xl transition-all duration-500 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                    {hasImage ? (
                      /* High-Resolution Media Screenshot */
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-40" aria-hidden="true" />
                      </div>
                    ) : project.slug === "sign-analyzer" ? (
                      /* Dedicated Real-Time WebSocket Terminal Monitor for Sign Analyzer */
                      <div className="relative min-h-[240px] sm:aspect-[16/10] w-full overflow-hidden bg-[#06080d] p-4 sm:p-6 flex flex-col justify-between gap-4 text-left font-mono">
                        <div className="w-full min-w-0">
                          <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10 mb-3 sm:mb-4 text-[11px] sm:text-xs text-zinc-500">
                            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0" aria-hidden="true">
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80" />
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80" />
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-zinc-400 min-w-0">
                              <Activity className="w-3.5 h-3.5 shrink-0 text-cyan-400" strokeWidth={1.75} aria-hidden="true" />
                              <span className="truncate">ws://localhost:8000/ws/psl-inference</span>
                            </span>
                          </div>

                          <div className="space-y-1.5 text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                            <p className="text-emerald-400 break-words">
                              $ uvicorn server.app:app --host 0.0.0.0 --port 8000
                            </p>
                            <p className="text-zinc-500">
                              [WS ACCEPTED] Handshake verified for Expo client
                            </p>
                            <p className="text-cyan-300">
                              [INPUT] MediaPipe: 21 3D hand keypoints received (x, y, z)
                            </p>
                            <p className="text-emerald-300">
                              [TFLITE] Inference latency: 21.4ms | Confidence: 98.6%
                            </p>
                            <p className="text-zinc-300">
                              [PREDICTION] Static: &quot;Alif&quot; (<span lang="ur">الف</span>) | Dynamic: &quot;Shukriya&quot; (<span lang="ur">شکریہ</span>)
                            </p>
                            <p className="inline-flex items-start sm:items-center gap-1.5 text-emerald-400 pt-1">
                              <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 sm:mt-0" strokeWidth={2} aria-hidden="true" />
                              <span>Zero raw video streaming (99% payload reduction)</span>
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 text-[11px] text-zinc-500 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                          <span>FastAPI + TFLite Engine</span>
                          <span className="text-emerald-400">FPS: 30 • P99: 24ms</span>
                        </div>
                      </div>
                    ) : (
                      /* Dedicated Clean Architecture CLI Window for Console Banking */
                      <div className="relative min-h-[240px] sm:aspect-[16/10] w-full overflow-hidden bg-[#06080d] p-4 sm:p-6 flex flex-col justify-between gap-4 text-left font-mono">
                        <div className="w-full min-w-0">
                          <div className="flex items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10 mb-3 sm:mb-4 text-[11px] sm:text-xs text-zinc-500">
                            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0" aria-hidden="true">
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-rose-500/80" />
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-amber-500/80" />
                              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-zinc-400 min-w-0">
                              <Terminal className="w-3.5 h-3.5 shrink-0 text-emerald-400" strokeWidth={1.75} aria-hidden="true" />
                              <span className="truncate">java -cp bin com.banking.Application</span>
                            </span>
                          </div>

                          <div className="space-y-1.5 text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                            <p className="text-emerald-400 break-words">
                              $ java -jar console-banking-engine.jar
                            </p>
                            <p className="text-zinc-500">
                              [INFO] 4-Layer Domain Core Initialized
                            </p>
                            <p className="text-cyan-300">
                              [1] OPEN ACCOUNT (SAVING/CURRENT) → AC000001
                            </p>
                            <p className="text-zinc-400">
                              [2] P2P TRANSFER (TRANSFER_IN / TRANSFER_OUT)
                            </p>
                            <p className="text-zinc-400">
                              [3] CHRONOLOGICAL STATEMENT (Java Streams sorted)
                            </p>
                            <p className="inline-flex items-start sm:items-center gap-1.5 text-emerald-300 pt-1">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 sm:mt-0" strokeWidth={1.75} aria-hidden="true" />
                              <span>Double-entry bookkeeping verified</span>
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 text-[11px] text-zinc-500 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                          <span>Java 17 • Zero External Libs</span>
                          <span className="text-emerald-400">BUILD SUCCESS</span>
                        </div>
                      </div>
                    )}

                    {/* Image / Card Footer Bar */}
                    <div className="flex items-center justify-between gap-2 border-t border-white/10 bg-[#090b10]/90 px-4 py-2.5 text-xs font-mono">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                        CASE STUDY {projectNumber}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        aria-label={`Deep Dive Spec for ${project.title}`}
                        className="inline-flex min-h-[36px] items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                      >
                        <span>Deep Dive Spec</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-2 font-mono text-xs">
                    <span className="text-emerald-400 font-bold tracking-wider">
                      PROJECT {projectNumber}
                    </span>
                    <span className="text-zinc-600" aria-hidden="true">•</span>
                    <span className="text-zinc-400 uppercase">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Technology Pills */}
                  <div className="mt-3.5 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] sm:text-xs font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="mt-5 grid grid-cols-1 min-[380px]:grid-cols-2 gap-3 w-full">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-left"
                        >
                          <div className="text-sm font-bold text-emerald-400 font-mono">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Call to Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 w-full">
                    <Link
                      href={`/projects/${project.slug}`}
                      aria-label={`Read Case Study for ${project.title}`}
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
                    </Link>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live Platform for ${project.title}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-500/20"
                      >
                        <ExternalLink className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        <span>Live Platform</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Source code for ${project.title}`}
                        className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-zinc-300 transition-all hover:text-white hover:border-white/20"
                      >
                        <Github className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
