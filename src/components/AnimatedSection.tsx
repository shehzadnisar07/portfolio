"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...props
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : initial || { opacity: 0, y: 24 }
      }
      whileInView={whileInView || { opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : transition || {
              delay,
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }
      }
      viewport={viewport || { once: true, amount: 0.12 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
