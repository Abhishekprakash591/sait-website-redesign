"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileCheck2,
  Filter,
  PlusCircle,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import ActivityForm from "@/components/activity-logger/ActivityForm";
import ActivityHistory from "@/components/activity-logger/ActivityHistory";
import DashboardFeed from "@/components/activity-logger/DashboardFeed";
import Leaderboard from "@/components/activity-logger/Leaderboard";
import ActivityPortfolioExport from "@/components/activity-logger/ActivityPortfolioExport";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { demoActivities, demoBadges, type ActivityItem, type ActivityType } from "@/data/activities";

const initialFormState = {
  name: "",
  type: "Workshop" as ActivityType,
  date: "",
  role: "",
  description: "",
  proof: "",
};

export default function ActivityLoggerPage() {
  const [activities, setActivities] = useState<ActivityItem[]>(demoActivities);
  const [activeTab, setActiveTab] = useState<"desk" | "feed">("desk");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [successMessage, setSuccessMessage] = useState("");
  const [formState, setFormState] = useState(initialFormState);

  // Load persisted activities from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sait_student_activities");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setActivities(parsed);
        }
      }
    } catch {
      // fallback
    }
  }, []);

  // Save to localStorage whenever activities change
  const updateActivities = (newActivities: ActivityItem[]) => {
    setActivities(newActivities);
    try {
      localStorage.setItem("sait_student_activities", JSON.stringify(newActivities));
    } catch {
      // fallback
    }
  };

  const totalPoints = activities.reduce((acc, curr) => acc + (curr.points || 50), 0);
  const verifiedCount = activities.filter((a) => a.status === "Verified").length;

  const summaryCards = [
    { label: "Activities Recorded", value: `${activities.length}`, sub: "Verified & Logged" },
    { label: "Community XP", value: `${totalPoints}`, sub: "Points Earned" },
    { label: "Contributor Level", value: totalPoints > 300 ? "Level 3" : "Level 2", sub: "Department Pioneer" },
    { label: "Active Streak", value: "4 Weeks", sub: "Continuous Contributor" },
  ];

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesType = selectedType === "All" || activity.type === selectedType;
      const matchesStatus = selectedStatus === "All" || activity.status === selectedStatus;
      return matchesType && matchesStatus;
    });
  }, [activities, selectedType, selectedStatus]);

  const handleChange = (field: string, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const xpReward =
      formState.type === "Competition"
        ? 100
        : formState.type === "Leadership"
        ? 90
        : formState.type === "Project"
        ? 75
        : 50;

    const nextActivity: ActivityItem = {
      id: `activity-${Date.now()}`,
      name: formState.name,
      type: formState.type,
      date: formState.date || new Date().toISOString().split("T")[0],
      role: formState.role,
      description: formState.description,
      proof: formState.proof || "https://sait.cusat.ac.in/verify/proof",
      status: "Verified",
      points: xpReward,
      badge: formState.type === "Competition" ? "Hackathon Winner" : "Active Builder",
      year: new Date(formState.date || Date.now()).getFullYear().toString(),
      month: new Date(formState.date || Date.now()).toLocaleString("en-US", { month: "long" }),
    };

    const updated = [nextActivity, ...activities];
    updateActivities(updated);
    setFormState(initialFormState);
    setSuccessMessage(`Activity successfully verified! +${xpReward} XP awarded.`);
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  const clearFilters = () => {
    setSelectedType("All");
    setSelectedStatus("All");
  };

  return (
    <main className="min-h-screen bg-[#F7F3EB] text-[#1F2A44]">
      <Navbar />

      <PageWrapper className="border-b border-[#1F2A44]/10 bg-[#F7F3EB]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#1F2A44]/15 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F2A44]/60">
                  Division of Information Technology · SOE CUSAT
                </span>
                <span className="rounded-full bg-[#C6A75E]/20 px-2.5 py-0.5 text-[10px] font-bold text-[#1F2A44]">
                  Interactive UI/UX
                </span>
              </div>

              <h1 className="mt-4 max-w-4xl text-[clamp(2.8rem,5.5vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.06em] text-[#111827]">
                Student Activity Logger.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#1F2A44]/70 md:text-lg">
                Record and track academic, technical, hackathon, and extracurricular achievements. Gain XP, climb the departmental leaderboard, and export your official verified activity transcript.
              </p>
            </div>

            {/* Quick Export Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <ActivityPortfolioExport activities={activities} />
            </div>
          </div>

          {/* View Mode Tabs */}
          <div className="mt-10 flex gap-4 border-b border-[#1F2A44]/10">
            <button
              type="button"
              onClick={() => setActiveTab("desk")}
              className={`flex items-center gap-2 pb-3.5 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === "desk"
                  ? "text-[#1F2A44]"
                  : "text-[#1F2A44]/45 hover:text-[#1F2A44]"
              }`}
            >
              <PlusCircle size={15} className={activeTab === "desk" ? "text-[#C6A75E]" : ""} />
              <span>Student Submission Desk & History</span>
              {activeTab === "desk" && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#C6A75E]" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("feed")}
              className={`flex items-center gap-2 pb-3.5 text-xs font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === "feed"
                  ? "text-[#1F2A44]"
                  : "text-[#1F2A44]/45 hover:text-[#1F2A44]"
              }`}
            >
              <Trophy size={15} className={activeTab === "feed" ? "text-[#C6A75E]" : ""} />
              <span>Community Feed & Leaderboard</span>
              {activeTab === "feed" && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] bg-[#C6A75E]" />
              )}
            </button>
          </div>
        </div>
      </PageWrapper>

      {/* Dynamic Summary Cards */}
      <section className="border-b border-[#1F2A44]/10 bg-[#E8DCC8]/60 px-6 py-12 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {summaryCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[1.8rem] border border-[#1F2A44]/10 bg-white/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1F2A44]/55">
                  {card.label}
                </p>
                <p className="mt-3 text-3xl font-bold tracking-tight text-[#1F2A44]">
                  {card.value}
                </p>
                <p className="mt-1 text-xs text-[#1F2A44]/60 font-medium">
                  {card.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Progress to next milestone */}
          <div className="mt-8 rounded-[2rem] border border-[#1F2A44]/10 bg-[#1F2A44] p-6 text-white md:p-7 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A75E]">
                  Semester Engagement Target
                </p>
                <p className="mt-1 text-sm text-white/80">
                  {verifiedCount} of 15 activities completed for Department Distinction Award
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-[#E8DCC8]">
                {Math.min(Math.round((verifiedCount / 15) * 100), 100)}% Milestone Progress
              </span>
            </div>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#C6A75E] to-[#E8DCC8] transition-all duration-500"
                style={{ width: `${Math.min(Math.round((verifiedCount / 15) * 100), 100)}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tab Content */}
      {activeTab === "desk" ? (
        <>
          <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="grid gap-8 xl:grid-cols-[1.25fr_0.75fr]">
                <ActivityForm
                  formState={formState}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  successMessage={successMessage}
                />

                <div className="space-y-6">
                  <Leaderboard />
                  <DashboardFeed />
                </div>
              </div>
            </div>
          </section>

          {/* Activity History Ledger */}
          <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-[1440px]">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#1F2A44]/55">
                    Activity History & Ledger
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#1F2A44]">
                    Your Submitted & Verified Entries
                  </h2>
                </div>
                <ActivityPortfolioExport activities={activities} />
              </div>

              <ActivityHistory
                activities={filteredActivities}
                selectedType={selectedType}
                selectedStatus={selectedStatus}
                onTypeChange={setSelectedType}
                onStatusChange={setSelectedStatus}
                onClearFilters={clearFilters}
              />
            </div>
          </section>
        </>
      ) : (
        /* Community Feed & Leaderboard Tab */
        <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
              <Leaderboard />
              <div className="space-y-6">
                <DashboardFeed />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Badges & Milestones Section */}
      <section className="border-b border-[#1F2A44]/10 bg-[#F7F3EB] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Milestones & Badges"
            title="Unlock credentials as you grow through SAIT initiatives."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {demoBadges.map((badge) => (
              <div
                key={badge.id}
                className={`rounded-[2.2rem] border p-6 transition-all duration-300 ${
                  badge.unlocked
                    ? "border-[#1F2A44]/10 bg-white/70 shadow-sm hover:border-[#C6A75E]/60 hover:shadow-md"
                    : "border-dashed border-[#1F2A44]/15 bg-[#F7F3EB] opacity-65"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      badge.unlocked ? "bg-[#1F2A44] text-[#C6A75E]" : "bg-[#1F2A44]/10 text-[#1F2A44]/40"
                    }`}
                  >
                    <Award size={18} />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-wider ${
                      badge.unlocked
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {badge.unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold tracking-tight text-[#1F2A44]">
                  {badge.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#1F2A44]/65">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Call to Action */}
      <section className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2.5rem] border border-[#1F2A44]/10 bg-white/70 p-8 md:p-14 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1F2A44]/50">
              Department Ecosystem
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl text-[#1F2A44]">
              Build your technical portfolio throughout your college years.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#1F2A44]/70 leading-relaxed">
              Every workshop attended, hackathon won, and seminar delivered becomes a permanent part of your verified departmental profile.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1F2A44] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C6A75E] hover:text-[#111827]"
              >
                <span>Find Upcoming Events</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="/achievements"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#1F2A44]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#1F2A44] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F2A44]/30"
              >
                <span>Explore Hall of Fame</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
