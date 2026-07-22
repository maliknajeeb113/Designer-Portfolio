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
      className={`overflow-hidden rounded-xl border border-black/[0.08] bg-white shadow-window ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-black/[0.06] bg-[#f6f6f7] px-4 py-2.5 sm:px-5 sm:py-3">
        {/* traffic lights */}
        <div className="flex shrink-0 items-center gap-2">
          {trafficLights.map((color) => (
            <span key={color} className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>

        {/* nav arrows (desktop only) */}
        <div className="hidden shrink-0 items-center gap-1 text-ink-faint/70 sm:flex">
          <FiChevronLeft className="h-4 w-4" />
          <FiChevronRight className="h-4 w-4" />
        </div>

        {/* url bar */}
        <div className="mx-auto flex min-w-0 max-w-md flex-1 items-center justify-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-[11px] text-ink-faint ring-1 ring-black/[0.06] sm:text-xs">
          <FiLock className="h-3 w-3 shrink-0" />
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
