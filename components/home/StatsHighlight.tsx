"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, GraduationCap, Trophy, Users } from "lucide-react";

import CountUp from "@/components/shared/CountUp";

const stats = [
  {
    value: "450+",
    label: "Student Community",
    subtext: "UG & PG engineers across batches",
    icon: Users,
    href: "/people",
    accent: "from-[#C6A75E]/20 to-transparent",
  },
  {
    value: "35+",
    label: "Events & Workshops",
    subtext: "Annual hackathons, bootcamps & tech talks",
    icon: Trophy,
    href: "/events",
    accent: "from-[#1F2A44]/10 to-transparent",
  },
  {
    value: "96%",
    label: "Placement Record",
    subtext: "Highest package ₹32 LPA in top tier tech",
    icon: GraduationCap,
    href: "/placements",
    accent: "from-[#C6A75E]/15 to-transparent",
  },
  {
    value: "1200+",
    label: "Alumni Worldwide",
    subtext: "Leading innovation across top global firms",
    icon: Building2,
    href: "/alumni",
    accent: "from-[#1F2A44]/8 to-transparent",
  },
];

export default function StatsHighlight() {
  return (
    <section className="border-b border-[#1F2A44]/10 bg-[#E8DCC8] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 flex items-end justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#1F2A44]/55">
            By the numbers
          </p>
          <div className="mx-8 h-px flex-1 bg-[#1F2A44]/15" />
          <span className="text-[10px] font-medium text-[#1F2A44]/45">Academic Year 2026–27</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
              >
                <Link
                  href={stat.href}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-[#1F2A44]/10 bg-white/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_40px_rgba(31,42,68,0.10)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-60`}
                  />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1F2A44] text-[#C6A75E]">
                      <Icon size={18} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#1F2A44]/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C6A75E]"
                    />
                  </div>

                  <div className="relative mt-5">
                    <CountUp value={stat.value} duration={1200} />
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#1F2A44]">
                      {stat.label}
                    </p>
                    {stat.subtext && (
                      <p className="mt-1.5 text-xs leading-relaxed text-[#1F2A44]/55">
                        {stat.subtext}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
