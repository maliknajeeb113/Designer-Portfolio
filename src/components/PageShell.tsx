import type { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  /**
   * Page background + vertical padding. The caller owns these so Tailwind never
   * has to arbitrate between two competing `bg-*` utilities (source order, not
   * attribute order, decides the winner — so merging them here would be a bug).
   */
  className?: string;
}

// Shared wrapper for every route: the <main> landmark plus the page fade-in.
//
// The fade is a CSS animation, NOT framer-motion. Pages are prerendered, and a
// JS-driven `initial={{ opacity: 0 }}` shipped every static page as
// `<main style="opacity:0">` — the content was in the HTML but invisible until
// ~370KB of JS hydrated, which defeats the point of prerendering. CSS animates
// on first paint and leaves the resting opacity at 1.
//
// Scroll position is handled once by <ScrollRestoration> in the App layout.
const PageShell = ({ children, className = "bg-white" }: PageShellProps) => (
  <main className={`animate-fade-in font-sans ${className}`}>{children}</main>
);

export default PageShell;
