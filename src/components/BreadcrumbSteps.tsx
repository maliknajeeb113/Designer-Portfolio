import { Fragment } from "react";
import { FiChevronsRight } from "react-icons/fi";

export interface BreadcrumbStep {
  num: string;
  label: string;
  text: string;
  /** Tailwind text colour for the step number, cycling the brand accents. */
  color: string;
}

const CONNECTOR =
  "flex items-center justify-center rounded-full bg-white p-1 shadow-[0px_0px_0px_1px_rgba(23,23,23,0.08),0px_1px_1px_-0.5px_rgba(23,23,23,0.04),0px_3px_3px_-1.5px_rgba(23,23,23,0.04)]";

// The "Action plan" breadcrumb: numbered cards joined by a >> badge, shared by
// all three case studies (it was duplicated in each page before this).
//
// Desktop is an N-column grid — ≤4 steps share one row, 5+ wrap into rows of 3
// (so 5 → 3 + 2) with every card the same width, so row 2 lines up under row 1.
// The connector sits on each card's right edge except at a row's end. Mobile
// always stacks and points the connector down between every pair.
const BreadcrumbSteps = ({ steps }: { steps: readonly BreadcrumbStep[] }) => {
  const cols = steps.length > 4 ? 3 : Math.max(steps.length, 1);

  return (
    <div
      className="mt-8 flex flex-col lg:grid lg:gap-x-4 lg:gap-y-4"
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {steps.map((step, i) => {
        const col = i % cols;
        const isLast = i === steps.length - 1;
        const isRowStart = col === 0;
        const isRowEnd = col === cols - 1 || isLast; // last in its desktop row
        const radius =
          isRowStart && isRowEnd
            ? "lg:rounded-[24px]"
            : isRowStart
              ? "lg:rounded-l-[24px] lg:rounded-r-[12px]"
              : isRowEnd
                ? "lg:rounded-l-[12px] lg:rounded-r-[24px]"
                : "lg:rounded-[12px]";

        return (
          <Fragment key={i}>
            <div
              className={`relative flex items-start gap-7 rounded-[16px] bg-ink/[0.04] p-7 ${radius}`}
            >
              <span className={`font-sans text-lg font-medium leading-7 sm:text-xl ${step.color}`}>
                {step.num}
              </span>
              <div className="w-px self-stretch bg-ink/10" />
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-6 text-ink-faint">{step.label}</p>
                <p className="font-sans text-lg leading-7 text-ink">{step.text}</p>
              </div>

              {/* desktop connector — centred in the 16px gap, so nudged +8px past
                  the right edge. Only when a card follows in the same row. */}
              {!isRowEnd && (
                <div
                  className={`absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-[calc(50%+8px)] lg:flex ${CONNECTOR}`}
                >
                  <FiChevronsRight className="h-5 w-5 text-ink-faint" />
                </div>
              )}
            </div>

            {/* mobile connector — in flow, between every pair */}
            {!isLast && (
              <div className={`relative z-10 -my-2 shrink-0 self-center lg:hidden ${CONNECTOR}`}>
                <FiChevronsRight className="h-5 w-5 rotate-90 text-ink-faint" />
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default BreadcrumbSteps;
