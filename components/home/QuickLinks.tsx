"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  FolderKanban,
  GraduationCap,
  Trophy,
  Users,
} from "lucide-react";

const quickLinks = [
  {
    number: "01",
    title: "Events & Activities",
    description: "Upcoming workshops, seminars, hackathons & community moments.",
    href: "/events",
    icon: CalendarDays,
    accent: "#F59E0B",
    bg: "from-[#0E131F] to-[#141C2E]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
  {
    number: "02",
    title: "Activity Logger",
    description: "Track your workshops, competitions, projects and earn XP badges.",
    href: "/activity-logger",
    icon: FolderKanban,
    accent: "#F59E0B",
    bg: "from-[#111726] to-[#0E131F]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
  {
    number: "03",
    title: "Hall of Fame",
    description: "Celebrate SAIT hackathon champions, research stars & national winners.",
    href: "/achievements",
    icon: Trophy,
    accent: "#F59E0B",
    bg: "from-[#141A29] to-[#0E131F]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
  {
    number: "04",
    title: "Alumni Network",
    description: "Connect with 1200+ alumni driving innovation across global firms.",
    href: "/alumni",
    icon: Users,
    accent: "#F59E0B",
    bg: "from-[#0E131F] to-[#131929]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
  {
    number: "05",
    title: "Placements & Careers",
    description: "₹32 LPA highest package — 96% placement record, top recruiters.",
    href: "/placements",
    icon: GraduationCap,
    accent: "#F59E0B",
    bg: "from-[#171E30] to-[#0E131F]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
  {
    number: "06",
    title: "Announcements",
    description: "Breaking news, exam updates, and department circulars.",
    href: "/announcements",
    icon: Bell,
    accent: "#F59E0B",
    bg: "from-[#0E131F] to-[#151D30]",
    border: "border-white/10 hover:border-[#F59E0B]/40",
  },
];

export default function QuickLinks() {
  return (
    <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              Quick Navigation
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Everything SAIT<span className="text-[#F59E0B]">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            Jump to any section of the SAIT community portal in one click.
          </p>
        </div>

        {/* 3-column grid for large, 2-col for md, 1-col for mobile */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickLinks.map(({ number, title, description, href, icon: Icon, bg, border }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
            >
              <Link
                href={href}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br ${bg} border ${border} p-6 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] md:p-7 min-h-[210px]`}
              >
                {/* Subtle ambient hover glow */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#F59E0B]/5 blur-2xl group-hover:bg-[#F59E0B]/15 transition-all" />

                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white border border-white/10 group-hover:bg-[#F59E0B] group-hover:text-black transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs font-bold text-white/40 group-hover:text-[#F59E0B] transition-colors">
                    {number}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">
                    Explore
                  </span>
                  <ArrowRight
                    size={14}
                    className="text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#F59E0B]"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar with archive link */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-[#0E131F]/80 p-4 sm:px-6 sm:py-3.5 backdrop-blur-md">
          <p className="text-xs text-slate-300">
            <span className="font-bold text-white">SAIT Archive</span> — Department magazine, student writing, technical contributions & past activities.
          </p>
          <Link
            href="/archive"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:border-[#F59E0B] hover:bg-[#F59E0B] hover:text-black"
          >
            <BookOpen size={14} />
            Archive
          </Link>
        </div>
      </div>
    </section>
  );
}
