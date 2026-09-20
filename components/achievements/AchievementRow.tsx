"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import AchievementDetail from "@/components/achievements/AchievementDetail";
import type { AchievementItem } from "@/data/achievements";

type AchievementRowProps = {
  item: AchievementItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

export default function AchievementRow({ item, isOpen, onToggle, index }: AchievementRowProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="border-t border-[#1F2A44]/10 bg-[#F7F3EB]"
    >
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={shouldReduceMotion ? undefined : { x: 3 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-full px-4 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1F2A44] md:px-6 md:py-6"
        aria-expanded={isOpen}
        aria-controls={`achievement-detail-${item.id}`}
      >
        <div className="grid gap-3 md:grid-cols-[110px_140px_1.2fr_0.8fr_28px] md:items-center">
          <div className="flex items-center gap-3 md:gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A75E]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
              {item.year}
            </span>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#667085] md:text-[#1F2A44]/70">
            {item.category}
          </span>

          <div className="min-w-0">
            <p className="text-base font-medium tracking-[-0.03em] text-[#1F2A44] md:text-lg">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#1F2A44]/65">{item.description}</p>
          </div>

          <div className="flex items-center gap-2 text-sm text-[#1F2A44]/75">
            {item.team ? <Check size={14} className="text-[#C6A75E]" /> : null}
            <span className="truncate">{item.team}</span>
          </div>

          <div className="flex justify-end">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1F2A44]/10 bg-white/50 transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight
                size={14}
                className={[
                  "text-[#1F2A44] transition-transform duration-200",
                  isOpen ? "translate-x-0.5" : "",
                ].join(" ")}
              />
            </span>
          </div>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <AchievementDetail item={item} onClose={onToggle} />
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}
