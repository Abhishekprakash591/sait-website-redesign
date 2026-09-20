export type JourneyStageKey =
  | "join"
  | "learn"
  | "participate"
  | "build"
  | "achieve"
  | "connect"
  | "leave-mark";

export type JourneyStage = {
  id: JourneyStageKey;
  number: string;
  title: string;
  description: string;
  activities: string[];
  milestone: string;
  achievement: string;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "join",
    number: "01",
    title: "JOIN",
    description: "Find your place in the community.",
    activities: ["Orientation moments", "First department introductions", "Student community spaces"],
    milestone: "First step",
    achievement: "You joined the SAIT community.",
  },
  {
    id: "learn",
    number: "02",
    title: "LEARN",
    description: "Discover workshops, talks and new technologies.",
    activities: ["Workshop attendance", "Skills sessions", "Industry conversations"],
    milestone: "Workshops completed",
    achievement: "You built your learning rhythm.",
  },
  {
    id: "participate",
    number: "03",
    title: "PARTICIPATE",
    description: "Show up. Collaborate. Take part.",
    activities: ["Department events", "Team collaborations", "Campus moments"],
    milestone: "Active participation",
    achievement: "You became part of the story.",
  },
  {
    id: "build",
    number: "04",
    title: "BUILD",
    description: "Turn ideas into projects.",
    activities: ["Project work", "Build sprints", "Student-led builds"],
    milestone: "Projects completed",
    achievement: "Latest: Campus Event Companion",
  },
  {
    id: "achieve",
    number: "05",
    title: "ACHIEVE",
    description: "Celebrate competitions, publications and milestones.",
    activities: ["Competitions", "Publications", "Recognition moments"],
    milestone: "Milestones unlocked",
    achievement: "You set a new standard for yourself.",
  },
  {
    id: "connect",
    number: "06",
    title: "CONNECT",
    description: "Meet seniors, alumni and the wider community.",
    activities: ["Alumni talks", "Peer support", "Networking moments"],
    milestone: "Connections made",
    achievement: "Your network grew with SAIT.",
  },
  {
    id: "leave-mark",
    number: "07",
    title: "LEAVE YOUR MARK",
    description: "Contribute something the next student can inherit.",
    activities: ["Leadership", "Mentorship", "Community contribution"],
    milestone: "Legacy contribution",
    achievement: "You created something lasting.",
  },
];

export const completedStageIds: JourneyStageKey[] = ["join", "learn", "participate"];
export const currentStageId: JourneyStageKey = "build";
