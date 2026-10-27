"use client";

import Image from "next/image";
import Link from "next/link";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>04. FEATURED ENGINEERING WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Production Systems & Architectures
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Detailed case studies across distributed banking microservices, multi-gateway fintech platforms, and real-time AI inference engines.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectNumber = (index + 1).toString().padStart(2, "0");

            return (
              <AnimatedSection
                key={project.slug}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-14 items-center`}
              >
                {/* Media Preview Column */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c1017] shadow-2xl transition-all duration-500 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                    {/* Aspect Frame */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-40" />
                    </div>

                    {/* Image Footer Bar */}
                    <div className="flex items-center justify-between border-t border-white/10 bg-[#090b10]/90 px-4 py-3 text-xs font-mono">
                      <span className="text-zinc-400 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        CASE STUDY {projectNumber}
                      </span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
                      >
                        Deep Dive Spec →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs">
                    <span className="text-emerald-400 font-bold tracking-wider">
                      PROJECT {projectNumber}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400 uppercase">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                    {project.title}
                  </h3>

                  {/* Technology Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-mono text-zinc-300"
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
                    <div className="mt-5 grid grid-cols-2 gap-3 w-full">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-left"
                        >
                          <div className="text-sm font-bold text-emerald-400 font-mono">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-zinc-400">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Call to Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-bold text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
                    >
                      <span>Read Case Study</span>
                      <span>→</span>
                    </Link>

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-bold text-cyan-300 transition-all hover:bg-cyan-500/20"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span>Live Platform</span>
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-zinc-300 transition-all hover:text-white hover:border-white/20"
                      >
                        <FaGithub className="text-sm" />
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
