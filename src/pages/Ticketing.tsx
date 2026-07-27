import { Fragment, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronsRight } from "react-icons/fi";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import ticketThumbnail from "../assets/blive/ticket-thumbnail.png";
import oldTicketing from "../assets/blive/old-ticketing.png";
import researchImg from "../assets/blive/research.png";
import iterationsImg from "../assets/blive/iterations.png";
import liveChatImg from "../assets/blive/tradeoffs/live-chat.png";
import kanbanImg from "../assets/blive/tradeoffs/kanban-vs-table.png";
import adminSticker from "../assets/blive/personas/admin.png";
import riderSticker from "../assets/blive/personas/rider.png";
import dmSticker from "../assets/blive/personas/dm-manager.png";
import recoverySticker from "../assets/blive/personas/recovery-manager.png";
import riderCard from "../assets/blive/scoping/rider.png";
import adminCard from "../assets/blive/scoping/admin.png";
import supportCard from "../assets/blive/scoping/support-team.png";

// NOTE: prose below is placeholder/first-pass copy — the client edits case-study
// text by hand. Stickers use emojis for now; real graphics come later.

const headerStats = [
  { value: "70%", label: "Faster ticket resolution" },
  { value: "95%", label: "Auto-assignment accuracy" },
  { value: "15min", label: "To acknowledgment" },
  { value: "0", label: "Orphaned tickets" },
];

const chips = [
  "Product Designer",
  "0→1 Product",
  "Admin Dashboard",
  "Rider Help & Support",
  "Design System",
];

const aboutMeta = [
  { k: "Role", v: "Product Designer — end-to-end UX" },
  { k: "Team", v: "Design + Engineering (small team)" },
  { k: "Timeline", v: "2025 · ongoing" },
  { k: "Scope", v: "Admin dashboard, Rider Help & Support, Design System" },
];

const problemCards = [
  { emoji: "📱", title: "Rider contact via WhatsApp", text: "Every issue arrived through scattered WhatsApp messages with no structure." },
  { emoji: "🕳️", title: "No accountability", text: "Nothing had a single owner, so problems slipped through the cracks." },
  { emoji: "📊", title: "Spreadsheets for records", text: "History lived in ad-hoc sheets that nobody fully trusted." },
  { emoji: "🙅", title: "No assigned owner", text: "Tickets had no assignee and no clear next step." },
];

// Each persona carries its own colour family: `bg` (card, lightest), `pill`
// (a darker shade of the same hue for the Needs pill) and `text` (darkest, for
// the pill label + the needs line).
const personas = [
  { name: "Admin", role: "Oversees the whole support operation.", needs: "their riders' tickets to come to them, not a stranger.", bg: "bg-emerald-50/70", pill: "bg-emerald-100", text: "text-emerald-800", img: adminSticker },
  { name: "Rider", role: "Raises issues from the EZY DE app.", needs: "quick, clear help without chasing anyone on the phone.", bg: "bg-blue-50/70", pill: "bg-blue-100", text: "text-blue-800", img: riderSticker },
  { name: "DM Manager", role: "Manages deployment and vehicle logistics day to day.", needs: "tickets routed to the right team automatically.", bg: "bg-amber-50/70", pill: "bg-amber-100", text: "text-amber-800", img: dmSticker },
  { name: "Recovery Manager", role: "Handles breakdowns and vehicle recovery on the ground.", needs: "full vehicle history before heading out on a recovery.", bg: "bg-brand-pink-light/40", pill: "bg-brand-pink-light", text: "text-brand-pink", img: recoverySticker },
];

const jtbd = [
  { when: "my vehicle or payment has an issue (Rider)", want: "raise a complaint in app and track its status", so: "keep working without chasing people on the phone" },
  { when: "a new ticket comes in", want: "it routed to exactly one owner", so: "start resolving instead of triaging" },
  { when: "a rider has a problem", want: "to see the ticket's full history", so: "understand the relationship without re-asking" },
  { when: "reviewing support performance", want: "to see every team's SLA record", so: "hold teams accountable and spot systemic issues" },
];

// Breadcrumb-style steps. `color` cycles the existing brand accents for the
// step number (grey `label` on top, dark `text` statement below).
const actionCards = [
  { num: "01", label: "One owner per ticket", text: "Every ticket gets exactly one accountable owner.", color: "text-brand-green" },
  { num: "02", label: "Auto-assignment", text: "Route by category and team, automatically.", color: "text-brand-pink" },
  { num: "03", label: "Single source of truth", text: "One system replaces WhatsApp + spreadsheets.", color: "text-brand-amber" },
  { num: "04", label: "SLA visibility", text: "Acknowledgment and resolution tracked per team.", color: "text-brand-green" },
  { num: "05", label: "SLA visibility", text: "Acknowledgment and resolution tracked per team.", color: "text-brand-green" },
];

// Scoping personas — exported as full illustrated cards from Figma. On desktop
// they sit in a staggered collage; positions/sizes are percentages of the
// original 1154×923 Figma frame so the layout scales with the container.
const personaCards = [
  { src: riderCard, alt: "Rider (Delivery Executives) — user stories", left: "0%", top: "3.47%", width: "48.87%" },
  { src: adminCard, alt: "Admin (Business Owner) — user stories", left: "52.34%", top: "0%", width: "47.66%" },
  { src: supportCard, alt: "Support Team — user stories", left: "0%", top: "53.09%", width: "60.66%" },
];

// Emphasis inside trade-off body copy — darker + heavier against the muted text.
const Em = ({ children }: { children: ReactNode }) => (
  <strong className="font-semibold text-ink">{children}</strong>
);

// Design trade-offs. `status` is a small coloured pill; colours reuse the persona
// hue families (emerald / blue / amber / brand-pink). Items 1 & 4 are full-width
// text; the two middle ones carry an image so the run reads balanced.
const tradeoffs = [
  {
    status: "Shipped as proposed",
    statusClass: "bg-emerald-50 text-emerald-700",
    title: "Auto-assignment vs. manual triage.",
    hasImage: false,
    body: (
      <>
        <p>
          Early scoping leaned toward manual assignment by an admin. But a Deployment Manager told
          me riders call him, and only him, for everything — manual triage would just digitize the
          old bottleneck.
        </p>
        <p className="font-medium text-ink">
          I made the case that assignment had to be automatic and rule-based: category → department
          → round-robin, with a DM exception so riders with a trusted contact keep them.
        </p>
        <p>
          This is my favourite decision in the project — the system optimizes for load balance by
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
          I proposed a live chat between the ticket raiser and assignee — otherwise clarifying
          conversations would leak right back to WhatsApp, recreating the exact problem we were
          solving. </p>
          <p>Engineering couldn&rsquo;t commit to real-time chat within the 2-month window, so
          v1 shipped with a <Em>comments section + full activity log</Em> instead, keeping chat on
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
          I explored a kanban board — visually, four lifecycle stages map beautifully to columns.
          But testing with actual users in our weekly sessions was clear: these are operations
          people who live in spreadsheets. They wanted dense, scannable rows, and didn&rsquo;t want
          to spend a minute longer in this tool than necessary. Engineering agreed, for effort
          reasons.
        </p>
        <p className="font-medium text-ink">
          Lesson: a view that matches the user&rsquo;s mental model beats a view that matches the
          designer&rsquo;s.
        </p>
        <p>
          Shipped: a table view with layered filters — date range, designation, category,
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
          An immobilized vehicle and a document query aren&rsquo;t the same emergency — I proposed a
          criticality level so urgent tickets wouldn&rsquo;t just sit in round-robin order. Both PM
          and engineering pushed back: with the assignment engine, city rules, and the DM exception
          already in scope, priority logic (and the SLA behavior it implies) was too much for the
          timeline.
        </p>
        <p>
          We <Em>agreed to land it in the next version</Em>, alongside{" "}
          <Em>AI integration — auto-classifying tickets, inferring criticality from descriptions,</Em>{" "}
          and eventually suggesting resolutions from historical data. I lost the v1 battle, but the
          proposal shaped the roadmap.
        </p>
      </>
    ),
  },
];

const outcomeStats = [
  { value: "70%", label: "Faster ticket resolution" },
  { value: "15min", label: "To acknowledgment" },
  { value: "90%", label: "Auto-assignment accuracy" },
  { value: "4/5+", label: "Support satisfaction" },
  { value: "100%", label: "Tickets with an owner" },
];

const Ticketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Desktop step grid: ≤4 steps share one row; 5+ wrap into rows of 3 (so 5 → 3 + 2).
  // A single N-column grid keeps every card the same width, so row 2's cards line
  // up as columns under row 1. Mobile always stacks top-down regardless.
  const stepCols = actionCards.length > 4 ? 3 : Math.max(actionCards.length, 1);

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
            From WhatsApp Chaos to a{" "}
            <span className="font-script text-[1.15em] text-brand-green">Ticketing</span> Platform
          </h1>

          {/* stats */}
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {headerStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-ink sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs text-ink-faint sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md bg-ink/[0.05] px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* thumbnail (same frame as the home page) */}
          <BrowserFrame url="finance-template.aligoal.com" className="mt-12">
            <div className="aspect-[1224/436] w-full overflow-hidden">
              <img src={ticketThumbnail} alt="" className="h-full w-full object-cover object-top" />
            </div>
          </BrowserFrame>

          {/* meta bar — full-width, horizontal, separated by vertical dividers.
              On mobile it wraps to a 2×2 grid, so the divider is drawn only
              between columns (odd items on mobile; every item but the first on sm). */}
          <dl className="mt-24 grid grid-cols-2 sm:grid-cols-4">
            {aboutMeta.map((row, i) => (
              <div
                key={row.k}
                className={`border-ink/10 px-4 py-2 sm:px-6 sm:py-0 ${
                  i % 2 === 1 ? "border-l" : ""
                } ${i === 0 ? "sm:border-l-0 sm:pl-0" : "sm:border-l"}`}
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">{row.k}</dt>
                <dd className="mt-2 text-sm text-ink">{row.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16">
        <Container>
          <p className="text-xl text-ink-muted sm:text-xl">
            I owned end-to-end UX for the admin dashboard (Ticket Master, Ticket Management, User
            Management, Settings) and the rider-facing Help &amp; Support experience in the EZY DE
            app — plus a new design system for the platform, built from the ground up. With a team
            this small, I wasn&rsquo;t just producing screens; I was contributing to product logic
            and negotiating trade-offs directly with engineering.
          </p>
        </Container>
      </section>

      {/* ===== 1. WHO, WHY & WHAT ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="1" title="Who, Why & What" />

          {/* Problem */}
          <div className="mt-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Problem</span>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xl text-ink-muted">
                  B:Live manages EV fleets for delivery riders across cities. When something went
                  wrong — a payment failure, a vehicle breakdown, a document issue — this is how it
                  got &ldquo;handled.&rdquo;
                </p>
                <h3 className="mt-8 font-display text-2xl font-semibold text-ink">
                  The problem: issues everyone could see, nobody owned.
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {problemCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                      <div className="text-2xl">{card.emoji}</div>
                      <div className="mt-3 font-medium text-ink">{card.title}</div>
                      <p className="mt-1 text-sm text-ink-muted">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* image height is capped to the text column: the img is absolutely
                  positioned so it doesn't drive row height — the text does. */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={oldTicketing}
                  alt="The old WhatsApp + spreadsheet ticketing flow"
                  className="absolute inset-0 h-full w-full rounded-3xl border border-ink/10 object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Research</span>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div className="flex flex-col gap-4 text-xl text-ink-muted max-w-2xl">
                <p>I ran research on two tracks over the first three weeks.</p>
                <p>
                  User interviews across every role that touches a support issue — riders, fleet
                  operators, hub managers, deployment managers, and recovery managers. Historical
                  complaint analysis, going through past issues raised via calls and WhatsApp to
                  understand real categories, frequency, and where they died.
                </p>
                <p>
                  Then I made research a habit, not a phase: recurring one-hour weekly sessions with
                  all POCs, for three consecutive weeks, so every decision could be validated against
                  real workflows before it hardened into spec.
                </p>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src={researchImg}
                  alt="Research board and interviews"
                  className="absolute inset-0 h-full w-full rounded-3xl border border-ink/10 object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Target personas */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Target personas</span>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {personas.map((p) => (
                <div
                  key={p.name}
                  className={`relative flex min-h-[240px] flex-col overflow-hidden rounded-[2.25rem] border border-white/60 p-8 backdrop-blur-sm ${p.bg}`}
                >
                  <div className="relative z-10 max-w-[70%]">
                    <h4 className="font-display text-4xl font-medium text-ink">{p.name}</h4>
                    <p className="mt-3 text-lg text-ink-muted">{p.role}</p>
                  </div>

                  <div className="relative z-10 mt-auto max-w-[70%] pt-6">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium ${p.pill} ${p.text}`}
                    >
                      <FiStar className="h-3.5 w-3.5" />
                      Needs
                    </span>
                    <p className="mt-3">{p.needs}</p>
                  </div>

                  {/* persona sticker — capped by height, natural width */}
                  <img
                    src={p.img}
                    alt=""
                    className="pointer-events-none absolute bottom-6 right-6 h-28 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* JTBD framework */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Jobs-to-be-done
            </span>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10">
              <div className="grid grid-cols-3 bg-ink/[0.03] text-xs font-medium uppercase tracking-wide text-ink-faint">
                <div className="p-4">When…</div>
                <div className="p-4">I want to…</div>
                <div className="p-4">So I can…</div>
              </div>
              {jtbd.map((row) => (
                <div key={row.when} className="grid grid-cols-3 border-t border-ink/10 text-sm text-ink-muted">
                  <div className="p-4">{row.when}</div>
                  <div className="p-4">{row.want}</div>
                  <div className="p-4">{row.so}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action plan */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Action plan</span>
            <p className="mt-4 text-xl text-ink-muted">
              Research pointed to one core insight: the product isn't a ticket list it's an ownership machine. Every ticket needed exactly one accountable owner, automatically.
            </p>
            {/* breadcrumb-style steps: numbered cards joined by a >> badge. On
                desktop it's an N-column grid (so 5 steps → 3 + 2, every card the
                same width) with the connector pointing right, absolutely placed on
                each card's right edge except at a row's end. On mobile everything
                stacks and the connector points down between every pair. */}
            <div
              className="mt-8 flex flex-col lg:grid lg:gap-x-4 lg:gap-y-4"
              style={{ gridTemplateColumns: `repeat(${stepCols}, minmax(0, 1fr))` }}
            >
              {actionCards.map((card, i) => {
                const col = i % stepCols;
                const isLast = i === actionCards.length - 1;
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
                      <span className={`font-sans text-xl font-medium leading-7 ${card.color}`}>
                        {card.num}
                      </span>
                      <div className="w-px self-stretch bg-ink/10" />
                      <div className="flex flex-col gap-4">
                        <p className="text-base font-medium leading-6 text-ink-faint">{card.label}</p>
                        <p className="font-sans text-xl font-medium leading-7 text-ink">{card.text}</p>
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
            User personas
          </span>
          <p className="mt-4 max-w-3xl text-xl text-ink-muted">
            User stories kept scope honest — one clear job per role, so the build stayed anchored to
            real needs instead of feature wishlists.
          </p>
          {/* mobile: equal-width cards stacked one after another */}
          <div className="mt-10 flex flex-col gap-6 lg:hidden">
            {personaCards.map((card) => (
              <img key={card.alt} src={card.src} alt={card.alt} className="w-full" />
            ))}
          </div>

          {/* desktop: staggered collage matching the Figma frame (1154×923) */}
          <div className="relative mt-10 hidden aspect-[1154/923] w-full lg:block">
            {personaCards.map((card) => (
              <img
                key={card.alt}
                src={card.src}
                alt={card.alt}
                className="absolute"
                style={{ left: card.left, top: card.top, width: card.width }}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 3. DESIGN EVOLUTION ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading number="3" title="Design Evolution" />

          {/* iterations */}
          <div className="mt-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Design Iterations</span>
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex flex-1 flex-col gap-6 text-xl text-ink-muted md:max-w-2xl">
                <p>I ran research on two tracks over the first three weeks.</p>
                <p>
                  <strong className="font-semibold text-ink">
                    User interviews across every role that touches a support
                  </strong>{" "}
                  issue riders, fleet operators, hub managers, deployment managers, and recovery
                  managers.{" "}
                  <strong className="font-semibold text-ink">Historical complaint analysis</strong>{" "}
                  going through past issues raised via calls and WhatsApp to understand real
                  categories, frequency, and where they died.
                </p>
                <p>
                  Then I made research a habit, not a phase:{" "}
                  <strong className="font-semibold text-ink">
                    recurring one-hour weekly sessions with all POCs, for three consecutive weeks
                  </strong>
                  , so every decision could be validated against real workflows before it hardened
                  into spec.
                </p>
              </div>
              <img
                src={iterationsImg}
                alt="Design iteration screens"
                className="w-full shrink-0 rounded-3xl border border-ink/10 lg:w-[600px]"
              />
            </div>
          </div>

          {/* trade-offs */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Design Trade-offs</span>
            <div className="mt-8 flex flex-col gap-16">
              {tradeoffs.map((t) => {
                const heading = (
                  <div>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${t.statusClass}`}>
                      {t.status}
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-ink">{t.title}</h3>
                    <div className="mt-4 flex flex-col gap-4 text-lg text-ink-muted">{t.body}</div>
                  </div>
                );

                // No image → copy runs full width. With image → copy is capped and
                // the screenshot takes the right column, sized generously (a little
                // bottom bleed is fine).
                if (!t.hasImage) {
                  return (
                    <div key={t.title} className="w-full">
                      {heading}
                    </div>
                  );
                }

                return (
                  <div key={t.title} className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
                    <div className="max-w-3xl">{heading}</div>
                    <img
                      src={t.image}
                      alt={`${t.title} — screens`}
                      className="w-full rounded-2xl border border-ink/10 object-top lg:h-[400px] lg:object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 4. OUTCOME ===== */}
      <section className="py-12">
        <Container>
          <SectionHeading number="4" title="Outcome 🏆" />
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            {outcomeStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-bold text-ink sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-ink/[0.03] p-8 text-xl text-ink-muted sm:p-10">
            <p>
              Support went from &ldquo;WhatsApp someone you know and hope&rdquo; to a system where
              every issue has a record, an owner, a status the rider can see, and a documented
              resolution. Service quality improved across the board — and for the first time, B:Live
              has the data to keep improving it.
            </p>
            <p>
              <span className="font-medium text-ink">What&rsquo;s next:</span> v2 is scoped to bring
              ticket criticality/priority levels and AI integration — auto-classifying tickets,
              inferring urgency, and suggesting resolutions from the historical data this platform is
              now, for the first time, actually capturing.
            </p>
          </div>
        </Container>
      </section>
    </motion.main>
  );
};

export default Ticketing;
