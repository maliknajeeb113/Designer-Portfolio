import ticketThumbnail from "../assets/blive/ticket-thumbnail.png";
import ezyHomeCard from "../assets/blive-ezy/home-card.png";
import saleskenBanner from "../assets/salesken/salesken-banner.png";
import bliveIcon from "../assets/blive/blive-icon.svg";
import saleskenIcon from "../assets/salesken/salesken-icon.svg";

export interface CaseStudyStat {
  value: string;
  label: string;
}

export interface JobData {
  // Optional pill shown above the headline (e.g. "Case Study 3").
  label?: string;
  // Headline split so the `highlight` word can render in the script accent.
  headline: { pre: string; highlight: string; post: string };
  company: string; // meta line — company
  period: string; // meta line — period
  icon: string; // company logo shown before the meta line
  stats: CaseStudyStat[];
  image: string; // dashboard screenshot shown in the macOS-window frame
  urlBar: string; // text shown in the browser-frame URL bar
  linkTo: string; // case-study page link — intentionally EMPTY for now
}

export const jobsData: JobData[] = [
  { label: "Case Study 1",
    headline: { pre: "From WhatsApp Chaos to a ", highlight: "Ticketing", post: " Platform" },
    company: "B:LIVE, EV MOBILITY PLATFORM",
    period: "PRESENT",
    icon: bliveIcon,
    stats: [
      { value: "70%", label: "Faster ticket resolution" },
      { value: "95%", label: "Auto-assignment accuracy" },
      { value: "15min", label: "To acknowledgment" },
      { value: "0", label: "Orphaned tickets" },
    ],
    image: ticketThumbnail,
    urlBar: "blive.co.in",
    linkTo: "/ticketing",
  },
  {
    label: "Case Study 2",
    headline: { pre: "From a one-time app to one riders actually ", highlight: "trust.", post: "" },
    company: "B:LIVE, EV MOBILITY PLATFORM",
    period: "PRESENT",
    icon: bliveIcon,
    stats: [
      { value: "50%→20%", label: "Onboarding drop-off, before → after" },
      { value: "4/20", label: "Riders drop off now, down from 10/20" },
      { value: "10,000+", label: "User base" },
      { value: "0→1", label: "Design system, built from scratch" },
    ],
    image: ezyHomeCard,
    urlBar: "blive.co.in",
    linkTo: "/bLive",
  },
  {
    label: "Case Study 3",
    headline: { pre: "Giving sales reps something to say, ", highlight: "mid-call", post: "" },
    company: "SALESKEN.AI",
    period: "AUG 2025 - JAN 2026",
    icon: saleskenIcon,
    stats: [
      { value: "1st", label: "End-to-end product I owned solo" },
      { value: "6", label: "Competitor platforms benchmarked" },
      { value: "3", label: "Connected surfaces shipped" },
      { value: "+200", label: "Used by customers" },
    ],
    image: saleskenBanner,
    urlBar: "www.salesken.ai",
    linkTo: "/salesken",
  },
];
