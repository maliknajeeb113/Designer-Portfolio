import { Fragment } from "react";
import { FiStar, FiChevronsRight, FiCheckCircle, FiImage } from "react-icons/fi";
import PageShell from "../components/PageShell";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import bliveIcon from "../assets/blive-ezy/blive-icon.svg";
import heroImg from "../assets/blive-ezy/hero.png";
import competitorZypp from "../assets/blive-ezy/competitor-zypp.png";
import competitorBounce from "../assets/blive-ezy/competitor-bounce.png";
import competitorHala from "../assets/blive-ezy/competitor-hala.png";
import competitorYulu from "../assets/blive-ezy/competitor-yulu.png";
import competitorElectricV from "../assets/blive-ezy/competitor-electric-v.png";
import ongroundResearchImg from "../assets/blive-ezy/onground-research.png";
import researchBoardImg from "../assets/blive-ezy/research-board.png";
import scopingUserStoryImg from "../assets/blive-ezy/scoping-user-story.png";
import beatDay1Img from "../assets/blive-ezy/beat-day1.png";
import beatWeek1Img from "../assets/blive-ezy/beat-week1.png";
import beatWeek3Img from "../assets/blive-ezy/beat-week3.png";
import riderOnboardingImg from "../assets/blive-ezy/rider-onboarding.png";
import riderPayoutImg from "../assets/blive-ezy/rider-payout.png";
import riderSupportImg from "../assets/blive-ezy/rider-support.png";
import designSystemImg from "../assets/blive-ezy/design-system.png";

// NOTE: prose below is transcribed from Figma — the client edits case-study copy
// by hand. The placeholder phone mockups in the timeline are intentionally left
// out for now (they're not final screens); the story beats carry the section.

const chips = ["B2C App", "UX Research", "Designer", "0→1 Product"];

const team = [
  { name: "Avni Garg (Me)", role: "Product Designer" },
  { name: "Rohith Paul", role: "Lead Product Designer" },
  { name: "Sneha Jha", role: "Associate Product Manager" },
  { name: "Divyanshu", role: "Frontend Developer" },
];

// A rider's first week, beat by beat — each drop-off point paired with the
// behavioural principle behind it (name → definition → how it applied here).
const timeline = [
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
const competitorLogos = [
  competitorZypp,
  competitorBounce,
  competitorHala,
  competitorYulu,
  competitorElectricV,
];

// Research ran on two parallel tracks.
const researchTracks = [
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
const actionSteps = [
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
const riderStories = [
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
const tradeoffs = [
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

const outcomeStats = [
  { value: "20%", label: "Onboarding drop-off, before → after" },
  { value: "4/20", label: "Riders drop off now, down from 10/20" },
  { value: "Live", label: "Full payout visibility, shipped." },
];

const Ezy = () => {
  // Breadcrumb layout: >4 steps wrap to a 3-column grid (so 5 → 3 + 2).
  const stepCols = actionSteps.length > 4 ? 3 : Math.max(actionSteps.length, 1);

  return (
    <PageShell>
      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40">
        <Container>
          <h1 className="max-w-6xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            From a one-time app to one riders actually{" "}
            <span className="font-script text-[1.15em] text-brand-green">trust.</span>
          </h1>

          {/* meta line — company + period */}
          <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wide text-ink-faint">
            <img src={bliveIcon} alt="" className="h-6 w-6 shrink-0 rounded object-contain" />
            <span>B:Live - EV Mobility Platform</span>
            <span className="text-ink-faint/50">·</span>
            <span>2 MONTHS</span>
          </div>

          {/* chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md bg-ink/[0.05] px-2 py-1 text-xs font-medium text-ink-muted"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* hero — redesigned EZY dashboard, with ratings + store annotations */}
          <BrowserFrame url="blive.co.in" className="mt-12">
            <img src={heroImg} alt="The redesigned EZY rider app home screen" className="w-full" />
          </BrowserFrame>

          {/* about + team */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                About
              </span>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                I owned all research and design for this project, every user interview, every hub
                visit, and every screen. I worked with a senior designer on building the new design
                system, and partnered closely with the PM on what made it into scope. With a team
                this small, I wasn't just producing screens; I was the one deciding what riders
                actually needed, based on research I ran myself.
              </p>
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                Team
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {team.map((member) => (
                  <li key={member.name} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm font-medium text-ink">{member.name}</span>
                    <span className="text-right text-sm text-ink-faint">{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 1. WHO, WHY & WHAT ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="1" title="Who, Why & What" />

          {/* Problem */}
          <div className="mt-12 flex flex-col gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Problem</span>
            <p className="text-xl text-ink font-medium">An app riders needed once, then abandoned:</p>
            <p className="text-lg text-ink-faint">
              <span className="text-ink">Over 10,000 riders used EZY</span> for exactly two things: signing up, and checking
              their rental. After that, the app gave them no reason to come back, even though it held
              information they actually cared about.
            </p>
            <p className="mt-6 text-lg  text-ink">
              <span className="text-ink">A rider's first week with EZY</span>
              <span className="text-ink-muted">
                , the way it actually happened, moment by moment, with the psychology behind each
                drop-off point:
              </span>
            </p>
          </div>

          {/* Timeline — story beats */}
          <div className="mt-8 flex flex-col gap-5">
            {timeline.map((beat, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl border border-ink/[0.06] bg-ink/[0.02] p-7 sm:p-9"
              >
                <div
                  className={
                    beat.image ? "grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-stretch" : ""
                  }
                >
                  {/* text column — full width when there's no paired screen */}
                  <div>
                    <h3 className="font-display text-md font-medium text-ink">{beat.title}</h3>
                    <span className="mt-1 block text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                      {beat.when}
                    </span>
                    <p className="mt-4 text-base sm:text-lg text-ink">{beat.body}</p>
                    {beat.quote && (
                      <p className="mt-4 text-base font-medium italic text-blue-600">“{beat.quote}”</p>
                    )}
                    {/* behavioural principle */}
                    <div className="mt-6 rounded-r-lg border-l-[3px] border-red-400 bg-ink/[0.02] py-3 pl-5 pr-4 text-sm">
                      <p className="font-semibold text-ink">{beat.principle}</p>
                        <p className="text-ink-faint">{beat.definition}</p>
                        <p className="text-ink-muted">{beat.application}</p>
                    </div>
                  </div>

                  {/* screen — half-cut phone, no tile, flush with the card's bottom edge */}
                  {beat.image && (
                    <div className="flex items-end justify-center">
                      <img
                        src={beat.image}
                        alt={`${beat.title} — screen`}
                        className="-mb-7 w-full max-w-[340px] sm:-mb-9"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Research */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Research</span>
            <p className="mt-4 text-lg text-ink">
              I ran research on two tracks over the course of a month.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col gap-6">
                {researchTracks.map((track) => (
                  <div
                    key={track.title}
                    className="flex flex-1 flex-col rounded-2xl border border-ink/10 bg-white p-6"
                  >
                    {track.logos ? (
                      <div className="mb-5 flex flex-wrap items-center gap-2">
                        {track.logos.map((logo) => (
                          <img
                            key={logo}
                            src={logo}
                            alt=""
                            className="h-12 w-12 shrink-0 rounded-xl object-contain"
                          />
                        ))}
                      </div>
                    ) : (
                      <img
                        src={track.icon ?? undefined}
                        alt=""
                        className="mb-5 h-16 w-16 object-contain place-self-start"
                      />
                    )}
                    <h4 className="font-display text-xl font-medium text-ink">{track.title}</h4>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-brand-pink-light px-2 py-1 text-sm font-medium text-brand-pink">
                      <FiStar className="h-3.5 w-3.5" />
                      What I did
                    </span>
                    <p className="mt-4 text-base sm:text-lg text-ink-faint">{track.body}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink/10 lg:min-h-[420px]">
                <img
                  src={researchBoardImg}
                  alt="Research synthesis board — competitive teardown and interview notes"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <p className="mt-8 text-lg text-ink">
              The competitive benchmark shaped how I read parts of what riders said, like the
              deposit comparison in the story above, which only made sense once we saw what Zypp
              Electric was charging.
            </p>

            {/* Riders vs. stakeholders */}
            <div className="mt-16">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                Two different reads on the problem
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                Riders vs. stakeholders
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 p-6">
                  <span className="text-sm font-semibold text-blue-600">What riders asked for</span>
                  <p className="mt-2 text-base sm:text-lg text-ink">
                    A ticketing/support flow, clear payout visibility, easier vehicle redeployment,
                    and more rental plan options.
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-6">
                  <span className="text-sm font-semibold text-blue-600">
                    What stakeholders assumed
                  </span>
                  <p className="mt-2 text-base sm:text-lg text-ink">
                    Riders mainly wanted to see their rider category, for example, their Diamond
                    tier status and its benefits.
                  </p>
                </div>
              </div>
              <p className="mt-6 rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-4 text-sm sm:text-base text-ink-muted">
                I had already flagged payout visibility and an AI-based support chat as priorities
                before this research, but neither had been treated as a priority until the research
                gave them direct rider voices behind them.
              </p>
            </div>
          </div>

          {/* Action plan */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink">Action plan</span>
            <p className="mt-4 text-lg text-ink">
              Research pointed to one core insight: EZY wasn't failing because it was hard to use;
              it was failing because it gave riders no reason to open it after day one. With three
              months, I scoped the plan around the two problems most directly causing riders to
              leave.
            </p>
            {/* breadcrumb-style steps: numbered cards joined by a >> badge. On
                desktop it's an N-column grid (5 steps → 3 + 2, every card the same
                width) with the connector pointing right, absolutely placed on each
                card's right edge except at a row's end. On mobile everything stacks
                and the connector points down between every pair. */}
            <div
              className="mt-8 flex flex-col lg:grid lg:gap-x-4 lg:gap-y-4"
              style={{ gridTemplateColumns: `repeat(${stepCols}, minmax(0, 1fr))` }}
            >
              {actionSteps.map((card, i) => {
                const col = i % stepCols;
                const isLast = i === actionSteps.length - 1;
                const isRowStart = col === 0;
                const isRowEnd = col === stepCols - 1 || isLast; // last in its desktop row
                const radius =
                  isRowStart && isRowEnd
                    ? "lg:rounded-[24px]"
                    : isRowStart
                      ? "lg:rounded-l-[24px] lg:rounded-r-[12px]"
                      : isRowEnd
                        ? "lg:rounded-l-[12px] lg:rounded-r-[24px]"
                        : "lg:rounded-[12px]";
                return (
                  <Fragment key={i}>
                    <div className={`relative flex items-start gap-7 rounded-[16px] bg-ink/[0.04] p-7 ${radius}`}>
                      <span className={`font-sans text-lg sm:text-xl font-medium leading-7 ${card.color}`}>
                        {card.num}
                      </span>
                      <div className="w-px self-stretch bg-ink/10" />
                      <div className="flex flex-col gap-4">
                        <p className="text-sm leading-6 text-ink-faint">{card.label}</p>
                        <p className="font-sans text-lg leading-7 text-ink">{card.text}</p>
                      </div>

                      {/* desktop connector — centered in the gap between this card
                          and the next (gap-x-4 = 16px, so shift its centre +8px past
                          the right edge). Only when a card follows in the same row. */}
                      {!isRowEnd && (
                        <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-[calc(50%+8px)] items-center justify-center rounded-full bg-white p-1 shadow-[0px_0px_0px_1px_rgba(23,23,23,0.08),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_3px_3px_-1.5px_rgba(23,23,23,0.04)] lg:flex">
                          <FiChevronsRight className="h-5 w-5 text-ink-faint" />
                        </div>
                      )}
                    </div>

                    {/* mobile connector — in-flow, points down between every pair */}
                    {!isLast && (
                      <div className="relative z-10 -my-2 flex shrink-0 items-center justify-center self-center rounded-full bg-white p-1 shadow-[0px_0px_0px_1px_rgba(23,23,23,0.08),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_3px_3px_-1.5px_rgba(23,23,23,0.04)] lg:hidden">
                        <FiChevronsRight className="h-5 w-5 rotate-90 text-ink-faint" />
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
          <span className="mt-10 block text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            User story
          </span>
          <img
            src={scopingUserStoryImg}
            alt="Rider user story — onboarding, earnings, and support"
            className="mt-10 w-full max-w-3xl"
          />
        </Container>
      </section>

      {/* ===== 3. DESIGN EVOLUTION ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading number="3" title="Design Evolution" />

          {/* iterations */}
          <div className="mt-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design Iterations
            </span>
            <p className="mt-4 text-lg sm:text-xl text-ink">
              With a small team and a tight timeline, most of the real design work happened in
              negotiation, deciding what to push for, and what to let wait.
            </p>

            {/* before → after, three cards */}
            <h3 className="mt-12 font-display text-2xl font-semibold text-ink ">
              The same rider, now
            </h3>
            <p className="mt-3 text-lg sm:text-xl text-ink-muted">
              Three short stories, the same rider from the pain points, living through what changed.
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-10">
              {riderStories.map((story) => (
                <div
                  key={story.title}
                  className="flex flex-col gap-7 rounded-3xl border border-ink/10 bg-white p-8 shadow-sm"
                >
                  {/* title + before */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm sm:text-base font-semibold text-ink">{story.title}</h4>
                      <span
                        className={`shrink-0 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide ${story.statusClass}`}
                      >
                        {story.status}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-orange-500">Before</span>
                    <p className="text-sm leading-relaxed text-ink-muted">{story.before}</p>
                  </div>

                  <div className="h-px w-full bg-ink/10" />

                  {/* after */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-brand-green">After</span>
                    <p className="text-sm leading-relaxed text-ink-muted">{story.after}</p>
                  </div>

                  {/* takeaway */}
                                      <p className="text-sm font-medium text-ink"><FiCheckCircle className="h-4 w-4 shrink-0 text-brand-green inline-block" />{" "}{story.detail}</p>


                  {/* screen — placeholder until the real export is supplied */}
                  {story.image ? (
                    <div className="mt-auto overflow-hidden rounded-xl border border-ink/10">
                      <img
                        src={story.image}
                        alt={`${story.title} — before and after screens`}
                        className="aspect-[656/360] w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mt-auto flex aspect-[656/360] items-center justify-center rounded-xl border border-dashed border-ink/15 bg-ink/[0.03] text-ink-faint">
                      <FiImage className="h-7 w-7" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* trade-offs */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design Trade-offs
            </span>
            <div className="mt-8 flex flex-col gap-16">
              {tradeoffs.map((t) => (
                <div key={t.title} className="w-full">
                  <span
                    className={`inline-block rounded-md px-2 py-1 text-xs font-medium ${t.badgeClass}`}
                  >
                    {t.badge}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{t.title}</h3>
                  <div className="mt-4 text-base sm:text-lg leading-relaxed text-ink-muted/[0.7]">
                    {t.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* design system */}
          <div className="mt-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design system modernization
            </span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
              Design system, built from scratch
            </h3>
            <p className="mt-4 text-lg text-ink-faint">
              <span className="text-ink">EZY had no consistent design system to build on,</span> so alongside this project, I built one
              from the <span className="text-ink">ground up with my senior designer,</span> not adapted from an existing component
              library. <span className="text-ink">Every token, component, and pattern</span> used across the redesigned onboarding and
              payout flows came out of that system.
            </p>
            <img
              src={designSystemImg}
              alt="EZY design system — before and after rider app screens"
              className="mt-8 w-full rounded-3xl"
            />
          </div>
        </Container>
      </section>

      {/* ===== 4. RESOLVED ===== */}
      <section className="py-12">
        <Container>
          <SectionHeading number="4" title="Resolved partially, and honestly" />
          <span className="mt-10 block text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            Resolved
          </span>
          <div className="mt-6 grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {outcomeStats.map((stat) => (
              <div key={stat.label} className="py-5 sm:px-8 sm:py-0 sm:first:pl-0">
                <div className="font-display text-2xl font-medium text-ink sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-3xl border border-ink/10 bg-ink/[0.03] p-8 text-md text-ink-muted">
            Some of this shipped and is already measurable. Some is validated with riders but paused
            in development for business reasons; both are part of the honest picture.
          </p>
        </Container>
      </section>
    </PageShell>
  );
};

export default Ezy;
