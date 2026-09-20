"use client";

import { motion } from "framer-motion";
import { BookOpen, Hammer, Share2, Users2, MessageSquareText } from "lucide-react";

const pillars = [
  {
    tag: "LEARN",
    title: "Learn",
    text: "Discover new technologies through workshops, seminars, and introductory sessions.",
    icon: BookOpen,
  },
  {
    tag: "CREATE",
    title: "Create",
    text: "Take ideas beyond the classroom through projects and practical activities.",
    icon: Hammer,
  },
  {
    tag: "SHARE",
    title: "Share",
    text: "Contribute ideas, writing, creative work, and technical knowledge.",
    icon: Share2,
  },
  {
    tag: "CONNECT",
    title: "Connect",
    text: "Meet seniors and alumni and learn from experiences beyond graduation.",
    icon: Users2,
  },
  {
    tag: "SPEAK",
    title: "Speak",
    text: "Share feedback, suggestions, and ideas that can shape the student community.",
    icon: MessageSquareText,
  },
];

export default function HistoryTimeline() {
  return (
    <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Core Pillars
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            How we learn, build, and grow together.
          </h2>
          <p className="mt-4 text-base text-white/55 leading-relaxed">
            The foundational ethos of SAIT shaping student initiatives across the Division of Information Technology.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:grid-cols-[180px_1fr] md:items-center md:p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/8 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F59E0B]/10 text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon size={20} className="text-[#F59E0B]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F59E0B]">
                      ● MILESTONE
                    </span>
                    <span className="text-lg font-black tracking-wider text-white">
                      {pillar.tag}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-base leading-relaxed text-white/60">
                    {pillar.text}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
