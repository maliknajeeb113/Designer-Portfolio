import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Spacing/colour overrides, e.g. "mt-10" or "text-ink". */
  className?: string;
}

// The small uppercase label that introduces a section ("Problem", "Research",
// "Action plan"). This exact class string was repeated ~38 times across the
// case-study pages; change the styling here to change it everywhere.
const Eyebrow = ({ children, className = "" }: EyebrowProps) => (
  <span
    className={`block text-xs font-medium uppercase tracking-[0.2em] text-ink-faint ${className}`}
  >
    {children}
  </span>
);

export default Eyebrow;
