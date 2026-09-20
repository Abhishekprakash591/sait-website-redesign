"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HallOfFameClosing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 pb-12 pt-6 md:px-10 md:pb-20 md:pt-8">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
          className="rounded-[2rem] border border-[#1F2A44]/10 bg-[#F7F3EB] p-6 md:p-8"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1F2A44]/55">
            The next name could be yours.
          </p>
          <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-5xl">
            Every project, competition, publication and contribution adds another chapter to the SAIT story.
          </h3>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1F2A44]/90"
            >
              Explore Events
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/journey"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-white/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1F2A44]/25 hover:bg-white"
            >
              Start Your Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
