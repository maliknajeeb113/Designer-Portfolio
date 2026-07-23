import Container from "./Container";
import { workExperienceData } from "../constants";

// "Where I've been" — short about blurb + the experience list.
const Experience = () => {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
          Where I&rsquo;ve <span className="font-script text-[1.15em] text-brand-green">been.</span>
        </h2>

        <div className="mt-6 flex max-w-6xl flex-col gap-4 text-base text-ink-muted sm:text-lg">
          <p>
            I&rsquo;m Avni Garg, a Product Designer passionate about creating clean, intuitive, and
            human-centered digital experiences.
          </p>
          <p>
            Currently, I design B2B and B2C experiences at B:Live, helping fleet operators and
            delivery professionals use EVs efficiently through smart fleet and mobility solutions.
          </p>
          <p>
            I focus on simplifying complex workflows and crafting minimal, user-friendly interfaces
            that make technology easy to use.
          </p>
          <p>Outside of work, I enjoy reading (a recent hobby!) and playing squash 🎾.</p>
        </div>

        {/* experience list */}
        <p className="mb-2 mt-16 text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
          Experience
        </p>
        <div className="flex flex-col divide-y divide-ink/10">
          {workExperienceData.map((exp) => (
            <div
              key={exp.id}
              className="flex items-start justify-between gap-4 py-5"
            >
              <div>
                <div className="font-display text-lg font-semibold text-ink">{exp.title}</div>
                <div className="mt-1 flex items-center gap-2 text-sm text-ink-faint">
                  {exp.icon && <img src={exp.icon} alt="" className="h-4 w-4 shrink-0 object-contain" />}
                  {exp.company}
                </div>
              </div>
              <div className="shrink-0 text-right text-sm text-ink-faint">{exp.period}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
