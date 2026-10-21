import SocialLinks from "./SocialLinks";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Firm name */}
        <div className="flex flex-col items-center md:items-start">
          <span
            className="text-white text-lg font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Paytec Online
          </span>
          <span className="text-white/50 text-xs tracking-widest uppercase mt-1">
            Payroll &amp; Pensions · Est. 2005
          </span>
          <SocialLinks
            className="mt-3"
            linkClassName="text-white/50 hover:text-white transition-colors duration-200"
          />
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-xs text-white/40 text-center md:text-right">
            &copy; {new Date().getFullYear()} Paytec Online. All rights reserved.
          </p>
          <p className="text-xs text-white/30 text-center md:text-right">
            Website by{" "}
            <a
              href="https://williamdoyle.co.uk/"
              target="_blank"
              rel="author noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors duration-200 underline underline-offset-2"
            >
              William E. Doyle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
