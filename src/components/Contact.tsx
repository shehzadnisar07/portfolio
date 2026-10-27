"use client";

import { useState } from "react";
import SectionContainer from "./SectionContainer";
import AnimatedSection from "./AnimatedSection";
import { contact } from "@/data/contact";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send,
  Clock,
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Inquiry: " + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative text-white">
      <SectionContainer>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-mono font-medium text-emerald-400 mb-4">
            <span>07. DIRECT CONNECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Initiate Conversation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Interested in discussing a backend engineering role, microservices architecture, or collaborating on Java systems? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Contact Info & Telemetry Cards */}
          <AnimatedSection className="lg:col-span-5 flex flex-col gap-4 text-left">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg font-bold text-white font-mono mb-4">
                CONTACT METRICS
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      EMAIL
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 truncate block">
                      {contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-emerald-500/10 border border-white/5 hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      PHONE
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300">
                      {contact.phoneFormatted}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <MapPin className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                      LOCATION
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {contact.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp & Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                  INSTANT MESSAGING & PROFILES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://wa.me/923443380292"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 px-4 py-2 text-xs font-semibold text-emerald-300 hover:bg-emerald-600/30 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    <Github className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-all"
                  >
                    <Linkedin className="w-4 h-4" strokeWidth={1.75} aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Interactive Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400 mb-6 font-mono">
                <Clock className="w-3.5 h-3.5 text-emerald-400" strokeWidth={1.75} aria-hidden="true" />
                <span>Direct inquiry dispatched to {contact.email}.</span>
              </p>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                  <CheckCircle2
                    className="w-12 h-12 text-emerald-400 mx-auto mb-3"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h4 className="text-lg font-bold text-white">
                    Inquiry Prepared
                  </h4>
                  <p className="text-sm text-zinc-300 mt-1">
                    Your email client should open with your message pre-loaded.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-mono text-emerald-400 underline hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Mercer"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Java Backend Opportunity / Microservices Discussion"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/60 focus:bg-white/[0.06] focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Shehzad, I saw your TransMoney microservices project and would love to chat about..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/60 focus:bg-white/[0.06] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 py-3.5 text-xs font-bold font-mono tracking-widest text-black transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.99]"
                  >
                    <span>SEND INQUIRY</span>
                    <Send className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </SectionContainer>
    </section>
  );
}
