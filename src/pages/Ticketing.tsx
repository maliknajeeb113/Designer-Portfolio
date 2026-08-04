import { Fragment, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { FiStar, FiChevronsRight } from "react-icons/fi";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import bliveIcon from "../assets/blive/blive-icon.png";
import warningIcon from "../assets/blive/warning.svg";
import ticketThumbnail from "../assets/blive/ticket-thumbnail.png";
import oldTicketing from "../assets/blive/old-ticketing.png";
import jtbdImg from "../assets/blive/jtbd.png";
import researchImg from "../assets/blive/research.png";
import iterationsImg from "../assets/blive/iterations.png";
import liveChatImg from "../assets/blive/tradeoffs/live-chat.png";
import kanbanImg from "../assets/blive/tradeoffs/kanban-vs-table.png";
import dsBeforeImg from "../assets/blive/design-system/before.png";
import dsAfterImg from "../assets/blive/design-system/after.png";
import adminSticker from "../assets/blive/personas/admin.png";
import riderSticker from "../assets/blive/personas/rider.png";
import dmSticker from "../assets/blive/personas/dm-manager.png";
import recoverySticker from "../assets/blive/personas/recovery-manager.png";
import riderCard from "../assets/blive/scoping/rider.png";
import adminCard from "../assets/blive/scoping/admin.png";
import supportCard from "../assets/blive/scoping/support-team.png";

// NOTE: prose below is placeholder/first-pass copy — the client edits case-study
// text by hand. Stickers use emojis for now; real graphics come later.

const chips = ["Internal Dashboard","UX Research","Sole Design","0→1 Product"];

const team = [
  { name: "Avni Garg (Me)", role: "Product Designer" },
  { name: "Prasenjit", role: "AVP of Product" },
  { name: "Sneha Jha", role: "Associate Product Manager" },
  { name: "Govind", role: "Senior Developer" },
  { name: "Divyanshu", role: "Senior Frontend Developer" },
];

const problemCards = [
  { title: "Rider contact through WhatsApp", text: "Riders called or WhatsApp'd whoever they personally knew at B:Live." },
  { title: "Using spreadsheets for records", text: "Issues were noted in spreadsheets, forwarded manually, or simply forgotten." },
  { title: "No accountability", text: "Zero digital record, no history, no status." },
  { title: "No assigned user", text: "Most issues died for one reason: no ticket was ever assigned to anyone." },
];

// Each persona carries its own colour family: `bg` (card, lightest), `pill`
// (a darker shade of the same hue for the Needs pill) and `text` (darkest, for
// the pill label + the needs line).
const personas = [
  { name: "Admin", role: "Oversees the whole support operation.", needs: "Needs to change routing rules (categories, departments, reasons) themselves, and reassign stuck tickets with the change always logged.", bg: "bg-emerald-50/70", pill: "bg-emerald-100", text: "text-emerald-800", img: adminSticker },
  { name: "Rider", role: "Raises issues about payments, vehicles, documents. Low patience, on the road.", needs: "Needs a simple way to raise an issue and see it's being handled, without calling someone they know personally.", bg: "bg-blue-50/70", pill: "bg-blue-100", text: "text-blue-800", img: riderSticker },
  { name: "DM Manager", role: "Personally allocated to specific riders, who call them for everything.", needs: "Needs their own riders' tickets to reach them directly, with enough context to respond like someone who already knows them.", bg: "bg-amber-50/70", pill: "bg-amber-100", text: "text-amber-800", img: dmSticker },
  { name: "Recovery Manager", role: "Oversees the whole support operation.", needs: "Needs immediate visibility into dues-linked tickets (immobilization, payment, blocked closures) with an unambiguous payment-status reason on close.", bg: "bg-brand-pink-light/40", pill: "bg-brand-pink-light", text: "text-brand-pink", img: recoverySticker },
];

// Breadcrumb-style steps. `color` cycles the existing brand accents for the
// step number (grey `label` on top, dark `text` statement below).
const actionCards = [
  { num: "01", label: "Ticket Master", text: "Admins can configure categories, link them to departments, and define resolution reasons, so tickets are automatically sent to the right team.", color: "text-brand-green" },
  { num: "02", label: "Ticket Management", text: "The operational workspace with a strict lifecycle and full audit logs.", color: "text-brand-pink" },
  { num: "03", label: "Automated assignment engine", text: "Category → Department → Team member, with city-based segregation and a DM exception.", color: "text-brand-amber" },
  { num: "04", label: "Rider-facing Help & Support", text: "In the EZY app, with FAQ deflection before ticket creation.", color: "text-brand-green" },
  { num: "05", label: "User Management", text: "Because assignment logic needs to know who works where, in which city, in which role.", color: "text-brand-green" },
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
          me riders call him, and only him, for everything; manual triage would just digitize the
          old bottleneck.
        </p>
        <p className="font-medium text-ink">
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
          I explored a kanban board; visually, four lifecycle stages map beautifully to columns.
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
          We <Em>agreed to land it in the next version</Em>, alongside{" "}
          <Em>AI integration, auto-classifying tickets, inferring criticality from descriptions,</Em>{" "}
          and eventually suggesting resolutions from historical data. I lost the v1 battle, but the
          proposal shaped the roadmap.
        </p>
      </>
    ),
  },
];

const outcomeStats = [
  { value: "70%", label: "Ticket resolution time, post-launch." },
  { value: "15min", label: "Average acknowledgment time." },
  { value: "90%", label: "Tickets auto-routed to the right team." },
  { value: "4/5+", label: "Post-resolution rider rating." },
  { value: "100%", label: "Category coverage, zero orphaned tickets." },
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

          {/* meta line — company + period */}
          <div className="mt-6 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-ink-faint">
            <img src={bliveIcon} alt="" className="h-5 w-5 shrink-0 rounded object-contain" />
            <span>B:Live, EV Mobility Platform</span>
            <span className="text-ink-faint/50">·</span>
            <span>Jan 2025 – Present</span>
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

          {/* thumbnail (same frame as the home page) */}
          <BrowserFrame url="blive.co.in" className="mt-12">
            <div className="aspect-[1224/436] w-full overflow-hidden">
              <img src={ticketThumbnail} alt="" className="h-full w-full object-cover object-top" />
            </div>
          </BrowserFrame>

          {/* about + team */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                About
              </span>
              <p className="mt-4 text-xl leading-relaxed text-ink">
                I owned end-to-end UX for the admin dashboard (Ticket Master, Ticket Management, User
                Management, Settings) and the rider-facing Help &amp; Support experience in the EZY
                app, plus I designed a new design system for the platform from the ground up. With a
                team this small, I wasn&rsquo;t just producing screens; I was in every scoping
                conversation, contributing to product logic, and negotiating trade-offs directly with
                engineering.
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
          <div className="mt-12">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Problem</span>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-xl text-ink-muted">
                  B:Live manages EV fleets for delivery riders across cities. When something went
                  wrong, a payment failure, a vehicle breakdown, a document issue, this is how it
                  got &ldquo;handled.&rdquo;
                </p>
              
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {problemCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-white shadow-sm">
                        <img src={warningIcon} alt="" className="h-5 w-5" />
                      </span>
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
                  <span className="text-ink">User interviews across every role that touches a support issue,</span> riders, fleet
                  operators, hub managers, deployment managers, and recovery managers. <span className="text-ink">Historical complaint analysis,</span> going through past issues raised via calls and WhatsApp to
                  understand real categories, frequency, and where they died.
                </p>
                <p>
                  Then <span className="text-ink">I made research a habit, not a phase: recurring one-hour weekly sessions with
                  all POCs, for three consecutive weeks,</span>  so every decision could be validated against
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
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium ${p.pill} ${p.text}`}
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
              JTBD framework
            </span>
            <img
              src={jtbdImg}
              alt="Jobs-to-be-done framework — When / I want to / So I can"
              className="mt-6 w-full rounded-2xl border border-ink/10"
            />
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
            <div className="mx-auto mt-6 aspect-[1516/960] w-1/2 overflow-hidden rounded-3xl border border-ink/10">
              <img
                src={iterationsImg}
                alt="Design iteration screens"
                className="h-full w-full object-cover object-top"
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
                    <span className={`inline-block rounded-md px-2 py-1 text-xs font-medium ${t.statusClass}`}>
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

          {/* design system modernization */}
          <div className="mt-20">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
              Design system modernization
            </span>
            <h3 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink">
              Design system, built out from Align UI
            </h3>
            <p className="mt-6 text-lg text-ink-muted">
              The dashboard had no usable design system, so alongside this project I built one for the
              entire platform, not just this module. I started from <Em>Align UI,</Em> a purchased
              component library, as the foundation, but a library alone is just raw components. I
              designed and assembled the actual system B:Live needed: tokens adapted to B:Live&rsquo;s
              brand (color, type, spacing, elevation), components customized and extended into tables,
              filters, modals, dependent dropdowns, status tags, uploads, and empty states, and
              reusable patterns, table + filter bar, detail view + activity log, confirmation/guardrail
              states, built from those components.
            </p>

            {/* before / after — each labelled just above its top-left corner. Both
                sit in the same aspect box so they render at exactly the same size. */}
            <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2">
              {[
                { label: "Before", src: dsBeforeImg },
                { label: "After", src: dsAfterImg },
              ].map((shot) => (
                <div key={shot.label}>
                  <span className="mb-3 block text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
                    {shot.label}
                  </span>
                  <div className="aspect-[8/5] w-full overflow-hidden rounded-2xl border border-ink/10">
                    <img
                      src={shot.src}
                      alt={`Dashboard ${shot.label.toLowerCase()} the design system`}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              ))}
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
              Support went from <Em>&ldquo;WhatsApp someone you know and hope&rdquo;</Em> to a system where
              every issue has a record, an owner, a status the rider can see, and a documented
              resolution. Service quality improved across the board, and for the first time, B:Live
              has the data to keep improving it.
            </p>
            <p>
              <span className="font-medium text-ink">What&rsquo;s next:</span> v2 is scoped to bring
              ticket criticality/priority levels and AI integration, auto-classifying tickets,
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
