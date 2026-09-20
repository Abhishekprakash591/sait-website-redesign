"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
  as?: "main" | "section" | "div";
  animate?: boolean;
};

export default function PageWrapper({
  children,
  className = "",
  as: Component = "main",
  animate = true,
}: PageWrapperProps) {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">{children}</div>
  );

  if (!animate) {
    return (
      <Component className={`w-full py-16 md:py-24 ${className}`.trim()}>
        {content}
      </Component>
    );
  }

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
      className={`w-full py-16 md:py-24 ${className}`.trim()}
    >
      {content}
    </motion.div>
  );
}
