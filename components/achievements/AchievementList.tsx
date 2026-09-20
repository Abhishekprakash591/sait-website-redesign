"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import AchievementDetail from "@/components/achievements/AchievementDetail";
import AchievementRow from "@/components/achievements/AchievementRow";
import type { AchievementItem } from "@/data/achievements";

type AchievementListProps = {
  items: AchievementItem[];
};

export default function AchievementList({ items }: AchievementListProps) {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  const sortedItems = useMemo(
    () => [...items].sort((a, b) => Number(b.year) - Number(a.year) || a.title.localeCompare(b.title)),
    [items],
  );

  return (
    <section id="hall-of-fame-list" className="px-6 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#1F2A44]/10 pb-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1F2A44]/55">
            Hall of fame list
          </p>
          <div className="hidden h-px flex-1 bg-[#1F2A44]/10 md:block" aria-hidden="true" />
        </div>

        <div className="rounded-[1.6rem] border border-[#1F2A44]/10 bg-[#F7F3EB]">
          {sortedItems.length === 0 ? (
            <div className="p-8 text-center text-[#1F2A44]/70">No achievements match this filter.</div>
          ) : (
            sortedItems.map((item, index) => (
              <AchievementRow
                key={item.id}
                item={item}
                index={index}
                isOpen={openId === item.id}
                onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
