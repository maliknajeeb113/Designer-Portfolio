// Content for the EZY rider app (B:Live) case study: copy, imagery and the data the page
// renders. Kept out of the page component so the prose can be edited without
// touching layout code (and so the page isn't buried under asset imports).
import bliveIcon from "../assets/blive-ezy/blive-icon.svg";
import heroImg from "../assets/blive-ezy/hero.webp";
import competitorZypp from "../assets/blive-ezy/competitor-zypp.webp";
import competitorBounce from "../assets/blive-ezy/competitor-bounce.webp";
import competitorHala from "../assets/blive-ezy/competitor-hala.webp";
import competitorYulu from "../assets/blive-ezy/competitor-yulu.webp";
import competitorElectricV from "../assets/blive-ezy/competitor-electric-v.webp";
import ongroundResearchImg from "../assets/blive-ezy/onground-research.webp";
import researchBoardImg from "../assets/blive-ezy/research-board.webp";
import scopingUserStoryImg from "../assets/blive-ezy/scoping-user-story.webp";
import beatDay1Img from "../assets/blive-ezy/beat-day1.webp";
import beatWeek1Img from "../assets/blive-ezy/beat-week1.webp";
import beatWeek3Img from "../assets/blive-ezy/beat-week3.webp";
import riderOnboardingImg from "../assets/blive-ezy/rider-onboarding.webp";
import riderPayoutImg from "../assets/blive-ezy/rider-payout.webp";
import riderSupportImg from "../assets/blive-ezy/rider-support.webp";
import designSystemImg from "../assets/blive-ezy/design-system.webp";

// NOTE: prose below is transcribed from Figma — the client edits case-study copy
// by hand. The placeholder phone mockups in the timeline are intentionally left
// out for now (they're not final screens); the story beats carry the section.

export const chips = ["B2C App", "UX Research", "Designer", "0→1 Product"];

export const team = [
  { name: "Avni Garg (Me)", role: "Product Designer" },
  { name: "Rohith Paul", role: "Lead Product Designer" },
  { name: "Sneha Jha", role: "Associate Product Manager" },
  { name: "Divyanshu", role: "Frontend Developer" },
];

// A rider's first week, beat by beat — each drop-off point paired with the
// behavioural principle behind it (name → definition → how it applied here).
export const timeline = [
  {
    when: "Day 0",
    title: "Before he even signs up",
    body: "Before downloading EZY, he checks what a few options charge upfront. EZY's security deposit is higher than what Zypp Electric asks for, and he isn't sure he'll get it back if he stops riding.",
    quote: null,
    image: null,
    principle: "Anchoring",
    definition:
      "People judge whether a cost is fair by comparing it to the first reference point they see, not in isolation.",
    application:
      "A higher deposit than a known competitor, with no clarity on refunds, makes EZY feel like the riskier choice before he's even tried it.",
  },
  {
    when: "Day 1",
    title: "Signing up",
    body: "A rider downloads EZY to start delivering. He fills in his phone number, gets an OTP, and lands on a long onboarding list, name, address, bank account, Aadhar, PAN, driving license, all typed in by hand.",
    quote: "Itna sab bharna padega? Baad mein karta hoon…",
    image: beatDay1Img,
    principle: "Cognitive Load",
    definition:
      "The total effort it takes to complete and understand a task. The less effort, the more people finish it.",
    application:
      "Every hand-typed field is one more reason to close the app “for later.” 10 out of 20 riders never made it past this point.",
  },
  {
    when: "Week 1",
    title: "First payout",
    body: "A rider who pushes through starts working. At week's end he opens the app to check his earnings and finds numbers and categories, but no single clear answer to “how much do I have?” Some weeks the payout doesn't land on the day he expects, or his account gets blocked, with no explanation of why.",
    quote: "Bas final amount batao, itna detail nahi chahiye.",
    image: beatWeek1Img,
    principle: "Cognitive Load - earnings edition",
    definition:
      "Data existing isn't the same as data being usable. If understanding a number takes effort, people give up before getting their answer.",
    application:
      "The payout data already existed; it just wasn't shown as an answer.",
  },
  {
    when: "Week 2",
    title: "Trying to earn more",
    body: "He notices other riders earn more, with no idea why, no in-app guidance on the best time to work, or how close he is to an incentive.",
    quote: "Aur zyada kama sakta hoon, but kaise?",
    image: null,
    principle: "Missing Feedback Loop",
    definition:
      "People stay motivated when a system shows how close they are to a goal. Silence reads as “nothing I do here matters.”",
    application:
      "No visible progress toward an incentive gave him no reason to try harder or open the app.",
  },
  {
    when: "Week 2",
    title: "The orders that skip him",
    body: "He notices the highest-paying orders never seem to come his way. He asks support, and is told to “change dark stores”, advice that doesn't hold up against how his day actually works.",
    quote: "App se help milti hi nahi.",
    image: null,
    principle: "Perceived Fairness",
    definition:
      "People judge a system not just by their outcome, but by whether the process that produced it felt fair.",
    application:
      "Whether or not the allocation was actually biased, it read as unfair, and that belief alone is enough to push a rider toward another platform.",
  },
  {
    when: "Week 3",
    title: "Something goes wrong",
    body: "His vehicle has an issue. He looks for help in the app, doesn't find a clear way to raise it, and calls the number he has saved instead. The call isn't picked up.",
    quote: "App se help milti hi nahi.",
    image: beatWeek3Img,
    principle: "Peak-End Rule",
    definition:
      "People judge an experience mostly by its most intense moment and how it ends, not the average of everything before it.",
    application:
      "One unanswered call in a real moment of need outweighs every smooth screen that came before it.",
  },
];

// Competitor apps benchmarked, rendered as a row of app icons.
export const competitorLogos = [
  competitorZypp,
  competitorBounce,
  competitorHala,
  competitorYulu,
  competitorElectricV,
];

// Research ran on two parallel tracks.
export const researchTracks = [
  {
    title: "Competitive research + in-house interviews",
    logos: competitorLogos,
    icon: null,
    body: (
      <p >
        <span className="text-ink">5 sessions, 10 riders each</span>, a mix of active and lapsed users. Alongside this,{" "}
        <span className="text-ink">a direct benchmark against</span> Zypp Electric, Bounce Daily, Halo, Yulu, and Eveez, plus
        a review of what riders were already saying about <span className="text-ink">EZY on the Play Store.</span>
      </p>
    ),
  },
  {
    title: "On-ground research",
    logos: null,
    icon: ongroundResearchImg,
    body: (
      <p>
        <span className="text-ink">Contextual inquiry with 3 riders,</span> done alongside our collections team, who visit
        riders directly. I took part in this in person, seeing where the{" "}
        <span className="text-ink">app's job was quietly being done by a person instead.</span>
      </p>
    ),
  },
];

// Scoped action plan — 5 workstreams; number colour cycles the brand accents.
export const actionSteps = [
  {
    num: "01",
    label: "Onboarding redesign",
    text: "Replace manual eKYC and detail entry with auto-fetched data via 3rd-party integration, so riders don't drop off before they even start using the app.",
    color: "text-blue-600",
  },
  {
    num: "02",
    label: "Payout visibility",
    text: "Give riders a clear, simple view of what they earned, directly inside the app.",
    color: "text-brand-green",
  },
  {
    num: "03",
    label: "Ticket support",
    text: "A basic in-app support flow, with a fuller call-first, escalation-based version scoped for later.",
    color: "text-violet-600",
  },
  {
    num: "04",
    label: "Vehicle redeployment flow",
    text: "Designed and validated with riders, scoped for a later phase.",
    color: "text-blue-600",
  },
  {
    num: "05",
    label: "More rental plan options",
    text: "Designed and validated with riders, scoped for a later phase.",
    color: "text-brand-green",
  },
];

// Before → after, told through the same rider from the story above. `status` is a
// small pill (green Live / blue Partial); `image` is a screen swapped in later.
export const riderStories = [
  {
    title: "Onboarding",
    status: "Live",
    statusClass: "bg-brand-green/10 text-brand-green",
    before:
      "Types in name, address, bank account, Aadhar, PAN, license by hand. Gives up around step two.",
    after:
      "Enters his phone number, most details are pulled in automatically. He just reviews and confirms.",
    detail: "Drop-off: 10/20 → 4/20",
    image: riderOnboardingImg as string | null,
  },
  {
    title: "Payout visibility",
    status: "Live",
    statusClass: "bg-brand-green/10 text-brand-green",
    before:
      "Opens the app looking for one number, and instead finds payslips and line items to piece together.",
    after:
      "Sees exactly what he earned, right away, plus a status on every payout: Processing, Blocked, or Paid.",
    detail: "Top reason riders were leaving is addressed",
    image: riderPayoutImg as string | null,
  },
  {
    title: "Support",
    status: "Partial",
    statusClass: "bg-blue-500/10 text-blue-600",
    before: "Vehicle has an issue. He calls the saved number. Nobody picks up.",
    after: "Raises a ticket in-app instead, and sees it logged with a status; someone owns it.",
    detail: "A first support loop is in riders' hands",
    image: riderSupportImg as string | null,
  },
];

// Where research pushed back on assumptions — each with a status badge + prose.
export const tradeoffs = [
  {
    badge: "Shipped",
    badgeClass: "bg-emerald-50 text-emerald-700",
    title: "Payout visibility vs. hiding deductions",
    body: (
      <>
      <p className="text-ink-faint">
        <span className="text-ink">Stakeholders wanted to hide full payout details from riders,</span> worried that showing the numbers might cause riders to leave the platform. <span className="text-ink">Research said the opposite: riders were already leaving because they had no visibility into what they earned.</span>
      </p>
        <p className="mt-4 text-ink-faint">
          I pushed back with the rider research directly, the risk wasn't showing riders their payout, it was continuing to hide it.
        </p>
        <p className="mt-4 text-ink">
        Full payout visibility went live. The one compromise: detailed deduction breakdowns still aren't shown; riders see what they earned, not a line-by-line "why."
      </p>
      </>
    ),
  },
  {
    badge: "Designed but development on hold",
    badgeClass: "bg-amber-50 text-amber-700",
    title: "Call-first support with escalation logic",
    body: (
      <>
        <p className="text-ink-faint">
          Support was one of the clearest rider complaints; calls went unanswered, with no reliable
          way to get help. <span className="text-ink">I designed a 1-tap, call-first support entry point with escalation logic for unresolved
          issues.</span> A basic ticketing flow shipped, but <span className="text-ink">development on the fuller version hasn't started yet.</span>
        </p>
      </>
    ),
  },
  {
    badge: "Designed and validated, on hold",
    badgeClass: "bg-amber-50 text-amber-700",
    title: "Redeployment flow & more rental plans",
    body: (
      <p className="text-ink-faint">
        Riders asked for an easier way to redeploy vehicles and more flexibility in rental plan
        options. Both were designed and tested with riders, but development on this part of the
        revamp is currently paused for business reasons, not because the need wasn't real.
      </p>
    ),
  },
];

export const outcomeStats = [
  { value: "20%", label: "Onboarding drop-off, before → after" },
  { value: "4/20", label: "Riders drop off now, down from 10/20" },
  { value: "Live", label: "Full payout visibility, shipped." },
];

// Imagery the page renders directly (kept here so every asset
// path for this case study lives in one file).
export { bliveIcon, heroImg, researchBoardImg, scopingUserStoryImg, designSystemImg };
