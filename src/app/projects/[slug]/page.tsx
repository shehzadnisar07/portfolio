import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import SectionContainer from "@/components/SectionContainer";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-[#090b10] text-white pt-6 sm:pt-8 pb-20 sm:pb-24">
      <SectionContainer>
        {/* Breadcrumb Back Button */}
        <Link
          href="/#projects"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-all mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
          <span>Back to Systems Portfolio</span>
        </Link>

        {/* Hero Section of Case Study */}
        <div className="max-w-4xl text-left">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
              CASE STUDY &amp; SYSTEM SPEC
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-zinc-500">
              ARCHITECTURE OVERVIEW
            </span>
          </div>

          <h1 className="text-[clamp(1.875rem,1.2rem+3.2vw,3.75rem)] font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-lg md:text-xl font-mono text-cyan-400">
            {project.subtitle}
          </p>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
            {project.overview}
          </p>

          {/* Action Links */}
          <div className="mt-7 sm:mt-8 flex flex-col min-[420px]:flex-row flex-wrap items-stretch min-[420px]:items-center gap-3 sm:gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold text-black hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Visit Live Platform</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-xs font-mono text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Inspect Source Code</span>
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 text-left">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-xs font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics Bar */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 sm:p-5 border border-white/10 text-left"
              >
                <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono break-words">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-white mt-1">
                  {m.label}
                </div>
                {m.description && (
                  <p className="text-xs text-zinc-400 mt-1">
                    {m.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Architecture & Engineering Breakdown */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 text-left">
          {/* Challenge Card */}
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-white/10">
            <div className="text-xs font-mono text-amber-400 mb-2 uppercase tracking-widest font-bold">
              01 // The Engineering Challenge
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Concurrency &amp; Transaction Boundaries
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution Card */}
          <div className="glass-card rounded-3xl p-5 sm:p-8 border border-white/10">
            <div className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-widest font-bold">
              02 // The Architectural Solution
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Decoupled Events &amp; State Isolation
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture Specification Checklist */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="mt-10 sm:mt-12 glass-card rounded-3xl p-5 sm:p-8 border border-white/10 text-left">
            <h2 className="text-base sm:text-lg font-bold text-white font-mono mb-4">
              SYSTEM ARCHITECTURE COMPONENTS
            </h2>
            <div className="space-y-3">
              {project.architecture.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl bg-white/[0.02] p-3.5 border border-white/5"
                >
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm shrink-0 mt-0.5">
                    [{idx + 1}]
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-300 leading-relaxed min-w-0 break-words">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Snippet Preview (for TransMoney / Sign Analyzer / Console Banking) */}
        {project.codeSnippet && (
          <div className="mt-10 sm:mt-12 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-t-2xl bg-[#0e131d] border-t border-x border-white/10 font-mono text-xs text-zinc-400">
              <span className="flex items-center gap-2 min-w-0">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
                <span className="truncate">{project.codeSnippet.filename}</span>
              </span>
              <span className="text-emerald-400 uppercase shrink-0">
                {project.codeSnippet.language}
              </span>
            </div>
            <div className="rounded-b-2xl bg-[#06080d] p-4 sm:p-6 border border-white/10 overflow-x-auto text-xs sm:text-sm font-mono text-emerald-300 leading-relaxed">
              <pre>{project.codeSnippet.code}</pre>
            </div>
          </div>
        )}

        {/* Visual Case Study Gallery (only when gallery has images) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mt-12 sm:mt-16 text-left">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                SYSTEM VERIFICATION &amp; VISUAL ARTIFACTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Screenshots &amp; End-to-End Workflow
              </h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10"
                >
                  <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-contain object-center"
                    />
                  </div>
                  <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0c1017]">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                      <span>STEP {idx + 1}</span>
                      <span aria-hidden="true">•</span>
                      <span className="text-zinc-400 uppercase">{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Back Button */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-xs font-bold font-mono text-black hover:bg-emerald-400 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span>RETURN TO PORTFOLIO</span>
          </Link>
        </div>
      </SectionContainer>
    </div>
  );
}
