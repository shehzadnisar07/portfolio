"use client";

import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { education } from "@/data/education";
import { CheckCircle2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative text-white bg-[#06080c]/40">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>06. ACADEMICS & QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Academic Background
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Formal foundations in Computer Science complemented by enterprise software architecture principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 gap-6 max-w-4xl">
          {education.map((item, idx) => (
            <AnimatedSection
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 hover:border-emerald-500/30 transition-all text-left"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-widest">
                    DEGREE PROGRAM
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {item.degree}
                  </h3>
                  <p className="text-base text-zinc-300 font-medium mt-1">
                    {item.institution} • {item.location}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-xs font-mono text-emerald-300">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    ACADEMIC FOCUS & MILESTONES
                  </h4>
                  <ul className="space-y-2.5 text-sm sm:text-base text-zinc-300">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                        <span>{h}</span>
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
