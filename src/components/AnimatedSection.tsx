"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

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
  return (
    <motion.div
      className={className}
      initial={initial || { opacity: 0, y: 30 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      transition={
        transition || {
          delay,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }
      }
      viewport={viewport || { once: true, amount: 0.15 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
