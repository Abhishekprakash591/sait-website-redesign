"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { careerResources } from "@/data/placements";

export default function CareerResources() {
  return (
    <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Career resources
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Tools for a stronger next step.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {careerResources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#131929]"
            >
              <h3 className="text-2xl font-medium tracking-tight text-white">
                {resource.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/55">
                {resource.description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F59E0B] transition-opacity hover:opacity-70"
              >
                {resource.cta}
                <ArrowRight size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
