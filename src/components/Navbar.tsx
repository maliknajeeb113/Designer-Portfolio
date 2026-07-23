import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
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
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close the mobile menu when tapping/clicking anywhere outside the nav.
  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <nav ref={navRef} className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm font-sans">
      <Container className="flex items-center justify-between py-4">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-xl font-bold text-ink"
        >
          Avni garg<span className="text-brand-green">.</span>
          <sup className="text-[0.5em] font-medium text-ink-faint">™</sup>
        </Link>

        {/* desktop nav (inline pill row) */}
        <div className="hidden items-center gap-1 sm:flex sm:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-colors sm:text-sm ${
                pathname === item.to
                  ? "bg-brand-pink-light text-brand-pink"
                  : "text-ink-faint hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-xs font-medium tracking-wide text-ink-faint transition-colors hover:text-ink sm:text-sm"
          >
            RESUME
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-ink sm:hidden"
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </Container>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden sm:hidden"
          >
            <Container className="pb-4">
              <div className="flex flex-col gap-1 border-t border-ink/10 pt-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium tracking-wide transition-colors ${
                      pathname === item.to
                        ? "bg-brand-pink-light text-brand-pink"
                        : "text-ink-faint hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium tracking-wide text-ink-faint transition-colors hover:text-ink"
                >
                  RESUME
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
