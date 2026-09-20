export type ExecCommitteeMember = {
  id: string;
  name: string;
  role: string;
  year: string;
  photo: string;
  initials: string;
  bio: string;
  socialUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const facultyInCharge: ExecCommitteeMember = {
  id: "faculty-shelbi",
  name: "Dr. Shelbi Joseph",
  role: "Faculty in Charge",
  year: "Division of Information Technology",
  photo: "/images/team/dr-shelbi-joseph.jpg",
  initials: "SJ",
  bio: "Guiding the Students Association of Information Technology with academic mentorship and institutional leadership.",
};

export const execCommittee: ExecCommitteeMember[] = [
  {
    id: "exec-sony",
    name: "Sony K Martin",
    role: "President",
    year: "Executive Board 2023–24",
    photo: "/images/team/sony-k-martin.jpg",
    initials: "SM",
    bio: "Leading SAIT initiatives, community collaboration, and student-driven tech events.",
  },
  {
    id: "exec-gourisankar",
    name: "M Gourisankar",
    role: "Vice President",
    year: "Executive Board 2023–24",
    photo: "/images/team/m-gourisankar.jpg",
    initials: "MG",
    bio: "Overseeing operations, student engagement, and technical workshops.",
  },
  {
    id: "exec-adnan",
    name: "Adnan Kuthradan",
    role: "Secretary",
    year: "Executive Board 2023–24",
    photo: "/images/team/adnan-kuthradan.jpg",
    initials: "AK",
    bio: "Managing core communications, event planning, and departmental coordination.",
  },
  {
    id: "exec-pavan",
    name: "Pavan S",
    role: "Joint Secretary",
    year: "Executive Board 2023–24",
    photo: "/images/team/pavan-s.jpg",
    initials: "PS",
    bio: "Coordinating logistics, student feedback, and organizational activities.",
  },
  {
    id: "exec-leah",
    name: "Leah Francis Augustine",
    role: "Treasurer",
    year: "Executive Board 2023–24",
    photo: "/images/team/leah-francis-augustine.jpg",
    initials: "LA",
    bio: "Directing financial planning, budget allocations, and sponsorships.",
  },
  {
    id: "exec-yadu",
    name: "Yadu Krishna T B",
    role: "Alumni Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/yadu-krishna-tb.jpg",
    initials: "YK",
    bio: "Connecting current batches with alumni network, webinars, and mentoring.",
  },
  {
    id: "exec-srishanth",
    name: "Srishanth J",
    role: "Alumni Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/srishanth-j.jpg",
    initials: "SJ",
    bio: "Driving alumni outreach programs and career interaction panels.",
  },
  {
    id: "exec-sarang",
    name: "Sarang K",
    role: "Content Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/sarang-k.jpg",
    initials: "SK",
    bio: "Curating department articles, editorial releases, and newsletters.",
  },
  {
    id: "exec-rima",
    name: "Rima Sidique",
    role: "Content Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/rima-sidique.jpg",
    initials: "RS",
    bio: "Leading creative copy, storytelling, and digital publications.",
  },
  {
    id: "exec-ardhra",
    name: "Ardhra Mariya",
    role: "Curation Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/ardhra-mariya.jpg",
    initials: "AM",
    bio: "Managing event curation, technical showcases, and exhibition spaces.",
  },
  {
    id: "exec-aniket",
    name: "Aniket Raj",
    role: "Curation Team Lead",
    year: "Executive Board 2023–24",
    photo: "/images/team/aniket-raj.jpg",
    initials: "AR",
    bio: "Coordinating technical track curation, competitions, and seminars.",
  },
];
