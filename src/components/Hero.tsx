import { FiArrowUpRight } from "react-icons/fi";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";
import { RESUME_URL } from "../config/site";
import avatar1 from "../assets/avatars/avatar-1.jpg";
import avatar2 from "../assets/avatars/avatar-2.jpg";
import avatar3 from "../assets/avatars/avatar-3.jpg";
import avatar4 from "../assets/avatars/avatar-4.jpg";
import avatar5 from "../assets/avatars/avatar-5.jpg";

// Social-proof row — customer headshots stacked with a slight overlap.
const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* hand-drawn grid background — static (fixed-size cells, crops at edges,
          no stretch), fills the whole hero, sits behind content (z-0, not a
          negative z-index which would hide it behind the page bg). */}
      <div className="absolute inset-0 z-0">
        <HandDrawnGrid cellSize={120} wobble={3} color="rgb(235,235,235)" className="h-full w-full" />
      </div>

      {/* content — vertically centered in the full-height hero, cleared past the nav */}
      <div className="relative z-10 flex flex-1 items-center pt-28 pb-16">
        <Container>
          <div className="flex max-w-4xl flex-col items-start gap-6">
            {/* status pill */}
            <div className="inline-flex items-center gap-2 text-sm text-ink-muted">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-green" />
              </span>
              Currently in Bangalore, India
            </div>

            {/* headline — forced to 3 lines with the script accent alone on line 3 */}
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-8xl">
              Making complex <br />
              workflows feel <br />
              <span className="font-script text-[1.15em] font-normal text-brand-green">
                Effortless.
              </span>
            </h1>

            {/* body — extra top gap after the headline */}
            <p className="mt-4 max-w-5xl text-base text-ink-muted sm:text-lg">
              Product designer at B:Live, turning messy B2B & B2C SaaS into something people actually understand.
              <br />
              I run the research, sweat the edge cases, and ship 0→1 features. Frontend background, so the structure I design is structure engineers can build.
            </p>

            {/* resume button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Resume
              <FiArrowUpRight className="h-4 w-4" />
            </a>

            {/* social proof — wraps to two lines on narrow screens. Both the
                avatar row and the avatars themselves are shrink-0: as flex
                items they'd otherwise be compressed by the caption, collapsing
                the -space-x-2 overlap so the text rode over the faces. */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
              <div className="flex shrink-0 -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 shrink-0 rounded-full border-2 border-white object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <span className="text-sm text-ink-faint">
                B2B SaaS and EZY App used by 10k+ users!
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
