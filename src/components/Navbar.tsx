"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { contact } from "@/data/contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .filter((l) => l.href.startsWith("#"))
      .map((l) => l.href.substring(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-[100] w-full pt-3 pb-2 px-3 sm:px-6 pointer-events-none">
      <SectionContainer className="pointer-events-none max-w-7xl">
        <nav className="pointer-events-auto mx-auto flex h-[58px] sm:h-[64px] items-center justify-between rounded-full border border-white/10 bg-[#0d121c]/80 px-4 sm:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30">
          {/* Logo & Monogram */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#090b10] transition-colors group-hover:bg-[#0d121c]">
                <span className="text-xs sm:text-sm font-black tracking-wider text-emerald-400 font-mono">
                  SN
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Shehzad Nisar
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">
                Java Backend & Systems
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-3 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Status Telemetry Dot */}
            <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>200 OK</span>
            </div>

            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:border-emerald-500/40 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaGithub className="text-base" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all"
            >
              <FaLinkedin className="text-base" />
            </a>

            <a
              href={contact.resumePath}
              download
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-black tracking-wide shadow-md shadow-emerald-500/20 hover:brightness-110 hover:shadow-emerald-500/30 transition-all"
            >
              <span>Resume</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation"
              className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-auto mt-2 flex flex-col rounded-2xl border border-white/10 bg-[#0d121c]/95 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                <div className="flex gap-3">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <FaLinkedin className="text-lg" />
                  </a>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  SYSTEM READY
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionContainer>
    </header>
  );
}
