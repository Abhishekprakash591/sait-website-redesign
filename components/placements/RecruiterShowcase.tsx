"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users } from "lucide-react";

import { recruiters } from "@/data/placements";

const sectors = ["All", ...new Set(recruiters.map((recruiter) => recruiter.sector))];

export default function RecruiterShowcase() {
  const [selectedSector, setSelectedSector] = useState<string>("All");

  const filteredRecruiters = useMemo(() => {
    return selectedSector === "All"
      ? recruiters
      : recruiters.filter((recruiter) => recruiter.sector === selectedSector);
  }, [selectedSector]);

  return (
    <section className="relative border-b border-white/10 bg-[#080C14] px-6 py-20 text-white md:px-10 md:py-28">
      {/* Subtle modern ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-96 w-full max-w-7xl bg-gradient-to-b from-[#F59E0B]/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#F59E0B]">
              <span>OUR RECRUITERS</span>
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl text-white">
              Launchpad for exceptional careers.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-400 leading-relaxed font-normal">
              Our Department of Information Technology has a proven track record of placing talented students in top-tier technology and product companies.
            </p>
          </div>

          {/* Minimalist Sector Pills */}
          <div className="flex flex-wrap gap-2">
            {sectors.map((sector) => (
              <button
                key={sector}
                type="button"
                aria-pressed={selectedSector === sector}
                onClick={() => setSelectedSector(sector)}
                className={`rounded-full border px-4 py-2 text-xs font-medium tracking-wide transition-all duration-200 ${
                  selectedSector === sector
                    ? "border-[#F59E0B] bg-[#F59E0B] text-black font-semibold shadow-md"
                    : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Recruiter Cards List */}
        <div className="space-y-3.5">
          {filteredRecruiters.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0E131F]/90 p-4 md:flex-row md:items-center md:justify-between md:px-6 md:py-4.5 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[#131929] hover:shadow-xl"
            >
              {/* Left side: Logo + Name & Employees */}
              <div className="flex items-center gap-5">
                {/* Crisp Vector Logo Frame */}
                <div className="flex h-14 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {company.name}
                    </h3>
                    <span className="hidden rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-neutral-300 sm:inline-block">
                      {company.sector}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-400 font-normal">
                    Number Of Employees:{" "}
                    <span className="font-semibold text-white/90">
                      {company.employeeCount}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right side: Alumni Count + Know More Button */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                {/* Alumni stat badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-neutral-300 transition-colors group-hover:border-white/20 group-hover:text-white">
                  <Users size={14} className="text-[#F59E0B]" />
                  <span>{company.alumniWorking}</span>
                </div>

                {/* Know more button */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-transparent px-4 py-2 text-xs font-medium text-white transition-all duration-200 group-hover:border-white group-hover:bg-white group-hover:text-black"
                >
                  <span>know more</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


