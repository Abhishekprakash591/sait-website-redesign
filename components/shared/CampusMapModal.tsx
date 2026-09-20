"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Navigation,
  Train,
  X,
  Building,
} from "lucide-react";

interface CampusMapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FLOOR_DATA = [
  {
    floor: "Ground Floor",
    rooms: [
      "Department Seminar Hall (180 capacity)",
      "IoT, Hardware & Embedded Systems Lab",
      "Student Common Lounge & Notice Boards",
    ],
  },
  {
    floor: "First Floor",
    rooms: [
      "Advanced Systems & Software Engineering Lab",
      "Network Protocols & Cyber Lab",
      "Department Server Room & High-Performance Rack",
    ],
  },
  {
    floor: "Second Floor",
    rooms: [
      "Head of Division Suite (Room 204)",
      "Faculty & Staff Coordinator Offices",
      "Machine Learning & Data Intelligence Lab",
    ],
  },
  {
    floor: "Third Floor",
    rooms: [
      "SAIT Innovation Hub & Project Studio",
      "Capstone Major Project Labs",
      "Reading Room & Digital Library Access Terminal",
    ],
  },
];

export default function CampusMapModal({ isOpen, onClose }: CampusMapModalProps) {
  const [activeFloor, setActiveFloor] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#0E131F] p-6 sm:p-8 shadow-2xl text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#080C14] text-[#F59E0B] border border-white/10">
                  <MapPin size={16} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    IT Department & SOE Campus Guide
                  </h3>
                  <p className="text-[10px] text-white/50 uppercase tracking-wider font-mono">
                    School of Engineering · CUSAT Kochi
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Interactive Map Card Preview */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-[#131929] p-5 text-white shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="rounded-full bg-[#F59E0B]/20 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#F59E0B]">
                    Coordinates & Address
                  </span>
                  <p className="mt-2 text-base font-bold text-white">
                    Division of Information Technology
                  </p>
                  <p className="text-xs text-white/70">
                    School of Engineering, Cochin University of Science and Technology
                  </p>
                  <p className="text-xs text-white/50">
                    South Kalamassery, Kochi, Kerala 682022
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=School+of+Engineering+CUSAT+Kochi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-bold text-black hover:bg-[#D97706] transition-colors self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <Navigation size={13} />
                  <span>Open Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-4 text-xs text-white/70 font-mono">
                <div className="flex items-center gap-1.5">
                  <Train size={13} className="text-[#F59E0B]" />
                  <span>Kalamassery Metro: 1.2 km</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building size={13} className="text-[#F59E0B]" />
                  <span>SOE Main Gate: 150m</span>
                </div>
              </div>
            </div>

            {/* Interactive Department Floor Directory */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Department Floor Directory & Facilities
                </span>
                <span className="text-[10px] text-white/50 font-mono">IT Block</span>
              </div>

              {/* Floor Selector Pills */}
              <div className="grid grid-cols-4 gap-2">
                {FLOOR_DATA.map((f, index) => (
                  <button
                    key={f.floor}
                    type="button"
                    onClick={() => setActiveFloor(index)}
                    className={`rounded-xl py-2 px-1 text-center text-xs font-bold transition-all ${
                      activeFloor === index
                        ? "bg-[#F59E0B] text-black shadow-sm"
                        : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {f.floor.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Active Floor Details */}
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold text-[#F59E0B] mb-2">
                  {FLOOR_DATA[activeFloor].floor} Highlights:
                </p>
                <ul className="space-y-1.5 text-xs text-white/80">
                  {FLOOR_DATA[activeFloor].rooms.map((room, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
                      <span>{room}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Close */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-[#F59E0B] px-5 py-2 text-xs font-bold text-black hover:bg-[#D97706] transition-colors"
              >
                Close Guide
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
