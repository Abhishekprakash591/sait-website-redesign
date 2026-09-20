"use client";

import { useMemo, useState } from "react";

import AchievementFilters, {
  type AchievementFilterKey,
  type AchievementFilterOption,
} from "@/components/achievements/AchievementFilters";
import AchievementImpact from "@/components/achievements/AchievementImpact";
import AchievementList from "@/components/achievements/AchievementList";
import FeaturedAchievement from "@/components/achievements/FeaturedAchievement";
import HallOfFameClosing from "@/components/achievements/HallOfFameClosing";
import HallOfFameHero from "@/components/achievements/HallOfFameHero";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { achievements, type AchievementCategory } from "@/data/achievements";

const filterOptions: AchievementFilterOption[] = [
  { key: "all", label: "All", value: "all" },
  { key: "hackathons", label: "Hackathons", value: "Hackathons" },
  { key: "technical", label: "Technical", value: "Technical Competitions" },
  { key: "academic", label: "Academic", value: "Academics" },
  { key: "publications", label: "Publications", value: "Research" },
  { key: "projects", label: "Projects", value: "Projects" },
];

const valuesByFilter: Record<AchievementFilterKey, AchievementCategory | "all"> = {
  all: "all",
  hackathons: "Hackathons",
  technical: "Technical Competitions",
  academic: "Academics",
  publications: "Research",
  projects: "Projects",
};

export default function AchievementsPage() {
  const [selectedFilter, setSelectedFilter] = useState<AchievementFilterKey>("all");

  const filteredAchievements = useMemo(() => {
    const selectedValue = valuesByFilter[selectedFilter];

    return achievements.filter((achievement) => {
      return selectedValue === "all" || achievement.category === selectedValue;
    });
  }, [selectedFilter]);

  const featuredAchievement =
    filteredAchievements.find((achievement) => achievement.featured) ?? filteredAchievements[0] ?? achievements[0];

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />
      <HallOfFameHero />
      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-[1440px]">
          <AchievementFilters
            filters={filterOptions}
            selected={selectedFilter}
            onSelect={setSelectedFilter}
          />
        </div>
      </section>

      <FeaturedAchievement achievement={featuredAchievement} />
      <AchievementList items={filteredAchievements} />
      <AchievementImpact items={achievements} />
      <HallOfFameClosing />
      <Footer />
    </main>
  );
}
