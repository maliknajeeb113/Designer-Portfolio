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
  Em,
  personas,
  researchTracks,
  actionSteps,
  features,
  outcomeStats,
  saleskenIcon,
  heroDashboard,
  problemImg,
  researchCardImg,
  researchBoardImg,
  jtbdImg,
  howTwoSidesImg,
  scopingAgentImg,
  scopingCustomerImg,
  iterationsImg,
} from "../content/salesken";
import Seo from "../components/Seo";
import { PAGE_SEO, caseStudyJsonLd } from "../config/seo";

const Salesken = () => {
  return (
    <PageShell>
    <Seo seo={PAGE_SEO.salesken} jsonLd={caseStudyJsonLd(PAGE_SEO.salesken)} />
      {/* ===== HEADER ===== */}
      <section className="pt-32 sm:pt-40">
        <Container>
          <h1 className="max-w-5xl font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            Giving sales reps something to say,{" "}
            <span className="font-script text-[1.15em] text-brand-green">mid-call</span>
          </h1>

          {/* meta line — company + period */}
          <div className="mt-6 flex items-center gap-2 text-sm uppercase tracking-wide text-ink-faint">
            <img src={saleskenIcon} alt="" className="h-6 w-6 shrink-0 rounded object-contain" loading="lazy" decoding="async" />
            <span>Salesken.ai</span>
            <span className="text-ink-faint/50">·</span>
            <span>5 MONTHS</span>
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

          {/* hero — co-browsing session */}
          <BrowserFrame url="www.saleken.ai" className="mt-12">
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img src={heroDashboard} alt="" className="h-full w-full object-cover object-top" loading="eager" fetchPriority="high" decoding="async" />
            </div>
          </BrowserFrame>

          {/* about + team */}
          <div className="mt-20 grid gap-12 lg:grid-cols-[1.8fr_1fr]">
            <div>
              <Eyebrow>About</Eyebrow>
              <p className="mt-4 text-lg leading-relaxed text-ink">
                Co-Browser, a real-time AI assistant that surfaces the right prompt, product
                context, and next step while a rep is still on the phone, designed end-to-end from
                research through shipped UX.
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
            <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col gap-6">
                <p className="text-lg text-ink">
                  Salesken&rsquo;s own app needed the same fix it was meant to give customers.
                  Scheduling calls, checking deal insights, and getting real-time tips meant hopping
                  between separate tools mid-workflow, a messy setup that cost reps time they
                  should&rsquo;ve spent talking to the customer, not searching for what to say to
                  them.
                </p>
                {/* pull-quote — gaps in the current app */}
                <figure className="rounded-2xl border border-ink/10 bg-ink/[0.02] p-6">
                  <figcaption className="text-sm font-medium text-ink-muted">
                    Gaps in the current app:
                  </figcaption>
                  <blockquote className="mt-3 text-base  italic text-ink-muted">
                    <Em>&ldquo;There are moments mid-call where I just don&rsquo;t know how to convince
                    the customer, and that&rsquo;s exactly when I lose them.&rdquo;</Em> That was the
                    pattern behind lost conversions, not a knowledge gap, but a freeze, at the one
                    moment a rep couldn&rsquo;t afford it.
                  </blockquote>
                </figure>
              </div>
              <div className="aspect-[1200/643] w-full overflow-hidden rounded-2xl border border-ink/10">
                <img
                  src={problemImg}
                  alt="The existing Real-Time Sales Assistance screen"
                  className="h-full w-full object-cover object-left-top" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Target personas */}
          <div className="mt-20">
            <Eyebrow>Target personas</Eyebrow>
            <p className="mt-6 text-lg text-ink">
              Co-Browser is a two-sided product, an agent on a client company&rsquo;s sales floor,
              and a customer who registered for a demo on that company&rsquo;s site.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {personas.map((p) => (
                <div
                  key={p.name}
                  className={`flex flex-col rounded-[2rem] border border-white/60 p-8 backdrop-blur-sm bg-ink-faint/[0.05]`}
                >
                  {/* name + sticker share the top row; copy runs full width below */}
                  <div className="flex items-center gap-3">
                    <h4 className="font-display text-2xl font-medium text-ink">{p.name}</h4>
                    <img src={p.img} alt="" className="h-14 w-auto shrink-0 object-contain" loading="lazy" decoding="async" />
                  </div>
                  <div className="mt-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm font-medium ${p.pill} ${p.text}`}
                    >
                      <FiStar className="h-3.5 w-3.5" />
                      WHAT THEY WANT
                    </span>
                    <p className="mt-3 text-base text-ink-muted">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research */}
          <div className="mt-20">
            <Eyebrow>Research</Eyebrow>
            <p className="mt-4 text-lg text-ink">
              I didn&rsquo;t have access to Salesken&rsquo;s own reps as interview subjects, so
              research ran on two tracks in parallel: a competitive teardown of how the market
              already solved this, and primary interviews with sales reps at other companies to get
              an unbiased read on the job itself.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <div className="flex flex-col gap-6 ">
                {researchTracks.map((track) => (
                  <div
                    key={track.title}
                    className="flex flex-1 flex-col rounded-2xl border border-ink/10 bg-ink-faint/[0.05] p-6"
                  >
                    {/* competitor app icons — 1×5 row */}
                    {track.logos && (
                      <div className="mb-5 flex flex-wrap gap-3 place-self-start">
                        {track.logos.map((logo, i) => (
                          <img
                            key={i}
                            src={logo}
                            alt=""
                            className="h-12 w-12 rounded-[12px] object-contain" loading="lazy" decoding="async" />
                        ))}
                      </div>
                    )}
                    {/* persona sticker for the interview track */}
                    {track.sticker && (
                      <img src={track.sticker} alt="" className="mb-2 h-20 w-auto object-contain place-self-start" loading="lazy" decoding="async" />
                    )}
                    <h4 className="font-display text-xl font-semibold text-ink">{track.title}</h4>
                    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg bg-brand-pink-light px-2 py-1 text-sm font-medium text-brand-pink">
                      <FiStar className="h-3.5 w-3.5" />
                      What I did
                    </span>
                    <p className="mt-4 text-base text-ink-faint">{track.body}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-ink/10 lg:min-h-[420px]">
                <img
                  src={researchCardImg}
                  alt="Competitive teardown board in Notion"
                  className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="mt-8 aspect-[1512/630] w-full overflow-hidden rounded-2xl border border-ink/10">
              <img
                src={researchBoardImg}
                alt="Research synthesis board"
                className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* JTBD framework */}
          <div className="mt-20">
            <Eyebrow>JTBD framework</Eyebrow>
            <div className="mt-6 aspect-[1512/744] w-full overflow-hidden rounded-2xl border border-ink/10">
              <img src={jtbdImg} alt="Jobs-to-be-done framework" className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Action plan */}
          <div className="mt-20">
            <Eyebrow tone="ink">Action plan</Eyebrow>
            <p className="mt-4 text-lg text-ink-muted">
              Three connected surfaces, not one screen; one for the customer, two supporting the
              agent through the session.
            </p>
            <BreadcrumbSteps steps={actionSteps} />
          </div>

          {/* How two sides meet */}
          <div className="mt-20">
            <Eyebrow>How two sides meet</Eyebrow>
            <p className="mt-4 text-lg text-ink">
              A co-browsing session, not a phone call; the customer and agent share one screen, but
              see different things on it.
            </p>
            <BrowserFrame url="www.saleken.ai" className="mt-8">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={howTwoSidesImg} alt="" className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
              </div>
            </BrowserFrame>
            <p className="mt-6 rounded-2xl border border-ink/10 bg-ink/[0.02] px-5 py-4 text-sm sm:text-base text-ink-muted">
              Agent guides the customer live through the demo, responding to exactly where
              they&rsquo;re pointing.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== 2. PRODUCT SCOPING ===== */}
      <section className="pt-12">
        <Container>
          <SectionHeading number="2" title="Product Scoping" />
          <Eyebrow className="mt-10">User story</Eyebrow>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            {[
              { src: scopingCustomerImg, alt: "Customer user story"},
              { src: scopingAgentImg, alt: "Agent user story"},
            ].map((shot) => (
              <div key={shot.alt}>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full" loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 3. DESIGN EVOLUTION ===== */}
      <section className="pt-12 ">
        <Container>
          <SectionHeading number="3" title="Design Evolution" />

          {/* iterations */}
          <div className="mt-12">
            <Eyebrow>Design Iterations</Eyebrow>
            <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-start">
              <div className="flex flex-1 flex-col gap-6 text-lg text-ink-faint md:max-w-2xl">
                <p className="text-ink">Several rounds, directly in Figma.</p>
                <p>I designed across three tracks, the
                  customer view, the agent view, and how they connect. Both the layout and the
                  information on screen changed a lot as I iterated.</p>
                <p>
                  Early versions packed too much into one panel, so I broke it into clearer, focused
                  sections. It took several rounds before the structure felt right. The final design
                  kept only what the agent needed in that moment, and moved the rest into separate
                  tabs.
                </p>
              </div>
              <img
                src={iterationsImg}
                alt="Design iteration board in Figma"
                className="w-full shrink-0 rounded-3xl border border-ink/10 md:w-[700px]" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* more features added — stakeholder review rounds (one section, two features) */}
          <div className="mt-20">
            <Eyebrow>More features added</Eyebrow>
            <div className="mt-6 flex flex-col gap-16">
              {features.map((feature) => (
                <div key={feature.title} className="grid gap-10 lg:grid-cols-2">
                  <div className="max-w-2xl">
                    <span className="inline-block rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      {feature.badge}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <div className="mt-4 flex flex-col gap-4 text-base text-ink-muted/[0.7]">
                      {feature.body}
                    </div>
                  </div>
                  <img
                    src={feature.image}
                    alt={`${feature.title} — screen`}
                    className="w-full rounded-2xl border border-ink/10 object-cover object-top" loading="lazy" decoding="async" />
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
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {outcomeStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-ink sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-ink/[0.03] p-8 text-md text-ink-muted sm:p-10">
            <p>
              <span className="text-ink">Where it is now:</span> Co-Browser went into
              development after I left, and it&rsquo;s live today as part of Salesken&rsquo;s AI
              Sales Assistant. The product still ships the pieces I designed: real-time in-call
              prompts, AI-drafted follow-up emails pulled from the conversation and deal history, and
              Smart To-Dos. Salesken sells it per seat to sales teams, and the company reports
              it&rsquo;s used by 200+ businesses.
            </p>
          </div>
          <div className="mt-12 flex flex-col gap-4 rounded-3xl border border-ink/10 bg-brand-pink-light/[0.1] p-8 text-md text-ink-muted sm:p-10">
            <p className="font-medium text-ink">
              This internship was the most challenging, most rewarding stretch of work I&rsquo;d done,
              mostly because of how ambiguous and fast-moving it was.
            </p>
            <p className="text-sm">
              I didn&rsquo;t stay on to see it through to launch, so I can&rsquo;t claim specific
              usage numbers from my time there. But knowing the direction shipped, and is still what
              agents use today, is the outcome I can stand behind.
            </p>
          </div>
        </Container>
      </section>
    </PageShell>
  );
};

export default Salesken;
