"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

import DotField from "@/components/shared/DotField";
import HeroFlipCard from "@/components/home/HeroFlipCard";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080C14] px-6 py-12 md:px-10 md:py-16">
      <DotField />

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(14,19,31,0.8),transparent_50%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.45, ease: "easeOut" }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            Division of Information Technology
            <span className="mx-2 text-white/20">/</span>
            School of Engineering
            <span className="mx-2 text-white/20">/</span>
            CUSAT
          </p>

          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
            Student Community
          </div>
        </motion.div>

        <div className="grid items-end gap-10 lg:grid-cols-[1.22fr_0.78fr]">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, delay: shouldReduceMotion ? 0 : 0.06, ease: "easeOut" }}
          >
            {/* Tech Discipline Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {["AI & Systems", "Web3 & Cloud", "Open Source", "Competitive Coding"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              SAIT · DIVISION OF IT · SOE CUSAT
            </p>
            <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              The premier student association fostering engineering excellence, research, hackathons, and lifelong alumni mentorship.
            </p>

            <h1 className="text-[clamp(4rem,10vw,10rem)] font-extrabold leading-[0.82] tracking-[-0.075em] text-white">
              LEARN.
              <br />
              BUILD.
              <br />
              <span className="text-slate-400">CONNECT</span>
              <span className="text-[#F59E0B]">.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.12, ease: "easeOut" }}
            className="w-full flex justify-center lg:justify-end"
          >
            <HeroFlipCard />
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.18, ease: "easeOut" }}
          className="mt-10 flex flex-wrap gap-3 sm:gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3.5 text-sm font-semibold text-black shadow-lg shadow-[#F59E0B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
          >
            <span>Explore SAIT</span>
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <span>Upcoming Events</span>
          </Link>

          <Link
            href="/activity-logger"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-6 py-3.5 text-sm font-semibold text-[#F59E0B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F59E0B] hover:text-black"
          >
            <span>Student Activity Logger</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-[1440px] border-t border-white/10 pt-7 md:grid md:grid-cols-3">
        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="text-sm font-semibold text-white">01</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white">Student-led</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Community</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-4 md:py-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <span className="text-sm font-semibold text-white">02</span>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-white">Active</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Experiences</p>
          </div>
        </div>

        <Link
          href="#about"
          className="group mt-2 flex items-center justify-between gap-4 py-4 text-left md:mt-0 md:justify-end md:py-0"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 group-hover:text-white transition-colors">
            Discover SAIT
          </span>

          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 group-hover:bg-[#F59E0B] group-hover:text-black">
            <ArrowDown size={16} />
          </span>
        </Link>
      </div>
    </section>
  );
}
