import salesken from "../assets/salesken/salesken.png";
// import brandsharkCover from "../assets/brandshark/brandsharkCover.png";
// import tanishqCover from "../assets/portfolio-project/tanishqCover.png";
import bliveCover from "../assets/blive/bliveCover.png";

// add new job data here
export const jobsData = [
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
    desc: "Conducted market analysis, documented trends, and designed wireframes for BLive’s B2C Ezy App, improving the user experience of a subscription-based EV rental platform.",
    linkTo: "/blive",
  },
  // {
  //   imgLink: tanishqCover,
  //   jobTitle: "UX Case Study - Application Redesign",
  //   companyName: "Portfolio Design",
  //   desc: "Created a user-friendly website tailored to clients needs, providing a centralized platform to showcase their work, skills, and accomplishments efficiently, facilitating effective presentation of their portfolio.",
  //   linkTo: "/portfolio-project",
  // },
  // {
  //   imgLink: brandsharkCover,
  //   jobTitle: "Marketing Website Redesign",
  //   companyName: "Marketing Website Redesign",
  //   desc: "Crafted a sleek website showcasing Brand Shark's portfolio and expertise in video production, capturing attention and engaging potential clients effectively.",
  //   linkTo: "/brandshark",
  // },
];

// Work experience data
export const workExperienceData = [
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
