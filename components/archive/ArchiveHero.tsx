"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ArchiveHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 bg-[#080C14] px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F59E0B]">
              SAIT ARCHIVE · 2000—2026
            </p>
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.7,
                ease: "easeOut",
                delay: shouldReduceMotion ? 0 : 0.08,
              }}
              className="mt-4 max-w-4xl text-[clamp(3rem,6vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white"
            >
              Every year leaves a trace.
            </motion.h1>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.7,
                ease: "easeOut",
                delay: shouldReduceMotion ? 0 : 0.12,
              }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60"
            >
              From student projects to departmental milestones, this is the living memory of SAIT.
            </motion.p>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="border-l border-[#F59E0B] pl-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              26 YEARS OF STUDENT-LED INITIATIVE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
