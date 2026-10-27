"use client";

import Link from "next/link";
import SectionContainer from "./SectionContainer";
import { contact } from "@/data/contact";
import { Mail, MessageCircle, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/10 bg-[#06080c] py-10 sm:py-12 text-white relative z-10">
      <SectionContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 sm:pb-10 border-b border-white/10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-6 flex flex-col items-start text-left gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#090b10]">
                  <span className="text-xs font-black text-emerald-400 font-mono">
                    SN
                  </span>
                </div>
              </div>
              <span className="text-lg font-black tracking-tight text-white">
                Shehzad Nisar
              </span>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Junior Java Backend &amp; Full-Stack Developer specializing in Spring Boot microservices, Kafka event streaming, Redis, and React.
            </p>
            <div className="text-xs font-mono text-emerald-400">
              UBIT, University of Karachi • Karachi, Pakistan
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav
            aria-label="Footer navigation"
            className="lg:col-span-3 flex flex-col items-start text-left"
          >
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              NAVIGATION
            </h4>
            <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-zinc-400">
              <Link href="/#about" className="py-1 hover:text-emerald-400 transition-colors">
                About Me
              </Link>
              <Link href="/#skills" className="py-1 hover:text-emerald-400 transition-colors">
                Skills Stack
              </Link>
              <Link href="/#architecture" className="py-1 hover:text-emerald-400 transition-colors">
                TransMoney Architecture
              </Link>
              <Link href="/#projects" className="py-1 hover:text-emerald-400 transition-colors">
                Featured Projects
              </Link>
              <Link href="/#experience" className="py-1 hover:text-emerald-400 transition-colors">
                Experience
              </Link>
            </div>
          </nav>

          {/* Connect Column */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
              PROFILES &amp; CHANNELS
            </h4>
            <div className="flex flex-wrap gap-2.5">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
              >
                <Github className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
              >
                <Mail className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/923443380292"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
            <a
              href={contact.resumePath}
              download
              className="mt-4 inline-flex min-h-[40px] items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Download PDF Resume</span>
              <Download className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} Shehzad Nisar. All rights reserved.
          </div>
          <div>
            Engineered with Next.js, TypeScript, Tailwind CSS, &amp; Lucide Icons.
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
