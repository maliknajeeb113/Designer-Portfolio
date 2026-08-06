import { motion } from "framer-motion";
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

// Shared wrapper for every route: the <main> landmark and the fade-in that used
// to be copy-pasted into all six pages. Scroll position is handled once by
// <ScrollRestoration> in the App layout, so pages no longer need their own
// scroll-to-top effect either.
const PageShell = ({ children, className = "bg-white" }: PageShellProps) => (
  <motion.main
    className={`font-sans ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.main>
);

export default PageShell;
