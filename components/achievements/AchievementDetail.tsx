"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Award } from "lucide-react";

import type { AchievementItem } from "@/data/achievements";

type AchievementDetailProps = {
  item: AchievementItem;
  onClose: () => void;
};

export default function AchievementDetail({ item, onClose }: AchievementDetailProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.42, ease: "easeOut" }}
      className="overflow-hidden border-t border-[#1F2A44]/10 bg-[#F7F3EB]"
    >
      <div className="grid gap-5 px-4 pb-5 pt-5 md:grid-cols-[0.8fr_1.2fr] md:px-6 md:pb-6">
        <div className="rounded-[1.4rem] border border-[#1F2A44]/10 bg-white/60 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
            Achievement detail
          </p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-semibold tracking-[-0.06em] text-[#1F2A44]">{item.year}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#667085]">{item.category}</span>
          </div>
          <div className="mt-4 rounded-[1rem] border border-[#C6A75E]/20 bg-[#C6A75E]/8 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">
              Result
            </p>
            <p className="mt-2 text-sm font-medium text-[#1F2A44]">{item.result}</p>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.4rem] border border-[#1F2A44]/10 bg-white/60 p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">
              <Award size={14} className="text-[#C6A75E]" />
              {item.badge}
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44] transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]"
            >
              <ArrowLeft size={12} />
              Back to hall of fame
            </button>
          </div>

          <h3 className="text-2xl font-semibold tracking-[-0.05em] text-[#1F2A44] md:text-3xl">
            {item.title}
          </h3>

          <p className="text-base leading-relaxed text-[#1F2A44]/75">{item.details}</p>

          <div className="grid gap-4 border-t border-[#1F2A44]/10 pt-4 md:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">
                Team / student
              </p>
              <p className="mt-2 text-sm text-[#1F2A44]">{item.team}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]/55">
                Category
              </p>
              <p className="mt-2 text-sm text-[#1F2A44]">{item.category}</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F2A44]">
            Story continues
            <ArrowRight size={12} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
