"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  BellRing,
  Calendar,
  ChevronRight,
  Star,
  Trophy,
  Zap,
} from "lucide-react";

const feedItems = [
  {
    id: "f1",
    type: "achievement",
    icon: Trophy,
    iconBg: "bg-[#F59E0B]",
    iconColor: "text-black",
    title: "Smart India Hackathon",
    detail: "Team TechSait secured 1st Prize at SIH National Finals — ₹1 Lakh prize.",
    time: "2 days ago",
    badge: "National Winner",
    badgeBg: "bg-[#F59E0B]/20 text-[#F59E0B]",
  },
  {
    id: "f2",
    type: "event",
    icon: Calendar,
    iconBg: "bg-white/10",
    iconColor: "text-[#F59E0B]",
    title: "HackSprint 2026 Kickoff",
    detail: "Registration closes Sept 24 — secure your spot in India's fastest 24-hour hackathon.",
    time: "3 days ago",
    badge: "Open",
    badgeBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: "f3",
    type: "xp",
    icon: Zap,
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    title: "+75 XP Awarded",
    detail: "Workshop: Full-Stack Web Development with Next.js — verified by faculty.",
    time: "5 days ago",
    badge: "+75 XP",
    badgeBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: "f4",
    type: "announcement",
    icon: Bell,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Mid-Semester Exams",
    detail: "S5 & S7 mid-semester schedule released — check the announcements tab.",
    time: "1 week ago",
    badge: "Urgent",
    badgeBg: "bg-red-500/20 text-red-400",
  },
  {
    id: "f5",
    type: "badge",
    icon: Star,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Badge Unlocked: Tech Pioneer",
    detail: "Attended 5+ technical workshops — you're in the top 15% of active members.",
    time: "2 weeks ago",
    badge: "Unlocked",
    badgeBg: "bg-purple-500/20 text-purple-300",
  },
];

export default function DashboardFeed() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? feedItems : feedItems.slice(0, 3);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white">SAIT Activity Feed</h3>
          <p className="text-[10px] text-white/50 mt-0.5">Live updates from your community</p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#080C14] text-[#F59E0B] border border-white/10">
          <BellRing size={16} />
        </div>
      </div>

      <div className="space-y-2">
        <AnimatePresence>
          {visibleItems.map((item, index) => {
            const Icon = item.icon;
            const isExpanded = expanded === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
              >
                <button
                  type="button"
                  onClick={() => setExpanded(isExpanded ? null : item.id)}
                  className="w-full text-left rounded-[1.4rem] border border-white/10 bg-[#0E131F] p-3.5 transition-all hover:border-white/20 hover:bg-[#131929]"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${item.iconBg} ${item.iconColor}`}
                    >
                      <Icon size={14} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-bold text-white truncate">{item.title}</p>
                        <span
                          className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${item.badgeBg}`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-1.5 text-xs leading-relaxed text-white/70 overflow-hidden"
                          >
                            {item.detail}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-[10px] text-white/40">{item.time}</span>
                        <ChevronRight
                          size={10}
                          className={`text-white/40 transition-transform ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {feedItems.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-3 w-full rounded-full border border-white/10 py-2.5 text-xs font-bold text-white/70 transition-all hover:border-white/20 hover:text-white hover:bg-white/5"
        >
          {showAll ? "Show Less" : `Show ${feedItems.length - 3} More Updates`}
        </button>
      )}
    </section>
  );
}
