"use client";

import { motion, useReducedMotion } from "framer-motion";

const statements = [
  {
    label: "Vision",
    text: "To build a connected student community where every IT student is encouraged to learn beyond the classroom, explore technology, create meaningful work, and grow together.",
  },
  {
    label: "Mission",
    text: "To create opportunities for students to learn, build, participate, share ideas, connect with alumni and peers, and contribute to the academic and student life of the Information Technology community.",
  },
];

export default function VisionMission() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            02 — Vision &amp; Mission
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Learning with purpose. Growing together.
          </h2>
        </div>

        <div className="grid gap-0 border-y border-white/10 md:grid-cols-2">
          {statements.map((statement, index) => (
            <motion.article
              key={statement.label}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, delay: shouldReduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
              className={`px-1 py-8 md:px-8 md:py-10 ${index === 0 ? "md:border-r md:border-white/10" : "border-t border-white/10 md:border-t-0"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                {statement.label}
              </p>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/80 md:text-2xl">
                {statement.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
