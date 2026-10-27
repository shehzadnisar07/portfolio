"use client";

import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { education } from "@/data/education";
import { CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="w-full py-14 sm:py-20 md:py-28 relative text-white bg-[#06080c]/40">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>06. ACADEMICS &amp; QUALIFICATIONS</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.2rem+2.5vw,3rem)] font-black tracking-tight text-white leading-tight">
            Academic Background
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            Formal foundations in Computer Science complemented by enterprise software architecture principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl">
          {education.map((item, idx) => (
            <AnimatedSection
              key={idx}
              className="glass-card rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10 hover:border-emerald-500/30 transition-all text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 sm:pb-6 border-b border-white/10">
                <div className="min-w-0">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-widest">
                    DEGREE PROGRAM
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mt-1">
                    {item.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                    {item.institution} • {item.location}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 sm:px-4 py-1.5 text-xs font-mono text-emerald-300">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-5 sm:mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    ACADEMIC FOCUS &amp; MILESTONES
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm md:text-base text-zinc-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" strokeWidth={1.75} aria-hidden="true" />
                        <span className="min-w-0 break-words leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
