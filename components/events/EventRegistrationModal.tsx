"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Ticket,
  X,
} from "lucide-react";
import type { EventItem } from "@/data/events";

interface EventRegistrationModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventRegistrationModal({
  event,
  isOpen,
  onClose,
}: EventRegistrationModalProps) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!event) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setRoll("");
    setEmail("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#0E131F] p-7 md:p-8 shadow-2xl text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#080C14] text-[#F59E0B] border border-white/10">
                  <Ticket size={16} />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Event RSVP & Registration
                </span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Event Summary Box */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm">
                  <span className="rounded-full bg-[#F59E0B]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#F59E0B]">
                    {event.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white leading-snug">
                    {event.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-white/70">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar size={13} className="text-[#F59E0B]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <Clock size={13} className="text-[#F59E0B]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 font-medium">
                      <MapPin size={13} className="text-[#F59E0B]" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Athira Krishnan"
                      className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                        CUSAT Roll No.
                      </label>
                      <input
                        type="text"
                        required
                        value={roll}
                        onChange={(e) => setRoll(e.target.value)}
                        placeholder="e.g. IT24B012"
                        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                        Student Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="athira@cusat.ac.in"
                        className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#F59E0B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-3 border-t border-white/10 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-2.5 text-xs font-bold text-black hover:bg-[#D97706] transition-all shadow-md"
                  >
                    <CheckCircle2 size={14} />
                    <span>Confirm Registration</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="mt-6 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Registration Confirmed!</h3>
                  <p className="mt-1 text-xs text-white/70">
                    Your seat for <span className="font-semibold">{event.name}</span> has been successfully reserved.
                  </p>
                </div>

                <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-4 text-left text-xs font-mono text-white/90">
                  <p><span className="text-white/50">PASS ID:</span> SAIT-TKT-2026-X{Math.floor(Math.random() * 9000 + 1000)}</p>
                  <p><span className="text-white/50">NAME:</span> {name || "Student Participant"}</p>
                  <p><span className="text-white/50">ROLL:</span> {roll || "IT24B000"}</p>
                  <p><span className="text-white/50">VENUE:</span> {event.venue}</p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full rounded-full bg-[#F59E0B] py-3 text-xs font-bold text-black hover:bg-[#D97706] transition-all shadow-md"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
