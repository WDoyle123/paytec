import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => setScrolled(y > 40));
    return unsub;
  }, [scrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(11,26,74,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 grid grid-cols-3 items-center">
        {/* Logo — left col */}
        <a href="#home" className="flex items-center col-span-2 md:col-span-1 min-w-0">
          <span
            className="text-white font-bold tracking-tight truncate text-lg md:text-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Paytec Online
          </span>
        </a>

        {/* Desktop links — centre col */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand-light group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand text-white hover:bg-brand-muted transition-colors duration-200 justify-self-end"
        >
          Get in Touch
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 justify-self-end"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-brand-dark/95 backdrop-blur-md px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-white text-base font-medium block py-1 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand text-white hover:bg-brand-muted transition-colors"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default NavBar;

