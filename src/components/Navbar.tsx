import { Link, useLocation } from "react-router-dom";
import Container from "./Container";

// Resume link (opens the hosted PDF in a new tab). Same target used by the
// hero + footer "Resume" buttons.
const RESUME_URL =
  "https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link";

const navItems = [
  { label: "WORK", to: "/" },
  { label: "FUN", to: "/playground" },
  { label: "ABOUT", to: "/about" },
];

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm font-sans">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="font-display text-xl font-bold text-ink">
          Avni garg<span className="text-brand-green">.</span>
          <sup className="text-[0.5em] font-medium text-ink-faint">™</sup>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors sm:text-sm ${
                  active ? "bg-ink/[0.06] text-ink" : "text-ink-faint hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide text-ink-faint transition-colors hover:text-ink sm:text-sm"
          >
            RESUME
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
