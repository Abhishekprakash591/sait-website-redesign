"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { label: "Activities", value: "12" },
  { label: "Projects", value: "02" },
  { label: "Achievements", value: "03" },
];

type JourneyProgressProps = {
  completedCount: number;
  totalCount: number;
};

export default function JourneyProgress({ completedCount, totalCount }: JourneyProgressProps) {
  const shouldReduceMotion = useReducedMotion();
  const percentage = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="px-6 py-10 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                YOUR PROGRESS
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
                {completedCount} / {totalCount} milestones completed
              </h3>
            </div>

            <div className="w-full max-w-md">
              <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                <span>Progress</span>
                <span>{percentage}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={shouldReduceMotion ? { width: `${percentage}%` } : { width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: shouldReduceMotion ? 0.15 : 0.7, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#F59E0B]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.2rem] border border-white/10 bg-[#0E131F] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
