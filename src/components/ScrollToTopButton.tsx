"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/30 bg-[#0d121c]/90 text-emerald-400 shadow-xl backdrop-blur-md transition-all hover:border-emerald-400 hover:bg-emerald-500 hover:text-black hover:scale-105 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
