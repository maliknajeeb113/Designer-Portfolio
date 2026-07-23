import { FiArrowUpRight } from "react-icons/fi";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";

const RESUME_URL =
  "https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link";

// Placeholder avatars for the social-proof row. Swap for the real customer/brand
// marks (exported from Figma) when available.
const avatars = ["#F7DCE9", "#D9F2E4", "#FCE9CE", "#DCE7FB", "#EADCF7"];

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
              Currently designing intuitive B2B &amp; B2C SaaS experiences at B:Live — focused on
              minimalism, easy-to-understand information, and workflows that get out of the way.
              0→1 products, given the care they deserve.
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
                {avatars.map((color) => (
                  <span
                    key={color}
                    className="h-7 w-7 rounded-full border-2 border-white"
                    style={{ backgroundColor: color }}
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
