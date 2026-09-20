export type PlacementStat = {
  label: string;
  value: string;
  note: string;
};

export type Recruiter = {
  name: string;
  sector: string;
  roles: string[];
  status: "Active Recruiter" | "Placement Partner" | "Regular Recruiter";
  employeeCount: string;
  alumniWorking: string;
  logo: string;
};

export type CareerResource = {
  title: string;
  description: string;
  cta: string;
};

export type AlumniCareerProfile = {
  name: string;
  role: string;
  company: string;
  batch: string;
  field: string;
  message: string;
  photo?: string;
};

export const placementStats: PlacementStat[] = [
  { label: "Highest Package Offered", value: "₹32.0 LPA", note: "Product & Deep Tech Tier" },
  { label: "Average CTC (IT Division)", value: "₹9.6 LPA", note: "Batch 2025–2026" },
  { label: "Eligible Students Placed", value: "96%", note: "Division of IT CUSAT" },
  { label: "Recruiting Companies", value: "50+", note: "On-campus & Off-campus Drives" },
];

export const recruiters: Recruiter[] = [
  {
    name: "TCS",
    sector: "IT Services & Consulting",
    roles: ["Digital Software Engineer", "Systems Architect", "Cloud Developer"],
    status: "Regular Recruiter",
    employeeCount: "3000+",
    alumniWorking: "5 of our Alumnis are currently working here",
    logo: "/images/recruiters/tcs.svg",
  },
  {
    name: "UST",
    sector: "Digital Transformation & Solutions",
    roles: ["Software Engineer", "Cloud Associate", "Enterprise Developer"],
    status: "Active Recruiter",
    employeeCount: "2000+",
    alumniWorking: "5 of our Alumnis are currently working here",
    logo: "/images/recruiters/ust.svg",
  },
  {
    name: "SOTI",
    sector: "Enterprise Mobility & IoT Management",
    roles: ["Software Developer", "Mobile Systems Engineer", "QA Engineer"],
    status: "Active Recruiter",
    employeeCount: "4000+",
    alumniWorking: "6 of our Alumnis are currently working here",
    logo: "/images/recruiters/soti.svg",
  },
  {
    name: "CISCO",
    sector: "Networking & Cloud Security",
    roles: ["Network Software Engineer", "Security Analyst", "Systems Engineer"],
    status: "Placement Partner",
    employeeCount: "5000+",
    alumniWorking: "10 of our Alumnis are currently working here",
    logo: "/images/recruiters/cisco.svg",
  },
  {
    name: "IBM",
    sector: "Cloud Computing & Cognitive Systems",
    roles: ["Application Developer", "Data Platform Engineer", "Systems Specialist"],
    status: "Placement Partner",
    employeeCount: "30000+",
    alumniWorking: "7 of our Alumnis are currently working here",
    logo: "/images/recruiters/ibm.svg",
  },
  {
    name: "QBurst",
    sector: "Web, Mobile & AI Solutions",
    roles: ["Full Stack Engineer", "DevOps Engineer", "Mobile App Specialist"],
    status: "Active Recruiter",
    employeeCount: "4000+",
    alumniWorking: "7 of our Alumnis are currently working here",
    logo: "/images/recruiters/qburst.svg",
  },
];


export const careerResources: CareerResource[] = [
  {
    title: "Resume & Portfolio Review",
    description: "Build a clean, high-impact technical resume highlighting open-source PRs, hackathons, and published projects.",
    cta: "Download SAIT Resume Template",
  },
  {
    title: "System Design & DS/Algo Preparation",
    description: "Curated problem sets and architecture guides designed specifically for CUSAT IT placement campus drives.",
    cta: "View Preparation Roadmap",
  },
  {
    title: "Interview Practice & Technical Drills",
    description: "Schedule 1-on-1 practice interviews with senior alumni working in product companies.",
    cta: "Book Practice Interview Slot",
  },
  {
    title: "Quantitative & Aptitude Practice",
    description: "Sharpen logical reasoning, mathematical aptitude, and verbal rounds required for tier-1 IT drives.",
    cta: "Practice Aptitude Sets",
  },
];

export const alumniProfiles: AlumniCareerProfile[] = [
  {
    name: "Riju Razak",
    role: "Data Analyst",
    company: "Data Solutions",
    batch: "Alumnus",
    field: "Data Analytics & Business Intelligence",
    message: "Hands-on projects and analytical problem-solving at SAIT formed the bedrock of my transition into business data analytics.",
    photo: "/images/alumni/riju-razak.jpg",
  },
  {
    name: "Razwi M K",
    role: "AR/VR Developer",
    company: "Random",
    batch: "Alumnus",
    field: "Immersive Computing & Spatial Design",
    message: "Exploring emerging technology and 3D graphics in departmental initiatives directly unlocked my career path in AR/VR development.",
    photo: "/images/alumni/razwi-mk.jpg",
  },
  {
    name: "Ashwin Anil",
    role: "Software Engineer",
    company: "braveStudio",
    batch: "Alumnus",
    field: "Distributed Systems & Full Stack",
    message: "Building end-to-end applications and collaborating in hackathon teams at SAIT taught me how software works in real production environments.",
    photo: "/images/alumni/ashwin-anil.jpg",
  },
  {
    name: "Muhammed Ayimen Abdul Latheef",
    role: "Software Development Engineer",
    company: "TOA Software",
    batch: "Alumnus",
    field: "Enterprise Engineering & Architecture",
    message: "The culture of continuous peer learning and senior mentorship at SAIT prepared me thoroughly for enterprise software engineering challenges.",
    photo: "/images/alumni/muhammed-ayimen.jpg",
  },
];
