export type AlumniRecord = {
  id: string;
  name: string;
  batch: string;
  role: string;
  industry: string;
  company: string;
  achievement: string;
  location: string;
  story: string;
  highlight: string;
  initials: string;
  photo?: string;
  isFeatured?: boolean;
};

export const alumni: AlumniRecord[] = [
  {
    id: "alumni-riju",
    name: "Riju Razak",
    batch: "2022",
    role: "Data Analyst",
    industry: "Data & Analytics",
    company: "Data Solutions",
    achievement: "Leveraging business intelligence and predictive modeling to inform enterprise decisions",
    location: "Kochi, India",
    story: "Riju transitioned his passion for numbers and statistics into business analytics, crediting collaborative student hackathons at SAIT for building his data-driven mindset.",
    highlight: "Business Intelligence & Statistical Analytics",
    initials: "RR",
    photo: "/images/alumni/riju-razak.jpg",
    isFeatured: true,
  },
  {
    id: "alumni-razwi",
    name: "Razwi M K",
    batch: "2023",
    role: "AR/VR Developer",
    industry: "AR/VR & 3D Interactive",
    company: "Random",
    achievement: "Building spatial computing applications and real-time interactive 3D simulations",
    location: "Bengaluru, India",
    story: "Razwi specialized in immersive technologies, designing virtual reality experiences and mentoring students interested in game engines and spatial computing.",
    highlight: "Augmented Reality & Real-Time Simulation",
    initials: "RM",
    photo: "/images/alumni/razwi-mk.jpg",
    isFeatured: true,
  },
  {
    id: "alumni-ashwin",
    name: "Ashwin Anil",
    batch: "2022",
    role: "Software Engineer",
    industry: "Software Engineering",
    company: "braveStudio",
    achievement: "Architecting high-concurrency microservices and client-facing web applications",
    location: "Bengaluru, India",
    story: "Ashwin developed full-stack systems at SAIT and continues to run code walkthroughs for junior batches exploring scalable backend patterns.",
    highlight: "Full Stack Engineering & Microservices",
    initials: "AA",
    photo: "/images/alumni/ashwin-anil.jpg",
    isFeatured: true,
  },
  {
    id: "alumni-ayimen",
    name: "Muhammed Ayimen Abdul Latheef",
    batch: "2023",
    role: "Software Development Engineer",
    industry: "Enterprise Software",
    company: "TOA Software",
    achievement: "Engineering robust enterprise products and high-throughput API integrations",
    location: "Hyderabad, India",
    story: "Ayimen credits peer code reviews and project showcases at SAIT for sharpening his software engineering rigor and collaborative execution.",
    highlight: "Enterprise Software & Backend Scalability",
    initials: "MA",
    photo: "/images/alumni/muhammed-ayimen.jpg",
    isFeatured: true,
  },
  {
    id: "alumni-siddharth",
    name: "Siddharth V.",
    batch: "2022",
    role: "Senior Backend Engineer",
    industry: "Developer Tooling",
    company: "Postman",
    achievement: "Built API runtime ecosystem tools used by over 20 million developers",
    location: "Bengaluru, India",
    story:
      "Siddharth stayed deeply connected to SAIT through project feedback, running hands-on workshops on GraphQL microservices for CUSAT students.",
    highlight: "Scaled developer tools from SAIT lab projects to global execution",
    initials: "SV",
  },
  {
    id: "alumni-3",
    name: "Rohan Mathew",
    batch: "2019",
    role: "Lead Data Engineer",
    industry: "Data & AI",
    company: "Amazon Web Services",
    achievement: "Architected real-time telemetry pipelines processing petabytes of data daily",
    location: "Hyderabad, India",
    story:
      "Rohan credits his problem-solving foundation to SAIT hackathons. He sponsors annual awards for CUSAT IT final-year project teams.",
    highlight: "Big data pipeline architecture & industry mentorship",
    initials: "RM",
  },
  {
    id: "alumni-4",
    name: "Meera Iyer",
    batch: "2020",
    role: "Staff UX Researcher",
    industry: "Product & Design",
    company: "Atlassian",
    achievement: "Shaped accessibility-first design systems across developer productivity suites",
    location: "Bengaluru, India",
    story:
      "Meera regularly visits SOE CUSAT as a guest mentor, teaching students how user empathy transforms technical code into loved products.",
    highlight: "Accessibility-first design systems and UX leadership",
    initials: "MI",
  },
  {
    id: "alumni-5",
    name: "Arjun Pillai",
    batch: "2018",
    role: "Cybersecurity Architect",
    industry: "Cybersecurity",
    company: "Ernst & Young (EY)",
    achievement: "Designed threat modeling frameworks for Fortune 500 financial platforms",
    location: "Kochi, India",
    story:
      "Arjun actively mentors the SAIT Security Guild, conducting ethical hacking demonstrations and CTF walkthroughs.",
    highlight: "Enterprise cybersecurity defense & threat modeling",
    initials: "AP",
  },
  {
    id: "alumni-6",
    name: "Sneha Joseph",
    batch: "2022",
    role: "Product Manager",
    industry: "Fintech",
    company: "Razorpay",
    achievement: "Led growth initiatives for developer checkout APIs across South Asia",
    location: "Bengaluru, India",
    story:
      "Sneha returns to SAIT to speak on product management, technical storytelling, and turning college projects into startup opportunities.",
    highlight: "Bridging engineering rigor with product strategy",
    initials: "SJ",
  },
];

export const alumniIndustries = [
  "All industries",
  ...Array.from(new Set(alumni.map((person) => person.industry))),
];

export const alumniBatches = [
  "All batches",
  ...Array.from(new Set(alumni.map((person) => person.batch))),
];
