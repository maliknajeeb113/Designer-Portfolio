import { useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import PlaceholderImage from "../components/PlaceholderImage";
import BrowserFrame from "../components/BrowserFrame";
import ticketThumbnail from "../assets/blive/ticket-thumbnail.png";

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

const personas = [
  { emoji: "🧑‍💼", name: "Admin", text: "Oversees tickets, users, and settings across the whole platform." },
  { emoji: "🛵", name: "Rider", text: "Raises issues from the EZY DE app and needs quick, clear help." },
  { emoji: "🗂️", name: "DM Manager", text: "Manages deployment and vehicle logistics day to day." },
  { emoji: "🔧", name: "Recovery Manager", text: "Handles breakdowns and vehicle recovery on the ground." },
];

const jtbd = [
  { when: "a payment or issue is raised", want: "to log it in-app and track it", so: "keep working without chasing people on the phone" },
  { when: "a new ticket comes in", want: "it routed to exactly one owner", so: "start resolving instead of triaging" },
  { when: "a rider has a problem", want: "to see the ticket's full history", so: "understand the relationship without re-asking" },
  { when: "reviewing support performance", want: "to see every team's SLA record", so: "hold teams accountable and spot systemic issues" },
];

const actionCards = [
  { title: "One owner per ticket", text: "Every ticket gets exactly one accountable owner." },
  { title: "Auto-assignment", text: "Route by category and team, automatically." },
  { title: "Single source of truth", text: "One system replaces WhatsApp + spreadsheets." },
  { title: "SLA visibility", text: "Acknowledgment and resolution tracked per team." },
];

const scopingCards = [
  { emoji: "🛵", name: "Rider", story: "As a rider, I want to raise an issue from the app so I can get help fast.", tint: "bg-blue-50 border-blue-100" },
  { emoji: "🧑‍💼", name: "Admin", story: "As an admin, I want every ticket auto-assigned so nothing is orphaned.", tint: "bg-amber-50 border-amber-100" },
  { emoji: "🎧", name: "Support Team", story: "As support, I want full ticket history so I can resolve without re-asking.", tint: "bg-brand-pink-light/50 border-brand-pink/20" },
];

const tradeoffs = [
  { title: "Auto-assignment vs. manual triage", text: "Why auto-assignment won, with a manual override for edge cases." },
  { title: "Live chat inside tickets", text: "Keeping the conversation attached to the ticket, not a side channel." },
  { title: "Kanban vs. table view", text: "Why the table won for dense, operational ticket data." },
  { title: "Ticket criticality / priority", text: "Encoding urgency without overwhelming the interface." },
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
                className="rounded-full border border-ink/15 px-3 py-1 text-xs font-medium text-ink-muted"
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
        </Container>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <p className="text-lg text-ink-muted sm:text-xl">
              I owned end-to-end UX for the admin dashboard (Ticket Master, Ticket Management, User
              Management, Settings) and the rider-facing Help &amp; Support experience in the EZY DE
              app — plus a new design system for the platform, built from the ground up. With a team
              this small, I wasn&rsquo;t just producing screens; I was contributing to product logic
              and negotiating trade-offs directly with engineering.
            </p>
            <dl className="flex flex-col gap-4">
              {aboutMeta.map((row) => (
                <div key={row.k} className="border-t border-ink/10 pt-3">
                  <dt className="text-xs font-medium uppercase tracking-wide text-ink-faint">{row.k}</dt>
                  <dd className="mt-1 text-sm text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* ===== 1. WHO, WHY & WHAT ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading number="1" title="Who, Why & What" />

          {/* Problem */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <div>
              <p className="text-lg text-ink-muted">
                B:Live manages EV fleets for delivery riders across cities. When something went wrong
                — a payment failure, a vehicle breakdown, a document issue — this is how it got
                &ldquo;handled.&rdquo;
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
            <PlaceholderImage label="Chaos / WhatsApp screenshot" className="min-h-[420px] lg:h-full" />
          </div>

          {/* Research */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Research</span>
              <p className="mt-4 text-lg text-ink-muted">
                Before any layout, I went deep on how support actually worked today — and exactly
                where it broke. (Placeholder — full research copy to come.)
              </p>
            </div>
            <PlaceholderImage label="Research board / interviews" className="min-h-[320px]" />
          </div>

          {/* Target personas */}
          <div className="mt-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Target personas</span>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {personas.map((p) => (
                <div key={p.name} className="rounded-2xl border border-ink/10 bg-white p-6">
                  <div className="text-4xl">{p.emoji}</div>
                  <div className="mt-4 font-display text-lg font-semibold text-ink">{p.name}</div>
                  <p className="mt-1 text-sm text-ink-muted">{p.text}</p>
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
            <p className="mt-4 max-w-3xl text-lg text-ink-muted">
              Research led to one insight: the product isn&rsquo;t a ticket list — it&rsquo;s an
              ownership machine. Every ticket needs exactly one accountable owner, automatically.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {actionCards.map((card) => (
                <div key={card.title} className="rounded-2xl border border-ink/10 bg-white p-5">
                  <div className="font-medium text-ink">{card.title}</div>
                  <p className="mt-1 text-sm text-ink-muted">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
          <p className="mt-6 max-w-3xl text-lg text-ink-muted">
            User stories kept scope honest — one clear job per role, so the build stayed anchored to
            real needs instead of feature wishlists.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {scopingCards.map((card) => (
              <div key={card.name} className={`rounded-3xl border p-8 ${card.tint}`}>
                <div className="text-4xl">{card.emoji}</div>
                <div className="mt-4 font-display text-xl font-semibold text-ink">{card.name}</div>
                <p className="mt-3 text-ink-muted">{card.story}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 3. DESIGN EVOLUTION ===== */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading number="3" title="Design Evolution" />

          {/* iterations */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1.4fr] lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">Iterations</span>
              <div className="mt-4 flex flex-col gap-4 text-lg text-ink-muted">
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
            </div>
            <PlaceholderImage label="Iteration screens grid" className="min-h-[320px]" />
          </div>

          {/* trade-offs */}
          <div className="mt-16 flex flex-col gap-12">
            {tradeoffs.map((t, i) => (
              <div
                key={t.title}
                className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{t.title}</h3>
                  <p className="mt-3 text-ink-muted">{t.text}</p>
                </div>
                <PlaceholderImage label={`${t.title} — screens`} className="min-h-[260px]" />
              </div>
            ))}
          </div>

          {/* design system */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_1.4fr] lg:items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">Design system modernization</h3>
              <p className="mt-3 text-ink-muted">
                Built out from Align UI — a scalable component library that gave the platform a
                consistent, fast-to-extend foundation across every surface.
              </p>
            </div>
            <PlaceholderImage label="Design system / components" className="min-h-[320px]" />
          </div>
        </Container>
      </section>

      {/* ===== 4. OUTCOME ===== */}
      <section className="py-16 sm:py-24">
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
          <div className="mt-12 flex max-w-4xl flex-col gap-4 text-lg text-ink-muted">
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
