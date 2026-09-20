"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin, UserCheck } from "lucide-react";

import type { EventItem } from "@/data/events";

type EventCardProps = {
  event: EventItem;
  expanded: boolean;
  onToggle: (id: string) => void;
  onRegister?: (event: EventItem) => void;
};

function getDateParts(date: string) {
  const match = date.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);

  if (!match) {
    return { month: "Event", day: date.slice(0, 2) || "" };
  }

  return {
    month: match[1].slice(0, 3).toUpperCase(),
    day: match[2],
  };
}

export default function EventCard({ event, expanded, onToggle, onRegister }: EventCardProps) {
  const { month, day } = getDateParts(event.date);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ x: 4 }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0E131F] p-4 text-white transition-all duration-300 hover:border-[#F59E0B]/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] md:p-5"
    >
      <div className="absolute inset-y-0 left-0 w-[2px] bg-[#F59E0B]/0 transition-colors duration-300 group-hover:bg-[#F59E0B]" />

      <div className="grid gap-5 md:grid-cols-[128px_1fr_auto] md:items-start">
        <div className="flex items-center gap-3 md:flex-col md:items-start">
          <div className="min-w-[82px] rounded-[1.1rem] border border-white/10 bg-white/5 p-3 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{month}</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-0.06em] text-white">{day}</p>
          </div>

          {event.featured ? (
            <span className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
              Featured
            </span>
          ) : null}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
            <span>{event.category}</span>
            <span className="h-1 w-1 rounded-full bg-[#F59E0B]" />
            <span>{event.time}</span>
            <span className="h-1 w-1 rounded-full bg-[#F59E0B]" />
            <span>{event.venue}</span>
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white md:text-[2rem]">
            {event.name}
          </h3>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            {event.description}
          </p>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mt-4 overflow-hidden"
              >
                <div className="rounded-[1.15rem] border border-white/10 bg-white/5 p-4">
                  <div className="grid gap-3 text-xs text-white/60 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={13} className="text-[#F59E0B]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-white/40">Date</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock3 size={13} className="text-[#F59E0B]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-white/40">Time</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <MapPin size={13} className="text-[#F59E0B]" />
                      <span className="font-semibold uppercase tracking-[0.18em] text-white/40">Venue</span>
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3 md:flex-col md:items-end md:pt-1">
          {onRegister ? (
            <button
              type="button"
              onClick={() => onRegister(event)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
            >
              {event.registrationLabel || "Register"}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => onToggle(event.id)}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            {expanded ? "Less" : "Details"}
          </button>

          {!event.isPast ? (
            <span className="inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
              <UserCheck size={12} className="text-[#F59E0B]" />
              Open
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
