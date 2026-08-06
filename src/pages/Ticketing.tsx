import { FiStar } from "react-icons/fi";
import PageShell from "../components/PageShell";
import Container from "../components/Container";
import BreadcrumbSteps from "../components/BreadcrumbSteps";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import {
  chips,
  team,
  problemCards,
  personas,
  actionCards,
  personaCards,
  Em,
  tradeoffs,
  outcomeStats,
  bliveIcon,
  warningIcon,
  ticketThumbnail,
  oldTicketing,
  jtbdImg,
  researchImg,
  iterationsImg,
  dsBeforeImg,
  dsAfterImg,
} from "../content/ticketing";
import Seo from "../components/Seo";
import { PAGE_SEO, caseStudyJsonLd } from "../config/seo";

const Ticketing = () => {
  return (
    <PageShell>
    <Seo seo={PAGE_SEO.ticketing} jsonLd={caseStudyJsonLd(PAGE_SEO.ticketing)} />
      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40">
        <Container>
          <h1 className="max-w-6xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            From whatsapp chaos to a{" "}
            <span className="font-script text-[1.15em] text-brand-green">Ticketing</span> system
          </h1>

          {/* meta line — company + period */}
          <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wide text-ink-faint">
            <img src={bliveIcon} alt="" className="h-6 w-6 shrink-0 rounded object-contain" loading="lazy" decoding="async" />
            <span>B:Live, EV Mobility Platform</span>
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

          {/* thumbnail (same frame as the home page) */}
          <BrowserFrame url="blive.co.in" className="mt-12">
            <div className="aspect-[1224/436] w-full overflow-hidden">
              <img src={ticketThumbnail} alt="" className="h-full w-full object-cover object-top" loading="eager" fetchPriority="high" decoding="async" />
            </div>
          </BrowserFrame>

          {/* about + team */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <Eyebrow>About</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                I owned end-to-end UX for the admin dashboard (Ticket Master, Ticket Management, User
                Management, Settings) and the rider-facing Help &amp; Support experience in the EZY
                app, plus I designed a new design system for the platform from the ground up. With a
                team this small, I wasn&rsquo;t just producing screens; I was in every scoping
                conversation, contributing to product logic, and negotiating trade-offs directly with
                engineering.
              </p>
            </div>
            <div>
              <Eyebrow>Team</Eyebrow>
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
            <Eyebrow>Problem</Eyebrow>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="text-lg  text-ink">
                  B:Live manages EV fleets for delivery riders across cities. When something went
                  wrong, a payment failure, a vehicle breakdown, a document issue, this is how it
                  got &ldquo;handled.&rdquo;
                </p>
              
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {problemCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-ink/10 bg-ink-faint/[0.05] p-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-white shadow-sm">
                        <img src={warningIcon} alt="" className="h-5 w-5" loading="lazy" decoding="async" />
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
                  className="absolute inset-0 h-full w-full rounded-3xl border border-ink/10 object-cover object-top bg-ink-faint/[0.05]" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Research */}
          <div className="mt-16">
            <Eyebrow>Research</Eyebrow>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div className="flex flex-col gap-4 text-lg text-ink-faint max-w-2xl">
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
                  className="absolute inset-0 h-full w-full rounded-3xl border border-ink/10 object-cover object-top" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Target personas */}
          <div className="mt-16">
            <Eyebrow>Target personas</Eyebrow>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {personas.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-[2.25rem] border border-white/60 p-8 backdrop-blur-sm ${p.bg}`}
                >
                  {/* name + sticker share the top row; copy runs full width below */}
                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-xl sm:text-2xl font-medium text-ink">{p.name}</h4>
                    <img src={p.img} alt="" className="h-14 w-auto shrink-0 object-contain" loading="lazy" decoding="async" />
                  </div>
                  <p className="mt-4 text-sm text-ink-muted">{p.role}</p>

                  <div className="mt-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium ${p.pill} ${p.text}`}
                    >
                      <FiStar className="h-3.5 w-3.5" />
                      Needs
                    </span>
                    <p className="mt-3 text-sm">{p.needs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* JTBD framework */}
          <div className="mt-16">
            <Eyebrow>JTBD framework</Eyebrow>
            <img
              src={jtbdImg}
              alt="Jobs-to-be-done framework — When / I want to / So I can"
              className="mt-6 w-full rounded-2xl border border-ink/10" loading="lazy" decoding="async" />
          </div>

          {/* Action plan */}
          <div className="mt-16">
            <Eyebrow tone="ink">Action plan</Eyebrow>
            <p className="mt-4 text-lg text-ink-muted">
              Research pointed to one core insight: the product isn't a ticket list it's an ownership machine. Every ticket needed exactly one accountable owner, automatically.
            </p>
            <BreadcrumbSteps steps={actionCards} />
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
          <Eyebrow className="mt-10">User story</Eyebrow>
          {/* mobile: equal-width cards stacked one after another */}
          <div className="mt-8 flex flex-col gap-6 lg:hidden">
            {personaCards.map((card) => (
              <img key={card.alt} src={card.src} alt={card.alt} className="w-full" loading="lazy" decoding="async" />
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
                style={{ left: card.left, top: card.top, width: card.width }} loading="lazy" decoding="async" />
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
            <Eyebrow>Design Iterations</Eyebrow>
            <div className="mx-auto mt-6 aspect-[1516/960] w-full overflow-hidden rounded-3xl border border-ink/10 lg:w-2/3">
              <img
                src={iterationsImg}
                alt="Design iteration screens"
                className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* trade-offs */}
          <div className="mt-16">
            <Eyebrow>Design Trade-offs</Eyebrow>
            <div className="mt-8 flex flex-col gap-16">
              {tradeoffs.map((t) => {
                const heading = (
                  <div>
                    <span className={`inline-block rounded-md px-2 py-1 text-xs font-medium ${t.statusClass}`}>
                      {t.status}
                    </span>
                    <h3 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-ink">{t.title}</h3>
                    <div className="mt-4 flex flex-col gap-4 text-base sm:text-lg text-ink-muted/[0.7]">{t.body}</div>
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
                      className="w-full rounded-2xl border border-ink/10 object-top lg:h-[400px] lg:object-cover" loading="lazy" decoding="async" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* design system modernization */}
          <div className="mt-20">
            <Eyebrow>Design system modernization</Eyebrow>
            <h3 className="mt-6 max-w-2xl font-display text-3xl sm:text-4xl font-semibold leading-tight text-ink">
              Design system, built out from Align UI
            </h3>
            <p className="mt-6 text-base sm:text-lg text-ink-muted">
              The dashboard had no usable design system, so alongside this project I built one for the
              entire platform, not just this module. I started from <span className="text-ink">Align UI,</span> a purchased
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
                  <Eyebrow className="mb-3">{shot.label}</Eyebrow>
                  <div className="aspect-[8/5] w-full overflow-hidden rounded-2xl border border-ink/10">
                    <img
                      src={shot.src}
                      alt={`Dashboard ${shot.label.toLowerCase()} the design system`}
                      className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
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

          <Eyebrow className="mt-10">Resolved</Eyebrow>

          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
            
            {outcomeStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-ink sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-ink/[0.03] p-8 text-lg text-ink-muted sm:p-10">
            <p>
              Support went from <Em>&ldquo;WhatsApp someone you know and hope&rdquo;</Em> to a system where
              every issue has a record, an owner, a status the rider can see, and a documented
              resolution. Service quality improved across the board, and for the first time, B:Live
              has the data to keep improving it.
            </p>
            <p>
              <span className="font-semibold text-ink">What&rsquo;s next:</span> v2 is scoped to bring
              ticket criticality/priority levels and AI integration, auto-classifying tickets,
              inferring urgency, and suggesting resolutions from the historical data this platform is
              now, for the first time, actually capturing.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
};

export default Ticketing;
