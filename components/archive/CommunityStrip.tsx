"use client";

import { motion, useReducedMotion } from "framer-motion";

const archiveLabels = [
  "WORKSHOPS",
  "PROJECTS",
  "ALUMNI MEETS",
  "STUDENT VOICES",
  "TECHNOLOGY",
  "COMMUNITY",
];

export default function CommunityStrip() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-y border-white/10 bg-[#0E131F] px-6 py-10 md:px-10 md:py-14">
      <div className="mx-auto max-w-[1440px]">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]"
        >
          From the community
        </motion.p>

        <div className="mt-6 overflow-x-auto pb-1">
          <div className="flex min-w-max gap-3">
            {archiveLabels.map((label, index) => (
              <motion.div
                key={label}
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: index * 0.04, ease: "easeOut" }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 hover:text-white hover:border-white/20 transition-colors"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
