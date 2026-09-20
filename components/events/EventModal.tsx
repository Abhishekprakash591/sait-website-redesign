"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, Users, CheckCircle2, CalendarPlus } from "lucide-react";

export interface EventData {
  id: string;
  name: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  speaker?: {
    name: string;
    role: string;
    company: string;
  };
  capacity?: {
    filled: number;
    total: number;
  };
  itinerary?: { time: string; activity: string }[];
}

interface EventModalProps {
  event: EventData | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    rollNo: "",
    semester: "S5",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsRegistered(true);
    }, 600);
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent(event.name);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.venue);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-[2rem] border border-white/15 bg-[#0E131F] text-white p-6 sm:p-8 shadow-2xl my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
            {event.category}
          </span>
          <span className="text-xs text-white/40 font-mono">[ SAIT EVENT ]</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white pr-8">
          {event.name}
        </h2>

        {/* Quick Meta */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-[1.3rem] border border-white/10 bg-white/5 p-3 text-xs text-white/80">
          <div className="flex items-center gap-2">
            <Calendar size={15} className="text-[#F59E0B]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-[#F59E0B]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} className="text-[#F59E0B]" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          {event.description}
        </p>

        {/* Speaker / Mentor */}
        {event.speaker ? (
          <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-1">
              Guest Speaker / Mentor
            </p>
            <p className="text-sm font-semibold text-white">
              {event.speaker.name}
            </p>
            <p className="text-xs text-white/60">
              {event.speaker.role} · {event.speaker.company}
            </p>
          </div>
        ) : null}

        {/* Capacity Bar */}
        {event.capacity ? (
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Users size={14} className="text-[#F59E0B]" /> Seat Availability
              </span>
              <span className="font-mono">
                {event.capacity.filled} / {event.capacity.total} Seats Booked
              </span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#F59E0B] rounded-full transition-all duration-500"
                style={{
                  width: `${Math.round(
                    (event.capacity.filled / event.capacity.total) * 100
                  )}%`,
                }}
              />
            </div>
          </div>
        ) : null}

        {/* RSVP Form or Confirmation */}
        <div className="mt-6 border-t border-white/10 pt-5">
          {isRegistered ? (
            <div className="rounded-[1.5rem] bg-[#131929] border border-white/10 text-white p-5 text-center space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-black mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Registration Confirmed!</h3>
              <p className="text-xs text-white/70 max-w-md mx-auto">
                We have reserved your seat for <span className="text-white font-medium">{event.name}</span>. A confirmation pass has been sent to your student email.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleAddToCalendar}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 px-4 py-2 text-xs font-medium text-white transition-all"
                >
                  <CalendarPlus size={14} /> Add to Calendar
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] px-4 py-2 text-xs font-semibold text-black transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-semibold text-white">
                  RSVP / Reserve Your Seat
                </h4>
                <button
                  type="button"
                  onClick={handleAddToCalendar}
                  className="inline-flex items-center gap-1.5 text-xs text-[#F59E0B] font-medium hover:underline"
                >
                  <CalendarPlus size={14} /> Calendar Export
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Student Email (cusat.ac.in)"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  value={formState.rollNo}
                  onChange={(e) => setFormState({ ...formState, rollNo: e.target.value })}
                  placeholder="Roll No. / Reg No."
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:border-[#F59E0B] focus:outline-none"
                />
                <select
                  value={formState.semester}
                  onChange={(e) => setFormState({ ...formState, semester: e.target.value })}
                  className="w-full rounded-full border border-white/15 bg-[#080C14] px-4 py-2.5 text-xs text-white focus:border-[#F59E0B] focus:outline-none"
                >
                  <option value="S1">Semester 1 (IT)</option>
                  <option value="S3">Semester 3 (IT)</option>
                  <option value="S5">Semester 5 (IT)</option>
                  <option value="S7">Semester 7 (IT)</option>
                  <option value="Other">Other Department</option>
                </select>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-white/50">
                  * Free entry for CUSAT IT Students
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] hover:bg-[#D97706] px-6 py-2.5 text-xs font-semibold text-black transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Confirming..." : "Confirm Registration"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
