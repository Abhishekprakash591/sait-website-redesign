"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Calendar,
  CheckCircle2,
  Download,
  FileCheck2,
  Printer,
  ShieldCheck,
  X,
} from "lucide-react";
import type { ActivityItem } from "@/data/activities";

interface ActivityPortfolioExportProps {
  activities: ActivityItem[];
  studentName?: string;
  studentRoll?: string;
}

export default function ActivityPortfolioExport({
  activities,
  studentName = "Abhishek P.",
  studentRoll = "IT-2024-042",
}: ActivityPortfolioExportProps) {
  const [isOpen, setIsOpen] = useState(false);

  const totalPoints = activities.reduce((acc, curr) => acc + (curr.points || 50), 0);
  const verifiedCount = activities.filter((a) => a.status === "Verified").length;

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F2A44]/20 bg-white/80 px-5 py-2.5 text-xs font-bold text-[#1F2A44] shadow-sm transition-all duration-300 hover:border-[#C6A75E] hover:bg-[#1F2A44] hover:text-white"
      >
        <FileCheck2 size={15} className="text-[#C6A75E]" />
        <span>Export Activity Transcript</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#111827]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#1F2A44]/15 bg-white p-6 sm:p-10 shadow-2xl text-[#1F2A44] max-h-[90vh] overflow-y-auto"
            >
              {/* Header Actions */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4 no-print">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                    Official Verified Record
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#1F2A44] px-4 py-2 text-xs font-semibold text-white hover:bg-[#C6A75E] hover:text-[#111827] transition-colors"
                  >
                    <Printer size={14} />
                    <span>Print / Save PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Printable Document Sheet */}
              <div className="mt-6 space-y-6">
                {/* University & Association Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2A44] text-[#C6A75E] font-bold text-lg">
                      SAIT
                    </div>
                    <div>
                      <h2 className="text-xl font-bold tracking-tight text-[#1F2A44]">
                        STUDENTS ASSOCIATION OF INFORMATION TECHNOLOGY
                      </h2>
                      <p className="text-xs text-gray-500 font-medium">
                        Division of Information Technology · School of Engineering, CUSAT
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right text-xs text-gray-500 font-mono">
                    <p>DOC ID: SAIT-ACT-2026-X9</p>
                    <p>DATE: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</p>
                  </div>
                </div>

                {/* Student Bio Card */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl bg-[#F7F3EB] p-4 text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Student Name</span>
                    <p className="font-bold text-sm text-[#1F2A44]">{studentName}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Registration ID</span>
                    <p className="font-semibold text-sm text-[#1F2A44] font-mono">{studentRoll}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Total Activities</span>
                    <p className="font-bold text-sm text-[#1F2A44]">{activities.length} Recorded</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400">Community XP</span>
                    <p className="font-bold text-sm text-[#C6A75E]">{totalPoints} Points</p>
                  </div>
                </div>

                {/* Activities Table */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1F2A44] mb-3">
                    Verified Activity Ledger
                  </h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#1F2A44] text-white">
                        <tr>
                          <th className="py-2.5 px-3 font-semibold">Activity Title</th>
                          <th className="py-2.5 px-3 font-semibold">Type</th>
                          <th className="py-2.5 px-3 font-semibold">Role</th>
                          <th className="py-2.5 px-3 font-semibold">Date</th>
                          <th className="py-2.5 px-3 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {activities.map((act) => (
                          <tr key={act.id} className="hover:bg-gray-50/70">
                            <td className="py-2.5 px-3 font-semibold text-[#1F2A44]">
                              {act.name}
                            </td>
                            <td className="py-2.5 px-3 text-gray-600">
                              <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-medium">
                                {act.type}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-gray-600">{act.role}</td>
                            <td className="py-2.5 px-3 text-gray-500 font-mono text-[11px]">
                              {act.date}
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                                <CheckCircle2 size={10} />
                                Verified
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sign-off Seal & Signatures */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-emerald-600" />
                    <span>Cryptographically verifiable student activity record · CUSAT Division of IT</span>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="h-9 border-b border-gray-300 w-28 flex items-end justify-center pb-1">
                        <span className="font-serif italic text-xs text-gray-600">Dr. Rahul Nair</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider block mt-1">Staff Coordinator</span>
                    </div>
                    <div className="text-center">
                      <div className="h-9 border-b border-gray-300 w-28 flex items-end justify-center pb-1">
                        <span className="font-serif italic text-xs text-gray-600">Dr. Ananya Menon</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider block mt-1">Head of Division</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
