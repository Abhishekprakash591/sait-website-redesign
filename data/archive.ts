export type ArchiveCategory = "All" | "Events" | "Projects" | "Magazine" | "Alumni" | "Community";

export type ArchiveItem = {
  id: string;
  year: string;
  category: Exclude<ArchiveCategory, "All">;
  title: string;
  description: string;
  meta?: string;
};

export const archiveCategories: ArchiveCategory[] = [
  "All",
  "Events",
  "Projects",
  "Magazine",
  "Alumni",
  "Community",
];

export const archiveItems: ArchiveItem[] = [
  {
    id: "archive-2006",
    year: "2006",
    category: "Magazine",
    title: "Student voices in print",
    description:
      "SAIT’s annual magazine became a space for students to share literature, artwork and ideas.",
    meta: "Department publication",
  },
  {
    id: "archive-2010",
    year: "2010",
    category: "Community",
    title: "Learning beyond the classroom",
    description:
      "Workshops and introductory sessions helped students explore emerging areas of IT.",
    meta: "Campus learning",
  },
  {
    id: "archive-2015",
    year: "2015",
    category: "Projects",
    title: "Students building together",
    description:
      "Technology and non-technology projects brought students and faculty together.",
    meta: "Student-led initiatives",
  },
  {
    id: "archive-2020",
    year: "2020",
    category: "Alumni",
    title: "Keeping the connection alive",
    description:
      "Annual alumni interactions created a bridge between current students and graduates.",
    meta: "Mentorship and network",
  },
  {
    id: "archive-2026",
    year: "2026",
    category: "Community",
    title: "Building what comes next",
    description:
      "A new generation continues the SAIT story through shared learning and community practice.",
    meta: "Next chapter",
  },
  {
    id: "archive-2018",
    year: "2018",
    category: "Events",
    title: "A growing rhythm of events",
    description:
      "The community built a stronger rhythm of seminars, showcases and gatherings across the department.",
    meta: "Department calendar",
  },
];
