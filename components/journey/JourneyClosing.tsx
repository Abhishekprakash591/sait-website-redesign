"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function JourneyClosing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 text-white md:p-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            EVERYTHING COUNTS.
          </p>
          <h3 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
            A workshop attended.
            <br />
            A project shipped.
            <br />
            A competition entered.
            <br />
            A person you helped.
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            Small moments become your SAIT story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
