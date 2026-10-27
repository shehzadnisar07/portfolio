import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "nav";
  id?: string;
}

export default function SectionContainer({
  children,
  className,
  as: Component = "div",
  id,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
