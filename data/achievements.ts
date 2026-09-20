export type AchievementCategory =
  | "Hackathons"
  | "Technical Competitions"
  | "Academics"
  | "Research"
  | "Projects"
  | "Other";

export type AchievementItem = {
  id: string;
  title: string;
  category: AchievementCategory;
  year: string;
  team: string;
  result: string;
  description: string;
  details: string;
  badge: string;
  featured?: boolean;
};

export const achievements: AchievementItem[] = [
  {
    id: "achi-1",
    title: "Smart India Hackathon 2026 — 1st Place Winners",
    category: "Hackathons",
    year: "2026",
    team: "Team CUSAT TechLabs",
    result: "1st Place Winner (Cash Prize ₹1,00,000)",
    description:
      "Built an AI-powered smart water distribution monitoring system using IoT telemetry and predictive machine learning models.",
    details:
      "Competing against 450+ engineering teams nationally, the CUSAT IT team built a production-ready edge sensor analytics pipeline with real-time anomaly detection.",
    badge: "National Winner",
    featured: true,
  },
  {
    id: "achi-2",
    title: "IEEE International Systems Conference — Best Paper Award",
    category: "Research",
    year: "2026",
    team: "Aisha Nair & Dr. Binsu Kovoor",
    result: "Best Student Research Paper",
    description:
      "Recognized for research on optimizing edge computing latency and energy consumption in decentralized Internet-of-Things deployments.",
    details:
      "Presented live at the IEEE Systems Conference; paper published in IEEE Xplore digital library.",
    badge: "Best Research Paper",
    featured: true,
  },
  {
    id: "achi-3",
    title: "National Inter-College Cyber Security CTF 2025",
    category: "Technical Competitions",
    year: "2025",
    team: "SAIT Security Guild",
    result: "Overall Runners-Up",
    description:
      "Solved 18 capture-the-flag security challenges spanning web penetration, cryptography, and binary reverse engineering.",
    details:
      "Secured 2nd rank overall among 80+ university cybersecurity teams in South India.",
    badge: "CTF Runner-Up",
  },
  {
    id: "achi-4",
    title: "ACM ICPC Regional Competitive Programming Qualifier",
    category: "Technical Competitions",
    year: "2025",
    team: "CUSAT Coders",
    result: "Top 10 Regional Rank",
    description:
      "Demonstrated algorithmic excellence in graph theory, dynamic programming, and data structure optimization under tight time constraints.",
    details:
      "Ranked #8 out of 300+ university programming teams across the Amritapuri regional site.",
    badge: "ICPC Regional Finalist",
  },
  {
    id: "achi-5",
    title: "FOSS Cell Open Source Innovation Grant",
    category: "Projects",
    year: "2024",
    team: "SAIT Dev Team",
    result: "Grant Awarded (₹50,000)",
    description:
      "Received open-source development grant to build a privacy-first student attendance and academic tracking system.",
    details:
      "System deployed across 3 departments in SOE CUSAT, serving over 1,200 active student users.",
    badge: "FOSS Grant Winner",
  },
];

export const achievementCategories: Array<"All categories" | AchievementCategory> = [
  "All categories",
  "Hackathons",
  "Technical Competitions",
  "Academics",
  "Research",
  "Projects",
  "Other",
];

export const achievementYears = [
  "All years",
  ...Array.from(new Set(achievements.map((item) => item.year))).sort((a, b) => Number(b) - Number(a)),
];
