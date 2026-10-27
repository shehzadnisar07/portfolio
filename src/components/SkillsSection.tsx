"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/skills";

const categories = [
  "All",
  "Languages & Frameworks",
  "Distributed Systems & Cloud",
  "Databases & Caching",
  "Tools & DevOps",
] as const;

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Backend Toolchain & Distributed Systems Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Technologies and architectural patterns battle-tested across multi-service deployments, asynchronous event streams, and relational data modeling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection
              key={skill.name}
              delay={index * 0.03}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-emerald-500/40 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                    {skill.badge || skill.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">
                    PRODUCTION READY
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{skill.category}</span>
                <span className="text-emerald-500/80 group-hover:translate-x-1 transition-transform">
                  verified →
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
