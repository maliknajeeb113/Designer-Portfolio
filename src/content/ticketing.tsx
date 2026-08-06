// Content for the B:Live ticketing platform case study: copy, imagery and the data the page
// renders. Kept out of the page component so the prose can be edited without
// touching layout code (and so the page isn't buried under asset imports).
import { type ReactNode } from "react";
import bliveIcon from "../assets/blive/blive-icon.svg";
import warningIcon from "../assets/blive/warning.svg";
import ticketThumbnail from "../assets/blive/ticket-thumbnail.webp";
import oldTicketing from "../assets/blive/old-ticketing.webp";
import jtbdImg from "../assets/blive/jtbd.webp";
import researchImg from "../assets/blive/research.webp";
import iterationsImg from "../assets/blive/iterations.webp";
import liveChatImg from "../assets/blive/tradeoffs/live-chat.webp";
import kanbanImg from "../assets/blive/tradeoffs/kanban-vs-table.webp";
import dsBeforeImg from "../assets/blive/design-system/before.webp";
import dsAfterImg from "../assets/blive/design-system/after.webp";
import adminSticker from "../assets/blive/personas/admin.webp";
import riderSticker from "../assets/blive/personas/rider.webp";
import dmSticker from "../assets/blive/personas/dm-manager.webp";
import recoverySticker from "../assets/blive/personas/recovery-manager.webp";
import riderCard from "../assets/blive/scoping/rider.webp";
import adminCard from "../assets/blive/scoping/admin.webp";
import supportCard from "../assets/blive/scoping/support-team.webp";

// NOTE: prose below is placeholder/first-pass copy — the client edits case-study
// text by hand. Stickers use emojis for now; real graphics come later.

export const chips = ["Internal Dashboard","UX Research","Sole Design","0→1 Product"];

export const team = [
  { name: "Avni Garg (Me)", role: "Product Designer" },
  { name: "Prasenjit", role: "AVP of Product" },
  { name: "Sneha Jha", role: "Associate Product Manager" },
  { name: "Govind", role: "Senior Developer" },
  { name: "Divyanshu", role: "Senior Frontend Developer" },
];

export const problemCards = [
  { title: "Rider contact through WhatsApp", text: "Riders called or WhatsApp'd whoever they personally knew at B:Live." },
  { title: "Using spreadsheets for records", text: "Issues were noted in spreadsheets, forwarded manually, or simply forgotten." },
  { title: "No accountability", text: "Zero digital record, no history, no status." },
  { title: "No assigned user", text: "Most issues died for one reason: no ticket was ever assigned to anyone." },
];

// Each persona carries its own colour family: `bg` (card, lightest), `pill`
// (a darker shade of the same hue for the Needs pill) and `text` (darkest, for
// the pill label + the needs line).
export const personas = [
  { name: "Admin", role: "Oversees the whole support operation.", needs: "Needs to change routing rules (categories, departments, reasons) themselves, and reassign stuck tickets with the change always logged.", bg: "bg-emerald-50/70", pill: "bg-emerald-100", text: "text-emerald-800", img: adminSticker },
  { name: "Rider", role: "Raises issues about payments, vehicles, documents. Low patience, on the road.", needs: "Needs a simple way to raise an issue and see it's being handled, without calling someone they know personally.", bg: "bg-blue-50/70", pill: "bg-blue-100", text: "text-blue-800", img: riderSticker },
  { name: "DM Manager", role: "Personally allocated to specific riders, who call them for everything.", needs: "Needs their own riders' tickets to reach them directly, with enough context to respond like someone who already knows them.", bg: "bg-amber-50/70", pill: "bg-amber-100", text: "text-amber-800", img: dmSticker },
  { name: "Recovery Manager", role: "Oversees the whole support operation.", needs: "Needs immediate visibility into dues-linked tickets (immobilization, payment, blocked closures) with an unambiguous payment-status reason on close.", bg: "bg-brand-pink-light/40", pill: "bg-brand-pink-light", text: "text-brand-pink", img: recoverySticker },
];

// Breadcrumb-style steps. `color` cycles the existing brand accents for the
// step number (grey `label` on top, dark `text` statement below).
export const actionCards = [
  { num: "01", label: "Ticket Master", text: "Admins can configure categories, link them to departments, and define resolution reasons, so tickets are automatically sent to the right team.", color: "text-brand-green" },
  { num: "02", label: "Ticket Management", text: "The operational workspace with a strict lifecycle and full audit logs.", color: "text-brand-pink" },
  { num: "03", label: "Automated assignment engine", text: "Category → Department → Team member, with city-based segregation and a DM exception.", color: "text-brand-amber" },
  { num: "04", label: "Rider-facing Help & Support", text: "In the EZY app, with FAQ deflection before ticket creation.", color: "text-brand-green" },
  { num: "05", label: "User Management", text: "Because assignment logic needs to know who works where, in which city, in which role.", color: "text-brand-green" },
];

// Scoping personas — exported as full illustrated cards from Figma. On desktop
// they sit in a staggered collage; positions/sizes are percentages of the
// original 1154×923 Figma frame so the layout scales with the container.
export const personaCards = [
  { src: riderCard, alt: "Rider (Delivery Executives) — user stories", left: "0%", top: "3.47%", width: "48.87%" },
  { src: adminCard, alt: "Admin (Business Owner) — user stories", left: "52.34%", top: "0%", width: "47.66%" },
  { src: supportCard, alt: "Support Team — user stories", left: "0%", top: "53.09%", width: "60.66%" },
];

// Emphasis inside trade-off body copy — darker + heavier against the muted text.
export const Em = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

// Design trade-offs. `status` is a small coloured pill; colours reuse the persona
// hue families (emerald / blue / amber / brand-pink). Items 1 & 4 are full-width
// text; the two middle ones carry an image so the run reads balanced.
export const tradeoffs = [
  {
    status: "Shipped as proposed",
    statusClass: "bg-emerald-50 text-emerald-700",
    title: "Auto-assignment vs. manual triage.",
    hasImage: false,
    body: (
      <>
        <p>
          Early scoping leaned toward manual assignment by an admin. But a Deployment Manager told
          me riders call him, and only him, for everything; manual triage would just digitize the
          old bottleneck.
        </p>
        <p className="text-ink">
          I made the case that assignment had to be automatic and rule-based: category → department
          → round-robin, with a DM exception so riders with a trusted contact keep them.
        </p>
        <p>
          This is my favourite decision in the project; the system optimizes for load balance by
          default, but yields to relationship continuity when it exists.
        </p>
      </>
    ),
  },
  {
    status: "Deferred to comments log",
    statusClass: "bg-blue-50 text-blue-700",
    title: "Live chat inside tickets.",
    hasImage: true,
    image: liveChatImg,
    body: (
      <>
        <p>
          I proposed a live chat between the ticket raiser and assignee; otherwise clarifying
          conversations would leak right back to WhatsApp, recreating the exact problem we were
          solving. </p>
          <p>Engineering couldn&rsquo;t commit to real-time chat within the 2-month window, so
          v1 shipped with a <span className=" text-ink">comments section + full activity log</span> instead, keeping chat on
          the roadmap.
        </p>
      </>
    ),
  },
  {
    status: "Users overruled me",
    statusClass: "bg-amber-50 text-amber-700",
    title: "Kanban vs. table view",
    hasImage: true,
    image: kanbanImg,
    body: (
      <>
        <p>
          I explored a kanban board; visually, four lifecycle stages map beautifully to columns.
          But testing with actual users in our weekly sessions was clear: these are operations
          people who live in spreadsheets. They wanted dense, scannable rows, and didn&rsquo;t want
          to spend a minute longer in this tool than necessary. Engineering agreed, for effort
          reasons.
        </p>
        <p className="text-ink">
          Lesson: a view that matches the user&rsquo;s mental model beats a view that matches the
          designer&rsquo;s.
        </p>
        <p>
          Shipped: a table view with layered filters, date range, designation, category,
          department, and dependent assignee filtering.
        </p>
      </>
    ),
  },
  {
    status: "Roadmapped, with AI",
    statusClass: "bg-brand-pink-light/50 text-brand-pink",
    title: "Ticket criticality / priority",
    hasImage: false,
    body: (
      <>
        <p>
          An immobilized vehicle and a document query aren&rsquo;t the same emergency; I proposed a
          criticality level so urgent tickets wouldn&rsquo;t just sit in round-robin order. Both PM
          and engineering pushed back: with the assignment engine, city rules, and the DM exception
          already in scope, priority logic (and the SLA behavior it implies) was too much for the
          timeline.
        </p>
        <p>
          We <span className="text-ink">agreed to land it in the next version</span>, alongside{" "}
          <span className="text-ink">AI integration, auto-classifying tickets, inferring criticality from descriptions,</span>{" "}
          and eventually suggesting resolutions from historical data. I lost the v1 battle, but the
          proposal shaped the roadmap.
        </p>
      </>
    ),
  },
];

export const outcomeStats = [
  { value: "70%", label: "Ticket resolution time, post-launch." },
  { value: "15min", label: "Average acknowledgment time." },
  { value: "90%", label: "Tickets auto-routed to the right team." },
  { value: "4/5+", label: "Post-resolution rider rating." },
  { value: "100%", label: "Category coverage, zero orphaned tickets." },
];

// Imagery the page renders directly (kept here so every asset
// path for this case study lives in one file).
export { bliveIcon, warningIcon, ticketThumbnail, oldTicketing, jtbdImg, researchImg, iterationsImg, dsBeforeImg, dsAfterImg };
