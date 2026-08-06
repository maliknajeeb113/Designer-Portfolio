import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  /** Spacing only (e.g. "mt-10"). Colour is set via `tone`, never here. */
  className?: string;
  /** "faint" is the section default; "ink" is the emphasised variant. */
  tone?: "faint" | "ink";
}

// The small uppercase label that introduces a section ("Problem", "Research",
// "Action plan"). This class string was repeated 38 times across the pages;
// change it here to change every section label at once.
//
// `tone` is a prop rather than something callers pass through `className`
// because two competing `text-*` colour utilities would be resolved by CSS
// source order, not by attribute order — i.e. the override would be a coin flip.
const Eyebrow = ({ children, className = "", tone = "faint" }: EyebrowProps) => (
  <span
    className={`block text-xs font-medium uppercase tracking-[0.2em] ${
      tone === "ink" ? "text-ink" : "text-ink-faint"
    } ${className}`}
  >
    {children}
  </span>
);

export default Eyebrow;
