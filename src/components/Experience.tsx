"use client";

import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/experience";
import { ArrowRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="w-full py-14 sm:py-20 md:py-28 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>05. CAREER &amp; CONTRIBUTIONS</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.2rem+2.5vw,3rem)] font-black tracking-tight text-white leading-tight">
            Engineering Experience &amp; Projects
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            Hands-on software development across enterprise-pattern microservices, open-source architectures, and non-profit fintech integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-2 sm:ml-6 md:ml-8 space-y-10 sm:space-y-14">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative pl-5 sm:pl-8 md:pl-10 text-left"
            >
              {/* Timeline Marker Dot */}
              <div
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-400 bg-[#090b10] shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                aria-hidden="true"
              />

              <div className="glass-card rounded-3xl p-4 sm:p-6 md:p-8 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4 pb-4 border-b border-white/10">
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end shrink-0">
                    <span className="text-xs font-mono text-zinc-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-[11px] text-zinc-500 mt-1">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Bullets */}
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-zinc-400">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-1" strokeWidth={1.75} aria-hidden="true" />
                      <span className="min-w-0 break-words leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="mt-5 sm:mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] sm:text-xs font-mono text-zinc-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
