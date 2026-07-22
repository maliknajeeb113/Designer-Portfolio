import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaBehance, FaInstagram } from "react-icons/fa6";
import Container from "./Container";
import HandDrawnGrid from "./HandDrawnGrid";

const RESUME_URL =
  "https://drive.google.com/file/d/1B_9Bz25SG9cIbWIgQFeeLjLua008NC84/view?usp=drive_link";

const socials = [
  { icon: FiMail, href: "mailto:avni.garg.in@gmail.com", label: "Email" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/garg-avni/", label: "LinkedIn" },
  { icon: FaBehance, href: "https://www.behance.net/avniigarg", label: "Behance" },
  { icon: FaInstagram, href: "https://www.instagram.com/avnigarg.ux/", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-brand-green-deep font-sans text-white">
      {/* subtle tone-on-tone grid (static, same look as the hero) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <HandDrawnGrid cellSize={100} wobble={3} color="#ffffff" className="h-full w-full" />
      </div>

      <Container className="relative flex flex-col items-center gap-8 py-24 text-center sm:py-32">
        <h2 className="font-display text-5xl font-medium sm:text-7xl">
          Let&rsquo;s <span className="text-brand-pink">work</span> together!!
        </h2>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
        >
          Resume
          <FiArrowUpRight className="h-4 w-4" />
        </a>
      </Container>

      <Container className="relative flex items-center justify-between py-6 text-sm text-white/70">
        <span>design&amp;build by Avnigarg</span>
        <div className="flex items-center gap-5">
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
