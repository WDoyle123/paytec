import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const headline = "Payroll & Pensions, Handled.";
const words = headline.split(" ");

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-brand-dark"
        style={{ y: bgY }}
      >
        {/* Subtle geometric overlay */}
        <div className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #406ab0 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #8fb3ec 0%, transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-brand-light text-xs md:text-sm uppercase tracking-[0.25em] font-medium mb-6"
        >
          UK Payroll Bureau &nbsp;·&nbsp; Est. 2005
        </motion.p>

        {/* Staggered headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-3 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0.01, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Managing payroll and pensions for businesses across the UK. Send us
          your hours and payments — we'll send back everything processed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-brand text-white font-semibold text-base hover:bg-brand-muted transition-all duration-200 shadow-lg hover:shadow-brand/30 hover:shadow-xl"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
          >
            Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
