import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Quote } from "lucide-react";

import type { AlumniRecord } from "@/data/alumni";

type AlumniSpotlightProps = {
  alumni: AlumniRecord;
};

export default function AlumniSpotlight({ alumni }: AlumniSpotlightProps) {
  return (
    <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
            Featured alumni
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/5 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#F59E0B]">
              <GraduationCap size={14} className="text-[#F59E0B]" />
              {alumni.batch} graduate
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {alumni.photo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={alumni.photo}
                  alt={alumni.name}
                  className="h-28 w-28 rounded-[1.8rem] object-cover border-2 border-white/20 shadow-xl"
                />
              )}
              <div>
                <h2 className="max-w-2xl text-4xl font-semibold tracking-tight md:text-6xl text-white">
                  {alumni.name}
                </h2>

                <div className="mt-4 space-y-1 text-sm uppercase tracking-[0.12em] text-white/70 font-medium">
                  <p className="text-[#F59E0B] font-bold">{alumni.role}</p>
                  <p>{alumni.company}</p>
                  <p className="text-white/50">{alumni.industry}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-[#080C14] p-5 text-white">
              <div className="flex items-center gap-3 text-[#F59E0B]">
                <Quote size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
                  Alumni story
                </span>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-white/80">“{alumni.story}”</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-[1.8rem] border border-white/10 bg-[#080C14] p-5 text-white">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Achievement highlight
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{alumni.highlight}</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                Achievement detail
              </p>
              <p className="mt-2 text-base leading-relaxed text-white/70">{alumni.achievement}</p>
            </div>

            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#F59E0B]">
              Learn from the community
              <ArrowRight size={16} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
