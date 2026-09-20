"use client";

import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import JourneyClosing from "@/components/journey/JourneyClosing";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyPath from "@/components/journey/JourneyPath";
import JourneyProgress from "@/components/journey/JourneyProgress";
import NextStep from "@/components/journey/NextStep";
import { completedStageIds, currentStageId, journeyStages, type JourneyStageKey } from "@/data/journey";

export default function JourneyPage() {
  const [selectedStageId, setSelectedStageId] = useState<JourneyStageKey>(currentStageId);

  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <JourneyHero />
      <JourneyProgress completedCount={completedStageIds.length} totalCount={journeyStages.length} />
      <JourneyPath
        stages={journeyStages}
        completedIds={completedStageIds}
        currentStageId={currentStageId}
        selectedStageId={selectedStageId}
        onSelectStage={setSelectedStageId}
      />
      <NextStep />
      <JourneyClosing />
      <Footer />
    </main>
  );
}
