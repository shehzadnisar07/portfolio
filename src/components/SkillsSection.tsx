"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { skills } from "@/data/skills";
import {
  Code2,
  Server,
  Network,
  ShieldCheck,
  Database,
  Workflow,
  Activity,
  GitMerge,
  Zap,
  Boxes,
  TableProperties,
  Container,
  Package,
  Layout,
  GitBranch,
  Send,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const skillIconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Network,
  ShieldCheck,
  Database,
  Workflow,
  Activity,
  GitMerge,
  Zap,
  Boxes,
  TableProperties,
  Container,
  Package,
  Layout,
  GitBranch,
  Send,
};

const categories = [
  "All",
  "Languages & Frameworks",
  "Microservices & Cloud",
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
    <section id="skills" className="w-full py-14 sm:py-20 md:py-28 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.2rem+2.5vw,3rem)] font-black tracking-tight text-white leading-tight">
            Backend Toolchain &amp; Microservices Stack
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed">
            Technologies and architectural patterns battle-tested across multi-service deployments, asynchronous event streams, and relational data modeling.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          role="group"
          aria-label="Filter skills by category"
          className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10"
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex min-h-[42px] items-center rounded-full px-4 py-2 text-xs font-mono tracking-wider transition-all ${
                  isSelected
                    ? "bg-emerald-500 text-black font-bold shadow-lg shadow-emerald-500/25"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.iconName
              ? skillIconMap[skill.iconName] || Code2
              : Code2;

            return (
              <AnimatedSection
                key={skill.name}
                delay={index * 0.03}
                className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-emerald-500/40 group flex flex-col justify-between transition-all"
              >
                <div>
                  {/* Skill Card Header with Logo */}
                  <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 transition-all">
                      <IconComponent
                        className="w-5 h-5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wide truncate">
                        {skill.badge || "Verified Stack"}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase truncate">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors text-left">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed text-left">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>PRODUCTION READY</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400/90 group-hover:translate-x-1 transition-transform">
                    <span>verified</span>
                    <ArrowRight className="w-3 h-3" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
