import { ReactNode } from "react";
import { FiLock, FiPlus, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface BrowserFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

// Standard macOS traffic-light colors (system colors, not brand tokens).
const trafficLights = ["#FF5F57", "#FEBC2E", "#28C840"];

// A macOS-style browser window that wraps a case-study screenshot.
// The chrome (traffic lights, URL bar, rounded corners, border, shadow) is
// exact CSS; the screenshot itself is passed in as children.
const BrowserFrame = ({ url = "", children, className = "" }: BrowserFrameProps) => {
  return (
    <div
      className={`overflow-hidden rounded-[20px] border-[5px] border-[#F7F7F7] bg-white shadow-window sm:rounded-[32px] sm:border-[12px] ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white px-3 py-2 sm:gap-3 sm:px-5 sm:py-3">
        {/* traffic lights */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {trafficLights.map((color) => (
            <span
              key={color}
              className="h-2 w-2 rounded-full sm:h-3 sm:w-3"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* nav arrows (desktop only) */}
        <div className="hidden shrink-0 items-center gap-1 text-ink-faint/70 sm:flex">
          <FiChevronLeft className="h-4 w-4" />
          <FiChevronRight className="h-4 w-4" />
        </div>

        {/* url bar */}
        <div className="mx-auto flex min-w-0 max-w-md flex-1 items-center justify-center gap-1 rounded bg-white px-2 py-1 text-[10px] text-ink-faint ring-1 ring-black/[0.06] sm:gap-1.5 sm:rounded-md sm:px-3 sm:py-1.5 sm:text-xs">
          <FiLock className="h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3" />
          <span className="truncate">{url}</span>
        </div>

        {/* right-side icon */}
        <div className="hidden shrink-0 items-center text-ink-faint/70 sm:flex">
          <FiPlus className="h-4 w-4" />
        </div>
      </div>

      {/* screenshot / content */}
      {children}
    </div>
  );
};

export default BrowserFrame;
