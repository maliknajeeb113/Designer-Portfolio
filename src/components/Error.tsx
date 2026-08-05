import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";

// Full-screen 404 / route-error page. It's wired as the router's root
// `errorElement`, so it renders WITHOUT the app's Navbar/Footer — hence the
// self-contained brand wordmark and grid background (matching the hero).
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white font-sans">
      {/* hand-drawn grid background — same treatment as the hero */}
      <div className="absolute inset-0 z-0">
        <HandDrawnGrid cellSize={120} wobble={3} color="rgb(235,235,235)" className="h-full w-full" />
      </div>

      {/* brand wordmark, top-left */}
      <div className="relative z-10">
        <Container className="py-6">
          <Link to="/" className="font-display text-xl font-bold text-ink">
            Avni garg<span className="text-brand-green">.</span>
            <sup className="text-[0.5em] font-medium text-ink-faint">™</sup>
          </Link>
        </Container>
      </div>

      {/* centered content */}
      <div className="relative z-10 flex flex-1 items-center pb-16">
        <Container>
          <div className="flex flex-col items-start gap-10">
            {/* status pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-sm font-medium text-ink-faint">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-pink" />
              </span>
              404 — page not found
            </span>

            {/* headline */}
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              Looks like you wandered <br className="hidden sm:block" />
              <span className="font-script text-[1.15em] font-normal text-brand-green">off-road.</span>
            </h1>

            {/* body */}
            <p className="text-base text-ink-muted sm:text-lg">
              This page doesn&rsquo;t exist, or it moved somewhere else. Let&rsquo;s get you back to
              solid ground.
            </p>

            {/* back home */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <FiArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Error;
