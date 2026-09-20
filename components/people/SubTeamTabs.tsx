"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MemberCard from "@/components/people/MemberCard";
import { subTeamLabels, subTeams, type SubTeamKey } from "@/data/subTeams";

export default function SubTeamTabs() {
  const [activeTab, setActiveTab] = useState<SubTeamKey>("Tech");

  return (
    <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/40">
            Sub-teams &amp; Working Groups
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            The teams behind the work.
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-3" role="tablist" aria-label="SAIT sub-team sections">
          {subTeamLabels.map((team) => {
            const isActive = activeTab === team;

            return (
              <button
                key={team}
                type="button"
                role="tab"
                id={`tab-${team}`}
                aria-selected={isActive}
                aria-controls={`panel-${team}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(team)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-[#F59E0B] bg-[#F59E0B] text-black shadow-md"
                    : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                }`}
              >
                {team} Team ({subTeams[team].length})
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {subTeams[activeTab].map((member) => (
                <MemberCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  initials={member.initials}
                  bio={member.bio}
                  photo={member.photo}
                  socialUrl={member.socialUrl}
                  githubUrl={member.githubUrl}
                  linkedinUrl={member.linkedinUrl}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
