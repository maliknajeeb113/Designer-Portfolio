// Content for the Salesken Co-Browser case study: copy, imagery and the data the page
// renders. Kept out of the page component so the prose can be edited without
// touching layout code (and so the page isn't buried under asset imports).
import { type ReactNode } from "react";
import saleskenIcon from "../assets/salesken/salesken-icon.svg";
import heroDashboard from "../assets/salesken/hero-dashboard.webp";
import problemImg from "../assets/salesken/problem.webp";
import researchCardImg from "../assets/salesken/research-card.webp";
import researchBoardImg from "../assets/salesken/research-board.webp";
import jtbdImg from "../assets/salesken/jtbd.webp";
import howTwoSidesImg from "../assets/salesken/how-two-sides.webp";
import scopingAgentImg from "../assets/salesken/scoping-agent.webp";
import scopingCustomerImg from "../assets/salesken/scoping-customer.webp";
import iterationsImg from "../assets/salesken/iterations.webp";
import featureSmartTodoImg from "../assets/salesken/feature-smart-todo.webp";
import featureAiEmailImg from "../assets/salesken/feature-ai-email.webp";
import personaCustomerImg from "../assets/salesken/persona-customer.webp";
import interviewSticker from "../assets/salesken/interview-sticker.webp";
import personaAgentImg from "../assets/salesken/persona-agent.webp";
import competitor1 from "../assets/salesken/competitors/competitor-1.webp";
import competitor2 from "../assets/salesken/competitors/competitor-2.webp";
import competitor3 from "../assets/salesken/competitors/competitor-3.webp";
import competitor4 from "../assets/salesken/competitors/competitor-4.webp";
import competitor5 from "../assets/salesken/competitors/competitor-5.webp";

export const competitorLogos = [competitor1, competitor2, competitor3, competitor4, competitor5];

// NOTE: prose below is transcribed from Figma — the client edits case-study copy
// by hand. Decorative stickers/emojis from the design are intentionally skipped.

export const chips = ["AI Native App", "Sole Designer", "UX Research", "0→1 Product"];

export const team = [
  { name: "Avni Garg (Me)", role: "Product Designer" },
  { name: "Raj Singh", role: "Senior Backend Developer" },
  { name: "Yogesh", role: "Senior Frontend Developer" },
];

// Emphasis inside body copy — darker + heavier against the muted text.
export const Em = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

// Two-sided product — one card per side. Each carries its own colour family.
export const personas = [
  {
    name: "Customer (Demo Registrant)",
    bg: "bg-blue-50/70",
    pill: "bg-blue-100",
    text: "text-blue-800",
    img: personaCustomerImg,
    body: (
      <>
        Registers for a product demo on a client&rsquo;s site, e.g. a policy demo on Policy Bazaar,
        then joins a live session and needs to follow the walkthrough clearly, with zero technical
        setup on their end.
      </>
    ),
  },
  {
    name: "Sales Agent",
    bg: "bg-emerald-50/70",
    pill: "bg-emerald-100",
    text: "text-emerald-800",
    img: personaAgentImg,
    body: (
      <>
        Picks up the session, shares their screen, and needs to see exactly where the customer is
        looking or pointing so they can respond to what the customer&rsquo;s actually asking about,
        in real time.
      </>
    ),
  },
];

// Research ran on two parallel tracks.
export const researchTracks = [
  {
    title: "Competitive teardown",
    logos: competitorLogos,
    sticker: null,
    body: (
      <p>
        <span className="text-ink">2 weeks. Watched 10 product-walkthrough videos</span> from competing platforms, used <span className="text-ink">AI
        transcription to pull structured feature notes</span> from each, and built a start-to-finish
        comparison in Notion.
      </p>
    ),
  },
  {
    title: "Primary interviews",
    logos: null,
    sticker: interviewSticker,
    body: (
      <p>
        <span className="text-ink">Interviewed sales reps at other companies</span> directly about <span className="text-ink">call volume, daily workflow,</span> and
        where they got stuck; since they weren&rsquo;t Salesken customers, this stayed independent
        of any one product&rsquo;s framing.
      </p>
    ),
  },
];

// Breadcrumb-style steps: three connected surfaces. `color` cycles the brand accents.
export const actionSteps = [
  {
    num: "01",
    label: "Co-browsing session",
    text: "The customer registers for a demo, the agent picks it up, and the two share one screen: full view for the customer, cursor-only visibility for the agent.",
    color: "text-brand-green",
  },
  {
    num: "02",
    label: "In-session assistance",
    text: "A live panel for the agent with product and plan details plus suggested talking points, turning into a summary once the session ends.",
    color: "text-brand-pink",
  },
  {
    num: "03",
    label: "Live agent monitoring",
    text: "An ops-facing view of every agent's status, lead, and session duration, so incoming demo requests always land on someone available.",
    color: "text-brand-amber",
  },
];

// Post-scope additions from stakeholder review. Each has a text column + a screen.
export const features = [
  {
    badge: "Review from Stakeholder",
    title: "Stakeholder Review",
    image: featureSmartTodoImg,
    body: (
      <>
        <p><span className="text-ink">Two asks</span> came out of the same review. First, agents were juggling a full day of Google
        Calendar meetings with no way to tell customer sessions apart from internal ones at a glance,
        so a <span className="text-ink">&ldquo;Smart To-Do&rdquo;</span> surface was added that pulls the agent&rsquo;s
        calendar and separates upcoming customer meetings from internal meetings automatically.</p>
        <p>Second, stakeholders wanted agents to walk into a call already knowing who they&rsquo;re
        talking to, so a lookup tab was added where the agent can check a <span className="text-ink">customer&rsquo;s email,
        LinkedIn, and deal history before the call, entirely at their own discretion.</span></p>
      </>
    ),
  },
  {
    badge: "Review from Stakeholder",
    title: "Making the AI write, not just surface.",
    image: featureAiEmailImg,
    body: (
      <>
        <p>
          The <span className="text-ink">second round of feedback</span> was more specific: follow-up <span className="text-ink">emails needed an AI assist</span> built
          in, the same way ChatGPT can take a rough draft and turn it into something professional on
          request. 
        </p>
        <p>
          So the panel&rsquo;s email composer got that same <span className="text-ink">rewrite step</span>, the
          agent writes loosely, the AI tightens tone and structure before it goes out, rather than
          leaving follow-up quality to whatever the agent had time to polish.
        </p>
      </>
    ),
  },
];

export const outcomeStats = [
  { value: "1st", label: "End-to-end product I owned solo" },
  { value: "6", label: "Competitor platforms benchmarked" },
  { value: "3", label: "Connected surfaces shipped" },
  { value: "+200", label: "Used by customers" },
];

// Imagery the page renders directly (kept here so every asset
// path for this case study lives in one file).
export { saleskenIcon, heroDashboard, problemImg, researchCardImg, researchBoardImg, jtbdImg, howTwoSidesImg, scopingAgentImg, scopingCustomerImg, iterationsImg };
