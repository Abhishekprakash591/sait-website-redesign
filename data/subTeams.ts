export type SubTeamKey = "Tech" | "Media" | "Events" | "PR" | "Content";

export type SubTeamMember = {
  id: string;
  name: string;
  role: string;
  team: SubTeamKey;
  photo: string;
  initials: string;
  bio: string;
  socialUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export const subTeamLabels: SubTeamKey[] = ["Tech", "Media", "Events", "PR", "Content"];

export const subTeams: Record<SubTeamKey, SubTeamMember[]> = {
  Tech: [
    { id: "tech-1", name: "Siddharth Rajesh", role: "Tech Team Lead", team: "Tech", photo: "", initials: "SR", bio: "Next.js & Cloud Architect", socialUrl: "https://linkedin.com", githubUrl: "https://github.com", linkedinUrl: "https://linkedin.com" },
    { id: "tech-2", name: "Gautam B.", role: "Backend Developer", team: "Tech", photo: "", initials: "GB", bio: "Rust & Node.js Developer", socialUrl: "https://linkedin.com", githubUrl: "https://github.com", linkedinUrl: "https://linkedin.com" },
    { id: "tech-3", name: "Keerthana Menon", role: "UI/UX Designer", team: "Tech", photo: "", initials: "KM", bio: "Design Systems & Tailwind Lead", socialUrl: "https://linkedin.com", githubUrl: "https://github.com", linkedinUrl: "https://linkedin.com" },
  ],
  Media: [
    { id: "media-1", name: "Arjun K. V.", role: "Media Lead", team: "Media", photo: "", initials: "AK", bio: "Video Director & Motion Graphics", socialUrl: "https://instagram.com" },
    { id: "media-2", name: "Riya Mathew", role: "Photographer & Editor", team: "Media", photo: "", initials: "RM", bio: "Visual Arts & Photography", socialUrl: "https://instagram.com" },
    { id: "media-3", name: "Kiran Paul", role: "Graphic Designer", team: "Media", photo: "", initials: "KP", bio: "Brand Identity & Typography", socialUrl: "https://behance.net" },
  ],
  Events: [
    { id: "events-1", name: "Farhan Ali", role: "Events Head", team: "Events", photo: "", initials: "FA", bio: "Hackathon Organizer & Host", socialUrl: "https://linkedin.com" },
    { id: "events-2", name: "Sneha Thomas", role: "Stage Manager", team: "Events", photo: "", initials: "ST", bio: "Symposium Logistics & Schedule", socialUrl: "https://linkedin.com" },
    { id: "events-3", name: "Abhinav Mohan", role: "Technical Coordinator", team: "Events", photo: "", initials: "AM", bio: "Hardware & AV Tech Setup", socialUrl: "https://linkedin.com" },
  ],
  PR: [
    { id: "pr-1", name: "Meera Krishnan", role: "PR & Outreach Lead", team: "PR", photo: "", initials: "MK", bio: "Industry Partnerships & Sponsorships", socialUrl: "https://linkedin.com" },
    { id: "pr-2", name: "Rahul S. Kumar", role: "Alumni Coordinator", team: "PR", photo: "", initials: "RK", bio: "Alumni Relations & Speaker Booking", socialUrl: "https://linkedin.com" },
    { id: "pr-3", name: "Pooja Varma", role: "Campus Ambassador", team: "PR", photo: "", initials: "PV", bio: "Cross-department Collaboration", socialUrl: "https://linkedin.com" },
  ],
  Content: [
    { id: "content-1", name: "Deepak S.", role: "Content Head", team: "Content", photo: "", initials: "DS", bio: "Magazine Chief Editor & Tech Writer", socialUrl: "https://medium.com" },
    { id: "content-2", name: "Arya Nambiar", role: "Copywriter & Editor", team: "Content", photo: "", initials: "AN", bio: "Student Publications & Newsletters", socialUrl: "https://medium.com" },
    { id: "content-3", name: "Varun Nair", role: "Documentation Specialist", team: "Content", photo: "", initials: "VN", bio: "Event Archives & Tech Docs", socialUrl: "https://github.com" },
  ],
};
