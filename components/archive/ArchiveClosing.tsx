"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function ArchiveClosing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.6, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-[#0E131F] p-8 text-white md:p-12"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            THE STORY CONTINUES.
          </p>
          <h3 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
            Every workshop, project, idea and contribution becomes part of what SAIT carries forward.
          </h3>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              Explore current SAIT
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
