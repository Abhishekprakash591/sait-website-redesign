"use client";

import { motion } from "framer-motion";

import { placementStats } from "@/data/placements";

export default function PlacementStats() {
  return (
    <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Placement highlights
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A snapshot of the journey ahead.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {placementStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">{stat.note}</p>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-white/40">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
