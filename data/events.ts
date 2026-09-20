export type EventCategory =
  | "Workshop"
  | "Seminar"
  | "Technical"
  | "Cultural"
  | "Competition"
  | "Community";

export type EventItem = {
  id: string;
  name: string;
  category: EventCategory;
  date: string;
  time: string;
  venue: string;
  description: string;
  featured?: boolean;
  registrationLabel?: string;
  isPast?: boolean;
  outcome?: string;
  year?: string;
  isDemo?: boolean;
  speaker?: {
    name: string;
    role: string;
    company: string;
  };
  capacity?: {
    filled: number;
    total: number;
  };
};

export const eventCategories: EventCategory[] = [
  "Workshop",
  "Seminar",
  "Technical",
  "Cultural",
  "Competition",
  "Community",
];

export const events: EventItem[] = [
  {
    id: "event-1",
    name: "SAIT HackIT 2026: 24-Hour Hackathon",
    category: "Competition",
    date: "September 28, 2026",
    time: "9:00 AM – Next Day 9:00 AM",
    venue: "Main IT Labs, SOE CUSAT",
    description:
      "The flagship annual code sprint of SAIT. Build innovative AI, Web3, and Systems solutions for real-world campus & industrial challenges.",
    featured: true,
    registrationLabel: "Register Now",
    speaker: {
      name: "Er. Rahul Nair",
      role: "Staff Coordinator & Lead Systems Architect",
      company: "SOE CUSAT / Tech Mahindra",
    },
    capacity: {
      filled: 42,
      total: 60,
    },
  },
  {
    id: "event-2",
    name: "Full Stack System Architecture & Microservices",
    category: "Workshop",
    date: "October 05, 2026",
    time: "2:00 PM – 5:30 PM",
    venue: "Department Seminar Hall",
    description:
      "Hands-on workshop on scalable backend design, GraphQL APIs, Docker containers, and Next.js App Router deployment patterns.",
    featured: true,
    registrationLabel: "Reserve Seat",
    speaker: {
      name: "Siddharth V.",
      role: "Senior Backend Engineer (Alumni 2022)",
      company: "Postman",
    },
    capacity: {
      filled: 38,
      total: 50,
    },
  },
  {
    id: "event-3",
    name: "Career Pathways & FAANG Placement Strategy",
    category: "Seminar",
    date: "October 12, 2026",
    time: "3:00 PM – 5:00 PM",
    venue: "IT Auditorium",
    description:
      "Interactive session with alumni engineers from Google and Amazon on cracking technical interviews, system design rounds, and resume building.",
    featured: false,
    registrationLabel: "Register",
    speaker: {
      name: "Anjali Menon",
      role: "Software Engineer II (Alumni 2021)",
      company: "Google India",
    },
    capacity: {
      filled: 75,
      total: 80,
    },
  },
  {
    id: "event-4",
    name: "Open Source Contribution Sprint & Git Deep-Dive",
    category: "Technical",
    date: "October 18, 2026",
    time: "10:00 AM – 1:00 PM",
    venue: "Software Engineering Lab",
    description:
      "Learn Git internals, pull request workflows, and submit your first PRs to major open-source repositories under mentor guidance.",
    registrationLabel: "Join Workshop",
    capacity: {
      filled: 28,
      total: 40,
    },
  },
  {
    id: "event-5",
    name: "SAIT Tech & Cultural Night 2026",
    category: "Cultural",
    date: "November 04, 2026",
    time: "5:00 PM – 9:00 PM",
    venue: "SOE Open Air Theatre",
    description:
      "Annual department celebration featuring live music, student creative showcases, magazine releases, and alumni networking.",
    registrationLabel: "Reserve Pass",
    capacity: {
      filled: 120,
      total: 200,
    },
  },
  {
    id: "event-6",
    name: "AI & Large Language Models Hands-on Lab",
    category: "Workshop",
    date: "November 14, 2026",
    time: "1:30 PM – 4:30 PM",
    venue: "AI & High Performance Computing Lab",
    description:
      "Building production RAG pipelines, fine-tuning open-weights models, and deploying AI agent applications with Python & PyTorch.",
    registrationLabel: "Register",
    speaker: {
      name: "Dr. Binsu C. Kovoor",
      role: "Professor & AI Research Head",
      company: "Division of IT, CUSAT",
    },
    capacity: {
      filled: 30,
      total: 35,
    },
  },
  {
    id: "past-1",
    name: "Cybersecurity & Ethical Hacking Symposium",
    category: "Technical",
    date: "May 2026",
    time: "Full Day",
    venue: "IT Auditorium",
    description:
      "CTF competition and live pentesting demonstrations covering web vulnerabilities, network analysis, and binary exploitation.",
    isPast: true,
    year: "2026",
    outcome: "Over 120 students participated; top 3 teams won cash prizes.",
  },
  {
    id: "past-2",
    name: "Annual IT Department Magazine Release",
    category: "Cultural",
    date: "March 2026",
    time: "Afternoon",
    venue: "Department Seminar Hall",
    description:
      "Official launch of the annual student-compiled IT Magazine showcasing technical research papers, student art, poems, and stories.",
    isPast: true,
    year: "2026",
    outcome: "Published 200+ physical copies and digital edition.",
  },
  {
    id: "past-3",
    name: "Alumni Knowledge Exchange & Mentorship",
    category: "Community",
    date: "February 2026",
    time: "Evening Session",
    venue: "Virtual & Seminar Hall",
    description:
      "One-on-one resume reviews, practice interviews, and career roadmaps with 15+ IT department alumni.",
    isPast: true,
    year: "2026",
    outcome: "Helped 80+ final year students prepare for campus placement drives.",
  },
];
