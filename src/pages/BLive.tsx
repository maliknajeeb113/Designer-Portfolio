import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import bliveIcon from "../assets/blive-ezy/blive-icon.svg";
import heroImg from "../assets/blive-ezy/hero.png";
import competitorLogos from "../assets/blive-ezy/competitor-logos.png";
import researchBoardImg from "../assets/blive-ezy/research-board.png";
import scopingUserStoryImg from "../assets/blive-ezy/scoping-user-story.png";
import iterationsImg from "../assets/blive-ezy/iterations.png";
import tradeoffSupportImg from "../assets/blive-ezy/tradeoff-support.png";

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

// Emphasis inside body copy — darker + heavier against the muted text.
const Em = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

// A rider's first week, beat by beat — each drop-off point paired with the
// behavioural principle behind it (name → definition → how it applied here).
const timeline = [
  {
    when: "Day 0",
    title: "Before he even signs up",
    body: "Before downloading EZY, he checks what a few options charge upfront. EZY's security deposit is higher than what Zypp Electric asks for, and he isn't sure he'll get it back if he stops riding.",
    quote: null,
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
    principle: "Cognitive Load, earnings edition",
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
    principle: "Peak-End Rule",
    definition:
      "People judge an experience mostly by its most intense moment and how it ends, not the average of everything before it.",
    application:
      "One unanswered call in a real moment of need outweighs every smooth screen that came before it.",
  },
];

// Research ran on two parallel tracks.
const researchTracks = [
  {
    title: "Competitive research + in-house interviews",
    logos: competitorLogos,
    body: (
      <>
        <Em>5 sessions, 10 riders each</Em>, a mix of active and lapsed users. Alongside this,{" "}
        <Em>a direct benchmark against</Em> Zypp Electric, Bounce Daily, Halo, Yulu, and Eveez, plus
        a review of what riders were already saying about <Em>EZY on the Play Store.</Em>
      </>
    ),
  },
  {
    title: "On-ground research",
    logos: null,
    body: (
      <>
        <Em>Contextual inquiry with 3 riders,</Em> done alongside our collections team, who visit
        riders directly. I took part in this in person, seeing where the{" "}
        <Em>app's job was quietly being done by a person instead.</Em>
      </>
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

// Where research pushed back on assumptions — each with a status badge + prose.
const tradeoffs = [
  {
    badge: "Shipped",
    badgeClass: "bg-emerald-50 text-emerald-700",
    title: "Payout visibility vs. hiding deductions",
    image: null,
    body: (
      <>
        <span className="text-ink-muted">
          Stakeholders wanted to hide full payout details from riders, worried that showing the
          numbers might cause riders to leave the platform.
        </span>{" "}
        <Em>
          Research said the opposite: riders were already leaving because they had no visibility
          into what they earned.
        </Em>{" "}
        <span className="text-ink-muted">
          I pushed back with the rider research directly, the risk wasn't showing riders their
          payout, it was continuing to hide it.
        </span>{" "}
        <Em>
          Full payout visibility went live. The one compromise: detailed deduction breakdowns still
          aren't shown; riders see what they earned, not a line-by-line “why.”
        </Em>
      </>
    ),
  },
  {
    badge: "Designed but development on hold",
    badgeClass: "bg-amber-50 text-amber-700",
    title: "Call-first support with escalation logic",
    image: tradeoffSupportImg,
    body: (
      <>
        <span className="text-ink-muted">
          Support was one of the clearest rider complaints; calls went unanswered, with no reliable
          way to get help.
        </span>{" "}
        <Em>
          I designed a 1-tap, call-first support entry point with escalation logic for unresolved
          issues.
        </Em>{" "}
        <span className="text-ink-muted">
          A basic ticketing flow shipped, but development on the fuller version hasn't started yet.
        </span>
      </>
    ),
  },
  {
    badge: "Designed and validated, on hold",
    badgeClass: "bg-amber-50 text-amber-700",
    title: "Redeployment flow & more rental plans",
    image: null,
    body: (
      <span className="text-ink-muted">
        Riders asked for an easier way to redeploy vehicles and more flexibility in rental plan
        options. Both were designed and tested with riders, but development on this part of the
        revamp is currently paused for business reasons, not because the need wasn't real.
      </span>
    ),
  },
];

const outcomeStats = [
  { value: "20%", label: "Onboarding drop-off, before → after" },
  { value: "4/20", label: "Riders drop off now, down from 10/20" },
  { value: "Live", label: "Full payout visibility, shipped." },
];

const BLive = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      className="bg-white font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40">
        <Container>
          <h1 className="max-w-6xl font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            From a one-time app to one riders actually{" "}
            <span className="font-script text-[1.15em] text-brand-green">trust.</span>
          </h1>

          {/* meta line — company + period */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink-faint">
            <img src={bliveIcon} alt="" className="h-6 w-6 shrink-0 rounded object-contain" />
            <span>B:Live, EV Mobility Platform</span>
            <span className="text-ink-faint/50">·</span>
            <span>Apr 2026 – May 2026</span>
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
              <p className="mt-4 text-xl leading-relaxed text-ink">
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
            <p className="text-2xl font-semibold text-ink">An app riders needed once, then abandoned:</p>
            <p className="text-xl text-ink-muted">
              <Em>Over 10,000 riders used EZY</Em> for exactly two things: signing up, and checking
              their rental. After that, the app gave them no reason to come back, even though it held
              information they actually cared about.
            </p>
            <p className="mt-6 text-xl text-ink">
              <Em>A rider's first week with EZY</Em>
              <span className="text-ink-muted">
                , the way it actually happened, moment by moment, with the psychology behind each
                drop-off point.
              </span>
            </p>
          </div>

          {/* Timeline — story beats */}
          <div className="mt-8 flex flex-col gap-5">
            {timeline.map((beat, i) => (
              <div
                key={i}
                className="rounded-3xl border border-ink/[0.06] bg-ink/[0.02] p-7 sm:p-9"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-2xl font-semibold text-ink">{beat.title}</h3>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                    {beat.when}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl text-lg text-ink-muted">{beat.body}</p>
                {beat.quote && (
                  <p className="mt-4 text-lg font-medium italic text-ink">“{beat.quote}”</p>
                )}
                {/* behavioural principle */}
                <div className="mt-6 max-w-3xl rounded-r-lg border-l-[3px] border-brand-pink/70 bg-ink/[0.02] py-3 pl-5 pr-4">
                  <p className="text-sm">
                    <span className="font-semibold text-ink">{beat.principle}</span>{" "}
                    <span className="text-ink-faint">{beat.definition}</span>{" "}
                    <span className="text-ink-muted">{beat.application}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Research */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Research</span>
            <p className="mt-4 text-xl text-ink-muted">
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
                      <img
                        src={track.logos}
                        alt="Competitor apps benchmarked"
                        className="mb-5 h-12 w-auto object-contain place-self-start"
                      />
                    ) : (
                      <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-pink-light text-brand-pink place-self-start">
                        <FiStar className="h-5 w-5" />
                      </span>
                    )}
                    <h4 className="font-display text-2xl font-semibold text-ink">{track.title}</h4>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-brand-pink-light px-2 py-1 text-sm font-medium text-brand-pink">
                      <FiStar className="h-3.5 w-3.5" />
                      What I did
                    </span>
                    <p className="mt-4 text-lg text-ink-muted">{track.body}</p>
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

            <p className="mt-8 text-xl text-ink-muted">
              The competitive benchmark shaped how I read parts of what riders said, like the
              deposit comparison in the story above, which only made sense once we saw what Zypp
              Electric was charging.
            </p>

            {/* Riders vs. stakeholders */}
            <div className="mt-16">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                Two different reads on the problem
              </span>
              <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Riders vs. stakeholders
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink/10 p-6">
                  <span className="text-sm font-semibold text-blue-600">What riders asked for</span>
                  <p className="mt-2 text-lg text-ink-muted">
                    A ticketing/support flow, clear payout visibility, easier vehicle redeployment,
                    and more rental plan options.
                  </p>
                </div>
                <div className="rounded-2xl border border-ink/10 p-6">
                  <span className="text-sm font-semibold text-blue-600">
                    What stakeholders assumed
                  </span>
                  <p className="mt-2 text-lg text-ink-muted">
                    Riders mainly wanted to see their rider category, for example, their Diamond
                    tier status and its benefits.
                  </p>
                </div>
              </div>
              <p className="mt-6 rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-4 text-base text-ink-muted">
                I had already flagged payout visibility and an AI-based support chat as priorities
                before this research, but neither had been treated as a priority until the research
                gave them direct rider voices behind them.
              </p>
            </div>
          </div>

          {/* Action plan */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Action plan</span>
            <p className="mt-4 max-w-4xl text-xl text-ink-muted">
              Research pointed to one core insight: EZY wasn't failing because it was hard to use;
              it was failing because it gave riders no reason to open it after day one. With three
              months, I scoped the plan around the two problems most directly causing riders to
              leave.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {actionSteps.map((card) => (
                <div key={card.num} className="flex items-start gap-6 rounded-2xl bg-ink/[0.04] p-7">
                  <span className={`font-sans text-xl font-medium leading-7 ${card.color}`}>
                    {card.num}
                  </span>
                  <div className="w-px self-stretch bg-ink/10" />
                  <div className="flex flex-col gap-3">
                    <p className="text-base font-medium leading-6 text-ink-faint">{card.label}</p>
                    <p className="font-sans text-lg leading-7 text-ink">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
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
            <p className="mt-4 max-w-4xl text-xl text-ink-muted">
              With a small team and a tight timeline, most of the real design work happened in
              negotiation, deciding what to push for, and what to let wait.
            </p>
            <img
              src={iterationsImg}
              alt="Design iteration board in Figma"
              className="mt-6 w-full rounded-2xl border border-ink/10"
            />
          </div>

          {/* trade-offs */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design Trade-offs
            </span>
            <div className="mt-6 flex flex-col gap-12">
              {tradeoffs.map((t) => (
                <div key={t.title} className="grid gap-10 lg:grid-cols-2 lg:items-center">
                  <div className="max-w-2xl">
                    <span
                      className={`inline-block rounded-lg px-2 py-1 text-xs font-medium ${t.badgeClass}`}
                    >
                      {t.badge}
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-ink">{t.title}</h3>
                    <p className="mt-4 text-lg leading-relaxed">{t.body}</p>
                  </div>
                  {t.image && (
                    <img
                      src={t.image}
                      alt={`${t.title} — screen`}
                      className="w-full rounded-2xl border border-ink/10"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* design system */}
          <div className="mt-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design system modernization
            </span>
            <h3 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Design system, built from scratch
            </h3>
            <p className="mt-4 max-w-4xl text-xl text-ink-muted">
              EZY had no consistent design system to build on, so alongside this project, I built one
              from the ground up with my senior designer, not adapted from an existing component
              library. Every token, component, and pattern used across the redesigned onboarding and
              payout flows came out of that system.
            </p>
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
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-12 rounded-3xl border border-ink/10 bg-ink/[0.03] p-8 text-xl text-ink-muted sm:p-10">
            Some of this shipped and is already measurable. Some is validated with riders but paused
            in development for business reasons; both are part of the honest picture.
          </p>
        </Container>
      </section>
    </motion.main>
  );
};

export default BLive;
