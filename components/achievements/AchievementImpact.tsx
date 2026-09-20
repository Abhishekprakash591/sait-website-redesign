"use client";

import { motion, useReducedMotion } from "framer-motion";

import type { AchievementItem } from "@/data/achievements";

type AchievementImpactProps = {
  items: AchievementItem[];
};

const formatCount = (value: number) => value.toString().padStart(2, "0");

export default function AchievementImpact({ items }: AchievementImpactProps) {
  const shouldReduceMotion = useReducedMotion();
  const uniqueCategories = new Set(items.map((item) => item.category)).size;
  const years = Array.from(new Set(items.map((item) => item.year))).sort((a, b) => Number(a) - Number(b));
  const yearsSpan = years.length > 1 ? Number(years[years.length - 1]) - Number(years[0]) + 1 : 1;

  const stats = [
    { label: "Achievements", value: formatCount(items.length) },
    { label: "Categories", value: formatCount(uniqueCategories) },
    { label: "Years of stories", value: formatCount(yearsSpan) },
  ];

  return (
    <section className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
          className="grid gap-4 border-t border-[#1F2A44]/10 pt-6 md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="rounded-[1.4rem] border border-[#1F2A44]/10 bg-white/60 p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#667085]">
                {stat.label}
              </p>
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: shouldReduceMotion ? 0.15 : 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#1F2A44] md:text-5xl"
              >
                {stat.value}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
