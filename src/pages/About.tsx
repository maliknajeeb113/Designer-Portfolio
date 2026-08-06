import PageShell from "../components/PageShell";
import Container from "../components/Container";
import RotatingText from "../components/RotatingText";
import Eyebrow from "../components/Eyebrow";
import { workExperienceData } from "../constants";
import avniPhoto from "../assets/heroImage.jpg";
import Seo from "../components/Seo";
import { PAGE_SEO, personJsonLd } from "../config/seo";

// Greetings the header rotates through (the script-green accent word).
const greetings = ["Hi,", "Hola,", "Namaste,", "Namaskara,", "Bonjour,", "Ciao,"];

// About page — intro blurb, portrait, and the experience list. Previously this
// was a near-empty page wrapping an <Experience> component; both are one page now.
const About = () => (
  <PageShell className="bg-white pt-32 sm:pt-40">
    <Seo seo={PAGE_SEO.about} jsonLd={personJsonLd} />
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-start lg:gap-16">
          {/* portrait — leads on mobile, sits to the right on desktop */}
          <div className="shrink-0 lg:w-72 xl:w-80">
            <img
              src={avniPhoto}
              alt="Avni Garg, product designer, smiling outdoors"
              width={1440}
              height={1800}
              className="aspect-[4/5] w-full rounded-3xl border border-ink/10 object-cover shadow-sm" loading="eager" fetchPriority="high" decoding="async" />
          </div>

          <div className="lg:flex-1">
            {/* the page's <h1> — /about had no top-level heading before */}
            <h1 className="flex items-center gap-2 font-display text-3xl font-bold text-ink md:text-5xl">
              <RotatingText
                texts={greetings}
                mainClassName="font-script text-[1.15em] text-brand-green"
                splitLevelClassName="overflow-hidden leading-[1.4] px-[0.25em]"
                staggerFrom="last"
                staggerDuration={0.05}
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
              <span>I am Avni.</span>
            </h1>

            <div className="mt-6 flex flex-col gap-4 text-base text-ink-muted sm:text-lg">
              <p>
                I&rsquo;m a Product Designer who is passionate about creating clean, intuitive, and
                human-centered digital experiences.
              </p>
              <p>
                Currently, I design B2B and B2C experiences at B:Live, helping fleet operators and
                delivery professionals use EVs efficiently through smart fleet and mobility
                solutions.
              </p>
              <p>
                I focus on simplifying complex workflows and crafting minimal, user-friendly
                interfaces that make technology easy to use.
              </p>
              <p>
                Lately, I&rsquo;ve been weaving AI into how I design, using it to move faster from
                idea to interface, and vibe-coding my own side projects to see how far these tools
                can go.
              </p>
              <p>
                Outside of work, I enjoy reading (a recent hobby!), running, and playing squash 🎾.
              </p>
            </div>
          </div>
        </div>

        {/* experience list */}
        <Eyebrow className="mb-2 mt-16">Experience</Eyebrow>
        <div className="flex flex-col divide-y divide-ink/10">
          {workExperienceData.map((exp) => (
            <div key={exp.id} className="flex items-start justify-between gap-4 py-5">
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">{exp.title}</h2>
                <div className="mt-1 flex items-center gap-2 text-sm text-ink-faint">
                  {exp.icon && (
                    <img src={exp.icon} alt="" className="h-5 w-5 shrink-0 object-contain" loading="lazy" decoding="async" />
                  )}
                  {exp.company}
                </div>
              </div>
              <div className="shrink-0 text-right text-sm text-ink-faint">{exp.period}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  </PageShell>
);

export default About;
