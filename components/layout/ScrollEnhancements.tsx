"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

/**
 * Reading progress bar across the top of the viewport.
 * Scroll-to-top action is centralized in MinimalDock.
 */
export default function ScrollEnhancements() {
  const shouldReduceMotion = useReducedMotion();

  const progress = useSpring(0, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0;

      progress.set(nextProgress);
    };

    update();

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [progress]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[#C6A75E]"
      style={{ scaleX: shouldReduceMotion ? 1 : progress }}
    />
  );
}
