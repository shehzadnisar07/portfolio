"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { contact } from "@/data/contact";
import { Download, Menu, X } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";

const navLinks = [
  { name: "About", href: "/#about", sectionId: "about" },
  { name: "Skills", href: "/#skills", sectionId: "skills" },
  { name: "Microservices", href: "/#architecture", sectionId: "architecture" },
  { name: "Projects", href: "/#projects", sectionId: "projects" },
  { name: "Experience", href: "/#experience", sectionId: "experience" },
  { name: "Contact", href: "/#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const sections = navLinks.map((l) => l.sectionId);

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

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleBtnRef.current?.focus();
      }
    };

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] w-full pt-2.5 sm:pt-3 pb-2 pointer-events-none"
    >
      <SectionContainer className="pointer-events-none max-w-7xl px-3 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="pointer-events-auto mx-auto flex h-[56px] sm:h-[64px] items-center justify-between gap-2 rounded-full border border-white/10 bg-[#0d121c]/85 px-2.5 sm:px-5 lg:px-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30"
        >
          {/* Logo & Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3 min-w-0 shrink"
          >
            <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-[#090b10] transition-colors group-hover:bg-[#0d121c]">
                <span className="text-xs sm:text-sm font-black tracking-wider text-emerald-400 font-mono">
                  SN
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors truncate">
                Shehzad Nisar
              </span>
              <span className="hidden sm:block text-[10px] font-mono uppercase tracking-widest text-emerald-400/80 truncate">
                Java, Spring Boot & Microservices
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
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
                      transition={
                        prefersReducedMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 350, damping: 30 }
                      }
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Live Status Telemetry Dot */}
            <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-mono text-emerald-300">
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
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:border-emerald-500/40 hover:text-white hover:bg-white/5 transition-all"
            >
              <Github className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 hover:border-cyan-500/40 hover:text-white hover:bg-white/5 transition-all"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
            </a>

            <a
              href={contact.resumePath}
              download={contact.resumeFileName}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 px-3 py-2 sm:px-4 text-xs font-bold text-black tracking-wide shadow-md shadow-emerald-500/20 hover:brightness-110 hover:shadow-emerald-500/30 transition-all"
            >
              <span>Resume</span>
              <Download className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              ref={toggleBtnRef}
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-drawer"
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 hover:text-white hover:border-white/20 transition-all"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-zinc-200" strokeWidth={1.75} aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-200" strokeWidth={1.75} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              role="region"
              aria-label="Mobile navigation menu"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="pointer-events-auto mt-2 flex flex-col max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#0d121c]/95 p-3 sm:p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex min-h-[44px] items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold"
                          : "text-zinc-300 hover:bg-white/5 hover:text-emerald-400"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span>SYSTEM READY</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SectionContainer>
    </header>
  );
}
