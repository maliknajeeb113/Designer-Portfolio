import { FiStar, FiCheckCircle, FiImage } from "react-icons/fi";
import PageShell from "../components/PageShell";
import Container from "../components/Container";
import BreadcrumbSteps from "../components/BreadcrumbSteps";
import Eyebrow from "../components/Eyebrow";
import SectionHeading from "../components/SectionHeading";
import BrowserFrame from "../components/BrowserFrame";
import {
  chips,
  team,
  timeline,
  researchTracks,
  actionSteps,
  riderStories,
  tradeoffs,
  outcomeStats,
  bliveIcon,
  heroImg,
  researchBoardImg,
  scopingUserStoryImg,
  designSystemImg,
} from "../content/ezy";
import Seo from "../components/Seo";
import { PAGE_SEO, caseStudyJsonLd } from "../config/seo";

const Ezy = () => {
  return (
    <PageShell>
    <Seo seo={PAGE_SEO.ezy} jsonLd={caseStudyJsonLd(PAGE_SEO.ezy)} />
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
              <Eyebrow>About</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                I owned all research and design for this project, every user interview, every hub
                visit, and every screen. I worked with a senior designer on building the new design
                system, and partnered closely with the PM on what made it into scope. With a team
                this small, I wasn't just producing screens; I was the one deciding what riders
                actually needed, based on research I ran myself.
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
          <div className="mt-12 flex flex-col gap-4">
            <Eyebrow>Problem</Eyebrow>
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
                    <Eyebrow className="mt-1">{beat.when}</Eyebrow>
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
            <Eyebrow>Research</Eyebrow>
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
              <Eyebrow>Two different reads on the problem</Eyebrow>
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
            <Eyebrow tone="ink">Action plan</Eyebrow>
            <p className="mt-4 text-lg text-ink">
              Research pointed to one core insight: EZY wasn't failing because it was hard to use;
              it was failing because it gave riders no reason to open it after day one. With three
              months, I scoped the plan around the two problems most directly causing riders to
              leave.
            </p>
            <BreadcrumbSteps steps={actionSteps} />
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="py-16">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
          <Eyebrow className="mt-10">User story</Eyebrow>
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
            <Eyebrow>Design Iterations</Eyebrow>
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
            <Eyebrow>Design Trade-offs</Eyebrow>
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
            <Eyebrow>Design system modernization</Eyebrow>
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
          <Eyebrow className="mt-10">Resolved</Eyebrow>
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
