"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Calendar,
  Code2,
  FileDown,
  FolderKanban,
  Layers,
  Trophy,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function BentoHighlights() {
  return (
    <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              02 — Department Pulse & Bento Hub
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Where technology meets community.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-300">
            Discover what makes the Division of Information Technology at SOE CUSAT a thriving hub of engineering talent, research, and collaborative culture.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-12">
          {/* Card 1: Featured Flagship Event (Span 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0E131F] to-[#141C2E] p-7 text-white shadow-xl lg:col-span-7 md:p-9"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F59E0B]/10 blur-3xl" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                  Upcoming Flagship Event
                </span>
                <span className="font-mono text-xs text-slate-400">October 2026</span>
              </div>

              <h3 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                TechSummit & HackSprint &apos;26
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                A 24-hour national hackathon & tech symposium bringing together 300+ developers from across India for hardware, AI, web3, and cloud innovation.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["AI / Machine Learning", "Web3 Systems", "Open Innovation", "₹1,00,000 Prizes"].map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Calendar size={14} className="text-[#F59E0B]" />
                <span>24-Hour Non-Stop Hackathon</span>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-5 py-2.5 text-xs font-bold text-black transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <span>Register / Details</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Student Activity Logger (Span 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#0E131F]/90 p-7 shadow-xl backdrop-blur-md lg:col-span-5 md:p-8"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#F59E0B]">
                  <FolderKanban size={20} />
                </div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  Interactive Desk
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                Student Activity Logger
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Log your workshops, hackathons, and projects. Earn XP badges, climb the departmental leaderboard, and export your official verified participation resume.
              </p>

              {/* Mini Interactive Preview Card */}
              <div className="mt-5 space-y-2 rounded-2xl border border-white/10 bg-white/5 p-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">Smart India Hackathon</span>
                  <span className="rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/30 px-2 py-0.5 text-[10px] font-bold text-[#F59E0B]">
                    +100 XP
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-300">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>Faculty Verified · Team Lead</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Instant Record</span>
              <Link
                href="/activity-logger"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
              >
                <span>Launch Activity Logger</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Hall of Fame / Recent Achievement (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#0E131F]/90 p-7 shadow-xl lg:col-span-4 md:p-8"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B]">
                <Trophy size={18} />
              </div>

              <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                Hall of Fame Spotlight
              </span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                1st Prize — Smart India Hackathon
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Team TechSait secured national 1st place in the Ministry of Education SIH 2025 Grand Finale for their AI Disaster Management System.
              </p>
            </div>

            <Link
              href="/achievements"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
            >
              <span>Explore All Achievements</span>
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Card 4: Placements & Recruiters (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#0E131F]/90 p-7 shadow-xl lg:col-span-4 md:p-8"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Award size={18} />
              </div>

              <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Career Excellence
              </span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                ₹32 LPA Highest Package
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Over 96% of eligible candidates placed across TCS, UST, SOTI, CISCO, IBM, QBurst, and leading product companies.
              </p>
            </div>

            <Link
              href="/placements"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
            >
              <span>View Placement Statistics</span>
              <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* Card 5: Academic Resource Vault (Span 4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#0E131F]/90 p-7 shadow-xl lg:col-span-4 md:p-8"
          >
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-[#F59E0B]">
                <FileDown size={18} />
              </div>

              <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Student Resources
              </span>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
                Academic & Lab Vault
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Instant access to B.Tech IT Scheme 2026 syllabus, academic calendars, previous question archives, and lab manuals.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
            >
              <span>Access Academic Hub</span>
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
