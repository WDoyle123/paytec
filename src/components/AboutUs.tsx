import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Established in 2005",
  "Specialists in payroll and the construction industry",
  "HMRC RTI-compliant online filing",
  "A personal service by phone or email",
];

const stats = [
  { value: "2005", label: "Established" },
  { value: "RTI", label: "Real Time Information" },
  { value: "CIS", label: "Construction Specialists" },
  { value: "UK", label: "Wide Coverage" },
];

const statVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Stats */}
          <motion.div
            variants={statVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 order-2 lg:order-1"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={statCardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`rounded-2xl p-8 aspect-square flex flex-col justify-end shadow-sm ${
                  i === 0 || i === 3
                    ? "bg-brand-dark text-white"
                    : "bg-mist border border-mist-dark text-brand-dark"
                }`}
              >
                <p
                  className="text-4xl md:text-5xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </p>
                <p
                  className={`text-sm mt-1 ${
                    i === 0 || i === 3 ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              delay: 0.15,
            }}
            className="order-1 lg:order-2"
          >
            <p className="text-brand text-xs tracking-[0.25em] uppercase font-medium mb-3">
              Who We Are
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Payroll Specialists You Can Rely On
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Paytec Online has been managing payroll and pensions for UK
              businesses since 2005. We take the time-consuming, detail-heavy
              work of running payroll off your hands.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              From a handful of employees to a busy construction firm with
              subcontractors, we keep your payroll accurate, compliant and on
              time.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle
                    size={18}
                    className="text-brand mt-0.5 shrink-0"
                  />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-flex items-center mt-10 px-7 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Work With Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
