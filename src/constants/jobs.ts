import ticketThumbnail from "../assets/blive/ticket-thumbnail.png";
import assetThumbnail from "../assets/blive/asset-thumbnail.png";
import saleskenThumbnail from "../assets/salesken/salesken-thumbnail.png";
import bliveIcon from "../assets/blive/blive-icon.png";
import saleskenIcon from "../assets/salesken/salesken-icon.png";

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
    company: "B:LIVE - EV MOBILITY PLATFORM",
    period: "PRESENT",
    icon: bliveIcon,
    stats: [
      { value: "70%", label: "Faster ticket resolution" },
      { value: "95%", label: "Auto-assignment accuracy" },
      { value: "15min", label: "To acknowledgment" },
      { value: "0", label: "Orphaned tickets" },
    ],
    image: ticketThumbnail,
    urlBar: "finance-template.aligoal.com",
    linkTo: "/ticketing",
  },
  { label: "Case Study 2",
    headline: { pre: "From Google Sheets to a ", highlight: "Asset", post: " Management." },
    company: "B:LIVE - EV MOBILITY PLATFORM",
    period: "PRESENT",
    icon: bliveIcon,
    stats: [
      { value: "1,790", label: "Live vehicles on platform" },
      { value: "45", label: "Vehicle models onboarded" },
      { value: "35→55", label: "Fleet operators (B2B growth)" },
      { value: "Reduce", label: "Out-of-city incidents, significantly reduced" },
    ],
    image: assetThumbnail,
    urlBar: "finance-template.aligoal.com",
    linkTo: "",
  },
  {
    label: "Case Study 3",
    headline: { pre: "Support that ", highlight: "actually", post: " resolves things." },
    company: "SALESKEN.AI",
    period: "AUG 2025 - JAN 2026",
    icon: saleskenIcon,
    stats: [
      { value: "72%", label: "Faster reports" },
      { value: "52%", label: "Lower spend" },
      { value: "45%", label: "Cleaner data" },
    ],
    image: saleskenThumbnail,
    urlBar: "finance-template.aligoal.com",
    linkTo: "",
  },
];
