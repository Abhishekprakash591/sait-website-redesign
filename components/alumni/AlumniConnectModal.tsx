"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, GraduationCap, Send, X } from "lucide-react";
import type { AlumniRecord } from "@/data/alumni";

interface AlumniConnectModalProps {
  alumni: AlumniRecord | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AlumniConnectModal({
  alumni,
  isOpen,
  onClose,
}: AlumniConnectModalProps) {
  const [studentName, setStudentName] = useState("");
  const [topic, setTopic] = useState("Career Guidance");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (!alumni || !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    setStudentName("");
    setMessage("");
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
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#0E131F] p-7 shadow-2xl text-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[#F59E0B]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Alumni Mentorship Request
                </span>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {!sent ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-bold uppercase text-[#F59E0B]">Mentoring Candidate</p>
                  <p className="font-bold text-base text-white mt-0.5">{alumni.name}</p>
                  <p className="text-xs text-white/70">{alumni.role} · {alumni.company}</p>
                  <span className="inline-block mt-2 rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/70">
                    {alumni.batch} · {alumni.location}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Your Name & Semester
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Rohith M. (S5 IT)"
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Mentorship Topic
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-2xl border border-white/15 bg-[#080C14] px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#F59E0B]"
                  >
                    <option>Career Guidance & FAANG Interview Prep</option>
                    <option>Higher Studies & MS / Research Advice</option>
                    <option>Capstone Project Architecture Review</option>
                    <option>Startup & Product Incubation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Message / Questions
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly introduce yourself and what you would like advice on..."
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="rounded-full px-4 py-2 text-xs font-semibold text-white/60 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#D97706] transition-all shadow-md"
                  >
                    <Send size={13} />
                    <span>Send Request</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 text-center space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="text-lg font-bold text-white">Request Sent to {alumni.name}!</h3>
                <p className="text-xs text-white/70">
                  Your mentorship request will be routed through the SAIT Alumni Cell. You will receive an email invitation when accepted.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full rounded-full bg-[#F59E0B] py-2.5 text-xs font-bold text-black hover:bg-[#D97706] transition-all"
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
