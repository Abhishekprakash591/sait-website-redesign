import Link from "next/link";
import { ArrowRight, Bell, BookText, CalendarDays, Compass } from "lucide-react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AnnouncementTicker from "@/components/home/AnnouncementTicker";
import BentoHighlights from "@/components/home/BentoHighlights";
import StatsHighlight from "@/components/home/StatsHighlight";
import QuickLinks from "@/components/home/QuickLinks";
import SectionReveal from "@/components/shared/SectionReveal";

import {
  featuredEvent,
  archiveItems,
  latestAnnouncements,
  departmentPillars,
  aboutFacts,
  aboutTags,
} from "@/data/homepage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080C14] text-[#F8FAFC]">
      <Navbar />
      <AnnouncementTicker />
      <Hero />
      <StatsHighlight />
      <BentoHighlights />

      {/* Department Pillars — quick-scan strip */}
      <section className="border-b border-white/10 bg-[#0E131F] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departmentPillars.map(({ icon: Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-[#F59E0B]/40 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B]">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    {label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{value}</p>
                </div>
                <ArrowRight
                  size={15}
                  className="ml-auto text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#F59E0B]"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuickLinks />

      {/* Know SAIT */}
      <SectionReveal id="about" className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1.05fr_1.35fr] md:items-start">
          <div className="md:pt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              01 — Know SAIT
            </p>
            <div className="mt-6 space-y-3">
              {aboutFacts.map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs"
                >
                  <span className="font-bold text-white">{key}</span>
                  <span className="text-slate-300">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-6xl">
              More than an association.
              <br />
              <span className="text-slate-400">A community with a history.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
              SAIT is a student-led association that brings together students, teachers, staff, and
              alumni of Information Technology through workshops, seminars, course-related classes,
              projects, department publications, and shared experiences. It is a space for learning,
              information sharing, student feedback, and ideas from across the community.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              {aboutTags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-[#F59E0B]/40 hover:bg-[#F59E0B]/10"
                >
                  {item}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              About SAIT
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* Events Spotlight */}
      <SectionReveal
        id="events"
        className="border-b border-white/10 bg-[#0E131F] px-6 py-20 text-white md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F59E0B]">
                02 — What&apos;s happening
              </p>
              <h2 className="text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                Events<span className="text-[#F59E0B]">.</span>
              </h2>
            </div>

            <Link
              href="/events"
              className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-opacity hover:opacity-60"
            >
              View all events
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 rounded-[2rem] border border-white/15 bg-white/5 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                <CalendarDays size={14} className="text-[#F59E0B]" />
                Featured flagship event
              </div>

              <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl">
                {featuredEvent.name}
              </h3>

              <div className="space-y-3 text-sm text-slate-300">
                <p>
                  <span className="mr-2 font-semibold text-slate-400">Date</span>
                  {featuredEvent.date}
                </p>
                <p>
                  <span className="mr-2 font-semibold text-slate-400">Duration</span>
                  {featuredEvent.time}
                </p>
                <p>
                  <span className="mr-2 font-semibold text-slate-400">Venue</span>
                  {featuredEvent.venue}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {featuredEvent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Registration Status
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#F59E0B]">
                  {featuredEvent.registrationLabel}
                </p>
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#F59E0B] to-amber-200"
                    style={{ width: `${featuredEvent.registrationProgress}%` }}
                  />
                </div>
                <p className="mt-1.5 text-[10px] text-slate-400">
                  {featuredEvent.registrationClosing}
                </p>
              </div>

              <Link
                href="/events"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#F59E0B] px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                Register / Details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Announcements Hub Preview */}
      <SectionReveal
        id="announcements"
        className="border-b border-white/10 bg-[#080C14] px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
                03 — Notifications & Announcements
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                Stay in the loop.
              </h2>
            </div>
            <Link
              href="/announcements"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition-all hover:border-[#F59E0B] hover:text-[#F59E0B]"
            >
              <Bell size={14} />
              All Announcements
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid gap-4">
            {latestAnnouncements.map((item) => (
              <div
                key={`${item.tag}-${item.text}`}
                className="flex flex-col gap-3 rounded-[1.5rem] border border-white/10 bg-[#0E131F]/90 p-4 transition-all duration-200 hover:border-white/20 sm:flex-row sm:items-center sm:justify-between md:p-5"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <p className="text-sm font-medium text-white">{item.text}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3 pl-14 sm:pl-0">
                  <span className="text-[10px] font-medium text-slate-400">{item.date}</span>
                  <ArrowRight size={14} className="text-white/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* The SAIT Archive */}
      <SectionReveal className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              04 — The SAIT Archive
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              A community with institutional memory.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
            <div className="rounded-[2rem] border border-white/10 bg-[#0E131F]/90 p-6 md:p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#F59E0B]">
                <BookText size={20} />
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                SAIT has long carried the energy of the department through student writing, creative
                work, technical contributions, and documentation of activities that shaped the
                culture of the community.
              </p>
            </div>

            <ul className="space-y-3">
              {archiveItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition-colors duration-200 hover:border-white/20 hover:bg-white/10"
                >
                  <span>{item}</span>
                  <ArrowRight size={15} className="text-white/40" />
                </li>
              ))}
              <li>
                <Link
                  href="/archive"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Browse SAIT Archive
                  <ArrowRight size={15} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionReveal>

      {/* Student Activity Logger CTA */}
      <SectionReveal
        id="activity"
        className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
              05 — My SAIT Journey
            </p>
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F59E0B]">
              <Compass size={20} />
            </div>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-8xl">
              Learn something.
              <br />
              Build something.
              <br />
              <span className="text-slate-400">Leave your mark.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
              Students can track the workshops they attend, projects they build, competitions they
              enter, events they join, and achievements they earn throughout their time with SAIT.
              Earn XP, unlock badges, and export a verified portfolio.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/activity-logger" className="sait-btn-primary">
                My Activity Logger
                <ArrowRight size={16} />
              </Link>
              <Link href="/journey" className="sait-btn-secondary">
                My SAIT Journey
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Alumni & Community */}
      <SectionReveal className="border-b border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#F59E0B]">
                06 — Across Generations
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                The community doesn&apos;t end at graduation.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                SAIT creates space for alumni interaction, shared experience, and continuing
                conversations between students, teachers, and former members of the community.
                1200+ alumni worldwide continue to give back through mentorship, talks, and
                industry guidance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/alumni"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore Alumni Network
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <Footer />
    </main>
  );
}