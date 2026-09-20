export type ActivityType =
  | "Workshop"
  | "Seminar"
  | "Project"
  | "Competition"
  | "Volunteering"
  | "Leadership"
  | "Cultural"
  | "Other";

export type ActivityStatus = "Verified" | "Pending" | "Needs Review";

export type ActivityItem = {
  id: string;
  name: string;
  type: ActivityType;
  date: string;
  role: string;
  description: string;
  proof: string;
  status: ActivityStatus;
  points: number;
  badge: string;
  year: string;
  month: string;
};

export type BadgeItem = {
  id: string;
  name: string;
  unlocked: boolean;
  description: string;
};

export const activityTypes: ActivityType[] = [
  "Workshop",
  "Seminar",
  "Project",
  "Competition",
  "Volunteering",
  "Leadership",
  "Cultural",
  "Other",
];

export const activityStatuses: Array<ActivityStatus | "All"> = [
  "All",
  "Verified",
  "Pending",
  "Needs Review",
];

export const demoActivities: ActivityItem[] = [
  {
    id: "activity-1",
    name: "SAIT HackIT 2026 Code Sprint",
    type: "Competition",
    date: "2026-04-12",
    role: "Team Lead & Backend Architecture",
    description:
      "Built a real-time decentralized campus feedback and emergency response web portal using Next.js & WebSockets.",
    proof: "https://github.com/cusat-it/hackit-2026-portal",
    status: "Verified",
    points: 150,
    badge: "Hackathon Winner",
    year: "2026",
    month: "April",
  },
  {
    id: "activity-2",
    name: "IEEE International Systems Conference Paper",
    type: "Project",
    date: "2026-03-18",
    role: "Primary Author",
    description:
      "Published research paper titled 'Optimizing Edge Compute Latency in Distributed IoT Sensor Networks' under Dr. Binsu Kovoor.",
    proof: "https://ieee.org/abstract/document/984210",
    status: "Verified",
    points: 200,
    badge: "Researcher",
    year: "2026",
    month: "March",
  },
  {
    id: "activity-3",
    name: "Docker & Kubernetes DevOps Workshop",
    type: "Workshop",
    date: "2026-02-10",
    role: "Participant & Lab Assistant",
    description:
      "Completed hands-on training on container orchestration, CI/CD GitHub Actions pipelines, and ingress routing.",
    proof: "https://certificate.sait.cusat.ac.in/devops-2026",
    status: "Verified",
    points: 80,
    badge: "DevOps Explorer",
    year: "2026",
    month: "February",
  },
  {
    id: "activity-4",
    name: "CUSAT TechFest Web Team Lead",
    type: "Leadership",
    date: "2025-11-20",
    role: "Lead Web Developer",
    description:
      "Managed 6 student developers to build the official techfest registration portal handling 5,000+ student registrations.",
    proof: "https://github.com/cusat-it/techfest-portal",
    status: "Verified",
    points: 130,
    badge: "Leader",
    year: "2025",
    month: "November",
  },
  {
    id: "activity-5",
    name: "Open Source Hacktoberfest 2025",
    type: "Volunteering",
    date: "2025-10-25",
    role: "Contributor",
    description:
      "Submitted 5 merged Pull Requests to open-source developer tooling and React component libraries.",
    proof: "https://hacktoberfest.com/profile/cusat-dev",
    status: "Verified",
    points: 90,
    badge: "Open Source Champion",
    year: "2025",
    month: "October",
  },
];

export const demoBadges: BadgeItem[] = [
  { id: "badge-1", name: "First Step", unlocked: true, description: "Unlocked upon submitting your first verified activity." },
  { id: "badge-2", name: "Builder", unlocked: true, description: "For building and presenting technical student projects." },
  { id: "badge-3", name: "Collaborator", unlocked: true, description: "For peer mentorship, code reviews, and team leadership." },
  { id: "badge-4", name: "Researcher", unlocked: true, description: "For IEEE/ACM conference paper publications." },
  { id: "badge-5", name: "Open Source Champion", unlocked: true, description: "For submitting pull requests to public repositories." },
  { id: "badge-6", name: "SAIT Legend", unlocked: false, description: "For reaching 1,000+ verified student activity points." },
];

export const demoLeaderboard = [
  { id: "leader-1", name: "Aisha Nair", batch: "IT S7", activities: 18, points: 1450, badge: "Hackathon Champion" },
  { id: "leader-2", name: "Rohit Menon", batch: "IT S5", activities: 15, points: 1280, badge: "Full Stack Lead" },
  { id: "leader-3", name: "Meera Iyer", batch: "IT S7", activities: 14, points: 1120, badge: "IEEE Researcher" },
  { id: "leader-4", name: "Ketan Sharma", batch: "IT S5", activities: 12, points: 980, badge: "DevOps Lead" },
  { id: "leader-5", name: "Ananya Pillai", batch: "IT S3", activities: 10, points: 840, badge: "Rising Star" },
];

export const demoFeed = [
  { id: "feed-1", title: "Activity Verified", detail: "SAIT HackIT 2026 Code Sprint (+150 pts) verified by HoD." },
  { id: "feed-2", title: "New Badge Unlocked", detail: "Researcher badge awarded to Meera Iyer for IEEE publication." },
  { id: "feed-3", title: "Workshop Completed", detail: "Docker & Kubernetes DevOps Workshop recorded." },
  { id: "feed-4", title: "Leaderboard Update", detail: "Aisha Nair reached #1 on the SAIT Student Leaderboard!" },
];
