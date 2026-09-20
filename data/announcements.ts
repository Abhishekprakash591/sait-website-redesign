export type AnnouncementCategory =
  | "Events"
  | "Opportunities"
  | "Academics"
  | "Placements"
  | "SAIT"
  | "General";

export type AnnouncementItem = {
  id: string;
  title: string;
  category: AnnouncementCategory;
  date: string;
  description: string;
  deadline?: string;
  priority: "High" | "Medium" | "Low";
  read: boolean;
  featured?: boolean;
};

export const announcements: AnnouncementItem[] = [
  {
    id: "ann-1",
    title: "SAIT HackIT 2026 Registration Open — 24-Hour Code Sprint",
    category: "Events",
    date: "2026-09-15",
    description:
      "Registrations are officially open for SAIT HackIT 2026! Form teams of up to 4 students from IT and competing SOE departments. Hardware labs and cloud server credentials will be provided.",
    deadline: "September 24, 2026 · 11:59 PM",
    priority: "High",
    read: false,
    featured: true,
  },
  {
    id: "ann-2",
    title: "S5 & S7 Placement Readiness Drive & Resume Review Session",
    category: "Placements",
    date: "2026-09-12",
    description:
      "The SAIT Career Cell is organizing 1-on-1 resume reviews and practice technical interviews with alumni working at Google, Amazon, and Postman.",
    deadline: "September 20, 2026",
    priority: "High",
    read: false,
  },
  {
    id: "ann-3",
    title: "Call for Submissions: SAIT Annual Department Magazine 2026",
    category: "SAIT",
    date: "2026-09-10",
    description:
      "Submit your technical research summaries, coding articles, poems, sketches, and stories for the upcoming physical and digital edition of the SAIT IT Magazine.",
    deadline: "October 10, 2026",
    priority: "Medium",
    read: false,
  },
  {
    id: "ann-4",
    title: "Division of IT Mid-Semester Evaluation & Project Review",
    category: "Academics",
    date: "2026-09-07",
    description:
      "All S5 and S7 IT students must submit their mini-project repositories and architecture documentation to their respective faculty coordinators.",
    deadline: "September 28, 2026",
    priority: "High",
    read: true,
  },
  {
    id: "ann-5",
    title: "Open Source Sprint: Hacktoberfest 2026 Prep Session",
    category: "Opportunities",
    date: "2026-09-04",
    description:
      "Join the SAIT Tech Team in Lab 2 for a live walkthrough on Git rebasing, branch strategies, and submitting qualified open-source PRs.",
    deadline: "October 01, 2026",
    priority: "Medium",
    read: false,
  },
  {
    id: "ann-6",
    title: "Department Library & E-Resource Access Update",
    category: "General",
    date: "2026-08-30",
    description:
      "IEEE Xplore and Springer digital library credentials have been updated for all Division of IT students. Check your CUSAT email for login tokens.",
    priority: "Low",
    read: true,
  },
];

export const announcementCategories: Array<"All" | AnnouncementCategory> = [
  "All",
  "Events",
  "Opportunities",
  "Academics",
  "Placements",
  "SAIT",
  "General",
];
