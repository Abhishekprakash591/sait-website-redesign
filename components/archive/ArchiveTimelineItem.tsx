"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { ArchiveItem } from "@/data/archive";

type ArchiveTimelineItemProps = {
  item: ArchiveItem;
  index: number;
};

export default function ArchiveTimelineItem({ item, index }: ArchiveTimelineItemProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.15 : 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.05,
        ease: "easeOut",
      }}
      className="relative grid gap-4 md:grid-cols-[140px_1fr] md:gap-8"
    >
      <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
        <span
          className="relative z-10 inline-flex h-4 w-4 rounded-full border-2 border-[#080C14] bg-[#F59E0B] shadow-[0_0_0_4px_rgba(245,158,11,0.2)]"
          aria-hidden="true"
        />
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 md:mt-4">
          {item.year}
        </p>
      </div>

      <div className="relative rounded-[1.5rem] border border-white/10 bg-white/5 p-5 md:p-6 transition-all hover:bg-[#131929] hover:border-white/20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
            {item.category}
          </span>
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/50">
            <span className="h-1 w-1 rounded-full bg-[#F59E0B]" />
            {item.year}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white md:text-[2rem] mt-2">
          {item.title}
        </h3>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
