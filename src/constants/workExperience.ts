export interface WorkExperience {
  id: number;
  company: string;
  period: string;
  title: string;
  description: string;
}

// Work experience data
export const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    company: "BLive: Home of EVs",
    period: "Jan 2025 - Present",
    title: "Product Designer",
    description: "Designing B2B and B2C SaaS solutions for an EV rental and fleet management platform, focusing on seamless user journeys and scalable design systems.",
  },
  {
    id: 2,
    company: "Salesken",
    period: "Aug 2024 - Jan 2025",
    title: "Product Designer",
    description: "Designed intuitive interfaces for a B2B AI-powered sales intelligence platform, optimizing workflows and enhancing data visualization.",
  },
  {
    id: 3,
    company: "BLive: Home of EVs",
    period: "Dec 2023 - Mar 2024",
    title: "UX Design Intern",
    description: "Redesigned the B2C Ezy App — an EV rental platform for delivery professionals — improving usability and the overall subscription experience.",
  },
];
