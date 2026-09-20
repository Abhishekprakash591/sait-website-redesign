"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HallOfFameHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-12 md:px-10 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-12 h-[260px] w-px bg-[#1F2A44]/10" aria-hidden="true" />
        <div className="absolute left-[8%] top-12 h-2.5 w-2.5 rounded-full bg-[#C6A75E] shadow-[0_0_0_8px_rgba(198,167,94,0.12)]" aria-hidden="true" />
        <div className="absolute left-[8%] top-[42%] h-[200px] w-px bg-[#1F2A44]/10" aria-hidden="true" />
        <div className="absolute left-[8%] top-[42%] h-2.5 w-2.5 rounded-full bg-[#C6A75E] shadow-[0_0_0_8px_rgba(198,167,94,0.08)]" aria-hidden="true" />
        <div className="absolute left-[8%] bottom-12 h-[180px] w-px bg-[#1F2A44]/10" aria-hidden="true" />
        <div className="absolute left-[8%] bottom-12 h-2.5 w-2.5 rounded-full bg-[#C6A75E] shadow-[0_0_0_8px_rgba(198,167,94,0.08)]" aria-hidden="true" />
        <div className="absolute left-[8%] top-12 h-px w-[18%] bg-[#1F2A44]/10" aria-hidden="true" />
        <div className="absolute left-[26%] top-[42%] h-px w-[20%] bg-[#1F2A44]/10" aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-end"
        >
          <div>
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, delay: shouldReduceMotion ? 0 : 0.06, ease: "easeOut" }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#1F2A44]/55"
            >
              SAIT HALL OF FAME
            </motion.p>

            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
              className="mt-4 max-w-4xl text-[clamp(3.2rem,6vw,6.75rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#1F2A44]"
            >
              Built by students.
              <br />
              Remembered by SAIT.
            </motion.h1>
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, delay: shouldReduceMotion ? 0 : 0.15, ease: "easeOut" }}
            className="max-w-md justify-self-end md:pb-3"
          >
            <p className="text-lg leading-relaxed text-[#1F2A44]/70">
              Celebrating the ideas, projects, competitions and achievements that become part of our shared story.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
