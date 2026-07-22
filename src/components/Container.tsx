import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// Single source of truth for the page's horizontal rhythm. Side margins are
// intentionally small (the design wants content to feel wide, with minimal
// side gaps) — tweak the px-* values here to adjust every section at once.
const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
