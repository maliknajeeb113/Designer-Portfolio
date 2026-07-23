import type { ReactNode } from "react";

interface SectionHeadingProps {
  number: string; // e.g. "1" — rendered in green before the title
  title: ReactNode;
  className?: string;
}

// Numbered section heading used across the case-study pages ("1. Who, Why & What").
const SectionHeading = ({ number, title, className = "" }: SectionHeadingProps) => (
  <h2 className={`font-display text-3xl font-semibold text-brand-green sm:text-4xl ${className}`}>
    {number}. {title}
  </h2>
);

export default SectionHeading;
