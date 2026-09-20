"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { AchievementItem } from "@/data/achievements";

type FeaturedAchievementProps = {
  achievement: AchievementItem;
};

export default function FeaturedAchievement({ achievement }: FeaturedAchievementProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
      className="border-b border-[#1F2A44]/10 bg-[#1F2A44] px-6 py-10 text-[#F7F3EB] md:px-10 md:py-16"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="relative border-r border-[#F7F3EB]/10 pr-4 md:pr-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
              Featured Achievement
            </p>
            <div className="mt-6 flex items-end gap-4">
              <span className="text-[clamp(3rem,7vw,7rem)] font-semibold leading-none tracking-[-0.08em] text-[#F7F3EB]">
                {achievement.year}
              </span>
              <span className="mb-3 border-b border-[#C6A75E] pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A75E]">
                {achievement.category}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EB]/60">
              {achievement.result}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              {achievement.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#F7F3EB]/80">
              {achievement.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EB]/55">
                  Team / student
                </p>
                <p className="mt-2 text-lg font-medium text-[#F7F3EB]">{achievement.team}</p>
              </div>

              <Link
                href="#hall-of-fame-list"
                className="inline-flex items-center gap-3 self-start rounded-full border border-[#F7F3EB]/15 bg-white/5 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F7F3EB] transition-all duration-200 hover:border-[#C6A75E]/50 hover:text-[#C6A75E]"
              >
                View Achievement
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
