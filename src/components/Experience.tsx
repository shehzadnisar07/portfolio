"use client";

import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>05. CAREER & CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Engineering Experience & Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Hands-on software development across enterprise-pattern microservices, open-source architectures, and non-profit fintech integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-12 sm:space-y-16">
          {experiences.map((exp, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="relative pl-6 sm:pl-10 text-left"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-400 bg-[#090b10] shadow-[0_0_12px_rgba(16,185,129,0.8)]" />

              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-mono text-emerald-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-xs font-mono text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
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
                      <span className="text-emerald-400 shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 text-xs font-mono text-zinc-400 border border-white/5"
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
