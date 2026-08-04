import bliveIcon from "../assets/blive/blive-icon.png";
import saleskenIcon from "../assets/salesken/salesken-icon.svg";

export interface WorkExperience {
  id: number;
  company: string;
  period: string;
  title: string;
  description: string; // used by the (not-yet-migrated) About page; not shown on the home list
  icon?: string; // company logo shown before the company on the home experience list
}

// Work experience data (aligned to the v2 home design).
export const workExperienceData: WorkExperience[] = [
  {
    id: 1,
    company: "B:Live, Ev Mobility Platform",
    period: "Jan 2025 - Present",
    title: "Product Designer",
    description:
      "Designing B2B and B2C SaaS solutions for an EV rental and fleet management platform, focusing on seamless user journeys and scalable design systems.",
    icon: bliveIcon,
  },
  {
    id: 2,
    company: "Salesken.ai",
    period: "Aug 2024 - Jan 2025",
    title: "UX/UI Design Intern",
    description:
      "Designed intuitive interfaces for a B2B AI-powered sales intelligence platform, optimizing workflows and enhancing data visualization.",
    icon: saleskenIcon,
  },
  {
    id: 3,
    company: "B:Live, Ev Mobility Platform",
    period: "Dec 2023 - Apr 2024",
    title: "UX/UI Design Intern",
    description:
      "Redesigned the B2C Ezy App, an EV rental platform for delivery professionals, improving usability and the overall subscription experience.",
    icon: bliveIcon,
  },
];
