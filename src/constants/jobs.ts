import salesken from "../assets/salesken/salesken.png";
import bliveCover from "../assets/blive/bliveCover.png";

export interface JobData {
  imgLink: string;
  jobTitle: string;
  companyName: string;
  desc: string;
  linkTo: string;
}

// Add new job data here
export const jobsData: JobData[] = [
  {
    imgLink: salesken,
    jobTitle: "Product Designer - Native Application Redesign",
    companyName: "Salesken.ai",
    desc: "Led competitive research and designed user-focused interfaces for a B2B SaaS sales intelligence platform at Salesken.ai, streamlining workflows with AI-driven tools and insights.",
    linkTo: "/salesken",
  },
  {
    imgLink: bliveCover,
    jobTitle: "UX Intern - Application Redesign",
    companyName: "BLive: Home of EVs",
    desc: "Conducted market analysis, documented trends, and designed wireframes for BLive's B2C Ezy App, improving the user experience of a subscription-based EV rental platform.",
    linkTo: "/blive",
  },
];
