import { CalendarDays, GraduationCap, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Featured Event ───────────────────────────────────────────────────────────

export const featuredEvent = {
  name: "SAIT TechSummit & HackSprint 2026",
  date: "October 12–13, 2026",
  time: "9:00 AM – 9:00 AM (24 Hours)",
  venue: "CUSAT Seminar Complex, Kochi",
  tags: ["AI/ML Track", "Web3 Track", "Cloud Systems", "₹1 Lakh Pool"],
  registrationLabel: "Open for CUSAT & Outside",
  registrationProgress: 74.8,
  registrationClosing: "Closing Sept 24 · Limited seats",
};

// ─── Archive Preview Items ────────────────────────────────────────────────────

export const archiveItems = [
  "Department magazine (INTERFACE)",
  "Student technical writing",
  "Creative poems and sketches",
  "Research contributions",
  "Past SAIT annual reports",
];

// ─── Latest Announcements ─────────────────────────────────────────────────────

export type AnnouncementTag = "URGENT" | "EVENT" | "PLACEMENT" | "ACADEMIC";

export type Announcement = {
  tag: AnnouncementTag;
  text: string;
  date: string;
  tagColor: string;
};

export const latestAnnouncements: Announcement[] = [
  {
    tag: "URGENT",
    text: "Mid-semester examination schedule for S5 & S7 B.Tech IT released",
    date: "Sept 18, 2026",
    tagColor: "bg-red-500/20 text-red-300 border border-red-500/30",
  },
  {
    tag: "EVENT",
    text: "HackSprint 2026 registrations close September 24 — limited slots!",
    date: "Sept 15, 2026",
    tagColor: "bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30",
  },
  {
    tag: "PLACEMENT",
    text: "Google, Amazon & Cisco pre-placement talks scheduled for October batch",
    date: "Sept 12, 2026",
    tagColor: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  },
  {
    tag: "ACADEMIC",
    text: "B.Tech IT Scheme 2026 updated syllabus PDF now available in resources",
    date: "Sept 10, 2026",
    tagColor: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  },
];

// ─── Department Pillars ───────────────────────────────────────────────────────

export type DepartmentPillar = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export const departmentPillars: DepartmentPillar[] = [
  {
    icon: Trophy,
    label: "Hall of Fame",
    value: "National Winners",
    href: "/achievements",
  },
  {
    icon: GraduationCap,
    label: "Placements",
    value: "₹32 LPA Highest",
    href: "/placements",
  },
  {
    icon: Users,
    label: "Alumni Network",
    value: "1200+ Worldwide",
    href: "/alumni",
  },
  {
    icon: CalendarDays,
    label: "Events",
    value: "35+ Per Year",
    href: "/events",
  },
];

// ─── About Section Metadata ───────────────────────────────────────────────────

export const aboutFacts: [string, string][] = [
  ["1973", "Department established"],
  ["CUSAT", "School of Engineering"],
  ["B.Tech + M.Tech", "IT programmes offered"],
  ["SAIT", "Student-led since founding"],
];

export const aboutTags = [
  "Workshops",
  "Seminars",
  "Projects",
  "Department magazine",
  "Alumni interaction",
  "Student feedback",
  "Hackathons",
  "Research",
];
