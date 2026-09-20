"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import AnnouncementCard from "@/components/announcements/AnnouncementCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  announcements,
  announcementCategories,
  type AnnouncementCategory,
} from "@/data/announcements";

export default function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | AnnouncementCategory>("All");
  const [announcementState, setAnnouncementState] = useState(announcements);

  const featuredAnnouncement = useMemo(() => {
    return announcementState[0] ?? announcements[0];
  }, [announcementState]);

  const filteredAnnouncements = useMemo(() => {
    return announcementState.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [announcementState, search, selectedCategory]);

  const handleToggleRead = (id: string) => {
    setAnnouncementState((current) =>
      current.map((item) =>
        item.id === id ? { ...item, read: !item.read } : item
      )
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
  };

  return (
    <main className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <PageWrapper className="border-b border-white/10 bg-[#080C14]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                09 — Announcements
              </p>

              <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                Stay in the loop.
              </h1>
            </div>

            <div className="md:justify-self-end">
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                Keep students informed about events, registrations, deadlines,
                opportunities and the latest department and community updates.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>

      <section className="border-b border-white/10 bg-[#0E131F] px-6 py-20 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
                Featured announcement
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl text-white">
                {featuredAnnouncement.title}
              </h2>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/60">
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.category}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.date}
                </span>
                <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5">
                  {featuredAnnouncement.priority}
                </span>
              </div>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
                {featuredAnnouncement.description}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#F59E0B]">
                Status
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#F59E0B]" aria-hidden="true" />
                {featuredAnnouncement.priority} priority
              </div>

              {featuredAnnouncement.deadline ? (
                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Deadline
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">
                    {featuredAnnouncement.deadline}
                  </p>
                </div>
              ) : null}

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Read more
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <SectionHeading
            eyebrow="Announcements feed"
            title="The latest updates from the SAIT community."
          />

          <div className="mt-8 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-4 md:grid-cols-[1.5fr_1fr]">
            <label className="flex items-center gap-3 rounded-full border border-white/10 bg-[#0E131F] px-4 py-3 text-sm text-white/70 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/20">
              <Search size={16} className="text-white/40" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search announcements"
                aria-label="Search announcements"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </label>

            <label className="rounded-full border border-white/10 bg-[#0E131F] px-4 py-3 text-sm text-white/70 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/20">
              <span className="sr-only">Filter announcements</span>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value as "All" | AnnouncementCategory)}
                className="w-full bg-transparent text-sm text-white focus:outline-none"
                aria-label="Filter announcements by category"
              >
                {announcementCategories.map((category) => (
                  <option key={category} value={category} className="bg-[#0E131F] text-white">
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredAnnouncements.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-dashed border-white/15 bg-white/5 p-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#F59E0B]">
                Nothing found
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                No announcements match the current filters.
              </h3>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredAnnouncements.map((item) => (
                <AnnouncementCard key={item.id} item={item} onToggleRead={handleToggleRead} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0E131F] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F59E0B]">
              Keep informed
            </p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Don&apos;t miss what&apos;s next.
            </h2>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D97706]"
              >
                Explore Events
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/activity-logger"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
              >
                Track My SAIT Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
