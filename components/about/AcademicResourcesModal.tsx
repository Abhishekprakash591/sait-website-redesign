"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Download,
  ExternalLink,
  Laptop,
  Library,
  X,
  CheckCircle2,
} from "lucide-react";

export interface AcademicResource {
  id: string;
  title: string;
  category: "Curriculum" | "Schedule" | "Laboratory" | "Library";
  description: string;
  fileSize?: string;
  lastUpdated: string;
  linkText: string;
  highlights: string[];
}

const RESOURCES_DATA: AcademicResource[] = [
  {
    id: "syllabus-2026",
    title: "B.Tech Information Technology — Scheme & Syllabus (2026)",
    category: "Curriculum",
    description: "Complete 8-semester course structure, elective distributions, course outcomes (COs), and AICTE credit alignment.",
    fileSize: "2.4 MB PDF",
    lastUpdated: "July 2026",
    linkText: "Download Full Syllabus",
    highlights: [
      "Core modules: Distributed Systems, Machine Learning, Cloud Architecture",
      "Electives: Blockchain, Quantum Computing, IoT & Embedded Systems",
      "Comprehensive lab evaluation criteria and project guidelines",
    ],
  },
  {
    id: "calendar-2026",
    title: "CUSAT SOE Academic Calendar 2026–2027",
    category: "Schedule",
    description: "Official schedule for semester commencement, internal assessment milestones, tech fests, and end-semester university examinations.",
    fileSize: "850 KB PDF",
    lastUpdated: "August 2026",
    linkText: "Download Calendar",
    highlights: [
      "Mid-semester evaluations: September 2026",
      "SAIT TechFest & HackSprint: October 12–13, 2026",
      "End-semester theory & lab examinations: November–December 2026",
    ],
  },
  {
    id: "lab-manuals",
    title: "IT Department Laboratory Manuals & Code Guidelines",
    category: "Laboratory",
    description: "Standard operating procedures, git hygiene rules, and environment setup guides for Systems, AI/ML, and Networking labs.",
    fileSize: "3.8 MB ZIP",
    lastUpdated: "June 2026",
    linkText: "Access Lab Portal",
    highlights: [
      "Linux environment configuration & CUSAT Server SSH credentials",
      "Python / PyTorch GPU workstation reservation guidelines",
      "Plagiarism policies and code review checklists",
    ],
  },
  {
    id: "digital-library",
    title: "CUSAT Digital Library & Research Paper Repository",
    category: "Library",
    description: "Access to IEEE Xplore, ACM Digital Library, SpringerLink, and past B.Tech IT capstone thesis repositories.",
    fileSize: "Web Portal",
    lastUpdated: "Continuously Updated",
    linkText: "Open Digital Library",
    highlights: [
      "Institutional remote proxy credentials for CUSAT students",
      "Over 15,000+ peer-reviewed journals and conference papers",
      "Past 5 years of top graded IT major project theses",
    ],
  },
];

export default function AcademicResourcesVault() {
  const [activeResource, setActiveResource] = useState<AcademicResource | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {RESOURCES_DATA.map((res) => (
          <div
            key={res.id}
            onClick={() => setActiveResource(res)}
            className="group cursor-pointer rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F59E0B]/50 hover:bg-[#131929] hover:shadow-xl"
          >
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#080C14] text-[#F59E0B] border border-white/10 transition-colors group-hover:bg-[#F59E0B] group-hover:text-black">
                {res.category === "Curriculum" && <BookOpen size={20} />}
                {res.category === "Schedule" && <Calendar size={20} />}
                {res.category === "Laboratory" && <Laptop size={20} />}
                {res.category === "Library" && <Library size={20} />}
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/70">
                {res.category}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#F59E0B] transition-colors">
              {res.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-white/60 line-clamp-3">
              {res.description}
            </p>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-semibold text-white">
              <span className="text-[11px] text-white/40 font-mono">{res.fileSize}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white/80 group-hover:text-[#F59E0B] transition-colors">
                <span>View Details</span>
                <ExternalLink size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveResource(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#0E131F] p-7 md:p-9 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                  {activeResource.category} Resource
                </span>
                <button
                  type="button"
                  onClick={() => setActiveResource(null)}
                  className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="mt-5">
                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {activeResource.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {activeResource.description}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B]">
                    Document Highlights & Key Information
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-white/80">
                    {activeResource.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-white/50 font-mono">
                  <span>Updated: {activeResource.lastUpdated}</span>
                  <span>Format: {activeResource.fileSize}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setActiveResource(null)}
                  className="rounded-full px-5 py-2.5 text-xs font-semibold text-white/70 hover:bg-white/10 hover:text-white"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-xs font-bold text-black shadow-md transition-all hover:bg-[#D97706]"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle2 size={15} className="text-black" />
                      <span>Downloaded Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Download size={15} />
                      <span>{activeResource.linkText}</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
