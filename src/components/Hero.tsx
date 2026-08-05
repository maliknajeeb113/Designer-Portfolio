import { FiArrowUpRight } from "react-icons/fi";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";
import avatar1 from "../assets/avatars/avatar-1.jpg";
import avatar2 from "../assets/avatars/avatar-2.jpg";
import avatar3 from "../assets/avatars/avatar-3.jpg";
import avatar4 from "../assets/avatars/avatar-4.jpg";
import avatar5 from "../assets/avatars/avatar-5.jpg";

// Resume link lives in .env (VITE_RESUME_URL) so it can be updated without a code
// change; the literal is a safe fallback for local dev if the var is unset.
const RESUME_URL =
  import.meta.env.VITE_RESUME_URL ||
  "https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link";

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
              Product designer at B:Live, turning messy B2B &amp; B2C SaaS into something people
              actually understand. I run the research, sweat the edge cases, and ship 0→1 — most
              recently an EV rider app 10,000+ riders had quietly given up on.
            </p>

            {/* resume button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              Resume
              <FiArrowUpRight className="h-4 w-4" />
            </a>

            {/* social proof */}
            <div className="mt-2 flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm text-ink-faint">
                B2B SaaS and EZY App used by 1k+ customers!
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
