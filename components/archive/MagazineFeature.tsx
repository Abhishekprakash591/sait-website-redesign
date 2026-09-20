"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function MagazineFeature() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-6 py-12 md:px-10 md:py-20 border-b border-white/10 bg-[#080C14]">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              THE SAIT MAGAZINE
            </p>
            <h3 className="mt-3 max-w-xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              A record of student voices.
            </h3>
          </div>

          <div className="pl-0 lg:pl-6">
            <p className="max-w-lg text-base leading-relaxed text-white/60">
              It has been a place for student writing, poems, drawings, creative contributions and moments from across the department and community.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-8 rounded-[2rem] border border-white/10 bg-[#0E131F] p-5 text-white md:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.5rem] border border-[#F59E0B]/30 bg-[#080C14] p-4 text-white shadow-xl">
              <div className="border-b border-white/10 pb-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                  Vol. 12
                </p>
                <p className="mt-3 text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-none tracking-[-0.08em] text-white">
                  SAIT
                </p>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <p className="font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">Student voices</p>
                <p>Poems</p>
                <p>Drawings</p>
                <p>Creative contributions</p>
                <p>Department moments</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F59E0B]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                Department archive
              </div>

              <p className="text-lg leading-relaxed text-white/80">
                A publication that captured the mood, ideas and creative energy of the student body — long before digital channels became the default archive.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Student writing",
                  "Poems",
                  "Drawings",
                  "Creative voices",
                ].map((item) => (
                  <div key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85 text-center">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
