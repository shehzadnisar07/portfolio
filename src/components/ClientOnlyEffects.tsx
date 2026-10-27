"use client";

import { useEffect } from "react";
import CursorTrail from "./CursorTrail";

export default function ClientOnlyEffects() {
  useEffect(() => {
    // Only initialize smooth scroll on desktop pointer devices without reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768
    ) {
      return;
    }

    let lenisInstance: import("lenis").default | null = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({
        lerp: 0.08,
        duration: 1.2,
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return <CursorTrail />;
}
