"use client";

import { motion, useReducedMotion } from "framer-motion";

export type AchievementFilterKey = "all" | "hackathons" | "technical" | "academic" | "publications" | "projects";

export type AchievementFilterOption = {
  key: AchievementFilterKey;
  label: string;
  value: string;
};

type AchievementFiltersProps = {
  filters: AchievementFilterOption[];
  selected: AchievementFilterKey;
  onSelect: (key: AchievementFilterKey) => void;
};

export default function AchievementFilters({ filters, selected, onSelect }: AchievementFiltersProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="overflow-x-auto pb-1">
      <div className="flex min-w-max gap-3 md:justify-center">
        {filters.map((filter) => {
          const active = selected === filter.key;

          return (
            <motion.button
              key={filter.key}
              type="button"
              onClick={() => onSelect(filter.key)}
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={[
                "relative whitespace-nowrap px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2A44]",
                active ? "text-[#1F2A44]" : "text-[#667085] hover:text-[#1F2A44]",
              ].join(" ")}
            >
              <span className="relative z-10">{filter.label}</span>
              {active && (
                <motion.span
                  layoutId="achievement-filter-pill"
                  transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.22, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 h-px bg-[#C6A75E]"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
