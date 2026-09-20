"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, BookOpen, GraduationCap } from "lucide-react";

interface FacultyMember {
  role: string;
  name: string;
  qualification: string;
  specialization: string;
  email: string;
  office: string;
  isHod?: boolean;
}

const directory: FacultyMember[] = [
  {
    role: "Head of Division (HoD)",
    name: "Dr. Ananya Menon",
    qualification: "Ph.D., IIT Madras · M.Tech, CUSAT",
    specialization: "Distributed Systems & Machine Intelligence",
    email: "ananya.menon@cusat.ac.in",
    office: "IT Block · Suite 204",
    isHod: true,
  },
  {
    role: "Staff Coordinator (SAIT)",
    name: "Dr. Rahul Nair",
    qualification: "Ph.D., NIT Calicut · M.Tech, CUSAT",
    specialization: "Cybersecurity, IoT & Network Protocols",
    email: "rahul.nair@cusat.ac.in",
    office: "IT Block · Room 208",
  },
  {
    role: "Associate Professor & Lab In-charge",
    name: "Dr. Meera Thomas",
    qualification: "Ph.D., IISc Bangalore · B.Tech, CUSAT",
    specialization: "Cloud Computing & Data Engineering",
    email: "meera.thomas@cusat.ac.in",
    office: "Advanced Systems Lab · Room 212",
  },
  {
    role: "Assistant Professor & Innovation Lead",
    name: "Prof. Nikhil Varghese",
    qualification: "M.Tech, IIT Bombay · B.Tech, SOE CUSAT",
    specialization: "Full-Stack Web Systems & Open Source",
    email: "nikhil.varghese@cusat.ac.in",
    office: "Student Innovation Centre · Room 215",
  },
];

export default function FacultyDirectory() {
  return (
    <section id="faculty" className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              <GraduationCap size={13} />
              <span>Academic Leadership</span>
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Faculty &amp; Administration.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Distinguished professors, research mentors, and staff coordinators guiding the Division of Information Technology and mentoring SAIT student initiatives.
            </p>
          </div>
          <span className="text-xs font-mono text-white/40">School of Engineering, CUSAT</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {directory.map((person, index) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`flex flex-col justify-between rounded-[2.2rem] border p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#F59E0B]/50 ${
                person.isHod
                  ? "border-[#F59E0B]/30 bg-gradient-to-b from-white/8 to-white/3 shadow-[0_10px_35px_rgba(245,158,11,0.08)]"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-[#F59E0B]">
                    {person.name.split(" ")[1]?.charAt(0) || "F"}
                  </div>
                  {person.isHod && (
                    <span className="rounded-full bg-[#F59E0B] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black">
                      HoD
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                    {person.role}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs text-white/50 font-mono">
                    {person.qualification}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex items-start gap-2 text-xs text-white/70">
                    <BookOpen size={14} className="text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{person.specialization}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 space-y-2 text-xs text-white/55">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#F59E0B] shrink-0" />
                  <span className="text-[11px]">{person.office}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-[#F59E0B] shrink-0" />
                  <a
                    href={`mailto:${person.email}`}
                    className="text-[11px] hover:text-[#F59E0B] transition-colors truncate underline underline-offset-2"
                  >
                    {person.email}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
