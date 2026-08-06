import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";
import { RESUME_URL, SOCIALS } from "../config/site";

const socials = [
  { icon: FiMail, href: SOCIALS.email, label: "Email" },
  { icon: FaLinkedinIn, href: SOCIALS.linkedin, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand-green-deep font-sans text-white">
      {/* subtle tone-on-tone grid (static, same look as the hero) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <HandDrawnGrid cellSize={60} wobble={3} color="#ffffff" className="h-full w-full" />
      </div>

      <Container className="relative flex flex-col items-center gap-12 py-24 text-center sm:py-32">
        <h2 className="font-display text-5xl font-medium sm:text-8xl">
          Let&rsquo;s <span className="text-brand-pink">work</span> together!!
        </h2>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-4 rounded-full bg-white py-2 pl-8 pr-3 text-lg font-medium text-brand-pink transition-transform duration-300 hover:scale-[1.03]"
        >
          Resume
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-pink-light">
            <FiArrowUpRight className="h-5 w-5" />
          </span>
        </a>
      </Container>

      <Container className="relative flex items-center justify-between pb-10 text-sm text-white/70">
        <span>Designed by Avni Garg</span>
        <div className="flex items-center gap-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition-colors hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
