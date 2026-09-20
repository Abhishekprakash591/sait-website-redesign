"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bell } from "lucide-react";

interface AnnouncementAlert {
  id: string;
  tag: string;
  text: string;
  date: string;
  href: string;
}

const ALERTS: AnnouncementAlert[] = [
  {
    id: "alert-1",
    tag: "LIVE EVENT",
    text: "Registrations open for SAIT HackSprint 2026 — 24-Hour AI & Web Challenge",
    date: "Closing Sept 24",
    href: "/events",
  },
  {
    id: "alert-2",
    tag: "ACHIEVEMENT",
    text: "Team TechSait wins 1st Prize at Smart India Hackathon (SIH) National Finals",
    date: "Sept 2026",
    href: "/achievements",
  },
  {
    id: "alert-3",
    tag: "ACADEMICS",
    text: "B.Tech IT Scheme 2026 syllabus & mid-semester exam dates updated",
    date: "Active",
    href: "/announcements",
  },
];

export default function AnnouncementTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALERTS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = ALERTS[currentIndex];

  return (
    <div className="relative z-20 border-b border-[#1F2A44]/10 bg-[#1F2A44] py-2 px-4 text-[#F7F3EB] sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 overflow-hidden min-w-0">
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#C6A75E] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#111827]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#111827] animate-ping" />
            <span>{current.tag}</span>
          </div>

          <div className="relative h-5 overflow-hidden flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex items-center gap-2 truncate"
              >
                <Link
                  href={current.href}
                  className="truncate text-[#F7F3EB]/90 hover:text-[#C6A75E] transition-colors font-medium text-xs"
                >
                  {current.text}
                </Link>
                <span className="hidden md:inline-block rounded border border-white/15 px-1.5 py-0.2 text-[9px] text-white/60">
                  {current.date}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/announcements"
            className="group flex items-center gap-1.5 text-[11px] font-semibold text-[#C6A75E] hover:text-[#E8DCC8] transition-colors"
          >
            <span>All Updates</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
