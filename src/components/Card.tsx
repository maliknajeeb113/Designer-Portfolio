import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { RiBookletLine } from "react-icons/ri";
import BrowserFrame from "./BrowserFrame";
import { JobData } from "../constants";

// A single case study on the home page: headline (with a green script accent word),
// a company/period meta line, a stats row, and a macOS-window screenshot.
// When `linkTo` is set the whole card is clickable; hovering the screenshot dims it
// and reveals a "View case study" affordance (the hover is scoped to the image only).
const Card = ({ label, headline, company, period, icon, stats, image, urlBar, linkTo }: JobData) => {
  const inner = (
    <>
      {label && (
        <span className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-ink/[0.04] px-3 py-1 text-xs font-medium text-ink/[0.6]">
          <RiBookletLine className="h-3.5 w-3.5 shrink-0 text-brand-green" />
          {label}
        </span>
      )}

      <div className="flex flex-col gap-6">
        <h2 className="font-display text-2xl font-medium leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          {headline.pre}
          <span className="font-script text-[1.15em] text-brand-green">{headline.highlight}</span>
          {headline.post}
        </h2>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-ink-faint">
          <img src={icon} alt="" className="h-5 w-5 shrink-0 object-contain" />
          <span>
            {company} · {period}
          </span>
        </div>
      </div>

      {/* stats — 2×2 on mobile (spaced by gap, no dividers), a full-width
          4-column bar with vertical dividers from sm up. Padded to 4 so a case
          study with only 3 stats keeps an empty slot (columns stay aligned); no
          divider is drawn before an empty slot. */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-0">
        {[...stats, null, null, null, null].slice(0, 4).map((stat, i) => (
          <div
            key={stat ? stat.label : `empty-${i}`}
            className={`sm:px-6 ${i === 0 ? "sm:pl-0" : ""} ${
              i > 0 && stat ? "sm:border-l sm:border-ink/10" : ""
            }`}
          >
            {stat && (
              <>
                <div className="font-display text-xl font-semibold text-ink sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-tight text-ink-faint sm:text-sm">
                  {stat.label}
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* macOS-window screenshot — fixed 1224:436 thumbnail ratio (per Figma),
          anchored to the top so the bottom of the screenshot is clipped */}
      <BrowserFrame url={urlBar} className="mt-2">
        <div className="group relative aspect-[1224/436] w-full overflow-hidden">
          <img src={image} alt="" className="h-full w-full object-cover object-top" />
          {linkTo && (
            <>
              {/* dim the screenshot on hover */}
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
              {/* "View case study" pill, fades in on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-green bg-white px-6 py-3 text-base font-medium text-brand-green shadow-lg">
                  View case study
                  <FiArrowRight className="h-4 w-4" />
                </span>
              </div>
            </>
          )}
        </div>
      </BrowserFrame>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="flex flex-col gap-6">
        {inner}
      </Link>
    );
  }

  return <article className="flex flex-col gap-6">{inner}</article>;
};

export default Card;
